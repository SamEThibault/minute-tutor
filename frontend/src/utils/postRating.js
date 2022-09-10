export const postRating = (username, newRating) =>
{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("rating", newRating);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    fetch("localhost:5000/ratings", requestOptions)
    .then(response => response.json())
    .then((result) => {
        return result.rating
    })
    .catch(error => console.log('error', error));
}