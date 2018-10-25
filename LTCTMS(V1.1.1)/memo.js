// displaying the current date
// go to the next year //
    var today = new Date();
    var dd = today.getDate();
    var mm_index = today.getMonth(); //January is 0!
    var year = today.getFullYear();
    var weekday =  ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     var wk_index = today.getDay();
     var d = dd;

     var mm = mm_index+1; // to make the month correct; For example: January is 0 , so add 1;
     // in order to have same format with "bday". orignal is 2018-9-13
     if(mm_index<9){
         var mm = "0"+mm;
     }
     var nowadays = year +"-"+ mm+"-"+ dd; // 2018-09-13
     if (dd<10){
         dd = "0"+dd;
     }


     var date = mm_index+1;
     console.log(date);

     var year_m = year+"-"+date;
     console.log(year_m);
     var a = new Date();
     var hour = a.getHours();
     var minute = a.getMinutes();
     var second = a.getSeconds();
     if(second<10){
         second = "0"+second;
     }
     if(hour<10){
         hour = "0"+hour;
     }
     if(minute<10){
         minute = "0"+minute;
     }
    var time = hour+":"+minute+":"+second;
     console.log(time);


function popup_form(){
    document.getElementById("memo_text").value = "";
    document.getElementById("selected_date").value = year+"-"+mm+"-"+dd;
    console.log(year+"-"+mm+"-"+dd);
    document.getElementById("form").style.display = "block";
}
function close_form(){
    document.getElementById("form").style.display = "none";
}

function submit(){
    var text = $("#memo_text").val();
    var ymd = $("#selected_date").val()
    var a = ymd.split("-");
    if(a[1]<10){
        a[1] = a[1].replace('0', '');
    }

    year_m = a[0]+"-"+a[1];
    dd = a[2];

    if(text == ""){
      alert ("Please enter data");
    }
    else {
      var r = confirm("Are you sure you want to enter this data?");
      if (r == true) {
        firebase.database().ref("MEMO/"+year_m+"/"+dd+"-"+time).set(text);
        close_form();
        location.reload();
      }
      else {
      }
  }
}

window.onload=function(){
    document.getElementById("years").innerHTML = year;

    var fbMemo = firebase.database().ref("MEMO/"+year_m);

    fbMemo.once("value")
    .then(function(snapshot){
        var array = [];
        var array_val = [];
        var index = 0;
        snapshot.forEach(function(childSnapshot){
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();

            array.push(childKey);
            var arr = childKey.split("-");
            if(arr[0]==dd){
                var ul = document.getElementById("today_memo");
                  var li = document.createElement("li");
                  li.appendChild(document.createTextNode(childData));
                  ul.appendChild(li);
            }
            var row = memo_table.insertRow(1);
            var celldate = row.insertCell(0);
            var celleventDate = row.insertCell(1);
            celldate.appendChild(document.createTextNode(arr[0]));
            celleventDate.appendChild(document.createTextNode(childData));
        })
    })
}



function lastMonth(){
    document.getElementById("memo_table").innerHTML = "";
    var title = memo_table.insertRow(0);
    title.insertCell(0).innerHTML = "Date";
    title.insertCell(1).innerHTML = "Content";
    var a = year_m.split("-");
    a[1] = a[1]-1;
    if(a[1]== 0){
        a[1] = 12;
        a[0] = a[0]-1;
    }
    console.log(a[0]);
    year_m = a[0]+"-"+a[1];
    console.log(year_m);
    document.getElementById("fullName_Month").innerHTML = Month[a[1]-1];
    document.getElementById("years").innerHTML = a[0];

    var fbMemo = firebase.database().ref("MEMO/"+year_m);
    fbMemo.once("value")
    .then(function(snapshot){
        var array = [];
        var array_val = [];
        var index = 0;
        snapshot.forEach(function(childSnapshot){
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            array.push(childKey);
            var arr = childKey.split("-");
            var row = memo_table.insertRow(1);
            var celldate = row.insertCell(0);
            var celleventDate = row.insertCell(1);
            celldate.appendChild(document.createTextNode(arr[0]));
            celleventDate.appendChild(document.createTextNode(childData));
        })
    })
}
function nextMonth(){
    document.getElementById("memo_table").innerHTML = "";//clear previous table's data before next data come inside.
    var title = memo_table.insertRow(0);
    title.insertCell(0).innerHTML = "Date";
    title.insertCell(1).innerHTML = "Content";
    var a = year_m.split("-");
    a[1] =  parseInt(a[1]) +1;
    if(a[1]==13){
    a[1] = 1;
    a[0] = parseInt(a[0]) +1;
    }
    console.log(a[0]);
    year_m = a[0]+"-"+a[1];
    console.log(a[1]);
    document.getElementById("fullName_Month").innerHTML = Month[a[1]-1];
    document.getElementById("years").innerHTML = a[0];
    var fbMemo = firebase.database().ref("MEMO/"+year_m);
    fbMemo.once("value")
    .then(function(snapshot){
        var array = [];
        var array_val = [];
        var index = 0;
        snapshot.forEach(function(childSnapshot){
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            array.push(childKey);
            var arr = childKey.split("-");
            var row = memo_table.insertRow(1);
            var celldate = row.insertCell(0);
            var celleventDate = row.insertCell(1);
            celldate.appendChild(document.createTextNode(arr[0]));
            celleventDate.appendChild(document.createTextNode(childData));
        })
    })
}
