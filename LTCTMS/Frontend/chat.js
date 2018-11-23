var firebase;


function callChatData(database,$show,userName,$btn,$content,ms){
    var database = firebase.database().ref(database);
    database.once('value', function(snapshot) {
      $show.html('');
      for(var i in snapshot.val()){
          if(snapshot.val()[i].name == userName){
              $show.append('<div class="'+snapshot.val()[i].id+'"><div class="nameI">'+snapshot.val()[i].name+':</div><div class="contentI">'+snapshot.val()[i].content+' </div><div class="timeI">'+snapshot.val()[i].time+'</div>');
          }
          else{
              $show.append('<div><div class="name">'+snapshot.val()[i].name+':</div><div class="content">'+snapshot.val()[i].content+' </div><div class="time">'+snapshot.val()[i].time+'</div>');
          }
      }

      $show.find(' .nameI').css({
         'text-align':'right',
        'display':'block',
        'padding-left':'60%',
        'padding-top':'40px',
        'padding-bottom':'0px',
        'color':'#FFCC33',
        'float':'right',
        'width':'100%',
      });
      $show.find(' .contentI').css({
        'display':'block',
        'margin-right':'10px',
        'margin-top':'0px',
        'float':'right',
       'padding-top':'6px',
       'word-wrap':'break-word',

      });
      $show.find(' .timeI').css({
        'display':'inline',
        'color':'#777',
        'margin-left':'90%',
        'width':'100%',
        'font-size':'6px',
      });
      $show.find(' .name').css({
          'text-align':'left',
         'display':'block',
         'padding-right':'80%',
         'padding-top':'10px',
         'padding-bottom':'0px',
         'width':'100%',
        'display':'block',
        'float':'left',

      });
      $show.find(' .content').css({
          'display':'block',
          'margin-left':'10px',
          'margin-top':'0px',
          'float':'left',
         'padding-top':'6px',
       'word-wrap':'break-word',
      });
      $show.find(' .time').css({
          'float':'left',
          'position':'relative',
          'left':'20px',
          'display':'inline',
          'color':'#777',
          'margin-right':'90%',
          'width':'100%',
          'font-size':'6px',
      });

    });
    database.limitToLast(1).on('value', function(snapshot) {
      for(var i in snapshot.val()){
          $show.append('<div class="'+snapshot.val()[i].id+'"><div class="nameI">'+snapshot.val()[i].name+':</div><div class="contentI">'+snapshot.val()[i].content+' </div><div class="timeI">'+snapshot.val()[i].time+'</div>');
      }

      $show.find('.id'+ms+' .nameI').css({
          'text-align':'right',
         'display':'block',
         'padding-left':'60%',
         'padding-top':'40px',
         'padding-bottom':'0px',
         'color':'#FFCC33',
         'float':'right',
         'width':'100%',
      });
      $show.find('.id'+ms+' .contentI').css({
          'display':'block',
          'margin-right':'10px',
          'margin-top':'0px',
          'float':'right',
         'padding-top':'6px'
      });
      $show.find('.id'+ms+' .timeI').css({
          'display':'inline',
          'color':'#777',
          'margin-left':'90%',
          'width':'100%',
          'font-size':'6px',
      });
      $show.scrollTop($show[0].scrollHeight);
    });
}


function cancel(){
    document.getElementById("im").style.display = "none";
}
function expand(){
    document.getElementById("leftList").style.display = "block";
}

function displayChat(i){
    if (i==0){
        if(document.getElementById('im'+i)== null){
            if (document.getElementById('im1')!= null){
                document.getElementById('im1').style.display = 'none';
            }
            chatForm(i);
        }else{
            document.getElementById('im'+i).style.display  = 'block';
            document.getElementById('im1').style.display  = 'none';
        }
    }else if(i == 1){
        if(document.getElementById('im'+i)== null){
            if (document.getElementById('im0') != null){
                document.getElementById('im0').style.display  = 'none';
            }
            chatForm(i);
        }
        else{
            document.getElementById('im'+i).style.display  = 'block';
            document.getElementById('im0').style.display  = 'none';
        }
    }
}



function chatForm(i){
    var body = document.getElementsByTagName('body')[0];
    var div1 =document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var div4 = document.createElement('div');
    var div5 = document.createElement('div');

    var span = document.createElement('span');
    var input = document.createElement('input');
    //var button = document.createElement('button');

    div1.setAttribute('id','im'+i);
    //chatDiv.setAttribute('style','position:absolute;top:50%;right:0%;margin:0 auto;width:45%;max-width:600px;height:50%;box-sizing:border-box;background:rgba(0,0,0,0.3);');
    //chatinnerDiv.setAttribute('id', 'cover');
    div2.setAttribute('id','cover');
    div2.setAttribute('onclick','cancel('+i+')');

    input.setAttribute('id', 'content'+i);

    //button.setAttribute('id','btn'+i);
//    button.setAttribute("onclick","enter();");


    //button.setAttribute('value','btn'+i);

    span.setAttribute('id', 'name'+i);
    span.setAttribute('style', 'display:inline;');

    div3.setAttribute('id','input'+i);
    //chatinnerDiv.setAttribute('style','position:absolute;z-index:2;height:90px;width:100%;left:0;bottom:0;margin:0;padding:15px;box-sizing:border-box;background:#6699CC;color:#000;')

    div5.setAttribute('id','show'+i);


    body.appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div3.appendChild(div4)
/////////////////////////////////////////////////////////
    div4.appendChild(span);
    div4.appendChild(input);
    //div3.appendChild(button);
    div1.appendChild(div5);
    var $show = $('#show'+i),
    ms = new Date().getTime(),
    $btn = $('#btn'+i);
    $content = $('#content'+i);
    var database;
    var userName = firebase.auth().currentUser.displayName;
    console.log(userName);
    document.getElementById("name"+i).innerHTML = userName;
    document.getElementById("name"+i).value = userName;
    if(i ==0){
        database = 'Chat/All';
    }else{
        database = "Chat/Part";
    }
    //button.setAttribute("onclick","write("+ms+","+database+","+$content+","+userName+")");
    $content.on('keydown', function(e){
      if(e.keyCode == 13){
        write(ms,database,$content,userName);
      }
    });

    callChatData(database,$show,userName,$content,$btn,ms);

}

         function write(ms,database,$content,userName){
             console.log($content.val());
                 var database = firebase.database().ref(database);
           var date = new Date();
           var h = date.getHours();
           var m = date.getMinutes();
           var s = date.getSeconds();
           if(h<10){
             h = '0'+h;
           }
           if(m<10){
             m = '0' + m;
           }
           if(s<10){
             s = '0' + s;
           }
           var now = h+':'+m+':'+s;
            var postData = {
             name:userName,
             content:$content.val(),
             time:now,
             id:'id'+ms
           };
           database.push(postData);
           $content.val('');
           console.log(database.path.pieces_[1]);
         }
