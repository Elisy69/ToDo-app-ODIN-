import { toDoFactory } from "./factories";
import { UI } from "./UI";
import { popupOn, popupOff } from "./popup";
import { projects } from "./index";
import { createTask } from "./createTask";
import { format } from "date-fns";
import { storeProjects } from "./storage_and_JSON";

export function addTaskHandler() {
  UI.ADDTASK.addEventListener("click", () => {
    let task = toDoFactory("", "", "", false);
    if (UI.TASKTEXT.value === "") {
    } else {
      popupOn();
      task.description = UI.TASKTEXT.value;
      projects.forEach((project) => {
        if (project.title === UI.PROJECTTITLE.textContent) {
          project.todos.push(task);
        }
      });
    }
  });
  UI.BTNNEWTASK.addEventListener("click", () => {
    if (UI.REMINDERDATE.value === "" || UI.TYPESELECT.value === "") {
    } else {
      let currentProject = projects.find(
        (el) => el.title === UI.PROJECTTITLE.textContent
      );
      let currentTask = currentProject.todos.find(
        (task) => task.description === UI.TASKTEXT.value
      );
      let formattedDate = format(new Date(UI.REMINDERDATE.value), "do LLL");
      console.log(formattedDate);
      currentTask.dateToRemind = formattedDate;
      currentTask.type = UI.TYPESELECT.value;
      createTask(currentTask);
      popupOff();
      storeProjects(projects);
      UI.TASKTEXT.value = "";
    }
  });
}
