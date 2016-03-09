<!DOCTYPE html>
<html lang="en">
   <head>
      <style>
         table, td, th {    
         border: 1px solid #ddd;
         text-align: left;
         }
         table {
         border-collapse: collapse;
         width: 100%;
         }
         th, td {
         padding: 15px;
         }
         .center {
         margin: auto;
         width: 70%;
         padding: 10px;
         }
      </style>
   </head>
   <body>
      <div class="center" >
	<h1>Enter packet values in below text box</h1>
         <div>
            <textarea id="packets" style="width:100%;min-height:200px;">
	 [
		 {
		  "val": [2,12,915937],
		  "paramx":null ,
		  "eventcode": 27
		 }, {
		  "val": [1,77,574883],
		  "paramx":null ,
		  "eventcode": 27
		 }, {
		  "val": [2,12,925181],
		  "paramx":null ,
		  "eventcode": 27
		 }, {
		  "val": [1,77,560678],
		  "paramx":null ,
		  "eventcode": 27
		 }
	 ]
or
	[
		{
		"bp_id":"chronotropic_index",
		"parameters":[
			{"parameterId":"parameter_0","value":100},
			{"parameterId":"parameter_1","value":75},
			{"parameterId":"parameter_2","value":40}
			]
		}	
	]

</textarea>
         </div>
	</br>
	
	<div>
          <label>Output Biometric parameters :&nbsp;&nbsp;</label><input id="showforbp" type="text"/>
         </div>
	</br>
	<div>
          <button id="calculate">Submit</button>
         </div>
	</br>
         <div>
            <table>
               <thead>
                  <tr>
                     <th >Biometric Key</th>
                     <th >value</th>
                     <th >color</th>
                  </tr>
               </thead>
               <tbody>
                 
               </tbody>
            </table>
         </div>
      </div>
      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="../js/jquery.min.js"></script>
  	<script src="../js/iosinterface.js"></script>
 	<script src="../js/sarvintscript.js"></script> 
	<script src="../js/test.js"></script>
   </body>
</html>
