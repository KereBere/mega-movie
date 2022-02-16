const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["bg.jpg","favicon.png","heart.png","heart.svg","hidden.png","hidden.svg","logo.png","logom.png","profile.png","visible.png","visible.svg"]),
	_: {
		mime: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
		entry: {"file":"start-5a6446ad.js","js":["start-5a6446ad.js","chunks/vendor-b49f184f.js","chunks/singletons-a6a7384f.js"],"css":["assets/vendor-b0ab0215.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/favmovies\/?$/,
				params: null,
				path: "/favmovies",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/movieprev\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/facebook\/?$/,
				params: null,
				path: "/facebook",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/profile\/profile\/?$/,
				params: null,
				path: "/profile/profile",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/search\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/movie\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/auth\/signin\/?$/,
				params: null,
				path: "/auth/signin",
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/auth\/signup\/?$/,
				params: null,
				path: "/auth/signup",
				a: [0,10],
				b: [1]
			}
		]
	}
});
