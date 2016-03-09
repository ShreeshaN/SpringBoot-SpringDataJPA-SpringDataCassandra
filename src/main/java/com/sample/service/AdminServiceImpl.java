package com.sarvint.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;
import com.sarvint.domain.AdminLogin;
import com.sarvint.domain.LookupData;
import com.sarvint.domain.PacketData;
import com.sarvint.repositories.AdminLoginRepository;
import com.sarvint.repositories.LookupDataRepository;
import com.sarvint.repositories.PacketDataRepository;
import com.sarvint.service.intf.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminLoginRepository adminLoginRepo;

	@Autowired
	LookupDataRepository lookupDataRepo;
	
	@Autowired
	PacketDataRepository packetDataRepo;

	@Override
	public boolean executeLogin( String adminName, String password, HttpServletRequest request )
	{

		try
		{
			if( adminName == null || adminName.isEmpty() || password == null || password.isEmpty() )
			{
				return false;
			}
			HttpSession session = request.getSession(true);
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("adminName", adminName);
			map.put("password", password);
			List<AdminLogin> list = adminLoginRepo.findByNamedQueryAndParams("AdminLogin.getNameAndPassword", map);
			if( list.isEmpty() || list.size() <= 0 )
			{
				return false;
			}
			session.setAttribute("adminName", adminName);
			return true;
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}

	}

	@Override
	public boolean testSuite( HttpServletRequest request, HttpServletResponse response )
	{
		try
		{
			HttpSession session = request.getSession(false);
			if( session != null )
			{
				return true;
			}
			else
				return false;
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}

	}

	@Override
	public ModelAndView editLookups( HttpServletRequest request, HttpServletResponse response ) throws Exception
	{
		try
		{
			HttpSession session = request.getSession(false);
			if( session != null )
			{
				return new ModelAndView("lookup_edits");
			}
			else
				return new ModelAndView("login_error");
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}

	}

	@Override
	public ResponseEntity<String> saveLookupData( LookupData lookupData )
	{
		try
		{
			lookupDataRepo.save(lookupData);
			return new ResponseEntity<String>("successfully saved", HttpStatus.OK);
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}
	}

	@SuppressWarnings( "unchecked" )
	@Override
	public ResponseEntity<JSONObject> getNewLookups()
	{
		JSONObject mainObject = new JSONObject();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("LookupData", lookupDataRepo.findAll());
		mainObject.put("lookup", jsonObject);
		return new ResponseEntity<JSONObject>(mainObject, HttpStatus.OK);
	}

	@Override
	public ModelAndView editPacketData( HttpServletRequest request, HttpServletResponse response )
	{
		try
		{
			HttpSession session = request.getSession(false);
			if( session != null )
			{
				return new ModelAndView("edit_packetdata");
			}
			else
				return new ModelAndView("login_error");
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}
	}

	@SuppressWarnings( "unchecked" )
	@Override
	public ResponseEntity<JSONObject> getNewPacketData()
	{
		/*JSONObject jsonObject = new JSONObject();
		List<PacketData> list = (List<PacketData>) packetDataRepo.findAll();
		jsonObject.put("packetData", jsonObject);
		return new ResponseEntity<JSONObject>(jsonObject,HttpStatus.OK);*/
		List<PacketData> list = (List<PacketData>) packetDataRepo.findAll();
		JSONObject subJsonObject = null;
		JSONParser parser = new JSONParser();
		JSONArray jArray = new JSONArray();
		JSONObject mainJsonObject = new JSONObject();
		for( PacketData p : list )
		{
			subJsonObject = new JSONObject();
			subJsonObject.put("packetDataName", p.getPacketDataName());
			subJsonObject.put("packetDataId", p.getPacketDataId());
			try
			{
				subJsonObject.put("packetDataValue", parser.parse(p.getPacketDataValue()));
			}
			catch( ParseException e )
			{
				e.printStackTrace();
			}
			jArray.add(subJsonObject);
		}
		mainJsonObject.put("packetData", jArray);
		return new ResponseEntity<JSONObject>(mainJsonObject, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> saveNewPacketData( PacketData packetData )
	{
		try
		{
			packetDataRepo.save(packetData);
			return new ResponseEntity<String>("successfully saved", HttpStatus.OK);
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}
	}

}
