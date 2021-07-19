var clientID = "";
var clientSecret = "";
var redirectURL = "https://dualityvt.github.io/sandbox/";
var token = "";

const VALIDATE = "https://id.twitch.tv/oauth2/validate";
const AUTH = "https://id.twitch.tv/oauth2/authorize";
const ISLIVE = "https://api.twitch.tv/kraken/streams/";

function onPageLoad(){
    let str = window.location.search;
    if ( str != redirectURL ){
        str = str.slice(str.indexOf("#"), str.indexOf("&"));
        alert("yep" + str); 
    }
}

function onClick(){
    getToken();
}
//function isLive(){}
/*
url example:    
    #access_token=rorq1oav1vcd34xnrcibfmpdl6jp4o
    &id_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEifQ.eyJhdWQiOiJwNzQwdmdndWV5MzdqcDJraTZxZGQ2MWMyYnljc3YiLCJleHAiOjE2MjY3MDAxMDAsImlhdCI6MTYyNjY5OTIwMCwiaXNzIjoiaHR0cHM6Ly9pZC50d2l0Y2gudHYvb2F1dGgyIiwic3ViIjoiMTY1NTUxNjkyIiwiYXRfaGFzaCI6ImExUEFwdVRFdXZqUklHc2VOUzhWb1EiLCJhenAiOiJwNzQwdmdndWV5MzdqcDJraTZxZGQ2MWMyYnljc3YiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJjdXRlYmF0XyJ9.Hw1i9KhfXk28kSjmnv7vOIikxgZ23jUcnpAGP6DKFcommoFhZ7qYQqshsnHwZWab2T_JAsg5_QcTu3Td3SoTFHRqoIn8Agkod5eeQq7fu00RDDiJaV6ecnm583sytvAxV5peO9Oqy0ZiP2x8-EDC6qYNSCGjEkLiWiK4vdjhEpmDOg1qWxWSXUV6bhJ6sLYDYxfCcaA-vvsPYYJqNP5ls3bQM5scxy91fmqjIBhsLjCobRI2BnwO79UZpFcNLkSMSzssfuRP_vnxZmlnyx8Ik68a_Ezy5h6FaUGbaBY4oeIviCKmNOxrY4EC9vK7DIqGEDYC_1tctAdQGaebItroDg
    &scope=openid+user_read
    &token_type=bearer

Access token are in a URL rn, catch it from there, and use it!
window.location.search.length
^ use this to catch token

*/

function getToken(){
    let cid = document.getElementById("clientID_text").value;
    let url = AUTH;
    url += "?client_id=" + cid;
    url += "&redirect_uri=" + redirectURL;
    url += "&response_type=token+id_token";
    url += "&scope=openid user_read";
    window.location.href = url;
}