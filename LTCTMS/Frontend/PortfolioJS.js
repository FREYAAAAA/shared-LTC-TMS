
//Add new Portfolio
function addNewPortfolio(){
  document.getElementById('newPortfolioSeletion').style.display ='block';
  document.getElementById('portfoliofilter').style.display ='none';
  document.getElementById('form').style.display ='none';

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
var staffCV = document.getElementById('staffCV');
var staffLicense = document.getElementById('staffLicense');
var btnSubmitP = document.getElementById('btnSubmitP')

btnPicture.addEventListener('change', handleuploadfile1);
staffLicense.addEventListener('change', handleuploadfile5);
console.log(staffLicense);
staffCV.addEventListener('change', handleuploadfile3);
console.log(staffCV);

//btnLicense.addEventListener('change', handleuploadfile2);
btnSubmitP.addEventListener('click', handleuploadfileSubmit);
let file1 = [];
let file4 = [];
let file3 = [];

function handleuploadfile1(e) {
     file1=e.target.files[0];
     console.log(file1.name);

}
function handleuploadfile5(e) {
     file4=e.target.files[0];
     console.log(file4.name);
}
function handleuploadfile3(e) {
       file3=e.target.files[0];
       console.log(file3.name);
}


function handleuploadfileSubmit(e) {
    firebase.storage().ref('Staff/').child(file1.name).put(file1);
    firebase.storage().ref('Staff/').child(file4.name).put(file4);
    firebase.storage().ref('Staff/').child(file3.name).put(file3);
     var storageRef1 = firebase.storage().ref('Staff/'+file1.name)
     var storageRef3 = firebase.storage().ref('Staff/'+file3.name)
    var storageRef4 = firebase.storage().ref('Staff/'+file4.name)
     //  var storageRef = firebase.storage().ref('Sponsor/'+name+".png")


    var uploadtask = storageRef1.put(file1);


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
     var staffAddress = document.getElementById("staffAddress").value;
     var staffPassword = document.getElementById('staffPassword').value;
     var staffPosition = document.getElementById('staffPosition').value;
     var staffInitialDate = document.getElementById('staffInitialDate').value;
     var staffEName = document.getElementById('staffEName').value;
     var staffERelationship = document.getElementById('staffERelationship').value;
     var staffbriefdescription = document.getElementById('staffbriefdescription').value;


     //var x =storageRef1.getDownloadURL();
     //console.log('testing function:'+x);
     storageRef1.getDownloadURL()
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
       Password : staffPassword,
       Position : staffPosition,
       InitialDate : staffInitialDate,
       EName : staffEName,
       ERelationship : staffERelationship,
       BriefDescription : staffbriefdescription,
       picFilename: file1.name,
       cvFilename: file3.name,
       licenseFilename: file4.name

     };
     updates[ staffPosition +'/'+StaffID +'/Portfolio/'] = postData;
     //updates['Portfolio/'+ StaffID] = postData;
    firebase.database().ref().update(updates);
      });
      storageRef3.getDownloadURL()
       .then(function(url3){
           console.log(url3);
           console.log(staffPosition+"/"+StaffID+"/Portfolio"+"/CV");
           firebase.database().ref(staffPosition+"/"+StaffID+"/Portfolio"+"/CV/").set(url3);
       });
       storageRef4.getDownloadURL()
         .then(function(url4){
           console.log(url4);
             firebase.database().ref(staffPosition+"/"+StaffID+"/Portfolio"+"/License/").set(url4);
            // location.reload();

         });
         const promise = firebase.auth().createUserWithEmailAndPassword(staffEmail,staffPassword).then(
           (user)=>{
             if(user){
               user.updateProfile({
                 displayName:staffName,
                 photoURL: storageRef1.getDownloadURL(),
                 workID: StaffID
               })
             }
             });
         promise.catch(e=> console.log(e.message));
  });

}

//Patient Portfolio Database Storing
var Uploader2 = document.getElementById('Uploader2');
var btnPicture2 = document.getElementById('btnPicture2');
var btnSubmitP2 = document.getElementById('btnSubmitP2')

btnPicture2.addEventListener('change', handleuploadfile6);
//btnLicense.addEventListener('change', handleuploadfile2);
btnSubmitP2.addEventListener('click', handleuploadfileSubmit6);

let file6 = [];


function handleuploadfile6(e) {
    file6=e.target.files[0];
     console.log(file6.name);
}


function handleuploadfileSubmit6(e) {
firebase.storage().ref('Patient/').child(file6.name).put(file6);
var storageRef6=firebase.storage().ref('Patient/'+file6.name);
console.log(file6);
var uploadtask = storageRef6.put(file6);

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
     var patientAdmissionDate = document.getElementById('patientAdmissionDate').value;
     var patientEName = document.getElementById('patientEName').value;
     var patientERelationship = document.getElementById('patientERelationship').value;
     var patientAdmissionReason = document.getElementById('patientAdmissionReason').value;


     storageRef6.getDownloadURL()
     .then(function(url){

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
       AdmissionDate : patientAdmissionDate,
       EName : patientEName,
       ERelationship : patientERelationship,
       AdmissionReason : patientAdmissionReason,
       Address : patientAddress,
       Position : 'Patient',
       picFilename: file6.name
     };


     updates['Patient/'+PatientID +'/Portfolio'] = postData;

     firebase.database().ref().update(updates);
     firebase.database().ref('Room').child(patientRoomNo+'/'+PatientID).set(patientName);
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
var arr = [];
var arr1 = [];
var arr2 = [];
var index = 0;
var i = 0;
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
                  console.log(briefPortfolio);
                  row.setAttribute("class","table-list-row");
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
                  //row.setAttribute("data-idroom",childSnapshot.key);
                  cellButton.appendChild(button);
                  childSnapshot1.forEach(function(childSnapshot2){
                      var childKey = childSnapshot2.key;
                      var childData = childSnapshot2.val();
                      button.innerHTML="View";
                      if(childKey == "patientRoomNo"){

                        arr.push(childData); // add the childkey into array, push is add
                         console.log(arr[i]); // to show the key on the console
                         var y = document.getElementById("filterRoomNo");
                         var option = document.createElement("option");
                         var x = 0;
                         for(var c = 0; c < i; c++){
                           if(arr[c] == arr[i]){
                             x = 1;
                             console.log('ttt');
                             break;
                           }
                         }
                         if(x==0){
                           option.text= arr[c];
                            y.add(option);
                            console.log(i);
                         }
                         i=i+1;

                    }
                      if(childKey == "Name"){
                          cellName.appendChild(document.createTextNode(childData));
                          console.log(childData);
                      }
                      if(childKey == "NationalID"){
                          cellNationalID.appendChild(document.createTextNode(childData));
                      }
                      if(childKey == "Nationality"){
                          cellNationality.appendChild(document.createTextNode(childData));
                          row.setAttribute('data-nationality', childData);
                          arr1.push(childData);
                          console.log(childData);
                           var y = document.getElementById("filterNationality");
                           var option = document.createElement("option");
                           var x = 0;
                           for(var c = 0; c < index; c++){
                             if(arr1[c] == arr1[index]){
                               x = 1;
                               break;
                             }
                           }
                           if(x==0){
                             option.text= arr1[c];
                              y.add(option);
                              console.log(index);
                           }
                           index=index+1;

                      }
                      if(childKey =="Gender"){
                          cellGender.appendChild(document.createTextNode(childData));
                          row.setAttribute('data-gender',childData);
                      }
                      if(childKey == "EContact"){
                          cellContactno.appendChild(document.createTextNode(childData));
                      }
                      if(childKey == "Email"){
                          cellEmail.appendChild(document.createTextNode(childData));
                      }
                      if(childKey == "Position"){
                          cellRole.appendChild(document.createTextNode(childData));
                          row.setAttribute('data-position', childData);
                      }
                      button.onclick = viewP;
                  });
                  rowIndexBP = rowIndexBP + 1;

              }
          });
      });
    });
}

setTimeout(function(){
  var role = document.getElementById('displayProfileposition').innerHTML;
  console.log('ROLE='+role);
  if(role == 'CNO'){
    document.getElementById('btnEditPP').style.display='none';
    document.getElementById('btnDeletePP').style.display='none';
    document.getElementById('btnEditSP').style.display='none';
    document.getElementById('btnDeleteSP').style.display='none';
  }
  if(role =="Director"){
     document.getElementById("newPortfolio").style.display = "block";
  }
},2000);


//view portfolio
function viewP(){
  var table = document.getElementById("briefPortfolio");
  var td = $(this).closest('tr').children('td:nth-last-child(2)').text();
  console.log(td);
  if(td == 'Patient'){
    document.getElementById('viewPatientPortfolio').style.display ='block';
    document.getElementById('portfoliofilter').style.display ='none';
    document.getElementById('form').style.display ='none';
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
      var AddressV = snapshot.child('Address').val();
      var AR = snapshot.child('AppointmentRecord').val();
      var MR = snapshot.child('MedicalRecord').val();
      var BD = snapshot.child('BriefDescription').val();
      var roomno = snapshot.child('patientRoomNo').val();
      var AdmissionDate = snapshot.child('AdmissionDate').val();
      var EName = snapshot.child('EName').val();
      var ERelationship = snapshot.child('ERelationship').val();
      var AdmissionReason = snapshot.child('AdmissionReason').val();

      //TODO:image input and resize
      document.getElementById('img1').src = photo;
      document.getElementById('PID').innerHTML= id;
      document.getElementById('Name').innerHTML= Name;
      document.getElementById('NID').innerHTML= NationalID;
      document.getElementById('Gender').innerHTML= Gender;
      document.getElementById('Room').innerHTML= roomno;
      document.getElementById('Password').innerHTML= "*****";

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
      document.getElementById('AdmissionDate').innerHTML= AdmissionDate;
      document.getElementById('EName').innerHTML= EName;
      document.getElementById('ERelationship').innerHTML= ERelationship;
      document.getElementById('AdmissionReason').innerHTML= AdmissionReason;
    });
  }else{
    console.log('123');
    document.getElementById('viewStaffPortfolio').style.display ='block';
    document.getElementById('form').style.display ='none';
    document.getElementById('portfoliofilter').style.display ='none';
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
        console.log(fbV.path.pieces_[0]);
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
      var cv = snapshot.child('CV').val();
      var position = snapshot.child('Position').val();
      var InitialDate = snapshot.child('InitialDate').val();
      var EName = snapshot.child('EName').val();
      var ERelationship = snapshot.child('ERelationship').val();
      var BriefDescription = snapshot.child('BriefDescription').val();
      var License = snapshot.child('License').val();

      document.getElementById("sLicense").src = License;
      document.getElementById('imgS').src = photo;
      document.getElementById('SID').innerHTML= id;
      document.getElementById('sName').innerHTML= Name;
      document.getElementById('sNID').innerHTML= NationalID;
      document.getElementById('sGender').innerHTML= Gender;

      document.getElementById("ssPassword").innerHTML= "*******";
      if(fbV.path.pieces_[0] =="DIR" ||fbV.path.pieces_[0] =="CNO" ){
          document.getElementById("ssPassword").remove();
          document.getElementById("ssP").remove();
          var birthDate = document.getElementById("sInitialDate");
          birthDate.setAttribute("colspan","4");
      }
      document.getElementById('sNationality').innerHTML= Nationality ;
      document.getElementById('sEmail').innerHTML= Email;
      document.getElementById('sDOB').innerHTML= DOB;
      document.getElementById('sContact').innerHTML= Contact;
      document.getElementById('sEContact').innerHTML= EContact;
      document.getElementById('sAddress').innerHTML= AddressV ;
      document.getElementById('sCV').src= cv;
      document.getElementById('sPosition').innerHTML = position;
      document.getElementById('sInitialDate').innerHTML = InitialDate;
      document.getElementById('sEName').innerHTML = EName;
      document.getElementById('sERelationship').innerHTML = ERelationship;
      document.getElementById('sBriefDescription').innerHTML = BriefDescription;

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
    //var CNAname = snapshot.child('CNAName').val();
    var AR = snapshot.child('AppointmentRecord').val();
    var MR = snapshot.child('MedicalRecord').val();
    var BD = snapshot.child('BriefDescription').val();
    var AdmissionDate = snapshot.child('AdmissionDate').val();
    var EName = snapshot.child('EName').val();
    var ERelationship = snapshot.child('ERelationship').val();
    var AdmissionReason = snapshot.child('AdmissionReason').val();
    var picfilename = snapshot.child('picFilename').val();

    console.log(photo);
    //TODO: picture can't be edit?
    document.getElementById('PictureP').innerHTML = photo;
    document.getElementById('PatientID2').value= id;
    document.getElementById('patientName2').value= Name;
    document.getElementById('patientNID2').value= NationalID;
    document.getElementById('patientGender2').value= Gender;
    document.getElementById('patientRoomNo2').value= roomno;
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
    document.getElementById('patientAdmissionDate2').value= AdmissionDate;
    document.getElementById('patientEName2').value= EName;
    document.getElementById('patientERelationship2').value= ERelationship;
    document.getElementById('patientAdmissionReason2').value= AdmissionReason;
    document.getElementById('patientpicFilename').innerHTML = picfilename;
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
    var InitialDate = snapshot.child('InitialDate').val();
    var EName = snapshot.child('EName').val();
    var ERelationship = snapshot.child('ERelationship').val();
    var BriefDescription = snapshot.child('BriefDescription').val();
    var License = snapshot.child('License').val();
    var picfilename = snapshot.child('picFilename').val();
    var cvfilename = snapshot.child('cvFilename').val();
    var licensefilename = snapshot.child('licenseFilename').val();
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
    if(fbV.path.pieces_[0] =="DIR" ||fbV.path.pieces_[0] =="CNO" ){
        document.getElementById("staffPassword2").remove();
        document.getElementById("ssP2").remove();
        var birthDate2 = document.getElementById("ssBD2");
        birthDate2.setAttribute("colspan","4");
    }
    document.getElementById('staffCV2').innerHTML= CV;
    document.getElementById('staffPosition2').value = Position;
    document.getElementById('staffInitialDate2').value= InitialDate;
    document.getElementById('staffEName2').value= EName;
    document.getElementById('staffERelationship2').value= ERelationship;
    document.getElementById('staffBriefDescription2').value= BriefDescription;
    document.getElementById('stafflicense2').innerHTML= License;
    document.getElementById('staffpicfilename').innerHTML= picfilename;
    document.getElementById('staffcvfilename').innerHTML= cvfilename;
    document.getElementById('stafflicensefilename').innerHTML= licensefilename;
  });
}

//Updating patient portfolio
function SubmitPPPP(){

  var photo = document.getElementById('PictureP').innerText;
  var id = document.getElementById('PatientID2').value;
  var Name = document.getElementById('patientName2').value;
  var NID = document.getElementById('patientNID2').value;
  var Gender = document.getElementById('patientGender2').value;
  var Room = document.getElementById('patientRoomNo2').value;
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
  var AdmissionDate = document.getElementById('patientAdmissionDate2').value;
  var EName = document.getElementById('patientEName2').value;
  var ERelationship = document.getElementById('patientERelationship2').value;
  var AdmissionReason = document.getElementById('patientAdmissionReason2').value;
  var picfilename = document.getElementById('patientpicFilename').innerText;

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
  Address : Address,
  AdmissionDate : AdmissionDate,
  EName : EName,
  ERelationship : ERelationship,
  AdmissionReason : AdmissionReason,
  Position : 'Patient',
  picFilename : picfilename
  };


  updates['Patient/'+ id+'/Portfolio'] = postData;
  firebase.database().ref().update(updates);
  firebase.database().ref('Room').child(Room+'/'+id).set(Name);
  window.location.reload();

}
function keypresshandler(event){
         var charCode = event.keyCode;
         if ((charCode > 31 && charCode < 48)||(charCode > 57 && charCode < 65)||(charCode > 90  && charCode < 97)||(charCode>122))
         return false;
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
  var InitialDate = document.getElementById('staffInitialDate2').value;
  var EName = document.getElementById('staffEName2').value;
  var ERelationship = document.getElementById('staffERelationship2').value;
  var BriefDescription = document.getElementById('staffBriefDescription2').value;
  var License = document.getElementById('stafflicense2').value;
  var picfilename = document.getElementById('staffpicfilename').innerText;
  var cvfilename = document.getElementById('staffcvfilename').innerText;
  var licensefilename = document.getElementById('stafflicensefilename').innerText;

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
  Position : position,
  InitialDate : InitialDate,
  EName : EName,
  ERelationship : ERelationship,
  BriefDescription : BriefDescription,
  License : License,
  picFilename : picfilename,
  cvFilename : cvfilename,
  licenseFilename : licensefilename
  };

  updates[ position +'/'+ id +'/Portfolio/'] = postData;
  firebase.database().ref().update(updates);
  window.location.reload();
}

//Patient Portfolio deletion
function deletePP(){
  var fbPP = firebase.database().ref('Patient');
  var id = document.getElementById('PID').innerText;
  var r = confirm("Are you sure you want to delete?");
    if (r == true) {
      fbPP.child(id+"/Portfolio").on('value',function(snapshot){
        var pic = snapshot.child('picFilename').val();
        var storageRef = firebase.storage().ref();
        var file = storageRef.child('Patient/'+pic);
        file.delete().then(function(){
          fbPP.child(id).remove();
          window.location.reload();
        }).catch(function(error){
          alert('failed to delete!');
        });;
      });
        alert("successfully deleted!");
    }
}

function deleteSP(){
 var position = document.getElementById('sPosition').innerText;
 var id = document.getElementById('SID').innerText;
 var fbSP = firebase.database().ref(position);
 var r = confirm ("Are you sure you want to delete?");
  if (r == true) {
    fbSP.child(id+'/Portfolio').on('value',function(snapshot){
      var pic = snapshot.child('picFilename').val();
      var cv = snapshot.child('cvFilename').val();
      var license = snapshot.child('licenseFilename').val();

      firebase.storage().ref('Staff/').child(cv).delete();
      firebase.storage().ref('Staff/').child(license).delete();
      firebase.storage().ref('Staff/').child(pic).delete().then(function(){
        alert('successfully deleted the storage file!');
         fbSP.child(id).remove();
        window.location.reload();
      }).catch(function(error){
        alert('failed to delete!');
      });
    });
	    alert("Succesfully Deleted!");
}

}
//Keyword search
$(document).ready(function(){
  $("#searchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#briefPortfolio tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      var searchedTable = $("#briefPortfolio").html();
    });
  });
});

//Room number filter
function filterRoomNo() {

    var table = document.getElementById("briefPortfolio");
    var selectedroom = document.getElementById('filterRoomNo').value;
    if(selectedroom !="all"){
        document.getElementById("filterPosition").value ="Patient";
        document.getElementById('filterNationality').value = 'all';
        document.getElementById('filterGender').value = 'all';
    }
    else{
        document.getElementById("filterPosition").value ="all";
    }

    var fbPR = firebase.database().ref('Patient/');
    var tr = table.getElementsByTagName("tr");
    fbPR.once('value',function(snapshot){
      snapshot.forEach(function(childSnapshot){
          childSnapshot.forEach(function(childSnapshot1){
              if(childSnapshot1.key == "Portfolio"){
                  childSnapshot1.forEach(function(childSnapshot2){
                      var id = childSnapshot.key;
                      if(childSnapshot2.key == "patientRoomNo"){
                          if(childSnapshot2.val() == selectedroom){

                              for( var i = 0; i < tr.length ; i++){
                                  var td = tr[i].getElementsByTagName("td")[0];//row i cell number 4
                                  if(td){
                                    console.log(td);
                                    if(td.innerText == id){
                                    tr[i].style.display = "table-row";
                                    }
                                  }
                              }
                          }
                          else{
                              for( var i = 0; i < tr.length ; i++){
                                  var td = tr[i].getElementsByTagName("td")[0];//row i cell number 4
                                  if(td){
                                      if(td.innerText == id){
                                          tr[i].style.display = "none";
                                      }
                                  }
                              }
                          }
                      }
                  })
              }
          })
      });
  });
  for( var i = 0; i < tr.length ; i++){
      var td = tr[i].getElementsByTagName("td")[0];
      if(td){
        console.log(td);
        if(tr[i].style.display ==''){
            tr[i].style.display = "none";
        }
      }
  }
  if("all" == selectedroom){
      for( var i = 0; i < tr.length ; i++){
          var td = tr[i].getElementsByTagName("td")[0];
          if(td){
                  tr[i].style.display = "";

          }
      }
  }
}

// Combined Filters
var positionF,nationalityF,genderF,roomF,idnroomF;
function updateTable(){
  $(".table-list-row").hide().filter(function(){
    var self = $(this);
    var result = true;
    if (positionF && (positionF != 'all')) {
      result = result && positionF === self.data('position');
    }
    if (nationalityF && (nationalityF != 'all')) {
      result = result && nationalityF === self.data('nationality');
    }
    if (genderF && (genderF != 'all')) {
      result = result && genderF === self.data('gender');
    }


  /*  if (idnroomF && (idnroomF != 'all')) {
      result = result && idnroomF === self.data('idroom');
      console.log('idroom = '+self.data('idroom'));
      console.log('idnroomF = '+idnroomF);
    }*/

    console.log('123');
    return result;
  }).show();
}

$('#filterPosition').on('change', function() {
  positionF = this.value;
  if(positionF !="Patient"){
    document.getElementById("filterRoomNo").value ="all";
    document.getElementById('Roomhide').style.display = 'none';

  }else{
    document.getElementById('Roomhide').style.display = 'block';
  }

  updateTable();
});

$('#filterNationality').on('change', function() {
  nationalityF = this.value;
  if(nationalityF != 'all'){
    document.getElementById('filterRoomNo').value = 'all';
  }

  updateTable();
});

$('#filterGender').on('change', function() {
  genderF = this.value;
  if(genderF != 'all'){
    document.getElementById('filterRoomNo').value = 'all';
}

  updateTable();
});
///////////////////////////////

/*var scope = [];
$('#filterRoomNo').on('change', function(){

  roomF = this.value;
  readP();
  console.log(scope);
  scope.length = 0;
      //updateTable();
});

function readP(){
  var fbPR = firebase.database().ref('Patient/');
  fbPR.once('value', readallP);

}

function readallP(snapshot){
    snapshot.forEach(function(childSnapshot){
      var id = childSnapshot.key;
      var room = childSnapshot.child('Portfolio/patientRoomNo').val();
      scope.push(id);
      scope.push(room);
      });
      console.log(scope);
}*/


function viewportfoliofilter(){
    document.getElementById("form").style.display = "inline-block";
    portport.setAttribute("style","top:-534px;")
}

var portport = document.getElementById("shortportfolio");

function closefilter(){
  //portfilter.setAttribute("style","animation: portfolio_pop 2s;");
  portfilter.setAttribute("style","display:none;")

  portport.setAttribute("style","top:-130px;")

  //  document.getElementById("shortportfolio").style.display = "inline-block";

}

var portfilter = document.getElementById("form");


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


function pass123(){
var work123  = document.getElementById("staffPosition").value;
  if(work123 == "CNA"){
    document.getElementById("passtable").style.display= "block";
  }
}
