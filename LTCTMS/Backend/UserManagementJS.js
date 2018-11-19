//Create account
function newAccount(){
  var name = document.getElementById('Name').value;
  var sid = document.getElementById('SID').value;
  var email = document.getElementById('Email').value;
  var pass = document.getElementById('password').value;
  var position = document.getElementById('position').value;

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
  var sid = document.getElementById('cellId['+i+']').innerHTML;
  var fbACCD = firebase.database().ref('uAccount').child(sid);
  var confirmation = confirm("Undoing is not available! Please make sure you would not need this account anymore!");
  if(confirmation == true){
    fbACCD.remove();
    alert("successfully removed the account!");
  }
}

//Edit account
function editUserAccount(i){
  var sid = document.getElementById('cellId['+i+']').innerHTML;
  var fbACCE= firebase.database().ref('uAccount').child(sid);
  fbACCE.on('value', function(snapshot){
    document.getElementById('editAccountPop').style.display = 'block';
    var childData = snapshot.val();
    var name = childData.Name;
    var email = childData.Email;
    var position = childData.Position;
    var pass = childData.password;

    document.getElementById('SIDE').value = sid;
    document.getElementById('NameE').value = name;
    document.getElementById('EmailE').value = email;
    document.getElementById('positionE').value = position;
    document.getElementById('passE').value = pass;

  });


}
//Submit edited data
function editedUserAccount(){
  var sid = document.getElementById('SIDE').value;
  var name= document.getElementById('NameE').value;
  var email= document.getElementById('EmailE').value;
  var position= document.getElementById('positionE').value;
  var pass= document.getElementById('passE').value;
  var data={
    Name : name,
    Email: email,
    Position : position,
    StaffID : sid,
    Password:pass
  }
  updates={}
  updates['uAccount/'+sid]=data;
  firebase.database().ref().update(updates);
}

//Display UM table - UID, NAME, STATUS, EDIT button, DELETE button
var rowIndex=0;
var fbACC = firebase.database().ref('uAccount');

function tableNewRow(fb){
  var tablelist =document.getElementById('UserListBody');
  console.log(tablelist);
  fbACC.once('value', function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var keyID = childSnapshot.key;
        console.log('=====');
          var sid = keyID;
          var email = childSnapshot.child('Email').val();
          var name = childSnapshot.child('Name').val();
          var position = childSnapshot.child('Position').val();
          //Requried For Later Version
          var signIn = childSnapshot.child('AuthenticationData/metadata/lastSignInTime').val();

          var row = tablelist.insertRow(rowIndex);
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
          buttonE.innerHTML ='Edit';
          buttonD.innerHTML ='Delete';
          buttonE.setAttribute('onclick','editUserAccount('+rowIndex+')');
          buttonD.setAttribute('onclick','deleteUserAccount('+rowIndex+')');

          rowIndex = rowIndex + 1;

    });

  });

}

function showusermanagement(){
  document.getElementById("data1").style.display = "block";
  document.getElementById("data2").style.display = "none";
  document.getElementById("data3").style.display = "none";
  document.getElementById("data4").style.opacity = "none";
  document.getElementById("User Management").style.opacity = "1";
  document.getElementById("LoginTime").style.opacity = ".8";
  document.getElementById("LogoutTime").style.opacity = ".8";
  document.getElementById("ChangePassword").style.opacity = ".8";
}

function showlogintime(){
  document.getElementById("data1").style.display = "none";
  document.getElementById("data2").style.display = "block";
  document.getElementById("data3").style.display = "none";
  document.getElementById("data4").style.opacity = "none";
  document.getElementById("User Management").style.opacity = ".8";
  document.getElementById("LoginTime").style.opacity = "1";
  document.getElementById("LogoutTime").style.opacity = ".8";
  document.getElementById("ChangePassword").style.opacity = ".8";
}

function showlogouttime(){
  document.getElementById("data1").style.display = "none";
  document.getElementById("data2").style.display = "none";
  document.getElementById("data3").style.display = "block";
  document.getElementById("data4").style.opacity = "none";
  document.getElementById("User Management").style.opacity = ".8";
  document.getElementById("LoginTime").style.opacity = ".8";
  document.getElementById("LogoutTime").style.opacity = "1";
  document.getElementById("ChangePassword").style.opacity = ".8";
}

function showchangepassword(){
  document.getElementById("data1").style.display = "none";
  document.getElementById("data2").style.display = "none";
  document.getElementById("data3").style.display = "none";
  document.getElementById("data4").style.opacity = "block";
  document.getElementById("User Management").style.opacity = ".8";
  document.getElementById("LoginTime").style.opacity = ".8";
  document.getElementById("LogoutTime").style.opacity = ".8";
  document.getElementById("ChangePassword").style.opacity = "1";
}


function openmenu(){
  if(document.getElementById("menu").style.display== "block"){
    document.getElementById("menu").style.display = "none";
    document.getElementById("openmenu").style.opacity = "1";
  }
  else{
  document.getElementById("menu").style.display = "block";
  document.getElementById("openmenu").style.opacity = ".6";
}
}

var fbStatus = firebase.database().ref('AccountStatus/Browser');
var rowIndex2 = 0;
function tableBrowserLogging(fb){
  var tablelist =document.getElementById('browseraccountbody');
  fb.once("value",function(snapshot){
    snapshot.forEach(function(childSnapshot){
      var id = childSnapshot.key;
      var latestLogin = childSnapshot.child('LatestLogin').val();
      var latestLogout = childSnapshot.child('LatestLogout').val();

      var row = tablelist.insertRow(rowIndex2);
      row.setAttribute("class","table-list-row");
      var cellID = row.insertCell(0);
      var cellLatestLogin = row.insertCell(1);
      var cellLatestLogout = row.insertCell(2);
      var cellViewBut = row.insertCell(3);

      var buttonV = document.createElement('button');


      cellID.appendChild(document.createTextNode(id));
      cellLatestLogin.appendChild(document.createTextNode(latestLogin));
      cellLatestLogout.appendChild(document.createTextNode(latestLogout));
      cellViewBut.appendChild(buttonV);

      cellID.setAttribute('id','cellId2['+rowIndex2+']');
      buttonV.innerHTML ='View';
      buttonV.setAttribute('onclick','historyBrowserLogging('+rowIndex2+')');

      rowIndex2 = rowIndex2 + 1;

    });
  });

}

function closeHistory(){
  document.getElementById('browsaccountname').style.display='none';
  document.getElementById('viewbacchistory').style.display='none';
  document.getElementById('appaccountname').style.display='none';
  document.getElementById('viewapphistory').style.display='none';

}



function historyBrowserLogging(n){
  var hisrow = 0;
  var hisrowout = 0;
  document.getElementById('browsaccountname').style.display='block';
  document.getElementById('viewbacchistory').style.display='block';
  document.getElementById('viewbrowserloginbody').innerHTML='';
  document.getElementById('viewbrowserlogoutbody').innerHTML='';
  document.getElementById('browsername').innerHTML = document.getElementById('cellId2['+n+']').innerHTML;
  var id = document.getElementById('browsername').innerHTML ;
  var fb = firebase.database().ref('AccountStatus/Browser/'+id);
  fb.once('value',function(snapshot){
    snapshot.forEach(function(logShot){
          if(logShot.key == 'LoginHistory'){
            logShot.forEach(function(loginShot){
              var date = loginShot.key;
              loginShot.forEach(function(loginShot2){
                var time = loginShot2.key;
                var dateandtime = date + '-' + time;
                var tablelogin = document.getElementById('viewbrowserloginbody');
                //table for login
                var rowLogin = tablelogin.insertRow(hisrow);
                var cellHistory = rowLogin.insertCell(0);
                cellHistory.appendChild(document.createTextNode(dateandtime));
                hisrow = hisrow + 1;
              });
            });
          }
          if(logShot.key == 'LogoutHistory'){
            logShot.forEach(function(logoutShot){
              var date = logoutShot.key;
              logoutShot.forEach(function(logoutShot2){
                var time = logoutShot2.key;
                var dateandtime2 = date + '-' + time;
                var tablelogout = document.getElementById('viewbrowserlogoutbody');
                //table in
                var rowLogout = tablelogout.insertRow(hisrowout);
                var cellHistory2 = rowLogout.insertCell(0);
                cellHistory2.appendChild(document.createTextNode(dateandtime2));
                hisrowout = hisrowout + 1;
              });
            });
          }
    });

  });

}

var fbStatus2 = firebase.database().ref('AccountStatus/App');
var rowIndex3 = 0;
function tableAppLogging(fb){
  var tablelist =document.getElementById('appaccountbody');
  fb.once("value",function(snapshot){
    snapshot.forEach(function(childSnapshot){
      var id = childSnapshot.key;
      var latestLogin = childSnapshot.child('LatestLogin').val();
      var latestLogout = childSnapshot.child('LatestLogout').val();

      var row = tablelist.insertRow(rowIndex3);
      row.setAttribute("class","table-list-row");
      var cellID = row.insertCell(0);
      var cellLatestLogin = row.insertCell(1);
      var cellLatestLogout = row.insertCell(2);
      var cellViewBut = row.insertCell(3);

      var buttonV = document.createElement('button');


      cellID.appendChild(document.createTextNode(id));
      cellLatestLogin.appendChild(document.createTextNode(latestLogin));
      cellLatestLogout.appendChild(document.createTextNode(latestLogout));
      cellViewBut.appendChild(buttonV);

      cellID.setAttribute('id','cellIdApp['+rowIndex3+']');
      buttonV.innerHTML ='View';
      buttonV.setAttribute('onclick','historyAppLogging('+rowIndex3+')');

      rowIndex3 = rowIndex3 + 1;

    });
  });

}

function historyAppLogging(n){
  var rowin = 0;
  var rowout = 0;
  document.getElementById('appaccountname').style.display='block';
  document.getElementById('viewapphistory').style.display='block';
  document.getElementById('viewapploginbody').innerHTML='';
  document.getElementById('viewapplogoutbody').innerHTML='';
  document.getElementById('appname').innerHTML = document.getElementById('cellIdApp['+n+']').innerHTML;
  var id = document.getElementById('appname').innerHTML ;
  var fb = firebase.database().ref('AccountStatus/App/'+id);
  fb.once('value',function(snapshot){
    snapshot.forEach(function(logShot){
          if(logShot.key == 'LoginHistory'){
            logShot.forEach(function(loginShot){
              var date = loginShot.key;
              loginShot.forEach(function(loginShot2){
                var time = loginShot2.key;
                var dateandtime = date + '-' + time;
                var tablelogin = document.getElementById('viewapploginbody');
                //table for login
                var rowLogin = tablelogin.insertRow(rowin);
                var cellHistory = rowLogin.insertCell(0);
                cellHistory.appendChild(document.createTextNode(dateandtime));
                rowin = rowin + 1;
              });
            });
          }
          if(logShot.key == 'LogoutHistory'){
            logShot.forEach(function(logoutShot){
              var date = logoutShot.key;
              logoutShot.forEach(function(logoutShot2){
                var time = logoutShot2.key;
                var dateandtime2 = date + '-' + time;
                var tablelogout = document.getElementById('viewapplogoutbody');
                //table in
                var rowLogout = tablelogout.insertRow(rowout);
                var cellHistory2 = rowLogout.insertCell(0);
                cellHistory2.appendChild(document.createTextNode(dateandtime2));
                rowout = rowout + 1;
              });
            });
          }
    });

  });

}
