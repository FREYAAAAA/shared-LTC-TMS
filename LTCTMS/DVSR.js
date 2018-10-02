// have to fix the filter function //
//get the patient's id and put in the seleted boxs
var fbPAT = firebase.database().ref("Activities");
//grab the Patient's ID from database and put into the selected box
fbPAT.once("value")
    .then(function(snapshot){
        var array = [];
        var index = 0;
        snapshot.forEach(function(childSnapshot){
          var childKey = childSnapshot.key;
           array.push(childKey); // add the childkey into array, push is add
          console.log(array[index]); // to show the key on the console
          var x = document.getElementById("selectPAT");
          var opt = document.createElement("option");
         opt.text= array[index];
          x.add(opt);
          index=index+1;
       });
    });

    function clearBox()
{
    document.getElementById("selectCNA").innerHTML = "";
}

    var search;//search Date

    function selectPatient(){

        search = document.getElementById("bday").value;//get the date value
        var arr = search.split("-");
        if (arr[1]<10){
            arr[1] = arr[1].replace('0', '');
            console.log(arr[1]);
        }
        if(arr[2]<10){
            arr[2] = arr[2].replace('0','');
        }
        recreated_search = arr[0]+"-"+arr[1]+"-"+arr[2];
        var selected_id = document.getElementById("selectPAT").value;// get the patient's ID
        var fbPAT_CNA= firebase.database().ref("Activities/"+selected_id+"/"+recreated_search);

        //grab the Patient's ID from database and put into the selected box
        fbPAT_CNA.once("value")
            .then(function(snapshot){
                var arr = [];
                var i = 0;
                snapshot.forEach(function(CNA_childSnapshot){
                  var CNA_childKey = CNA_childSnapshot.key;
                   arr.push(CNA_childKey); // add the childkey into array, push is add
                  console.log(arr[i]); // to show the key on the console
                  var y = document.getElementById("selectCNA");
                  var option = document.createElement("option");
                 option.text= arr[i];
                  y.add(option);
                  console.log(i);
                  i=i+1;
              });
            });
    }





    var count = 0;
    function display_button(display){

        if(count%2 == 1){//  in order to exchange the text of button into "display" and"refresh"
            display .value= "Refresh";
            location.reload();//reload the page
            }
        display.value = "Refresh";
        count = count + 1;
        var selected_id = document.getElementById("selectPAT").value;// get the patient's ID
        var selected_CNA = document.getElementById("selectCNA").value
        var fbPAT_DRS = firebase.database().ref("Activities/"+selected_id+"/"+recreated_search+"/"+selected_CNA+"/daily_status");
        fbPAT_DRS.once("value")
            .then(function(snapshot){
                var array = [];
                var array_val = [];
                var index = 0;
                snapshot.forEach(function(childSnapshot){
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    array.push(childKey);
                    console.log(childData);
                    console.log(array[index]);
                    var row = DSR_table.insertRow(1);
                    var cellId = row.insertCell(0)
                    var celleventDate = row.insertCell(1);
                    cellId.appendChild(document.createTextNode(childKey));
                    celleventDate.appendChild(document.createTextNode(childData));
                })
            })

            var fbPAT_AI = firebase.database().ref("Activities/"+selected_id+"/"+recreated_search+"/"+selected_CNA+"/AI");
                fbPAT_AI.once("value")
                .then(function(snapshot){
                    var array = [];
                    var array_val = [];
                    var index = 0;
                    snapshot.forEach(function(childSnapshot){
                        var childKey = childSnapshot.key;
                        var childData = childSnapshot.val();
                        array.push(childKey);
                        console.log(childData);
                        console.log(array[index]);
                        var row = AI_table.insertRow(1);
                        var cellId = row.insertCell(0)
                        var celleventDate = row.insertCell(1);
                        cellId.appendChild(document.createTextNode(childKey));
                        celleventDate.appendChild(document.createTextNode(childData));
                })
            })

            var fbPAT_VSR = firebase.database().ref("Activities/"+selected_id+"/"+recreated_search+"/"+selected_CNA+"/vital status");
                fbPAT_VSR.once("value")
                .then(function(snapshot){
                    var array = [];
                    var array_val = [];
                    var index = 0;
                    snapshot.forEach(function(childSnapshot){
                        var childKey = childSnapshot.key;
                        var childData = childSnapshot.val();
                        array.push(childKey);
                        console.log(childData);
                        console.log(array[index]);
                        var row = VSR_table.insertRow(1);
                        var cellId = row.insertCell(0)
                        var celleventDate = row.insertCell(1);
                        cellId.appendChild(document.createTextNode(childKey));
                        celleventDate.appendChild(document.createTextNode(childData));
                })
            })
            var fbPAT_SC = firebase.database().ref("Activities/"+selected_id+"/"+recreated_search+"/"+selected_CNA+"/special care");
                fbPAT_SC.once("value")
                .then(function(snapshot){
                    var array = [];
                    var array_val = [];
                    var index = 0;
                    snapshot.forEach(function(childSnapshot){
                        var childKey = childSnapshot.key;
                        var childData = childSnapshot.val();
                        array.push(childKey);
                        console.log(childData);
                        console.log(array[index]);
                        var row = SC_table.insertRow(1);
                        var cellId = row.insertCell(0)
                        var celleventDate = row.insertCell(1);
                        cellId.appendChild(document.createTextNode(childKey));
                        celleventDate.appendChild(document.createTextNode(childData));
                })
            })
}
            //var fbPAT_AI = firebase.database().ref("Activities/"+selected_id+"/"+recreated_search+"/11001/AI")
            //fbPAT_AI.on("value", function(snapshot){
            //    var AI_data = snapshot.child("")
        //    })




// displaying the current date
    var today = new Date();
    var dd = today.getDate();
    var mm_index = today.getMonth(); //January is 0!
    var year = today.getFullYear();
    var weekday =  ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     var wk_index = today.getDay();
     if (dd<10){
         dd = "0"+dd;
     }

     //defaut date is today's  patinet's vital record
     var mm = mm_index+1; // to make the month correct; For example: January is 0 , so add 1;
     // in order to have same format with "bday". orignal is 2018-9-13
     if(mm_index<10){
         var mm = "0"+mm;
     }
    var nowadays = year +"-"+ mm+"-"+ dd; // 2018-09-13
