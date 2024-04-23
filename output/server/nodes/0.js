import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.D7nY1_ZQ.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.Dv3faqwK.js"];
export const stylesheets = ["_app/immutable/assets/0.DHZLgX4y.css"];
export const fonts = [];
