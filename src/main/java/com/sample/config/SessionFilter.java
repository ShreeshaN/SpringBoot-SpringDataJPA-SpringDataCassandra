package com.sarvint.config;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SessionFilter implements Filter {
	
	
    private static final Logger LOG = LoggerFactory.getLogger(SessionFilter.class);


	private List<String> urlList;

	@Override
	public void destroy()
	{
	}

	@Override
	public void doFilter( ServletRequest req, ServletResponse res, FilterChain chain )
			throws IOException, ServletException
	{
		HttpServletRequest httpRequest = (HttpServletRequest) req;
		HttpServletResponse httpResponse = (HttpServletResponse) res;
		String url = httpRequest.getServletPath();
		boolean allowedRequest = false;
		LOG.info("Request Path is --->"+url);
		for( String exemptUrl : urlList )
		{

			if( url.contains(exemptUrl) )
			{
				allowedRequest = true;
				break;
			}
		}

		if( !allowedRequest )
		{
			HttpSession session = httpRequest.getSession(false);
			if( null == session )
			{
				httpResponse.sendError(401, "Session expired");
				return;
			}
		}
		chain.doFilter(req, res);
	}

	@Override
	public void init( FilterConfig filterConfig ) throws ServletException
	{
		String urls = filterConfig.getInitParameter("avoid-urls");
		StringTokenizer token = new StringTokenizer(urls, ",");
		urlList = new ArrayList<String>();
		while( token.hasMoreTokens() )
		{
			urlList.add(token.nextToken());
		}
	}
}
