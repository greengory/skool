$(function(){
  $(".remove-student").on("click", (e) => {
    e.preventDefault();
    const studentUsername =  e.currentTarget.dataset.username;
    //Display Confirm Modal
    //Get the users response
    //Query the api to remove a student with the username
    const status = window.confirm("Sure you want to delete this student?");
    if(status) {
     fetch(`http://localhost:3000/api/student/${studentUsername}`, "delete")
      .then((response) => {
        console.log(response);
        window.location.reload();
      }).catch((err) => {
        console.log(err);
      });
    }
  });
})();


function fetch(url, method) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open(method, url);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error("Network Error"));
    };
    req.send();
  });
}
