module.exports = {
  title: 'Meteor',
  description: '',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  theme: 'antdocs',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '博客', link: '/blog/' },
      { 
        text: '开课啦',
        items: [
          { text: 'Flex布局', link: '/course/flex/' },
          { text: 'Vue3.0源码分析', link: '/course/vue/' },
        ],
      },
      { text: '好物推荐', link: '/thing/' },
      { text: '云相册', link: '/photo/' },
      { text: '简历', link: '/resume/' },
    ],
    sidebar: {
      '/blog/': ['/blog/'],
      '/course/flex/': ['/course/flex/'],
      '/course/vue/': ['/course/vue/'],
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