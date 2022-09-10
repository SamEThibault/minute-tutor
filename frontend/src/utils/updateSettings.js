export const updateSettings = (username, age, zoomLink, userType, tags, 
    gender, language, expertise, email) => {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("username", username);
urlencoded.append("age", age);
urlencoded.append("zoomLink", zoomLink);
urlencoded.append("userType", userType);
urlencoded.append("tags", tags);
urlencoded.append("gender", gender);
urlencoded.append("language", language);
urlencoded.append("expertise", expertise);
urlencoded.append("email", email);
urlencoded.append("username", username);

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: urlencoded,
redirect: 'follow'
};

fetch("localhost:5000/settings", requestOptions)
.then(response => response.json())
.then((result) => {
return result.status
} )
.catch((error) => {
return error;
});
};