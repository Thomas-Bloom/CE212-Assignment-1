// Creates objects and adds them to array

var sections = [];
var commentBox = [];
var dropDownArray = [];

function CreateForm() {
    sections.push({name: "Dynamic Table", max: 20, comments: "Test Comment", mark: 0});
    sections.push({name: "Intellij Usage", max: 30, comments: "Test Comment", mark: 0});
    sections.push({name: "Calender Control", max: 30, comments: "Test Comment", mark: 0});
    sections.push({name: "Active Form", max: 20, comments: "Test Comment", mark: 0});
    sections.push({name: "Object Database", max: 20, comments: "Test Comment", mark: 0});

    // Variables
    var form = document.getElementById("form");
    var pre = document.createElement("pre");
    form.appendChild(pre);
    var table = pre.appendChild(document.createElement("table"));
    var row = table.appendChild(document.createElement("tr"));

    var h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Section"));
    h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Max"));
    h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Comments"));
    h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Mark"));

    var body = table.appendChild(document.createElement("tbody"));

    for(var i = 0; i < sections.length; i++){
        row = body.appendChild(document.createElement("tr"));
        var data = row.appendChild(document.createElement("td"));
        data.appendChild(document.createTextNode(sections[i].name));

        data = row.appendChild(document.createElement("td"));
        data.appendChild(document.createTextNode(sections[i].max));
        data = row.appendChild(document.createElement("td"));

        commentBox[i] = document.createElement("textArea");
        commentBox[i].name = "commentBox";
        commentBox[i].rows = "5";
        commentBox[i].cols = "50";
        data.appendChild(commentBox[i]);

        data = row.appendChild(document.createElement("td"));

        var selectList = document.createElement("select");
        selectList.setAttribute("id", "mySelect" + i);

        for(var l = 0; l <= sections[i].max; l++){
            dropDownArray.push(l);
        }

        for (var k = 0; k < dropDownArray.length; k++) {
            var option = document.createElement("option");
            option.setAttribute("value", dropDownArray[k]);
            option.text = dropDownArray[k];
            selectList.appendChild(option);
        }
        data.appendChild(selectList);
    }
}

function clearComments(){
    for(var i = 0; i < sections.length; i++){
        commentBox[i].value = "";
        var dropDownValue = document.getElementById("mySelect" + i);
        dropDownValue.selectedIndex = 0;
    }
}