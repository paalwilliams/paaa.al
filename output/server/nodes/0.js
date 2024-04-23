

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ClELbKt7.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CQdqn9SG.js"];
export const stylesheets = ["_app/immutable/assets/0.DHZLgX4y.css"];
export const fonts = [];
