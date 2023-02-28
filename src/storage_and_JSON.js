import { storedProjectLoad } from "./projectLoad";

export function storeProjects(projectsToStore) {
  let stringifiedProjects = JSON.stringify(projectsToStore);
  localStorage.setItem("toDoProjects", stringifiedProjects);
}

export function getStoredProgects() {
  let retrievedProjects = localStorage.getItem("toDoProjects");
  return JSON.parse(retrievedProjects);
}

export function loadStoredPorjects(storedProjects) {
  storedProjectLoad(storedProjects[0]);
  let isItForMenuBar = true;
  storedProjects.forEach((project) =>
    storedProjectLoad(project, isItForMenuBar)
  );
}
