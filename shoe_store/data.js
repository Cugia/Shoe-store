const firebaseConfig = {
    apiKey: "AIzaSyDnYw60VeHvoLv-dkxGW1e_Q54NlkR-A-I",
    authDomain: "shoe-store-d0e9a.firebaseapp.com",
    projectId: "shoe-store-d0e9a",
    storageBucket: "shoe-store-d0e9a.appspot.com",
    messagingSenderId: "685026690924",
    appId: "1:685026690924:web:b29a0a32672a66b2e6d549",
    measurementId: "G-6ST6EMXH5K"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//let's code
var datab = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebaseConfig.authDomain().createUserWithEmailAndPassword(email.password).then(function(){

}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function Signin(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    Promise.catch(e =>alert(e.msg));
    window.open("https://www.google.com"."__self");
}
document.getElementById('form').addEventListener('submit'.(e) =>{
  e.preventDefault();
  var userinfo = datab.push();
  userinfo.set({
    name:getId('fname'),
    email:getId('eemail'),
    password:getId('password')
  });
  alert("Successfully Signed Up");
  console.log("sent");
  document.getElementById('form').reset();
})
function get(id){
    return document.getElementById(id).value;
}


