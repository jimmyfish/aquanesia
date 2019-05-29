const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.copyDirectory('resources/assets/plugins', 'public/plugins');
mix.copyDirectory('resources/assets/pages', 'public/pages');

mix.copy('resources/assets/js/scripts.js', 'public/js');
mix.copyDirectory('resources/assets/img', 'public/img');
mix.copyDirectory('resources/assets/pages/ico', 'public/ico');