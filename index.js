function searchUser() {

  let ajax = new XMLHttpRequest();
  let username = document.getElementById('username');
  let display = document.getElementById('user');
  let client_id = "<your-github-client-id>";
  let client_secret = "<your-github-client-secret>";
  let url = "http://api.github.com/users/"
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
  let name = document.createElement("h1");
  let bio = document.createElement("p");
  let link = document.createElement("a");

  login.appendChild(document.createTextNode(user.login));
  login.setAttribute("class", "title");
  profile.setAttribute("src", user.avatar_url);
  name.appendChild(document.createTextNode(user.name));
  bio.appendChild(document.createTextNode(user.bio));
  link.setAttribute("href", user.html_url);
  link.appendChild(document.createTextNode('Link to Github'));

  display.appendChild(profile);
  display.appendChild(name);
  display.appendChild(login);
  display.appendChild(bio);
  display.appendChild(link);

  return display
}
