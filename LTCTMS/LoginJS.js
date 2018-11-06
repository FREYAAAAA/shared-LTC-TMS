//Login page contents
var logincontact= firebase.database().ref("CenterInformation/ContactInfo/")
logincontact.once('value')
.then(function(snapshot){
snapshot.forEach(function(childSnapshot){
  var childKey = childSnapshot.key;
  var childData = childSnapshot.val();
  if (childSnapshot.key == "Aboutus"){
    document.getElementById('loginaboutus').innerHTML=childSnapshot.val();
  }
  if (childSnapshot.key == "Name"){
    document.getElementById('contactname').innerHTML=childSnapshot.val();
  }
  if (childSnapshot.key == "Email"){
    document.getElementById('contactemail').innerHTML=childSnapshot.val();
  }
  if (childSnapshot.key == "Contact No"){
    document.getElementById('contactno').innerHTML=childSnapshot.val();
  }
  if (childSnapshot.key == "Address"){
    document.getElementById('contactaddress').innerHTML=childSnapshot.val();
  }
});
});

//Login event
function LoginUser(){
  var txtEmail = document.getElementById('txtEmail');
  var txtPassword = document.getElementById('txtPassword');
  var email = txtEmail.value;
  console.log(txtEmail.value);
  var pass = txtPassword.value;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(function(error){
    alert("Incorrect Email or Password!");
  });
}

//For checking whether you're loggedin or Loggedout
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser){
    console.log(firebaseUser);
    alert('Logging in!');
    window.location.href = "Aboutus.html";

  }
  else {
    console.log('not logged in');

  }
});

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {

      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

function bigqr(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}

function normalqr(x) {
    x.style.height = "16px";
    x.style.width = "16px";
}

function forgetPass(){
  var getEmail = document.getElementById('forgetP').value;
  var position = document.getElementById('fposition').value;
  var id = document.getElementById('fid').value;
  if(position == "Director of Nursing" || position == "Director" || position == "DIR"){
    var fbF = firebase.database().ref('DIR');
    fbF.child(id).once("value", function(snapshot){
      if(snapshot.exists()){
        searchForEmail(fbF,id,getEmail);
      }else{
        alert("ID doesn't exist!");
      }
    });
  }else if(position == "Chief Nursing Officer" || position == "CNO"){
    var fbF = firebase.database().ref('CNO');
    fbF.child(id).once("value", function(snapshot){
      if(snapshot.exists()){
        searchForEmail(fbF,id,getEmail);
      }else{
        alert("ID doesn't exist!");
      }
    });
  }else{
    alert("There is no such role/position capable to use this is system!");
  }
}

function searchForEmail(fbF,id,getEmail){
  fbF.child(id+'/Portfolio').once('value',function(snapshot){
    var Email = snapshot.child('Email').val();
    if(Email == getEmail){
      firebase.auth().sendPasswordResetEmail(getEmail).then(function(){
        alert("Please check your email to reset the password!");
      }).catch(function(error){
        alert("Failed to send Email!");
      });
    }else{
      alert("Email doesn't Exist!");
    }
  });

}
