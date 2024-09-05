---
home: true
layout: BlogHome
icon: home
title: 首页
heroImage:
heroText: 花千树的博客
heroFullScreen: false
tagline: Step by step, keep moving !!!
bgImage: /assets/bg/tree.jpg
projects:
  - icon: link
    name: web3 网址导航
    desc: 收集了一些 web3 相关的网站和工具，方便查找。
    link: https://web3-nav.vercel.app/

footer: 你真的读到这里了？那你一定超爱这个博客！
---

<script setup lang="ts">
  import Typed from 'typed.js';

  async function fetchHitokoto() {
    const response = await fetch('https://v1.hitokoto.cn')
    const { uuid, hitokoto: hitokotoText, from, from_who } = await response.json()
    if (typeof document!== 'undefined') {
    
        const hitokoto = document.querySelector('.vp-blog-hero-description')
        // hitokoto.href = `https://hitokoto.cn/?uuid=${uuid}`
        // hitokoto.innerText = hitokotoText + (from_who ? '——' + from_who : '');

        let text = hitokotoText + (from_who ? '——' + from_who : '');

        const typed = new Typed('.vp-blog-hero-description', {
          strings: [text],
          typeSpeed: 50,
          showCursor: true,
          cursorChar: '|',
          autoInsertCss: true,
        });
     }
  }

  fetchHitokoto();




</script>

<style lang="scss">
    .typed-cursor{
      opacity: 1;
      animation: typedjsBlink 0.7s infinite;
      -webkit-animation: typedjsBlink 0.7s infinite;
      animation: typedjsBlink 0.7s infinite;
    }
    @keyframes typedjsBlink{
      50% { opacity: 0.0; }
    }
    @-webkit-keyframes typedjsBlink{
      0% { opacity: 1; }
      50% { opacity: 0.0; }
      100% { opacity: 1; }
    }
    .typed-fade-out{
      opacity: 0;
      transition: opacity .25s;
      -webkit-animation: 0;
      animation: 0;
    }


.vp-blog-hero-description{
  display: inline-block;
}
</style>
