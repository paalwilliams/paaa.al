import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="h-screen flex items-center justify-center flex-col" data-svelte-h="svelte-1mz73ta"><p class="text-center">Paal Williams</p> <p class="text-center underline hover:italic"><a href="mailto:hello@paaa.al">hello@paaa.al</a></p> <p class="text-center">berlin</p></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
