//Create account
function newAccount(){
  var name = document.getElementById('Name').value;
  var sid = document.getElementById('SID').value;
  var email = document.getElementById('Email').value;
  var pass = document.getElementById('password').value;
  var position = document.getElementById('position').value;
  //var fb = firebase.database().ref(position+'/'+sid).child('Porfolio');
  //fb.on("value", function(snapshot){
  //  snapshot.val();
  //});
  var data = {
    Name : name,
    Email: email,
    Password : pass,
    Position : position,
    StaffID : sid
  }
  var updates={}
  updates['uAccount/'+position+'/'+ sid]=data;
  firebase.database().ref().update(updates);
  
}


//Delete account
//Update account
//Display UM table - UID, NAME, STATUS, EDIT button
