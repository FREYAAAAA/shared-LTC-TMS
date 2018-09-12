
//get the patient's id and put in the seleted boxs
var fbCNA = firebase.database().ref("PAT");
fbCNA.once("value")
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
    var today = new Date();
    var dd = today.getDate();
    var mm_index = today.getMonth(); //January is 0!
    var year = today.getFullYear();
    var weekday =  ["Sunday","Monday", "Tuesday", "Wednesday", "Thuresday", "Friday", "Saturday"];
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     var wk_index = today.getDay();
    if (dd<10){
        dd = "0"+dd;
    }
    console.log(weekday[wk_index]);
    console.log(today);
    console.log("current_date");
    document.getElementById("current_date").innerHTML = dd;
    document.getElementById("current_month").innerHTML = month[mm_index];
    document.getElementById("current_week").innerHTML = weekday[wk_index];
    document.getElementById("current_year").innerHTML = year;
