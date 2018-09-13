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
/*fbA.on("child_added", snap =>{
  var Textarea = snap.child("Announcement").val();
  var aid = snap.child("a_id").val();

  $("#table").append("<tr><td>" + aid + "</td><td>" + Textarea + '</td><td> <button type="button" onclick="editA()"><img src="image/pencil.png" height="15px" width="15px"/></button></td><td><button id="delete" onclick="deleteA()" type="button"><img src="image/trash-can.png" height="15px" width="15px"/></button> </td></tr>');

});*/
var Atable = document.getElementById('table')
var rowIndex = 1;

fbA.once('value',function(snapshot){
  snapshot.forEach(function(childSnapshot){
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    var button = document.createElement("button");
    var button2 = document.createElement("button");
    button.innerHTML="Edit";
    button2.innerHTML="Delete";

    var row = Atable.insertRow(rowIndex);
    var cellId = row.insertCell(0)
    var cellAnnouncement= row.insertCell(1);
    var cellButton= row.insertCell(2)
    var cellButton2= row.insertCell(3);
    cellId.appendChild(document.createTextNode(childKey));
    cellAnnouncement.appendChild(document.createTextNode(childData.Announcement));
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
  var keyA = fbA.push().key;
  var AData = {
    a_id : keyA,
    Announcement: data
  }
  var updates = {};
  updates['Announcements/'+ keyA] = AData;
  firebase.database().ref().update(updates);
  alert('Successfully Entered');
  window.location.reload();
}

//Deleting Announcements
function deleteA(){
  var fbB= firebase.database().ref('Announcements');
  var Ukey = $(this).closest('tr').children('td:first').text();
  console.log(Ukey);
  fbB.child(Ukey).remove();
  alert("successfully deleted!");
  window.location.reload();

}

//Editing Announcement
function editA(){
  document.getElementById('editABlock').style.display ='block';
  var Ukey = $(this).closest('tr').children('td:first').text();
  var fbB= firebase.database().ref('Announcements/'+Ukey);
  fbB.on('value', function(snapshot){
    var EAdata = snapshot.child('Announcement').val();
    console.log(EAdata);
    document.getElementById('Amsg').value = EAdata;
  });
  console.log(Ukey);
  document.getElementById('announcement_id').value = Ukey;
}

function editSave(){
  var editedData = $("#Amsg").val();
  var akey = $("#announcement_id").val();
  var wholeA ={
    Announcement: editedData,
    a_id: akey
}
  var updates={};
  updates['Announcements/'+ akey] = wholeA;
  window.location.reload();
  return firebase.database().ref().update(updates);

}

 function editCancel(){
  window.location.reload();
}

//Event
var fbE = firebase.database().ref('Events');

function AddNewEvent(){
    document.getElementById('newEBlock').style.display ='block';
}

var eventable = document.getElementById('eventTable');
var rowIndexE = 1;
fbE.once('value',function(snapshot){
  snapshot.forEach(function(childSnapshot){
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    var button = document.createElement("button");
    var button2 = document.createElement("button");
    button.innerHTML="Edit";
    button2.innerHTML="Delete";

    var row = eventable.insertRow(rowIndexE);
    var cellId = row.insertCell(0)
    var celleventDate = row.insertCell(1);
    var celleventActivity = row.insertCell(2);
    var cellButton= row.insertCell(3);
    var cellButton2= row.insertCell(4);
    cellId.appendChild(document.createTextNode(childKey));
    celleventDate.appendChild(document.createTextNode(childData.EventDate));
    celleventActivity.appendChild(document.createTextNode(childData.Event));
    cellButton.appendChild(button);
    cellButton2.appendChild(button2);

    button.onclick = editE;
    button2.onclick = deleteE;
    rowIndexE = rowIndexE + 1;

  });
});

function createNewEvent(){
  var eventTime=$('#EventTime').val();
  var eventActivity = $('#EventActivity').val();
  var keyA = fbE.push().key;
  var AData = {
    e_id : keyA,
    EventDate : eventTime,
    Event :eventActivity
  }
  var updates = {};
  updates['Events/'+ keyA] = AData;
  firebase.database().ref().update(updates);
  alert('Successfully Entered');
  window.location.reload();
}

function editE(){
  document.getElementById('editEBlock').style.display ='block';
  var Ukey = $(this).closest('tr').children('td:first').text();
  var fbE= firebase.database().ref('Events/'+Ukey);
  fbE.on('value', function(snapshot){
    var Doe = snapshot.child('EventDate').val();
    var Edata = snapshot.child('Event').val();
    console.log(Edata);
    console.log(Doe);
    document.getElementById('DoE').value = Doe;
    document.getElementById('Event').value = Edata;
  });
  console.log(Ukey);
  document.getElementById('Ekey').value = Ukey;

}

function deleteE(){
  var fbB= firebase.database().ref('Events');
  var Ukey = $(this).closest('tr').children('td:first').text();
  console.log(Ukey);
  fbB.child(Ukey).remove();
  alert("successfully deleted!");
  window.location.reload();

}

function editEsave(){
  var editedDOE = $("#DoE").val();
  var editedEText = $("#Event").val();
  var akey = $("#Ekey").val();
  var wholeE ={
    e_id : akey,
    EventDate : editedDOE,
    Event : editedEText
}
  var updates={};
  updates['Events/'+ akey] = wholeE;
  window.location.reload();
  return firebase.database().ref().update(updates);

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

var storageRef=firebase.storage().ref('Test/'+file.name);
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
     storageRef.getDownloadURL().then(function(url){
       console.log("Success");
       console.log(url);
       var updates = {};
       var postData={
       url : url,
       id : postKey,
       title : title
     };
     updates['WorkingSchedule/' + postKey] = postData;
     firebase.database().ref().update(updates);
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
  cellWSTitle.appendChild(document.createTextNode(childData.title));
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
fbWS.child(Ukey).remove();
alert("successfully deleted!");
window.location.reload();
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


//Working hour
function AddNewWH(){
document.getElementById('newWHBlock').style.display ='block';
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

var storageRef=firebase.storage().ref('Test/'+file2.name);
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
     storageRef.getDownloadURL().then(function(url){
       console.log("Success");
       console.log(url);
       var updates = {};
       var postData={
       url : url,
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

//Display all WH
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
  cellWHTitle.appendChild(document.createTextNode(childData.title));
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
fbWH.child(Ukey).remove();
alert("successfully deleted!");
window.location.reload();
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
