import { projectFactory } from "./factories";
import { createPopUp } from "./popup";
import { UI } from "./UI";
import { createElement } from "./createElem";
import { projects } from "./index";
import { cleanProjectWindow } from "./cleanProjectWindow";
import { projectLoad } from "./projectLoad";
import { addTaskHandler } from "./taskHandler";
import { storeProjects } from "./storage_and_JSON";

export function addProjectHandler() {
  UI.ADDPROJECT.addEventListener("click", () => {
    cleanProjectWindow();
    initiateNewProjectForm();
    UI.SUBMITNEWPROJECT.addEventListener("click", () => {
      let project = projectFactory(
        UI.TITLEFORM.value,
        UI.DESCRIPTIONFORM.value
      );
      projects.push(project);
      console.log(projects);
      cleanProjectWindow();
      projectLoad(project);
      createPopUp();
      addTaskHandler();
      storeProjects(projects);
    });
  });
}

function initiateNewProjectForm() {
  UI.TITLEFORM = createElement({
    element: "textarea",
    insertionMethod: "append",
    domLocation: UI.TASKS,
    whatClass: "titleForm",
  });
  UI.TITLEFORM.setAttribute("placeholder", "Project title...");

  UI.DESCRIPTIONFORM = createElement({
    element: "textarea",
    insertionMethod: "append",
    domLocation: UI.TASKS,
    whatClass: "descriptionForm",
  });
  UI.DESCRIPTIONFORM.setAttribute(
    "placeholder",
    "Enter project description here"
  );
  UI.SUBMITNEWPROJECT = createElement({
    element: "button",
    insertionMethod: "append",
    domLocation: UI.TASKS,
    whatClass: "submitProjectBtn",
    text: "Submit project",
  });
}
