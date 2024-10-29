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
    // opacity transition effect to make selected project disappear
    let divs = projectContainer.querySelectorAll("div");

    setTimeout(() => {
        for (let i = 0; i < projectIds.length; i++) {
                document.getElementById(projectIds[i]).classList.add("out");
                console.log("out");
        }
        divs.forEach((div) => {
            div.classList.add("out");
        });
    }, 500);

    setTimeout(() => {
    projectIds.forEach((id) => {
        document.getElementById(id).classList.remove("selected");
    });
    setTimeout(() => {
        divs.forEach((div) => {
            div.classList.remove("invisible");
        });
    }, 250);

        divs.forEach((div) => {
            div.classList.remove("out");
        });

        setTimeout(() => {
    for (let i = 0; i < projectIds.length; i++) {
            document.getElementById(projectIds[i]).classList.remove("out");
            console.log("in");
    }
        }, 100); // Small delay to ensure smooth transition
    }, 1000);
}


projectIds.forEach((id) => {
    document.getElementById(id).addEventListener("mouseleave", () => {
        unselectAllProjects();
    });
});