

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BXr3waRc.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.Dv3faqwK.js","_app/immutable/chunks/entry.DzjrS7zV.js"];
export const stylesheets = [];
export const fonts = [];
