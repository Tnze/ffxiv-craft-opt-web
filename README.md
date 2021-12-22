# 《最终幻想14》生产模拟器 v6.0 Beta
本项目是一个分支项目，主要针对《最终幻想14》中国服和国际服的内容，对生产模拟器进行汉化、优化和修改。

国服项目（适配游戏客户端 v5.58）：[国内访问](https://yyyy.games/crafter/) / [国外访问](http://ffxiv.tk/crafter/)\
国际服项目（适配游戏客户端 v6.0）：[国内访问](https://yyyy.games/crafterbeta/) / [国外访问](http://ffxiv.tk/crafterbeta/)

# FFXIV Crafting Optimizer Website

This project contains the source for the [FFXIV Crafting Optimizer Website](http://ffxiv.lokyst.net/). It uses [AngularJS](http://angularjs.org/), [AngularUI Bootstrap](http://angular-ui.github.io/bootstrap/), and [Bootstrap](http://getbootstrap.com/).

### Running the app during development

You can pick one of these options:

* serve the `app` subdirectory in this repository with your webserver
* install [node.js](https://nodejs.org/) and run:
  * `npm install`
  * `npm start`
* install [browser-sync](https://www.browsersync.io/) and run:
  * `browser-sync start --port 8001 --server app --files app`
* install Docker and run:
  * `docker build -f Dockerfile.dev -t ffxiv-craft-opt-web-dev .`
  * `docker run --rm -it -p 8001:8001 ffxiv-craft-opt-web-dev`

The node.js, browser-sync and Docker methods options will serve the website on port 8001. Browser-sync should automatically launch your default browser and load the app.

Note that if you're using Docker on Windows or OS X via VirtualBox, you'll have to use the IP address of the Linux VM (usually 192.168.99.100) that is hosting Docker, instead of `localhost`. The Dockerfile.dev method will mount the app source as a volume so changes will be reflected when the browser is refreshed.

### Translations

Localization files can be found in `app/locale`. The `app/locale/en.json` file is purposefully missing because the English strings are used as the translation keys. Strings which require interpolation are defined in app.js so that they can be displayed immediately as a fallback until the actual locale json file finishes loading.
