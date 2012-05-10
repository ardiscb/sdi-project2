/*
Author: Courtney Ardis
Date: May 10, 2012
Assignment: Deliverable 2
Term: 1205
*/

var procedure = function (argument){
	if (argument = 0) {
		console.log("");
	} else {
		console.log("");
	}
}

//Boolean function
//Determines the team that has been assigned to a ticket 
var determineTeam = function (hardwareTeamIssue, programmingTeamIssue) {
	if(hardwareTeamIssue === true || programmingTeamIssue === true) {
		if(hardwareTeamIssue === true) {
			team = console.log("A technician from the hardware team has been assigned to your ticket.");
		} else {
			team = console.log("A technician from the programming team has been assigned to your ticket.");
		}
		return team;
	} else {
		team = console.log("A technician from the help desk team has been assigned to your ticket.");
		return team;
	}
}

//Number function
//Reminder to do call backs
//Need to change logic/math
var voicemailReminder = function (voicemails) {
	var voicemails = i;
	var i = 1;
	while(i < 10) {
		console.log("You have " + i + " to call back.");
		i++;
	}
	return voicemails;
}

//Procedure call
//procedure(argument);

//Boolean function call
determineTeam(false, true);

//Number function call
voicemailReminder(4);

