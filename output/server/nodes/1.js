

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BzJFKy9S.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CQdqn9SG.js","_app/immutable/chunks/entry.tFL-PrON.js"];
export const stylesheets = [];
export const fonts = [];
