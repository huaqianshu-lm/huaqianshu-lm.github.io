import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: 'Solidity ',
    icon: 'fa-brands fa-ethereum',
    prefix: '/',
    children: [
      {
        text: 'Solidity 基础教程',
        // icon: 'fa-brands fa-ethereum',
        link: 'solidity基础/',
      },
      {
        text: 'Solidity 番外',
        // icon: 'fa-brands fa-ethereum',
        link: 'Solidity番外/',
      }
    ]
  },
  {
    text: 'HTML',
    icon: 'fab fa-html5',
    link: '/html/'
  },
  {
    text: 'CSS',
    icon: 'fab fa-css3-alt',
    link: '/css/'
  },
  {
    text: 'JavaScript',
    icon: 'fa-brands fa-square-js',
    link: '/javascript/'
  },
  {
    text: '项目',
    icon: 'fa-solid fa-sheet-plastic',
    link: '/project/'
  },
  {
    text: '时间轴',
    icon: 'fa-solid fa-timeline',
    link: '/timeline/'
  },
]);
