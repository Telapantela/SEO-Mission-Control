import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, e as renderSlot } from './astro/server_BjJQRKxC.mjs';
import { a as $$Container } from './PageLayout_DkYOXN1Z.mjs';

const $$TopLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pt-36 pb-5"> ${renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "C:/Users/HP/Desktop/www/Astro/SEO-Mission-Control/src/layouts/TopLayout.astro", void 0);

const $$BottomLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex-1 py-5"> ${renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "C:/Users/HP/Desktop/www/Astro/SEO-Mission-Control/src/layouts/BottomLayout.astro", void 0);

export { $$TopLayout as $, $$BottomLayout as a };
