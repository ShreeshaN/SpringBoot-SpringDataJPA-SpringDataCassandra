
/*
 *Author-Subbu
 */
/*
 *Note:
 *Factory is set of related functions
 */
/*
 *NumQ is a custom Queue which holds numbers
 *findMax is a boolean which specifies to calculate max value in queue or not 
 */
//-------------------------------start script 1-------------------------------------
function NumQ(findMax) {
    // initialise the queue and offset
    this._queue = [];
    this._offset = 0;
    this._sum = 0; //sum of all the values in queue
    this._max = 0;
    this._findMax = findMax;
}

NumQ.prototype.getSize = function() {
    // Returns the length of the queue.
    return (this._queue.length - this._offset);
}

/* Enqueues the specified item. The parameter is:
 *
 * item - the item to enqueue
 */
NumQ.prototype.enqueue = function(item) {
    this._queue.push(item);
    //increase sum
    this._sum += item;
    if (this._findMax && item > this._max)
        this._max = item;
}

/* Dequeues an item and returns it. If the queue is empty, the value
 * 'undefined' is returned.
 */
NumQ.prototype.dequeue = function() {

    // if the queue is empty, return immediately
    if (this._queue.length == 0) return null;

    // store the item at the front of the queue
    var item = this._queue[this._offset];
    this._queue[this._offset] = null;

    //decrease sum
    this._sum -= item;


    // increment the offset and remove the free space if necessary
    if (++this._offset * 2 >= this._queue.length) {
        this._queue = this._queue.slice(this._offset);
        this._offset = 0;
    }

    if (this._findMax && item == this._max) {
        for (var i = 0; i < this._queue.length; i++) {
            if (this._queue[i] != null && this._queue[i] > this._max)
                this._max = this._queue[i];
        }
    }
    // return the dequeued item
    return item;
}
NumQ.prototype.getMax = function() {
    return this._max;
};
NumQ.prototype.getSum = function() {
    return this._sum;
};

//-------------------------------start script 2-------------------------------------
//main object to encapsulate all the functions and variables
var sarvint = {};
//main object to encapsulate all the constants
var constants = {};
//workout start time
sarvint.workOutStartTime = new Date().getTime();
//workout end time
sarvint.workOutEndTime = null;

/*
 *function name:-declareConstants
 *This is a self initiating function where all the constants are defined
 */ 

(function declareConstants() {
	//constants
	constants.male="M";
	constants.female="F";
    //event names to code
    constants.eventName = {};
    constants.eventName.ecgHeartRate = 7; //ecg_heart_rate
    constants.eventName.impRespiratoryRate = 13; //imp_respiratory_rate
    constants.eventName.stepCount = 23;//step_count
    constants.eventName.skinConductance = 20;//skin_cond
    constants.eventName.ecgInspExpTime = 5;//ecg_inspiratory_expiratory_time
    constants.eventName.accelerationRaw = 21;//acceleration_raw
    constants.eventName.strokeVolume = 11;//stroke_volume
    constants.eventName.gpsParsed = 27;//gps_parsed
    constants.eventName.bodyTemperature = 24;//body_temp
    constants.eventName.smegStrength = 18;//semg_strength
    constants.eventName.inspExpTime	=14;//inspiratory_expiratory_time 
    constants.eventName.tidalVolume	=15;//tidal_volume
    //biometric parameters result names
    constants.bioParam = {};
    constants.bioParam.ecgHeartRate = "ECGHR";
    constants.bioParam.averageHeartRate = "AVGHR"; //peak heart rate
    constants.bioParam.percentageHeartRate = "PERHR";
    constants.bioParam.restHeartRate = "RESTHR";
    constants.bioParam.immediateHrRecovery = "IHRR";
    constants.bioParam.impRespiratoryRate = "IMPRR"; //Impedance Respiratory  Rate
    constants.bioParam.caloriesBurned = "CALORIE";
    constants.bioParam.stepCount = "STEP_COUNT";
    constants.bioParam.hydration = "HYDRATION";
    constants.bioParam.aerobicCapacity = "AERCAP";
    constants.bioParam.asthmaAlert = "ASTALE";
    constants.bioParam.accelerationMagnitude = "ACCMAG";
    constants.bioParam.force = "FORCE";
    constants.bioParam.strokeVolume = "SVOL";
    constants.bioParam.distance = "DISTANCE";
    constants.bioParam.temperature = "TEMPERATURE";
    constants.bioParam.percentVo2Max = "PER_VO2_MAX";
    constants.bioParam.strength = "STRENGTH";
    constants.bioParam.leftChest = "SEMG_L_CHEST";
    constants.bioParam.rightChest = "SEMG_R_CHEST";
    constants.bioParam.lowerCore = "SEMG_L_CORE";
    constants.bioParam.upperCore = "SEMG_U_CORE";
    constants.bioParam.leftShoulder = "SEMG_L_SHOULDER";
    constants.bioParam.rightShoulder = "SEMG_R_SHOULDER";
    constants.bioParam.leftBack = "SEMG_L_BACK";
    constants.bioParam.rightBack = "SEMG_R_BACK";
    constants.bioParam.leftBicep = "SEMG_L_BICEP";
    constants.bioParam.rightBicep = "SEMG_R_BICEP";
    constants.bioParam.leftTricep = "SEMG_L_TRICEP";
    constants.bioParam.rightTricep = "SEMG_R_TRICEP";
    constants.bioParam.work = "WORK";
    constants.bioParam.speed = "SPEED";
    constants.bioParam.baseSkinContradiction = "BASESC";
    constants.bioParam.impInspExpRatio="IMP_INSP_EXP_RATIO";	
    constants.bioParam.respiratoryPerformance="RESP_PERFORMANCE";
    constants.bioParam.quickness="QUICKNESS";
    constants.bioParam.tidalVolume="TIDAL_VOLUME";
    constants.bioParam.excitement="EXCITEMENT";
    constants.bioParam.forceMean="FORCE_MEAN";
    constants.bioParam.forceMax="FORCE_MAX";
    constants.bioParam.forceTotal="FORCE_TOTAL";
    constants.bioParam.workMean="WORK_MEAN";
    constants.bioParam.workMax="WORK_MAX";
    constants.bioParam.workTotal="WORK_TOTAL";
    constants.bioParam.powerMean="POWER_MEAN";
    constants.bioParam.powerMax="POWER_MAX";
    constants.bioParam.peakHr="PEAKHR";
    constants.bioParam.cardiacPerformance="CARDIAC_PERFORMANCE";
    constants.bioParam.sdnnHrv="SDNN_HRV";
    constants.bioParam.chronotropic="CHRONOTROPIC_INDEX";
    constants.bioParam.aerobicFitness="AEROBIC_FITNESS";
    constants.bioParam.restingEmg="RESTING_EMG";
    //colour codes
    constants.color = {};
    constants.color.red = "EE3532";
    constants.color.yellow = "FCB129";
    constants.color.green = "ADD136";
    constants.color.blue = "47A2DA";
    constants.color.gray = "AFAFB0";

    //colour levels to biometric parameters
    //where l is level i.e. l1 is level 1
    constants.colorZone = {};
    //% heart rate color zones
    constants.colorZone.heartRate = {}
    constants.colorZone.heartRate.l1 = 90;
    constants.colorZone.heartRate.l2 = 80;
    constants.colorZone.heartRate.l3 = 70;
    constants.colorZone.heartRate.l4 = 60;
    constants.colorZone.heartRate.l5 = 50;
    //% vo2max color zones
    constants.colorZone.vo2max = {}
    constants.colorZone.vo2max.l1 = 83;
    constants.colorZone.vo2max.l2 = 67;
    constants.colorZone.vo2max.l3 = 52;
    constants.colorZone.vo2max.l4 = 36;
    constants.colorZone.vo2max.l5 = 20;
    //% respiratory rate color zones
    constants.colorZone.respiratory = {}
    constants.colorZone.respiratory.l1 = 70;
    constants.colorZone.respiratory.l2 = 40;
    constants.colorZone.respiratory.l3 = 16;
    constants.colorZone.respiratory.l4 = 0;
    //% calories burned color zones
    constants.colorZone.calorie = {}
    constants.colorZone.calorie.l1 = 100;
    constants.colorZone.calorie.l2 = 99;
    constants.colorZone.calorie.l3 = 50;
    constants.colorZone.calorie.l4 = 0;
    //% distance color zones
    constants.colorZone.distance = {}
    constants.colorZone.distance.l1 = 100;
    constants.colorZone.distance.l2 = 99;
    constants.colorZone.distance.l3 = 50;
    constants.colorZone.distance.l4 = 0;
    //steps color zones
    constants.colorZone.steps = {}
    constants.colorZone.steps.l1 = 100;
    constants.colorZone.steps.l2 = 99;
    constants.colorZone.steps.l3 = 50;
    constants.colorZone.steps.l4 = 0;
    //Hydration color zones
    constants.colorZone.hydration = {}
    constants.colorZone.hydration.l1 = 100;
    constants.colorZone.hydration.l2 = 95;
    constants.colorZone.hydration.l3 = 90;

    //%Strength color zones
    constants.colorZone.strength = {}
    constants.colorZone.strength.l1 = 67;
    constants.colorZone.strength.l2 = 34;
    constants.colorZone.strength.l3 = 0;
    //Temperature color zones
    constants.colorZone.temperature = {}
    constants.colorZone.temperature.l1 = 39;
    constants.colorZone.temperature.l2 = 37;
    constants.colorZone.temperature.l3 = 30;

    //muscel group map
    constants.muscleGroupMap = {};
    constants.muscleGroupMap[1] = constants.bioParam.leftChest;
    constants.muscleGroupMap[2] = constants.bioParam.rightChest;
    constants.muscleGroupMap[3] = constants.bioParam.lowerCore;
    constants.muscleGroupMap[4] = constants.bioParam.upperCore;
    constants.muscleGroupMap[5] = constants.bioParam.leftShoulder;
    constants.muscleGroupMap[6] = constants.bioParam.rightShoulder;
    constants.muscleGroupMap[7] = constants.bioParam.leftBack;
    constants.muscleGroupMap[8] = constants.bioParam.rightBack;
    constants.muscleGroupMap[9] = constants.bioParam.leftBicep;
    constants.muscleGroupMap[10] = constants.bioParam.rightBicep;
    constants.muscleGroupMap[11] = constants.bioParam.leftTricep;
    constants.muscleGroupMap[12] = constants.bioParam.rightTricep;

    //coefficient strings
    constants.coefficient = {};
    constants.coefficient.maxHrBufSize = "max_hr_buf_size";
    constants.coefficient.hrClearBufInterval = "hr_clear_buf_interval";
    constants.coefficient.chrMax1 = "CHRMax1";
    constants.coefficient.chrMax2 = "CHRMax2";
    constants.coefficient.ac1 = "AC1";
    constants.coefficient.range = "RANGE";
    constants.coefficient.g = "G";
    constants.coefficient.q = "Q";
    constants.coefficient.poundsToKg = "pounds_to_kg";
    constants.coefficient.svCoefficient = "sv_coefficient";
    constants.coefficient.kToMeterPerSec = "knots_to_meters_per_sec";
    constants.coefficient.rp1 ="RP1";
    constants.coefficient.rp2 ="RP2";
    constants.coefficient.tvCoefficient="tv_coefficient";
    
    //constants lookup index
    constants.lookupindex={};
    constants.lookupindex.respiratoryPerformance="respiratory_performance";
    constants.lookupindex.aerobicCapacity="aerobic_capacity";
    constants.lookupindex.cardiacPerformance="cardiac_performance";
    constants.lookupindex.hydration="hydration";
    constants.lookupindex.chronotropic="chronotropic_index";
    constants.lookupindex.aerobicFitness="aerobic_fitness";
    constants.lookupindex.excitement="excitement";
})();

//-------------------------------start script 3-------------------------------------
/*
 *function name:-init
 *init will be called onload of app
 *all the constants will be loaded from SSNativeCalculationJSLib
 *SSNativeCalculationJSLib is a custom bridge to call IOS functions from Javascript 
 */

function init() {
    //get user profile
    var userProfile = SSNativeCalculationJSLib.getUserProfile();
    //set user data to data store	
    ALF.jds.setUserData({
        height: userProfile.height, //inches
        weight: userProfile.weight, //pounds
        age: userProfile.age,
        gender: userProfile.gender //M or F
    });
    //get coefficient data from SSNativeCalculationJSLib	
    var coefficientData = JSON.parse(SSNativeCalculationJSLib.getLookUpJSON());

    for (var i = 0; i < coefficientData.length; i++) {
        ALF.jds.setCoefficientData(coefficientData[i].coefficientKey, coefficientData[i].coefficientValue);
    }
    //temp values which will be removed after implementation
    sarvint.sharedResultMap[constants.bioParam.restHeartRate] = 100;
    sarvint.sharedResultMap[constants.bioParam.baseSkinContradiction] = 100;
    sarvint.sharedResultMap[constants.bioParam.sdnnHrv] = 100;
    sarvint.sharedResultMap[constants.bioParam.restingEmg] = 100;

    //Assessments for each Biometric id
    loadLookupAssessment();
    
};
/*
 *function name:-loadLookupAssessment
 *This function on start of app
 *input params  ex
 *	{
 *		"lookupDataId": 322,
 *		"biometricParameter": "Chronotropic_Index",
 *		"biometricParameterId": "chronotropic_index",
 *		"parameter": "Peak_HR",
 *		"parameterId": "parameter_0",
 *		"upperBound": 300.0,
 *		"lowerBound": 0.0,
 *		"sarvintWeight": 10.0,
 *		"userWeight": 10.0,
 *		"isActive": 1,
 *		"baseline": 50
 *	}
 *   Map where bio metric parameter is key
 *
 */
function loadLookupAssessment(){
	 var lookupAssessmentArr = JSON.parse(SSNativeCalculationJSLib.getLookupAssessment());
	 sarvint.lookupAssessment={}; 
	 for(var i=0 ;i<lookupAssessmentArr.length;i++){
		 var assessment=lookupAssessmentArr[i];
		 if(sarvint.lookupAssessment[assessment.biometricParameterId]==null){
			 sarvint.lookupAssessment[assessment.biometricParameterId]=[];
		 }		
		 sarvint.lookupAssessment[assessment.biometricParameterId].push(assessment);
	 }
}
/*
 *function name:-processData
 *This function wil be called once event data is decoded from IOS
 *input params 
 *	eData={
 *		"eventCode":Number,//holds decode event codes
 *		"val":[], //holds the decoded value in an array
 *		"paramX":Number //holds decoded X parameter of an event
 *	      }
 *
 */
function processData(eData) {
    if (sarvint.workOutStartTime != null) {
        //when workout is started
        //call on event factory 
        ALF.oef.process(eData);
    } else {
        //implement logic to handle data when workout is not started 
        SSNativeCalculationJSLib.consoleLog("Workout not started");
    }
}

/*
 *function name:-startWorkout
 *This function will be called on start of workout from IOS
 *input params
 *	time  -- workout start timestamp	
 */
function startWorkout(time) {
    sarvint.workOutStartTime = time;
    sarvint.workOutEndTime = null;
}

/*
 *function name:-endWorkout
 *This function will be called on end of workout from IOS
 *input params
 *	time  -- workout end timestamp	
 */
function endWorkout(time) {
    sarvint.workOutStartTime = null;
    sarvint.workOutEndTime = time;
}

/*
 *function name:-clearBuffer
 *This function will be called every 5 seconds from IOS
 */
function clearBuffer() {
    if (sarvint.workOutStartTime != null)
        ALF.cbf.clearHeartRateBuffer();
}
//-------------------------------start script 4-------------------------------------
/*
 **function name:-helperFactory
 *This functions holds all the helper functions which will be used in the script
 */
sarvint.helperFactory = (function() {
    /*
     *This function checks if key is null
     *Input Params
     *	key -Type String
     *Returns
     *	Boolean	
     */
    var isNullorEmpty = function(key) {
        if (key === undefined)
            return true;
        else if (key === null)
            return true;
        else if (key.trim() == "")
            return true;
        else
            return false;
    };
    /*
     *This function generates a random integer
     *Input Params
     *	minimum, maximum -Type Numbers
     *Returns
     *	Number 	
     */
    var getRandomInt = function(minimum, maximum) {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    };
    /*
     *This function returns current time
     *Returns
     *	Number 	-current timestamp
     */
    var getCurrentTime = function() {
            return new Date()
                .getTime();
        }
        /*
         *This function calculates distance in meters
         *Input Params
         *	lat1, lat2, lon1, lon2 -Type Numbers
         *	lat1, lon1 are previous  latitude and longitude respectively
         *	lat2, lon2 are current  latitude and longitude respectively
         *Returns
         *	Number 	-distance in meters
         */
    var getDistanceInMeters = function(lat1, lat2, lon1, lon2) {
        //formula is taken from Computation Algorithms https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1 
        var latMid, m_per_deg_lat, m_per_deg_lon, deltaLat, deltaLon, dist_m;
        latMid = (lat1 + lat2) / 2.0;
        m_per_deg_lat = 111132.954 - 559.822 * Math.cos(2.0 * latMid) + 1.175 * Math.cos(4.0 * latMid);
        m_per_deg_lon = (3.14159265359 / 180) * 6367449 * Math.cos(latMid);
        deltaLat = Math.abs(lat1 - lat2);
        deltaLon = Math.abs(lon1 - lon2);
        dist_m = Math.sqrt(Math.pow(deltaLat * m_per_deg_lat, 2) + Math.pow(deltaLon * m_per_deg_lon, 2));
        return dist_m;

    }
    return {
        isNullorEmpty: isNullorEmpty,
        getRandomInt: getRandomInt,
        getCurrentTime: getCurrentTime,
        getDistanceInMeters:getDistanceInMeters
    }
})();

//-------------------------------start script 5-------------------------------------
/*
 *function name:-dataStore
 *This function defines all the variables which will be stored in memory oveer the workout time
 *This will be a singleton instance
 */
sarvint.dataStore = function() {
        //to store user profile data
        this.userData = {
            height: null,
            weight: null,
            age: null,
            gender: null
        };
        //to store coefficient data
        this.coefficientMap = {};
        //to store total step count
        this.stepCount = 0;
        //to store gps data
        this.gpsData = {
            prevlat: null,
            prevlon: null,
            lat: null,
            lon: null
        }
        this.strength = {
                sum : 0,
                totalStrengthPackets : 0
            }
        this.strokeVolume = {
                sum : 0,
                totalPackets : 0
            }
            //to store total distance covered
        this.distance = 0;
        //to store smeg_strength_max_peak
        this.smeg_strength_max_peak = 1;
        //for calories burned
        this.caloriesBurned=0;
        //previous acc magnitude data
        this.prevAccMagnitude=null;
        //for Quickness used in Acceleration calculation
        this.accDiffSum=0;
        //for Quickness used in Acceleration calculation
        this.accDiffBufferCount=0;
        
        
    }
    /*
     *function name:-jsDataStoreFactory
     *This function creates instance of data stote which will be a singleton object
     *This will have all the setter,getter and update functions for all the data store variables
     */
sarvint.jsDataStoreFactory = (function() {
    //create data store object with alias DS which will be singleton
    var DS = new sarvint.dataStore();

    //create getters , setters and update functions
    var setUserData = function(data) {
        DS.userData = data;
    };
    var getUserData = function() {
        return DS.userData;
    };
    var getCoefficientData = function(key) {
        return DS.coefficientMap[key];
    };
    var setCoefficientData = function(key, value) {
        DS.coefficientMap[key] = value;
    };
    var updateStepCount = function(sc) {
        //sc is relative step count
        DS.stepCount += sc;
        return DS.stepCount
    };
  
    var getGpsData = function() {
        return DS.gpsData;
    }
    var setGpsData = function(data) {
        DS.gpsData = data;
    }
    var updateDistance = function(data) {
        DS.distance += data;
        return DS.distance;
    }
    var getSmegStrengthMaxPeak = function() {
        return DS.smeg_strength_max_peak;
    }
    var setSmegStrengthMaxPeak = function(data) {
        DS.smeg_strength_max_peak = data;
    }
    var getStrengthData = function() {
        return DS.strength;
    }
    var setStrengthData = function(data) {
        DS.strength = data;
    }
    var updateCalorieBurned = function(data) {
        DS.caloriesBurned += data;
        return DS.caloriesBurned;
    }
    var updateAccDiffSum = function(data) {
        DS.accDiffSum += data;
        DS.accDiffBufferCount++;
    }
    var getAccDiffSum = function(data) {
        return DS.accDiffSum ;
    }
    var getAccDiffBufferCount=function(){
   	 	return DS.accDiffBufferCount;
    }
    var setPrevAccMagnitude=function(data){
    	DS.prevAccMagnitude=data;
    }
    var getPrevAccMagnitude=function(data){
    	return DS.prevAccMagnitude;
    }
    var getStrokeVolumeData = function() {
        return DS.strokeVolume;
    }
    var setStrokeVolumeData = function(data) {
        DS.strokeVolume = data;
    }
    var getAvgStrokeVolume=function(){
    	if(DS.strokeVolume.totalPackets>0){
    		return DS.strokeVolume.sum/DS.strokeVolume.totalPackets;
    	}
    	return null;
    }
    return {
        setUserData: setUserData,
        getUserData: getUserData,
        updateStepCount: updateStepCount,
        getCoefficientData: getCoefficientData,
        setCoefficientData: setCoefficientData,
        getGpsData: getGpsData,
        setGpsData: setGpsData,
        updateDistance: updateDistance,
        getSmegStrengthMaxPeak: getSmegStrengthMaxPeak,
        setSmegStrengthMaxPeak: setSmegStrengthMaxPeak,
        getStrengthData: getStrengthData,
        setStrengthData: setStrengthData,
        updateCalorieBurned:updateCalorieBurned,
        updateAccDiffSum:updateAccDiffSum,
        getAccDiffSum:getAccDiffSum,
        getAccDiffBufferCount:getAccDiffBufferCount,
        setPrevAccMagnitude:setPrevAccMagnitude,
        getPrevAccMagnitude:getPrevAccMagnitude,
        getStrokeVolumeData:getStrokeVolumeData,
        setStrokeVolumeData:setStrokeVolumeData,
        getAvgStrokeVolume:getAvgStrokeVolume
    }
})();

//-------------------------------start script 6-------------------------------------
/*
 *object name:-sharedResultMap
 *This object is used to hold biometric parameters calculated values whcih will be used for other calculations
 */
sarvint.sharedResultMap = {};
/*
 *function name:-result
 *This function is called once the computation is done for a biometric parameter
 *Input params
 *	key, value, color
 *	where key is biometric parameters name defined as constant
 *	where value is floating point number 
 *	where color is calculated based on range defined in constants
 *setKeyValueColorTime which is a custom IOS function will be called to broadcast the biometric parameter values
 *Output params
 *	key, value, color, timestamp	
 *	where key is biometric parameters name defined as constant cannot be null
 *	where value is floating point number can be null,if null show "--" in UI and not save to DB
 *	where color is calculated based on range defined in constants can be null
 *	where timestamp is when the calculation was done
 */
sarvint.result = function(key, value, color) {
	if(!isNaN(value)){
	    this.key = key;
	    this.value = (value == null) ? null : parseFloat(value.toFixed(2)); //round to 2 decimal point
	    this.color = (color == undefined) ? null : color;
	    this.timestamp = new Date()
	        .getTime();
	    //call IOS to broadcast the values
	    SSNativeCalculationJSLib.setKeyValueColorTime(this.key, this.value, this.color, this.timestamp);
	}
}

sarvint.param = function(parameterId,value) {
	    this.parameterId = parameterId;
	    this.value = value;
}
//-------------------------------start script 7-------------------------------------

/*
 *function name:-heartRateStore
 *This function holds heart rate buffer required for heart rate calculation
 *An instance of thes function will be created in heartRateStoreFactory 
 */
sarvint.heartRateStore = function() {
    this.heartRateBuffer = new NumQ(false); //where false states not to find max value
    this.lastHrEventReceivedTime = new Date()
        .getTime(); //holds timestamp ,this will be updated every time hear rate value is received from controller
}

/*
 *Factory name:-heartRateStoreFactory
 *This holds all the functions which acts on  heartRateStore
 */
sarvint.heartRateStoreFactory = (function() {
    //create data store object with alias DS
    var DS = new sarvint.heartRateStore();

    var removeOldest = function() {
        //remove entry from buffer only is buffer is filled
        if (isBufferFilled()) {
            var prev = DS.heartRateBuffer.dequeue();
        }
    };
    var addNew = function(data) {
        DS.heartRateBuffer.enqueue(data);
    };

    var findHRAvg = function() {
        //find average heart rate from heartRateBuffer
        return Math.round(DS.heartRateBuffer.getSum() / DS.heartRateBuffer.getSize());
    }
    var getMaxHR = function() {
        //find Max heart rate
        return ALF.jds.getCoefficientData(constants.coefficient.chrMax1) - ALF.jds.getCoefficientData(constants.coefficient.chrMax2) * ALF.jds.getUserData()
            .age;
    }
    var updateLastHrEventReceivedTime = function() {
        DS.lastHrEventReceivedTime = ALF.hf.getCurrentTime();
    }
    var isBufferFilled = function() {
            return DS.heartRateBuffer.getSize() == ALF.jds.getCoefficientData(constants.coefficient.maxHrBufSize);
        }
        /*
         *function name:-reset
         *This function is called every 5 seconds
         *Heart rate buffer will be cleared if CurrentTime - lastHrEventReceivedTime > hr_clear_buf_interval seconds
         */
    var reset = function() {
        var t = (ALF.hf.getCurrentTime() - DS.lastHrEventReceivedTime) / 1000;
        if (t > ALF.jds.getCoefficientData(constants.coefficient.hrClearBufInterval)) {
            //broadcast null values to heart rate bio params
            new sarvint.result(constants.bioParam.averageHeartRate, null);
            new sarvint.result(constants.bioParam.percentageHeartRate, null);
            sarvint.sharedResultMap[constants.bioParam.averageHeartRate] = null;
            sarvint.sharedResultMap[constants.bioParam.percentageHeartRate] = null;
            DS = new sarvint.heartRateStore();
        }
    }
    return {
        //create getters and setters
        removeOldest: removeOldest,
        addNew: addNew,
        findHRAvg: findHRAvg,
        getMaxHR: getMaxHR,
        updateLastHrEventReceivedTime: updateLastHrEventReceivedTime,
        isBufferFilled: isBufferFilled,
        reset: reset
    }
})();

//-------------------------------start script 8-------------------------------------
/*
 *Factory name:-onEventDataFactory
 *This Factory holds all the functions which will be called for each event
 */
sarvint.onEventDataFactory = (function() {
    /*
     *function name:-processEvent
     *This function will be called for each evant 
     *input param
     *	eData={
     *		"eventCode":Number,//holds decode event codes
     *		"val":[], //holds the decoded value in an array
     *		"paramX":Number //holds decoded X parameter of an event
     *	      }
     */
    var processEvent = function(eData) {
        //this funtion will call the implementation methods
        try {
            switch (eData.eventCode) {
                case constants.eventName.ecgHeartRate:
                    {
                        //Reference Event: ecg_heart_rate in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
                        var ecgvalue = eData.val[0]; //raw ecg heart rate
                        //first compute heart rate
                        ALF.cf.computeHeartRate(ecgvalue);
                        ALF.cf.computePercentVO2max();
                        //calories burned
                        ALF.cf.computeCaloriesBurned(ecgvalue);
                        break;
                    }
                case constants.eventName.impRespiratoryRate:
                    {
                        //Reference Event: imp_respiratory_rate in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
                        var imprr = eData.val[0]; //raw impedence respiratory rate 
                        //call impedence respiratory rate
                        ALF.cf.computeIMPRR(imprr);
                        break;
                    }
                case constants.eventName.stepCount:
                    {
                        //Reference Event: step_count in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
                        var stepcount = eData.val[0]; //Val is the number of steps taken,This number is the relative change since the previous step_count event.

                        ALF.cf.computeStepCount(stepcount);
                        break;
                    }
                case constants.eventName.skinConductance:
                    {
                        //Reference Event: skin_cond in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
                        var transSC = eData.val[0]; //trans skin contradiction
                        ALF.cf.computeHydration(transSC);
                        ALF.cf.computeExcitement(transSC);
                        break;
                    }
                case constants.eventName.ecgInspExpTime:
                    {
                        //Reference Event: ecg_inspiratory_expiratory_time in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
                        var insp_val = eData.val[0];
                        var exp_val = eData.val[1];

                        ALF.cf.computeAsthmaAlert(insp_val, exp_val);
                        break;
                    }
                case constants.eventName.accelerationRaw:
                    {
                        //Reference Event: acceleration_raw in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
                        var acc_raw_x = eData.val[0];
                        var acc_raw_y = eData.val[1];
                        var acc_raw_z = eData.val[2];
                        //compute acceleration magnitude
                        ALF.cf.computeAcceleration(acc_raw_x, acc_raw_y, acc_raw_z);
                        //compute force
                        ALF.cf.computeForce();
                        //compute quickness
                        ALF.cf.computeQuickness();
                        break;
                    }
                case constants.eventName.strokeVolume:
                    {
                        //Reference Event: stroke_volume in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
                        var raw_stroke_vol = eData.val[0];
                        ALF.cf.computeStrokeVolume(raw_stroke_vol);
                        break;
                    }
                case constants.eventName.gpsParsed:
                    {
                        //Reference Event: gps_parsed in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
                        var type = eData.val[0];
                        var val_int = eData.val[1];
                        var val_frac = eData.val[2];
                        if (type == 1 || type == 2) { //lon lat
                            ALF.cf.computeDistance(type, val_int, val_frac);
                        }
                        if (type == 4) { //speed
                            ALF.cf.computeSpeed(val_int, val_frac);
                        }
                        break;

                    }
                case constants.eventName.bodyTemperature:
                    {
                        //Reference Event: body_temp in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
                        //data will be in celcius
                        var val_int = eData.val[0];
                        var val_frac = eData.val[1];
                        ALF.cf.computeTemperature(val_int, val_frac);
                        break;
                    }
                case constants.eventName.smegStrength:
                    {
                        //Reference Event: semg_strength in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
                        var muscleGroup = eData.paramX; //muscle group to be monitored.
                        var peakVal = eData.val[0]; //This corresponds to the processed peak value of the sEMG waveform
                        ALF.cf.computeStrength(muscleGroup, peakVal);
                        break;
                    }
                case constants.eventName.inspExpTime:
                {
                    //Reference Event: imp_inspiratory_expiratory_time in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+2
                    var insp_val = eData.val[0];
                    var exp_val = eData.val[1];

                    ALF.cf.computeImpInspExpRatio(insp_val, exp_val);
                    break;
                }
                case constants.eventName.tidalVolume:
                {
                	//Reference Event: stroke_volume in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+2
                    var raw_tidal_vol = eData.val[0];
                    ALF.cf.computeTidalVolume(raw_tidal_vol);
                    break;
                }
                default:
                    {
                        SSNativeCalculationJSLib.consoleLog("undefined event=" + eData.eventCode);

                    }
            }
        } catch (e) {
            SSNativeCalculationJSLib.errorLog(JSON.stringify(eData), e.stack);
        }
    }
    return {
        process: processEvent
    }
})();
//-------------------------------start script 9-------------------------------------
/*
 *Factory name:-computationFactory
 *This Factory holds all the implementattion of algorithms
 */
sarvint.computationFactory = (function() {

    /*function name:-computeHeartRate
     *input param
     *	ecg_heart rate
     *output param
     *	averaged_heart_rate,percentage heart rate
     *Reference Heart Rate in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
     *For color zones Reference %Heart Rate https://sarvint.atlassian.net/wiki/display/SIA/Color+Zones 
     */
    var computeHeartRate = function(ecgval) {
        try {
            ALF.hrf.removeOldest();
            ALF.hrf.addNew(ecgval); //add heart rate to queue
            sarvint.sharedResultMap[constants.bioParam.ecgHeartRate] = ecgval;
            if (ALF.hrf.isBufferFilled()) {
                //if buffer is filled compute average hr(peak HR)
                var avgHr = ALF.hrf.findHRAvg(); //average Heart Rate
                var maxHR = ALF.hrf.getMaxHR(); //maximum Heart Rate
                var perhr = 100 * (avgHr / maxHR); //Percentage Heart Rate
                //colour zones
                var colour = null;
                if (perhr >= constants.colorZone.heartRate.l1)
                    colour = constants.color.red;
                else if (perhr >= constants.colorZone.heartRate.l2)
                    colour = constants.color.yellow;
                else if (perhr >= constants.colorZone.heartRate.l3)
                    colour = constants.color.green;
                else if (perhr >= constants.colorZone.heartRate.l4)
                    colour = constants.color.blue;
                else if (perhr >= constants.colorZone.heartRate.l5)
                    colour = constants.color.gray;
                //broadcast results
                new sarvint.result(constants.bioParam.averageHeartRate, avgHr, colour);
                new sarvint.result(constants.bioParam.percentageHeartRate, perhr, colour);
                sarvint.sharedResultMap[constants.bioParam.percentageHeartRate] = perhr;
                sarvint.sharedResultMap[constants.bioParam.averageHeartRate] = avgHr;
            } else {
                //if buffer is not filled broadcast null ,disply -- is value is null
                new sarvint.result(constants.bioParam.averageHeartRate, null);
                new sarvint.result(constants.bioParam.percentageHeartRate, null);
                sarvint.sharedResultMap[constants.bioParam.averageHeartRate] = null;
                sarvint.sharedResultMap[constants.bioParam.percentageHeartRate] = null;
            }
            //update Last HR Event Received Time
            ALF.hrf.updateLastHrEventReceivedTime();
        } catch (e) {
            throw e;
        }
    }


    /*function name:-computeIMPRR -compute Impedance Respiratory Rate
     *Input -imp_respiratory_rate
     *output param
     *	imp_respiratory_rate
     *Reference Heart Rate Recovery in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
     *For color zones Reference Respiratory rate https://sarvint.atlassian.net/wiki/display/SIA/Color+Zones 
     */
    var computeIMPRR = function(imprr) {
            //imprr is Impedance Respiratory Rate
            try {
                var colour = null;
                if (imprr >= constants.colorZone.respiratory.l2 && imprr <= constants.colorZone.respiratory.l1)
                    colour = constants.color.red;
                else if (imprr >= constants.colorZone.respiratory.l3)
                    colour = constants.color.green;
                else if (imprr >= constants.colorZone.respiratory.l4)
                    colour = constants.color.blue;
                sarvint.sharedResultMap[constants.bioParam.impRespiratoryRate]=imprr;
                new sarvint.result(constants.bioParam.impRespiratoryRate, imprr, colour);
            } catch (e) {
                throw e;
            }
        }
        /*function name:-computeCaloriesBurned 
         *Input -ecg_heart rate
         *output param
         *	constants.bioParam.caloriesBurned
         *Reference Calories Burned in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
         *For color zones Reference Caloric Burn https://sarvint.atlassian.net/wiki/display/SIA/Color+Zones 
         */
    var computeCaloriesBurned = function(ecgval) {
            try {
                //ecgval is raw heart rate
                var userData = ALF.jds.getUserData() //get user data
                var t = ((ALF.hf.getCurrentTime() - sarvint.workOutStartTime) / (1000 * 60)); //total time in minutes from start of workout
                var calories = null;
                if (userData.gender == constants.male)
                    calories = (-55.0969 + 0.2017 * userData.age + 0.09036 * userData.weight + 0.6309 * ecgval) * t / 4.184;
                if (userData.gender == constants.female)
                    calories = (-20.4022 + 0.074 * userData.age - 0.05741 * userData.weight + 0.4472 * ecgval) * t / 4.184;
                var result = ALF.jds.updateCalorieBurned(calories);
                new sarvint.result(constants.bioParam.caloriesBurned, result);
            } catch (e) {
                throw e;
            }
        }
        /*function name:-computeStepCount 
         *Input -relative stpe count
         *output param
         *	constants.bioParam.stepCount
         *Reference Step Count in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
         */
    var computeStepCount = function(sc) {
            try {
                //sc is relative step count
                var result = ALF.jds.updateStepCount(sc);
                new sarvint.result(constants.bioParam.stepCount, result);
            } catch (e) {
                throw e;
            }
        }
        /*function name:-computeHydration 
         *Input -TransSC,BaseSC,ecg_heart_rate,avg(stroke_volume)
         *output param
         *	constants.bioParam.hydration
      
         *Reference Hydration in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+3
         *For color zones Reference Hydration https://sarvint.atlassian.net/wiki/display/SIA/Color+Zones 
         */
    var computeHydration = function(transSC) {
            try {
                var baseSC = sarvint.sharedResultMap[constants.bioParam.baseSkinContradiction]; //get base skin contradiction
                var ecghr = sarvint.sharedResultMap[constants.bioParam.ecgHeartRate]; //get ecgHeartRate
                var avgsv =   ALF.jds.getAvgStrokeVolume();
             
                if (baseSC != null && ecghr != null && avgsv != null) {
                	 //add values to parameters
        	    	var parameters=[];
        	    	parameters.push(new sarvint.param("parameter_0",transSC)); 
        	    	parameters.push(new sarvint.param("parameter_1",baseSC)); 
        	    	parameters.push(new sarvint.param("parameter_2",ecghr)); 
        	    	parameters.push(new sarvint.param("parameter_3",avgsv)); 
        	    	
        	        var hydration = ALF.cr.compute(constants.lookupindex.hydration,parameters); //where basesc is base skin contradiction
                    
        	        var colour = null;
                    if (hydration >= constants.colorZone.hydration.l2 && hydration <= constants.colorZone.hydration.l1)
                        colour = constants.color.green;
                    else if (hydration >= constants.colorZone.hydration.l3 && hydration < constants.colorZone.hydration.l2)
                        colour = constants.color.yellow;
                    else if (hydration < constants.colorZone.hydration.l3)
                        colour = constants.color.red;
                    new sarvint.result(constants.bioParam.hydration, hydration, colour);
                }
            } catch (e) {
                throw e;
            }
        }
      

    /*function name:-computeAsthmaAlert 
     *Input -Event: ecg_inspiratory_expiratory_time
     */
    var computeAsthmaAlert = function(insp_val, exp_val) {
        try {
            if (insp_val / exp_val > 1) {
                new sarvint.result(constants.bioParam.asthmaAlert, 1);
            }
        } catch (e) {
            throw e;
        }
    }

    /*function name:-computeAcceleration 
     *Input -acceleration_raw    // contains X, Y, and Z values
     *output param
     *	constants.bioParam.accelerationMagnitude
     *Coefficients used:- RANGE,G,Q
     *Reference Acceleration in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
     */
    var computeAcceleration = function(acc_raw_x, acc_raw_y, acc_raw_z) {
            try {
                var RANGE = ALF.jds.getCoefficientData(constants.coefficient.range);
                var G = ALF.jds.getCoefficientData(constants.coefficient.g);
                var Q = ALF.jds.getCoefficientData(constants.coefficient.q);
                var accel_X = acc_raw_x * RANGE * G / 2 ^ Q;
                var accel_Y = acc_raw_y * RANGE * G / 2 ^ Q;
                var accel_Z = acc_raw_z * RANGE * G / 2 ^ Q;
                var accelerationMagnitude = Math.sqrt(Math.pow(accel_X, 2) + Math.pow(accel_Y, 2) + Math.pow(accel_Z, 2));
                sarvint.sharedResultMap[constants.bioParam.accelerationMagnitude] = accelerationMagnitude;
                //for quickness
                var prevMagnitude=ALF.jds.getPrevAccMagnitude();
                if(prevMagnitude!=null){
                	//square the first difference 
                	var diffSquare=Math.pow((accelerationMagnitude-prevMagnitude),2);
                	ALF.jds.updateAccDiffSum(diffSquare);
                }
                ALF.jds.setPrevAccMagnitude(accelerationMagnitude);
                new sarvint.result(constants.bioParam.accelerationMagnitude, accelerationMagnitude);
                
            } catch (e) {
                throw e;
            }
        }
        /*function name:-computeForce 
         *Input -constants.bioParam.accelerationMagnitude
         *output param
         *	constants.bioParam.force
         *Coefficients used:- Pounds_to_Kg
         *Reference Force in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
         */

    var computeForce = function() {
            try {
                var accelerationMagnitude = sarvint.sharedResultMap[constants.bioParam.accelerationMagnitude];
                if(accelerationMagnitude!=null){	
	                var userData = ALF.jds.getUserData();
	                var pounds_to_Kg = ALF.jds.getCoefficientData(constants.coefficient.poundsToKg);
	                var force = userData.weight * pounds_to_Kg * accelerationMagnitude;
	                new sarvint.result(constants.bioParam.force, force);
	                sarvint.sharedResultMap[constants.bioParam.force] = force;
                }
            } catch (e) {
                throw e;
            }
        }
        /*function name:-computeStrokeVolume 
         *Input -raw_stroke_vol
         *output param
         *	constants.bioParam.strokeVolume
         *Coefficients used:- sv_coefficient
         *Reference Stroke Volume in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
         */
    var computeStrokeVolume = function(raw_stroke_vol) {
            try {
                var userData = ALF.jds.getUserData();
                var svcoeff = ALF.jds.getCoefficientData(constants.coefficient.svCoefficient);
                var sv = ((32.4 * userData.weight / Math.pow(userData.height, 2)) * Math.pow((0.17 * userData.height), 3) * raw_stroke_vol * svcoeff) / 4.2;
                //compute sv average
                var svData = ALF.jds.getStrokeVolumeData();
                svData.sum += sv;
                svData.totalPackets++;
                ALF.jds.setStrokeVolumeData(svData);
                new sarvint.result(constants.bioParam.strokeVolume, sv);
            } catch (e) {
                throw e;
            }
        }
        /*function name:-computeDistance 
         *Input -gps_coordinates
         *output param
         *	constants.bioParam.distance in meters
         *Reference Distance in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
         */
    var computeDistance = function(type, val_int, val_frac) {
            try {
                //Type is one of the follow:1 = longitude 2 = latitude 3 = altitude 4 = speed 5 = heading
                var gpsData = ALF.jds.getGpsData(); //get previous gps data
                var val = Number(val_int + "." + val_frac);
                //set the values to preveious latitudes and longitudes if null
                if (gpsData.prevlon == null && type == 1) {
                    gpsData.prevlon = val;
                } else if (gpsData.prevlon != null && type == 1) {
                    gpsData.lon = val;
                }
                if (gpsData.prevlat == null && type == 2) {
                    gpsData.prevlat = val;
                } else if (gpsData.prevlat != null && type == 2) {
                    gpsData.lat = val;
                }
                //update gps coordinates
                ALF.jds.setGpsData(gpsData);

                //if all the lat long are available compute distance
                if (gpsData.prevlat != null && gpsData.lat != null && gpsData.prevlon != null && gpsData.lon != null) {
                    var distance = ALF.hf.getDistanceInMeters(gpsData.prevlat, gpsData.lat, gpsData.prevlon, gpsData.lon); //relative distance
                    var res = ALF.jds.updateDistance(distance); //total distance
                    new sarvint.result(constants.bioParam.distance, res);
                    sarvint.sharedResultMap[constants.bioParam.distance] = res;
                    //reser prev values
                    gpsData.prevlat = gpsData.lat;
                    gpsData.prevlon = gpsData.lon;
                    gpsData.lat = null;
                    gpsData.lon = null;
                    ALF.jds.setGpsData(gpsData);
                }
            } catch (e) {
                throw e;
            }
        }
        /*function name:-computeTemperature 
         *Input -temperature in celcius
         *output param
         *	constants.bioParam.temperature in Fahrenheit
         *Reference Event: body_temp in Controller API https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
         *For color zones Reference Temperature https://sarvint.atlassian.net/wiki/display/SIA/Color+Zones 
         */
    var computeTemperature = function(val_int, val_frac) {
            try {
                var val = Number(val_int + "." + val_frac); // in celcius
                var F = val * 9 / 5 + 32;
                var colour = null;
                if (val >= constants.colorZone.temperature.l1)
                    colour = constants.color.red;
                else if (val >= constants.colorZone.temperature.l2 && val < constants.colorZone.temperature.l1)
                    colour = constants.color.yellow;
                else if (val >= constants.colorZone.temperature.l3 && val < constants.colorZone.temperature.l2)
                    colour = constants.color.green;
                else if (val < constants.colorZone.temperature.l3)
                    colour = constants.color.blue;
                sarvint.sharedResultMap[constants.bioParam.temperature]=F;
                new sarvint.result(constants.bioParam.temperature, F, colour);
            } catch (e) {
                throw e;
            }
        }
        /*function name:-computePercentVO2max 
         *Input -percentage Heart Rate
         *output param
         *	constants.bioParam.percentVo2Max 
         *Reference %VO2max inBiometric Parameters computation https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+2
         *For color zones Reference %VO2MAX https://sarvint.atlassian.net/wiki/display/SIA/Color+Zones 
         *updated=Feb 23 2016
         */
    var computePercentVO2max = function() {
            try {
                var percentHR = sarvint.sharedResultMap[constants.bioParam.percentageHeartRate]; //percent heart rate
                var userData = ALF.jds.getUserData();
                if (percentHR != null) {
                	var per_vo2_max =null;
                	  if (userData.gender == constants.male)
                		  per_vo2_max = (percentHR-36.8)/0.643;        
                	  if (userData.gender == constants.female)
                		  per_vo2_max = (percentHR-39.0)/0.628;  
                    var colour = null;
                    if (per_vo2_max >= constants.colorZone.vo2max.l1)
                        colour = constants.color.red;
                    else if (per_vo2_max >= constants.colorZone.vo2max.l2)
                        colour = constants.color.yellow;
                    else if (per_vo2_max >= constants.colorZone.vo2max.l3)
                        colour = constants.color.green;
                    else if (per_vo2_max >= constants.colorZone.vo2max.l4)
                        colour = constants.color.blue;
                    else if (per_vo2_max >= constants.colorZone.vo2max.l5)
                        colour = constants.color.gray;

                    new sarvint.result(constants.bioParam.percentVo2Max, per_vo2_max, colour);
                } else {
                    new sarvint.result(constants.bioParam.percentVo2Max, null);
                }
            } catch (e) {
                throw e;
            }
        }
        /*function name:-computeStrength 
         *Input -percentage sEmg strength
         *output param
         *	constants.bioParam.strength,Muscel group param
         *Reference sEMG Strength in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
         *For color zones Reference Strength https://sarvint.atlassian.net/wiki/display/SIA/Color+Zones 
         */
    var computeStrength = function(muscleGroup, peakVal) {
            try {
                var maxpeak = ALF.jds.getSmegStrengthMaxPeak();
                if (peakVal > maxpeak) {
                    maxpeak = peakVal;
                    ALF.jds.setSmegStrengthMaxPeak(maxpeak);
                }
                //compute strength
                var strengthData = ALF.jds.getStrengthData();
                strengthData.sum += peakVal;
                strengthData.totalStrengthPackets++;
                var strength = strengthData.sum / strengthData.totalStrengthPackets; //strength is average of all the values 
                new sarvint.result(constants.bioParam.strength, strength);
                ALF.jds.setStrengthData(strengthData);

                //compute peak percentage
                var peakPercent = 100 * (peakVal / maxpeak);
                var colour = null;
                if (peakPercent >= constants.colorZone.strength.l1)
                    colour = constants.color.green;
                else if (peakPercent >= constants.colorZone.strength.l2)
                    colour = constants.color.blue;
                else if (peakPercent >= constants.colorZone.strength.l3)
                    colour = constants.color.gray;
                //broad cast peak percent with color for muscle group
                new sarvint.result(constants.muscleGroupMap[muscleGroup], peakPercent, colour);
            } catch (e) {
                throw e;
            }
        }
        /*function name:-computeWork 
         *Input -distance,force
         *output param
         *	constants.bioParam.work
         *Reference work in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
         */
    var computeWork = function() {
            try {
                var distance = sarvint.sharedResultMap[constants.bioParam.distance];
                var force = sarvint.sharedResultMap[constants.bioParam.force];
                if (force != null && distance != null) {
                    var work = force * distance;
                    new sarvint.result(constants.bioParam.work, work);
                }
            } catch (e) {
                throw e;
            }
        }
        /*function name:-computeSpeed 
         *Input -gpsParsed
         *output param
         *	constants.bioParam.speed
         *Coefficient Used:-Knots_to_meters_per_sec
         *Reference work in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+1
         */
    var computeSpeed = function(val_int, val_frac) {
        try {
            var val = Number(val_int + "." + val_frac);
            var speed = val * ALF.jds.getCoefficientData(constants.coefficient.kToMeterPerSec);
            new sarvint.result(constants.bioParam.speed, speed);
        } catch (e) {
            throw e;
        }
    }
    
    /*function name:-computeImpInspExpRatio 
     *Input -Event: imp_inspiratory_expiratory_time
     */
    var computeImpInspExpRatio = function(insp_val, exp_val) {
        try {
        		var val=insp_val / exp_val; //used to calculate respiratory performance
                new sarvint.result(constants.bioParam.impInspExpRatio,val);
        } catch (e) {
            throw e;
        }
    }
    /*function name:-computeQuickness 
     *Input -acceleration_buffer
     *output param
     *	constants.bioParam.quickness
     *Reference quickness in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+2
     */
	var computeQuickness = function() {
	    try {
	    	//based on acceleration values
	    	var diffSquareSum=ALF.jds.getAccDiffSum();
	    	var diffBufferSize=ALF.jds.getAccDiffBufferCount();
	    	if(diffBufferSize>0){
	    		//find RMS of first difference
	    		var quickness=Math.sqrt(diffSquareSum/diffBufferSize);
	    		new sarvint.result(constants.bioParam.quickness, quickness);
	    	}
	    } catch (e) {
	        throw e;
	    }
	}
	 /*function name:-computeTidalVolume 
     *Input -raw_tidal_vol
     *output param
     *	constants.bioParam.tidalVolume
     *Coefficients used:- tv_coefficient
     *Reference Tidal Volume in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+2
     */
	var computeTidalVolume = function(raw_tidal_vol) {
        try {
            var userData = ALF.jds.getUserData();
            var tvcoeff = ALF.jds.getCoefficientData(constants.coefficient.tvCoefficient);
            var tv = (32.4 * userData.weight / Math.pow(userData.height, 2)) * raw_tidal_vol * tvcoeff ;
            new sarvint.result(constants.bioParam.tidalVolume, tv);
        } catch (e) {
            throw e;
        }
    }
	 /*function name:-computeExcitment 
     *Input -TransSC,BaseSC,ecg_heart_rate,respiratory rate,temperature
     *output param
     *	constants.bioParam.excitement
       *Reference Excitement in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+3
     */
	var computeExcitement = function(transSC) {
		 try {
             var baseSC = sarvint.sharedResultMap[constants.bioParam.baseSkinContradiction]; //get base skin contradiction
             var ecghr = sarvint.sharedResultMap[constants.bioParam.ecgHeartRate]; //get ecgHeartRate
             var imprr = sarvint.sharedResultMap[constants.bioParam.impRespiratoryRate];
             var restingEmg=sarvint.sharedResultMap[constants.bioParam.restingEmg];
             if (baseSC != null && ecghr != null && imprr != null && restingEmg!=null) {
             	 //add values to parameters
     	    	var parameters=[];
     	    	parameters.push(new sarvint.param("parameter_0",transSC)); 
     	    	parameters.push(new sarvint.param("parameter_1",baseSC)); 
     	    	parameters.push(new sarvint.param("parameter_2",ecghr)); 
     	    	parameters.push(new sarvint.param("parameter_3",imprr)); 
     	    	parameters.push(new sarvint.param("parameter_4",restingEmg)); 
     	        var excitement = ALF.cr.compute(constants.lookupindex.excitement,parameters); //where basesc is base skin contradiction
                new sarvint.result( constants.bioParam.excitement, excitement);
             }
         } catch (e) {
             throw e;
         }
       
    }
    return {
        computeHeartRate: computeHeartRate,
        computeIMPRR: computeIMPRR,
        computeCaloriesBurned: computeCaloriesBurned,
        computeStepCount: computeStepCount,
        computeHydration: computeHydration,
        computeAsthmaAlert: computeAsthmaAlert,
        computeAcceleration: computeAcceleration,
        computeForce: computeForce,
        computeStrokeVolume: computeStrokeVolume,
        computeDistance: computeDistance,
        computeTemperature: computeTemperature,
        computePercentVO2max: computePercentVO2max,
        computeStrength: computeStrength,
        computeWork: computeWork,
        computeSpeed: computeSpeed,
        computeImpInspExpRatio:computeImpInspExpRatio,
        computeQuickness:computeQuickness,
        computeTidalVolume:computeTidalVolume,
        computeExcitement:computeExcitement
    }
})();

/*
 *Factory name:-activityEndComputationFactory
 *This Factory holds all the formulas which will be executed on end of the work out
 */
sarvint.activityEndComputationFactory = (function() {
	/*function name:-compute 
     *will be called once on end of workout
     *all the function which have calculations will be called from this in order
     */
	var compute=function(){
		
		//heart rate peak
		computePeakHeartRate();
		
		computeAerobiCapacity();
		
		//compute aerobic fitness start
    	computeRespiratoryPerformance();
    	computeCardiacPerformance();
    	computeIHRR();
    	computeChronotropic();
    	computeAerobicFitness();
		//compute aerobic fitness end
  
    	//compute power start
    	computeForce();
    	computeWork();
    	computePower();
    	//compute power end
    }
	  /*function name:-computePeakHeartRate 
     *output param
     *	constants.bioParam.peakHr
     */
	var computePeakHeartRate=function(){
		//get average of 10 highest heart rate values
		 var peakHr=SSNativeCalculationJSLib.getPeakHr();
		 sarvint.sharedResultMap[constants.bioParam.peakHr] = peakHr;
	}
	  /*function name:-computeAerobiCapacity 
     *Input -peak HR,rest HR
     *output param
     *	constants.bioParam.aerobicCapacity
     *Reference Aerobic Capacity in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+3
     */
	var computeAerobiCapacity = function() {
	    try {
	        var peakHR =  sarvint.sharedResultMap[constants.bioParam.peakHr]; 
	        var restHR = sarvint.sharedResultMap[constants.bioParam.restHeartRate];
	        
	      //add values to parameters
	    	var parameters=[];
	    	var param0=peakHR/restHR;
	    	parameters.push(new sarvint.param("parameter_0",param0)); 
	        var aerobiCapacity = ALF.cr.compute(constants.lookupindex.aerobicCapacity,parameters);
	        new sarvint.result(constants.bioParam.aerobicCapacity, aerobiCapacity);
	        sarvint.sharedResultMap[constants.bioParam.aerobicCapacity]=aerobiCapacity;
	    } catch (e) {
    		SSNativeCalculationJSLib.errorLog("end_of_activity", e.stack);
	    }
	}
    
	  /*function name:-computeRespiratoryPerformance 
     *Input -mean of imp_respiratory_rate,TidalVolume and imp_inspiratory_expiratory_time ratio
     *output param
     *	constants.bioParam.respiratoryPerformance
     *Reference Respiratory Performance in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+3
     */
    var computeRespiratoryPerformance = function() {
    	try{
	    	var userData = ALF.jds.getUserData();
	    	var avgRR=SSNativeCalculationJSLib.findAvgForEventCode(constants.eventName.impRespiratoryRate); //average respiratory rate
	    	var avgTidalVolume=SSNativeCalculationJSLib.findAvgForBiometricParam(constants.bioParam.tidalVolume);
	    	var avgImpInspExpRatio=SSNativeCalculationJSLib.findAvgForBiometricParam(constants.bioParam.impInspExpRatio);
	    	var BSA=Math.sqrt(userData.height*userData.weight/3131);
	    	//add values to parameters
	    	var parameters=[];
	    	var param0=avgRR*avgTidalVolume/BSA;
	    	parameters.push(new sarvint.param("parameter_0",param0)); 
	    	parameters.push(new sarvint.param("parameter_1",avgImpInspExpRatio)); 
	    
	    	var respPerformance=ALF.cr.compute(constants.lookupindex.respiratoryPerformance,parameters);
            new sarvint.result(constants.bioParam.respiratoryPerformance,respPerformance);
            sarvint.sharedResultMap[constants.bioParam.respiratoryPerformance]=respPerformance;

    	}catch(e){
    		SSNativeCalculationJSLib.errorLog("end_of_activity", e.stack);
    	}
    }
    /*function name:-computeCardiacPerformance 
     *Input -mean of HeartRate and StrokeVolume
     *output param
     *	constants.bioParam.respiratoryPerformance
     *Reference cardiac performance  in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+3
     */
    var computeCardiacPerformance = function() {
    	try{
	    	var userData = ALF.jds.getUserData();
	    	var avgStrokeVolume=SSNativeCalculationJSLib.findAvgForBiometricParam(constants.bioParam.strokeVolume);
	    	var avgHR=SSNativeCalculationJSLib.findAvgForBiometricParam(constants.bioParam.averageHeartRate);
	    	var BSA=Math.sqrt(userData.height*userData.weight/3131);
	    	//add values to parameters
	    	var parameters=[];
	    	var param0=avgHR*avgStrokeVolume/BSA;
	    	parameters.push(new sarvint.param("parameter_0",param0)); 
	    
	    	var cardiacPerformance=ALF.cr.compute(constants.lookupindex.cardiacPerformance,parameters);
            new sarvint.result(constants.bioParam.cardiacPerformance,cardiacPerformance);
            sarvint.sharedResultMap[constants.bioParam.cardiacPerformance]=cardiacPerformance;


    	}catch(e){
    		SSNativeCalculationJSLib.errorLog("end_of_activity", e.stack);
    	}
    }

    /*function name:-computeIHRR -compute immediate heart rate recovery
     *Input -uses peak heart rate and Rest heart Rate 
     *output param
     *	constants.bioParam.immediateHrRecovery
     *Reference Heart Rate Recovery in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+3
     */
    var computeIHRR = function() {
        try {
            var peakHR =  sarvint.sharedResultMap[constants.bioParam.peakHr]; 
  	        var restHR = sarvint.sharedResultMap[constants.bioParam.restHeartRate];
  	        var IHRR = restHR + (peakHR - restHR) * Math.exp(-60 / 121);
            new sarvint.result(constants.bioParam.immediateHrRecovery, IHRR);
	    	sarvint.sharedResultMap[constants.bioParam.immediateHrRecovery]=IHRR; 

        } catch (e) {
            throw e;
        }
    }
    /*function name:-computeChronotropic 
     *Input -HeartRate and StrokeVolume
     *output param
     *	constants.bioParam.chronotropic
     *Reference chronotropic index in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+3
     */
    var computeChronotropic = function() {
    	try{
	        var peakHR =  sarvint.sharedResultMap[constants.bioParam.peakHr]; 
	        var sdnnHrv =  sarvint.sharedResultMap[constants.bioParam.sdnnHrv]; 
	    	var hrr=sarvint.sharedResultMap[constants.bioParam.immediateHrRecovery]; 
	    	//add values to parameters
	    	var parameters=[];
	    	parameters.push(new sarvint.param("parameter_0",peakHR)); 
	    	parameters.push(new sarvint.param("parameter_1",sdnnHrv)); 
	    	parameters.push(new sarvint.param("parameter_2",hrr)); 
	    	var chronotropic=ALF.cr.compute(constants.lookupindex.chronotropic,parameters);
            new sarvint.result(constants.bioParam.chronotropic,chronotropic);
	    	sarvint.sharedResultMap[constants.bioParam.chronotropic]=chronotropic; 

    	}catch(e){
    		SSNativeCalculationJSLib.errorLog("end_of_activity", e.stack);
    	}
    }
    /*function name:-computeAerobicFitness 
     *Input -Cardiac_Performance,Respiratory_Performance and Chronotropic_Index
     *output param
     *	constants.bioParam.aerobicFitness
     *Reference Aerobic Fitness in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+3
     */
    var computeAerobicFitness=function(){
    	var cardiacPerformance= sarvint.sharedResultMap[constants.bioParam.cardiacPerformance]; 
    	var respiratoryPerformance= sarvint.sharedResultMap[constants.bioParam.respiratoryPerformance]; 
    	var chronotropicIndex= sarvint.sharedResultMap[constants.bioParam.chronotropic]; 
    	//add values to parameters
    	var parameters=[];
    	parameters.push(new sarvint.param("parameter_0",cardiacPerformance)); 
    	parameters.push(new sarvint.param("parameter_1",respiratoryPerformance)); 
    	parameters.push(new sarvint.param("parameter_2",chronotropicIndex)); 
    	var aerobicFitness=ALF.cr.compute(constants.lookupindex.aerobicFitness,parameters);
        new sarvint.result(constants.bioParam.aerobicFitness,aerobicFitness);
    	sarvint.sharedResultMap[constants.bioParam.aerobicFitness]=aerobicFitness; 

    }
    /*function name:-computeForce 
     *Input -constants.bioParam.accelerationMagnitude min,max,avg
     *output param
     *	constants.bioParam.forceMean,forceMax,forceTotal
     *Coefficients used:- Pounds_to_Kg
     *Reference Force in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+2
     */

    var computeForce = function() {
        try {
	    	var maxAccMag=SSNativeCalculationJSLib.findMaxForBiometricParam(constants.bioParam.accelerationMagnitude);
	    	var avgAccMag=SSNativeCalculationJSLib.findAvgForBiometricParam(constants.bioParam.accelerationMagnitude);
	    	var sumAccMag=SSNativeCalculationJSLib.findSumForBiometricParam(constants.bioParam.accelerationMagnitude);

            if(maxAccMag!=null && avgAccMag!=null && sumAccMag!=null){	
                var userData = ALF.jds.getUserData();
                var pounds_to_Kg = ALF.jds.getCoefficientData(constants.coefficient.poundsToKg);
                var forceMean = userData.weight * pounds_to_Kg * avgAccMag;
                var forceMax = userData.weight * pounds_to_Kg * maxAccMag;
                var forceTotal = userData.weight * pounds_to_Kg * sumAccMag;

                new sarvint.result(constants.bioParam.forceMean, forceMean);
                new sarvint.result(constants.bioParam.forceMax, forceMax);
                new sarvint.result(constants.bioParam.forceTotal, forceTotal);

                sarvint.sharedResultMap[constants.bioParam.forceMean] = forceMean;
                sarvint.sharedResultMap[constants.bioParam.forceMax] = forceMax;
                sarvint.sharedResultMap[constants.bioParam.forceTotal] = forceTotal;
            }
        } catch (e) {
            throw e;
        }
    }
    /*function name:-computeWork 
     *Input -distance,force-mean,max and total
     *output param
     *	constants.bioParam.work
     *Reference work in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+2
     */
    var computeWork = function() {
        try {
            var distance = SSNativeCalculationJSLib.findLatestForBiometricParam(constants.bioParam.distance);
            var forceMean = sarvint.sharedResultMap[constants.bioParam.forceMean]; 
            var forceMax = sarvint.sharedResultMap[constants.bioParam.forceMax];
            var forceTotal = sarvint.sharedResultMap[constants.bioParam.forceTotal];
            if (forceMean != null && forceMax !=null && forceTotal!=null && distance != null) {
                var workMean = forceMean * distance;
                var workMax = forceMax * distance;
                var workTotal = forceTotal * distance;
                
                new sarvint.result(constants.bioParam.workMean, workMean);
                new sarvint.result(constants.bioParam.workMax, workMax);
                new sarvint.result(constants.bioParam.workTotal, workTotal);
                
                sarvint.sharedResultMap[constants.bioParam.workMean] = workMean;
                sarvint.sharedResultMap[constants.bioParam.workMax] = workMax;
                sarvint.sharedResultMap[constants.bioParam.workTotal] = workTotal;
            }
        } catch (e) {
            throw e;
        }
    }
    /*function name:-computePower
     *Input -elapsed time,work-mean,max and total
     *output param
     *	constants.bioParam.power
     *Reference power in computation algorithm https://sarvint.atlassian.net/wiki/display/SIA/Document+Set+2
     */
    var computePower = function() {
        try {
            var elapsedTime = SSNativeCalculationJSLib.getWorkoutElapsedTime();//in seconds
            var workMean=  sarvint.sharedResultMap[constants.bioParam.workMean];
            var workMax= sarvint.sharedResultMap[constants.bioParam.workMax] ;
            if (workMean != null && workMax !=null && elapsedTime!=null) {
                var powerMean = workMean /elapsedTime;
                var powerMax = powerMax/elapsedTime;
                new sarvint.result(constants.bioParam.powerMean, powerMean);
                new sarvint.result(constants.bioParam.powerMax, powerMax);
            }
        } catch (e) {
            throw e;
        }
    }
  
    return {
    	compute: compute
    }
})();

/*
 *Factory name:-computeResult
 *This Factory holds algorithm to calculate result
 */
sarvint.computeResult = (function() {
	
	var paramStruct=function(paramValue){
		this.param=paramValue;
		this.A1=null;
		this.A2=null;
		this.A4=null;
	}
	/*function name:-compute 
     *will be called for each biometric parameter
     *Input  
     *		    biometric_parameter_id string,
     *			parameters object array
     *			[{parameterId:"",value:Number}]
     *Following are the steps
     *step 1: for each parameters in array  
     *			find A1=value-lowerBound/(upperBound-lowerBound) where upper and lower bound are derived from index lookup table based on biometricId and parameterId
     *			find A2= Sarvint_weight*User_weight where Sarvint_weight and User_weight are derived from index lookup table based on biometricId and parameterId
     *			find A4= 0 or 1 A4 is derived from active column in index lookup table based on biometricId and parameterId
     *step 2: Find A3
     *			To find A3 calculate  Active and Inactive by using lookup data for biometric parameters
     *			then A3=100/ActiveSum-InactiveSum
     *Step 3:For each parameter find A1*A2*A3*A4 then add the values to get final result
     */
	
	var compute=function(biometricParameterId,parameters){
		try{
			var paramStructArr=[];
			for(var i=0;i<parameters.length;i++){
				var lookup=getAssessmentForbpAndparam(biometricParameterId,parameters[i].parameterId)
				var paramStructObj=new paramStruct(parameters[i].value);
				updateA1(paramStructObj,lookup);
				updateA2(paramStructObj,lookup);
				updateA4(paramStructObj,lookup);
				paramStructArr.push(paramStructObj);
			}
			
			//find A3 using lookup data
			var A3=findA3(biometricParameterId);
			var result=computeFinalValue(A3,paramStructArr);
			//remove while deploying
			SSNativeCalculationJSLib.setKeyValueColorTime(biometricParameterId, result,"A3="+A3);
			return result;
		}catch(e){
			throw e;
		}
    }
	/*function name:-getAssessmentForbpAndparam 
     *input param
     *	biometricParameterId,parameterId
     *output :lookup object which has upper and lower bound,weights,baseline values
     */
	var getAssessmentForbpAndparam=function(biometricParameterId,parameterId){
		try{
			var assessments=sarvint.lookupAssessment[biometricParameterId];
			for(var i=0;i<assessments.length;i++){
				if(assessments[i].parameterId==parameterId)
					{
					return assessments[i];
					}
			}
		}catch(e){
			throw e;
		}
	}
	/*function name:-updateA1 
     *input param
     *	paramStruct
     *Output update A1
     */
	var updateA1=function(paramStructObj,lookup){
		try{
			paramStructObj.A1=(paramStructObj.param - lookup.lowerBound)/(lookup.upperBound-lookup.lowerBound);
		}catch(e){
			throw e;
		}
	}
	/*function name:-updateA2
     *input param
     *	paramStruct
     *Output update A2
     */
	var updateA2=function(paramStructObj,lookup){
		try{	
			paramStructObj.A2=lookup.sarvintWeight*lookup.userWeight;
		}catch(e){
			throw e;
		}
	}
	/*function name:-updateA4
     *input param
     *	paramStruct
     *Output update A4
     */
	var updateA4=function(paramStructObj,lookup){
		try{
			paramStructObj.A4=lookup.isActive;
		}catch(e){
			throw e;
		}
	}
	  /*function name:-findA3 
     *input param
     *	biometricParameterId
     */
	var findA3=function(biometricParameterId){
		try{
			//find A3 using lookup data baseline values
			var activeSum=0;
			var inactiveSum=0;
			var assessments=sarvint.lookupAssessment[biometricParameterId];
			//for each assessments in lookup table find A1,A2,A4 using baseline values 
			var paramStructArr=[];
			for(var i=0;i<assessments.length;i++){
				var lookup=assessments[i];
				var paramStructObj=new paramStruct(assessments[i].baseline);
				updateA1(paramStructObj,lookup);
				updateA2(paramStructObj,lookup);
				updateA4(paramStructObj,lookup);
				paramStructArr.push(paramStructObj);
			}
			//for each assessment paremeter use calculated A1,A2,A4 to find A3
			for(var i=0;i<paramStructArr.length;i++){
				var paramStructObj=paramStructArr[i];
				if(paramStructObj.A4){
					activeSum+=paramStructObj.A1*paramStructObj.A2;
				}else{
					inactiveSum+=paramStructObj.A1*paramStructObj.A2;
				}
			}
			
			var A3=100/(activeSum-inactiveSum);
			return A3;
		}catch(e){
			throw e;
		}
	}
	/*function name:-computeFinalValue
     *input param
     *	paramStructArr
     *	A3
     *Output update result ,sum of all the coefficients
     */
	var computeFinalValue=function(A3,paramStructArr){
		try{
			var sum=0;
			for(var i=0;i<paramStructArr.length;i++){
				var paramObj=paramStructArr[i];
				sum+=paramObj.A1*paramObj.A2*paramObj.A4;
			}
			return A3*sum;
		}catch(e){
			throw e;
		}
	}
    return {
    	compute: compute
    }
})();
//-------------------------------start script 6-------------------------------------
/*
 *Factory name:-clearBufferFactory
 *This Factory holds all the reset methods of buffers which needs to be cleared based on time intervals
 */
sarvint.clearBufferFactory = (function() {
    var clearHeartRateBuffer = function() {
        ALF.hrf.reset();
    }
    return {
        clearHeartRateBuffer: clearHeartRateBuffer
    }
})();

//-------------------------------start script last-------------------------------------
//create alias for factory methods 
var ALF = {};
ALF.hf = sarvint.helperFactory;
ALF.jds = sarvint.jsDataStoreFactory;
ALF.cf = sarvint.computationFactory;
ALF.oef = sarvint.onEventDataFactory;
ALF.hrf = sarvint.heartRateStoreFactory;
ALF.cbf = sarvint.clearBufferFactory;
ALF.acef = sarvint.activityEndComputationFactory; 
ALF.cr=sarvint.computeResult;

//----------------------------Expose as modules for testing purpose only-----------------------

var JSComputationModule={};
JSComputationModule.init=init;
JSComputationModule.processData=processData;
JSComputationModule.startWorkout=startWorkout;
JSComputationModule.endWorkout=endWorkout;
JSComputationModule.clearBuffer=clearBuffer;
JSComputationModule.computeAlgo=sarvint.computeResult;
