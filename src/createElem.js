export const createElement = ({
  element,
  insertionMethod,
  domLocation,
  whatClass,
  text,
  id,
  value,
}) => {
  const el = document.createElement(element);
  domLocation[insertionMethod](el);
  el.classList.add(whatClass);
  el.textContent = text;
  el.id = id;
  return el;
};
