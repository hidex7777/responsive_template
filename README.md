# responsive_template

responsive web template consists of htm, scss, grunt, coffee and some images

----

## directories

    .
    |--dev/
    |  |--coffee/
    |  |  |--grobal.coffee
    |  |--scss/
    |  |  |--_mixins.scss
    |  |  |--_pccs.scss
    |  |  |--global.scss
    |  |--img/
    |  |  |--sprites/
    |  |  |--sprites-xxx.png
    |  |  |--dummy.xcf
    |  |  |--item.xcf
    |  |  |--texture.xcf
    |  |--favicon.xcf
    |  |--apple-touch-icon.xcf
    |  |--og.xcf
    |--dist/
    |  |--js/
    |  |  |--bootstrap.min.js
    |  |  |--global.js
    |  |--css/
    |  |  |--bootstrap.css
    |  |  |--bootstrap.css.map
    |  |  |--bootstrap.min.css
    |  |  |--bootstrap-theme.css
    |  |  |--bootstrap-theme.css.map
    |  |  |--bootstrap-theme.min.css
    |  |  |--global.css
    |  |--fonts/
    |  |  |--glyphicons-halflings-regular.eot
    |  |  |--glyphicons-halflings-regular.svg
    |  |  |--glyphicons-halflings-regular.ttf
    |  |  |--glyphicons-halflings-regular.woff
    |  |--img/
    |  |  |--sprites.-xxx.png
    |  |  |--dummy.png
    |  |  |--item.png
    |  |  |--texture.png
    |  |--index.htm
    |  |--access.htm
    |  |--about.htm
    |  |--contact.htm
    |  |--something.htm
    |  |--404.htm
    |  |--favicon.ico
    |  |--.htaccess
    |  |--apple-touch-icon.png
    |  |--og.png
    |  |--robots.txt
    |--node_modules/
    |--.git/
    |--.gitignore
    |--README.md
    |--Gruntfile.coffee
    |--package.json

## requirements

- Node.js
- grunt-cli

## workflow

- download this template
- modify package.json
- `npm install`
- `grunt dev`
- work
- `grunt dep`
- deploy

## todo(2014-03-23)

    npm install grunt --save-dev
    npm install grunt-autoprefixer --save-dev
    npm install grunt-contrib-copy --save-dev
    npm install grunt-contrib-clean --save-dev
    npm install grunt-contrib-csslint --save-dev
    npm install grunt-contrib-compass --save-dev
    npm install grunt-contrib-connect --save-dev
    npm install grunt-contrib-watch --save-dev
    npm install grunt-contrib-coffee --save-dev
    npm install grunt-contrib-jshint --save-dev
    npm install grunt-csscomb --save-dev
    create Gruntfile.coffee

