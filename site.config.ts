import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://smallawqwq.github.io/',
  lang: 'zh-CN',
  languages: ['zh-CN'],
  title: '浮生如梦 の 博客',
  author: {
    name: '浮生如梦',
  },
  description: '浮生如梦，梦里花落知多少',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ 13459020856',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=QyJplhFHwzG-CUdgulVVK_Acx2VEVMZ4',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/smallAWqwq',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=63929804017',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/smallaw',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1803576984',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://x.com/_Fever_dreams',
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
  ],

  search: {
    enable: true,
  },
  frontmatter: {
    time_warning: true,
  },

  /**
   * 开启阅读统计
   */
  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  }
})