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
  default: () => Favmovies
});
var import_index_bb3f10a7 = require("../../../chunks/index-bb3f10a7.js");
var import_stores_59c84358 = require("../../../chunks/stores-59c84358.js");
var FavMovieCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".fav-movie-card.svelte-jxtjmy{margin:15px;word-wrap:break-word}.fav-movie-card.svelte-jxtjmy:hover{transform:scale(1.05)}img.svelte-jxtjmy{width:125px;border-radius:15px}",
  map: null
};
const FavMovieCard = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_commentsByMovie;
  let $$unsubscribe_commentMovieId;
  $$unsubscribe_commentsByMovie = (0, import_index_bb3f10a7.a)(import_stores_59c84358.c, (value) => value);
  $$unsubscribe_commentMovieId = (0, import_index_bb3f10a7.a)(import_stores_59c84358.b, (value) => value);
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css$1);
  $$unsubscribe_commentsByMovie();
  $$unsubscribe_commentMovieId();
  return `<div class="${"fav-movie-card svelte-jxtjmy"}"><a sveltekit:prefetch sveltekit:noscroll${(0, import_index_bb3f10a7.g)("href", "/movie/" + movie[1], 0)}><img${(0, import_index_bb3f10a7.g)("src", "https://image.tmdb.org/t/p/w500" + movie[2], 0)}${(0, import_index_bb3f10a7.g)("alt", movie[0], 0)} class="${"svelte-jxtjmy"}"></a>
	<div class="${"description"}"></div>
</div>`;
});
var FavMoviesByUser_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fav-movie-con.svelte-1d41j1j{display:flex;flex-wrap:wrap;background-color:rgb(255, 231, 231);border-radius:25px;margin-bottom:25px}.profile.svelte-1d41j1j{display:flex;flex-direction:column;width:150px;text-align:center}",
  map: null
};
const FavMoviesByUser = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  let { favMovies } = $$props;
  if ($$props.favMovies === void 0 && $$bindings.favMovies && favMovies !== void 0)
    $$bindings.favMovies(favMovies);
  $$result.css.add(css);
  return `<div class="${"fav-movie-con svelte-1d41j1j"}"><div class="${"profile svelte-1d41j1j"}"><img src="${"profile.png"}" alt="${""}">
    <p>${(0, import_index_bb3f10a7.e)(favMovies[0][5])}&#39;s Favorite Movies</p></div>
    
    ${(0, import_index_bb3f10a7.h)(favMovies, (movie) => {
    return `${(0, import_index_bb3f10a7.v)(FavMovieCard, "FavMovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
const Favmovies = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  let $allMovies, $$unsubscribe_allMovies;
  $$unsubscribe_allMovies = (0, import_index_bb3f10a7.a)(import_stores_59c84358.a, (value) => $allMovies = value);
  $$unsubscribe_allMovies();
  return `${(0, import_index_bb3f10a7.h)($allMovies, (movie) => {
    return `${(0, import_index_bb3f10a7.v)(FavMoviesByUser, "FavMoviesByUser").$$render($$result, { favMovies: movie }, {}, {})}`;
  })}`;
});
module.exports = __toCommonJS(stdin_exports);
