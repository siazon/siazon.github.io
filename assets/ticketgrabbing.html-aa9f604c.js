import{_ as n,o as s,c as a,b as p}from"./app-d957e06c.js";const e={},t=p(`<h1 id="rfidsystem" tabindex="-1"><a class="header-anchor" href="#rfidsystem" aria-hidden="true">#</a> RFIDSystem</h1><h2 id="introduce" tabindex="-1"><a class="header-anchor" href="#introduce" aria-hidden="true">#</a> Introduce</h2><p>ADB controls the smart phone and Autohotkey automates the workflow. This project uses the platform rules to achieve the goal of ticket-grabbing faster than human actions.</p><h2 id="partial-code" tabindex="-1"><a class="header-anchor" href="#partial-code" aria-hidden="true">#</a> Partial code</h2><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code>
<span class="token directive important">#x</span><span class="token punctuation">:</span><span class="token punctuation">:</span>
qty <span class="token operator">:=</span> <span class="token number">1</span> <span class="token comment">;数量</span>

<span class="token keyword">global</span> referX <span class="token operator">:=</span> <span class="token number">452</span>
<span class="token keyword">global</span> referY <span class="token operator">:=</span> <span class="token number">983</span>
<span class="token command selector">WinGetPos</span><span class="token punctuation">,</span> X<span class="token punctuation">,</span> Y<span class="token punctuation">,</span> Width<span class="token punctuation">,</span> Height<span class="token punctuation">,</span> A  <span class="token comment">; &quot;A&quot; 表示获取活动窗口的位置.</span>
<span class="token keyword">global</span> currWidth <span class="token operator">:=</span> Width
<span class="token keyword">global</span> currHeight <span class="token operator">:=</span> Height
<span class="token keyword">global</span> titleHeight <span class="token operator">:=</span> <span class="token number">30</span>

<span class="token keyword">global</span> gap <span class="token operator">:=</span> <span class="token number">80</span> <span class="token comment">;列表间隔</span>
<span class="token keyword">global</span> inputFirst <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">340</span><span class="token punctuation">,</span><span class="token number">355</span><span class="token punctuation">]</span> <span class="token comment">;输入框</span>
<span class="token keyword">global</span> btnQtyOK <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">295</span><span class="token punctuation">,</span><span class="token number">635</span><span class="token punctuation">]</span> <span class="token comment">;数量确定</span>
<span class="token keyword">global</span> btnModule <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">70</span><span class="token punctuation">,</span><span class="token number">840</span><span class="token punctuation">]</span> <span class="token comment">;打新模块按钮</span>
<span class="token keyword">global</span> btnStart <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token number">945</span><span class="token punctuation">]</span> <span class="token comment">;长条申购按钮</span>
<span class="token keyword">global</span> btnBack <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">95</span><span class="token punctuation">]</span> <span class="token comment">;返回键</span>
<span class="token keyword">global</span> tagNull <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">266</span><span class="token punctuation">,</span><span class="token number">545</span><span class="token punctuation">]</span> <span class="token comment">;未开始的红色三角标识</span>
<span class="token keyword">global</span> orderheader <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token number">330</span><span class="token punctuation">]</span> <span class="token comment">;订单Header</span>
<span class="token keyword">global</span> btncheckAll <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">,</span><span class="token number">945</span><span class="token punctuation">]</span> <span class="token comment">;全选按钮</span>
<span class="token keyword">global</span> btnSubmit <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">375</span><span class="token punctuation">,</span><span class="token number">950</span><span class="token punctuation">]</span> <span class="token comment">;提交</span>
<span class="token keyword">global</span> btnSubmitCheck <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">315</span><span class="token punctuation">,</span><span class="token number">670</span><span class="token punctuation">]</span> <span class="token comment">;申购确认</span>
<span class="token keyword">global</span> btnOK <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">235</span><span class="token punctuation">,</span><span class="token number">765</span><span class="token punctuation">]</span> <span class="token comment">;确认</span>
<span class="token keyword">global</span> btnFirst <span class="token operator">:=</span><span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">,</span><span class="token number">350</span><span class="token punctuation">]</span> <span class="token comment">;第一个选框</span>
stop <span class="token operator">:=</span> <span class="token boolean">false</span>

<span class="token command selector">Loop</span>
<span class="token punctuation">{</span>

  <span class="token command selector">GetKeyState</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token symbol">Shift</span>
  <span class="token keyword">if</span> state <span class="token operator">=</span> D
    stop <span class="token operator">:=</span> <span class="token boolean">true</span>
    <span class="token function">WaitForModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token command selector">Sleep</span> <span class="token number">20</span>
  <span class="token function">OnClick</span><span class="token punctuation">(</span>btnModule<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>btnModule<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token command selector">Sleep</span> <span class="token number">20</span>
  <span class="token comment">;等待列表加载061017</span>
  <span class="token function">WaitForShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token command selector">Sleep</span> <span class="token number">20</span>
  <span class="token comment">;一键申购</span>
  <span class="token function">OnClick</span><span class="token punctuation">(</span>btnStart<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>btnStart<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token function">waitOrderShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">waitForOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token command selector">MsgBox</span> <span class="token number">1</span>
  
  <span class="token comment">;hasCode := checkColor(188,335,0xF5F5F5)</span>
  <span class="token comment">;if(hasCode=true)</span>
  <span class="token comment">;{</span>
  <span class="token comment">;  return</span>
  <span class="token comment">;}</span>
  <span class="token comment">;login()</span>
  isSuccsse <span class="token operator">:=</span><span class="token function">isStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isSuccsse<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    stop <span class="token operator">:=</span> <span class="token boolean">true</span>
    <span class="token keyword">Submit</span><span class="token punctuation">(</span>qty<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span>
  <span class="token punctuation">{</span>
    <span class="token command selector">Sleep</span> <span class="token number">20</span>
    <span class="token comment">;返回</span>
    <span class="token function">OnClick</span><span class="token punctuation">(</span>btnBack<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>btnBack<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token command selector">sleep</span> <span class="token number">20</span>
    <span class="token function">OnClick</span><span class="token punctuation">(</span>btnBack<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>btnBack<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">Until</span> stop
<span class="token comment">;MsgBox Stop</span>
<span class="token command selector">return</span>
<span class="token keyword">Submit</span><span class="token punctuation">(</span>qty<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">count</span> <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">count</span> <span class="token operator">&lt;</span>  qty<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    y <span class="token operator">:=</span> inputFirst<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    Y <span class="token operator">:=</span> <span class="token keyword">count</span> <span class="token operator">*</span> gap <span class="token operator">+</span> y
    <span class="token function">qtyInput</span><span class="token punctuation">(</span>Y<span class="token punctuation">)</span>
    <span class="token keyword">count</span><span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token command selector">Sleep</span> <span class="token number">50</span>
  <span class="token comment">;全选</span>
  <span class="token function">OnClick</span><span class="token punctuation">(</span>btncheckAll<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>btncheckAll<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token command selector">Sleep</span> <span class="token number">30</span>
  <span class="token comment">;提交</span>
  <span class="token function">OnClick</span><span class="token punctuation">(</span>btnSubmit<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>btnSubmit<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token command selector">Sleep</span> <span class="token number">50</span>
  <span class="token comment">;申购确认</span>
  <span class="token function">OnClick</span><span class="token punctuation">(</span>btnSubmitCheck<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>btnSubmitCheck<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token command selector">Sleep</span> <span class="token number">50</span>
  <span class="token comment">;申购确认</span>
  <span class="token function">OnClick</span><span class="token punctuation">(</span>btnOK<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>btnOK<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">; 输入数量</span>
<span class="token function">qtyInput</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  X <span class="token operator">:=</span> inputFirst<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token command selector">Sleep</span> <span class="token number">50</span>
  <span class="token function">OnClick</span><span class="token punctuation">(</span>inputFirst<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>y<span class="token punctuation">)</span>
  <span class="token command selector">Sleep</span> <span class="token number">50</span>
  <span class="token comment">;数量确定</span>
  <span class="token function">OnClick</span><span class="token punctuation">(</span>btnQtyOK<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>btnQtyOK<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
   
<span class="token punctuation">}</span>
<span class="token comment">;等待回到首页</span>
<span class="token function">WaitForModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  showed <span class="token operator">:=</span> <span class="token boolean">false</span>
  <span class="token keyword">global</span> <span class="token keyword">count</span> <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token command selector">Loop</span>
  <span class="token punctuation">{</span> 
     <span class="token command selector">GetKeyState</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token symbol">Shift</span>
    <span class="token keyword">if</span> state <span class="token operator">=</span> D
      showed <span class="token operator">:=</span> <span class="token boolean">true</span>
    <span class="token command selector">sleep</span> <span class="token number">5</span>
      showed <span class="token operator">:=</span> <span class="token function">checkColor</span><span class="token punctuation">(</span><span class="token number">451</span><span class="token punctuation">,</span><span class="token number">926</span><span class="token punctuation">,</span><span class="token number">0xFFFFFF</span><span class="token punctuation">)</span>
    <span class="token keyword">count</span> <span class="token operator">++</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">count</span> <span class="token operator">&gt;</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token comment">;500ms超时跳出 </span>
    showed <span class="token operator">:=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">Until</span> showed
<span class="token punctuation">}</span>
<span class="token comment">;等待列表界面加载完成</span>
<span class="token function">WaitForShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  showed <span class="token operator">:=</span> <span class="token boolean">false</span>
  <span class="token keyword">global</span> <span class="token keyword">count</span> <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token command selector">Loop</span>
  <span class="token punctuation">{</span>
    <span class="token command selector">GetKeyState</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token symbol">Shift</span>
    <span class="token keyword">if</span> state <span class="token operator">=</span> D
       showed <span class="token operator">:=</span> <span class="token boolean">true</span>
    <span class="token command selector">sleep</span> <span class="token number">5</span>
    showed <span class="token operator">:=</span> <span class="token function">ListShowed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">count</span> <span class="token operator">++</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">count</span> <span class="token operator">&gt;</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">;800ms超时跳出 </span>
    showed <span class="token operator">:=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">Until</span> showed
<span class="token punctuation">}</span>
<span class="token comment">;判断一键申购是否可以点击</span>
<span class="token function">ListShowed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  locx <span class="token operator">:=</span><span class="token function">GetGlobalX</span><span class="token punctuation">(</span>btnStart<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  locy <span class="token operator">:=</span><span class="token function">GetGlobalY</span><span class="token punctuation">(</span>btnStart<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token command selector">PixelGetColor</span><span class="token punctuation">,</span> <span class="token keyword">color</span><span class="token punctuation">,</span> locx<span class="token punctuation">,</span> locy
  str <span class="token operator">:=</span> <span class="token builtin">SubStr</span><span class="token punctuation">(</span><span class="token keyword">color</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token command selector">MsgBox</span> ListShowed<span class="token punctuation">:</span><span class="token variable">%locx%</span><span class="token punctuation">,</span><span class="token variable">%locy%</span><span class="token punctuation">,</span><span class="token variable">%color%</span>
  <span class="token keyword">if</span> str <span class="token keyword">in</span> <span class="token number">4</span>C<span class="token punctuation">,</span><span class="token number">4</span>D<span class="token punctuation">,</span><span class="token number">4</span>A<span class="token punctuation">,</span><span class="token number">49</span><span class="token punctuation">,</span><span class="token number">48</span><span class="token punctuation">,</span><span class="token number">4</span>A<span class="token punctuation">,</span><span class="token number">4</span>B
   showed <span class="token operator">:=</span> <span class="token boolean">true</span>
  <span class="token keyword">else</span>
    showed <span class="token operator">:=</span> <span class="token boolean">false</span>
    <span class="token command selector">return</span>  showed
<span class="token punctuation">}</span>
<span class="token comment">; 检查订单页面打开</span>
<span class="token function">waitOrderShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   showed <span class="token operator">:=</span> <span class="token boolean">false</span>
  <span class="token keyword">global</span> <span class="token keyword">count</span> <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token command selector">Loop</span>
  <span class="token punctuation">{</span> 
    <span class="token command selector">GetKeyState</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token symbol">Shift</span>
    <span class="token keyword">if</span> state <span class="token operator">=</span> D
       showed <span class="token operator">:=</span> <span class="token boolean">true</span>
    <span class="token command selector">sleep</span> <span class="token number">5</span>

    locx <span class="token operator">:=</span><span class="token function">GetGlobalX</span><span class="token punctuation">(</span>orderheader<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    locy <span class="token operator">:=</span><span class="token function">GetGlobalY</span><span class="token punctuation">(</span>orderheader<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    showed <span class="token operator">:=</span> <span class="token function">checkColor</span><span class="token punctuation">(</span>locx<span class="token punctuation">,</span>locy<span class="token punctuation">,</span><span class="token number">0xFDFFFD</span><span class="token punctuation">)</span> <span class="token comment">;检查为空蓝条标识</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>showed<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">)</span> 
    showed <span class="token operator">:=</span> <span class="token function">checkColor</span><span class="token punctuation">(</span>locx<span class="token punctuation">,</span>locy<span class="token punctuation">,</span><span class="token number">0xFFFFFF</span><span class="token punctuation">)</span> <span class="token comment">;检查为空蓝条标识</span>
    <span class="token keyword">count</span> <span class="token operator">++</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">count</span> <span class="token operator">&gt;</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">;800ms超时跳出 </span>
    showed <span class="token operator">:=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">Until</span> showed
<span class="token punctuation">}</span>

<span class="token function">waitForOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  isChecked <span class="token operator">:=</span> <span class="token boolean">false</span>
  <span class="token keyword">global</span> <span class="token keyword">count</span> <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token command selector">Loop</span>
  <span class="token punctuation">{</span>
    <span class="token command selector">GetKeyState</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token symbol">Shift</span>
    <span class="token keyword">if</span> state <span class="token operator">=</span> D
       isChecked <span class="token operator">:=</span> <span class="token boolean">true</span>
    <span class="token function">OnClick</span><span class="token punctuation">(</span>btnFirst<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>btnFirst<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token command selector">sleep</span> <span class="token number">5</span>
     locx <span class="token operator">:=</span><span class="token function">GetGlobalX</span><span class="token punctuation">(</span>btnFirst<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    locy <span class="token operator">:=</span><span class="token function">GetGlobalY</span><span class="token punctuation">(</span>btnFirst<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    notChecked <span class="token operator">:=</span> <span class="token function">checkColor</span><span class="token punctuation">(</span>locx<span class="token punctuation">,</span>locy<span class="token punctuation">,</span><span class="token number">0xFFFFFF</span><span class="token punctuation">)</span>  
    <span class="token keyword">if</span><span class="token punctuation">(</span>notChecked<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">)</span> 
      notChecked <span class="token operator">:=</span> <span class="token function">checkColor</span><span class="token punctuation">(</span>locx<span class="token punctuation">,</span>locy<span class="token punctuation">,</span><span class="token number">0xFDFFFD</span><span class="token punctuation">)</span>  
    <span class="token keyword">if</span><span class="token punctuation">(</span>notChecked<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">)</span> 
      notChecked <span class="token operator">:=</span> <span class="token function">checkColor</span><span class="token punctuation">(</span>locx<span class="token punctuation">,</span>locy<span class="token punctuation">,</span><span class="token number">0xFBFFFF</span><span class="token punctuation">)</span> 
    <span class="token keyword">if</span><span class="token punctuation">(</span>notChecked<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">)</span> 
      notChecked <span class="token operator">:=</span> <span class="token function">checkColor</span><span class="token punctuation">(</span>locx<span class="token punctuation">,</span>locy<span class="token punctuation">,</span><span class="token number">0xFDFFFF</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>notChecked<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">)</span> 
      notChecked <span class="token operator">:=</span> <span class="token function">checkColor</span><span class="token punctuation">(</span>locx<span class="token punctuation">,</span>locy<span class="token punctuation">,</span><span class="token number">0xFCFEFE</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>notChecked<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      isChecked <span class="token operator">:=</span> <span class="token boolean">true</span> <span class="token comment">;如果点击后非白色，则跳出等待</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>isChecked<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      isRed <span class="token operator">:=</span> <span class="token function">isStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">;查找红色标识</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>isRed<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">)</span>
          isChecked <span class="token operator">:=</span> <span class="token boolean">true</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">count</span> <span class="token operator">++</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">count</span> <span class="token operator">&gt;</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">;超时跳出 </span>
      isChecked <span class="token operator">:=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">Until</span> isChecked
<span class="token punctuation">}</span>
<span class="token comment">;通过RGB颜色判断是否红色，非红色为已上架 </span>
<span class="token function">isStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  X <span class="token operator">:=</span><span class="token function">GetGlobalX</span><span class="token punctuation">(</span>tagNull<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  Y <span class="token operator">:=</span> <span class="token function">GetGlobalY</span><span class="token punctuation">(</span>tagNull<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  
  <span class="token command selector">PixelGetColor</span><span class="token punctuation">,</span> <span class="token keyword">color</span><span class="token punctuation">,</span> <span class="token variable">%X%</span><span class="token punctuation">,</span> <span class="token variable">%Y%</span>
  str <span class="token operator">:=</span> <span class="token builtin">SubStr</span><span class="token punctuation">(</span><span class="token keyword">color</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token operator">&gt;</span><span class="token number">60</span><span class="token punctuation">)</span>
    isStart <span class="token operator">:=</span>  <span class="token boolean">true</span>
  <span class="token keyword">else</span>
    isStart <span class="token operator">:=</span>  <span class="token boolean">false</span>
  <span class="token command selector">return</span>  isStart
<span class="token punctuation">}</span>

<span class="token function">checkColor</span><span class="token punctuation">(</span>X<span class="token punctuation">,</span>Y<span class="token punctuation">,</span>Targetcolor<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token command selector">PixelGetColor</span><span class="token punctuation">,</span> <span class="token keyword">color</span><span class="token punctuation">,</span> <span class="token variable">%X%</span><span class="token punctuation">,</span> <span class="token variable">%Y%</span>
 <span class="token command selector">MsgBox</span> <span class="token variable">%X%</span><span class="token punctuation">,</span><span class="token variable">%Y%</span><span class="token punctuation">,</span><span class="token variable">%color%</span><span class="token punctuation">,</span><span class="token variable">%Targetcolor%</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">color</span><span class="token operator">=</span>Targetcolor<span class="token punctuation">)</span>
      isSuccsse<span class="token operator">:=</span> <span class="token boolean">true</span>
  <span class="token keyword">else</span> 
      isSuccsse<span class="token operator">:=</span> <span class="token boolean">false</span>
  <span class="token command selector">return</span> isSuccsse
<span class="token punctuation">}</span>
<span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  islogin <span class="token operator">:=</span> <span class="token function">checkColor</span><span class="token punctuation">(</span><span class="token number">216</span><span class="token punctuation">,</span><span class="token number">145</span><span class="token punctuation">,</span><span class="token number">0xFFFFFF</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>islogin<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
      <span class="token command selector">Send</span> <span class="token punctuation">{</span><span class="token command selector">Click</span> <span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">}</span><span class="token number">061017</span>
      <span class="token command selector">Send</span> <span class="token punctuation">{</span><span class="token command selector">Click</span> <span class="token number">243</span><span class="token punctuation">,</span> <span class="token number">351</span><span class="token punctuation">}</span> <span class="token comment">; 登录</span>
      <span class="token command selector">Sleep</span> <span class="token number">500</span>
      <span class="token command selector">Send</span> <span class="token punctuation">{</span><span class="token command selector">Click</span> <span class="token number">364</span><span class="token punctuation">,</span> <span class="token number">607</span><span class="token punctuation">}</span> <span class="token comment">; 登录确认</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token command selector">return</span>
<span class="token function">OnClick</span><span class="token punctuation">(</span>locationX<span class="token punctuation">,</span>locationY<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
 locx <span class="token operator">:=</span> <span class="token function">GetGlobalX</span><span class="token punctuation">(</span>locationX<span class="token punctuation">)</span>
 locy <span class="token operator">:=</span> <span class="token function">GetGlobalY</span><span class="token punctuation">(</span>locationY<span class="token punctuation">)</span>
   <span class="token command selector">Send</span> <span class="token punctuation">{</span><span class="token command selector">Click</span> <span class="token variable">%locx%</span><span class="token punctuation">,</span> <span class="token variable">%locy%</span><span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
<span class="token command selector">return</span>
<span class="token function">GetGlobalX</span><span class="token punctuation">(</span>locationX<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
 locx <span class="token operator">:=</span> locationX <span class="token operator">*</span> currWidth <span class="token operator">/</span> referX<span class="token operator">+</span><span class="token number">10</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>locx<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    locx<span class="token operator">=</span><span class="token number">10</span>
    <span class="token command selector">return</span> locx
<span class="token punctuation">}</span>
<span class="token command selector">return</span>
<span class="token function">GetGlobalY</span><span class="token punctuation">(</span>locationY<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
 locy <span class="token operator">:=</span> <span class="token punctuation">(</span>locationY<span class="token operator">-</span>titleHeight<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>currHeight<span class="token operator">-</span>titleHeight<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>referY<span class="token operator">-</span>titleHeight<span class="token punctuation">)</span><span class="token operator">+</span>titleHeight<span class="token operator">+</span><span class="token number">5</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>locy<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    locy<span class="token operator">=</span><span class="token number">10</span>
    <span class="token command selector">return</span> locy
<span class="token punctuation">}</span>
<span class="token command selector">return</span>
<span class="token directive important">#c</span><span class="token punctuation">:</span><span class="token punctuation">:</span>

 locx <span class="token operator">:=</span> <span class="token function">GetGlobalX</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
 locy <span class="token operator">:=</span> <span class="token function">GetGlobalY</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span>
   <span class="token command selector">Send</span> <span class="token punctuation">{</span><span class="token command selector">Click</span> <span class="token variable">%locx%</span><span class="token punctuation">,</span> <span class="token variable">%locy%</span><span class="token punctuation">}</span> 
<span class="token command selector">return</span>

<span class="token directive important">#z</span><span class="token punctuation">:</span><span class="token punctuation">:</span>

   <span class="token command selector">Send</span> <span class="token punctuation">{</span><span class="token command selector">Click</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">700</span><span class="token punctuation">}</span> 
<span class="token comment">;WinGetPos, X, Y, Width, Height, A  ; &quot;A&quot; 表示获取活动窗口的位置.</span>
<span class="token comment">;MsgBox %Width%,%Height%,%A%</span>
<span class="token command selector">return</span>

<span class="token directive important">#a</span><span class="token punctuation">:</span><span class="token punctuation">:</span>
<span class="token command selector">MouseGetPos</span><span class="token punctuation">,</span> MouseX<span class="token punctuation">,</span> MouseY
<span class="token command selector">PixelGetColor</span><span class="token punctuation">,</span> <span class="token keyword">color</span><span class="token punctuation">,</span> <span class="token variable">%MouseX%</span><span class="token punctuation">,</span> <span class="token variable">%MouseY%</span>
 str <span class="token operator">:=</span> <span class="token builtin">SubStr</span><span class="token punctuation">(</span><span class="token keyword">color</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token command selector">MsgBox</span> location <span class="token variable">%MouseX%</span><span class="token punctuation">,</span> <span class="token variable">%MouseY%</span> <span class="token keyword">color</span> <span class="token variable">%color%</span> <span class="token punctuation">,</span> <span class="token variable">%str%</span>
<span class="token command selector">return</span>

<span class="token function">findColor</span><span class="token punctuation">(</span>MouseX<span class="token punctuation">,</span>MouseY<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token command selector">PixelGetColor</span><span class="token punctuation">,</span> <span class="token keyword">color</span><span class="token punctuation">,</span> <span class="token variable">%MouseX%</span><span class="token punctuation">,</span> <span class="token variable">%MouseY%</span>
  <span class="token command selector">MsgBox</span> location <span class="token variable">%MouseX%</span><span class="token punctuation">,</span> <span class="token variable">%MouseY%</span> <span class="token keyword">color</span> <span class="token variable">%color%</span>
<span class="token punctuation">}</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","ticketgrabbing.html.vue"]]);export{k as default};
