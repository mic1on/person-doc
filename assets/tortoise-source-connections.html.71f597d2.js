import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.aca78d73.js";const e={},o=t(`<h3 id="\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F" aria-hidden="true">#</a> \u573A\u666F</h3><p>\u5728fastapi\u4E2D\u4F7F\u7528tortoise\uFF0C\u4E00\u822C\u6765\u8BF4\u9700\u8981\u5728app\u542F\u52A8\u65F6\u5019\u6CE8\u518Ctornoise\u7684\u8FDE\u63A5\uFF0C\u8FD9\u6837\u624D\u80FD\u5728app\u4E2D\u4F7F\u7528tortoise\uFF0C\u5426\u5219\u65E0\u6CD5\u4F7F\u7528\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>register_tortoise<span class="token punctuation">(</span>
    app<span class="token punctuation">,</span>
    config<span class="token operator">=</span>DB_ORM_CONFIG
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800Cregister_tortoise\u7684\u80CC\u540E\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u76D1\u542C\u4E86fastapi\u7684\u542F\u52A8\uFF0C\u6267\u884C<code>Tortoise.init</code>\u65B9\u6CD5\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># connections is a singleton instance of the ConnectionHandler class and serves as the</span>
<span class="token comment"># entrypoint to access all connection management APIs.</span>
<span class="token keyword">from</span> tortoise <span class="token keyword">import</span> connections


<span class="token comment"># Assume that this is the Tortoise configuration used</span>
<span class="token keyword">await</span> Tortoise<span class="token punctuation">.</span>init<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;connections&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;default&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;engine&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;tortoise.backends.sqlite&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;credentials&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&quot;file_path&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;example.sqlite3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;apps&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;events&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&quot;models&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;__main__&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;default_connection&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

conn<span class="token punctuation">:</span> BaseDBAsyncClient <span class="token operator">=</span> connections<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">await</span> conn<span class="token punctuation">.</span>execute_query<span class="token punctuation">(</span><span class="token string">&#39;SELECT * FROM &quot;event&quot;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> OperationalError<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Expected it to fail&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u7B2C\u4E00\u4E2A\u53C2\u6570\u5C31\u662F\u521D\u59CB\u5316\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u6211\u4EEC\u8FD9\u6B21\u4E3B\u8981\u5B66\u4E60\u7684\u5C31\u662F<code>connections</code>\u7684\u6E90\u7801\u5B9E\u73B0\u3002</p><p>\u5B83\uFF0C\u662F\u5982\u4F55\u505A\u5230\u901A\u8FC7\u914D\u7F6E\u4E0D\u540C\u7684<code>engine</code>\u6765\u521B\u5EFA\u4E0D\u540C\u7684<code>connection</code>\u7684\u3002 \u5E76\u4E14\u80FD\u591F\u8C03\u7528\u4E00\u6837\u7684\u4EE3\u7801\u517C\u5BB9\u5404\u79CD\u6570\u636E\u5E93\u7684\u64CD\u4F5C\u3002</p><h3 id="\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a> \u6E90\u7801</h3><p>\u6709\u7ECF\u9A8C\u7684\u540C\u5B66\u53EF\u4EE5\u77E5\u9053\uFF0C\u914D\u7F6E\u6587\u4EF6\u4E2D<code>engine</code>\u7684\u5C5E\u6027\u503C\u5176\u5B9E\u662F\u4E00\u4E2A\u5305\u8DEF\u5F84\u3002\u8FD9\u4E2A\u5305\u6240\u5904\u7684\u4F4D\u7F6E\u5C31\u662F<code>tortoise/backends/sqlite</code></p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220614152933.png" alt="" loading="lazy"></p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u6211\u628A\u8FD9\u4E2A<code>engine</code>\u6539\u6210<code>tortoise.backends.mysql</code>\uFF0C\u90A3\u4E48\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A<code>mysql</code>\u7684\u8FDE\u63A5\u3002</p><p>\u901A\u8FC7\u89C2\u5BDF\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784\uFF0C\u53EF\u4EE5\u53D1\u73B0\u4E00\u4E2A\u5171\u540C\u7279\u5F81\uFF0C\u6BCF\u4E2Abackend\u5305\u4E2D\uFF0C\u9664\u4E86base\u57FA\u7C7B\u5916\u90FD\u901A\u8FC7__init__\u66B4\u9732\u51FA\u5176\u81EA\u8EAB\u7684\u7C7B\uFF0C\u5E76\u628A\u540D\u5B57\u90FD\u53D6\u4E3A\uFF1A<code>client_class</code>\u3002</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220614153437.png" alt="" loading="lazy"></p><p>\u8FD9\u6837\u505A\u7684\u4E00\u4E2A\u597D\u5904\u5C31\u662F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>\u67D0\u4E2A\u65B9\u6CD5</code>\u6765\u83B7\u53D6\u5230\u76F8\u5E94\u7684<code>client_class</code>\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u8C03\u7528\u76F8\u5E94\u7684\u65B9\u6CD5\u4E86\u3002</p><p>\u4E86\u89E3\u4E86\u5927\u6982\u7684\u76EE\u5F55\u7ED3\u6784\uFF0C\u6211\u4EEC\u8FD8\u662F\u56DE\u5230\u6700\u521D \u521D\u59CB\u5316\u7684\u90A3\u4E2A\u65B9\u6CD5<code>Tortoise.init</code>\u3002</p><p>\u8FDB\u5165\u8BE5\u6587\u4EF6<code>tortoise/__init__.py</code>\u4E2D\u770B\u5230\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">init</span><span class="token punctuation">(</span>
        cls<span class="token punctuation">,</span>
        config<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">dict</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
        config_file<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
        _create_db<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
        db_url<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
        modules<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">[</span>Union<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> ModuleType<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
        use_tz<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
        timezone<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;UTC&quot;</span><span class="token punctuation">,</span>
        routers<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>List<span class="token punctuation">[</span>Union<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> Type<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    
        <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_inited<span class="token punctuation">:</span>
            <span class="token keyword">await</span> connections<span class="token punctuation">.</span>close_all<span class="token punctuation">(</span>discard<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
            <span class="token keyword">await</span> cls<span class="token punctuation">.</span>_reset_apps<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token builtin">bool</span><span class="token punctuation">(</span>config_file<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token builtin">bool</span><span class="token punctuation">(</span>db_url<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> ConfigurationError<span class="token punctuation">(</span>
                <span class="token string">&#39;You should init either from &quot;config&quot;, &quot;config_file&quot; or &quot;db_url&quot;&#39;</span>
            <span class="token punctuation">)</span>
        \u2026\u2026

        cls<span class="token punctuation">.</span>_init_timezone<span class="token punctuation">(</span>use_tz<span class="token punctuation">,</span> timezone<span class="token punctuation">)</span>
        <span class="token comment"># \u5728\u8FD9\u91CC\u521D\u59CB\u5316connections</span>
        <span class="token keyword">await</span> connections<span class="token punctuation">.</span>_init<span class="token punctuation">(</span>connections_config<span class="token punctuation">,</span> _create_db<span class="token punctuation">)</span>
        cls<span class="token punctuation">.</span>_init_apps<span class="token punctuation">(</span>apps_config<span class="token punctuation">)</span>
        cls<span class="token punctuation">.</span>_init_routers<span class="token punctuation">(</span>routers<span class="token punctuation">)</span>

        cls<span class="token punctuation">.</span>_inited <span class="token operator">=</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u4E2A\u65AD\u70B9\uFF0C\u53EF\u4EE5\u53D1\u73B0\uFF0C\u5728<code>_init_connections</code>\u65B9\u6CD5\u4E2D\uFF0C\u904D\u5386\u914D\u7F6E\u9879\u76EE\u4E2D\uFF0C\u6240\u6709connections\uFF0C\u7136\u540E\u5C06\u5176\u521B\u5EFA\u5BF9\u8C61\u3002</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220614154541.png" alt="" loading="lazy"></p><p>\u4F7F\u7528<code>self.get</code>\uFF0C\u4F20\u5165<code>name</code>\uFF0C\u8FD9\u4E2Aname\u5C31\u662F\u914D\u7F6E\u4E2D\u952E\u540D<code>default</code>\uFF0C\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u76F8\u5E94\u7684<code>connection</code>\u5BF9\u8C61\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> conn_alias<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token string">&quot;BaseDBAsyncClient&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># \u7F13\u5B58</span>
    storage<span class="token punctuation">:</span> Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token string">&quot;BaseDBAsyncClient&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>_get_storage<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># \u5982\u679C\u7F13\u5B58\u4E2D\u6709\uFF0C\u76F4\u63A5\u8FD4\u56DE</span>
        <span class="token keyword">return</span> storage<span class="token punctuation">[</span>conn_alias<span class="token punctuation">]</span>
    <span class="token keyword">except</span> KeyError<span class="token punctuation">:</span>
        <span class="token comment"># \u5982\u679C\u7F13\u5B58\u4E2D\u6CA1\u6709\uFF0C\u5219\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8FDE\u63A5\uFF0C\u5E76\u5C06\u5176\u7F13\u5B58\u8D77\u6765</span>
        connection<span class="token punctuation">:</span> BaseDBAsyncClient <span class="token operator">=</span> self<span class="token punctuation">.</span>_create_connection<span class="token punctuation">(</span>conn_alias<span class="token punctuation">)</span>
        storage<span class="token punctuation">[</span>conn_alias<span class="token punctuation">]</span> <span class="token operator">=</span> connection
        <span class="token keyword">return</span> connection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528<code>self._create_connection</code>\u6765\u521B\u5EFA\u65B0\u7684\u8FDE\u63A5\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">_create_connection</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> conn_alias<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token string">&quot;BaseDBAsyncClient&quot;</span><span class="token punctuation">:</span>
    db_info <span class="token operator">=</span> self<span class="token punctuation">.</span>_get_db_info<span class="token punctuation">(</span>conn_alias<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>db_info<span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        db_info <span class="token operator">=</span> expand_db_url<span class="token punctuation">(</span>db_info<span class="token punctuation">)</span>
    <span class="token comment"># \u901A\u8FC7_discover_client_class\u6765\u83B7\u53D6\u76F8\u5E94\u7684client_class\uFF0Cclient_class\uFF0C\u6709\u6CA1\u6709\u5F88\u719F\u6089\uFF1F</span>
    client_class <span class="token operator">=</span> self<span class="token punctuation">.</span>_discover_client_class<span class="token punctuation">(</span>db_info<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;engine&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># \u8BA4\u8BC1\u4FE1\u606F\u653E\u5728credentials\u4E2D</span>
    db_params <span class="token operator">=</span> db_info<span class="token punctuation">[</span><span class="token string">&quot;credentials&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>
    db_params<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;connection_name&quot;</span><span class="token punctuation">:</span> conn_alias<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment"># \u4E00\u5E76\u4F20\u7ED9\u6570\u636E\u5E93class</span>
    connection<span class="token punctuation">:</span> <span class="token string">&quot;BaseDBAsyncClient&quot;</span> <span class="token operator">=</span> client_class<span class="token punctuation">(</span><span class="token operator">**</span>db_params<span class="token punctuation">)</span>
    <span class="token keyword">return</span> connection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">_discover_client_class</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> engine<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Type<span class="token punctuation">[</span><span class="token string">&quot;BaseDBAsyncClient&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token comment"># Let exception bubble up for transparency</span>
    <span class="token comment"># \u539F\u6765\u5728\u8FD9\u91CC\uFF0C\u5C06\`tortoise.backends.sqlite\`\u8FD9\u6837\u7684\u5305\u8DEF\u5F84import\u53D8\u6210\u6A21\u5757</span>
    engine_module <span class="token operator">=</span> importlib<span class="token punctuation">.</span>import_module<span class="token punctuation">(</span>engine<span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># \u5982\u679C\u5728\u8FD9\u4E2A\u5305\u4E2D\uFF0C\u6709\`client_class\`\uFF0C\u90A3\u4E48\u5C31\u8FD4\u56DE\u8FD9\u4E2A\`client_class\`</span>
        client_class <span class="token operator">=</span> engine_module<span class="token punctuation">.</span>client_class
    <span class="token keyword">except</span> AttributeError<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> ConfigurationError<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Backend for engine &quot;</span><span class="token interpolation"><span class="token punctuation">{</span>engine<span class="token punctuation">}</span></span><span class="token string">&quot; does not implement db client&#39;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> client_class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\uFF0C\u4E5F\u540C\u65F6\u5B9E\u73B0\u4E86\u591A\u4E2A\u6570\u636E\u5E93\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;connections&quot;: {
    &quot;default&quot;: {
        &quot;engine&quot;: &quot;tortoise.backends.sqlite&quot;,
        &quot;credentials&quot;: {&quot;file_path&quot;: &quot;example.sqlite3&quot;},
    },
    &quot;db2&quot;: {
        &quot;engine&quot;: &quot;tortoise.backends.mysql&quot;,
        &quot;credentials&quot;: {},
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7<code>connections.get(&#39;default&#39;)</code>\u6216\u8005<code>connections.get(&#39;db2&#39;)</code>\uFF0C\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u4E0D\u540C\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u3002</p><h4 id="\u5B9E\u73B0\u62BD\u8C61\u7C7Bbasedbasyncclient" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u62BD\u8C61\u7C7Bbasedbasyncclient" aria-hidden="true">#</a> \u5B9E\u73B0\u62BD\u8C61\u7C7BBaseDBAsyncClient</h4><p>\u6240\u6709\u7684\u6570\u636E\u5E93\u90FD\u7EE7\u627F\u81EA<code>BaseDBAsyncClient</code>\uFF0C\u8FD9\u4E2A\u7C7B\u662F\u4E00\u4E2A\u62BD\u8C61\u7C7B\uFF0C\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528\uFF0C\u800C\u662F\u9700\u8981\u5B50\u7C7B\u6765\u5B9E\u73B0\u3002</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220614155638.png" alt="" loading="lazy"></p><p>\u53EA\u9700\u8981\u6309\u7167\u5B83\u7684\u7EA6\u675F\uFF0C\u5B9E\u73B0\u5FC5\u8981\u7684\u65B9\u6CD5\uFF0C\u5C31\u53EF\u4EE5\u5F00\u53D1\u81EA\u5DF1\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u3002</p><h3 id="\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A\u52A8\u6001\u5BFC\u5165\u7684\u6570\u636E\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A\u52A8\u6001\u5BFC\u5165\u7684\u6570\u636E\u6A21\u578B" aria-hidden="true">#</a> \u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A\u52A8\u6001\u5BFC\u5165\u7684\u6570\u636E\u6A21\u578B</h3><p>TODO</p>`,33),p=[o];function c(i,l){return s(),a("div",null,p)}var r=n(e,[["render",c],["__file","tortoise-source-connections.html.vue"]]);export{r as default};
