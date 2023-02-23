export const projectFactory = (title, description) => {
  const todos = [];

  return { title, description, todos };
};

export const toDoFactory = (description, dateToRemind, type, checkList) => {
  return { description, dateToRemind, type, checkList };
};
