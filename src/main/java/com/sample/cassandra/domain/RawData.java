package com.sample.cassandra.domain;

import java.util.List;
import org.springframework.cassandra.core.Ordering;
import org.springframework.cassandra.core.PrimaryKeyType;
import org.springframework.data.cassandra.mapping.Column;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.mapping.Table;

@Table( value = "raw_data" )
public class RawData {

	@PrimaryKeyColumn( name = "user_id", type = PrimaryKeyType.PARTITIONED, ordinal = 0 )
	private Integer userId;

	@PrimaryKeyColumn( name = "workout_uuid", type = PrimaryKeyType.PARTITIONED, ordinal = 1 )
	private String workoutUUID;

	@PrimaryKeyColumn( name = "start_time", ordinal = 2, type = PrimaryKeyType.CLUSTERED ,ordering=Ordering.DESCENDING)
	private Long startTime;

	@Column(value="end_time")
	private Long endTime;

	@Column(value="param_x")
	private Integer paramX;

	@Column(value="param_len")
	private Integer paramLen;

	@Column(value="param_val")
	private List<Float> paramVal;

	@PrimaryKeyColumn( name = "event_name", type = PrimaryKeyType.PARTITIONED, ordinal = 2 )
	private String eventName;

	@Column(value="system_time")
	private Integer systemTime;

	@PrimaryKeyColumn( name = "event_decoded_time", type = PrimaryKeyType.CLUSTERED, ordinal = 2 )
	private Long eventDecodedTime;
	
	public RawData()
	{

	}

	
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

	
	public Long getStartTime()
	{
		return startTime;
	}

	
	public void setStartTime( Long startTime )
	{
		this.startTime = startTime;
	}

	
	public Long getEndTime()
	{
		return endTime;
	}

	
	public void setEndTime( Long endTime )
	{
		this.endTime = endTime;
	}

	
	public Integer getParamX()
	{
		return paramX;
	}

	
	public void setParamX( Integer paramX )
	{
		this.paramX = paramX;
	}

	
	public Integer getParamLen()
	{
		return paramLen;
	}

	
	public void setParamLen( Integer paramLen )
	{
		this.paramLen = paramLen;
	}

	
	public List<Float> getParamVal()
	{
		return paramVal;
	}

	
	public void setParamVal( List<Float> paramVal )
	{
		this.paramVal = paramVal;
	}

	
	public String getEventName()
	{
		return eventName;
	}

	
	public void setEventName( String eventName )
	{
		this.eventName = eventName;
	}

	
	public Integer getSystemTime()
	{
		return systemTime;
	}

	
	public void setSystemTime( Integer systemTime )
	{
		this.systemTime = systemTime;
	}


	
	public Long getEventDecodedTime()
	{
		return eventDecodedTime;
	}


	
	public void setEventDecodedTime( Long eventDecodedTime )
	{
		this.eventDecodedTime = eventDecodedTime;
	}



}
