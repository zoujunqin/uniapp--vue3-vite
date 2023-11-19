const cssMacro = require('weapp-tailwindcss/css-macro')

module.exports = {
  prefix: 'tw-',
  darkMode: 'hx-dark',
  corePlugins: {
    preflight: false
  },
  purge: {
    enabled: true,
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
  },
  plugins: [
    cssMacro({
      variantsMap: {
        wx: 'MP-WEIXIN',
        '-wx': {
          value: 'MP-WEIXIN',
          negative: true

        }
        // mv: {
        //   value: 'H5 || MP-WEIXIN'
        // },
        // '-mv': {
        //   value: 'H5 || MP-WEIXIN',
        //   negative: true
        // }
      }
    })
  ],
  theme: {
    extend: {
      colors: {}
    }
  }
};
