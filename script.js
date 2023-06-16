const userName = document.getElementById("name");
const image = document.getElementById("img");
const followers = document.getElementById("Followers");
const id = document.getElementById("id");
const Following = document.getElementById("Following");
const pRepos = document.getElementById("pRepos");
const pGist = document.getElementById("pGist");
const userLogin = document.getElementById("userLogin");
const container = document.getElementById("container");
const test = document.getElementById("test");
const form = document.getElementById("myForm");
const userInput = document.getElementById("userInput");
const bio = document.getElementById("bio");
const email = document.getElementById("email");
const twitter = document.getElementById("twitter");
const Location = document.getElementById("Location");
const hire = document.getElementById("hire");

const getUser = (name) => {
  fetch(`https://api.github.com/users/${name}`)
    .then((response) => response.json())
    .then((json) => {
      userLogin.innerHTML = json.login;
      userName.innerHTML = json.name;
      image.src = json.avatar_url;
      followers.innerHTML = json.followers;
    
      id.innerHTML = json.id;
    
      Following.innerHTML = json.following;
    
      pRepos.innerHTML = json.public_repos;

      pGist.innerHTML = json.public_gists;
    
      bio.innerHTML = json.bio
      
      email.innerHTML = json.email;

      hire.innerHTML = json.hireable;

      twitter.innerText = json.twitter_username

      Location.innerText = json.location;


    })
    .catch((err) => {
      console.log((container.innerHTML = "ERROR"));
    });
};

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission
  getUser(userInput.value);
  setTimeout(() => {
    userInput.value = "";
  }, 2000);
});
