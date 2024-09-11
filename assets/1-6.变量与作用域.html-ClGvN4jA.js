import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,f as l,a as i,g as e}from"./app-B1K1yjnX.js";const t={},h=i("h1",{id:"变量与作用域",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#变量与作用域"},[i("span",null,"变量与作用域")])],-1),p=i("p",null,"在 Solidity 中，变量的作用域决定了变量的生命周期和访问权限。不同类型的变量有不同的作用域和存储位置。理解变量的作用域对于编写安全和高效的智能合约非常重要。",-1),d=e(`<p>Solidity 中的变量可以分为三大类：</p><ol><li><strong>状态变量（State Variables）</strong></li><li><strong>局部变量（Local Variables）</strong></li><li><strong>全局变量（Global Variables）</strong></li></ol><h2 id="_1-状态变量-state-variables" tabindex="-1"><a class="header-anchor" href="#_1-状态变量-state-variables"><span>1. 状态变量（State Variables）</span></a></h2><p>状态变量是存储在以太坊区块链上的数据，属于合约的永久存储。它们在合约的生命周期内保持不变，除非显式修改。状态变量存储在合约的 <code>storage</code> 区中。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点：</span></a></h3><ul><li>声明在合约的最外层，不在任何函数内部。</li><li>默认情况下，这些变量的作用域是合约级别的，整个合约中的函数都可以访问它们。</li><li>修改状态变量会影响区块链上的数据，并会消耗 <code>gas</code> 费用。</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例：</span></a></h3><div class="language-solidity line-numbers-mode" data-highlighter="shiki" data-ext="solidity" data-title="solidity" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">pragma</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> solidity</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> ^0.8.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">contract</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Example</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 状态变量，存储在区块链上</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">    uint</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> public</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> count;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 设置状态变量的值</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> setCount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">uint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> _count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        count </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> _count;  </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 修改 count 的值</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 获取状态变量的值</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getCount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> view</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> returns</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">uint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> count;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，<code>count</code> 是一个状态变量，存储在区块链的存储区中。调用 <code>setCount</code> 函数会修改 <code>count</code>，而 <code>getCount</code> 函数则返回它的值。</p><h2 id="_2-局部变量-local-variables" tabindex="-1"><a class="header-anchor" href="#_2-局部变量-local-variables"><span>2. 局部变量（Local Variables）</span></a></h2><p>局部变量只存在于函数的执行期间，它们存储在函数执行期间的内存（<code>memory</code>）中。局部变量的生命周期从函数开始到函数结束。与状态变量不同，局部变量不会存储在区块链上，因此不会消耗 <code>gas</code>。</p><h3 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1"><span>特点：</span></a></h3><ul><li>声明在函数内部。</li><li>只在当前函数的作用域内有效，函数执行完毕后就会被销毁。</li><li>局部变量不会消耗 <code>gas</code>，除非涉及对引用类型（如数组或结构体）的复杂操作。</li></ul><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例：</span></a></h3><div class="language-solidity line-numbers-mode" data-highlighter="shiki" data-ext="solidity" data-title="solidity" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">pragma</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> solidity</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> ^0.8.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">contract</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Example</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> calculateSum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">uint</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">uint</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> pure</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> returns</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">uint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 局部变量 sum，仅在函数内有效</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">        uint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sum </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sum;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>sum</code> 是一个局部变量，它只在 <code>calculateSum</code> 函数内部存在，函数执行完毕后，<code>sum</code> 就会被销毁。</p><h2 id="_3-全局变量-global-variables" tabindex="-1"><a class="header-anchor" href="#_3-全局变量-global-variables"><span>3. 全局变量（Global Variables）</span></a></h2><p>全局变量是由 Solidity 预定义的特殊变量和函数，它们提供了与区块链交互的信息，如区块时间戳、发送交易的地址、区块号等。这些变量在任何函数中都可以访问。</p><h3 id="常见的全局变量" tabindex="-1"><a class="header-anchor" href="#常见的全局变量"><span>常见的全局变量：</span></a></h3><ul><li><code>msg.sender</code>: 调用当前合约的地址。</li><li><code>msg.value</code>: 发送到合约的以太币数量。</li><li><code>block.timestamp</code>: 当前区块的时间戳。</li><li><code>block.number</code>: 当前区块的编号。</li><li><code>tx.gasprice</code>: 当前交易的 gas 价格。</li></ul><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2"><span>示例：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>solidity</span></span>
<span class="line"><span>pragma solidity ^0.8.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>contract Example {</span></span>
<span class="line"><span>    address public owner;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 构造函数，设置合约的拥有者</span></span>
<span class="line"><span>    constructor() {</span></span>
<span class="line"><span>        owner = msg.sender;  // 使用全局变量 msg.sender</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 返回当前区块的时间戳</span></span>
<span class="line"><span>    function getBlockTimestamp() public view returns (uint) {</span></span>
<span class="line"><span>        return block.timestamp;  // 使用全局变量 block.timestamp</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>msg.sender</code> 是一个全局变量，表示调用合约的地址，而 <code>block.timestamp</code> 返回当前区块的时间戳。</p><hr><h2 id="_4-变量的存储位置-storage-vs-memory" tabindex="-1"><a class="header-anchor" href="#_4-变量的存储位置-storage-vs-memory"><span>4. 变量的存储位置（Storage vs Memory）</span></a></h2><p>在 Solidity 中，变量的存储位置影响它们的生命周期和使用方式。主要有两种存储位置：</p><ul><li><strong>Storage</strong>：状态变量存储在区块链的持久存储中。修改 <code>storage</code> 中的数据需要消耗 <code>gas</code>，因为它会永久改变区块链上的数据。</li><li><strong>Memory</strong>：局部变量（尤其是引用类型，如数组和结构体）存储在内存中，函数调用结束时自动销毁，存储在内存中的数据不会被持久保存。</li></ul><h3 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3"><span>示例：</span></a></h3><div class="language-solidity line-numbers-mode" data-highlighter="shiki" data-ext="solidity" data-title="solidity" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">pragma</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> solidity</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> ^0.8.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">contract</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> StorageMemoryExample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 状态变量，存储在 storage 中</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">    uint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> numbers;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 将数组传递到 memory 中进行操作</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> addNumber</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">uint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> _number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 创建 memory 数组副本</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">        uint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">memory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tempNumbers </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> numbers;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        tempNumbers[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> _number;  </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 仅修改副本，不会影响原始数组</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 将修改后的数据存储到 storage</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        numbers.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(_number);  </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 修改 storage 中的状态变量</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>numbers</code> 是存储在 <code>storage</code> 中的状态变量。<code>tempNumbers</code> 是一个在内存中的数组副本，对它的修改不会影响原始的 <code>numbers</code> 数组。</p><hr><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>这一节介绍了变量的作用域，下面简单总结一下这一节的内容：</p><ul><li><strong>状态变量</strong>：存储在区块链上，作用域在整个合约中，永久保存，修改时会消耗 <code>gas</code>。</li><li><strong>局部变量</strong>：仅在函数内部有效，存储在内存中，不会消耗 <code>gas</code>（除非是复杂引用类型操作）。</li><li><strong>全局变量</strong>：预定义的特殊变量，提供与区块链交互的信息，如 <code>msg.sender</code>、<code>block.timestamp</code> 等。</li><li><strong>存储位置</strong>：<code>storage</code> 用于永久存储状态变量，<code>memory</code> 用于临时存储局部变量或引用类型数据。</li></ul><p>在 <a href="https://remix.ethereum.org/" target="_blank" rel="noopener noreferrer">Remix</a> 中试一试吧！</p>`,35);function r(k,c){return a(),n("div",null,[h,p,l(" more "),d])}const A=s(t,[["render",r],["__file","1-6.变量与作用域.html.vue"]]),y=JSON.parse('{"path":"/solidity/1-6.%E5%8F%98%E9%87%8F%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.html","title":"6.变量与作用域","lang":"zh-CN","frontmatter":{"title":"6.变量与作用域","date":"2024-09-08T00:00:00.000Z","categories":["Solidity"],"author":"花千树","description":"在 Solidity 中，变量的作用域决定了变量的生命周期和访问权限。不同类型的变量有不同的作用域和存储位置。理解变量的作用域对于编写安全和高效的智能合约非常重要。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/solidity/1-6.%E5%8F%98%E9%87%8F%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.html"}],["meta",{"property":"og:site_name","content":"花千树"}],["meta",{"property":"og:title","content":"6.变量与作用域"}],["meta",{"property":"og:description","content":"在 Solidity 中，变量的作用域决定了变量的生命周期和访问权限。不同类型的变量有不同的作用域和存储位置。理解变量的作用域对于编写安全和高效的智能合约非常重要。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T14:43:39.000Z"}],["meta",{"property":"article:author","content":"花千树"}],["meta",{"property":"article:published_time","content":"2024-09-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-11T14:43:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6.变量与作用域\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-11T14:43:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"花千树\\"}]}"]]},"headers":[{"level":2,"title":"1. 状态变量（State Variables）","slug":"_1-状态变量-state-variables","link":"#_1-状态变量-state-variables","children":[{"level":3,"title":"特点：","slug":"特点","link":"#特点","children":[]},{"level":3,"title":"示例：","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"2. 局部变量（Local Variables）","slug":"_2-局部变量-local-variables","link":"#_2-局部变量-local-variables","children":[{"level":3,"title":"特点：","slug":"特点-1","link":"#特点-1","children":[]},{"level":3,"title":"示例：","slug":"示例-1","link":"#示例-1","children":[]}]},{"level":2,"title":"3. 全局变量（Global Variables）","slug":"_3-全局变量-global-variables","link":"#_3-全局变量-global-variables","children":[{"level":3,"title":"常见的全局变量：","slug":"常见的全局变量","link":"#常见的全局变量","children":[]},{"level":3,"title":"示例：","slug":"示例-2","link":"#示例-2","children":[]}]},{"level":2,"title":"4. 变量的存储位置（Storage vs Memory）","slug":"_4-变量的存储位置-storage-vs-memory","link":"#_4-变量的存储位置-storage-vs-memory","children":[{"level":3,"title":"示例：","slug":"示例-3","link":"#示例-3","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1726065819000,"updatedTime":1726065819000,"contributors":[{"name":"huaqianshu","email":"huaqianshu.lm@gmail.com","commits":1}]},"readingTime":{"minutes":4.21,"words":1263},"filePathRelative":"solidity/1-6.变量与作用域.md","localizedDate":"2024年9月8日","excerpt":"\\n<p>在 Solidity 中，变量的作用域决定了变量的生命周期和访问权限。不同类型的变量有不同的作用域和存储位置。理解变量的作用域对于编写安全和高效的智能合约非常重要。</p>\\n","autoDesc":true}');export{A as comp,y as data};
