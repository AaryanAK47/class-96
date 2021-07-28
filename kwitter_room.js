
 var firebaseConfig = {
      apiKey: "AIzaSyBJV4RiPNoCJDhRjc0I5NIwklAc8-qDGgQ",
      authDomain: "kwitter-app-97976.firebaseapp.com",
      databaseURL: "https://kwitter-app-97976-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-97976",
      storageBucket: "kwitter-app-97976.appspot.com",
      messagingSenderId: "974450072401",
      appId: "1:974450072401:web:10f6b54f5ad23c78541170",
      measurementId: "G-94XBJVQBZ3"
    };
function addroom()
{
  Room_name = document.getElementById("room_name").Value;


  firebase.database().ref("/").child(Room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("Room_name", Room_name);

  window.location == "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - " +Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoonmName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoonmName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page..html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}