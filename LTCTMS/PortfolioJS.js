//Add new Portfolio
function addNewPortfolio(){
  document.getElementById('newPortfolioSeletion').style.display ='block';
}

function staffPortfolio(){
  document.getElementById('newStaffPortfolio').style.display = 'block';
  document.getElementById('newPortfolioSeletion').style.display ='none';
}

function patientPortfolio(){
  document.getElementById('newPatientPortfolio').style.display = 'block';
  document.getElementById('newPortfolioSeletion').style.display ='none';
}

function Cancel(){
  window.location.reload();
}

//Staff Portfolio Database Storing
//TODO: PLEASE DEBBUG THE FILE UPLOADING ISSUE
var Uploader = document.getElementById('Uploader2');
var btnPicture = document.getElementById('btnPicture');
var btnSubmitP = document.getElementById('btnSubmitP')

btnPicture.addEventListener('change', handleuploadfile);
//btnLicense.addEventListener('change', handleuploadfile2);
btnSubmitP.addEventListener('click', handleuploadfileSubmit);

let file = [];


function handleuploadfile(e) {
  file =[];
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
     var StaffID = document.getElementById('StaffID').value;
     var staffName = document.getElementById('staffName').value;
     var staffNID = document.getElementById('staffNID').value;
     var staffNationality = document.getElementById('staffNationality').value;
     var staffGender = document.getElementById('staffGender').value;
     var staffDOB = document.getElementById('staffDOB').value;
     var staffEmail = document.getElementById('staffEmail').value;
     var staffContact = document.getElementById('staffContact').value;
     var staffEContact = document.getElementById('staffEContact').value;
     var staffAddress = document.getElementById("staffAddress")
     var staffCV = document.getElementById('sCV').value;
     var staffPassword = document.getElementById('staffPassword').value;
     var staffPosition = document.getElementById('staffPosition').value;

     storageRef.getDownloadURL()
      .then(function(url){
       console.log("Success");
       console.log(url);
       var updates = {};
       var postData={
       pictureurl : url,
       ID : StaffID,
       Name : staffName,
       NationalID : staffNID,
       Nationality : staffNationality,
       Gender : staffGender,
       DOB : staffDOB,
       Email : staffEmail,
       Contact : staffContact,
       EContact : staffEContact,
       Address : staffAddress,
       CV : staffCV,
       Password : staffPassword,
       Position : staffPosition

     };
     updates[ staffPosition +'/'+StaffID +'/Portfolio/'] = postData;
     //updates['Portfolio/'+ StaffID] = postData;
     firebase.database().ref().update(updates);
     window.location.reload();
     });
  }
);
}

//Patient Portfolio Database Storing
var Uploader2 = document.getElementById('Uploader2');
var btnPicture2 = document.getElementById('btnPicture2');
var btnSubmitP2 = document.getElementById('btnSubmitP2')

btnPicture2.addEventListener('change', handleuploadfile2);
//btnLicense.addEventListener('change', handleuploadfile2);
btnSubmitP2.addEventListener('click', handleuploadfileSubmit2);

let file2;


function handleuploadfile2(e) {
    file2=e.target.files[0];
}


function handleuploadfileSubmit2(e) {

var storageRef=firebase.storage().ref('Patient/'+file2.name);
var uploadtask = storageRef.put(file2);

uploadtask.on('state_changed',

  function progress(snapshot){
    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    Uploader2.value = percentage;
  },

  function error(err){
    console.log("failed");
  },

  function complete(){
    console.log('Successful');
     var PatientID = document.getElementById('PatientID').value;
     var patientName = document.getElementById('patientName').value;
     var patientNID = document.getElementById('patientNID').value;
     var patientNationality = document.getElementById('patientNationality').value;
     var patientGender = document.getElementById('patientGender').value;
     var patientDOB = document.getElementById('patientDOB').value;
     var patientEmail = document.getElementById('patientEmail').value;
     var patientContact = document.getElementById('patientContact').value;
     var patientEContact = document.getElementById('patientEContact').value;
     var patientAddress = document.getElementById('patientAddress').value
     var AppointmentRecord = document.getElementById('AppointmentRecord').value;
     var patientPassword = document.getElementById('patientPassword').value;
     var MedicalRecord = document.getElementById('MedicalRecord').value;
     var BriefDescription = document.getElementById('BriefDescription').value;
     var patientRoomNo = document.getElementById('patientRoomNo').value;
     //var CNAName = document.getElementById('CNAName').value;
     //var CNAID = document.getElementById('CNAID').value;


     storageRef.getDownloadURL().then(function(url){
       console.log("Success");
       console.log(url);
       var updates = {};
       var postData={
       ID : PatientID,
       pictureurl : url,
       Name : patientName,
       NationalID : patientNID,
       Nationality : patientNationality,
       Gender : patientGender,
       DOB : patientDOB,
       Email : patientEmail,
       Contact : patientContact,
       EContact : patientEContact,
       AppointmentRecord: AppointmentRecord,
       Password : patientPassword,
       MedicalRecord : MedicalRecord,
       BriefDescription : BriefDescription,
       patientRoomNo : patientRoomNo,
       //CNAName : CNAName,
       //CNAID : CNAID,
       Address : patientAddress,
       Position : 'Patient'
     };
     updates['Patient/'+PatientID +'/Portfolio'] = postData;
     //updates['Portfolio/'+ PatientID] = postData;
     firebase.database().ref().update(updates);
     window.location.reload();
     });
  }
);
}

//Brief Portfolio Table
 var fbCNA = firebase.database().ref("CNA/");
 var fbPAT = firebase.database().ref("Patient/");
 var fbDIR = firebase.database().ref("DIR/");
 var fbCNO = firebase.database().ref("CNO/");
var briefPortfolio = document.getElementById('briefPortfolio');
var rowIndexBP = 1;
portfolio_Table(fbCNO);
portfolio_Table(fbDIR);
portfolio_Table(fbCNA);
portfolio_Table(fbPAT);
function portfolio_Table(fb){
    fb.once('value',function(snapshot){
      snapshot.forEach(function(childSnapshot){
          childSnapshot.forEach(function(childSnapshot1){
              if(childSnapshot1.key == "Portfolio"){
                  var row = briefPortfolio.insertRow(rowIndexBP);
                  var cellId = row.insertCell(0)
                  var cellName = row.insertCell(1);
                  var cellNationalID = row.insertCell(2);
                  var cellNationality = row.insertCell(3);
                  var cellGender= row.insertCell(4);
                  var cellContactno= row.insertCell(5);
                  var cellEmail= row.insertCell(6);
                  var cellRole= row.insertCell(7);
                  var cellButton= row.insertCell(8);
                  var button = document.createElement("button");
                  cellId.appendChild(document.createTextNode(childSnapshot.key));
                  cellButton.appendChild(button);
                  childSnapshot1.forEach(function(childSnapshot2){
                      var childKey = childSnapshot2.key;
                      var childData = childSnapshot2.val();
                      button.innerHTML="View";
                      if(childKey == "Name"){
                          cellName.appendChild(document.createTextNode(childData));
                      }
                      if(childKey == "NationalID"){
                          cellNationalID.appendChild(document.createTextNode(childData));
                      }
                      if(childKey == "Nationality"){
                          cellNationality.appendChild(document.createTextNode(childData));
                      }
                      if(childKey =="Gender"){
                          cellGender.appendChild(document.createTextNode(childData));
                      }
                      if(childKey == "EContact"){
                          cellContactno.appendChild(document.createTextNode(childData));
                      }
                      if(childKey == "Email"){
                          cellEmail.appendChild(document.createTextNode(childData));
                      }
                      if(childKey == "Position"){
                          cellRole.appendChild(document.createTextNode(childData));
                      }
                      button.onclick = viewP;
                  });
                  rowIndexBP = rowIndexBP + 1;

              }
          });
      });
    });
}



//view portfolio
function viewP(){
  var table = document.getElementById("briefPortfolio");
  var td = $(this).closest('tr').children('td:nth-last-child(2)').text();
  console.log(td);

  if(td == 'Patient'){
    document.getElementById('viewPatientPortfolio').style.display ='block';
    var id = $(this).closest('tr').children('td:first').text();
    var fbV = firebase.database().ref('Patient/'+ id+"/Portfolio");
    fbV.on('value', function(snapshot){
      var photo = snapshot.child('pictureurl').val();
      var id = snapshot.child('ID').val();
      var Name = snapshot.child('Name').val();
      var NationalID = snapshot.child('NationalID').val();
      var Nationality = snapshot.child('Nationality').val();
      var Gender = snapshot.child('Gender').val();
      var DOB = snapshot.child('DOB').val();
      var Email = snapshot.child('Email').val();
      var Password = snapshot.child('Password').val();
      var Contact = snapshot.child('Contact').val();
      var EContact = snapshot.child('EContact').val();
      var AddressV = snapshot.child('Adress').val();
      var AR = snapshot.child('AppointmentRecord').val();
      var MR = snapshot.child('MedicalRecord').val();
      var BD = snapshot.child('BriefDescription').val();
      var CNAname = snapshot.child('CNAName').val();
      var CNAID= snapshot.child('CNAID').val();
      var roomno = snapshot.child('patientRoomNo').val();

      //TODO:image input and resize
      document.getElementById('img1').src = photo;
      document.getElementById('PID').innerHTML= id;
      document.getElementById('Name').innerHTML= Name;
      document.getElementById('NID').innerHTML= NationalID;
      document.getElementById('Gender').innerHTML= Gender;
      document.getElementById('Room').innerHTML= roomno;
      document.getElementById('Password').innerHTML= Password;
     // document.getElementById('CNAnameV').innerHTML= CNAname;
      //document.getElementById('CNAIDV').innerHTML= CNAID;
      document.getElementById('Nationality').innerHTML= Nationality ;
      document.getElementById('Email').innerHTML= Email;
      document.getElementById('DOB').innerHTML= DOB;
      document.getElementById('Contactno').innerHTML= Contact;
      document.getElementById('EContactnoV').innerHTML= EContact;
      document.getElementById('AddressV').innerHTML= AddressV ;
      document.getElementById('ARV').innerHTML= AR;
      document.getElementById('MRV').innerHTML= MR;
      document.getElementById('BDV').innerHTML= BD;
    });
  }else{
    console.log('123');
    document.getElementById('viewStaffPortfolio').style.display ='block';
    var id = $(this).closest('tr').children('td:first').text();
    console.log(id);
    if(td == "CNO"){
        var fbV = firebase.database().ref('CNO/'+ id+"/Portfolio");
    }
    if(td == "CNA"){
        var fbV = firebase.database().ref('CNA/'+ id+"/Portfolio");
    }
    if(td =="DIR"){
        var fbV = firebase.database().ref('DIR/'+ id+"/Portfolio");
    }
    fbV.on('value', function(snapshot){
      var photo = snapshot.child('pictureurl').val();
      var id = snapshot.child('ID').val();
      var Name = snapshot.child('Name').val();
      var NationalID = snapshot.child('NationalID').val();
      var Nationality = snapshot.child('Nationality').val();
      var Gender = snapshot.child('Gender').val();
      var Password = snapshot.child('Password').val();
      console.log(Password);
      var DOB = snapshot.child('DOB').val();
      var Email = snapshot.child('Email').val();
      var Contact = snapshot.child('Contact').val();
      var EContact = snapshot.child('EContact').val();
      var AddressV = snapshot.child('Address').val();
      var CV = snapshot.child('CV').val();
      var position = snapshot.child('Position').val();

      //TODO:pictureing display
      document.getElementById('imgS').src = photo;
      document.getElementById('SID').innerHTML= id;
      document.getElementById('sName').innerHTML= Name;
      document.getElementById('sNID').innerHTML= NationalID;
      document.getElementById('sGender').innerHTML= Gender;
      document.getElementById("Passwo").innerHTML= Password;
      document.getElementById('sNationality').innerHTML= Nationality ;
      document.getElementById('sEmail').innerHTML= Email;
      document.getElementById('sDOB').innerHTML= DOB;
      document.getElementById('sContact').innerHTML= Contact;
      document.getElementById('sEContact').innerHTML= EContact;
      document.getElementById('sAddress').innerHTML= AddressV ;
      document.getElementById('sCV').innerHTML= CV;
      document.getElementById('sPosition').innerHTML = position;

    });
  }
}

//edit Patient Portfolio
function editPP(){
  document.getElementById('editPatientPortfolio').style.display ='block';
  var id = document.getElementById('PID').innerText;

  console.log(id);
  document.getElementById('viewPatientPortfolio').style.display = 'none';

  var fbV = firebase.database().ref('Patient/'+ id+"/Portfolio");
  fbV.on('value', function(snapshot){
    var photo = snapshot.child('pictureurl').val();
    var id = snapshot.child('ID').val();
    var Name = snapshot.child('Name').val();
    var NationalID = snapshot.child('NationalID').val();
    var Nationality = snapshot.child('Nationality').val();
    var Gender = snapshot.child('Gender').val();
    var DOB = snapshot.child('DOB').val();
    var Email = snapshot.child('Email').val();
    var Contact = snapshot.child('Contact').val();
    var EContact = snapshot.child('EContact').val();
    var AddressV = snapshot.child('Address').val();
    var pass = snapshot.child('Password').val();
    var roomno = snapshot.child('patientRoomNo').val();
    var CNAname = snapshot.child('CNAName').val();
    var AR = snapshot.child('AppointmentRecord').val();
    var MR = snapshot.child('MedicalRecord').val();
    var BD = snapshot.child('BriefDescription').val();


    console.log(photo);
    //TODO: picture can't be edit?
    document.getElementById('PictureP').innerHTML = photo;
    document.getElementById('PatientID2').value= id;
    document.getElementById('patientName2').value= Name;
    document.getElementById('patientNID2').value= NationalID;
    document.getElementById('patientGender2').value= Gender;
    document.getElementById('patientRoomNo2').value= roomno;
    document.getElementById('CNAName2').value= CNAname;
    document.getElementById('CNAID2').value= CNAID;
    document.getElementById('patientNationality2').value= Nationality ;
    document.getElementById('patientEmail2').value= Email;
    document.getElementById('patientDOB2').value= DOB;
    document.getElementById('patientContact2').value= Contact;
    document.getElementById('patientEContact2').value= EContact;
    document.getElementById('patientAddress2').value= AddressV ;
    document.getElementById('AppointmentRecord2').value= AR;
    document.getElementById('MedicalRecord2').value= MR;
    document.getElementById('BriefDescription2').value= BD;
    document.getElementById('patientPassword2').value= pass;
  });
}
function editSP(){
  document.getElementById('editStaffPortfolio').style.display ='block';
  var id = document.getElementById('SID').innerText;
  var position = document.getElementById('sPosition').innerText;

  console.log(id);
  document.getElementById('viewStaffPortfolio').style.display = 'none';
console.log(position);
  var fbV = firebase.database().ref( position+"/"+id+"/Portfolio");
  fbV.on('value', function(snapshot){

    var photo = snapshot.child('pictureurl').val();
    var id = snapshot.child('ID').val();
    var Name = snapshot.child('Name').val();
    var NationalID = snapshot.child('NationalID').val();
    var Nationality = snapshot.child('Nationality').val();
    var Gender = snapshot.child('Gender').val();
    var DOB = snapshot.child('DOB').val();
    var Email = snapshot.child('Email').val();
    var Contact = snapshot.child('Contact').val();
    var EContact = snapshot.child('EContact').val();
    var AddressV = snapshot.child('Address').val();
    var CV = snapshot.child('CV').val();
    var pass = snapshot.child('Password').val();
    var Position = snapshot.child('Position').val();
    console.log(photo);
    //TODO: picture can't be edit?
    document.getElementById('PictureS').innerHTML = photo;
    document.getElementById('StaffID2').value= id;
    document.getElementById('staffName2').value= Name;
    document.getElementById('staffNID2').value= NationalID;
    document.getElementById('staffGender2').value= Gender;
    document.getElementById('staffNationality2').value= Nationality ;
    document.getElementById('staffEmail2').value= Email;
    document.getElementById('staffDOB2').value= DOB;
    document.getElementById('staffContact2').value= Contact;
    document.getElementById('staffEContact2').value= EContact;
    document.getElementById('staffAddress2').value= AddressV ;
    document.getElementById('staffPassword2').value= pass;
    document.getElementById('staffCV2').value= CV;
    document.getElementById('staffPosition2').value = Position;
  });

}

//Updating patient portfolio
function submitPP(){
  var photo = document.getElementById('PictureP').innerText;
  var id = document.getElementById('PatientID2').value;
  var Name = document.getElementById('patientName2').value;
  var NID = document.getElementById('patientNID2').value;
  var Gender = document.getElementById('patientGender2').value;
  var Room = document.getElementById('patientRoomNo2').value;
  var CNAname = document.getElementById('CNAName2').value;
  var CNAID = document.getElementById('CNAID2').value;
  var Nationality = document.getElementById('patientNationality2').value;
  var Email = document.getElementById('patientEmail2').value;
  var DOB = document.getElementById('patientDOB2').value;
  var Contact = document.getElementById('patientContact2').value;
  var EContact = document.getElementById('patientEContact2').value;
  var Address = document.getElementById('patientAddress2').value;
  var AR = document.getElementById('AppointmentRecord2').value;
  var MR = document.getElementById('MedicalRecord2').value;
  var BD = document.getElementById('BriefDescription2').value;
  var pass = document.getElementById('patientPassword2').value;
  console.log(id);
  var updates = {};
  var postData={
  ID : id,
  pictureurl : photo,
  Name : Name,
  NationalID : NID,
  Nationality : Nationality,
  Gender : Gender,
  DOB : DOB,
  Email :Email,
  Contact : Contact,
  EContact : EContact,
  AppointmentRecord: AR,
  Password : pass,
  MedicalRecord : MR,
  BriefDescription : BD,
  patientRoomNo : Room,
  CNAName : CNAname,
  CNAID : CNAID,
  Adress : Address,
  Position : 'Patient'
  };
  updates['Patient/'+ id+'/Portfolio'] = postData;
 // updates['Portfolio/'+ id] = postData;
  firebase.database().ref().update(updates);
  window.location.reload();

}

function submitSP(){
  var pic = document.getElementById('PictureS').innerHTML;
  var id = document.getElementById('StaffID2').value;
  var Name = document.getElementById('staffName2').value;
  var NID = document.getElementById('staffNID2').value;
  var Gender = document.getElementById('staffGender2').value;
  var Nationality = document.getElementById('staffNationality2').value;
  var Email = document.getElementById('staffEmail2').value;
  var DOB = document.getElementById('staffDOB2').value;
  var Contact = document.getElementById('staffContact2').value;
  var Econtact = document.getElementById('staffEContact2').value;
  var Address = document.getElementById('staffAddress2').value;
  var pass = document.getElementById('staffPassword2').value;
  var CV = document.getElementById('staffCV2').value;
  var position = document.getElementById('staffPosition2').value;

  var updates = {};
  var postData={
  pictureurl : pic,
  ID : id,
  Name : Name,
  NationalID : NID,
  Nationality : Nationality,
  Gender : Gender,
  DOB : DOB,
  Email : Email,
  Contact : Contact,
  EContact : Econtact,
  Address : Address,
  CV : CV,
  Password : pass,
  Position : position

  };
  updates[ position +'/'+ id +'/Portfolio/'] = postData;
  //updates['Portfolio/'+ id] = postData;
  firebase.database().ref().update(updates);
  window.location.reload();
}

//Patient Portfolio deletion
function deletePP(){
  var fbPP = firebase.database().ref('Patient');
  var id = document.getElementById('PID').innerText;
  fbPP.child(id).remove();
  alert("successfully deleted!");
  window.location.reload();
}

function deleteSP(){
 var position = document.getElementById('sPosition').innerText;
 var id = document.getElementById('SID').innerText;
var fbSP = firebase.database().ref(position);
fbSP.child(id).remove();

 alert("successfully deleted!");
 window.location.reload();
}



//filter staff portfolio function
function filterStaffP(){
  var table = document.getElementById("briefPortfolio");
  var tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[7];//row i cell number 7

    if(td){
    if (td.innerText == 'CNO' || td.innerText == 'Director'|| td.innerText == 'CNA') {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
//Filter patient portfolio function
function filterPatientP(){
  var table = document.getElementById("briefPortfolio");
  var tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[7];//row i cell number 7
    //alert(td.innerText);
    if(td){
    if (td.innerText == 'Patient') {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function filterAllP(){
  var table = document.getElementById("briefPortfolio");
  var tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[7];//row i cell number 7
      tr[i].style.display = "";

    }
}

//Keyword search
$(document).ready(function(){
  $("#searchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#briefPortfolio tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Filter with Nationality
function filterNationality(){
  var table = document.getElementById("briefPortfolio");
  var filterN = document.getElementById("filterNationality").value;
  var tr = table.getElementsByTagName("tr");
  if("all" == filterN){
      for (var i = 0; i < tr.length; i++) {
          tr[i].style.display = "";
        }
  }
  else{
      for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[3];//row i cell number 3
        if(td){
           if (td.innerText == filterN) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
  }

}

//Filter with Gender
function filterGender(){
  var table = document.getElementById("briefPortfolio");
  var filterG = document.getElementById("filterGender").value;
  var tr = table.getElementsByTagName("tr");
  if("all" == filterG){
      for (var i = 0; i < tr.length; i++) {
          tr[i].style.display = "";
        }
  }
  else{
      for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[4];//row i cell number 4
        if(td){
          console.log(td.innerText);
        if (td.innerText == filterG) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
  }
}

//TODO:Filter with Room number
function filterRoomNo() {
    var table = document.getElementById("briefPortfolio");
    var selectedroom = document.getElementById('filterRoomNo').value;
    var fbPR = firebase.database().ref('Patient/');
    var tr = table.getElementsByTagName("tr");

    fbPR.once('value',function(snapshot){
      snapshot.forEach(function(childSnapshot){
        var id = childSnapshot.key;
        var childData = childSnapshot.val();
        var room = childData.patientRoomNo;
        console.log(childData.patientRoomNo);
        if (room == selectedroom){
          for (var i = 0; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName("td")[0];//row i cell number 0
            if(td){
            if (td.innerText == id) {
                tr[i].style.display = "";
                console.log(id);
              } else {
                tr[i].style.display = "none";
              }
            }
          }
        }
        if("all" == selectedroom){
            for (var i = 0; i < tr.length; i++) {
              var td = tr[i].getElementsByTagName("td")[0];//row i cell number 0
              if(td){
              if (td.innerText == id) {
                  tr[i].style.display = "";
                  console.log(id);
                } else {
                  tr[i].style.display = "none";
                }
              }
            }
        }




      });
    });
}
