module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  // 'src/**/*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write'],
  'src/**/*.{scss,less,styl,html}': ['prettier --write', 'stylelint --fix']
};
