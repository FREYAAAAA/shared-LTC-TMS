
var fbAboutus = firebase.database().ref("CenterInformation/ContactInfo/Aboutus");
fbAboutus.once("value")
.then(function(snapshot){
    document.getElementById("aboutus_text").innerHTML = snapshot.val();
})


function aboutus_edit(){
    document.getElementById("aboutus_text").disabled = false;
    document.getElementById("aboutus_button").style.display = "block";
}

function aboutus_submit(){
    var text = $("#aboutus_text").val();
    document.getElementById("aboutus_text").disabled = true;
    document.getElementById("aboutus_button").style.display = "none";
    firebase.database().ref("CenterInformation/ContactInfo/Aboutus").set(text);
    firebase.database().ref("CenterInformation/ContactInfo/AboutusAndroid").set(text+"(end)");
    alert("Succesfully entered");

}

var fbCI = firebase.database().ref("CenterInformation/ContactInfo");
fbCI.once("value")
.then(function(snapshot){
    console.log(snapshot.key);
    if(snapshot.key == "ContactInfo"){
        snapshot.forEach(function(childSnapshot1){
            console.log(childSnapshot1.key);
            if(childSnapshot1.key =="Name"){
                document.getElementById("Name").innerHTML = childSnapshot1.val();
                document.getElementById("Name1").innerHTML = childSnapshot1.val();

            }
            if(childSnapshot1.key =="Contact No"){
                document.getElementById("Contact_No").innerHTML = childSnapshot1.val();
                document.getElementById("Contact_No1").innerHTML = childSnapshot1.val();

            }
            if(childSnapshot1.key =="Email"){
                document.getElementById("Email_Address").innerHTML = childSnapshot1.val();
                document.getElementById("Email_Address1").innerHTML = childSnapshot1.val();

            }
            if(childSnapshot1.key =="Address"){
                document.getElementById("Address").innerHTML = childSnapshot1.val();
                document.getElementById("Address1").innerHTML = childSnapshot1.val();

            }
       })
    }
})

function CI_edit(){
    document.getElementById("CI_button").style.display = "block";
    document.getElementById("Name1").style.display = "block";
    document.getElementById("Contact_No1").style.display = "block";
    document.getElementById("Email_Address1").style.display = "block";
    document.getElementById("Address1").style.display = "block";

}
function CI_submit(){
    var name = $("#Name1").val();
    var contact_no = $("#Contact_No1").val();
    var email_address = $("#Email_Address1").val();
    var address = $("#Address1").val();

    if(name == "" || contact_no == "" || email_address == "" || address == ""){
      alert ("Please enter all information")
    }
    else {
    firebase.database().ref("CenterInformation/ContactInfo/Name").set(name);
    firebase.database().ref("CenterInformation/ContactInfo/Contact No").set(contact_no);
    firebase.database().ref("CenterInformation/ContactInfo/Email").set(email_address);
    firebase.database().ref("CenterInformation/ContactInfo/Address").set(address);


    document.getElementById("aboutus_text").disabled = true;
    document.getElementById("CI_button").style.display = "none";
    document.getElementById("Name1").style.display = "none";
    document.getElementById("Contact_No1").style.display = "none";
    document.getElementById("Email_Address1").style.display = "none";
    document.getElementById("Address1").style.display = "none";
    alert ("Succesfully entered")
    location.reload();
  }
}

function sponsor_edit(){
    document.getElementById("form").style.display = "block";
}
function close_form(){
    document.getElementById("form").style.display = "none";
}
function upload_logo(){
    //document.getElementById("form").style.display = "none";

}
var file;
window.onload=function(){
    var fileButton = document.getElementById('fileButton');
    fileButton.addEventListener("change",function(e){
       file= e.target.files[0];
       console.log(file.name);

       //create storage ref to the firebase storage
      firebase.storage().ref('Sponsor/').child(file.name).put(file);

       });
   }

function upload(){
    var text = $("#url_text").val();
    var name = $("#sponsorName").val();
    if ( text == "" || name ==""){
      alert ("Please insert all data")
    }
    else{
    firebase.database().ref("CenterInformation/"+"Sponsor/"+name+"/url").set(text);
     var storageRef = firebase.storage().ref('Sponsor/'+file.name);
    storageRef.getDownloadURL().then(function (url) {
    firebase.database().ref("CenterInformation/"+"Sponsor/"+name+"/photo/").set(url);
    document.getElementById("form").style.display = "none";
    alert("success");
    location.reload();
    });
  }
}


var sp = [];
var index = 0;
var fbSponsor = firebase.database().ref("CenterInformation/Sponsor");
fbSponsor.once("value")
.then(function(snapshot){
    var sponsorTD = document.getElementById("sponsor_td");
    var img = document.createElement("IMG");
    var link = [];
    var i =0;
    snapshot.forEach(function(childSnapshot1){
        sp[index] = childSnapshot1.key;
        index++;
        console.log(childSnapshot1.key);
        childSnapshot1.forEach(function(childSnapshot2){
            var sponsorTD = document.getElementById("sponsor_td");
            var img = document.createElement("img");
            var button = document.createElement("button");

            var newLink = document.createElement("a");
            newLink.id ="link["+i+"]"
            var Link = document.getElementById("link["+i+"]");

            if(childSnapshot2.key == "photo"){
                img.src = childSnapshot2.val();
                sponsorTD.appendChild(newLink);
                newLink.appendChild(img);
                img.style.width= "100px";
                img.style.height = "100px";
                sponsorTD.appendChild(button);
                button.setAttribute("id","button_id["+i+"]");
                button.setAttribute("onclick","remove("+i+")");
                button.setAttribute("style","display:none;")
                button.innerHTML="X";

            }
            if(childSnapshot2.key == "url"){
                console.log(childSnapshot2.val());
                console.log("link["+i+"]");
                document.getElementById("link["+i+"]").href= childSnapshot2.val();
                //document.getElementById("link["+i+"]").onclink= ff();

            }
        });
        i++;

    });
})

function remove(sponsor){
    console.log(sponsor);
    console.log(sp[sponsor]);
    var r = confirm("Are you sure you want to remove a sponsor?");
    if (r == true) {
    firebase.database().ref("CenterInformation/"+"Sponsor/"+sp[sponsor]).remove();
      alert("successfully removed!");
      window.location.reload();
    }
    else {
    }
}


function sponsor_delete(){
    for(var i=0; i<= index; i++){
        console.log("button_id["+i+"]");
        document.getElementById("button_id["+i+"]").setAttribute("style","display:inline;");
    }
}
