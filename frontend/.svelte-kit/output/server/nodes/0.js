

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.U5q5pWxD.js","_app/immutable/chunks/Bw0ub6xF.js","_app/immutable/chunks/CbzEBpmS.js"];
export const stylesheets = [];
export const fonts = [];
