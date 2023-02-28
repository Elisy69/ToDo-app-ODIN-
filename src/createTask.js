import { projects } from ".";
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

  UI.TODO.DELETE.addEventListener("click", (task) => {
    let currentProject = projects.find(
      (el) => el.title === UI.PROJECTTITLE.textContent
    );
    let index = currentProject.todos.findIndex(
      (item) => item.description === task.target.parentElement.id
    );
    currentProject.todos.splice(index, 1);
    task.target.parentElement.remove();
  });
}
