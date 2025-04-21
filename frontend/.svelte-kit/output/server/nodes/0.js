

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Baqq1U7V.js","_app/immutable/chunks/DRyVtr3L.js","_app/immutable/chunks/CfI8e-WC.js"];
export const stylesheets = [];
export const fonts = [];
