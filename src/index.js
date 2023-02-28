import { defaultLoad } from "./defaultLoad";
import { addTaskHandler } from "./taskHandler";
import { createPopUp } from "./popup";
import { addProjectHandler } from "./addProject";
import { getStoredProgects, loadStoredPorjects } from "./storage_and_JSON";

import "./reset.css";
import "./style.css";

function checkStorage() {
  if (getStoredProgects() !== null) {
    let storedProjects = getStoredProgects();
    loadStoredPorjects(storedProjects);
    return getStoredProgects();
  } else {
    let projects = [];
    defaultLoad(projects);
    return projects;
  }
}

export let projects = checkStorage();
console.log(projects);

createPopUp();
addTaskHandler();
addProjectHandler();
