function table(tagId)
{
    var dropDown = document.getElementById("milesOrKilometres");
    var ipNode1 = document.getElementById("FromInput");
    var from = ipNode1.value;
    var ipNode2 = document.getElementById("ToInput");
    var to = ipNode2.value;

    var conv = document.getElementById(tagId);
    var pre = document.createElement("pre");
    conv.appendChild(pre);
    var tab = pre.appendChild(document.createElement("table"));
    var head = tab.appendChild(document.createElement("thead"));
    var row = head.appendChild(document.createElement("tr"));

    var dropDownVal = dropDown.options[dropDown.selectedIndex].value;

    if(dropDownVal == "MToK"){
        var h = row.appendChild(document.createElement("th"));
        h.appendChild(document.createTextNode("Miles"));
        h = row.appendChild(document.createElement("th"));
        h.appendChild(document.createTextNode("Kilometres"));
    }
    else{
        var h = row.appendChild(document.createElement("th"));
        h.appendChild(document.createTextNode("Kilometres"));
        h = row.appendChild(document.createElement("th"));
        h.appendChild(document.createTextNode("Miles"));
    }

    var body= tab.appendChild(document.createElement("tbody"));

    // Empty
    if(to.length == 0){
        to = 10;
    }

    if((from < 0) || (to < 0)){
        alert("Number must be positive");
    }
    else{
        if(from <= to){
            for (var i=from; i<=to; i++) {
                row = body.appendChild(document.createElement("tr"));

                if (i%2==0) row.setAttribute("class","even");

                else row.setAttribute("class","odd");


                var data=row.appendChild(document.createElement("td"));
                data.appendChild(document.createTextNode(i));
                data=row.appendChild(document.createElement("td"));

                if(dropDownVal == "MToK")
                    data.appendChild(document.createTextNode(MilesToK(i)));
                else{
                    data.appendChild(document.createTextNode(KToMiles(i)));
                }
            }
        }
        if(from > to){
            for (var i=from; i>=to; i--) {
                row = body.appendChild(document.createElement("tr"));

                if (i%2==0) row.setAttribute("class","even");

                else row.setAttribute("class","odd");


                var data=row.appendChild(document.createElement("td"));
                data.appendChild(document.createTextNode(i));
                data=row.appendChild(document.createElement("td"));

                if(dropDownVal == "MToK")
                    data.appendChild(document.createTextNode(MilesToK(i)));
                else{
                    data.appendChild(document.createTextNode(KToMiles(i)));
                }
            }
        }
    }



}
function MilesToK(c)  { return(c*1.609).toFixed(2) }
function KToMiles(c) {return(c / 1.609).toFixed(2)}