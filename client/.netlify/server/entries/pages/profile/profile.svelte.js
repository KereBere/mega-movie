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
  default: () => Profile,
  title: () => title
});
var import_index_bb3f10a7 = require("../../../chunks/index-bb3f10a7.js");
var import_stores_59c84358 = require("../../../chunks/stores-59c84358.js");
var import_PopularMovies_28b3decf = require("../../../chunks/PopularMovies-28b3decf.js");
var import_MovieCard_cffbd243 = require("../../../chunks/MovieCard-cffbd243.js");
var profile_svelte_svelte_type_style_lang = "";
const css = {
  code: ".profile.svelte-1rqpw86{position:relative;width:100%;height:70px;background-color:red;display:flex;align-items:center;border-radius:25px}img.svelte-1rqpw86{position:absolute;left:-40px;top:-15px}.user.svelte-1rqpw86{margin:0 auto 0 70px}a.svelte-1rqpw86{margin-right:15px;font-size:15px;font-weight:700}",
  map: null
};
const title = "Favorite Movies";
const Profile = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isAuth;
  let $userData, $$unsubscribe_userData;
  let $popular, $$unsubscribe_popular;
  $$unsubscribe_isAuth = (0, import_index_bb3f10a7.a)(import_stores_59c84358.i, (value) => value);
  $$unsubscribe_userData = (0, import_index_bb3f10a7.a)(import_stores_59c84358.u, (value) => $userData = value);
  $$unsubscribe_popular = (0, import_index_bb3f10a7.a)(import_stores_59c84358.p, (value) => $popular = value);
  $$result.css.add(css);
  $$unsubscribe_isAuth();
  $$unsubscribe_userData();
  $$unsubscribe_popular();
  return `<div class="${"profile svelte-1rqpw86"}"><img src="${"/profile.png"}" alt="${""}" class="${"svelte-1rqpw86"}">
	<ul class="${"user svelte-1rqpw86"}"><li>${(0, import_index_bb3f10a7.e)($userData.name)}</li>
		<li>${(0, import_index_bb3f10a7.e)($userData.username)}</li>
		<li>${(0, import_index_bb3f10a7.e)($userData.email)}</li></ul>
	<a href="${""}" class="${"svelte-1rqpw86"}">Fav Movies</a>
	<a href="${""}" class="${"svelte-1rqpw86"}">Fav Actors</a></div>

${(0, import_index_bb3f10a7.v)(import_PopularMovies_28b3decf.P, "PopularMovies").$$render($$result, { popular: $popular, title }, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
