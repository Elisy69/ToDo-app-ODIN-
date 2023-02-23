import { defaultLoad } from "./defaultLoad";
import { addTaskHandler } from "./taskHandler";
import { createPopUp } from "./popup";
import { addProjectHandler } from "./addProject";
import "./reset.css";
import "./style.css";

export const projects = [];
defaultLoad();
createPopUp();
addTaskHandler();
addProjectHandler();
