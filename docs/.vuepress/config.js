module.exports = {
  title: 'Meteor',
  description: '',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  locales: [{ '/': { lang: 'zh-CN' } }],
  theme: 'antdocs',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '博客', link: '/blog/' },
      {
        text: '开课啦',
        link: '/course/',
        items: [
          { text: 'CSS世界', link: '/course/css/' },
          { text: 'JS基础', link: '/course/js/' },
        ],
      },
      // { text: '好物推荐', link: '/thing/' },
      // { text: '云相册', link: '/photo/' },
      { text: '简历', link: '/resume/' },
    ],
    sidebar: {
      '/blog/': ['/blog/', 'proxy', 'immer'],
      '/course/css/': [
        '/course/css/',
        {
          title: '理论基础',
          collapsable: false,
          children: ['flex'],
        },
        {
          title: '实战经验',
          collapsable: false,
          children: [],
        },
        {
          title: '面试常题',
          collapsable: false,
          children: [],
        }
      ],
      '/course/js/': ['promise', 'regular'],
      '/thing/': ['/thing/'],
      '/photo/': ['/photo/', 'happy'],
    },
    repo: 'https://github.com/mangostore',
    smoothScroll: true,
    lastUpdated: '上次更新',
    editLinks: false,
    ads:{
      style: 2,
      image: 'https://www.rainyun.com/img/rainyun.png',
      text: '免费又稳定，签到换延期，来试试雨云主机...',
      link: 'http://redirect.rainyun.cn/?ref=11126',
      items:[
        {
          text: '点击链接快来和我一起加入语雀文档，体验全新知识创作，让你的协作更高效！',
          image:'https://s1.ax1x.com/2020/04/06/GsL0Z6.md.png',
          link: 'https://www.yuque.com/register?invite_token=f44225123bcab02038f11cc0a7ab720cb9016a02bec6a30f5e10994a9946152a'
        },
        {
          text: '免费又稳定，签到换延期，来试试雨云主机吧！',
          image:'https://s1.ax1x.com/2020/04/06/GsvilQ.md.png',
          link: 'http://redirect.rainyun.cn/?ref=11126'
        },
      ]
    }
  }
}
