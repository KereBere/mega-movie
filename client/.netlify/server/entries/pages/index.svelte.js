var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes,
  load: () => load
});
var import_index_bb3f10a7 = require("../../chunks/index-bb3f10a7.js");
var import_PopularMovies_28b3decf = require("../../chunks/PopularMovies-28b3decf.js");
var import_MovieCard_cffbd243 = require("../../chunks/MovieCard-cffbd243.js");
var import_stores_59c84358 = require("../../chunks/stores-59c84358.js");
var SearchMovies_svelte_svelte_type_style_lang = "";
const css = {
  code: ".search.svelte-4ya24b{position:relative;width:30%;margin:1rem}button.svelte-4ya24b{font-size:0.7rem;padding:0rem 1rem;background-color:rgb(96, 110, 201);color:white;font-weight:bold;position:absolute;bottom:50%;right:0;transform:translate(0, 50%);height:100%;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer}input.svelte-4ya24b{width:100%;border:none;font-size:1rem;font-family:'Poppins' sans-serif;outline:none;color:rgb(255, 255, 255);padding:0.5rem, 0.1rem;transition:background 0.75s ease-out;font-weight:bold;background:rgb(63, 63, 63);border-radius:10px;padding:1rem}label.svelte-4ya24b{position:absolute;font-size:0.8rem;top:50%;left:0;transform:translate(0, -50%);color:#fff;padding:0rem 1rem;background:none}",
  map: null
};
const SearchMovies = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  $$result.css.add(css);
  return `<form action="${"POST"}" class="${"search svelte-4ya24b"}">${`<label for="${"search_movie"}" class="${"svelte-4ya24b"}">Search Movie</label>`}
	<input name="${"search_movie"}" type="${"text"}" class="${(0, import_index_bb3f10a7.e)((0, import_index_bb3f10a7.f)("")) + " svelte-4ya24b"}"${(0, import_index_bb3f10a7.g)("value", inputValue, 0)}>
	${``}
</form>`;
});
async function load({ fetch }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${"efaf0b9bf33d3ed3967457d165031a0b"}&language=en-US&page=1`);
  const data = await res.json();
  if (res.ok) {
    return { props: { popular: data.results } };
  }
}
const Routes = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  "efaf0b9bf33d3ed3967457d165031a0b";
  let { popular } = $$props;
  let { title = "Popular Movies" } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `
${(0, import_index_bb3f10a7.v)(SearchMovies, "SearchMovies").$$render($$result, {}, {}, {})}
${(0, import_index_bb3f10a7.v)(import_PopularMovies_28b3decf.P, "PopularMovies").$$render($$result, { popular, title }, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
