var clientID = "";
var clientSecret = "";
var redirectURL = "https://dualityvt.github.io/sandbox/";
var token = "";

const VALIDATE = "https://id.twitch.tv/oauth2/validate";
const AUTH = "https://id.twitch.tv/oauth2/authorize";
const ISLIVE = "https://api.twitch.tv/kraken/streams/"

function onPageLoad(){
    getToken();
}
function isLive(){
/*

window.location.search.length
^ use this to catch token, and HOST THIS FKING SHIT ON GITHUB

*/
}
function getToken(){
    let cid = document.getElementById("clientID_text").value;
    let url = AUTH;
    url += "?client_id=" + cid;
    url += "&redirect_uri=" + redirectURL;
    url += "&response_type=token+id_token"
    url += "&scope=openid user_read"
    window.location.href = url;
}