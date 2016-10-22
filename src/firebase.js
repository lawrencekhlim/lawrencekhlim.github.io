window.onerror = function(msg, url, linenumber) {
    console.log('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}

function openFirebase() {
    var config = {
        apiKey: "AIzaSyCt21vzwMQozqSirpMkWewElYNy0XMPi-A",
        authDomain: "bspoker-a0a5c.firebaseapp.com",
        databaseURL: "https://bspoker-a0a5c.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "173303633528"
    };
    firebase.initializeApp(config);
}


function writeFirebase(folder, alldata)  {
    firebase.database().ref(folder).set (alldata);
}

function readFirebase(folder, newfunction){
    firebase.database().ref(folder).on("value", newfunction);
}


function readFirebaseOnce(folder, newfunction){
    firebase.database().ref(folder).once("value", newfunction);
}

function updateConnection (username) {
    var connectedRef = firebase.database().ref('.info/connected');
    connectedRef.on('value', function(snap) {
        if (snap.val() === true) {
            // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
            readFirebase ("online/", function (snapshot) {
                var onlinedictionary = snapshot.val().currentuser;
                onlinedictionary [username] = true;
                console.log (onlinedictionary);
                writeFirebase ("online/", {currentuser:onlinedictionary});
            });
        }
    });
    offConnection(username);
}

function offConnection (username) {
    readFirebase ("online/", function (snapshot) {
        var onlinedictionary = snapshot.val().currentuser;
        onlinedictionary[username] = false;
        firebase.database().ref("online/").onDisconnect().set({currentuser:onlinedictionary});
        firebase.database().ref("users/"+username+"/dealer").onDisconnect().set({"isDealer":false});
    });
}
