$(document).ready(function(){
	var dialog,currentId ;
	$.get( "/getNewPacketData", function( data ) {
		console.log(data);
		  if(data){
			  var packetdata=data.packetData;
			  for(var i=0;i<packetdata.length;i++){
				  var lookupobj=packetdata[i];
				  var strVar="";
				  strVar += "<tr>";
				  strVar += "				<td class=\"id\">"+lookupobj.packetDataId+" <\/td>";
				  strVar += "				<td class=\"pname\">"+lookupobj.packetDataName+"<\/td>";
				  strVar += "				<td class=\"pvalue\">"+JSON.stringify(lookupobj.packetDataValue)+"<\/td>";
				  strVar += "				<td ><a href=\"javascript:void(0)\" class=\"edit_data\">edit<\/a><\/td>";
				  strVar += "			<\/tr>";
				  $("#packetDataTable").append(strVar);
				  
			  }
			  
		  }
		});
	
	
	$( document ).on( "click",".edit_data", function() {
		var $currentRow=$( this ).closest('tr');
		currentId=$currentRow.find('.id').text();
		var pname=$currentRow.find('.pname').text();
		var pvalue=$currentRow.find('.pvalue').text();
		var strVar="";
		strVar += "<form>";
		strVar += "    <fieldset>";
		
		strVar += "      <label for=\"name\">Packet Name<\/label>";
		strVar += "      <input type=\"text\"  id=\"pname\" value="+pname+"  class=\"text ui-widget-content ui-corner-all\">";
		
		strVar += "      <label for=\"email\">Packet Value<\/label>";
		strVar += "      <input type=\"text\"  id=\"pvalue\"  value="+pvalue+" class=\"text ui-widget-content ui-corner-all\">";
	
		strVar += " ";
		strVar += "    <\/fieldset>";
		strVar += "  <\/form>";

		dialog.html(strVar);
	    dialog.dialog( "open" );
	});
	
	
	function updateLookup(){
		var lookupobj={};
		lookupobj.packetDataId=currentId;
		lookupobj.packetDataName=$('#pname').val();
		lookupobj.packetDataValue=$('#pvalue').val();
		console.log(lookupobj);
		dialog.dialog( "close" );
		//post lookup
		//reload page
		
		$.ajax({
            url: '/saveNewPacketData',
             type: 'POST',
             dataType: 'json',
             contentType: "application/json",
             data: JSON.stringify(lookupobj),
             success: function(data) {
               alert("success");
               window.location.reload();

             },
             error: function(data) {
               alert("Error saving script");
             }
          });
}
	
	dialog = $( "#dialog-form-packetdata" ).dialog({
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
	
});