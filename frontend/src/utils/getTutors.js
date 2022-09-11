export const getTutors = (subject) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("subject", subject);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:5000/tutors", requestOptions)
      .then(response => response.json())
      .then((result) => {
        return result
      } )
      .catch((error) => {
        return error;
      });
  };
  