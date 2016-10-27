/**
 * Created by LawrenceLim on 10/21/16.
 */

function User (username) {
    this.username = username;
    this.isDealer = false;
    console.log ("The user "+username+" has been created.");

    this.setDealer = setDealer;
    this.getHand = getHand;
    this.writeFirebase = writeFirebase;
    this.setUsername = setUsername;
    this.dealHand = dealHand;
}


function setUsername (username) {
    this.username = username;
}


function checkDealer (list) {
    readFirebase("dealer/", function(snapshot){
        newhand = snapshot.val().player;
    });
}

function isPlayerDealer () { return isDealer; }


function setDealer (isDealer) { this.isDealer = isDealer; };

function getHand () {
    var newhand;
    readFirebase("users/"+this.username, function(snapshot){
        newhand = snapshot.val().hand;
    });
    return newhand;
};

function writeToFirebase () {
    var dict = { "hand":this.hand, "isDealer":this.isDealer };
    writeFirebase("users/"+this.username, dict);
};

function dealHand (dictionary) {
    var deck;
    deck = new Stack();
    deck.makeDeck(1);
    deck.shuffle(1);
    var dict, hand;
    for (var key in dictionary) {
        hand = [];
        for (var i = 0; i < dictionary[key]; i++) {
            hand.push(deck.deal().toString());
        }
        if (dictionary[key] == 0) {
            hand.push ("");
        }
        if (this.username == key) {
            dict = {
                "hand":hand, "isDealer":true
            }
        }
        else {
            dict = {
                "hand":hand, "isDealer":false
            }
        }
        writeFirebase ("users/"+key, dict);
    }
}
