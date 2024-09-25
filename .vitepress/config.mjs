import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/User-interface-design/',
  title: "User Interface Design",
  description: "Syllabus course User Interface Design",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Figma', link: '/figma' },
      { text: 'Richtlijnen', link: '/guidelines' },
    ],

    sidebar: {
      '/figma/': [
        {
          text: 'Figma',
          items: [
            { text: 'Introductie', link: '/figma' },
          ]
        }
      ],
      '/guidelines/': [
        {
          text: 'Richtlijnen',
          items: [
            { text: 'Introductie', link: '/guidelines' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © ${new Date().getFullYear()} Arteveldehogeschool & LUCA School of Arts`
    }
  }
})
