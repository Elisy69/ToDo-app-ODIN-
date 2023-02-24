import { projects } from ".";
import { cleanProjectWindow } from "./cleanProjectWindow";
import { projectLoad } from "./projectLoad";
import { createPopUp } from "./popup";
import { addTaskHandler } from "./taskHandler";
import { UI } from "./UI";

export function selectProject(target) {
  let projectsInMenu = document.querySelectorAll(".project");
  console.log(projectsInMenu);
  console.log(UI.PROJECTMENU);
  target.currentTarget.classList.add("selected");
  cleanProjectWindow();
  let currentProject = projects.find(
    (el) => el.title === target.currentTarget.textContent
  );
  let isItSelector = true;
  projectLoad(currentProject, isItSelector);
  createPopUp();
  addTaskHandler();
}
