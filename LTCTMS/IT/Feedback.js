
    var fbFeedback = firebase.database().ref("Feedback/");
    var num = 0;
    fbFeedback.once("value")
    .then(function(snapshot){
        snapshot.forEach(function(childSnapshot1){
            var id = childSnapshot1.key;
            match_id(id,fbFeedback);
       });
    });

function match_id(id,fbFeedback){

    if (id.charAt(0) == "3"){
        var fbCNA = firebase.database().ref("CNA/"+id+"/Portfolio");
        let arr_name = [];
        var name;
        var picture;
        fbCNA.once("value")
           .then(function(snapshot){
               var name;
               var picture;
               snapshot.forEach(function(childSnapshot1){
                   if(childSnapshot1.key == "Name"){
                       name = childSnapshot1.val();
                   }
                   if(childSnapshot1.key =="pictureurl"){
                       picture = childSnapshot1.val();
                       tableform(id,name,fbFeedback,picture);
                   }
               })
           });
    }
    else{
        var fbPAT = firebase.database().ref("Patient/"+id+"/Portfolio");
        let arr_name = [];
        var name;
        fbPAT.once("value")
           .then(function(snapshot){
               var name;
               var picture;
               snapshot.forEach(function(childSnapshot1){
                   if(childSnapshot1.key == "Name"){
                       name = childSnapshot1.val();
                   }
                   if(childSnapshot1.key =="pictureurl"){
                       picture = childSnapshot1.val();
                       tableform(id,name,fbFeedback,picture);
                   }
               })
           });
    }

}
var index = 0;
function tableform(id,name,fbFeedback,picture){
    fbFeedback.child(id).once('value').
    then(function(childSnapshot2){
        childSnapshot2.forEach(function(childSnapshot3 ){
            var m = childSnapshot3.key;
            var a = m.split("-");
            var month = a[0]+"-"+a[1];
            childSnapshot3.forEach(function(childSnapshot4){
                var t = childSnapshot4.key;
                var time = t.split("-");
                var time1 = time[1].split(":");
                var value = childSnapshot4.val();
            //  document.getElementById("user-fa").src = "/images/user_info_bg.jpg";
                var container = document.getElementById('container');
                var div = document.createElement('div');
                var span0 = document.createElement("span");
                var span = document.createElement('span');
                var span1 = document.createElement('span');
                var i = document.createElement("i");
                var img = document.createElement("img");
                var div1 = document.createElement('div');
                var span2 = document.createElement('span');
                var span3 = document.createElement("span");
                var span4 = document.createElement("span");

                var div2 = document.createElement('div');
                var div3 = document.createElement('div');
                var input = document.createElement("input");
                var button = document.createElement("button");
                div.setAttribute("class", "liuyan");
                div.setAttribute("id", "liuyan["+index+"]");
                span0.setAttribute("id","time["+index+"]");
                span0.setAttribute("class","time");
                span.setAttribute("id", "user-fa["+index+"]");
                i.setAttribute("class", "fa fa-user");
                img.setAttribute("class", "user-fa");
                img.setAttribute("id", "photo["+index+"]");
                //img.setAttribute("src","#");
                div1.setAttribute("id","user["+index+"]");
                span2.setAttribute("id", "comment["+index+"]");
                span2.setAttribute("class", "comment");
                span1.setAttribute("id","username["+index+"]");
                span3.setAttribute("onclick","replyToggle("+index+")");
                span3.setAttribute("class", "reply");
                span3.setAttribute("id","reply["+index+"]")
                span4.setAttribute("id","replyComment["+index+"]");

                div2.setAttribute("id" ,"usermessage");
                div3.setAttribute("class" ,"content");
                input.setAttribute("id", "message["+index+"]");
                input.setAttribute("class", "text-success");
                input.setAttribute("type", "text");
                button.setAttribute("id","btn["+index+"]");
                button.setAttribute("class", "btn-success");

                button.setAttribute("onclick", "sendMess("+id+","+a[0]+","+a[1]+","+index+","+time[0]+","+time1[0]+","+time1[1]+","+time1[2]+","+value+")");
                button.innerHTML= "Enter";
                span3.innerHTML = "Reply";

                if(childSnapshot3.key != "Reply"){
                    if(id.charAt(0) == "3"){
                        container.appendChild(div);

                        div.appendChild(span);
                        span.appendChild(i);
                        i.appendChild(img);
                        div.appendChild(div1);
                        div1.appendChild(span1);
                        div.appendChild(span2);
                        div.appendChild(span3);
                        div.appendChild(span0);

                        div.appendChild(div2);
                        div2.appendChild(div3);
                        div2.appendChild(span4);
                        div3.appendChild(input);
                        div3.appendChild(button);

                        document.getElementById("time["+index+"]").innerHTML = month+"-"+t;
                        document.getElementById("photo["+index+"]").src = picture;
                        document.getElementById("username["+index+"]").innerHTML = name +"  said:";
                        document.getElementById("comment["+index+"]").innerHTML = childSnapshot4.val();
                        getReply(id,index,a[0],a[1],time[0],time1[0],time1[1],time1[2]);
                        console.log(index);
                        index++;
                    }
                    else{
                        var container1 = document.getElementById("container1");
                        container1.appendChild(div);
                        div.appendChild(span);
                        span.appendChild(i);
                        i.appendChild(img);
                        div.appendChild(div1);
                        div1.appendChild(span1);
                        div.appendChild(span2);
                        div.appendChild(span3);
                        div.appendChild(span0);


                        div.appendChild(div2);
                        div2.appendChild(div3);
                        div2.appendChild(span4);
                        div3.appendChild(input);
                        div3.appendChild(button);

                        document.getElementById("time["+index+"]").innerHTML = month+"-"+t;
                        document.getElementById("photo["+index+"]").src = picture;
                        document.getElementById("username["+index+"]").innerHTML = name +"  said:";
                        document.getElementById("comment["+index+"]").innerHTML = childSnapshot4.val();

                        getReply(id,index,a[0],a[1],time[0],time1[0],time1[1],time1[2]);
                        console.log(index);

                    }
                }
            })
        })
    });

}
function getReply(id,index,year,month,date,h,m,s){
    var key = year+"-"+month;
    var time = date+"-"+h+":"+m+":"+s;
    var fbReply = firebase.database().ref("Feedback/"+id+"/Reply"+"/"+key+"/"+time);
    fbReply.once('value').
    then(function(snapshot){
        document.getElementById("replyComment["+index+"]").innerHTML = snapshot.val();
    })
}

function replyToggle(index){
    if(document.getElementById("message["+index+"]").style.display =="inline"){
        document.getElementById("message["+index+"]").style.display = "none";
        document.getElementById("reply["+index+"]").innerHTML = "Reply";
        document.getElementById("btn["+index+"]").style.display = "none";

    }
    else{
        document.getElementById("message["+index+"]").style.display = "inline";
        document.getElementById("reply["+index+"]").innerHTML = "Collapse";
        document.getElementById("btn["+index+"]").style.display = "inline";
    }
}

function sendMess(id,year,month,index,date,h,m,s,value){
    var key = year+"-"+month;
    var idre = "000001"; // Replyer's  ID
    var time = date+"-"+h+":"+m+":"+s;
    var comment = document.getElementById("message["+index+"]").value;

    firebase.database().ref("Feedback/"+id+"/Reply/"+key+"/"+"/"+time).set(comment);
    document.getElementById("replyComment["+index+"]").innerHTML = comment;
    replyToggle(index);

    console.log(comment);

}

setTimeout(function(){
    pat = document.getElementById("container");
    staff = document.getElementById("container1");
    sorting(pat);
    sorting(staff)
}, 3000);
function sorting(table){
  var  rows, switching, i, x, y, s, shouldSwitch, dir, switchcount = 0;

  switching = true;
  dir = "asc";
  rows = table.getElementsByTagName("div");
  console.log(rows.length);

  while (switching) {

    switching = false;
    for (i = 0; i < rows.length-4; i=i+4) {
        console.log(i);
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("span")[4];
        y = rows[i+4].getElementsByTagName("span")[4];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          console.log("jump out")
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i+4], rows[i]);
      console.log("suc");
      switching = true;
      switchcount ++;
    }
  }
}
