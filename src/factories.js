export const projectFactory = (title, description, toDoList) => {
  return { title, description, toDoList };
};

export const toDoFactory = (description, dateToRemind, type, checkList) => {
  return { description, dateToRemind, type, checkList };
};
