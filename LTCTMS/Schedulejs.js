var btnLogout = document.getElementById('btnLogout')
btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
  window.location = 'Login.html';
});

//Create new Announcement button
function AddNewA(){
    document.getElementById('newABlock').style.display ='block';
}

//Read firebase Announcements
var fbA = firebase.database().ref('Announcements');
var Atable = document.getElementById('table')
var rowIndex = 1;

fbA.once('value',function(snapshot){
  snapshot.forEach(function(childSnapshot){
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    var button = document.createElement("button");
    var button2 = document.createElement("button");
    button.innerHTML="Detail";
    button2.innerHTML="Delete";

    var row = Atable.insertRow(rowIndex);
    var cellId = row.insertCell(0)
    var cellAnnouncement= row.insertCell(1);
    var cellButton= row.insertCell(2)
    var cellButton2= row.insertCell(3);
    cellId.appendChild(document.createTextNode(childKey));
    cellAnnouncement.appendChild(document.createTextNode(childData.ATitleIOS));
    cellButton.appendChild(button);
    cellButton2.appendChild(button2);

    button.onclick = editA;
    button2.onclick = deleteA;
    rowIndex = rowIndex + 1;

  });
});

//createNew Announcement Data
function createNewAnnouncement(){
  var data = $('#Announcement').val();
  var title1= $('#Atitle').val();
  var title2= 'xtsx'+title1+'xtex';
  var data2 = 'xasx' + data + 'xaex';
  var keyA = fbA.push().key;
  var AData = {
    a_id : keyA,
    ATitleAndroid: title2 ,
    ATitleIOS:title1 ,
    AnnouncementAndroid:data2,
    AnnouncementIOS: data
  }
  var updates = {};
  if(data == ""){
    alert(' Please input a data');
  }
  else {
  updates['Announcements/'+ keyA] = AData;
  firebase.database().ref().update(updates);
  alert('Successfully Entered');
  window.location.reload();
}
}

//Deleting Announcements
function deleteA(){
  var fbB= firebase.database().ref('Announcements');
  var Ukey = $(this).closest('tr').children('td:first').text();
  console.log(Ukey);
  var r = confirm("Are you sure you want to delete an announcement?");
    if (r == true) {
        fbB.child(Ukey).remove();
        alert("successfully deleted!");
        window.location.reload();
    }
    else {
    }
}

//View/Editing Announcement
function editA(){
  document.getElementById('editABlock').style.display ='block';
  var Ukey = $(this).closest('tr').children('td:first').text();
  var fbB= firebase.database().ref('Announcements/'+Ukey);
  fbB.on('value', function(snapshot){
    var EAdata = snapshot.child('AnnouncementIOS').val();
    var EAdata2 = snapshot.child('ATitleIOS').val();
    document.getElementById('Amsg').value = EAdata;
    document.getElementById('AEtitle2').value = EAdata2;
  });
  console.log(Ukey);
  document.getElementById('announcement_id').innerHTML = Ukey;
}

function editSave(){
  var editedData = $("#Amsg").val();
  var editedData2 = 'xasx' + editedData + 'xaex';
  var akey = document.getElementById('announcement_id').innerText;
  var title1= $('#AEtitle2').val();
  var title2= 'xtsx'+title1+'xtex';
  var wholeA ={
    ATitleIOS: title1,
    ATitleAndroid: title2 ,
    AnnouncementAndroid: editedData2,
    AnnouncementIOS: editedData,
    a_id: akey
};
if(editedData == ""){
  alert(' Please input a data');
}
else {
  var updates={};
  updates['Announcements/'+ akey] = wholeA;
  window.location.reload();
  return firebase.database().ref().update(updates);
}
}

function btnpopUp(){
  document.getElementById('Esave').style.display = "block";

}

 function editCancel(){
  window.location.reload();
}





//Center Schedule
function AddNewCS(){
document.getElementById('newCSBlock').style.display ='block';
}

//Create new Working Schedule - Upload folder into firebase
var uploader3 = document.getElementById('uploader3');
var fileButton3 = document.getElementById('fileButton3');
var submitfileButton3 = document.getElementById('btnSubmitCS')

fileButton3.addEventListener('change', handleuploadfile3);
submitfileButton3.addEventListener('click', handleuploadfileSubmit3);

let file3;

function handleuploadfile3(e) {
 file3=e.target.files[0];

}

function handleuploadfileSubmit3(e) {
  if(file3 == undefined){
    alert ("Please enter data!")
  }
var storageRef=firebase.storage().ref('CenterSchedule/'+file3.name);
var uploadtask3 = storageRef.put(file3);

uploadtask3.on('state_changed',

  function progress(snapshot){
    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    uploader.value = percentage;
  },

  function error(err){
    console.log("failed");
  },

  function complete(){
    console.log('Successful');
     var postKey = firebase.database().ref('CenterSchedule/').push().key;
     var title = document.getElementById('fileTitle3').value;
     var title2 = 'xtsx' + title + 'xtex';
     storageRef.getDownloadURL().then(function(url){
       console.log("Success");
       console.log(url);
       var updates = {};
       var postData={
       url : url,
       id : postKey,
       titleAndroid : title2,
       titleIOS: title
     };
    // if(url == "" || title =="")
    //  alert ("Please input")
    //else {
     updates['CenterSchedule/' + postKey] = postData;
     firebase.database().ref().update(updates);
     alert ("Entered Succesfully");
     window.location.reload();
   //}
     });
  }
);
}

//Display CS table
var rowIndexCS = 1;
var fbCS = firebase.database().ref('CenterSchedule')
var WStable = document.getElementById('CStable');

fbCS.once('value',function(snapshot){
snapshot.forEach(function(childSnapshot){
  var childKey = childSnapshot.key;
  var childData = childSnapshot.val();
  var button = document.createElement("button");
  var button2 = document.createElement("button");
  button.innerHTML="Download";
  button2.innerHTML="Delete";


  var row = CStable.insertRow(rowIndexCS);
  var cellId = row.insertCell(0)
  var cellCSTitle = row.insertCell(1);
  var cellButton = row.insertCell(2);
  var cellButton2 = row.insertCell(3);
  cellId.appendChild(document.createTextNode(childKey));
  cellCSTitle.appendChild(document.createTextNode(childData.titleIOS));
  cellButton.appendChild(button);
  cellButton2.appendChild(button2);

  button.onclick = downloadCS;
  button2.onclick = deleteCS;
  rowIndexCS = rowIndexCS + 1;

});
});

//CS deletion
function deleteCS(){
var fbCS= firebase.database().ref('CenterSchedule');
var Ukey = $(this).closest('tr').children('td:first').text();
console.log(Ukey);
var r = confirm("Are you sure you want to delete a center schedule?");
if (r == true) {
  fbCS.child(Ukey).remove();
  alert("successfully deleted!");
  window.location.reload();
}
else {
}
}

//CS download
function downloadCS(){
var fbCS= firebase.database().ref('CenterSchedule');
var Ukey = $(this).closest('tr').children('td:first').text();
var url = fbCS.child(Ukey).child('url');
let downloadURL;
url.once("value").then(function(snapshot){
   downloadURL = snapshot.val();
  // console.log(downloadURL);
   window.location = downloadURL;
});
}


function DownloadNewCS(){
var url= firebase.storage().ref('CenterSchedule/csnew.xlsx');
url.getDownloadURL().then(function(ur2) {
      window.location = ur2;
   });
   }


//Working Schedule table
function AddNewWS(){
document.getElementById('newWSBlock').style.display ='block';
}

//Create new Working Schedule - Upload folder into firebase
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');
var submitfileButton = document.getElementById('btnSubmitWS')

fileButton.addEventListener('change', handleuploadfile);
submitfileButton.addEventListener('click', handleuploadfileSubmit);

let file;

function handleuploadfile(e) {
 file=e.target.files[0];
}

function handleuploadfileSubmit(e) {
  if(file == undefined){
    alert ("Please enter data!")
  }
var storageRef=firebase.storage().ref('WorkingSchedule/'+file.name);
var uploadtask = storageRef.put(file);

uploadtask.on('state_changed',

  function progress(snapshot){
    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    uploader.value = percentage;
  },

  function error(err){
    console.log("failed");
  },

  function complete(){
    console.log('Successful');
     var postKey = firebase.database().ref('WorkingSchedule/').push().key;
     var title = document.getElementById('fileTitle').value;
     var title2 = "xtsx"+ title +"xtex";
     storageRef.getDownloadURL().then(function(url){
       console.log("Success");
       console.log(url);
       var updates = {};
       var postData={
       url : url,
       id : postKey,
       titleAndroid : title2,
       titleIOS : title
     };
     updates['WorkingSchedule/' + postKey] = postData;
     firebase.database().ref().update(updates);
    alert ("Entered Succesfully");
     window.location.reload();

     });
  }
);
}


//Display WS table
var rowIndexWS = 1;
var fbWS = firebase.database().ref('WorkingSchedule')
var WStable = document.getElementById('WStable');

fbWS.once('value',function(snapshot){
snapshot.forEach(function(childSnapshot){
  var childKey = childSnapshot.key;
  var childData = childSnapshot.val();
  var button = document.createElement("button");
  var button2 = document.createElement("button");
  button.innerHTML="Download";
  button2.innerHTML="Delete";


  var row = WStable.insertRow(rowIndexWS);
  var cellId = row.insertCell(0)
  var cellWSTitle = row.insertCell(1);
  var cellButton = row.insertCell(2);
  var cellButton2 = row.insertCell(3);
  cellId.appendChild(document.createTextNode(childKey));
  cellWSTitle.appendChild(document.createTextNode(childData.titleIOS));
  cellButton.appendChild(button);
  cellButton2.appendChild(button2);

  button.onclick = downloadWS;
  button2.onclick = deleteWS;
  rowIndexWS = rowIndexWS + 1;

});
});
//WS deletion
function deleteWS(){
var fbWS= firebase.database().ref('WorkingSchedule');
var Ukey = $(this).closest('tr').children('td:first').text();
console.log(Ukey);
var r = confirm("Are you sure you want to delete a working schedule?");
if (r == true) {
  fbWS.child(Ukey).remove();
  alert("successfully deleted!");
  window.location.reload();
}
else {
}
}
//WS download
function downloadWS(){
var fbWS= firebase.database().ref('WorkingSchedule');
var Ukey = $(this).closest('tr').children('td:first').text();
var url = fbWS.child(Ukey).child('url');
let downloadURL;
url.once("value").then(function(snapshot){
   downloadURL = snapshot.val();
   console.log(downloadURL);
   window.location = downloadURL;
});
}
function DownloadNewWS(){
var url= firebase.storage().ref('CenterSchedule/wsnew.xlsx');
url.getDownloadURL().then(function(ur2) {
      window.location = ur2;
   });
   }


//Working hour
function AddNewWH(){
document.getElementById('newWHBlock').style.display ='block';
}

function DownloadNewWH(){
var url= firebase.storage().ref('CenterSchedule/whnew.xlsx');
url.getDownloadURL().then(function(ur2) {
      window.location = ur2;
   });
   }

//Upload file
var uploader2 = document.getElementById('uploader2');
var fileButton2 = document.getElementById('fileButton2');
var submitfileButton2 = document.getElementById('btnSubmitWH')

fileButton2.addEventListener('change', handleuploadfile2);
submitfileButton2.addEventListener('click', handleuploadfileSubmit2);

let file2;

function handleuploadfile2(e) {
 file2=e.target.files[0];
}

function handleuploadfileSubmit2(e) {
  if(file2 == undefined){
    alert ("Please enter data!")
  }
var storageRef=firebase.storage().ref('WorkingHourRecord/'+file2.name);
var uploadtask = storageRef.put(file2);

uploadtask.on('state_changed',

  function progress(snapshot){
    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    uploader2.value = percentage;
  },

  function error(err){
    console.log("failed");
  },

  function complete(){
    console.log('Successful');
     var postKey = firebase.database().ref('WorkingHourRecord/').push().key;
     var title = document.getElementById('fileTitle2').value;
     var title2 = 'xtsx'+title+'xtex';
     storageRef.getDownloadURL().then(function(url){
       console.log("Success");
       console.log(url);
       var updates = {};
       var postData={
       url : url,
       id : postKey,
       titleAndroid : title2,
       titleIOS : title
     };
     updates['WorkingHourRecord/' + postKey] = postData;
     firebase.database().ref().update(updates);
    alert ("Entered Succesfully");
     window.location.reload();

     });
  }
);
}

//Display all Working Hour
var rowIndexWH = 1;
var fbWH = firebase.database().ref('WorkingHourRecord')
var tableWH = document.getElementById('tableWH');

fbWH.once('value',function(snapshot){
snapshot.forEach(function(childSnapshot){
  var childKey = childSnapshot.key;
  var childData = childSnapshot.val();
  var button = document.createElement("button");
  var button2 = document.createElement("button");
  button.innerHTML="Download";
  button2.innerHTML="Delete";


  var row = tableWH.insertRow(rowIndexWH);
  var cellId = row.insertCell(0)
  var cellWHTitle = row.insertCell(1);
  var cellButton = row.insertCell(2);
  var cellButton2 = row.insertCell(3);
  cellId.appendChild(document.createTextNode(childKey));
  cellWHTitle.appendChild(document.createTextNode(childData.titleIOS));
  cellButton.appendChild(button);
  cellButton2.appendChild(button2);

  button.onclick = downloadWH;
  button2.onclick = deleteWH;
  rowIndexWH = rowIndexWH + 1;
});
});

//WH deletion
function deleteWH(){
var fbWH= firebase.database().ref('WorkingHourRecord');
var Ukey = $(this).closest('tr').children('td:first').text();
console.log(Ukey);
var r = confirm("Are you sure you want to delete a working hour?");
if (r == true) {
  fbWH.child(Ukey).remove();
  alert("successfully deleted!");
  window.location.reload();
}
else {
}
}

//WH download
function downloadWH(){
var fbWH= firebase.database().ref('WorkingHourRecord');
var Ukey = $(this).closest('tr').children('td:first').text();
var url = fbWH.child(Ukey).child('url');
let downloadURL;
url.once("value").then(function(snapshot){
   downloadURL = snapshot.val();
   console.log(downloadURL);
   window.location = downloadURL;
});
}
