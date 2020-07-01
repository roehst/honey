export const removeAllChildsNodes = (p) => {
  while (p.firstChild) {
    p.removeChild(p.firstChild);
  }
};
