/* jshint esnext: true */

export default class NesterDemo {

	static run() {
		let Nester  = require('../src/FluentNester.es6.js');

		let dataMap = getData();

		let nester = new Nester()
					.key({label: (d) => { return d.status; }, sort: function(a,b) { if(a === 'In Progress') { return -1; } else {return +1; }  }})
					.key({label: (d) => { return d.priority; }, sort: undefined})
					.rollup(function(leaves) { return leaves.length; });
		let nested = nester.nest(dataMap);
		return JSON.stringify(nested, null, 2);
	}
}


function getData() {

	return [
	  {
	    "id": "T-024",
	    "name": "Organisation list in directory",
	    "priority": "MUST",
	    "who": "Joe",
	    "time": "5",
	    "status": "Complete"
	  },
	  {
	    "id": "T-015",
	    "name": "Make term Commissions customisable",
	    "priority": "MUST",
	    "who": "Natasha",
	    "time": "6",
	    "status": "Complete"
	  },
	  {
	    "id": "T-016",
	    "name": "Comments popup on select rates",
	    "priority": "MUST",
	    "who": "Mike",
	    "time": "3",
	    "status": "In Progress"
	  },
	  {
	    "id": "T-0169",
	    "name": "Upgrade Centos Box",
	    "priority": "MUST",
	    "who": "Joe",
	    "time": "2",
	    "status": "In Progress"
	  },
	  {
	    "id": "T-013",
	    "name": "Search in Documents on selected folder",
	    "priority": "MUST",
	    "who": "Natasha",
	    "time": "6",
	    "status": "In Progress"
	  },
	  {
	    "id": "T-014",
	    "name": "Separate Document system for LA and Legals",
	    "priority": "MUST",
	    "who": "Joe",
	    "time": "9",
	    "status": "In Progress"
	  },
	  {
	    "id": "T-017",
	    "name": "Demo of Look and Feel of Documents front end",
	    "priority": "MUST",
	    "who": "Natasha",
	    "time": "5",
	    "status": "In Progress"
	  },
	  {
	    "id": "T-021",
	    "name": "Fix error where forum filename is greater than 100chars",
	    "priority": "MUST",
	    "who": "Mike",
	    "time": "4",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-025",
	    "name": "Fix admin so structure of categories displayed",
	    "priority": "MUST",
	    "who": "Mike",
	    "time": "2.5",
	    "status": "Complete"
	  },
	  {
	    "id": "T-027",
	    "name": "Reorganise git repos in Assembla",
	    "priority": "MUST",
	    "who": "Joe",
	    "time": "3",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-033",
	    "name": "Tree not showing correctly in documents",
	    "priority": "MUST",
	    "who": "Natasha",
	    "time": "1",
	    "status": "In Progress"
	  },
	  {
	    "id": "T-052",
	    "name": "Add Cacheing",
	    "priority": "MUST",
	    "who": "Mike",
	    "time": "1.5",
	    "status": "Complete"
	  },
	  {
	    "id": "T-055",
	    "name": "Allow custom ordering of document categories",
	    "priority": "MUST",
	    "who": "Joe",
	    "time": "0.5",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-056",
	    "name": "Pressing enter on date button triggers cancel",
	    "priority": "MUST",
	    "who": "Joe",
	    "time": "1",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-057",
	    "name": "Ajax not working on IE when selecting org",
	    "priority": "MUST",
	    "who": "Natasha",
	    "time": "6",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-060",
	    "name": "Send Reminder Email as required",
	    "priority": "SHOULD",
	    "who": "Mike",
	    "time": "3",
	    "status": "Complete"
	  },
	  {
	    "id": "T-061",
	    "name": "Attach Document to response in Forum",
	    "priority": "SHOULD",
	    "who": "Joe",
	    "time": "4",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-062",
	    "name": "Forum thread notifications",
	    "priority": "SHOULD",
	    "who": "Natasha",
	    "time": "9",
	    "status": "Complete"
	  },
	  {
	    "id": "T-063",
	    "name": "Group email notification",
	    "priority": "SHOULD",
	    "who": "Mike",
	    "time": "8",
	    "status": "In Progress"
	  },
	  {
	    "id": "T-064",
	    "name": "Admin can see Who is logged in ",
	    "priority": "SHOULD",
	    "who": "Joe",
	    "time": "9",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-067",
	    "name": "Extend Audit Trail",
	    "priority": "SHOULD",
	    "who": "Natasha",
	    "time": "12",
	    "status": "Complete"
	  },
	  {
	    "id": "T-068",
	    "name": "Maintenance Links",
	    "priority": "SHOULD",
	    "who": "Mike",
	    "time": "4",
	    "status": "Complete"
	  },
	  {
	    "id": "T-094",
	    "name": "Browse prices button",
	    "priority": "SHOULD",
	    "who": "Joe",
	    "time": "6",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-095",
	    "name": "Group email to be only available to the administrator",
	    "priority": "SHOULD",
	    "who": "Natasha",
	    "time": "5",
	    "status": "Complete"
	  },
	  {
	    "id": "T-096",
	    "name": "Update cribsheet",
	    "priority": "COULD",
	    "who": "Mike",
	    "time": "2",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-0103",
	    "name": "Awarded missing from Estimated Tab",
	    "priority": "COULD",
	    "who": "Joe",
	    "time": "7",
	    "status": "Complete"
	  },
	  {
	    "id": "T-0105",
	    "name": "New cribsheet",
	    "priority": "COULD",
	    "who": "Natasha",
	    "time": "7",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-0111",
	    "name": "Document not being added on forum response",
	    "priority": "COULD",
	    "who": "Mike",
	    "time": "6",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-0114",
	    "name": "Can't delete users once active",
	    "priority": "WISH",
	    "who": "Joe",
	    "time": "3",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-0125",
	    "name": "Add course organiser on notification",
	    "priority": "WISH",
	    "who": "Natasha",
	    "time": "2.5",
	    "status": "In Progress"
	  },
	  {
	    "id": "T-0126",
	    "name": "Setup demonstration system for Demo",
	    "priority": "MUST",
	    "who": "Joe",
	    "time": "3",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-0133",
	    "name": "Fix forum pagination problem properly",
	    "priority": "MUST",
	    "who": "Natasha",
	    "time": "3",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-0145",
	    "name": "In Directory  tickbox to select all filtered users",
	    "priority": "MUST",
	    "who": "Joe",
	    "time": "3",
	    "status": "Complete"
	  },
	  {
	    "id": "T-0146",
	    "name": "Merge user and user profile in admin",
	    "priority": "MUST",
	    "who": "Natasha",
	    "time": "2",
	    "status": "Not Started"
	  },
	  {
	    "id": "T-0147",
	    "name": "Have multiple documents on an estimate",
	    "priority": "MUST",
	    "who": "Mike",
	    "time": "2",
	    "status": "Not Started"
	  }
	];

}
