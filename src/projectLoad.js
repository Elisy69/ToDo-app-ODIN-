import { createElement } from "./createElem";
import { selectProject } from "./slectProject";
import { UI } from "./UI";
import PlusIcon from "./plus2.svg";
import MinusIcon from "./minus.svg";
import { deleteProject } from "./deleteProject";

export const projectLoad = (project, isItSelector) => {
  if (isItSelector !== true) {
    UI.PROJECT_BUTTON = createElement({
      element: "li",
      insertionMethod: "prepend",
      domLocation: UI.MENUBAR,
      whatClass: "projectButton",
    });

    UI.PROJECT_TEXT = createElement({
      element: "span",
      insertionMethod: "append",
      domLocation: UI.PROJECT_BUTTON,
      whatClass: "project",
      text: project.title,
    });
    UI.PROJECT_BUTTON.addEventListener("click", selectProject);
    UI.DELETE_PROJECT = createElement({
      element: "img",
      insertionMethod: "append",
      domLocation: UI.PROJECT_BUTTON,
      whatClass: "minus",
    });
    UI.DELETE_PROJECT.src = MinusIcon;
    UI.DELETE_PROJECT.addEventListener("click", deleteProject);
  } else {
  }

  UI.PROJECTTITLE = createElement({
    element: "h2",
    insertionMethod: "append",
    domLocation: UI.TASKS,
    whatClass: "projectTitle",
    text: project.title,
  });

  UI.PROJECTDESCRIPTION = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: UI.TASKS,
    whatClass: "projectDescription",
    text: project.description,
  });

  UI.BORDERLINE = createElement({
    element: "div",
    insertionMethod: "append",
    domLocation: UI.TASKS,
    whatClass: "border",
  });

  UI.TASKTEXT = createElement({
    element: "textarea",
    insertionMethod: "append",
    domLocation: UI.TASKS,
    whatClass: "taskAddText",
  });
  UI.TASKTEXT.setAttribute(
    "placeholder",
    "Write your task here and press the plus button below..."
  );
  UI.TASKTEXT.setAttribute("rows", "2");
  UI.TASKTEXT.setAttribute("cols", "40");

  UI.ADDTASK = createElement({
    element: "img",
    insertionMethod: "append",
    domLocation: UI.TASKS,
    whatClass: "addTaskBtn",
  });

  UI.ADDTASK.src = PlusIcon;
};

export const storedProjectLoad = (project, isItForMenuBar) => {
  if (isItForMenuBar == undefined) {
  } else {
    UI.PROJECT_BUTTON = createElement({
      element: "li",
      insertionMethod: "prepend",
      domLocation: UI.MENUBAR,
      whatClass: "projectButton",
    });

    UI.PROJECT_TEXT = createElement({
      element: "span",
      insertionMethod: "append",
      domLocation: UI.PROJECT_BUTTON,
      whatClass: "project",
      text: project.title,
    });
    UI.PROJECT_BUTTON.addEventListener("click", selectProject);
    UI.DELETE_PROJECT = createElement({
      element: "img",
      insertionMethod: "append",
      domLocation: UI.PROJECT_BUTTON,
      whatClass: "minus",
    });
    UI.DELETE_PROJECT.src = MinusIcon;
    UI.DELETE_PROJECT.addEventListener("click", deleteProject);
  }
  if (isItForMenuBar !== true) {
    UI.PROJECTTITLE = createElement({
      element: "h2",
      insertionMethod: "append",
      domLocation: UI.TASKS,
      whatClass: "projectTitle",
      text: project.title,
    });

    UI.PROJECTDESCRIPTION = createElement({
      element: "span",
      insertionMethod: "append",
      domLocation: UI.TASKS,
      whatClass: "projectDescription",
      text: project.description,
    });

    UI.BORDERLINE = createElement({
      element: "div",
      insertionMethod: "append",
      domLocation: UI.TASKS,
      whatClass: "border",
    });

    UI.TASKTEXT = createElement({
      element: "textarea",
      insertionMethod: "append",
      domLocation: UI.TASKS,
      whatClass: "taskAddText",
    });
    UI.TASKTEXT.setAttribute(
      "placeholder",
      "Write your task here and press the plus button below..."
    );
    UI.TASKTEXT.setAttribute("rows", "2");
    UI.TASKTEXT.setAttribute("cols", "40");

    UI.ADDTASK = createElement({
      element: "img",
      insertionMethod: "append",
      domLocation: UI.TASKS,
      whatClass: "addTaskBtn",
    });

    UI.ADDTASK.src = PlusIcon;
  } else {
  }
};
