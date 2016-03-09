<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="javax.servlet.http.HttpSession"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
 <link rel="stylesheet" href="./css/jquery-ui.css">

<style>
         table, td, th {    
         border: 1px solid #ddd;
         text-align: center;
         }
         table {
         border-collapse: collapse;
         width: 100%;
         }
         th, td {
         padding: 15px;
         }
        
    body { font-size: 62.5%; }
    label, input { display:block; }
    input.text { margin-bottom:12px; width:95%; padding: .4em; }
    fieldset { padding:0; border:0; margin-top:25px; }
    h1 { font-size: 1.2em; margin: .6em 0; }
    div#users-contain { width: 350px; margin: 20px 0; }
    div#users-contain table { margin: 1em 0; border-collapse: collapse; width: 100%; }
    div#users-contain table td, div#users-contain table th { border: 1px solid #eee; padding: .6em 10px; text-align: left; }
    .ui-dialog .ui-state-error { padding: .3em; }
    .validateTips { border: 1px solid transparent; padding: 0.3em; }

      </style>
<title>Edit lookups</title>
</head>
<body>
	<h2>Edit lookups</h2>
<div id="dialog-form" title="Edit Lookup">
  
</div>

<table id="lookuptable" >
		<thead>
			<tr>
			<td>Lookup Id</td>
			<td>Biometric Parameter</td>
			<td>Biometric parameter Id</td>
			<td>Parameter</td>
			<td>Parameter Id</td>
			<td>Upper bound</td>
			<td>Lower bound</td>
			<td>Sarvint weight</td>
			<td>User weight</td>
			<td>Is active</td>
			<td>Baseline</td>
			<td>Action</td>
			
			</tr>
		</thead>
		<tbody>
			
		</tbody>
	</table>
	 	<script src="./js/jquery.min.js"></script>
	<script src="./js/jquery-ui.js"></script>
	<script type="text/javascript" src="./js/lookupDataScript.js"></script>
</body>
</html>