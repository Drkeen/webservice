

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DP2hjVax.js","_app/immutable/chunks/DRyVtr3L.js","_app/immutable/chunks/CfI8e-WC.js","_app/immutable/chunks/BZUzXAn1.js"];
export const stylesheets = [];
export const fonts = [];
