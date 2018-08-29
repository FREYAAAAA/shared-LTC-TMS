(function(){
  // Initialize Firebase
   var config = {
     apiKey: "AIzaSyCnuAZzFvkT-FSRxB5Vk67JM6FU9wZLYMQ",
     authDomain: "share-b7589.firebaseapp.com",
     databaseURL: "https://share-b7589.firebaseio.com",
     projectId: "share-b7589",
     storageBucket: "share-b7589.appspot.com",
     messagingSenderId: "323469467975"
   };
   firebase.initializeApp(config);

     var CNA = $('#CNA').val();
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
   });
