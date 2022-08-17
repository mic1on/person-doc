import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c,a as n,b as t,d as s,e as o,r as i}from"./app.aca78d73.js";const l={},u={id:"https-github-com-django-django-commit-a41b09266dcdd01036d59d76fe926fe0386aaade",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#https-github-com-django-django-commit-a41b09266dcdd01036d59d76fe926fe0386aaade","aria-hidden":"true"},"#",-1),d=s(),k={href:"https://github.com/django/django/commit/a41b09266dcdd01036d59d76fe926fe0386aaade",target:"_blank",rel:"noopener noreferrer"},m=s("https://github.com/django/django/commit/a41b09266dcdd01036d59d76fe926fe0386aaade"),h=o(`<h3 id="\u4F55\u4E3A\u7334\u5B50\u8865\u4E01" tabindex="-1"><a class="header-anchor" href="#\u4F55\u4E3A\u7334\u5B50\u8865\u4E01" aria-hidden="true">#</a> \u{1F914} \u4F55\u4E3A\u7334\u5B50\u8865\u4E01</h3><p>\u7B14\u8005\u5E76\u4E0D\u77E5\u9053\u4E3A\u4F55\u8981\u53EB\u7334\u5B50\u8865\u4E01\uFF0C\u5C31\u50CFDjango\u4E3A\u4EC0\u4E48\u53EBDjango\u800C\u4E0D\u53EBMigo\u4E00\u6837\u3002\u4F46\u662F\u7334\u5B50\u8865\u4E01\u662F\u4E00\u79CD\u6280\u672F\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u4E0D\u9700\u8981\u6539\u53D8\u539F\u6709\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\uFF0C\u6DFB\u52A0\u3001\u4FEE\u6539\u65B0\u7684\u529F\u80FD\u3002\u5176\u5E94\u7528\u573A\u666F\u5927\u90FD\u662F\u4E3A\u7B2C\u4E09\u65B9or\u5B98\u65B9\u6A21\u5757\u8FDB\u884C\u8865\u4E01\u3002</p><h3 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u{1F60B} \u6848\u4F8B</h3><p>\u4E4B\u524D\u7FA4\u91CC\u6709\u4F4D\u670B\u53CB\u95EE\uFF1A</p><blockquote><p>\u6211\u60F3\u5728\u8FD0\u884C\u72B6\u6001\u4E0B\u8C03\u6574\u90E8\u5206\u51FD\u6570\u3002</p></blockquote><p>\u5F53\u65F6\u6211\u7ED9\u51FA\u7684Demo\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">from</span> types <span class="token keyword">import</span> MethodType


<span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">work</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> job<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> is working on </span><span class="token interpolation"><span class="token punctuation">{</span>job<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">work</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> job1<span class="token punctuation">,</span> job2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> is working on </span><span class="token interpolation"><span class="token punctuation">{</span>job1<span class="token punctuation">}</span></span><span class="token string"> and </span><span class="token interpolation"><span class="token punctuation">{</span>job2<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token comment"># \u4FEE\u6539\u5BF9\u8C61\u65B9\u6CD5</span>
t1 <span class="token operator">=</span> Test<span class="token punctuation">(</span><span class="token string">&quot;miclon&quot;</span><span class="token punctuation">)</span>
Test<span class="token punctuation">.</span>work <span class="token operator">=</span> work
t1<span class="token punctuation">.</span>work<span class="token punctuation">(</span><span class="token string">&quot;job1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;job2&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u4FEE\u6539\u5B9E\u4F8B\u65B9\u6CD5</span>
t2 <span class="token operator">=</span> Test<span class="token punctuation">(</span><span class="token string">&quot;miclon&quot;</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>work <span class="token operator">=</span> MethodType<span class="token punctuation">(</span>work<span class="token punctuation">,</span> t2<span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>work<span class="token punctuation">(</span><span class="token string">&quot;job1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;job2&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><blockquote><p>miclon is working on job1 and job2</p><p>miclon is working on job1 and job2</p></blockquote><p>\u4E24\u79CD\u4E0D\u540C\u7684\u65B9\u5F0F\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u7B2C\u4E00\u79CD\u662F\u4FEE\u6539\u5BF9\u8C61\u65B9\u6CD5\uFF0C\u7B2C\u4E8C\u79CD\u662F\u4FEE\u6539\u5B9E\u4F8B\u65B9\u6CD5\u3002</p><h4 id="\u4FEE\u6539\u5BF9\u8C61\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5BF9\u8C61\u65B9\u6CD5" aria-hidden="true">#</a> \u4FEE\u6539\u5BF9\u8C61\u65B9\u6CD5</h4><ul><li>\u76F4\u63A5\u7ED9\u8FD9\u4E2A\u7C7B\u4E2D\u7684\u65B9\u6CD5\u8FDB\u884C\u4FEE\u6539\uFF0C\u5B83\u5C06\u4F1A\u5F71\u54CD\u672A\u6765\u6240\u6709\u5B9E\u4F8B\u5316\u8FD9\u4E2A\u7C7B\u7684\u5BF9\u8C61\u3002</li><li>\u4EC0\u4E48\u610F\u601D\uFF1F</li></ul><p>\u6839\u636E\u4E0A\u8FF0\u4EE3\u7801\u7684\u4F18\u5148\u7EA7\uFF0C\u5176\u5B9E\u6211\u5982\u679C\u4E0D\u5199 <code>t2.work = MethodType(work, t2)</code>\u4E00\u6837\u662F\u53EF\u4EE5\u8FBE\u5230\u8FD0\u884C\u76EE\u7684\u7684\u3002</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220728064313.png" alt="" height="300" loading="lazy"></p><p>\u539F\u56E0\u5C31\u5728\u4E8E\uFF0C\u6211\u5728\u4FEE\u6539\u5B9E\u4F8B\u65B9\u6CD5\u4E4B\u524D\u5176\u5B9E\u5DF2\u7ECF\u628A\u539F\u751F\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5\u66FF\u6362\u4E86\uFF0C\u540E\u7EED\u6240\u6709\u5B9E\u4F8B\u5316\u90FD\u4F1A\u53D7\u5F71\u54CD\u3002</p><p>\u4E0D\u4FE1\u6211\u4EEC\u8BD5\u8BD5\u8C03\u6362\u987A\u5E8F\uFF1F</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220728064511.png" alt="" height="300" loading="lazy"></p><h4 id="\u4FEE\u6539\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> \u4FEE\u6539\u5B9E\u4F8B\u65B9\u6CD5</h4><ul><li>\u53EA\u662F\u4FEE\u6539\u4E86\u521B\u5EFA\u5B9E\u4F8B\u540E\u7684\u65B9\u6CD5\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u539F\u751F\u5BF9\u8C61\u3002</li></ul><h3 id="\u5B9E\u9645\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9645\u5E94\u7528" aria-hidden="true">#</a> \u{1F917} \u5B9E\u9645\u5E94\u7528</h3><p>\u4E00\u822C\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F1A\u4F7F\u7528\u7334\u5B50\u8865\u4E01\u6765\u89E3\u51B3\u95EE\u9898\u3002\u5F53\u6211\u5728\u57FA\u4E8EDjango2.x\u7248\u672C\u5F00\u53D1\u65F6\u5019\uFF0C\u7531\u4E8E\u4F7F\u7528\u4E86<code>pymysql</code>\u5305\uFF0C\u5B98\u65B9\u5BF9\u5176\u652F\u6301\u5EA6\u8FD8\u4E0D\u591F\u5BFC\u81F4\u4EA7\u751F\u4E86\u5982\u4E0B\u62A5\u9519\uFF1A</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220728065314.png" alt="" loading="lazy"></p><p>Google\u540E\u7684\u89E3\u51B3\u65B9\u6848\u662F\uFF1A</p>`,23),b={href:"https://stackoverflow.com/questions/67024174/django-2-2-attributeerror-str-object-has-no-attribute-decode",target:"_blank",rel:"noopener noreferrer"},g=s("Django 2.2 + AttributeError: 'str' object has no attribute 'decode'"),v=s("\u6211\u5728Django\u7684"),_={href:"https://github.com/django/django/commit/a41b09266dcdd01036d59d76fe926fe0386aaade",target:"_blank",rel:"noopener noreferrer"},f=s("\u63D0\u4EA4\u8BB0\u5F55"),y=s("\u4E2D\u53D1\u73B0\u4E86\u8FD9\u4E2A\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6848\uFF1A"),j=o(`<p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220728065904.png" alt="" loading="lazy"></p><p>\u7ED3\u5408\u6211\u4EEC\u4E0A\u6587\u4E2D\u5BF9\u7334\u5B50\u8865\u4E01\u7684\u7406\u89E3\uFF0C\u6211\u4EEC\u53EF\u4EE5\u81EA\u5DF1\u6539\u5199\u8FD9\u4E2A<code>last_executed_query</code>\u65B9\u6CD5\uFF0C\u7136\u540E\u5C06\u6B64\u65B9\u6CD5\u4EE5\u8865\u4E01\u7684\u65B9\u5F0F\u6CE8\u5165\u5230Django\u4E2D\u3002</p><h3 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u{1F600} \u5B9E\u73B0</h3><p>\u5728\u9879\u76EE\u5165\u53E3\u5904\uFF0C\u7F16\u5199\u8865\u4E01\u51FD\u6570\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">monkey_patch_mysql_db_operations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">from</span> django<span class="token punctuation">.</span>db<span class="token punctuation">.</span>backends<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>operations <span class="token keyword">import</span> DatabaseOperations
    <span class="token keyword">from</span> django<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>encoding <span class="token keyword">import</span> force_str

    <span class="token keyword">def</span> <span class="token function">last_executed_query</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cursor<span class="token punctuation">,</span> sql<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> force_str<span class="token punctuation">(</span><span class="token builtin">getattr</span><span class="token punctuation">(</span>cursor<span class="token punctuation">,</span> <span class="token string">&#39;_executed&#39;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">,</span> errors<span class="token operator">=</span><span class="token string">&#39;replace&#39;</span><span class="token punctuation">)</span>

    DatabaseOperations<span class="token punctuation">.</span>last_executed_query <span class="token operator">=</span> last_executed_query


monkey_patch_mysql_db_operations<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u540E\u91CD\u542F\u5E94\u7528\uFF0C\u53D1\u73B0\u62A5\u9519\u6D88\u5931\uFF0C\u8BF4\u660E\u8865\u4E01\u751F\u6548\u4E86\u3002</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220728070410.png" alt="" loading="lazy"></p><h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u{1F92B} \u6CE8\u610F</h3><p>\u7531\u4E8Epython\u8BED\u6CD5\u8FC7\u4E8E\u7075\u6D3B\u4F7F\u5F97\u5B83\u53EF\u4EE5\u6709\u975E\u5E38\u591A\u7684\u300E\u9A9A\u64CD\u4F5C\u300F\uFF0C\u4F46\u662F\u6211\u4EEC\u5E94\u8BE5\u6E05\u695A\uFF0C\u4EE3\u7801\u4E00\u6837\u4E5F\u662F\u4EE5\u4EBA\u4E3A\u672C\uFF0C\u4EBA\u7C7B\u80FD\u8BFB\u61C2\uFF0C\u5176\u6B21\u662F\u673A\u5668\u80FD\u8BC6\u522B\u3002\u8FC7\u591A\u7684\u4F9D\u8D56\u8FD9\u7C7B\u7279\u6027\u53EF\u80FD\u4F1A\u5F15\u53D1\u81EA\u5DF1\u65E0\u6CD5\u9884\u89C1\u7684bug\u3002</p>`,9);function q(w,x){const a=i("ExternalLinkIcon");return p(),c("div",null,[n("h1",u,[r,d,n("a",k,[m,t(a)])]),h,n("p",null,[n("a",b,[g,t(a)])]),n("p",null,[v,n("a",_,[f,t(a)]),y]),j])}var T=e(l,[["render",q],["__file","python-monkey-patch.html.vue"]]);export{T as default};
