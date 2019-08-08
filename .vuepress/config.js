module.exports = {
  title: 'Hello VuePress',
	description: 'Just playing around',
	themeConfig: {
		navbar: true,
		sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}