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


   var logincontact= firebase.database().ref("CenterInformation/"+"ContactInfo/")

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


   function bigqr(x) {
       x.style.height = "100px";
       x.style.width = "100px";
   }

   function normalqr(x) {
       x.style.height = "16px";
       x.style.width = "16px";
   }





   var cnoaddress = firebase.database().ref("CNO/");
   console.log("123");
   var cnousername = []
   var cnopassword = []
   var cnoindex = 0;
   cnoaddress.once("value")
   .then(function(snapshot){
     snapshot.forEach(function(first){

     first.forEach(function(second){

       if( second.key == "Portfolio"){
         second.forEach(function(third){

           if (third.key == "Email"){
           cnousername[cnoindex] = third.val();
           console.log(cnousername[cnoindex]);
         }

           if (third.key == "Password"){
           cnopassword[cnoindex] = third.val();
           console.log(cnopassword[cnoindex]);


           cnoindex++;
         }
       })
     }
   })
   })
   })



   var diraddress = firebase.database().ref("DIR/");
   console.log("123");
   var dirusername = []
   var dirpassword = []
   var dirindex = 0;
   diraddress.once("value")
   .then(function(snapshot){
     snapshot.forEach(function(first){

     first.forEach(function(second){

       if( second.key == "Portfolio"){
         second.forEach(function(third){

           if (third.key == "Email"){
           dirusername[dirindex] = third.val();
           console.log(dirusername[dirindex]);
         }

           if (third.key == "Password"){
           dirpassword[dirindex] = third.val();
           console.log(dirpassword[dirindex]);


           dirindex++;
         }
       })
     }
   })
   })
   })


function validate(){
    var username = document.getElementById("txtEmail").value;
    var password = document.getElementById("txtPassword").value;

    console.log(cnoindex);
    console.log(dirindex);
      if(username == "" || password == ""){
        alert ("Please enter username and password")
      }
      else {
        for(var c=0; c<=cnoindex; c++){
             if( ( username == cnousername[c] && password == cnopassword[c])||( username == dirusername[c] && password == dirpassword[c])){
                alert ("Login successfully!");
                window.location = "/Users/ian50408/Documents/GitHub/shared-LTC-TMS/LTCTMS/Aboutus/Aboutus.html";
                return;
            }
        }
        console.log("fail:")
        alert("Wrong username or password");
        location.reload();
    }
}
