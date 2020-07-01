import { render } from "./lib/render";
import { update } from "./app/update";
import { view } from "./app/view";
import { model } from "./app/model";

render(
  {
    view: view,
    update: update,
    model: model,
  },
  document.getElementById("root")
);
