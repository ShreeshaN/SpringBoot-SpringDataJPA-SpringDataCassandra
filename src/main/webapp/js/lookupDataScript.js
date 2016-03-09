$(document).ready(function(){
	var dialog,currentId ;
	$.get( "/getNewLookup", function( data ) {
		console.log(data);
		  if(data){
			  var lookups=data.lookup.LookupData;
			  for(var i=0;i<lookups.length;i++){
				  var lookupobj=lookups[i];
				  var strVar="";
				  strVar += "<tr>";
				  strVar += "				<td class=\"id\">"+lookupobj.lookupDataId+" <\/td>";
				  strVar += "				<td class=\"bp\">"+lookupobj.biometricParameter+"<\/td>";
				  strVar += "				<td class=\"bp_id\">"+lookupobj.biometricParameterId+"<\/td>";
				  strVar += "				<td class=\"param\">"+lookupobj.parameter+"<\/td>";
				  strVar += "				<td class=\"param_id\">"+lookupobj.parameterId+"<\/td>";
				  strVar += "				<td class=\"ub\">"+lookupobj.upperBound+"<\/td>";
				  strVar += "				<td class=\"lb\">"+lookupobj.lowerBound+"<\/td>";
				  strVar += "				<td class=\"sarvint_weight\">"+lookupobj.sarvintWeight+"<\/td>";
				  strVar += "				<td class=\"user_weight\">"+lookupobj.userWeight+"<\/td>";
				  strVar += "				<td class=\"is_active\">"+lookupobj.isActive+"<\/td>";
				  strVar += "				<td class=\"baseline\">"+lookupobj.baseline+"<\/td>";
				  strVar += "				<td ><a href=\"javascript:void(0)\" class=\"edit_data\">edit<\/a><\/td>";
				  strVar += "			<\/tr>";
				  $("#lookuptable").append(strVar);
				  
			  }
			  
		  }
		});

	
	$( document ).on( "click",".edit_data", function() {
		var $currentRow=$( this ).closest('tr');
		currentId=$currentRow.find('.id').text();
		var bp=$currentRow.find('.bp').text();
		var bp_id=$currentRow.find('.bp_id').text();
		var param=$currentRow.find('.param').text();
		var param_id=$currentRow.find('.param_id').text();
		var ub=$currentRow.find('.ub').text();
		var lb=$currentRow.find('.lb').text();
		var s_weight=$currentRow.find('.sarvint_weight').text();
		var u_weight=$currentRow.find('.user_weight').text();
		var is_active=$currentRow.find('.is_active').text();
		var baseline=$currentRow.find('.baseline').text();
		var strVar="";
		strVar += "<form>";
		strVar += "    <fieldset>";
		
		strVar += "      <label for=\"name\">Biometric Parameter<\/label>";
		strVar += "      <input type=\"text\"  id=\"bp\" value="+bp+"  class=\"text ui-widget-content ui-corner-all\">";
		
		strVar += "      <label for=\"email\">Biometric Parameter Id<\/label>";
		strVar += "      <input type=\"text\"  id=\"bp_id\"  value="+bp_id+" class=\"text ui-widget-content ui-corner-all\">";
		
		strVar += "      <label for=\"password\">Parameter<\/label>";
		strVar += "      <input type=\"text\" id=\"param\" value="+param+" class=\"text ui-widget-content ui-corner-all\">";
		
		strVar += "      <label for=\"email\">Parameter Id<\/label>";
		strVar += "      <input type=\"text\"  id=\"param_id\" value="+param_id+" class=\"text ui-widget-content ui-corner-all\">";
		
		strVar += "      <label for=\"email\">Upper Bound<\/label>";
		strVar += "      <input type=\"text\"  id=\"ub\" value="+ub+" class=\"text ui-widget-content ui-corner-all\">";
		
		strVar += "      <label for=\"email\">Lower Bound<\/label>";
		strVar += "      <input type=\"text\"  id=\"lb\" value="+lb+" class=\"text ui-widget-content ui-corner-all\">";
		
		strVar += "      <label for=\"email\">Sarvint Weight<\/label>";
		strVar += "      <input type=\"text\"  id=\"sarvint_weight\" value="+s_weight+" class=\"text ui-widget-content ui-corner-all\">";
		
		strVar += "      <label for=\"email\">User Weight<\/label>";
		strVar += "      <input type=\"text\"  id=\"user_weight\" value="+u_weight+" class=\"text ui-widget-content ui-corner-all\">";
		
		strVar += "      <label for=\"email\">Is Active<\/label>";
		strVar += "      <input type=\"text\"  id=\"is_active\" value="+is_active+" class=\"text ui-widget-content ui-corner-all\">";
		
		strVar += "      <label for=\"email\">Baseline<\/label>";
		strVar += "      <input type=\"text\"  id=\"baseline\" value="+baseline+" class=\"text ui-widget-content ui-corner-all\">";
		
		strVar += " ";
		strVar += "    <\/fieldset>";
		strVar += "  <\/form>";

		dialog.html(strVar);
	    dialog.dialog( "open" );
		
	  
	});
	function updateLookup(){
		var lookupobj={};
		lookupobj.lookupDataId=currentId;
		lookupobj.biometricParameter=$('#bp').val();
		lookupobj.biometricParameterId=$('#bp_id').val();
		lookupobj.parameter=$('#param').val();
		lookupobj.parameterId=$('#param_id').val();
		lookupobj.upperBound=$('#ub').val();
		lookupobj.lowerBound=$('#lb').val();
		lookupobj.sarvintWeight=$('#sarvint_weight').val();
		lookupobj.userWeight=$('#user_weight').val();
		lookupobj.isActive=$('#is_active').val();
		lookupobj.baseline=$('#baseline').val();
		console.log(lookupobj);
		dialog.dialog( "close" );
		//post lookup
		//reload page
		
		$.ajax({
            url: '/saveLookupData',
             type: 'POST',
             dataType: 'json',
             contentType: "application/json",
             data: JSON.stringify(lookupobj),
             success: function(data) {
               alert("success");
               window.location.reload();

             },
             error: function(data) {
                 window.location.reload();
               //alert("Error saving script");
             }
          });
}
	 dialog = $( "#dialog-form" ).dialog({
	      autoOpen: false,
	      height: 300,
	      width: 350,
	      modal: true,
	      buttons: {
	       'Update':updateLookup,
	        Cancel: function() {
	          dialog.dialog( "close" );
	        }
	      },
	      close: function() {
	      
	      }
	    });
	
	
})