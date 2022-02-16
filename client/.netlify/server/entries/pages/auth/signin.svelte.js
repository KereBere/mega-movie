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
  default: () => Signin
});
var import_index_bb3f10a7 = require("../../../chunks/index-bb3f10a7.js");
var import_SocialAuth_5226a30d = require("../../../chunks/SocialAuth-5226a30d.js");
var import_stores_59c84358 = require("../../../chunks/stores-59c84358.js");
var SignInForm_svelte_svelte_type_style_lang = "";
const css = {
  code: ".success-p.svelte-1g36exq{color:greenyellow}.error-con.svelte-1g36exq{position:absolute;top:50px;color:red;font-size:12px}.have-acc.svelte-1g36exq{text-decoration:none;color:white;font-size:13px;margin:8px}#animatedBackground.svelte-1g36exq{display:flex;align-items:center;width:100%;height:100%;position:absolute;top:0;left:0;background:url('/bg.jpg');background-repeat:repeat;background-position:0 0;background-size:auto 100%;animation:svelte-1g36exq-animatedBackground 500s linear infinite}@keyframes svelte-1g36exq-animatedBackground{from{background-position:0 0}to{background-position:-10000px 0}}@media(max-width: 600px){.error-con.svelte-1g36exq{position:absolute;top:310px;left:90px;color:red;font-size:11px}#or.svelte-1g36exq{position:absolute;top:300px;left:40px;width:40px;height:40px;border-radius:50%;box-shadow:0 2px 4px rgba(0, 0, 0, 0.4);line-height:40px;text-align:center}#login-box.svelte-1g36exq{background-color:rgba(0, 0, 0, 0.4);display:flex;flex-direction:column;position:relative;margin:5% auto;min-width:250px;max-width:600px;background:#fff;border-radius:2px}#right.svelte-1g36exq{box-sizing:border-box;padding:40px;width:300px;background:url('https://goo.gl/lPCXrQ');background-size:cover;background-position:center;border-radius:0 2px 2px 0}}#login-box.svelte-1g36exq{display:flex;position:relative;margin:5% auto;min-width:250px;padding-bottom:15px;max-width:600px;background:#fff;border-radius:15px;background:rgba(27, 29, 27, 0.8)}.left.svelte-1g36exq{color:white;box-sizing:border-box;padding:10px 40px 0px;width:300px}h1.svelte-1g36exq{margin:70px 0 20px 0;font-weight:300;font-size:28px}input.svelte-1g36exq{border-radius:5px;padding:10px;margin-bottom:55px}input[type='text'].svelte-1g36exq,input[type='password'].svelte-1g36exq{display:block;box-sizing:border-box;margin-bottom:20px;width:220px;height:32px;border:none;border-bottom:1px solid #aaa;font-family:'Roboto', sans-serif;font-weight:400;font-size:15px;transition:0.2s ease}input[type='text'].svelte-1g36exq:focus,input[type='password'].svelte-1g36exq:focus{border-bottom:2px solid #16a085;color:#16a085;transition:0.2s ease}input[type='submit'].svelte-1g36exq{width:120px;height:32px;background:rgba(27, 29, 27, 0.8);border:none;border-radius:2px;color:#fff;font-family:'Roboto', sans-serif;font-weight:500;text-transform:uppercase;transition:0.1s ease;cursor:pointer}input[type='submit'].svelte-1g36exq:hover,input[type='submit'].svelte-1g36exq:focus{opacity:0.8;box-shadow:0 2px 4px rgba(0, 0, 0, 0.4);transition:0.1s ease}input[type='submit'].svelte-1g36exq:active{opacity:1;box-shadow:0 1px 2px rgba(0, 0, 0, 0.4);transition:0.1s ease}.or.svelte-1g36exq{position:absolute;top:150px;left:275px;width:40px;height:40px;background:rgba(27, 29, 27, 0.8);border-radius:50%;box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);line-height:40px;text-align:center;color:white}.right.svelte-1g36exq{box-sizing:border-box;padding-left:25px;padding-top:100px;padding-right:15px;width:300px;background:url('https://goo.gl/lPCXrQ');background-size:cover;background-position:center;border-radius:0 2px 2px 0}",
  map: null
};
const SignInForm = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_popular;
  let $$unsubscribe_favMovies;
  let $$unsubscribe_isAuth;
  let $$unsubscribe_userData;
  let $$unsubscribe_allMovies;
  $$unsubscribe_popular = (0, import_index_bb3f10a7.a)(import_stores_59c84358.p, (value) => value);
  $$unsubscribe_favMovies = (0, import_index_bb3f10a7.a)(import_stores_59c84358.f, (value) => value);
  $$unsubscribe_isAuth = (0, import_index_bb3f10a7.a)(import_stores_59c84358.i, (value) => value);
  $$unsubscribe_userData = (0, import_index_bb3f10a7.a)(import_stores_59c84358.u, (value) => value);
  $$unsubscribe_allMovies = (0, import_index_bb3f10a7.a)(import_stores_59c84358.a, (value) => value);
  let email, password;
  $$result.css.add(css);
  $$unsubscribe_popular();
  $$unsubscribe_favMovies();
  $$unsubscribe_isAuth();
  $$unsubscribe_userData();
  $$unsubscribe_allMovies();
  return `<div id="${"animatedBackground"}" class="${"svelte-1g36exq"}"><div id="${"login-box"}" class="${"svelte-1g36exq"}"><div class="${"left svelte-1g36exq"}"><h1 class="${"svelte-1g36exq"}">Sign In</h1>
			<form><input type="${"text"}" name="${"email"}" placeholder="${"E-mail"}" required class="${"svelte-1g36exq"}"${(0, import_index_bb3f10a7.g)("value", email, 0)}>
				<input type="${"password"}" name="${"password"}" placeholder="${"Password"}" required class="${"svelte-1g36exq"}"${(0, import_index_bb3f10a7.g)("value", password, 0)}>
				<input type="${"submit"}" value="${"Sign me in"}" class="${"svelte-1g36exq"}"></form></div>
		<div class="${"right svelte-1g36exq"}" id="${"right"}"><div class="${"error-con svelte-1g36exq"}">${``}
				${``}</div>
			${(0, import_index_bb3f10a7.v)(import_SocialAuth_5226a30d.S, "SocialAuth").$$render($$result, {}, {}, {})}
			<a class="${"have-acc svelte-1g36exq"}" href="${"/auth/signup"}"><p>Don&#39;t have an account? Sign up!</p></a>
			<a class="${"have-acc svelte-1g36exq"}" href="${"/"}"><p>Or continue without login!</p></a></div>
		<div class="${"or svelte-1g36exq"}" id="${"or"}">OR</div></div>
</div>`;
});
const Signin = (0, import_index_bb3f10a7.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_bb3f10a7.v)(SignInForm, "SignInForm").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
