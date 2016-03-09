package com.sarvint.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import javax.persistence.Table;

@Entity
@Table(name="admin_login")
@NamedNativeQueries( {
	@NamedNativeQuery( name = "AdminLogin.getNameAndPassword", query = "select * from admin_login where ac_admin_name= :adminName and ac_password= :password ", resultClass = AdminLogin.class )
})
public class AdminLogin {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ac_id")
	private Integer adminId;
	
	@Column(name="ac_admin_name")
	private String adminName;
	
	@Column(name="ac_password")
	private String password;

	
	public Integer getAdminId()
	{
		return adminId;
	}

	
	public void setAdminId( Integer adminId )
	{
		this.adminId = adminId;
	}

	
	public String getAdminName()
	{
		return adminName;
	}

	
	public void setAdminName( String adminName )
	{
		this.adminName = adminName;
	}

	
	public String getPassword()
	{
		return password;
	}

	
	public void setPassword( String password )
	{
		this.password = password;
	}
	

}
