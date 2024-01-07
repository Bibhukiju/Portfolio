// ? global variables
const mySkills = ["Flutter", "React.js", "Node.js", "git and Github"];
const myProjects = [
  {
    title: "Minitsa",
    link: "",
    images:
      "https://figmaelements.com/wp-content/uploads/2020/12/social-media-app-ui-kit.png",
  },
  {
    title: "Serenade sphere",
    link: "",
    images:
      "https://assets.materialup.com/uploads/a65b9cf8-50c1-4186-b38d-ddcd22c51ef1/attachment.jpg",
  },
  {
    title: "Online Election App",
    link: "",
    images:
      "https://cdn.dribbble.com/users/8098835/screenshots/19331840/media/e423c8bef491489316770ccb1944acaf.png?resize=400x0",
  },
];

// ? flags
let selectedPortfolioTabs = "all";
// ? Selectors

const skillHolderDiv = document.querySelector(".skillsHolder");
const skillCanvas = document.querySelector("#skillGraph");
const portfolioTabBar = document.querySelector(".tabBar");
const projectholder = document.querySelector(".projects-holder");

document.addEventListener("DOMContentLoaded", () => {
  drawAxis();
  loadPortfolioTabs(mySkills);
  loadPortfolio();
});

for (let i = 0; i < mySkills.length; i++) {
  const skillDiv = document.createElement("div");
  skillDiv.innerHTML = mySkills[i];
  skillDiv.classList.add("skill-div");
  skillHolderDiv.appendChild(skillDiv);
}

const drawAxis = () => {
  console.log("first");
  const ctx = skillCanvas.getContext("2d");
  ctx.strokeStyle = "#ffffff";

  // Set the origin to the center of the canvas
  ctx.translate(skillCanvas.width / 2, skillCanvas.height / 2);
  ctx.lineWidth = 1;
  // Draw positive X-axis
  ctx.beginPath();
  ctx.moveTo(-skillCanvas.width / 2, 0);
  ctx.lineTo(skillCanvas.width / 2, 0);
  ctx.stroke();

  // Draw positive Y-axis
  ctx.beginPath();
  ctx.moveTo(0, -skillCanvas.height / 2);
  ctx.lineTo(0, skillCanvas.height / 2);
  ctx.stroke();

  // Draw negative X-axis
  ctx.beginPath();
  ctx.moveTo(-skillCanvas.width / 2, 0);
  ctx.lineTo(skillCanvas.width / 2, 0);
  ctx.stroke();

  // Draw negative Y-axis
  ctx.beginPath();
  ctx.moveTo(0, skillCanvas.height / 2);
  ctx.lineTo(0, skillCanvas.height / 2);
  ctx.stroke();

  // Add labels for positive and negative axes
  ctx.fillStyle = "#ffffff";
  // ctx.font = "italic 6pt Calibri";
  ctx.font = "10px Tahoma";
  ctx.fillText("nodejs", skillCanvas.width / 2 - 30, 10);
  ctx.fillText("React.js", -skillCanvas.width / 2 + 5, 10);
  ctx.fillText("Flutter", 5, -skillCanvas.height / 2 + 10);
  ctx.fillText("git and github", 5, skillCanvas.height / 2 - 3);

  ctx.fillStyle = "rgb(11,190,161,0.5)";
  ctx.beginPath();
  ctx.moveTo(0, -skillCanvas.height / 2 + 10);
  ctx.lineTo(skillCanvas.width / 2 - 50, 0);
  ctx.lineTo(0, 30);
  ctx.lineTo(-skillCanvas.width / 2 + 35, 0);
  ctx.closePath();
  ctx.fill();
};

const loadPortfolioTabs = (skills) => {
  skills.unshift("All");
  skills.pop();
  skills.forEach((element) => {
    const tab = document.createElement("div");
    const tabText = document.createElement("p");
    tabText.innerHTML = element;
    tabText.classList.add("primary-text");
    tab.classList.add("portfolio-div");
    tab.appendChild(tabText);
    portfolioTabBar.appendChild(tab);
  });
};

const loadPortfolio = () => {
  console.log(projectholder);
  myProjects.forEach((project) => {
    console.log(project);
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    const projectTitle = document.createElement("p");
    projectTitle.innerHTML = project.title ?? "";
    projectDiv.style.backgroundImage = `url(${project.images})`;
    projectDiv.appendChild(projectTitle);
    projectholder.appendChild(projectDiv);
  });
};
