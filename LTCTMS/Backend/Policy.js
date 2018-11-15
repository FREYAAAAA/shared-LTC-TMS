firebase.auth().onAuthStateChanged(function (firebaseUser){
if(firebaseUser){
  console.log(firebaseUser);
  var userid = firebaseUser.uid;
  var displayName = firebaseUser.displayName;
  console.log(displayName);
  console.log(userid);
}else{
  alert("You're Logged out now! Please Login again if you need to use this system!");
  window.location.href = "//C:/Users/Gama/Documents/GitHub/shared-LTC-TMS/LTCTMS/Frontend/00Login2.html";
}
});

function Logout(){
  firebase.auth().signOut();
}

var storageRef = firebase.storage().ref('Policy/policy.html');
  storageRef.getDownloadURL().then(function (url) {
  firebase.database().ref("Policy/P1/System Policy/").set(url);
  document.getElementById("policy").src=url
});

function openmenu(){
  if(document.getElementById("menu").style.display== "block"){
    document.getElementById("menu").style.display = "none";
    document.getElementById("openmenu").style.opacity = "1";
  }
  else{
  document.getElementById("menu").style.display = "block";
  document.getElementById("openmenu").style.opacity = ".6";
}
}



function profile(){
  document.getElementById("profile").style.display = "block";
}

function closeprofile(){
  document.getElementById("profile").style.display = "none";
  document.getElementById("editprofile").style.display = "none";
}

function editprofile(){
  document.getElementById("profile").style.display = "none";
  document.getElementById("editprofile").style.display = "block";
}

function cancelprofile(){
  window.location.reload()
}

function submitprofile(){

}


var a = new Date();
var hour = a.getHours();
var minute = a.getMinutes();
var second = a.getSeconds();

var time = hour+":"+minute+":"+second;
 console.log(time);

window.onload=function(){
    if(time<"12:00:00" && time>="04:00:00"){
    document.getElementById("time").innerHTML = "Good Morning &nbsp ";
  }
  if(time>="12:00:00" && time<"18:00:00"){
  document.getElementById("time").innerHTML = "Good Afternoon &nbsp ";
}
  if(time>="18:00:00" || time<"04:00:00"){
document.getElementById("time").innerHTML = "Good Evening &nbsp ";
}
}
