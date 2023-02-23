import { createElement } from "./createElem";
import { projectFactory } from "./factories";
import { UI } from "./UI";
import PlusIcon from "./plus2.svg";
import { projectLoad } from "./projectLoad";
import { projects } from "./index";

export const defaultLoad = () => {
  console.log("Page loading...");

  const firstProject = projectFactory(
    "Default Project",
    "This is your first project! Try adding some tasks below."
  );

  projectLoad(firstProject);

  projects.push(firstProject);
};
