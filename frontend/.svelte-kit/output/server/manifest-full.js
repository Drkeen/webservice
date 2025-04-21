export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.7DhqtIxm.js",app:"_app/immutable/entry/app.5yiiUeI9.js",imports:["_app/immutable/entry/start.7DhqtIxm.js","_app/immutable/chunks/Drn_5P1N.js","_app/immutable/chunks/CbzEBpmS.js","_app/immutable/chunks/ARVtEmnK.js","_app/immutable/entry/app.5yiiUeI9.js","_app/immutable/chunks/CbzEBpmS.js","_app/immutable/chunks/DiAmg8CG.js","_app/immutable/chunks/Bw0ub6xF.js","_app/immutable/chunks/D8Wx_O_h.js","_app/immutable/chunks/ARVtEmnK.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
