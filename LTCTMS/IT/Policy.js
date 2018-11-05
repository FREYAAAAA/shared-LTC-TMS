var file;
window.onload=function(){
    var select = document.getElementById('select');
    select.addEventListener("change",function(e){
       file= e.target.files[0];
       if(file.name == "policy.html"){
           console.log(file.name);
           //create storage ref to the firebase storage
          firebase.storage().ref('Policy/').child(file.name).put(file);
       }
    });
  }

function download(){
    var url= firebase.storage().ref('Policy/policy.html');
    url.getDownloadURL().then(function(ur2) {
        ur2.forEach(function(ur3){
                window.open(ur3, 'Download');
        })
    });
}

function upload(){
     var storageRef = firebase.storage().ref('Policy/policy.html');
    storageRef.getDownloadURL().then(function (url) {
    alert("success");
    window.location.reload();
    });

}
