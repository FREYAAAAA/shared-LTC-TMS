var firebase;
setTimeout(function(){
    var userName = document.getElementById("displayProfilename").innerHTML;
    document.getElementById("name").innerHTML = userName;
    document.getElementById("name").value = userName;
    console.log(document.getElementById("name").innerHTML);
    $(function(){
     var $name = $('#name'),
         $content = $('#content'),
         $btn = $('#btn'),
         $show = $('#show'),
         ms = new Date().getTime();

     var database = firebase.database().ref("chat");


     $btn.on('click',write);
     $content.on('keydown', function(e){
       if(e.keyCode == 13){
         write();
       }
     });

     function write(){
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
         name:$('#name').val(),
         content:$('#content').val(),
         time:now,
         id:'id'+ms
       };
       database.push(postData);
       $content.val('');
     }

     database.once('value', function(snapshot) {
       $show.html('');
       for(var i in snapshot.val()){
           if(snapshot.val()[i].name == userName){
               $show.append('<div class="'+snapshot.val()[i].id+'"><div class="timeI">'+snapshot.val()[i].time+'</div><div class="nameI">'+snapshot.val()[i].name+' :</div><div class="contentI">'+snapshot.val()[i].content+'</div>');
           }
           else{
               $show.append('<div><div class="time">'+snapshot.val()[i].time+'</div><div class="name">'+snapshot.val()[i].name+' :</div><div class="content">'+snapshot.val()[i].content+'</div>');
           }
       }
       $show.scrollTop($show[0].scrollHeight);
       $show.find(' .nameI').css({
         'display':'block',
         'float':'right',
         'padding-left':'60%',
         'padding-top':'12px',
         'color':'#FFCC33'
       });
       $show.find(' .contentI').css({
         'display':'block',
         'float':'right',
         'margin-right':'10px',
              'padding-top':'6px'
       });
       $show.find(' .timeI').css({
         'float':'right',
         'display':'block',
         'left':'480px',
         'color':'#777'
       });
       $show.find(' .name').css({
         'display':'block',
         'float':'left',
         'padding-right':'100%',
         'padding-top':'12px',
       });
       $show.find(' .content').css({
         'display':'block',
         'float':'left',
         'margin-right':'10px',
        'padding-top':'6px',
        'max-width':'400px',
        'word-wrap':'break-word',
       });
       $show.find(' .time').css({
         'float':'left',
         'display':'block',
         'left':'480px',
         'color':'#777'
       });

     });


     database.limitToLast(1).on('value', function(snapshot) {
       for(var i in snapshot.val()){
           $show.append('<div class="'+snapshot.val()[i].id+'"><div class="timeI">'+snapshot.val()[i].time+'</div><div class="nameI">'+snapshot.val()[i].name+' :</div><div class="contentI">'+snapshot.val()[i].content+'</div>');
       }
       $show.scrollTop($show[0].scrollHeight);
       $show.find('.id'+ms+' .nameI').css({
         'display':'block',
         'padding-top':'12px',
         'color':'#FFCC33'
       });
       $show.find('.id'+ms+' .contentI').css({
         'display':'block',
         'float':'right',
         'margin-right':'10px'
       });
       $show.find('.id'+ms+' .timeI').css({
        'display':'block',
         'right':'0',
         'color':'#777'
       });
     });
   });

}, 2000);


function cancel(){
    document.getElementById("im").style.display = "none";
}
function expand(){
    document.getElementById("im").style.display = "block";
}
