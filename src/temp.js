/**
 * Created by LawrenceLim on 10/20/16.
 */
function openFirebase()  {
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

function writeHand(folder, data)  {

    firebase.database().ref(folder).set({
        hand:data
    });
}

function setPassword(folder, data)  {

    firebase.database().ref(folder).set({
        password:data
    });
}


function readFirebase(folder, pointer)  {
    var info;
    var getinfo = firebase.database().ref(folder);
    getinfo.on("value",function(snapshot){
        info = snapshot.val().pointer;
    });
    return info;
}