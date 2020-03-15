require('dotenv/config');

function searchUser() {

  let ajax = new XMLHttpRequest();
  let username = document.getElementById('username');
  let display = document.getElementById('user');
  let client_id = process.env.GITHUB_CLIENT_ID;
  let client_secret = process.env.GITHUB_CLIENT_SECRET;
  let url = "https://api.github.com/users/"
  let params = "?client_id=" + client_id + "&client_secret=" + client_secret;

  ajax.onreadystatechange = function() {
    if (this.readyState == 1) {
      display.innerHTML = "<p>Loading</p>"
    } else if (this.readyState == 4 && this.status == 200) {
      display = formatResponse(this.responseText, display);
    } else {
      display.innerHTML = "<p>User not found, try again</p>"
    }
  };

  ajax.open("GET", url + username.value + params, true);
  ajax.send();
}

function formatResponse(response, display) {
  display.innerHTML = "<p></p>"

  let user = JSON.parse(response);
  let login = document.createElement("p");
  let profile = document.createElement("img");
  let name = document.createElement("p");
  let bio = document.createElement("p");
  let email = document.createElement("p");

  login.appendChild(document.createTextNode(user.login));
  profile.setAttribute("src", user.avatar_url);
  name.appendChild(document.createTextNode(user.name));
  bio.appendChild(document.createTextNode(user.bio));
  email.appendChild(document.createTextNode(user.email));

  display.appendChild(profile);
  display.appendChild(login);
  display.appendChild(name);
  display.appendChild(bio);
  display.appendChild(email);

  return display
}
