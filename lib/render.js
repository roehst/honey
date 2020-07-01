import { removeAllChildsNodes } from "./utils";

export const render = (app, root) => {
  const view = app.view;
  const model = app.model;
  const update = app.update;

  removeAllChildsNodes(root);

  const virtualDom = view(model);

  // Depth-first traversal of the virtual DOM
  let stack = [];

  stack.unshift(virtualDom);

  while (stack.length > 0) {
    const current = stack.pop();
    const node = document.createElement(current.tag);

    if (current.text) node.innerText = current.text;
    if (current.value) node.value = current.value;

    if (current.onClick)
      node.addEventListener("click", (e) => {
        const newModel = update(current.onClick(e), model);
        render({ view, update, model: newModel }, root);
      });

      if (current.onInput)
      node.addEventListener("input", (e) => {
        const newModel = update(current.onInput(e), model);
        render({ view, update, model: newModel }, root);
      });      

    root.appendChild(node);

    current.children.forEach((c) => stack.unshift(c));
  }
};
