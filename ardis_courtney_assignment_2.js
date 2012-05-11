/*
Author: Courtney Ardis
Date: May 10, 2012
Assignment: Deliverable 2
Term: 1205
*/

//This function is not a part of this project. 
//It is used to abort the script.
var javascriptAbort = function () {
   		throw new Error('This is NOT an error. This is used to abort the script.');
};
//END javascriptAbort

/////////
//START//
/////////

//Procedure
/*
//Notifies user of ticket creation or 
non-creation and stops script because 
none of the other functions would apply 
if the ticket was not created.
*/
var notifyTicketStatus = function (ticket){
	if (ticket === true) {
		console.log("Your ticket has been created.");
	} else {
		console.log("Your ticket has not been created yet. Please call us so we can get your problem solved.");
		javascriptAbort();
	};
};
//END notifyTicketStatus

//Boolean function
//Determines the team that has been assigned to a ticket 
var determineTeam = function (hardwareTeamIssue, programmingTeamIssue) {
	if(hardwareTeamIssue === true || programmingTeamIssue === true) {
		if(hardwareTeamIssue === true) {
			team = console.log("A technician from the hardware team has been assigned to your ticket.");
		} else {
			team = console.log("A technician from the programming team has been assigned to your ticket.");
		};
		return team;
	} else {
		team = console.log("A technician from the help desk team has been assigned to your ticket.");
		return team;
	};
};
//END determineTeam

//Number function
//Remindes team every 15 minutes to do call backs within hour of voicemail
//Fixed infinite loop with break statement, but logic incorrect
var callBackReminder = function (minutesPassed) {
	var minutesLeft = 60;
	var minutesPassed = 0;
	while(minutesPassed < 60) {
		//Decrease by 15 minutes
		//Broken
		var minutesPassed = Math.round(minutesLeft - 15);
		console.log("Your team has " + minutesLeft + " minutes to do call backs.");
		if (minutesPassed <= 0) {
			break;
		} else {
			break;
		};
	};
	return minutesPassed;
};
//END callBackReminder

//String function
/*
//Notifies user of who owns their 
ticket and will be their first point 
of contact regarding the specific issue.
*/
var nameTechnician = function(fname, lname) {
	//local variables
	var name = fname + " " + lname;
	//string concatenation
	console.log("Your technician's name is " + name);
	return name;
};
//END nameTechnician

//Array function
//Shows three examples of information the user would get in their email about a ticket.
var doArray = function(ticketNumber, array) {
	//local variables
	var ticketNumber;
	array = ["Password reset", "Monitor is blank", "Need PIN"];
	for (i = 0; i < array.length; i++) {
		var number = ticketNumber++;
		console.log("Ticket Number: " + number);
		console.log("Item Title: " + array[i]);
	};
	return array;
};
//END doArray

//Outputs

//Procedure call
notifyTicketStatus(true);
//Boolean function call
determineTeam(false, true);
console.log("All technicians must do call backs within an hour of the initial call.")
//Number function call
callBackReminder(20);
//String function call
nameTechnician("Courtney", "Ardis")
//Array function call
doArray(9, 0);

//////////
//FINISH//
//////////
