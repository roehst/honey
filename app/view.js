import { h } from "../lib/h.js";
export const view = (s) => {

  return h("div", {}, [
    h("p", { text: "Count: " + s.counter }, []),
    h("p", { text: "Square: " + s.counter * s.counter }, []),
    h("button", { text: "+1", onClick: () => ({ action: "ADD" }) }, []),
    h("button", { text: "-1", onClick: () => ({ action: "SUB" }) }, []),
    h(
      "input",
      {
        value: s.set,
        text: s.set,
        onInput: (e) => ({
          action: "CHANGE_SET",
          value: parseFloat(e.target.value),
        }),
      },
      []
    ),
    h("button", { text: "Set", onClick: () => ({ action: "SET" }) }, []),
  ]);
};
