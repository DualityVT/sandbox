var clientID = "";
var clientSecret = "";
var redirectURL = "https://dualityvt.github.io/sandbox/";
var token = "";
const VALIDATE = "https://id.twitch.tv/oauth2/validate";
const AUTH = "https://id.twitch.tv/oauth2/authorize";
const ISLIVE = "https://api.twitch.tv/kraken/streams/";

function onPageLoad(){
    let str = window.location.href;
    str = str.slice(37);
    if ( str.length > 0 ){
        str = str.slice(0, str.indexOf("&"));
        token = str;
    }
    if(token != ""){
        isLive();
    }

}

/*
document.getElementById("button").style.backgroundColor = "#00ff00";
document.getElementById("button").innerHTML = "Live";

*/

function onClick(){
    getToken();
}

function isLive(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.twitch.tv/kraken/channel", null, handleIsLive);
}
function handleIsLive(){
    var data = JSON.parse(this.responseText);
    alert(data);
}


function getToken(){
    let cid = document.getElementById("clientID_text").value;
    let url = AUTH;
    url += "?client_id=" + cid;
    url += "&redirect_uri=" + redirectURL;
    url += "&response_type=token+id_token";
    url += "&scope=openid user_read";
    window.location.href = url;
}