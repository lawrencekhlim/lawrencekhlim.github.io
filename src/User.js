/**
 * Created by LawrenceLim on 10/21/16.
 */

function User (username) {
    this.username = username;
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

}



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
            hand.append(deck.deal());
        }
        if (this.username == key) {
            dict = {
                "hand":deck, "isDealer":true
            }
        }
        else {
            dict = {
                "hand":deck, "isDealer":false
            }
        }
        writeFirebase ("users/"+key, dict);
    }
}
