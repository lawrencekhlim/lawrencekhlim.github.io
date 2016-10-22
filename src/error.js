/**
 * Created by LawrenceLim on 10/22/16.
 */

window.onerror = function(msg, url, linenumber) {
    console.log('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}