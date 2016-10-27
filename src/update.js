//TODO: fix for chrome

checkCookie();
openFirebase();
var username = getCookie ("username");
updateConnection (username);
var user = new User (username);
const MAX_CARDS = 6;
const MAX_PLAYERS = 8;
var cardsInHand = 0;
var allusers = [];

function callBS () {
    writeFirebase("call", {currentCall:username+" called BS"});
}
function callSPOTON () {
    writeFirebase("call", {currentCall:username+" called SPOT ON"});
}

//listens for any change in the users folder
firebase.database().ref("users").on("child_changed", function(childSnapshot, prevChildKey){
    console.info("Something Changed in the Users Folder!");
    updateInfo();
});

//listens for when a user gets added
firebase.database().ref("users").on("child_added", function(childSnapshot, prevChildKey){
    console.info("Something Got Added To the Users Folder!");
    if(prevChildKey!=null){
        updateInfo();
    }
});

//listens for when the BS or Spot Buttons are pressed
firebase.database().ref("call").on("value", function(dataSnapshot){
    updateStoppage();
});


function updateInfo(){
    console.log ("updateInfo");
    checkConnections();//sees which users are online

    updateStoppage(); // This was added to fix dealer issues
    // This was added afterward
    betterUpdateCards();//updates your hand
    checkDealer();
    //updateNumberOfCards();//gets the number of cards everyone has

    //updateStoppage();// checks if anyone has called bs
}

function betterUpdateCards(){
    console.log ("updating cards");
    cardsInHand =0;
    var handString = user.getHand();//gets the hand from the firebase as a string
    var newHand;

    if (typeof handString != "undefined") {//translates the strings to Card objects
        newHand = translateToCards(handString);
    }

    //loops through each of the possible card elements
    for(var i =0;i<MAX_CARDS;i++){
        cardElement = document.getElementById("card" + i);

        //removes the pre-existing elements from the card element
        while(cardElement.firstChild){
            cardElement.removeChild(cardElement.firstChild);
        }

        //adds empty strings if there shouldnt be a card at the element
        if (i >= newHand.length ||newHand[i] == "" ) {
            var node = document.createTextNode("");
            cardElement.appendChild(node);
        }
        //adds a card node to the element
        else{
            cardElement.appendChild(newHand[i].createNode());
            cardsInHand++;
        }

    }
}

//updates the BS and Spot on Buttons
function updateStoppage () {
    var call;
    readFirebase("call", function(snapshot){
        call = snapshot.val().currentCall;
        var node = document.createTextNode (call);
        var element = document.getElementById("call1");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        element.appendChild (node);
    });

    if (call == "" && cardsInHand > 0) {
        document.getElementById("BSButton").style.visibility = "visible";
        document.getElementById("SpotButton").style.visibility = "visible";
        clearCards ();
    }
    else {
        document.getElementById("BSButton").style.visibility = "hidden";
        document.getElementById("SpotButton").style.visibility = "hidden";
        getEveryCard();
    }
}

function getEveryCard () {

    var cardtotal = 0;
    for (var i = 0; i < MAX_PLAYERS; i++) {
        var tempdoc = document.getElementById("user" + i);
        if (tempdoc != null) {

            var text = tempdoc.textContent;
            if (text.indexOf(':') != -1) {
                var handsize;

                var tempusername = text.substring(0, text.indexOf(':') - 1);

                readFirebase("users/" + tempusername, function (snapshot) {
                    var playerhands = snapshot.val().hand;
                    handsize = numCards(playerhands);
                    var cardhand = translateToCards(playerhands);
                    for (var cardnum = 0; cardnum < handsize; cardnum++) {
                        var myNode = document.getElementById("card0" + cardtotal);

                        if(myNode!=null){

                            while (myNode.firstChild) {
                                myNode.removeChild(myNode.firstChild);
                            }
                            myNode.appendChild(cardhand[cardnum].createNode());
                            cardtotal++;
                        }

                    }
                });
            }
            else {
                while (tempdoc.firstChild) {
                    tempdoc.removeChild(tempdoc.firstChild);
                }
            }
        }
    }
    while (cardtotal < 52) {
        var myNode = document.getElementById("card0" + i);
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        cardtotal++;
    }
}

function clearCards () {
    for (var cardtotal = 0; cardtotal < 52; cardtotal++) {
        var myNode = document.getElementById("card0" + cardtotal);
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }
}

//needs to be rewritten to be less awful
function checkConnections () {
    allusers = [];
    readFirebase ("online/", function (snapshot) {
        var snap = snapshot.val().currentusers;
        var i = 0;
        for (userString in snap) {
            if (snapshot.val().currentusers[userString] == true) {

                allusers.push(userString);
                var myNode = document.getElementById("user" + i);
                while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
                }


                readFirebase("users/"+userString, function(snapshot){
                    var handSize = numCards(snapshot.val().hand);
                    myNode.appendChild(document.createTextNode(userString + " : " + handSize));
                });

                //myNode.appendChild(document.createTextNode(userString + " : "));
                i++;
            }
        }
        while (i < MAX_PLAYERS) {
            var myNode = document.getElementById("user" + i);
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            i++;
        }
    });
}

//updates the number of cards each player has
function updateNumberOfCards(){
    for (var i = 0; i < MAX_PLAYERS; i++) {

        var userElement = document.getElementById("user" + i);
        var text = userElement.textContent;
        if(text != ""){//checking for empty elements
            console.log("This has been found - " + text);
            var usernameString = text.substring(0, text.indexOf(':') - 1);

            //appends the length of the hand to the end of the element text
            readFirebase("users/"+usernameString, function(snapshot){
                var handSize = numCards(snapshot.val().hand);
                userElement.textContent = text + handSize;
            });
        }
    }
}

function numCards (hand) {
    var total = 0;
    for (d in hand) {
        if (hand[d].replace(/\s/g, '') != "") {
            total++;
        }
    }
    return total;
}

function translateToCards (hand) {
    var cards = [];
    for (var i = 0; i < hand.length; i++) {
        cards.push (new Card (hand[i].substring(0, hand[i].length-1), hand[i].substring(hand[i].length-1)));
    }
    return cards;
}

function getSelectedOption(sel) {
    var opt;
    for ( var i = 0; i < sel.options.length; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    return opt;
}

function resetCall () { writeFirebase("call", {currentCall:""}); }