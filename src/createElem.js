export const createElement = ({
  element,
  insertionMethod,
  domLocation,
  whatClass,
  text,
}) => {
  const el = document.createElement(element);
  domLocation[insertionMethod](el);
  el.classList.add(whatClass);
  el.textContent = text;
  return el;
};

export const loadPage = () => {
  console.log("Page loading...");
  const header = createElement({});
};
