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
  M: () => MovieCard
});
var import_index_bb3f10a7 = require("./index-bb3f10a7.js");
var import_stores_59c84358 = require("./stores-59c84358.js");
const getStores = () => {
  const stores = (0, import_index_bb3f10a7.i)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var MovieCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".is-visible.svelte-16lm9o{position:absolute;cursor:pointer;z-index:1;top:25px;left:20px;color:#fbd43f;width:15px}.is-hidden.svelte-16lm9o{position:absolute;cursor:pointer;z-index:1;top:25px;left:20px;color:#3f3e3a}h2.svelte-16lm9o{text-align:center}.heart.svelte-16lm9o{position:absolute;cursor:pointer;top:25px;right:25px;z-index:1}.heart.svelte-16lm9o:hover{color:red;transform:scale(1.05)}.fas.svelte-16lm9o{font-size:30px}.fas.svelte-16lm9o:hover{color:red}.fav.svelte-16lm9o{font-size:30px;color:red}.no-fav.svelte-16lm9o{font-size:30px;color:gray}img.svelte-16lm9o{width:100%;object-fit:cover;border-radius:1rem;margin-bottom:1rem}h2.svelte-16lm9o{font-size:0.9rem}.description.svelte-16lm9o{height:5vh}.movie-card.svelte-16lm9o{position:relative;display:flex;max-width:250px;flex-direction:column;justify-content:space-around;padding:1rem}.is-visible.svelte-16lm9o:hover{color:#837334}.is-hidden.svelte-16lm9o:hover{color:#837334}",
  map: null
};
const MovieCard = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_allMovies;
  let $$unsubscribe_popular;
  let $$unsubscribe_userData;
  let $favMovies, $$unsubscribe_favMovies;
  let $page, $$unsubscribe_page;
  $$unsubscribe_allMovies = (0, import_index_bb3f10a7.a)(import_stores_59c84358.a, (value) => value);
  $$unsubscribe_popular = (0, import_index_bb3f10a7.a)(import_stores_59c84358.p, (value) => value);
  $$unsubscribe_userData = (0, import_index_bb3f10a7.a)(import_stores_59c84358.u, (value) => value);
  $$unsubscribe_favMovies = (0, import_index_bb3f10a7.a)(import_stores_59c84358.f, (value) => $favMovies = value);
  $$unsubscribe_page = (0, import_index_bb3f10a7.a)(page, (value) => $page = value);
  let { pageName = $page.url.pathname } = $$props;
  let { movie } = $$props;
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
    $$bindings.pageName(pageName);
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css);
  $$unsubscribe_allMovies();
  $$unsubscribe_popular();
  $$unsubscribe_userData();
  $$unsubscribe_favMovies();
  $$unsubscribe_page();
  return `<div class="${"movie-card svelte-16lm9o"}">${pageName == "/profile/profile" ? `${movie.isVisible ? `<i class="${"is-visible fas fa-eye svelte-16lm9o"}"></i>` : `<i class="${"is-hidden fa-solid fa-eye-slash fas svelte-16lm9o"}"></i>`}` : ``}
	
	<a class="${"heart svelte-16lm9o"}"><i class="${(0, import_index_bb3f10a7.e)((0, import_index_bb3f10a7.f)(JSON.stringify($favMovies).includes(movie.id) ? "fas fa-heart fav" : "fas fa-heart no-fav")) + " svelte-16lm9o"}"></i></a>
	<a sveltekit:prefetch sveltekit:noscroll${(0, import_index_bb3f10a7.g)("href", "/movieprev/" + movie.id, 0)}><img${(0, import_index_bb3f10a7.g)("src", "https://image.tmdb.org/t/p/w500" + movie.poster_path, 0)}${(0, import_index_bb3f10a7.g)("alt", movie.title, 0)} class="${"svelte-16lm9o"}"></a>
	<div class="${"description svelte-16lm9o"}"><h2 class="${"svelte-16lm9o"}">${(0, import_index_bb3f10a7.e)(movie.title)}</h2></div>
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
