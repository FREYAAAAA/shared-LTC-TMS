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
function deleteUserAccount(i){
  var sid = document.getElementById('cellId['+i+']').innerText
  var fbACCD = firebase.database().ref('uAccount').child(sid);
  var confirmation = confirm("Undoing is not available! Please make sure you would not need this account anymore!");
  if(confirmation == true){
    fbACCD.remove();
    alert("successfully removed the account!");
  }
}

//Edit account
function editUserAccount(i){
  var sid = document.getElementById('cellId['+i+']').innerText;
  var fbACCE = var fbACCD = firebase.database().ref('uAccount').child(sid);
  
}

//Display UM table - UID, NAME, STATUS, EDIT button, DELETE button
var rowIndex=0;
var fbACC = firebase.database().ref('uAccount');
tableNewRow(fbACC)

function tableNewRow(fb){
  var table = document.getElementById('UserListBody');
  fb.once('value', function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var keyID = childSnapshot.key;
        childSnapshot.forEach(function(childSnapshot2){
          var sid = keyID;
          var email = childSnapshot.child('Email').val();
          var name = childSnapshot.child('Name').val();
          var position = childSnapshot.child('Position').val();
          var signIn = childSnapshot2.child('AuthenticationData/metadata/lastSignInTime').val();

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

          cellSID.appendChild(document.createTextNode(sid));
          cellEmail.appendChild(document.createTextNode(email));
          cellName.appendChild(document.createTextNode(name));
          cellRole.appendChild(document.createTextNode(position));
          cellStatus.appendChild(document.createTextNode(signIn));
          cellEditBut.appendChild(buttonE);
          cellDeleteBut.appendChild(buttonD);

          cellSID.setAttribute('id','cellId['+rowIndex+']');
          buttonE.setAttribute('onclick','editUserAccount('+rowIndex+')');
          buttonD.setAttribute('onclick','deleteUserAccount('+rowIndex+')');

          rowIndex = rowIndex + 1;

        });
    });

  });

}
