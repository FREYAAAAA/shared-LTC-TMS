// displaying the current date
    var today = new Date();
    var dd = today.getDate();
    var mm_index = today.getMonth(); //January is 0!
    var year = today.getFullYear();
    var weekday =  ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var Month = ["January", "February", "March", "Apri", "May", "June", "July", "Augest", "September", "Octobor", "November", "December"];
     var wk_index = today.getDay();
     var d = dd;
     if (dd<10){
         dd = "0"+dd;
     }
     var mm_number = mm_index+1;
     var date = dd;
     var year_m = year+"-"+mm_number;
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
    document.getElementById("form").style.display = "block";
}
function close_form(){
    document.getElementById("form").style.display = "none";
}
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


display();
function submit(){
    var text = $("#memo_text").val();
    console.log(text);
    firebase.database().ref("MEMO/"+year_m+"/"+date+"/"+time).set(text);
    close_form();
    location.reload();
    //return firebase.database().ref().update();
}

function display(){
console.log(date);
var fbMemo = firebase.database().ref("MEMO/"+year_m+"/"+date);
    fbMemo.once("value")
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
            var row = memo_table.insertRow(1);
            var celldate = row.insertCell(0);
            var celltime = row.insertCell(1);
            var celleventDate = row.insertCell(2);
            celldate.appendChild(document.createTextNode(date));
            celltime.appendChild(document.createTextNode(childKey));
            celleventDate.appendChild(document.createTextNode(childData));
    })
})
}
