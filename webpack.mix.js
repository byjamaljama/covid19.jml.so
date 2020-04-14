const mix = require("laravel-mix");
require("laravel-mix-purgecss");

mix.config.publicPath='assets';

mix.js("src/js/app.js", "js")
  .postCss("src/css/app.css", "css", [require("tailwindcss")]);

if (mix.inProduction()) {
  mix.purgeCss();
}

mix.browserSync({
  proxy: false,
  server: "."
});
