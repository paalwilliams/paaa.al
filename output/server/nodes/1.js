

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.B37_PLLd.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.Dv3faqwK.js","_app/immutable/chunks/entry.nIjq5AB8.js"];
export const stylesheets = [];
export const fonts = [];
