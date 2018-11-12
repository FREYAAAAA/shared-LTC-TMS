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

var admin = require("firebase-admin");

var serviceAccount = require("/Users/Gama/Documents/GitHub/shared-LTC-TMS/LTCTMS/share-b7589-firebase-adminsdk-9gtpk-8d7012282d");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://share-b7589.firebaseio.com"
});

var functions = require("firebase-functions");

exports.createUser= functions.database.ref('uAccount/{position}/{sid}').onCreate((snapshot, context)=>{
  var wp = context.params.position;
  var id = context.params.sid;
  console.log('wp ='+ wp + 'id ='+ id);
});

/*admin.auth().createUser({
    email:"gama.febrian@gmail.com",
    password:"admin123123",
    displayName:"Gama",
    disabled:false,
    emailVerified: true,
    photoURL:"https://firebasestorage.googleapis.com/v0/b/share-b7589.appspot.com/o/Staff%2Fquiz20.PNG?alt=media&token=014eddaf-4c21-4645-85dc-3ef75f7c8484",
    phoneNumber:"+886978062051"

}).then(function(userRecord){
  console.log("user", userRecord.toJSON());
  var updates={};
  var userData=userRecord.toJSON();
  console.log(userData);
  var updatedList = JSON.parse(JSON.stringify(userData));
  console.log(updatedList);
  updates['uAccount/User']= updatedList;
  firebase.database().ref().update(updates);
}).catch(function(error){
  console.log(error.message);
});*/
