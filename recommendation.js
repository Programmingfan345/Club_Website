"use strict"
window.onload = pageLoad; 
// displays the results when a user presses and releases a key
function pageLoad(){
	document.getElementById("clubname").onkeyup = showResults; 
}

function showResults()
{
  var clubInput = document.getElementById("clubname").value; 
  //if there are no characters present, no results show
  if (clubInput.length === 0)
  { 
     document.getElementById("txtHint").innerHTML = "";
     return;  
  }
  
  new Ajax.Request( "search_result.php", 
  { 
    method: "get", 
    parameters: {cname:clubInput},
    onSuccess: ajaxSuccess,
    onFailure: ajaxFailure
  } );
}

//executes when request is successful
function ajaxSuccess(ajax){
    document.getElementById("txtHint").innerHTML = ajax.responseText;
}
//executes when ajax request is unsuccessful
function ajaxFailure(){
	alert("Ajax request failed");
}