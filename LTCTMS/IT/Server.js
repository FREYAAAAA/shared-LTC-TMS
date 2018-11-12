//Firebase DB
var firebase=require("firebase");
var config = {
   apiKey: "AIzaSyCnuAZzFvkT-FSRxB5Vk67JM6FU9wZLYMQ",
   authDomain: "share-b7589.firebaseapp.com",
   databaseURL: "https://share-b7589.firebaseio.com",
   projectId: "share-b7589",
   storageBucket: "share-b7589.appspot.com",
   messagingSenderId: "323469467975"
 };
 firebase.initializeApp(config);

//Admin SDK setup
var admin = require("firebase-admin");

var serviceAccount = require("/Users/Gama/Documents/GitHub/shared-LTC-TMS/LTCTMS/share-b7589-firebase-adminsdk-9gtpk-8d7012282d");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://share-b7589.firebaseio.com"
});

//Functions
var functions = require("firebase-functions");

exports.createUser= functions.database.ref('uAccount/{position}/{sid}').onUpdate((snapshot, context)=>{
  var wp = context.params.position;
  var id = context.params.sid;
  console.log('wp ='+ wp + 'id ='+ id);
  var childData = snap.val();

  admin.auth().createUser({
      email: childData.Email,
      password:childData.Password,
      displayName:childData.Name,
      disabled:false,
      emailVerified: true
  }).then(function(userRecord){
    console.log("user", userRecord.toJSON());
    var updates={};
    var userData=userRecord.toJSON();
    console.log(userData);
    var updatedList = JSON.parse(JSON.stringify(userData));
    console.log(updatedList);
    updates['uAccount/'+childData.Position+'/Account']= updatedList;
    firebase.database().ref().update(updates);
  }).catch(function(error){
    console.log(error.message);
  });
});

/**/
