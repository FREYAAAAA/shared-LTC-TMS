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
