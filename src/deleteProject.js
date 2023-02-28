import { projects } from ".";
import { cleanProjectWindow } from "./cleanProjectWindow";
import { storeProjects } from "./storage_and_JSON";

export function deleteProject(target) {
  console.log(target.currentTarget.parentNode.firstChild.textContent);
  target.currentTarget.parentNode.remove();
  let index = projects.findIndex(
    (item) =>
      item.title === target.currentTarget.parentNode.firstChild.textContent
  );
  projects.splice(index, 1);
  storeProjects(projects);
  cleanProjectWindow();
}
