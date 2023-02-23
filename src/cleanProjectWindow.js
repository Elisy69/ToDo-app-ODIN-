import { UI } from "./UI";

export function cleanProjectWindow() {
  while (UI.TASKS.hasChildNodes()) {
    UI.TASKS.removeChild(UI.TASKS.lastChild);
  }
}
