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
  P: () => PopularMovies
});
var import_index_bb3f10a7 = require("./index-bb3f10a7.js");
var import_MovieCard_cffbd243 = require("./MovieCard-cffbd243.js");
var PopularMovies_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-di4x5w{padding:0 1rem}.popular-movies.svelte-di4x5w{display:flex;width:100%;justify-content:center;flex-wrap:wrap}",
  map: null
};
const PopularMovies = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  let { title } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<a><h3 class="${"svelte-di4x5w"}">${(0, import_index_bb3f10a7.e)(title)}</h3></a>
<div class="${"popular-movies svelte-di4x5w"}">${(0, import_index_bb3f10a7.h)(popular, (movie) => {
    return `${(0, import_index_bb3f10a7.v)(import_MovieCard_cffbd243.M, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
