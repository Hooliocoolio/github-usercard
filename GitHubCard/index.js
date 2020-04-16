/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

let entryPoint = document.querySelector('.cards')

axios.get("http://api.github.com/users/hooliocoolio")
  .then(function (results) {
    const data = gitHubUserCard(results.data)
    entryPoint.append(data);
  })
  .catch(function (error) {
    console.log('failed');
    console.log(error);
  });

// .then(function (results) {
//   // handle success
//   const data = gitHubUserCard(results.data);

//   entryPoint.append(data);
// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/






/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/




/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/


function gitHubUserCard(data) {
  // HTML Elements and the classes
  const userCard = document.createElement("div");
  const avatarImg = document.createElement("img");
  const info = document.createElement("div");
  const realName = document.createElement("h3");
  const userName = document.createElement("p");
  const located = document.createElement("p");
  const profile = document.createElement("p");
  const gitHubUrl = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // Set Classes
  userCard.classList.add('card');
  avatarImg.classList.add('userImg');
  info.classList.add('card-info');
  realName.classList.add('name');
  userName.classList.add('username');
  located.classList.add('location');
  profile.classList.add('profile');
  gitHubUrl.classList.add('ghubUrl');
  followers.classList.add('followers');
  following.classList.add('following');
  bio.classList.add('bio');

  // HTML Elements Structure
  userCard.appendChild(avatarImg);
  userCard.appendChild(info);
  info.appendChild(realName);
  info.appendChild(userName);
  info.appendChild(located);
  info.appendChild(profile);
  info.appendChild(gitHubUrl)
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);


  // Input the data

  avatarImg.src = data.avatar_url;
  realName.textContent = data.name;
  userName.textContent = data.login;
  located.textContent = `Location: ${data.location}`;
  gitHubUrl.setAttribute("href", data.html_url);
  gitHubUrl.textContent = data.html_url;
  profile.textContent = "Profile: ";
  profile.appendChild(gitHubUrl);
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  return userCard;

}



/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
