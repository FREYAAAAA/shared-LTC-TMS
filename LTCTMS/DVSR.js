
//get the patient's id and put in the seleted boxs
var fbPAT = firebase.database().ref("PAT");
var selected_id = 66000;
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

    function display_rec(){
        var fbPAT = firebase.database().ref("PAT/"+selected_id+"/"+nowadays);
        fbPAT.once("value")
            .then(function(snapshot){
                var array = [];
                var index = 0;
                snapshot.forEach(function(childSnapshot){
                    var childKey = childSnapshot.key;
                    array.push(childKey);
                    console.log(array[index]);
                    index = index +1;
                })
            })

        console.log("it's match");
    }

// displaying the current date
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

     //defaut date is today's  patinet's vital record
     var mm = mm_index+1; // to make the month correct; For example: January is 0 , so add 1;
     // in order to have same format with "bday". orignal is 2018-9-13
     if(mm_index<10){
         var mm = "0"+mm;
     }
    var nowadays = year +"-"+ mm+"-"+ dd; // 2018-09-13

    function search_date(){
        var serch_date = document.getElementById("bday").value;
        console.log(serch_date);
    }
