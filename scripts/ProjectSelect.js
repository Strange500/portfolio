const projectIds = ["project1", "project2", "project3", "project4"];
const projectContainer = document.getElementById("projectContainer");

function selectProject(projectId) {
    let divs = projectContainer.querySelectorAll("div");
    divs.forEach((div) => {
        div.classList.add("invisible");
    });
    projectIds.forEach((id) => {
    document.getElementById(id).classList.remove("selected");
  });
  document.getElementById(projectId).classList.add("selected");
}

function unselectAllProjects() {
    let divs = projectContainer.querySelectorAll("div");
    divs.forEach((div) => {
        div.classList.remove("invisible");
    });
    projectIds.forEach((id) => {
    document.getElementById(id).classList.remove("selected");
  });
}


projectIds.forEach((id) => {
    document.getElementById(id).addEventListener("mouseleave", () => {
        unselectAllProjects();
    });
});