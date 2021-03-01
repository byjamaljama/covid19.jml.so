const mix = require('laravel-mix')

mix.setPublicPath('assets')

mix.js('src/js/app.js', 'js').vue()
  .postCss('src/css/app.css', 'css', [
    require('tailwindcss')
  ])

mix.browserSync({
  https: true,
  proxy: false,
  server: '.'
})
