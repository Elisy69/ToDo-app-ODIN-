import { createElement } from "./createElem";
import { UI } from "./UI";

export function createTask(task) {
  UI.TODO = createElement({
    element: "div",
    insertionMethod: "after",
    domLocation: UI.BORDERLINE,
    whatClass: "todo",
    id: task.description,
  });

  UI.TODO.CHECKBOX = createElement({
    element: "input",
    insertionMethod: "append",
    domLocation: UI.TODO,
    whatClass: "checkbox",
  });
  UI.TODO.CHECKBOX.setAttribute("type", "checkbox");

  UI.TODO.TYPE = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: UI.TODO,
    whatClass: "todoType",
    text: task.type,
  });

  UI.TODO.TEXT = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: UI.TODO,
    whatClass: "todoText",
    text: task.description,
  });

  UI.TODO.DATE = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: UI.TODO,
    whatClass: "todoDate",
    text: `Remind on\n ${task.dateToRemind}`,
  });

  UI.TODO.DELETE = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: UI.TODO,
    whatClass: "todoDelete",
    text: "✕",
  });
}
