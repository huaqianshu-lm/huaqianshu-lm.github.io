// import Typed from 'typed';
async function fetchHitokoto() {
  const response = await fetch('https://v1.hitokoto.cn')
  const { uuid, hitokoto: hitokotoText, from, from_who } = await response.json()
  const hitokoto = document.querySelector('.vp-blog-hero-description')
  hitokoto.href = `https://hitokoto.cn/?uuid=${uuid}`
  hitokoto.innerText = hitokotoText + (from_who ? '——' + from_who : '');
}

fetchHitokoto();
setTimeout(() => {
  fetchHitokoto();
}, 1 * 1000 * 60 * 30);


