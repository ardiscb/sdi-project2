/*
Author: Courtney Ardis
Date: May 10, 2012
Assignment: Deliverable 2
Term: 1205
*/

//This is not a part of this project. This function is used to abort the script for the procedure conditional.
var javascriptAbort = function () {
   		throw new Error('This is NOT an error. This is used to abort the script.');
};
//END javascriptAbort

//START

//Procedure
var ticketStatus = function (ticket){
	if (ticket === true) {
		console.log("Your ticket has been created.");
	} else {
		console.log("Your ticket has not been created yet. Please call us so we can get your problem solved");
		javascriptAbort();

	}
};
//END ticketStatus

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
};
//END determineTeam

//Number function
//Remindes team every 15 minutes to do call backs within hour of voicemail
//Fixed infinite loop, still nothing displays
var callBackReminder = function (minutesPassed) {
	var minutesLeft = 60;
	var minutesPassed = 0;
	while(minutesPassed < 60 && minutesPassed > 0) {
		console.log("Your team has " + minutesLeft + " minutes to do call backs.");
		minutesPassed = minutesLeft - 15;
	};
	return minutesPassed;
};
//END callBackReminder

//String function
var nameTechnician = function(fname, lname) {
	//local variables
	var name = fname + " " + lname;
	//string concatenation
	console.log("Your technician's name is " + name);
	return name;
};
//END nameTechnician

//Array function
var doArray = function(number, array) {
	//local variables
	for (i = 0; i > 10; i++) {
		//Math
		console.log("");
	}
	return array;
};
//END doArray

//Outputs

//Procedure call
ticketStatus(true);

//Boolean function call
determineTeam(false, true);

console.log("All technicans must do call backs within an hour of the initial call.")

//Number function call
callBackReminder(20);

//String function call
nameTechnician("Courtney", "Ardis")

//Array function call
//doArray(5, array);

//FINISH
