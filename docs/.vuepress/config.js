// .vuepress/config.js
module.exports = {
  plugins: [
    '@vuepress/back-to-top', 
    '@vuepress/pwa', 
    {
      serviceWorker: true,
      updatePopup: true
    },
    ,
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }]
  ],
  port: 3030,
  base: '/api-manti/',
  theme: 'cool',
  // dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
    ['link', {href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel :'stylesheet'}],
    
  ],
  themeConfig: {
    // logo: './myAvatar.png',
    sidebar: [
    
    {
      title: 'Вступ',
      path:"/intro/"
    },

    {
      title: 'Вимоги',
        path:"/requirements/",
    },
    
    {
      title: 'API сервісу',
      path:"/oas/",
      sidebarDepth: 0
    },

    {
      title: 'Специфікація модуля',
      path:"/api/"
    },

    {
      title: 'Програма випобувань',
      path:"/test/"
    }

  ],
    sidebarDepth: 0,
    displayAllHeaders: true, // Default: false


    nav: [
      { text: 'Початок', link: '/' },
    ],

    lastUpdated: 'Останнє оновлення', // string | boolean
      // Assumes GitHub. Can also be a full GitLab url.
    repo: 'https://github.com/wdc-molfar/api-manti',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Github',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    // docsRepo: 'boldak/dis-edu',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    // editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    // editLinkText: 'Ви можете покращити цю сторінку'

  },
  title: '@molfar/api-manti',
  description: 'Програмний модуль @molfar/api-manti',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../img'
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
    }
  }
}