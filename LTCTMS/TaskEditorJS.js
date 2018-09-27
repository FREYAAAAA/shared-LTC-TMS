// Task Tree View
var main = document.getElementById('treemenu2'),
  tree = new VanillaTree(main,{
    contextmenu: [{
      label :'Move up',
      action: function(id){

      }

    },
    {
      label :'Move down',
      action: function(id){
      }

    },
    {
      label: 'Delete',
      action: function(id) {
      }
      }]
  });



//TODO:Alllocate the proper pathing in firebase db
var fbCat = firebase.database().ref('TaskInstruction');

fbCat.once('value')
  .then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
      var id = childSnapshot.key;
      console.log(id);
      var options={
        label: id,
        id : id,
        opened: true
      }
      tree.add(options);
      var fbTask= fbCat.child(id);
      fbTask.once('value')
        .then(function(Tasksnapshot){
          Tasksnapshot.forEach(function(TchildSnapshot){
            var childid = TchildSnapshot.key;
            console.log(childid);
            var task = {
              label: childid,
              id:childid,
              parent:id,
              opened:true
            }
            tree.add(task);
            var fbMainsteps = fbTask.child(childid);
            fbMainsteps.once('value')
              .then(function(Mainsnapshot){
                Mainsnapshot.forEach(function(MchildSnapshot){
                  var mainid = MchildSnapshot.key;
                  console.log(childid+'111');
                  var main = {
                    label: mainid,
                    id:mainid,
                    parent:childid,
                    opened:true
                  }
                  tree.add(main);
                });
              });

          });
        });
    });
  });



  main.addEventListener('vtree-add', function(evt) {
    console.log("add");
  });

  main.addEventListener('vtree-remove', function(evt) {
    console.log("delete");
  });

  main.addEventListener('vtree-move', function(evt) {
    console.log("move");
  });

  main.addEventListener('vtree-open', function(evt) {
    console.log('open');
  });

  main.addEventListener('vtree-close', function(evt) {
    console.log('close');
  });



// Content of Task  - Category selection
var fbCat= firebase.database().ref('TaskInstruction')
fbCat.once("value")
  .then(function(snapshot){
    var arr = [];
    var i = 0;
    snapshot.forEach(function(childSnapshot){
      var childKey = childSnapshot.key;
      arr.push(childKey); // add the childkey into array, push is add
      console.log(arr[i]); // to show the key on the console
      var y = document.getElementById("CatOption");
      var option = document.createElement("option");
      option.value = arr[i];
      y.appendChild(option);

      console.log(i);
      i=i+1;
      });
});

//Input the Content of Task
function TaskSubmit(){
  var Ttitle  = document.getElementById('Ttitle').value;
  console.log(Ttitle);
  var Ttitle2 = "xtsx"+Ttitle+"xtex";
  var videoURL = document.getElementById('videoURL').value;
  var Outline = document.getElementById('Outline').value;
  var Outline2 = 'xosx'+ Outline +'xoex';
  var Note = document.getElementById('Note').value;
  var Note2 = 'xnsx'+ Note +'xnex';
  var selectCat = document.getElementById('selectCat').value;
  console.log(selectCat);
  var Tdata = {
    TtitleIOS : Ttitle,
    TtitleAndroid : Ttitle2,
    videoURL : videoURL,
    OutlineIOS : Outline,
    OutlineAndroid : Outline2,
    NoteIOS : Note,
    NoteAndroid : Note2,
    Category : selectCat
  }
  var updates = {};
  updates['TaskInstruction/'+ selectCat + '/' + Ttitle + '/' + Ttitle ] = Tdata;
  firebase.database().ref().update(updates);
  alert('Successfully Created a New Task');
  window.location.reload();
}

// if selected -> display
main.addEventListener('vtree-select', function(evt) {
  console.log(evt.detail.id +  '!!');
  var fbTI = firebase.database().ref('TaskInstruction/Basic/'+evt.detail.id).child(evt.detail.id); //evt.detail.id is the selected id
  fbTI.on('value', function(snapshot){
    document.getElementById('Ttitle').value = snapshot.child('videoURL').val();
    console.log(snapshot.child('videoURL').val());
    document.getElementById('videoURL').value = snapshot.child('videoURL').val();
    document.getElementById('Outline').value = snapshot.child('OutlineIOS').val();
    document.getElementById('Note').value = snapshot.child('NoteIOS').val();
    document.getElementById('selectCat').value = snapshot.child('Category').val();
  });
});
//popup mainstep page
function Mainstep(){
  document.getElementById('MainStepsPage').style.display = 'block';
}
//mainstep submission
function MainstepSubmit(){
  var Mtitle = document.getElementById('Mtitle').value;
  var Mtitle2 = 'xtsx'+ Mtitle +'xtex';
  var videoURL = document.getElementById('videoURL1').value;
  var MstepNo = document.getElementById('MstepNo').innerText;
  var MD = document.getElementById('MDescription').value;
  var MD2 = 'xdsx'+MD+'xdex';
  var MN = document.getElementById('MNote').value;
  var MN2 = 'xnsx'+MN+'xnex';
  var updates={};
  var mdata={
    MtitleIOS:Mtitle,
    MtitleAndroid:Mtitle2,
    videoURL:videoURL,
    MDescriptionIOS : MD,
    MDescriptionAndroid : MD2,
    MNoteIOS : MN,
    MNoteAndroid : MN2
  }
  updates['TaskInstruction/'+ selectCat + '/' + Ttitle + '/' + Ttitle ] = Tdata;
  firebase.database().ref().update(updates);
  alert('Successfully Created a New Task');
  window.location.reload();

}
