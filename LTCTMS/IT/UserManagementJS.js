//Create account
function newAccount(){
  var name = document.getElementById('Name').value;
  var sid = document.getElementById('SID').value;
  var email = document.getElementById('Email').value;
  var pass = document.getElementById('password').value;
  var position = document.getElementById('position').value;
  //var fb = firebase.database().ref(position+'/'+sid).child('Porfolio');
  //fb.on("value", function(snapshot){
  //  snapshot.val();
  //});
  var data = {
    Name : name,
    Email: email,
    Password : pass,
    Position : position,
    StaffID : sid
  }
  var updates={}
  updates['uAccount/'+ sid]=data;
  firebase.database().ref().update(updates);
}
//Delete account

//Update account

//Display UM table - UID, NAME, STATUS, EDIT button
var rowIndex=0;
var fbACC = firebase.database().ref('uAccount');
tableNewRow(fbACC)

function tableNewRow(fb){
  var table = document.getElementById('UserListBody');
  fb.once('value', function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var keyID = childSnapshot.key;
        childSnapshot.forEach(function(childSnapshot2){
          var signIn =
        });
    });


    var row = table.insertRow(rowIndex);
    row.setAttribute("class","table-list-row");
    var cellSID = row.insertCell(0);
    var cellEmail = row.insertCell(1);
    var cellName = row.insertCell(2);
    var cellRole = row.insertCell(3);
    var cellStatus = row.insertCell(4);
    var cellEditBut = row.insertCell(5);
    var cellDeleteBut = row.insertCell(6);

    var buttonE = document.createElement('button');
    var buttonD = document.createElement('button');

    cellSID.appendChild(document.createTextNode());
    cellEmail.appendChild(document.createTextNode());
    cellName.appendChild(document.createTextNode());
    cellRole.appendChild(document.createTextNode());
    cellStatus.appendChild(document.createTextNode());
    cellEditBut.appendChild(buttonE);
    cellDeleteBut.appendChild(buttonD);

    rowIndex = rowIndex + 1;
  });

}
