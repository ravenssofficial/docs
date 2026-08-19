// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RavenSS',
  tagline: 'docs',
  favicon: 'img/new.png',

  future: {
    v4: true,
  },

  url: 'https://ravenssofficial.github.io',
  baseUrl: '/docs/',

  organizationName: 'ravenssofficial', 
  projectName: 'docs', 

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', 
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false, 
        indexPages: false,
        docsRouteBasePath: "/", 
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/channels4_profile.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      metadata: [
        { name: 'twitter:card', content: 'summary' }
      ],
      titleDelimiter: ' ',
      
      navbar: {
        title: '',
        logo: {
          alt: '',
          src: 'img/logo.png', 
        },
        items: [], 
      },
      footer: {
        style: 'dark',
        links: [], 
        copyright: `Made by Pogama from RavenSS © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;