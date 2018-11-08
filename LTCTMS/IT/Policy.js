var storageRef = firebase.storage().ref('Policy/policy.html');
  storageRef.getDownloadURL().then(function (url) {
  firebase.database().ref("Policy").set(url);
  document.getElementById("policy").src=url
});
