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

  //Get element from html
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnLogout = document.getElementById('btnLogout');
  const btnSignUp = document.getElementById('btnSignUp');
  //console.log(btnLogin);

  //Login event
  btnLogin.addEventListener('click', e =>{
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  //SignUp event
  btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
    .catch(e => console.log(e.message));
  });

  //Logout event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  //For checking whether you're loggedin or Loggedout
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
      console.log(firebaseUser);
    //  window.location.href = "scheduletest.html";
      btnLogout.classList.remove('hide');
    }else {
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });
}())
