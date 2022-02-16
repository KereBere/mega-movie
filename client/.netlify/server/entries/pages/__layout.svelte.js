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
  default: () => _layout
});
var import_index_bb3f10a7 = require("../../chunks/index-bb3f10a7.js");
var import_stores_59c84358 = require("../../chunks/stores-59c84358.js");
var app = "@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    /* outline: red solid 1px ; */\r\n    font-family: 'Comfortaa', cursive;}\r\nbody{\r\n    margin: 0 10%;\r\n}\r\nmain{\r\n    position: absolute;\r\n}\r\na{\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    transition: all 0.2s ease-out;\r\n\r\n}\r\na:hover{\r\n    color:  #fcca04;\r\n    transform: scale(1.05);\r\n}\r\n";
var Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');nav.svelte-1y3binx{display:flex;min-height:10vh;align-items:center;justify-content:center;padding:25px 0}a.svelte-1y3binx{font-weight:700;cursor:pointer;margin-right:15px;font-size:18px}.logo.svelte-1y3binx{position:relative;font-weight:bold;font-family:'Poppins';color:black;text-decoration:none;font-family:'Festive', cursive;font-size:50px;margin-right:auto}img.svelte-1y3binx{position:absolute;top:-10px;left:-55px;width:75px}",
  map: null
};
const Nav = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  let $allMovies, $$unsubscribe_allMovies;
  let $popular, $$unsubscribe_popular;
  let $userData, $$unsubscribe_userData;
  let $favMovies, $$unsubscribe_favMovies;
  let $isAuth, $$unsubscribe_isAuth;
  $$unsubscribe_allMovies = (0, import_index_bb3f10a7.a)(import_stores_59c84358.a, (value) => $allMovies = value);
  $$unsubscribe_popular = (0, import_index_bb3f10a7.a)(import_stores_59c84358.p, (value) => $popular = value);
  $$unsubscribe_userData = (0, import_index_bb3f10a7.a)(import_stores_59c84358.u, (value) => $userData = value);
  $$unsubscribe_favMovies = (0, import_index_bb3f10a7.a)(import_stores_59c84358.f, (value) => $favMovies = value);
  $$unsubscribe_isAuth = (0, import_index_bb3f10a7.a)(import_stores_59c84358.i, (value) => $isAuth = value);
  const logout = async () => {
    (0, import_index_bb3f10a7.b)(import_stores_59c84358.i, $isAuth = "", $isAuth);
    (0, import_index_bb3f10a7.b)(import_stores_59c84358.f, $favMovies = "", $favMovies);
    (0, import_index_bb3f10a7.b)(import_stores_59c84358.u, $userData = "", $userData);
    (0, import_index_bb3f10a7.b)(import_stores_59c84358.p, $popular = "", $popular);
    (0, import_index_bb3f10a7.b)(import_stores_59c84358.a, $allMovies = "", $allMovies);
    const submit = fetch("https://ultra-movie.herokuapp.com/user/logout");
    await submit.json();
  };
  if ($$props.logout === void 0 && $$bindings.logout && logout !== void 0)
    $$bindings.logout(logout);
  $$result.css.add(css);
  $$unsubscribe_allMovies();
  $$unsubscribe_popular();
  $$unsubscribe_userData();
  $$unsubscribe_favMovies();
  $$unsubscribe_isAuth();
  return `<nav class="${"svelte-1y3binx"}"><a class="${"logo svelte-1y3binx"}" href="${"/"}"><img src="${"/logom.png"}" alt="${""}" class="${"svelte-1y3binx"}">Popcorn Movie</a>
	${$isAuth ? `<a href="${"/favmovies/"}" class="${"svelte-1y3binx"}">Users&#39; Favs</a>` : ``}

	${$isAuth ? `<a href="${"/profile/profile"}" class="${"svelte-1y3binx"}">Profile</a>` : ``}
	${!$isAuth ? `<a href="${"/auth/signin"}" class="${"svelte-1y3binx"}">Sign in</a>` : ``}
	${!$isAuth ? `<a href="${"/auth/signup"}" class="${"svelte-1y3binx"}">Sign up</a>` : ``}
	${$isAuth ? `<a class="${"svelte-1y3binx"}">Logout</a>` : ``}
	<a class="${"svelte-1y3binx"}">Dashboard</a>
</nav>`;
});
const _layout = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Movie DB</title>`, ""}`, ""}
	${(0, import_index_bb3f10a7.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}`;
});
module.exports = __toCommonJS(stdin_exports);
