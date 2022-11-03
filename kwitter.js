function addUser()
{
    user=document.getElementById("user_name").value 
    localStorage.setItem("user_name", user)
    window.location="kwitter_room.html"
  
        username=document.getElementById("user_name").value 
        firebase.database().ref("/").child(user_name).update({
            purpose:"adding user"
        })    
  
}