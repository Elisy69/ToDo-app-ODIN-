import { UI } from "./UI";
import { createElement } from "./createElem";

export function popupOn() {
  UI.POPUP.classList.add("active");
  UI.OVERLAY.classList.add("active");
}

export function popupOff() {
  UI.POPUP.classList.remove("active");
  UI.OVERLAY.classList.remove("active");
}

export function createPopUp() {
  UI.POPUP = createElement({
    element: "div",
    insertionMethod: "append",
    domLocation: UI.TASKS,
    whatClass: "popup",
    text: "",
    id: "popup",
  });
  UI.OVERLAY = createElement({
    element: "div",
    insertionMethod: "append",
    domLocation: UI.TASKS,
    whatClass: "overlay",
    text: "",
    id: "overlay",
  });

  UI.EXIT = createElement({
    element: "button",
    insertionMethod: "append",
    domLocation: UI.POPUP,
    whatClass: "exitPopUp",
    text: "X",
  });

  UI.REMINDER = createElement({
    element: "div",
    insertionMethod: "append",
    domLocation: UI.POPUP,
    whatClass: "reminder",
  });

  UI.REMINDERTEXT = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: UI.REMINDER,
    whatClass: "reminderText",
    text: "Choose reminder date",
  });
  UI.REMINDERDATE = createElement({
    element: "input",
    insertionMethod: "append",
    domLocation: UI.REMINDER,
    whatClass: "reminderDate",
  });
  UI.REMINDERDATE.setAttribute("type", "date");

  UI.TYPE = createElement({
    element: "div",
    insertionMethod: "append",
    domLocation: UI.POPUP,
    whatClass: "type",
  });

  UI.TYPETEXT = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: UI.TYPE,
    whatClass: "typeText",
    text: "Choose task type",
  });

  UI.TYPESELECT = createElement({
    element: "select",
    insertionMethod: "append",
    domLocation: UI.TYPE,
    whatClass: "typeSelect",
    id: "typeSelect",
  });
  UI.OPTIONONE = createElement({
    element: "option",
    insertionMethod: "append",
    domLocation: UI.TYPESELECT,
  });
  UI.OPTIONONE.setAttribute("value", "💼");

  UI.OPTIONTWO = createElement({
    element: "option",
    insertionMethod: "append",
    domLocation: UI.TYPESELECT,
  });
  UI.OPTIONONE.setAttribute("value", "👨‍👩‍👦");

  UI.BTNNEWTASK = createElement({
    element: "button",
    insertionMethod: "append",
    domLocation: UI.POPUP,
    whatClass: "addNewTaskBtn",
    text: "Add task",
  });

  UI.EXIT.addEventListener("click", () => {
    popupOff();
  });
}
