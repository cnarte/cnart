
  var firebaseConfig = {
    apiKey: "AIzaSyAUi5mUZ_1C-SEddlerdUGV1YKZKazBTnQ",
    authDomain: "complain2solution-dc004.firebaseapp.com",
    databaseURL: "https://complain2solution-dc004.firebaseio.com",
    projectId: "complain2solution-dc004",
    storageBucket: "",
    messagingSenderId: "44446720580",
    appId: "1:44446720580:web:365629f057e26310aa5211",
    measurementId: "G-74108JL5F4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var UID = document.getElementById('UIDAI').value;
  var pass =document.getElementById('password').value;
  var pass1=document.getElementById('password_1').value;
  var pass2 =document.getElementById('comfirm_password').value;
  function signin() 
  {
    
    firebase.auth().signInWithEmailAndPassword(UID, pass1).catch(function(error) {});
  // Handle Errors here.
}
if (pass==pass2) 
{
    function logup()
    {
      firebase.auth().createUserWithEmailAndPassword(UID, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

    }
}
else
{
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
}    





