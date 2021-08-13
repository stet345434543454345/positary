
var firebaseConfig = {
      apiKey: "AIzaSyD1fMHVuR69Tfpsu2LiYxyp1s-O2J9M-zY",
      authDomain: "kwiti-f3a56.firebaseapp.com",
      databaseURL: "https://kwiti-f3a56-default-rtdb.firebaseio.com",
      projectId: "kwiti-f3a56",
      storageBucket: "kwiti-f3a56.appspot.com",
      messagingSenderId: "651864486368",
      appId: "1:651864486368:web:fdf494179a1d69ef413b85"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     

     
      });});}
getData();
