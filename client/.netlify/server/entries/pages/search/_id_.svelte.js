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
  default: () => U5Bidu5D,
  load: () => load
});
var import_index_bb3f10a7 = require("../../../chunks/index-bb3f10a7.js");
var import_MovieCard_cffbd243 = require("../../../chunks/MovieCard-cffbd243.js");
var import_stores_59c84358 = require("../../../chunks/stores-59c84358.js");
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: ".searched-movies.svelte-15asrbd{display:grid;grid-template-columns:repeat(auto-fit, minmax(175px, 1fr));grid-column-gap:1rem;grid-row-gap:1rem}",
  map: null
};
async function load({ fetch, params }) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=efaf0b9bf33d3ed3967457d165031a0b&language=en-US&query=${params.id}&page=1&include_adult=true`);
  const data = await res.json();
  if (res.ok) {
    return { props: { searchedMovie: data.results } };
  }
}
const U5Bidu5D = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  let { searchedMovie } = $$props;
  if ($$props.searchedMovie === void 0 && $$bindings.searchedMovie && searchedMovie !== void 0)
    $$bindings.searchedMovie(searchedMovie);
  $$result.css.add(css);
  return `<div class="${"searched-movies svelte-15asrbd"}">${(0, import_index_bb3f10a7.h)(searchedMovie, (movie) => {
    return `${(0, import_index_bb3f10a7.v)(import_MovieCard_cffbd243.M, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
