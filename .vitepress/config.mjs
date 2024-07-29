import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "陈玠霖-资料",
  description: "A VitePress Site",
  //base:""
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle:"目录",
    outline:[2,6],
    nav: [
      { text: '主页', items:[
        {text:'首页',link:'/'},
        {text:'markdown',link:'/markdown-examples'}
      ]},
      { text: '示例', link: '/markdown-examples' },
      { text: '自动生成侧边栏', link: '/front-end/react/' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示 
    //sidebar: { "/front-end/react": set_sidebar("front-end/react") },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ice-coca' }
    ],
    logo:'logo.png',//配置logo
    //底部配置
    footer:{
      copyright:"Copyright@ 2024 chengjielin"
    },
       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
  }
})
