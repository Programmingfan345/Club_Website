"use strict";
function removeClub(clubName, clubId) {
    //The variable remove_it prompts the user to confirm if they want to remove the club
    var remove_it = confirm("Are you sure you want to remove this club?");
	//If the user removes the club, the results function will execute
	if(remove_it){
		new Ajax.Request("remove_club.php", 
		{
        		method: "post",
        		parameters: { club_name: clubName, club_id: clubId },
        		onSuccess: function (ajax) {
            			results(ajax, clubId);         	
		}
    });
	}	
	
}
// The results function will collect a club by its ID and remove it
function results(ajax, clubId) {
        const clubElement = document.getElementById(clubId);
	clubElement.remove();
	alert("Success! The club you selected will be removed shortly.");
}
