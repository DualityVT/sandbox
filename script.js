var clientID = "p740vgguey37jp2ki6qdd61c2bycsv";
var clientSecret = "c02fop8izuq0g7biwe6dgaier2qm0n";
var redirectURL = "https://github.com/DualityVT/sandbox/blob/c3330ecfe59ef637d8793e84db1472c33cd760d3/main.html";


const VALIDATE = "https://id.twitch.tv/oauth2/validate";
const AUTH = "https://id.twitch.tv/oauth2/authorize";
const ISLIVE = "https://api.twitch.tv/kraken/streams/"

function onPageLoad(){
    isLive();
}
function isLive(){
/*

window.location.search.length
^ use this to catch token, and HOST THIS FKING SHIT ON GITHUB

*/
}
function getToken(){
    let url = AUTH;
    url += "?client_id=" + clientID;
    url += "&redirect_uri=" + redirectURL;
    url += "&response_type=token+id_token"
    url += "&scope=openid user_read"
    window.location.href = url;
}