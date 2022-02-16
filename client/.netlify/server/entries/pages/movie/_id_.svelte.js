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
var CommentCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".comment.svelte-mo49z9{display:flex;margin-bottom:10px;background-color:rgb(242, 249, 255);border-radius:15px}.comment-text.svelte-mo49z9{padding:25px 0 0 15px}img.svelte-mo49z9{margin-left:15px;width:75px}.user.svelte-mo49z9{text-align:center}",
  map: null
};
const CommentCard = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  let { userComment } = $$props;
  if ($$props.userComment === void 0 && $$bindings.userComment && userComment !== void 0)
    $$bindings.userComment(userComment);
  $$result.css.add(css$1);
  return `<div class="${"comment svelte-mo49z9"}"><div class="${"user svelte-mo49z9"}"><img src="${"/profile.png"}" alt="${""}" class="${"svelte-mo49z9"}">
        <p>${(0, import_index_bb3f10a7.e)(userComment.commentor)}</p></div>
    <p class="${"comment-text svelte-mo49z9"}">${(0, import_index_bb3f10a7.e)(userComment.comment)}</p>
</div>`;
});
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-1ofhj3p{text-align:center}.comment-form.svelte-1ofhj3p{display:flex;height:125px;flex-direction:column;margin:20px 0;font-size:14px;font-weight:400px}textarea.svelte-1ofhj3p{padding:10px}button.svelte-1ofhj3p{margin:10px 0 0 auto;width:25%;background-color:#fcca04;border-radius:10px;font-size:18px}button.svelte-1ofhj3p:hover{background-color:#b4a057}p.svelte-1ofhj3p{margin-top:13px;padding:10px 10px}span.svelte-1ofhj3p{font-weight:bold}.movie-details.svelte-1ofhj3p{margin:auto;display:flex;width:100%}.txt-container.svelte-1ofhj3p{align-items:center;margin:0 0 0 25px;text-align:justify}img.svelte-1ofhj3p{width:100%;border-radius:10px;min-width:300px;max-width:310px}",
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
  let $commentsByMovie, $$unsubscribe_commentsByMovie;
  let $$unsubscribe_commentMovieId;
  let $$unsubscribe_userData;
  $$unsubscribe_commentsByMovie = (0, import_index_bb3f10a7.a)(import_stores_59c84358.c, (value) => $commentsByMovie = value);
  $$unsubscribe_commentMovieId = (0, import_index_bb3f10a7.a)(import_stores_59c84358.b, (value) => value);
  $$unsubscribe_userData = (0, import_index_bb3f10a7.a)(import_stores_59c84358.u, (value) => value);
  let { movieDetail } = $$props;
  let { userComment = {
    name: "ali",
    comment: "dawh\u0131hdwadhnw\u0131o\u015Fad"
  } } = $$props;
  if ($$props.movieDetail === void 0 && $$bindings.movieDetail && movieDetail !== void 0)
    $$bindings.movieDetail(movieDetail);
  if ($$props.userComment === void 0 && $$bindings.userComment && userComment !== void 0)
    $$bindings.userComment(userComment);
  $$result.css.add(css);
  $$unsubscribe_commentsByMovie();
  $$unsubscribe_commentMovieId();
  $$unsubscribe_userData();
  return `<div class="${"movie-details svelte-1ofhj3p"}"><div class="${"img-container"}"><img${(0, import_index_bb3f10a7.g)("src", "https://image.tmdb.org/t/p/original" + movieDetail.poster_path, 0)}${(0, import_index_bb3f10a7.g)("alt", movieDetail.title, 0)} class="${"svelte-1ofhj3p"}"></div>
	<div class="${"txt-container svelte-1ofhj3p"}"><h2 class="${"svelte-1ofhj3p"}">${(0, import_index_bb3f10a7.e)(movieDetail.title)}</h2>
		<p class="${"overview svelte-1ofhj3p"}">${(0, import_index_bb3f10a7.e)(movieDetail.overview)}</p>
		<p class="${"svelte-1ofhj3p"}"><span class="${"svelte-1ofhj3p"}">Release Date :</span>
			${(0, import_index_bb3f10a7.e)(movieDetail.release_date)} <br>
			<span class="${"svelte-1ofhj3p"}">Budget :</span> $${(0, import_index_bb3f10a7.e)(" " + movieDetail.budget)} <br>
			<span class="${"svelte-1ofhj3p"}">Runtime :</span>${(0, import_index_bb3f10a7.e)(movieDetail.runtime)}mins
		</p></div></div>

<form class="${"comment-form svelte-1ofhj3p"}" action="${""}" method="${"post"}"><textarea name="${"comment"}" id="${""}" cols="${"30"}" rows="${"10"}" required class="${"svelte-1ofhj3p"}">${""}</textarea>
	<button type="${"submit"}" class="${"svelte-1ofhj3p"}">Send</button></form>
${(0, import_index_bb3f10a7.h)($commentsByMovie, (comment) => {
    return `${(0, import_index_bb3f10a7.v)(CommentCard, "CommentCard").$$render($$result, { userComment: comment }, {}, {})}`;
  })}`;
});
module.exports = __toCommonJS(stdin_exports);
