import { d as bind_props, c as pop, p as push } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  $$payload.out += `<h1>Hello World</h1> <p>Backend status: ${escape_html(data.serverStatus.message)}</p>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
