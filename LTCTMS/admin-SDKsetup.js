
var admin = require("firebase-admin");

var serviceAccount = require("C:\inetpub\wwwroot\LTCTMS\share-b7589-firebase-adminsdk-9gtpk-8d7012282d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://share-b7589.firebaseio.com"
});
