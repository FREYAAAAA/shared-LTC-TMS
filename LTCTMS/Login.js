   var logincontact= firebase.database().ref("CenterInformation/"+"ContactInfo/")

   logincontact.once('value')
   .then(function(snapshot){
     console.log(snapshot);
   snapshot.forEach(function(childSnapshot){
     var childKey = childSnapshot.key;
     var childData = childSnapshot.val();
     console.log("ff");
     if (childSnapshot.key == "Name"){
       document.getElementById('contactname').innerHTML=childSnapshot.val();
     }
     if (childSnapshot.key == "Email Address"){
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


   var logincontact= firebase.database().ref("CenterInformation/")

   logincontact.once('value')
   .then(function(snapshot){
     console.log(snapshot);
   snapshot.forEach(function(childSnapshot){
     var childKey = childSnapshot.key;
     var childData = childSnapshot.val();
     console.log("ff");
     if (childSnapshot.key == "Aboutus"){
       document.getElementById('loginaboutus').innerHTML=childSnapshot.val();
     }
   });
   });
