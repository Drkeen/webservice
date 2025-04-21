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
		client: {start:"_app/immutable/entry/start.C3_bWDY8.js",app:"_app/immutable/entry/app.DKZzrnbA.js",imports:["_app/immutable/entry/start.C3_bWDY8.js","_app/immutable/chunks/Bd0eq8xv.js","_app/immutable/chunks/CfI8e-WC.js","_app/immutable/chunks/DLyp8TLP.js","_app/immutable/entry/app.DKZzrnbA.js","_app/immutable/chunks/CfI8e-WC.js","_app/immutable/chunks/Cs_GBzjH.js","_app/immutable/chunks/DRyVtr3L.js","_app/immutable/chunks/DLyp8TLP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
