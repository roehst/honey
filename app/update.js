export const update = (message, { counter, set }) => {
  switch (message.action) {
    case "ADD":
      return { counter: counter + 1, set: set };
    case "SUB":
      return { counter: counter - 1, set: set };
    case "CHANGE_SET":
      return { counter: counter, set: message.value };
    case "SET":
      return { counter: set, set: set };
  }
};
