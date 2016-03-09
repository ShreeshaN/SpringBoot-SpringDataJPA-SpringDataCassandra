var showResults = [];

var SSNativeCalculationJSLib = {

	getUserProfile : function() {
		return {
			height : 64, // inches
			weight : 150, // pounds
			age : 26,
			gender : "M" // M or F
		}
	},
	getLookUpJSON : function() {
		return JSON.stringify(getCoeefcientData());
	},
	consoleLog : function(data) {
		console.log(data);
	},
	setKeyValueColorTime : function(key, value, color, timestamp) {
		var result = {};
		result.key = key;
		result.value = value;
		result.color = color;
		result.timestamp = timestamp;
		var showResult = false;
		if (showResults.length == 0) {
			showResult = true;
		} else if (showResults.indexOf(key) != -1) {
			showResult = true;
		}
		if (showResult) {
			var strVar = "";
			strVar += " <tr>";
			strVar += "                     <td>" + key + "<\/td>";
			strVar += "                     <td>" + value + "<\/td>";
			strVar += "                     <td>" + color + "<\/td>";
			strVar += "                  <\/tr>";

			$("tbody").prepend(strVar);
		}
	},
	errorLog : function(eventData, errorstack) {
		alert("Error");
		console
				.log("------------------------Error:------------------------------------");
		console.log("Data:" + eventData);
		console.log("Error:" + errorstack);
		console
				.log("------------------------------------------------------------");
	},
	setShowResults : function(d) {
		showResults = [];
		var data = d.split(",");
		if (data.length > 0) {
			for (var i = 0; i < data.length; i++) {
				var bp = $.trim(data[i]);
				if (bp != "")
					showResults.push(data[i]);
			}
		}
	},
	findAvgForEventCode : function(eCode) {
		return 1;
	},
	findAvgForBiometricParam : function(key) {
		return 1;
	},
	findMaxForBiometricParam:function(key){
		return 1;
	},
	findSumForBiometricParam:function(key){
		return 1;
	},
	findLatestForBiometricParam:function(key){
		return 1;
	},
	getWorkoutElapsedTime:function(){
		return 10000;//in seconds
	},
	getLookupAssessment:function(){
		return JSON.stringify(getLookupdata());
	}

}
function getLookupdata(){
	return [{
		"lookupDataId": 322,
		"biometricParameter": "Chronotropic_Index",
		"biometricParameterId": "chronotropic_index",
		"parameter": "Peak_HR",
		"parameterId": "parameter_0",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 200
	}, {
		"lookupDataId": 323,
		"biometricParameter": "Chronotropic_Index",
		"biometricParameterId": "chronotropic_index",
		"parameter": "HRV",
		"parameterId": "parameter_1",
		"upperBound": 150.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 75
	}, {
		"lookupDataId": 324,
		"biometricParameter": "Chronotropic_Index",
		"biometricParameterId": "chronotropic_index",
		"parameter": "HRR",
		"parameterId": "parameter_2",
		"upperBound": 60.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 40
	}, {
		"lookupDataId": 325, 
		"biometricParameter": "Aerobic_Capacity",
		"biometricParameterId": "aerobic_capacity",
		"parameter": "Peak_HR/Resting_HR",
		"parameterId": "parameter_0",
		"upperBound": 7.5,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 326,
		"biometricParameter": "Cardiac_Performance",
		"biometricParameterId": "cardiac_performance",
		"parameter": "HR*SV/BSA",
		"parameterId": "parameter_0",
		"upperBound": 21.67,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 327,
		"biometricParameter": "Respiratory_Performance",
		"biometricParameterId": "respiratory_performance",
		"parameter": "RR*TV/BSA",
		"parameterId": "parameter_0",
		"upperBound": 50.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 328,
		"biometricParameter": "Respiratory,Performance",
		"biometricParameterId": "respiratory_performance",
		"parameter": "I/E",
		"parameterId": "parameter_1",
		"upperBound": 1.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 329,
		"biometricParameter": "Asthma_Alert",
		"biometricParameterId": "asthma_alert",
		"parameter": "I/E",
		"parameterId": "parameter_0",
		"upperBound": 1.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 330,
		"biometricParameter": "Aerobic_Fitness",
		"biometricParameterId": "aerobic_fitness",
		"parameter": "Cardiac_Performance",
		"parameterId": "parameter_0",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 100
	}, {
		"lookupDataId": 331,
		"biometricParameter": "Aerobic_Fitness",
		"biometricParameterId": "aerobic_fitness",
		"parameter": "Respiratory_Performance",
		"parameterId": "parameter_1",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 100
	}, {
		"lookupDataId": 332,
		"biometricParameter": "Aerobic_Fitness",
		"biometricParameterId": "aerobic_fitness",
		"parameter": "Chronotropic_Fitness",
		"parameterId": "parameter_2",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 81.8181818
	}, {
		"lookupDataId": 333,
		"biometricParameter": "Muscle_Group_Performance",
		"biometricParameterId": "muscle_group_performance",
		"parameter": "Strength",
		"parameterId": "parameter_0",
		"upperBound": 100.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 334,
		"biometricParameter": "Muscle_Group_Performance",
		"biometricParameterId": "muscle_group_performance",
		"parameter": "Quickness",
		"parameterId": "parameter_1",
		"upperBound": 5000.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 335,
		"biometricParameter": "Muscle_Group_Performance",
		"biometricParameterId": "muscle_group_performance",
		"parameter": "Endurance",
		"parameterId": "parameter_2",
		"upperBound": 1800000.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 336,
		"biometricParameter": "Chest",
		"biometricParameterId": "chest",
		"parameter": "Deltoid_Performance",
		"parameterId": "parameter_0",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 337,
		"biometricParameter": "Chest",
		"biometricParameterId": "chest",
		"parameter": "Pectoralis-Performance",
		"parameterId": "parameter_1",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 338,
		"biometricParameter": "Chest",
		"biometricParameterId": "chest",
		"parameter": "Tricep_Performance",
		"parameterId": "parameter_2",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 339,
		"biometricParameter": "Back",
		"biometricParameterId": "back",
		"parameter": "Trapezius_Performance",
		"parameterId": "parameter_0",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 340,
		"biometricParameter": "Back",
		"biometricParameterId": "back",
		"parameter": "Latissimus_Performance",
		"parameterId": "parameter_1",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 341,
		"biometricParameter": "Back",
		"biometricParameterId": "back",
		"parameter": "Biceps_Performance",
		"parameterId": "parameter_2",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 342,
		"biometricParameter": "Leg",
		"biometricParameterId": "leg",
		"parameter": "Quadriceps_Performance",
		"parameterId": "parameter_0",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 343,
		"biometricParameter": "Leg",
		"biometricParameterId": "leg",
		"parameter": "Hamstrings_Performance",
		"parameterId": "parameter_1",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 344,
		"biometricParameter": "Leg",
		"biometricParameterId": "leg",
		"parameter": "Gluteus_Maximus_Performance",
		"parameterId": "parameter_2",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 345,
		"biometricParameter": "Core_Performance",
		"biometricParameterId": "core_performance",
		"parameter": "Abdominal_Performance",
		"parameterId": "parameter_0",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 346,
		"biometricParameter": "Strength",
		"biometricParameterId": "strength",
		"parameter": "Chest_Performance",
		"parameterId": "parameter_0",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 347,
		"biometricParameter": "Strength",
		"biometricParameterId": "strength",
		"parameter": "Back_Performance",
		"parameterId": "parameter_1",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 348,
		"biometricParameter": "Strength",
		"biometricParameterId": "strength",
		"parameter": "Leg_Performance",
		"parameterId": "parameter_2",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 349,
		"biometricParameter": "Strength",
		"biometricParameterId": "strength",
		"parameter": "Core_Performance",
		"parameterId": "parameter_3",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 350,
		"biometricParameter": "Hydration",
		"biometricParameterId": "hydration",
		"parameter": "Transient_skin_conduction",
		"parameterId": "parameter_0",
		"upperBound": 1000.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 351,
		"biometricParameter": "Hydration",
		"biometricParameterId": "hydration",
		"parameter": "Baseline_skin_conduction",
		"parameterId": "parameter_1",
		"upperBound": 1000.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 352,
		"biometricParameter": "Hydration",
		"biometricParameterId": "hydration",
		"parameter": "HR",
		"parameterId": "parameter_2",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 353,
		"biometricParameter": "Hydration",
		"biometricParameterId": "hydration",
		"parameter": "SV",
		"parameterId": "parameter_3",
		"upperBound": 0.1,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 354,
		"biometricParameter": "Excitement",
		"biometricParameterId": "excitement",
		"parameter": "Transient_skin_conduction",
		"parameterId": "parameter_0",
		"upperBound": 1000.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 355,
		"biometricParameter": "Excitement",
		"biometricParameterId": "excitement",
		"parameter": "Baseline_skin_conduction",
		"parameterId": "parameter_1",
		"upperBound": 1000.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 356,
		"biometricParameter": "Excitement",
		"biometricParameterId": "excitement",
		"parameter": "HR",
		"parameterId": "parameter_2",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 357,
		"biometricParameter": "Excitement",
		"biometricParameterId": "excitement",
		"parameter": "RR",
		"parameterId": "parameter_3",
		"upperBound": 80.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 358,
		"biometricParameter": "Excitement",
		"biometricParameterId": "excitement",
		"parameter": "EMG",
		"parameterId": "parameter_4",
		"upperBound": 100.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 359,
		"biometricParameter": "Physique",
		"biometricParameterId": "physique",
		"parameter": "Baseline_skin_conduction",
		"parameterId": "parameter_0",
		"upperBound": 1000.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 360,
		"biometricParameter": "Sarvint",
		"biometricParameterId": "sarvint",
		"parameter": "Aerobic_Capacity",
		"parameterId": "parameter_0",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 361,
		"biometricParameter": "Sarvint",
		"biometricParameterId": "sarvint",
		"parameter": "Chronotropic",
		"parameterId": "parameter_1",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 362,
		"biometricParameter": "Sarvint",
		"biometricParameterId": "sarvint",
		"parameter": "Aerobic_Fitness",
		"parameterId": "parameter_2",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 363,
		"biometricParameter": "Sarvint",
		"biometricParameterId": "sarvint",
		"parameter": "Strength",
		"parameterId": "parameter_3",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 364,
		"biometricParameter": "Sarvint",
		"biometricParameterId": "sarvint",
		"parameter": "Excitement",
		"parameterId": "parameter_4",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 365,
		"biometricParameter": "Sarvint",
		"biometricParameterId": "sarvint",
		"parameter": "Hydration",
		"parameterId": "parameter_5",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 366,
		"biometricParameter": "Sarvint",
		"biometricParameterId": "sarvint",
		"parameter": "Physique",
		"parameterId": "parameter_6",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 367,
		"biometricParameter": "Sarvint",
		"biometricParameterId": "sarvint",
		"parameter": "Quickness",
		"parameterId": "parameter_7",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}, {
		"lookupDataId": 368,
		"biometricParameter": "Sarvint",
		"biometricParameterId": "sarvint",
		"parameter": "Power",
		"parameterId": "parameter_8",
		"upperBound": 300.0,
		"lowerBound": 0.0,
		"sarvintWeight": 10.0,
		"userWeight": 10.0,
		"isActive": 1,
		"baseline": 50
	}]
}
function getCoeefcientData() {
	return [ {
		"coefficientId" : 1,
		"coefficientKey" : "CR1",
		"coefficientValue" : 0.333
	}, {
		"coefficientId" : 2,
		"coefficientKey" : "CR2",
		"coefficientValue" : 0.333
	}, {
		"coefficientId" : 3,
		"coefficientKey" : "CR3",
		"coefficientValue" : 0.333
	}, {
		"coefficientId" : 4,
		"coefficientKey" : "RP1",
		"coefficientValue" : 0.5
	}, {
		"coefficientId" : 5,
		"coefficientKey" : "RP2",
		"coefficientValue" : 0.5
	}, {
		"coefficientId" : 6,
		"coefficientKey" : "AF1",
		"coefficientValue" : 0.333
	}, {
		"coefficientId" : 7,
		"coefficientKey" : "AF2",
		"coefficientValue" : 0.333
	}, {
		"coefficientId" : 8,
		"coefficientKey" : "AF3",
		"coefficientValue" : 0.333
	}, {
		"coefficientId" : 9,
		"coefficientKey" : "EMGP1",
		"coefficientValue" : 0.166
	}, {
		"coefficientId" : 10,
		"coefficientKey" : "EMGP2",
		"coefficientValue" : 0.166
	}, {
		"coefficientId" : 11,
		"coefficientKey" : "EMGP3",
		"coefficientValue" : 0.166
	}, {
		"coefficientId" : 12,
		"coefficientKey" : "EMGP4",
		"coefficientValue" : 0.166
	}, {
		"coefficientId" : 13,
		"coefficientKey" : "EMGP5",
		"coefficientValue" : 0.166
	}, {
		"coefficientId" : 14,
		"coefficientKey" : "EMGP6",
		"coefficientValue" : 0.166
	}, {
		"coefficientId" : 15,
		"coefficientKey" : "AEMGP1",
		"coefficientValue" : 0.333
	}, {
		"coefficientId" : 16,
		"coefficientKey" : "AEMGP2",
		"coefficientValue" : 0.333
	}, {
		"coefficientId" : 17,
		"coefficientKey" : "AEMGP3",
		"coefficientValue" : 0.333
	}, {
		"coefficientId" : 18,
		"coefficientKey" : "H1",
		"coefficientValue" : 0.25
	}, {
		"coefficientId" : 19,
		"coefficientKey" : "H2",
		"coefficientValue" : 0.25
	}, {
		"coefficientId" : 20,
		"coefficientKey" : "H3",
		"coefficientValue" : 0.25
	}, {
		"coefficientId" : 21,
		"coefficientKey" : "H4",
		"coefficientValue" : 0.25
	}, {
		"coefficientId" : 22,
		"coefficientKey" : "E1",
		"coefficientValue" : 0.2
	}, {
		"coefficientId" : 23,
		"coefficientKey" : "E2",
		"coefficientValue" : 0.2
	}, {
		"coefficientId" : 24,
		"coefficientKey" : "E3",
		"coefficientValue" : 0.2
	}, {
		"coefficientId" : 25,
		"coefficientKey" : "E4",
		"coefficientValue" : 0.2
	}, {
		"coefficientId" : 26,
		"coefficientKey" : "E5",
		"coefficientValue" : 0.2
	}, {
		"coefficientId" : 27,
		"coefficientKey" : "P1",
		"coefficientValue" : 0.333
	}, {
		"coefficientId" : 28,
		"coefficientKey" : "P2",
		"coefficientValue" : 0.333
	}, {
		"coefficientId" : 29,
		"coefficientKey" : "P3",
		"coefficientValue" : 0.333
	}, {
		"coefficientId" : 30,
		"coefficientKey" : "SS1",
		"coefficientValue" : 0.111
	}, {
		"coefficientId" : 31,
		"coefficientKey" : "SS2",
		"coefficientValue" : 0.111
	}, {
		"coefficientId" : 32,
		"coefficientKey" : "SS3",
		"coefficientValue" : 0.111
	}, {
		"coefficientId" : 33,
		"coefficientKey" : "SS4",
		"coefficientValue" : 0.111
	}, {
		"coefficientId" : 34,
		"coefficientKey" : "SS5",
		"coefficientValue" : 0.111
	}, {
		"coefficientId" : 35,
		"coefficientKey" : "SS6",
		"coefficientValue" : 0.111
	}, {
		"coefficientId" : 36,
		"coefficientKey" : "SS7",
		"coefficientValue" : 0.111
	}, {
		"coefficientId" : 37,
		"coefficientKey" : "SS8",
		"coefficientValue" : 0.111
	}, {
		"coefficientId" : 38,
		"coefficientKey" : "SS9",
		"coefficientValue" : 0.111
	}, {
		"coefficientId" : 39,
		"coefficientKey" : "CHRMax1",
		"coefficientValue" : 208
	}, {
		"coefficientId" : 40,
		"coefficientKey" : "CHRMax2",
		"coefficientValue" : 0.7
	}, {
		"coefficientId" : 41,
		"coefficientKey" : "AC1",
		"coefficientValue" : 1
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "RANGE",
		"coefficientValue" : 8
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "G",
		"coefficientValue" : 9.8
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "Q",
		"coefficientValue" : 15
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "pounds_to_kg",
		"coefficientValue" : 0.453592
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "sv_coefficient",
		"coefficientValue" : 1
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "knots_to_meters_per_sec",
		"coefficientValue" : 0.514
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "max_hr_buf_size",
		"coefficientValue" : 8
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "hr_clear_buf_interval",
		"coefficientValue" : 10
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "tv_coefficient",
		"coefficientValue" : 1
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "E1",
		"coefficientValue" : 0.2
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "E2",
		"coefficientValue" : 0.2
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "E3",
		"coefficientValue" : 0.2
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "E4",
		"coefficientValue" : 0.2
	}, {
		"coefficientId" : 42,
		"coefficientKey" : "E5",
		"coefficientValue" : 0.2
	} ]
} 
