
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

function addUser()
{
      username=document.getElementById("user_name").value 
    firebase.database().ref("/").child(username).update({
        purpose:"adding user"
    }) 
}
    
user_name = localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!"
  
    function addroom()
  {  
    user_name=document.getElementById("user_name").value 
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
    localStorage.setItem("room_name", room_name)
    window.location = "kwitter_page.html" 
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names)
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomname(name)
{
    console.log(name)
    localStorage.setItem("room_name", name)
    window.location = "kwitter_page.html"
}

function logout()
{
    window.location = "index.html"
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
}
