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
    // var alertBlock = document.querySelector('.alert').style.display = 'block';


    setTimeout(function(){
      alertBlock = document.querySelector('.alert').style.display = 'block';
    
    }, 1000)
  
    // hide alert after 5 seconds
    setTimeout(function(){
     alertBlock = document.querySelector('.alert').style.display = 'none';
  
  }, 3000)
  
   
    setTimeout(function(){
      reseting = document.getElementById('contactForm').reset();
   
  }, 3000)
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

//   var date = document.querySelector('[type=date]');
  

// function noMondays(e){

//     var day = (new Date( e.target.value )).getUTCDay();

//     // Days in JS range from 0-6 where 0 is Sunday and 6 is Saturday

//     if (day==0 || day==6){

//         e.target.setCustomValidity('OH NOES! We hate Mondays! Please pick any day but Monday.');

//     } else {

//         e.target.setCustomValidity('');

//     }

// }

// date.addEventListener('input',noMondays);

// Everything except weekend days
const validate = dateString => {
  const day = (new Date(dateString)).getDay();
  const month = (new Date(dateString)).getMonth();
  const year = (new Date(dateString)).getFullYear();
  if (day==0 && month==0 && year==1990) {
    return false
  }
  return true;
}

// Sets the value to '' in case of an invalid date
document.querySelector('[type=date]').onchange = evt => {
  if (!validate(evt.target.value)) {
    evt.target.value = '';
    document.querySelector('.alertTest').style.display = 'block';
    setTimeout(function(){
      alertBlockTest = document.querySelector('.alertTest').style.display = 'none';
    
    }, 3000)
  }
}