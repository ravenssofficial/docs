// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'realravenss',
  tagline: 'docs',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ravenssofficial.github.io',
  baseUrl: '/realravenss-docs/',

  organizationName: 'ravenssofficial', 
  projectName: 'realravenss-docs', 

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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: '',
          src: 'img/logo.svg', // pazi samo da imas logo.png u img folderu ili obrisi i ovo
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