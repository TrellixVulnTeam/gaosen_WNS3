module.exports = [
  {text: '课程实验', link: '/curriculum/', icon: 'reco-api'},
  {
    text: '求学之路', link: '/learning/', icon: 'reco-blog',
    items: [
      {text: '前端', link: '/learning/frontEnd/'},
      {text: '建站手册', link: '/learning/建站手册/'}
    ]
  },
  {
    text: '关于我', link: '/about/'
  },
  // {
  //   text: '测试中', link: '/baodian/',
  //   items: [
  //     {text: '测试中', link: '/baodian/zero/'},
  //     {text: '测试中', link: '/baodian/high/'},
  //   ]
  // },
  {
    text: '工具箱',
    items: [
      {
        text: '在线编辑',
        items: [
          {text: '图片压缩', link: 'https://tinypng.com/'}
        ]
      },
      {
        text: '在线服务',
        items: [
          {text: '阿里云', link: 'https://www.aliyun.com/'},
          {text: '腾讯云', link: 'https://cloud.tencent.com/'}
        ]
      },
      {
        text: '博客指南',
        items: [
          {text: '掘金', link: 'https://juejin.im/'},
          {text: 'CSDN', link: 'https://blog.csdn.net/'}
        ]
      }
    ]
  },
  {text: '时间线', link: '/timeline/', icon: 'reco-date'}
]
