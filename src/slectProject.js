import { projects } from ".";
import { cleanProjectWindow } from "./cleanProjectWindow";
import { projectLoad } from "./projectLoad";
import { createPopUp } from "./popup";
import { addTaskHandler } from "./taskHandler";
import { createTask } from "./createTask";

export function selectProject(target) {
  let projectsInMenu = document.querySelectorAll(".projectButton");
  projectsInMenu.forEach((project) => {
    project.classList.remove("selected");
  });
  target.currentTarget.classList.add("selected");
  cleanProjectWindow();
  let currentProject = projects.find(
    (el) => el.title === target.currentTarget.textContent
  );
  let isItSelector = true;

  projectLoad(currentProject, isItSelector);
  createPopUp();
  addTaskHandler();
  currentProject.todos.forEach((task) => {
    createTask(task);
  });
}
