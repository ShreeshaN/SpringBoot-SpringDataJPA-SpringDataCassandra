package com.sarvint.service.intf;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.servlet.ModelAndView;
import com.sarvint.domain.LookupData;
import com.sarvint.domain.PacketData;

public interface AdminService {

	public boolean executeLogin( String username, String password, HttpServletRequest request );

	public boolean testSuite( HttpServletRequest request, HttpServletResponse response );

	public ModelAndView editLookups( HttpServletRequest request, HttpServletResponse response ) throws Exception;

	public ResponseEntity<String> saveLookupData( LookupData lookupData );

	public ResponseEntity<JSONObject> getNewLookups();

	public ModelAndView editPacketData( HttpServletRequest request, HttpServletResponse response );

	public ResponseEntity<JSONObject> getNewPacketData();

	public ResponseEntity<String> saveNewPacketData( PacketData packetData );

}
