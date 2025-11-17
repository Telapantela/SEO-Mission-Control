import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BjJQRKxC.mjs';
import { g as getCollection } from '../../chunks/consts_CKPC8eB3.mjs';
import { $ as $$PageLayout } from '../../chunks/PageLayout_DkYOXN1Z.mjs';
import { $ as $$TopLayout, a as $$BottomLayout } from '../../chunks/BottomLayout_Bx_4K6z5.mjs';
import { $ as $$ArticleTopLayout, a as $$ArticleBottomLayout } from '../../chunks/ArticleBottomLayout_BOPrveoU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.seomissioncontrol.com");
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: project
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const project = Astro2.props;
  const { title, summary } = project.data;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": summary }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "ArticleTopLayout", $$ArticleTopLayout, { "entry": project })} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": async ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "ArticleBottomLayout", $$ArticleBottomLayout, { "entry": project })} </div> ` })} ` })}`;
}, "C:/Users/HP/Desktop/www/Astro/SEO-Mission-Control/src/pages/projects/[...slug].astro", void 0);

const $$file = "C:/Users/HP/Desktop/www/Astro/SEO-Mission-Control/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
