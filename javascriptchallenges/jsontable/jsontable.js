function jsonTable() {
    var data = {
        headers: ["First Name", "Last Name", "Age"],
        rows: [
            ["John", "Doe", 30],
            ["Jane", "Doe", 27],
            ["Mac", "Smith", 52]
        ]
    };
    var container = document.getElementById("tableContainer");
    //add code here to build a table in the container
	var content = "";
	var tableOpenElem = "<table cellpadding='3' cellspacing='2' border='1'>";
	var tableHeader = "<tr>";
	var tableRows = "";
	var tableCloseElem = "</table>"
	// set up table header string
	var index1 = 0;
	for each (header in data["headers"]) {
	  tableHeader += "<th>" + data["headers"][index1] + "</th>";
	  index1++;
	}
	tableHeader += "</tr>";
	// set up table rows string
	var index2 = 0;
	for each (row in data["rows"]) {
	  tableRows += "<tr><td>" + data["rows"][index2][0] + "</td>";
	  tableRows += "<td>" + data["rows"][index2][1] + "</td>";
	  tableRows += "<td>" + data["rows"][index2][2] + "</td></tr>";
	  index2++;
	}
	// cat all together
	content += tableOpenElem + tableHeader + tableRows + tableCloseElem;
	container.innerHTML = content;
}
