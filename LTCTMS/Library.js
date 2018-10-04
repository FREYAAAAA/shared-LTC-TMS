var fbTask = firebase.database().ref("TaskInstruction/");
var num = 0;
var checkbox_name = [];
fbTask.once("value")
.then(function(snapshot){
    var array = [];
    var index = 0;
    var a = [];
    var i = 0;
    var rowIndex = 1;
    snapshot.forEach(function(childSnapshot1){
        var childKey = childSnapshot1.key;
        a.push(childKey);
       var x = document.getElementById("filterCategory");
       var opt = document.createElement("option");
       opt.text= a[i];
        x.add(opt);
        i = i +1;
        childSnapshot1.forEach(function(childSnapshot2){
            var childKey = childSnapshot2.key;
            var button = document.createElement("button");
            var checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.setAttribute("id", "checkbox_name["+num+"]");
            num = num +1;
            var row = assigningTask.insertRow(-1);
            var cellCategory = row.insertCell(-1);
            cellCategory.appendChild(document.createTextNode(childSnapshot1.key));
            var cellName = row.insertCell(-1);
            cellName.appendChild(document.createTextNode(childSnapshot2.key));
            button.innerHTML="Detail";
            var cellButton= row.insertCell(-1);
            var cellCheckbox = row.insertCell(-1);
            cellButton.appendChild(button);
            cellCheckbox.appendChild(checkBox);
                    })
                })
            })


function toggleTask(source) {
    var table = document.getElementById("assigningTask");
    var tr = table.getElementsByTagName("tr");
    if(source.checked){
        for(var i = 0; i < tr.length; i= i+1){
            var value = document.getElementById("checkbox_name["+i+"]");
            value.checked = true;
        }
    }
    else{
        for(var i = 0; i < tr.length; i= i+1){
            var value = document.getElementById("checkbox_name["+i+"]");
            value.checked = false;
        }
    }
}
function toggleCF(source) {
    var table = document.getElementById("assigningCF");
    var tr = table.getElementsByTagName("tr");
    if(source.checked){
        for(var i = 0; i < tr.length; i= i+1){
             document.getElementById("checkbox_CFname["+i+"]").checked =true;
        }
    }
    else{
        for(var i = 0; i < tr.length; i= i+1){
            var value = document.getElementById("checkbox_CFname["+i+"]");
            value.checked = false;
        }
    }
}

function assign(){
    var table = document.getElementById("assigningTask");
    var tr = table.getElementsByTagName("tr");
    var table1 = document.getElementById("assigningCF");
    var tr1 = table1.getElementsByTagName("tr");

    for(var d =  1 , c = 0; d < tr1.length; ++d){
        if (document.getElementById("checkbox_CFname["+c+"]").checked == true){
            console.log(table1.rows[d].cells[2].innerHTML);
            if(table1.rows[d].cells[0].innerHTML == "CNA"){
                for(var i = 0; i < tr.length; i ++){
                    if(document.getElementById("checkbox_name["+i+"]").checked == true){
                        console.log(table.rows[i].cells[1].innerHTML);
                        firebase.database().ref("CNA/"+table1.rows[d].cells[2].innerHTML+"/Task"+"/"+table.rows[i].cells[0].innerHTML+"/"+table.rows[i].cells[1].innerHTML).set("TaskInstruction/"+table.rows[i].cells[0].innerHTML+"/"+table.rows[i].cells[1].innerHTML);
                        }
                    }
            }
            else{
                for(var e = 0; e < tr.length; e ++){
                    if(document.getElementById("checkbox_name["+e+"]").checked == true){
                    console.log(table.rows[e].cells[1].innerHTML);
                    firebase.database().ref("Patient/"+table1.rows[d].cells[2].innerHTML+"/Task"+"/"+table.rows[e].cells[0].innerHTML+"/"+table.rows[e].cells[1].innerHTML).set("TaskInstruction/"+table.rows[e].cells[0].innerHTML+"/"+table.rows[e].cells[1].innerHTML);
                    }
        }
    }

  }
  c++;
}
}


var fbCNA = firebase.database().ref("CNA/");
var n = 0;
fbCNA.once("value")
.then(function(snapshot){
    var array = [];
    var index = 0;
    var i = 0;
    var a =[];

    snapshot.forEach(function(childSnapshot1){
        var childKey = childSnapshot1.key;
        a.push(childKey);
        var row = assigningCF.insertRow(-1);
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.setAttribute("id", "checkbox_CFname["+n+"]");
        n = n+1;
        var cellID = row.insertCell(0);
        cellID.appendChild(document.createTextNode(childSnapshot1.key));
        childSnapshot1.forEach(function(childSnapshot2){
            childSnapshot2.forEach(function(childSnapshot3){
                var childKey =childSnapshot3.key;
                var childData = childSnapshot3.val();
                if(childKey == "Name"){
                    var cellName = row.insertCell(0);
                    cellName.appendChild(document.createTextNode(childData));
                }
                if(childKey == "Position"){
                    var cellPosition = row.insertCell(0);
                    cellPosition.appendChild(document.createTextNode(childData));
                    var cellCheckbox = row.insertCell(-1);
                    cellCheckbox.appendChild(checkBox);
                }
            })
        })
    })
})
var fbPAT = firebase.database().ref("Patient/");
fbPAT.once("value")
.then(function(snapshot){
    var array = [];
    var index = 0;
    var i = 0;
    var a = [];
    snapshot.forEach(function(childSnapshot1){
        var childKey = childSnapshot1.key;
        a.push(childKey);
        var row = assigningCF.insertRow(-1);
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.setAttribute("id", "checkbox_CFname["+n+"]");
        n = n+1;
        var cellID = row.insertCell(0);
        cellID.appendChild(document.createTextNode(childSnapshot1.key));
        childSnapshot1.forEach(function(childSnapshot2){
            childSnapshot2.forEach(function(childSnapshot3){
                var childKey =childSnapshot3.key;
                var childData = childSnapshot3.val();
                if(childKey == "Name"){
                    var cellName = row.insertCell(0);
                    cellName.appendChild(document.createTextNode(childData));
                }
                if(childKey == "Position"){
                    var cellPosition = row.insertCell(0);
                    cellPosition.appendChild(document.createTextNode(childData));
                    var cellCheckbox = row.insertCell(-1);
                    cellCheckbox.appendChild(checkBox);
                }
            })
        })
    })
})

var fbList = firebase.database().ref("CNA/");
var checkbok_index = 0;
fbList.once("value")
.then(function(snapshot){
    var array = [];
    var index = 0;
    var a = [];
    var i = 0;
    snapshot.forEach(function(childSnapshot1){
        var CF_Name;
            childSnapshot1.forEach(function(childSnapshot2){

                if(childSnapshot2.key == "Portfolio"){
                    childSnapshot2.forEach(function(childSnapshot3){
                    if( childSnapshot3.key == "Name"){
                        CF_Name = childSnapshot3.val();
                    }
                            })
                }
                if(childSnapshot2.key == "Task"){
                    childSnapshot2.forEach(function(childSnapshot3){
                        childSnapshot3.forEach(function(childSnapshot4){
                            var childKey = childSnapshot4.key;
                            var button = document.createElement("button");
                            var checkBox = document.createElement("input");
                            checkBox.type = "checkbox";
                            checkBox.setAttribute("id", "checkbox_id["+checkbok_index+"]");
                            checkBox.setAttribute("checked", true);
                            checkbok_index++ ;
                            var row = assigningList.insertRow(-1);
                            var CFname = row.insertCell(-1);
                            CFname.appendChild(document.createTextNode(CF_Name));

                            var cellCategory = row.insertCell(-1);
                            cellCategory.appendChild(document.createTextNode(childSnapshot1.key));
                            var cellName = row.insertCell(-1);
                            cellName.appendChild(document.createTextNode(childSnapshot4.key));
                            button.innerHTML="Detail";
                            var cellButton= row.insertCell(-1);
                            var cellCheckbox = row.insertCell(-1);
                            cellButton.appendChild(button);
                            cellCheckbox.appendChild(checkBox);
                                })
                            })
                        }
                    })
                })
            })
var fbList = firebase.database().ref("Patient/");
var checkbok_index = 0;
fbList.once("value")
    .then(function(snapshot){
        var array = [];
        var index = 0;
        var a = [];
        var i = 0;
        snapshot.forEach(function(childSnapshot1){
            var CF_Name;
            childSnapshot1.forEach(function(childSnapshot2){
                if(childSnapshot2.key == "Portfolio"){
                childSnapshot2.forEach(function(childSnapshot3){
                    if( childSnapshot3.key == "Name"){
                        CF_Name = childSnapshot3.val();
                        }
            })
                }
            if(childSnapshot2.key == "Task"){
                childSnapshot2.forEach(function(childSnapshot3){
                    childSnapshot3.forEach(function(childSnapshot4){
                        var childKey = childSnapshot4.key;
                        var button = document.createElement("button");
                        var checkBox = document.createElement("input");
                        checkBox.type = "checkbox";
                        checkBox.setAttribute("id", "checkbox_id["+checkbok_index+"]");
                        checkBox.setAttribute("checked", true);
                        checkbok_index++ ;
                        var row = assigningList.insertRow(-1);
                        var CFname = row.insertCell(-1);
                        CFname.appendChild(document.createTextNode(CF_Name));
                        var cellCategory = row.insertCell(-1);
                        cellCategory.appendChild(document.createTextNode(childSnapshot1.key));
                        var cellName = row.insertCell(-1);
                        cellName.appendChild(document.createTextNode(childSnapshot4.key));
                        button.innerHTML="Detail";
                        var cellButton= row.insertCell(-1);
                        var cellCheckbox = row.insertCell(-1);
                        cellButton.appendChild(button);
                        cellCheckbox.appendChild(checkBox);
                    })
                })
            }
        })
    })
})


    $(document).ready(function(){
      $("#searchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#assigningTask tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
    function sorting(n){
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("assigningCF");
      switching = true;
      //Set the sorting direction to ascending:
      dir = "asc";
      /*Make a loop that will continue until
      no switching has been done:*/
      while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
          //start by saying there should be no switching:
          shouldSwitch = false;
          /*Get the two elements you want to compare,
          one from current row and one from the next:*/
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          /*check if the two rows should switch place,
          based on the direction, asc or desc:*/
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              //if so, mark as a switch and break the loop:
              shouldSwitch= true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          /*If a switch has been marked, make the switch
          and mark that a switch has been done:*/
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          //Each time a switch is done, increase this count by 1:
          switchcount ++;
        } else {
          /*If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again.*/
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    }


    function filter_Category(){
     var val = document.getElementById("filterCategory").value;
      var table = document.getElementById("assigningTask");
      var tr = table.getElementsByTagName("tr");
      if( val == "Category"){//all category
          for (i = 0; i < tr.length; i++) {
                tr[i].style.display =  "";
              }
      }
      else{
          for (i = 0; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName("td")[0];//row i cell number 7
            if(td){
            if (td.innerText == val) {
                tr[i].style.display =  "";
              }
            else {
                tr[i].style.display = "none";
              }
            }
          }
      }
    }
    function viewassignedtask(){
        document.getElementById("form").style.display = "block";
    }
    function close_form(){
        document.getElementById("form").style.display = "none";
    }
    function submit(){
    var table = document.getElementById("assigningList");
    var tr2 = table.getElementsByTagName("tr");
    for(var a = 0; a < tr2.length; a++)
        if (document.getElementById("checkbox_id["+a+"]").checked == false){
            fbList.child(childSnapshot4.key).remove();
        }
    }
