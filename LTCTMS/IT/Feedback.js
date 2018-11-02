var fbFeedback = firebase.database().ref("Feedback/");
var num = 0;
fbFeedback.once("value")
.then(function(snapshot){
    snapshot.forEach(function(childSnapshot1){
           match_id(childSnapshot1.key,fbFeedback);
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
    var index = 0;
    fbFeedback.child(id).once('value').
    then(function(childSnapshot2){
        childSnapshot2.forEach(function(childSnapshot3 ){
            childSnapshot3.forEach(function(childSnapshot4){
                if(id.charAt(0) == "3"){
                    document.getElementById("comment").innerHTML = childSnapshot4.val();
                    document.getElementById("usename").innerHTML = name;
                //    document.getElementById("user-fa").src = "/images/user_info_bg.jpg";
                    var container = document.getElementById('container');
                    var div = document.createElement('div');
                    var span = document.createElement('span');
                    var span1 = document.createElement('span');
                    var i = document.createElement("i");
                    var div1 = document.createElement('div');
                    var span2 = document.createElement('span');
                    div.setAttribute("class", "liuyan");
                    span.setAttribute("id", "user-fa["+index+"]");
                    i.setAttribute("class", "fa fa-user");
                    div1.setAttribute("id","user["+index+"]");
                    span2.setAttribute("id", "comment["+index+"]");
                    span1.setAttribute("id","username["+index+"]");

                    container.appendChild(div);
                    div.appendChild(span);
                    div.appendChild(div1);
                    div1.appendChild(span1);
                    div.appendChild(span2);

                    document.getElementById("user-fa["+index+"]").href = "statics/images/user_info_bg.jpg";
                    document.getElementById("username["+index+"]").innerHTML = name +"  said:";
                    document.getElementById("comment["+index+"]").innerHTML = childSnapshot4.val();

                    index++;
                    var row = CNA_Feedback.insertRow(-1);
                    var cellID = row.insertCell(-1);
                    var cellName = row.insertCell(-1);
                    var cellComment = row.insertCell(-1);
                    cellID.appendChild(document.createTextNode(id));
                    cellName.appendChild(document.createTextNode(name));
                    cellComment.appendChild(document.createTextNode(childSnapshot4.val()));
                }
                else{
                    var row = Patient_Feedback.insertRow(-1);
                    var cellID = row.insertCell(-1);
                    var cellName = row.insertCell(-1);
                    var cellComment = row.insertCell(-1);
                    cellID.appendChild(document.createTextNode(id));
                    cellName.appendChild(document.createTextNode(name));
                    cellComment.appendChild(document.createTextNode(childSnapshot4.val()));

                }
            })
        });
    });
}
