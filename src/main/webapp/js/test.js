$(document).ready(function(){
var totalPackets=0;
//call init to load coefficient
JSComputationModule.init();
//startworkout
JSComputationModule.startWorkout(new Date().getTime());
//start clear buffer intervals
//input data model



$("#calculate").click(function(){
	try{
		SSNativeCalculationJSLib.setShowResults($("#showforbp").val());
		var packets=JSON.parse($("#packets").val());
		if(packets.length>0){
			
			if(packets[0].eventcode !=null){
				for(var i=0;i<packets.length;i++){
					var inputData={};
					inputData.paramX=packets[i].paramx;
					inputData.eventCode=packets[i].eventcode;
					inputData.val=packets[i].val;
					totalPackets++;
					var strVar="";
					strVar += " <tr bgcolor='#d3d3d3' >";
					strVar += "                     <td colspan='3'>"+"#"+totalPackets+"="+JSON.stringify(inputData)+"<\/td>";
					strVar += " <\/tr>";
					
					$("tbody").prepend(strVar);
					JSComputationModule.processData(inputData);
				}
			}else if(packets[0].bp_id !=null){
			   	for(var i=0;i<packets.length;i++){
					totalPackets++;
					var strVar="";
					strVar += " <tr bgcolor='#d3d3d3' >";
					strVar += "                     <td colspan='3'>"+"#"+totalPackets+"="+JSON.stringify(packets[i])+"<\/td>";
					strVar += " <\/tr>";
					$("tbody").prepend(strVar);
					JSComputationModule.computeAlgo.compute(packets[i].bp_id,packets[i].parameters);
				}
			}else{
				alert("invalid data");
			}
		}
	}catch(e){
		alert(e.getMessage());
	}
});
});

