export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-f7b71bc4.js","js":["start-f7b71bc4.js","chunks/vendor-dbc2ca8b.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
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
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/todos\.json$/,
				params: null,
				load: () => import('./entries/endpoints/todos/index.json.js')
			},
			{
				type: 'page',
				pattern: /^\/todos\/?$/,
				params: null,
				path: "/todos",
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/todos\/([^/]+?)\.json$/,
				params: (m) => ({ uid: m[1]}),
				load: () => import('./entries/endpoints/todos/_uid_.json.js')
			}
		]
	}
};
