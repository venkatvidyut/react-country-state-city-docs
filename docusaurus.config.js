// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Country State City',
  tagline: `A lightweight and easy-to-use React library that provides a comprehensive list of regions or continents, countries, states,
              cities and languages for creating dynamic and searchable
              dropdowns. Ideal for building forms and input fields that require
              accurate and up-to-date geographical selections, with seamless
              integration for improved user experience.`,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://venkatvidyut.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/react-country-state-city-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'venkatvidyut', // Usually your GitHub org/user name.
  projectName: 'react-country-state-city-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
  trailingSlash:false,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/', 
          sidebarPath: 'sidebars.ts', // Serve docs from root
          includeCurrentVersion: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Latest',
              path: 'latest',
            },
            '1.1.11': {
              label: '<=v1.1.11',
              banner:'none' // Custom label for older versions
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/rcsc-logo.png',
      navbar: {
        title: 'React Country State City',
        logo: {
          alt: 'React Country State City',
          src: 'img/rcsc-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docsVersionDropdown', // Enables the version dropdown
            position: 'right',
          },
          {
            href: 'https://github.com/venkatvidyut/react-country-state-city',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/venkatvidyut',
            className: 'header-user-icon',
            'aria-label': 'User Profile',
            position: 'right',
            
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Effortless Location Data for React Developers`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    stylesheets: [
      {
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
        type: 'text/css',
      },
    ],
};

export default config;
