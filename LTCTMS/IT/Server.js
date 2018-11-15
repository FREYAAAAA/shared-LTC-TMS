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

exports.createUser= functions.database.ref('uAccount/{sid}')
  .onCreate((snapshot, context)=>{
  var id = context.params.sid;
  console.log( 'id ='+ id);
  var childData = snapshot.val();

  return admin.auth().createUser({
      uid : id,
      email: childData.Email,
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
    updates['AuthenticationData']= updatedList;
    return snapshot.ref.update(updates);
  }).catch(function(error){
    console.log(error.message);
  });
});

//Deletion Back end
exports.deleteUser=functions.database.ref('uAccount/{sid}')
  .onDelete((deleteshot,context)=>{
    var id = context.params.sid;
    console.log('id ='+ id);
    var childData = deletetion.val();
    return admin.auth().deleteUser(id)
      .then(function(){
        console.log('Successfully deleted the target User');
      }).catch(function(error){
        console.log(error.message);
      });
  });

//Update Back end
exports.updateUser=functions.database.ref('uAccount/{sid}')
  .onUpdate((change,context)=>{
    var id = context.params.sid;
    console.log('id ='+ id);

    var childData = change.after.val();
    return admin.auth().updateUser(id,{
      email:childData.Email,
      displayName: childData.Name,
      uid:childData.StaffID,
      password:childData.Password,
      disabled:false,
      emailVerified: true
    }).then(function(userRecord){
      console.log("user", userRecord.toJSON());
      var updates={};
      var userData=userRecord.toJSON();
      console.log(userData);
      var updatedList = JSON.parse(JSON.stringify(userData));
      console.log(updatedList);
      updates['AuthenticationData']= updatedList;
      return change.after.ref.update(updates);
    }).catch(function(error){
      console.log(error.message);
    });
  });
