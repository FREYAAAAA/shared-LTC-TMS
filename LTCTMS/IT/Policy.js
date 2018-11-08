var storageRef = firebase.storage().ref('Policy/policy.html');
  storageRef.getDownloadURL().then(function (url) {
  firebase.database().ref("Policy/P1").set(url);
  document.getElementById("policy").src=url
});
