var fbFeedback = firebase.database().ref("Feedback/");
var num = 0;
var checkbox_name = [];
fbFeedback.once("value")
.then(function(snapshot){
    snapshot.forEach(function(childSnapshot1){
       var array = childSnapshot1.key.charAt(0)
       if( array == "3"){
           match_id(childSnapshot1.key,fbFeedback);
       }
       else{
           match_id(childSnapshot1.key,fbFeedback);
       }

   });
});

function match_id(id){
    console.log(id);
    if (id.charAt(0) == "3"){
        var fbCNA = firebase.database().ref("CNA/"+id+"/Portfolio/Name");
        let arr_name = [];
        var name;
         fbCNA.once("value")
            .then(function(snapshot){
                name = snapshot.val();
                tableform(id,name,fbFeedback);
            });
    }
    else{
        var fbCNA = firebase.database().ref("Patient/"+id+"/Portfolio/Name");
        let arr_name = [];
        var name;
         fbCNA.once("value")
            .then(function(snapshot){
                name = snapshot.val();
                tableform(id,name,fbFeedback);
            });
    }

}

function tableform(id,name,fbFeedback){
    fbFeedback.child(id).once('value').then(function(childSnapshot2){
        childSnapshot2.forEach(function(childSnapshot3 ){
            if(id.charAt(0) == "3"){
                var row = CNA_Feedback.insertRow(-1);
                var cellID = row.insertCell(-1);
                cellID.appendChild(document.createTextNode(id));
                var cellName = row.insertCell(-1);
                cellName.appendChild(document.createTextNode(name));
                var cellComment = row.insertCell(-1);
                cellComment.appendChild(document.createTextNode(childSnapshot3.val()));
            }
            else{
                var row = Patient_Feedback.insertRow(-1);
                var cellID = row.insertCell(-1);
                cellID.appendChild(document.createTextNode(id));
                var cellName = row.insertCell(-1);
                cellName.appendChild(document.createTextNode(name));
                var cellComment = row.insertCell(-1);
                cellComment.appendChild(document.createTextNode(childSnapshot3.val()));

            }
            });
    });
}

function CNAtableform(id,name,fbFeedback){
    fbFeedback.child(id).once('value').then(function(childSnapshot2){
        childSnapshot2.forEach(function(childSnapshot3 ){
            var row = CNA_Feedback.insertRow(-1);
            var cellID = row.insertCell(-1);
            cellID.appendChild(document.createTextNode(id));
            var cellName = row.insertCell(-1);
            cellName.appendChild(document.createTextNode(name));
            var cellComment = row.insertCell(-1);
            cellComment.appendChild(document.createTextNode(childSnapshot3.val()));
        });
    });
}
function view_feedback(){
  document.getElementById("staffdisplay").style.display = "block";
  document.getElementById("familydisplay").style.display = "block";
}
function view_family(){
  console.log("f");
  document.getElementById("familyfeedback").style.display = "block";
  document.getElementById("stafffeedback").style.display = "none";
}

function view_stafffeedback(){
  console.log("ff");
  document.getElementById("stafffeedback").style.display = "block";
  document.getElementById("familyfeedback").style.display = "none";
}

function bigqr(x) {
    x.style.height = "85px";
    x.style.width = "85px";
}

function normalqr(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}
