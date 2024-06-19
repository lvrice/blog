import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Rice’s FrontEnd blog',
  base: '/frontend-blog/',
  description: 'Rice’s FrontEnd blog',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Home', link: '/articles/js/this' },
    ],

    sidebar: [
      {
        text: 'Javascript',
        items: [
          { text: 'This', link: '/articles/js/this' },
          {
            text: 'Differences between null and undefined',
            link: '/articles/js/null_undefined',
          },
          { text: 'Arrow function', link: '/articles/js/ArrowFunction' },
          { text: 'Double operator', link: '/articles/js/EqualOperator' },
          {
            text: 'Differences between map and weakMap',
            link: '/articles/js/map_weakMap',
          },
        ],
      },
      {
        text: 'React',
        items: [
          {
            text: 'State Update Batching',
            link: '/articles/react/StateUpdateBatching',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lvrice/frontend-blog.git' },
    ],
  },
});
