function setDealerVisibility () {
    if (!user.isDealer) {
        document.getElementById("dealer").style.visibility = "hidden";
        document.getElementById("DealCards").style.visibility = "hidden";
    }
    else {
        readFirebase("call", function(snapshot) {
            if (snapshot.val().currentCall === "") {
                document.getElementById("DealCards").style.visibility = "hidden";
            }
            else {
                document.getElementById("DealCards").style.visibility = "visible";
            }
        });
        for (var i = 0; i < maxplayers; i++) {
            var optionbar = document.getElementById("user"+i);
            if (optionbar.firstChild != null) {
                document.getElementById("playercards"+i).style.visibility = "visible";
            }
            else {
                document.getElementById("playercards"+i).style.visibility = "hidden";
            }

        }
    }
}

function checkDealer () { // this function checks whether the dealer has been selected
    console.log ("Dealer check.");
    readFirebaseOnce ("dealer", function (snapshot) {
        var currentdealer = snapshot.val().player; // gets the dealer name
        console.log (currentdealer);
        if (currentdealer === "") { // if nobody is the dealer, then the current player
            // is the dealer
            writeFirebase ("dealer", {player:username});
            user.setDealer (true);
        }
        else if (currentdealer === username) {
            user.setDealer (true);
        }
        else {
            user.setDealer (false);
        }
        setDealerVisibility();
    });
}

function dealCards () {
    resetCall();
    var handsizedictionary = {};
    for (var i = 0; i < maxplayers; i++) {
        var tempdoc = document.getElementById("user" + i);
        if (tempdoc != null && tempdoc.textContent != "") {
            var text = tempdoc.textContent;

            var handsize = document.getElementById("playercards" + i);
            var playerusername = text.substring(0, text.indexOf(':') - 1);
            console.log (getSelectedOption(handsize).value);
            handsizedictionary[playerusername] = getSelectedOption(handsize).value;

        }
    }
    user.dealHand(handsizedictionary);
}