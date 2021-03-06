  
// Start Arrays
// Projects Array
const projects = [
  {
    name: 'my-goals',
    description: 'No description',
    date: new Date('2021-01-30T03:32:00'),
  },
  {
    name: 'Team Project',
    description: 'goals for first team project',
    date: new Date('2020-12-01T08:00:00'),
  },
  {
    name: 'Personal Project',
    description: 'No description',
    date: new Date('2021-02-02T12:30:00'),
  },
  {
    name: 'Project 4',
    description: 'No description',
    date: new Date('2021-02-04T09:14:00'),
  },
  {
    name: 'NSS-goals',
    description: 'goals to achieve at NSS',
    date: new Date('2021-02-02T10:00:00'),
  },
];

let sortedProjects = [];
// Organizations Array
const organizations = [
  {
    img: "images/orgImgs/oi_nss.png",
    name: "nss-evening-cohort-14",
    repos: 30,
    topFive: ['productCards','petAdoption','sortingHat','gitSub','instaFam'],
  },
  {
    img: "images/orgImgs/oi_org1.png",
    name: "React Ladies",
    repos: 32,
    topFive: ['searchEngine','dataMapper','weatherApp','snowMap','gpsLocator'],
  },
  {
    img: "images/orgImgs/oi_org2.png",
    name: "TN Code Pros",
    repos: 20,
    topFive: ['trafficMap','liveMusicCalendar','restaurantRater','nhlStatsKeeper','barRaterApp'],
  },
  {
    img: "images/orgImgs/oi_org3.png",
    name: "Fortune 500 Devs",
    repos: 27,
    topFive: ['stockModel','facebookUserStats','tiktokAPI','blackRockFunds','appleOptimizer'],
  },
];
// Packages Array
const packages = [
  {
    name: "Docker",
    description:
      "A software platform used for building applications based on containers — small and lightweight execution environments.",
    iconImgSrc: "packagesIcons/Docker.png",
  },
  {
    name: "Apache Maven",
    description:
      "A default package manager used for the Java programming language and the Java runtime environment.",
    iconImgSrc: "packagesIcons/Apache-Maven.png",
  },
  {
    name: "NuGet",
    description:
      "A free and open source package manager used for the Microsoft development platforms including .NET.",
    iconImgSrc: "packagesIcons/NuGet.png",
  },
  {
    name: "RubyGems",
    description:
      "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
    iconImgSrc: "packagesIcons/RubyGems.png",
  },
  {
    name: "npm",
    description:
      "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
    iconImgSrc: "packagesIcons/npm.png",
  },
  {
    name: "Containers",
    description:
      "A single place for your team to manage Docker images and decide who can see and access your images.",
    iconImgSrc: "packagesIcons/Containers.png",
  },
];
// Repos Array
const repos = [
  {
    name: "example-repo",
    description: "This is an example of what a repository will look like.",
  },
  {
    name: "create-your-own-repo",
    description: "Use the form below to create repositories of your own.",
  },
];

const favoriteRepos = [];

// Pins Array
const pins = [
  {
    name: "🖥️ affirmation-generator",
    description:
      "This app randomly generates an affirmation statement. Built by React.js.",
    id: "aaa",
  },
  {
    name: "🖥️ github-clone",
    description: "Powered by HTML, CSS, Vanilla Javascript, Bootstrap.",
    id: "bbb",
  },
  {
    name: "🖥️ accessibility-hacks",
    description: "Snippets to enhance app accessibility.",
    id: "ccc",
  },
  {
    name: "🖥️ m0nicas-portfolio",
    description: "Personal portfolio site, deployed through Netlify.",
    id: "ddd",
  },
];
// End Arrays

// HTML string of Package cards to be printed to DOM
const packageCardString = (item, i) => {
  return `<div class="card border-secondary m-2 bg-transparent" style="width: 20rem; height: 18rem;" id="${i}">
            <div class="card-body text-secondary">
              <img src="${item.iconImgSrc}" style="width: 3rem; height: 3rem;">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
            </div>
            <div class="d-flex flex-wrap mt-auto mx-auto mb-3" id="package-buttons">
                <button type="button" class="btn btn-secondary m-1">Learn More</button>
                <button type="button" class="btn btn-danger m-1" id="${i}">Delete</button>
            </div>
          </div>`;
};

// Creates new packages after package form is submitted
const packageMaker = (e) => {
  e.preventDefault();

  const name = document.querySelector("#package-name").value;
  const description = document.querySelector("#package-description").value;
  const iconImgSrc = document.querySelector("#package-img-src").value;

  const newPackage = {
    name,
    description,
    iconImgSrc,
  };

  if (!name) {
    alert("Please input name");
  } else {
    packages.push(newPackage);
    createCards(packages, packageCardString, '#package-container');
    document.querySelector('form').reset();
  }
};

// Deletes package when delete button is clicked
const deletePackage = (e) => {
  let targetId = e.target.id;
  let targetType = e.target.type;

  if (targetType === "button") {
    packages.splice(targetId, 1);
  }
  createCards(packages, packageCardString, "#package-container");
};

//Holly - card to print after submitting form
const pinCard = (item) => {
  return `<div class="card text-white bg-dark mb-3 pin-card" style="max-width: 20rem;" id="${item.id}">
      <div class="card-header"></div>
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <div class="card-footer text-center font-weight-bolder justify-content-center" id="pinned">
        <button type="button" class="pin btn-large btn-dark m-1" id="pin-${item.id}">☆</button>
        </div>
        <div class="d-flex flex-wrap mt-auto mx-auto mb-3 justify-content-center" id="pin-buttons">
        <button type="button" class="remove-pin btn btn-danger btn-large m-1" id="remove-${item.id}">Remove pin</button>
        </div>
      </div>
    </div>`;
};
//loop through pin array for each- add EL that takes item.id on click
const removePin = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if (targetType === "button" && targetId.includes("remove")) {
    const id = targetId.split("-")[1];
    const pinToDelete = pins.find((pin) => pin.id === id);
    const deleteIndex = pins.indexOf(pinToDelete); //we have to do this by index

    pins.splice(deleteIndex, 1);
    createCards(pins, pinCard, "#pin-container");
    resetEventListenersForPins()
  }
};

//Without this function, removePin only removes one item from the array. It looks like it works, but it doesn't. SSOOO we need to reset those event listeners so we can run it again!
const resetEventListenersForPins = () => {
  pins.forEach((pin) =>
    document
      .getElementById(pin.id)
      .removeEventListener("click", (e) => removePin(e))
  );
  pins.forEach((pin) =>
    document
      .getElementById(pin.id)
      .addEventListener("click", (e) => removePin(e))
  );
};

//Holly - this will take in the form info + push to pins array; then will reset form
const submitPinnedCard = (e) => {
  e.preventDefault();

  const name = document.querySelector("#text-input").value;
  const description = document.querySelector("#pin-description").value;
  const id = 1;

  const newPin = {
    name,
    description,
    id,
  };

  pins.push(newPin);
  createCards(pins, pinCard, "#pin-container");
  pins.forEach((pin) =>
    document
      .getElementById(pin.id)
      .addEventListener("click", (e) => removePin(e))
  );
  document.querySelector("form").reset();
};

const pinButtonEvent = () => {
  document
    .querySelector("#pin-form")
    .addEventListener("submit", submitPinnedCard);
  // document.querySelector(".card").addEventListener("click", (e) => {
  //   console.log(e);
  //   removePin(e); 
  // });
  pins.forEach((pin) =>
    document
      .getElementById(pin.id)
      .addEventListener("click", (e) => removePin(e)) 
  );
};

// Print to DOM function
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// Create card function
const createCards = (arr, card, id) => {
  let domString = "";

  for (let [i, item] of arr.entries()) {
    domString += card(item, i);
  }
  printToDom(id, domString);
};

// Start Create Profile Card
const profileString = `<!-- Profile -->
<!-- Picture -->
<img
  src="images/profileImgs/Monica.png"
  class="img-fluid rounded-circle"
  alt="profile picture"
  height="200"
  width="200"
/>
<!-- Name -->
<h4>Monica Powell</h4>
<!-- Git handle -->
<p>M0nica</p>
<!-- Blurb -->
<p>
  Building tech to elevate people. Founder of React Ladies a community for
  React JS developers.
</p>
<!-- Buttons? -->
<!-- Stats? -->
<!-- Contact info -->
<p>
  <img src="images/profileImgs/pi_location.png" alt="pin drop image" />New York, New
  York<br/>
  <img
    src="images/profileImgs/pi_email.png"
    alt="emil image"
  />github@aboutmonica.com<br />
  <img
    src="images/profileImgs/pi_link.png"
    alt="chain link image"
  />https://www.aboutmonica.com<br />
  <img src="images/profileImgs/pi_twitter.png" alt="twitter bird image" />@indigitalcolor
</p>
<!-- Highlights -->
<h5>Highlights</h5>
<p>
  <img
    src="images/profileImgs/pi_asterisk.png"
    alt="asterisk image"
  />Arctic Code Vault Contributor<br />
  <img
    src="images/profileImgs/pi_fullStar.png"
    alt="image of solid star"
  />GitHub Star<br />
  <img
    src="images/profileImgs/pi_hollowStar.png"
    alt="image of hollowed star"
  />PRO
</p>
<!-- Organizations -->
  <!-- Print Images of Organizations Object Here -->
  <div></div>
<!-- Sponsors -->
  <!-- Print Images of Sponsors Object Here -->`;

const repoCard = (
  item
) => `<div class="repo-card w-100 bottom-border" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.description}</p>
    </div>
  </div>`;

const buildReposPage = () => {
  createCards(repos, repoCard, "#reposContainer");
};

const repoFormSubmit = (e) => {
  e.preventDefault();

  const repoName = document.querySelector("#repoName").value;
  const repoDescription = document.querySelector("#repoDescription").value;

  document.querySelector("#repoName").value = "";
  document.querySelector("#repoDescription").value = "";

  const newRepo = {
    name: repoName,
    description: repoDescription,
  };

  repos.push(newRepo);
  buildReposPage();
};

const repoEvents = () => {
  document
    .querySelector("#repoForm")
    .addEventListener("submit", repoFormSubmit);
};

// End Create Profile Card

// MG - Start Create Organizations Cards
// complex-data function
const favRepoString = (arr) => {
  let string = "Highlighted Repos:   ";
  for (i = 0; i < arr.length; i++) {
    string += `(${i+1})${arr[i]} `;
  }
  return string;
};

// create cards
const orgCard = (item, i) => {
  let printFavs = favRepoString(item.topFive);
  return `<div class="card bg-transparent">
            <div class="card-body d-flex flex-row border border-2 border-dark rounded">
              <div>
                <img src=${item.img} alt="${item.name} logo">
              </div>
              <div class="text-center align-self-center px-2">
                <h6 class="card-subtitle" style="color:#58A6FF">${item.name}</h6>
              </div>
              <div class="align-self-center" style="font-size:13px">  
                member and collaborator on ${item.repos} repositories
                <br> ${printFavs}
              </div>
              <button id = "${i}" type="button" class="btn btn-dark btn-sm ml-3 ms-auto" style="color:#C9D1D4">Leave</button>
            </div>    
          </div>`;
};
// MG - End Create Organizations Cards
// MG - Start Org Page Functions
// Org Page Functions

// Toggle Form Display
const toggleOrgForm = (e) => {
  const formStatus = document.querySelector("#org-form-container");

  if (formStatus.style.display == "none") {
    formStatus.style.display = "block";
  } else if (formStatus.style.display == "block") {
    formStatus.style.display = "none";
  }
};

// Submit Org Form
const submitOrgForm = (e) => {
  // Prevent page refresh from form submission
  e.preventDefault();
  // Grab form name value
  const formName = document.querySelector("#org-text-input").value;
  // Create img array
  const imgArr = [
    "images/orgImgs/oi_nss.png",
    "images/orgImgs/oi_org1.png",
    "images/orgImgs/oi_org2.png",
    "images/orgImgs/oi_org3.png",
  ];
  // Generate random repos between 35 and 20
  const randomRepos = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
  // Create new object properties
  const img = imgArr[Math.floor(Math.random() * imgArr.length)];
  const name = formName;
  const repos = randomRepos;
  // Create generic top-five repos
  const topFive = ['favRepo1','favRepo2','favRepo3','favRepo4','favRepo5'];
  // Create new object
  const obj = {
    img,
    name,
    repos,
    topFive,
  };
  // Push object into organizations array
  organizations.push(obj);
  // Rebuild the DOM
  createCards(organizations, orgCard, "#org-objects-container");
  // Reset the form fields
  document.querySelector("form").reset();
};

// Remove Org From Page
const removeOrg = (e) => {
  // Capture type and Id of button click
  const targetType = e.target.type;
  const targetId = e.target.id;
  // Remove that specific element from array
  if (targetType === "button") {
    organizations.splice(targetId, 1);
  }
  // Re-print organizations array
  createCards(organizations, orgCard, "#org-objects-container");
};

// Listen for Button Clicks
const orgButtonEvents = () => {
  const fileName = location.pathname.split("/").slice(-1);
  if (fileName[0] === "organizations.html") {
    document
      .querySelector("#new-org-btn")
      .addEventListener("click", toggleOrgForm);
    document.querySelector("form").addEventListener("submit", submitOrgForm);
    document
      .querySelector("#org-objects-container")
      .addEventListener("click", removeOrg);
  }
};
// MG - End Org Page Functions

// Gabby - projects page
const projectCards = (item) => {
  return `<div class="card-body">
      <div>
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text fs-6">${item.date}</p>
      </div>
      <p class="card-text">${item.description}</p>
      <p class="card-text" id="dots">...</p>
    </div>
</div>`;
};

const projectsForm = () => {
  let formString = `<form>
  <div class="mb-3">
    <div class='form-text fs-3 new-project'>Create a new project</div>
    <div class='form-text'>Coordinate, track and update all in one place, so projects stay transparent and on schedule</div>
    <hr/>
    <label for="projectsForm" class="form-label mt-2 fw-bold new-project">Project board name</label>
    <input type="text" class="form-control bg-transparent border border-secondary w-50 text-secondary" id="project-board-name" aria-describedby="projectBoardNameHelp" placeholder="Example" required>
  </div>
  <div class="mb-3">
    <label for="projectDescription" class="form-label fw-bold new-project">Description (optional)</label>
    <input type="text" class="form-control bg-transparent border border-secondary pb-5 text-secondary" id="project-description">
  </div>
  <button type="submit" class="btn btn-success">Create project</button>
</form>`;

  printToDom("#project-form", formString);
  document.querySelector("form").addEventListener("submit", projectsFormInfo);
};

// Gabby - updating projects when form is filled in
const projectsFormInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector('#project-board-name').value;
  const description = document.querySelector('#project-description').value;
  const date = new Date();

  const obj = {
    name,
    description,
    date,
  };
  projects.push(obj);
  createCards(projects, projectCards, '#project-container');
  document.querySelector('form').reset();
  document.querySelector('#sort-btn').addEventListener('click', sortProjectCards);
};
//Gabby stretch goal - sort cards 
const sortProjectCards = (e) => {
  if (e.target.id === 'sort-btn') {
    sortedProjects = projects.sort((a, b) => b.date - a.date);
  };
  createCards(sortedProjects, projectCards, '#project-container');
};



// Runs page's functions
const pageInit = () => {
  const fileName = location.pathname.split("/").slice(-1);

  if (fileName[0] === "repos.html") {
    buildReposPage();
    repoEvents();
  } else if (fileName[0] === "") {
    createCards(pins, pinCard, "#pin-container");
    pinButtonEvent();
  } else if (fileName[0] === "packages.html") {
    createCards(packages, packageCardString, "#package-container");
    document
      .querySelector("#create-package")
      .addEventListener("click", packageMaker);
    document
      .querySelector('#package-container')
      .addEventListener('click', deletePackage);  
  } else if (fileName[0] === 'organizations.html') {
    createCards(organizations, orgCard, '#org-objects-container');
  } else if (fileName[0] === 'projects.html') {
    createCards(projects, projectCards, '#project-container');
    document.querySelector('#sort-btn').addEventListener('click', sortProjectCards);
    projectsForm();
  }
};

// Init function
const init = () => {
  printToDom("#profile-card", profileString);
  pageInit();
  orgButtonEvents();
};

init();
