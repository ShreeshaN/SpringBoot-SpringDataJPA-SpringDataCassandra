package com.sample.cassandra.domain;

import org.springframework.cassandra.core.PrimaryKeyType;
import org.springframework.data.cassandra.mapping.Column;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.mapping.Table;

@Table( value = "biometric_param" )
public class BiometricParam {

	@PrimaryKeyColumn(name="user_id",ordinal=0,type=PrimaryKeyType.PARTITIONED)
	private Integer userId;

	@PrimaryKeyColumn(name="workout_uuid",ordinal=1,type=PrimaryKeyType.PARTITIONED)
	private String workoutUUID;

	@PrimaryKeyColumn(name="bio_param_key",ordinal=2,type=PrimaryKeyType.CLUSTERED)
	private String bioParamKey;

	@Column(value="bio_param_val")
	private Float bioParamValue;

	@PrimaryKeyColumn(name="processed_time",ordinal=3,type=PrimaryKeyType.CLUSTERED)
	private Long processedTime;

	@Column(value="system_time")
	private Long systemTime;

	public Integer getUserId()
	{
		return userId;
	}

	public void setUserId( Integer userId )
	{
		this.userId = userId;
	}

	public String getWorkoutUUID()
	{
		return workoutUUID;
	}

	public void setWorkoutUUID( String workoutUUID )
	{
		this.workoutUUID = workoutUUID;
	}

	public String getBioParamKey()
	{
		return bioParamKey;
	}

	public void setBioParamKey( String bioParamKey )
	{
		this.bioParamKey = bioParamKey;
	}

	public Float getBioParamValue()
	{
		return bioParamValue;
	}

	public void setBioParamValue( Float bioParamValue )
	{
		this.bioParamValue = bioParamValue;
	}

	public Long getProcessedTime()
	{
		return processedTime;
	}

	public void setProcessedTime( Long processedTime )
	{
		this.processedTime = processedTime;
	}

	public Long getSystemTime()
	{
		return systemTime;
	}

	public void setSystemTime( Long systemTime )
	{
		this.systemTime = systemTime;
	}

}
