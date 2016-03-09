package com.sarvint.rest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import com.sarvint.domain.LookupData;
import com.sarvint.domain.PacketData;
import com.sarvint.service.intf.AdminService;

@Controller
public class AdminController {

	@Autowired
	AdminService aService;

	/*@RequestMapping( value = "/", method = RequestMethod.GET )
	public String displayLogin( Model map, HttpServletRequest request )
	{
		HttpSession session = request.getSession(false);
		if( session != null )
		{
			if( session.getAttribute("adminName") != null )
				return "welcome";
		}
		return "index";
	}*/

	@RequestMapping( value = "/login", method = RequestMethod.POST )
	public ModelAndView executeLogin( @RequestParam( "username" ) String username,
			@RequestParam( "password" ) String password, HttpServletRequest request)
	{
		try
		{
			if( aService.executeLogin(username, password, request) )
			{
				return new ModelAndView("welcome");
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

	@RequestMapping( value = "/testSuite", method = RequestMethod.GET )
	public ModelAndView testSuite( HttpServletRequest request, HttpServletResponse response ) throws Exception
	{
		try
		{
			if( !(aService.testSuite(request, response)) )
			{
				response.sendError(401, "Session expired");
			}
			return new ModelAndView("test_suite");
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}
	}

	@RequestMapping( value = "/editLookup", method = RequestMethod.GET )
	public ModelAndView editLookup( HttpServletRequest request, HttpServletResponse response ) throws Exception
	{
		try
		{
			return aService.editLookups(request, response);
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}
	}
	
	@RequestMapping( value = "/editPacketData", method = RequestMethod.GET )
	public ModelAndView editPcketData( HttpServletRequest request, HttpServletResponse response ) throws Exception
	{
		try
		{
			return aService.editPacketData(request, response);
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}
	}
	
	@RequestMapping( value = "/getNewPacketData", method = RequestMethod.GET )
	public ResponseEntity<JSONObject> getNewPacketData() throws Exception
	{
		try
		{
			return aService.getNewPacketData();
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}
	}
	
	@RequestMapping( value = "/saveNewPacketData", method = RequestMethod.POST )
	public ResponseEntity<String> saveNewPacketData( @RequestBody PacketData packetData ) throws Exception
	{
		try
		{
			return aService.saveNewPacketData(packetData);
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}
	}

	
	@RequestMapping( value = "/getNewLookup", method = RequestMethod.GET )
	public ResponseEntity<JSONObject> getNewLookup() throws Exception
	{
		try
		{
			return aService.getNewLookups();
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}
	}

	@RequestMapping( value = "/saveLookupData", method = RequestMethod.POST )
	public ResponseEntity<String> saveLookupData( @RequestBody LookupData lookupData ) throws Exception
	{
		try
		{
			return aService.saveLookupData(lookupData);
		}
		catch( Exception e )
		{
			e.printStackTrace();
			throw e;
		}
	}
	
}
