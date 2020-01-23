// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB6Bh3h1aIv-lHxmHKpXc2gWbYisVE9thg",
    authDomain: "wyrwanezkalendarza-73016.firebaseapp.com",
    databaseURL: "https://wyrwanezkalendarza-73016.firebaseio.com",
    projectId: "wyrwanezkalendarza-73016",
    storageBucket: "wyrwanezkalendarza-73016.appspot.com",
    messagingSenderId: "839827760418",
    appId: "1:839827760418:web:f40c7792a7742f0a3bf17b",
    measurementId: "G-39G0LJVSKJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  //reference messages collection
var messagesRef = firebase.database().ref("messages");




//listen for form submit

const form = document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
  
    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var date = getInputVal('date');
    var coment = getInputVal('coment');
  
    //save message
    saveMessage(name, email, subject, date, coment);
  
    //show alert
    var alertBlock = document.querySelector('.alert').style.display = 'block';
  
    // hide alert after 5 seconds
    setTimeout(function(){
    alertBlock = document.querySelector('.alert').style.display = 'none';
  
  }, 3000)
  
   
      document.getElementById('contactForm').reset();
   
}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value
  }

  //save the message to firebase

function saveMessage(name, email, subject, date, coment){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      subject: subject,
      date: date,
      coment: coment
    });
  }