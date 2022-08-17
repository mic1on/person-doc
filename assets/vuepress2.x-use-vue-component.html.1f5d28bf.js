import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as i,a as n,b as a,d as s,e as p,r as e}from"./app.aca78d73.js";const u={},r=s("\u8BB0\u4E00\u6B21\u8E29\u5751\uFF0C\u7531\u4E8E"),d={href:"https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E5%9C%A8-markdown-%E4%B8%AD%E4%BD%BF%E7%94%A8-vue",target:"_blank",rel:"noopener noreferrer"},k=s("vuepress2.x\u5B98\u65B9\u6587\u6863"),v=s("\u7684markdown\u4E2D\u5E76\u672A\u63D0\u53CA\u5982\u4F55\u4F7F\u7528Vue\u7EC4\u4EF6\u3002"),m=n("p",null,"\u56E0\u6B64\uFF0C\u4E0B\u610F\u8BC6\u7684\u53BB\u770B\u770Bv1.x\u7684\u6587\u6863\uFF0C\u53EF\u4EE5\u53D1\u73B0\uFF0C\u5728v1.x\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49vue\u7EC4\u4EF6\u6765\u5B9E\u73B0markdown\u7684\u529F\u80FD\u3002",-1),g=n("p",null,[s("\u800C\u65B9\u6CD5\u4E5F\u5341\u5206\u7B80\u5355\uFF0C\u7EA6\u675F\u5927\u4E8E\u914D\u7F6E\uFF0C\u53EA\u9700\u8981\u5728.vuepress\u6587\u4EF6\u4E2D\u65B0\u5EFA"),n("code",null,"components"),s("\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u628A\u4F60\u7684\u7EC4\u4EF6\u653E\u5728\u91CC\u9762\u5373\u53EF\u3002")],-1),_=n("p",null,"\u6309\u7740\u8FD9\u79CD\u65B9\u5F0F\u8BD5\u4E86\u51E0\u4E2A\u56DE\u5408\uFF0C\u672A\u679C\u3002",-1),h=s("\u4E8E\u662F\u53C8\u53BB\u7FFB\u770B"),b={href:"https://v2.vuepress.vuejs.org/zh/guide/migration.html#vuepress-components",target:"_blank",rel:"noopener noreferrer"},f=s("v1\u8FC1\u79FBv2\u6587\u6863"),x=s("\uFF0C\u5728\u91CC\u9762\u53D1\u73B0\uFF0C\u5728v1\u4E2D\u81EA\u52A8\u6CE8\u518Ccomponent\u7684\u65B9\u5F0F\u5DF2\u7ECF\u88AB\u5E9F\u5F03\u4E86!"),y={class:"custom-container tip"},q=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),w=n("p",null,"\u5728\u8BE5\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u4E0D\u4F1A\u88AB\u81EA\u52A8\u6CE8\u518C\u4E3A Vue \u7EC4\u4EF6\u3002",-1),j=s("\u4F60\u9700\u8981\u4F7F\u7528 "),E={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html",target:"_blank",rel:"noopener noreferrer"},V=s("@vuepress/plugin-register-components"),B=s("\uFF0C\u6216\u8005\u5728 .vuepress/client.{js,ts} \u4E2D\u624B\u52A8\u6CE8\u518C\u4F60\u7684\u7EC4\u4EF6\u3002"),C=n("p",null,"\u539F\u6765\u662F\u9700\u8981\u5B89\u88C5\u63D2\u4EF6\u5BF9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u8FDB\u884C\u9009\u9879\u914D\u7F6E\u4E86\uFF0C\u800C\u4E0D\u662F\u548Cv1\u4E00\u6837\uFF0C\u4E00\u80A1\u8111\u7684\u5168\u7ED9register\u3002\u65E2\u7136\u662F\u5B98\u65B9\u652F\u6301\u7684\u63D2\u4EF6\uFF0C\u90A3\u5C31\u53BB\u5B98\u65B9\u63D2\u4EF6\u6587\u6863\u4E2D\u627E\u5230\u8FD9\u4E2A\u63D2\u4EF6\u7684\u4F7F\u7528\u65B9\u6CD5\u3002",-1),z=s("\u63D2\u4EF6\u5B89\u88C5\u6559\u7A0B\uFF1A"),D={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html",target:"_blank",rel:"noopener noreferrer"},N=s("\u5B98\u65B9\u6587\u6863"),A=p(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pnpm i -D @vuepress/plugin-register-components@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> registerComponentsPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/plugin-register-components&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/utils&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">componentsDir</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./components&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B8C\u6574\u7684\u914D\u7F6E\u9879\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0A\u6587\u6863\u3002</p><p>\u63A5\u4E0B\u6765\u770B\u770B\u6210\u679C\uFF1A</p>`,4),I=p(`<p>\u9644\u4E0Avue\u7EC4\u4EF6\u4EE3\u7801\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> #0a7bf4 1px solid</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u6211\u70B9\u6211\uFF1A{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u662Fmarkdown\u4E2D\u7684vue\u7EC4\u4EF6&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function L(P,F){const t=e("ExternalLinkIcon"),o=e("my-demo");return l(),i("div",null,[n("p",null,[r,n("a",d,[k,a(t)]),v]),m,g,_,n("p",null,[h,n("a",b,[f,a(t)]),x]),n("div",y,[q,w,n("p",null,[j,n("a",E,[V,a(t)]),B])]),C,n("p",null,[z,n("a",D,[N,a(t)])]),A,a(o),I])}var U=c(u,[["render",L],["__file","vuepress2.x-use-vue-component.html.vue"]]);export{U as default};
