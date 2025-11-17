import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BjJQRKxC.mjs';
import { g as getCollection, S as SITE } from '../../chunks/consts_CKPC8eB3.mjs';
import { $ as $$PageLayout, f as formatDate } from '../../chunks/PageLayout_DkYOXN1Z.mjs';
import { $ as $$TopLayout, a as $$BottomLayout } from '../../chunks/BottomLayout_Bx_4K6z5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.seomissioncontrol.com");
async function getStaticPaths() {
  const docs = await getCollection("legal");
  return docs.map((doc) => ({
    params: { slug: doc.slug },
    props: doc
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const doc = Astro2.props;
  const { title, date } = doc.data;
  const { Content } = await doc.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": `${title} for ${SITE.TITLE}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> <div class="page-heading"> ${title} </div> <p class="font-normal opacity-75">
Last updated: ${formatDate(date)} </p> </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": async ($$result3) => renderTemplate` <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "C:/Users/HP/Desktop/www/Astro/SEO-Mission-Control/src/pages/legal/[...slug].astro", void 0);

const $$file = "C:/Users/HP/Desktop/www/Astro/SEO-Mission-Control/src/pages/legal/[...slug].astro";
const $$url = "/legal/[...slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
