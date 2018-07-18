module.exports = {
  dest: 'docs',
  base: '/spring-boot-primer/',
  title: 'Spring Boot 入門',
  themeConfig: {
    nav: [
      { text: '開発環境構築', link: '/settings/' },
      { text: 'Hello world!', link: '/hello-world/' },
      { text: 'チュートリアル', link: '/tutorial/' },
      { text: '演習問題', link: '/practice/' }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/settings/': [
        '',
        'install-sts',
        'eclipse-plugins',
        'database-client'
      ],
      '/hello-world/': [
        '',
        'web-application-framework',
        'create-new-project',
        'ide-settings',
        'application-properties',
        'add-controller',
        'add-template',
        'run-application'
      ],
      '/tutorial/': [
        '',
        'sample-application',
        'database-design',
        'url-design',
        'migration',
        'orm',
        'modify-controller',
        'thymeleaf',
        'all-members',
        'search-functionality',
        'add-member-functionality'
      ],
      '/practice/': [
        '',
        'practice-application',
        'how-to-solve',
        'mockup'
      ],
      '/': [
        '',
        'settings/',
        'hello-world/'
      ]
    }
  }
}
