$(function() {

  CMS.init({

    // Name of your site or location of logo file, relative to root directory (img/logo.png)
    siteName: 'ely.io',

    // Tagline for your site
    siteTagline: 'Mindful Design',

    // Email address
    siteEmail: 'Ely.Kahn@gmail.com',

    // Name
    siteAuthor: 'ely kahn'

    // Navigation items
    siteNavItems: [
      { name: 'Github', href: 'https://github.com/elykahn', newWindow: false},
      { name: 'About', href: 'https://elykahn.github.io/cms.js/about', newWindow: false},
      { name: 'Work', href: 'https://elykahn.github.io', newWindow: false},
      { name: 'Resume', href: 'https://elykahn.github.io/resume', newWindow: true},

    ],

    // Posts folder name
    postsFolder: 'posts',

    // Homepage posts snippet length
    postSnippetLength: 120,

    // Pages folder name
    pagesFolder: 'pages',

    // Order of sorting (true for newest to oldest)
    sortDateOrder: true,

    // Posts on Frontpage (blog style)
    postsOnFrontpage: true,

    // Page as Frontpage (static)
    pageAsFrontpage: 'index.html',

    // Posts/Blog on different URL
    postsOnUrl: '/',

    // Site fade speed
    fadeSpeed: 300,

    // Site footer text
    footerText: '&copy; ' + siteAuthor + new Date().getFullYear() + ' All Rights Reserved.',

    // Mode 'Github' for Github Pages, 'Server' for Self Hosted. Defaults
    // to Github
    mode: 'Github',

    // If Github mode is set, your Github username and repo name. Defaults
    // to Github pages branch (gh-pages)
    githubUserSettings: {
      username: 'elykahn',
      repo: 'CMS.js'
    }

  });

  // Markdown settings
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

});
