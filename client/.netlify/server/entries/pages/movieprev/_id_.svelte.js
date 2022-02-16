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
var import_stores_59c84358 = require("../../../chunks/stores-59c84358.js");
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-1ofhj3p{text-align:center}p.svelte-1ofhj3p{margin-top:13px;padding:10px 10px}span.svelte-1ofhj3p{font-weight:bold}.movie-details.svelte-1ofhj3p{margin:auto;display:flex;width:100%}.txt-container.svelte-1ofhj3p{align-items:center;margin:0 0 0 25px;text-align:justify}img.svelte-1ofhj3p{width:100%;border-radius:10px;min-width:300px;max-width:310px}",
  map: null
};
async function load({ fetch, params }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${"efaf0b9bf33d3ed3967457d165031a0b"}&language=en-US`);
  const movieDetail = await res.json();
  if (res.ok) {
    return { props: { movieDetail } };
  } else {
    return "HEHE";
  }
}
const U5Bidu5D = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_commentMovieId;
  let $$unsubscribe_userData;
  $$unsubscribe_commentMovieId = (0, import_index_bb3f10a7.a)(import_stores_59c84358.b, (value) => value);
  $$unsubscribe_userData = (0, import_index_bb3f10a7.a)(import_stores_59c84358.u, (value) => value);
  let { movieDetail } = $$props;
  if ($$props.movieDetail === void 0 && $$bindings.movieDetail && movieDetail !== void 0)
    $$bindings.movieDetail(movieDetail);
  $$result.css.add(css);
  $$unsubscribe_commentMovieId();
  $$unsubscribe_userData();
  return `<div class="${"movie-details svelte-1ofhj3p"}"><div class="${"img-container"}"><img${(0, import_index_bb3f10a7.g)("src", "https://image.tmdb.org/t/p/original" + movieDetail.poster_path, 0)}${(0, import_index_bb3f10a7.g)("alt", movieDetail.title, 0)} class="${"svelte-1ofhj3p"}"></div>
	<div class="${"txt-container svelte-1ofhj3p"}"><h2 class="${"svelte-1ofhj3p"}">${(0, import_index_bb3f10a7.e)(movieDetail.title)}</h2>
		<p class="${"overview svelte-1ofhj3p"}">${(0, import_index_bb3f10a7.e)(movieDetail.overview)}</p>
		<p class="${"svelte-1ofhj3p"}"><span class="${"svelte-1ofhj3p"}">Release Date :</span>
			${(0, import_index_bb3f10a7.e)(movieDetail.release_date)} <br>
			<span class="${"svelte-1ofhj3p"}">Budget :</span> $${(0, import_index_bb3f10a7.e)(" " + movieDetail.budget)} <br>
			<span class="${"svelte-1ofhj3p"}">Runtime :</span>${(0, import_index_bb3f10a7.e)(movieDetail.runtime)}mins
		</p></div>
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
