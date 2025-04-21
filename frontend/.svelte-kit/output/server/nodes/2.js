import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.B-kCFcwr.js","_app/immutable/chunks/Bw0ub6xF.js","_app/immutable/chunks/CbzEBpmS.js","_app/immutable/chunks/BYZ3c1-S.js","_app/immutable/chunks/DiAmg8CG.js","_app/immutable/chunks/D8Wx_O_h.js"];
export const stylesheets = [];
export const fonts = [];
