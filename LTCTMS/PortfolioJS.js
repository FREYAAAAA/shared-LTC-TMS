//Add new Portfolio
function addNewPortfolio(){
  document.getElementById('newPortfolioSeletion').style.display ='block';
}

function staffPortfolio(){
  document.getElementById('newStaffPortfolio').style.display = 'block';
}

function patientPortfolio(){

}

//upload picture
var pickUploader = document.getElementById('picUploader');
var btnPicture = document.getElementById('btnPicture');
var btnSubmitP = document.getElementById('btnSubmitP')

btnPicture.addEventListener('change', handleuploadfile);
btnLicense.addEventListener('change', handleuploadfile2);
btnSubmitP.addEventListener('click', handleuploadfileSubmit);

let file;


function handleuploadfile(e) {
  for (var i = 0; i < e.target.files.length;i++){
    file=e.target.files[i];
  }
}


function handleuploadfileSubmit(e) {

var storageRef=firebase.storage().ref('Staff/'+file.name);
var uploadtask = storageRef.put(file);

uploadtask.on('state_changed',

  function progress(snapshot){
    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    Uploader.value = percentage;
  },

  function error(err){
    console.log("failed");
  },

  function complete(){
    console.log('Successful');
     var postKey = firebase.database().ref('/').push().key;
     var title = document.getElementById('fileTitle2').value;
     storageRef.getDownloadURL().then(function(url){
       console.log("Success");
       console.log(url);
       var updates = {};
       var postData={
       pictureurl : url,
       id : postKey,
       title : title
     };
     updates['WorkingHourRecord/' + postKey] = postData;
     firebase.database().ref().update(updates);
     window.location.reload();

     });
  }
);
}
