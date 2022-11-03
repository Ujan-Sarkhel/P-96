var firebaseConfig = {
      apiKey: "AIzaSyDuEdTXnHO4ML6MnQjlaVQBfiNMhuruhto",
      authDomain: "kwitter-project-94271.firebaseapp.com",
      projectId: "kwitter-project-94271",
      storageBucket: "kwitter-project-94271.appspot.com",
      messagingSenderId: "638842396872",
      appId: "1:638842396872:web:2604bf533fb18db87305fd",
      measurementId: "G-WF9F3Y8CQC"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function send()
{
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            like:0,
            message:msg,
            name:user_name
      });  
      document.getElementById("msg").value=""
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
