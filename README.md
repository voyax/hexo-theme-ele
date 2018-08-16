# hexo-theme-ele

> I've always been searching a pure, clean theme like safari's reader view since I started using hexo. Unfortunately there is no one after my own heart. I hope the theme can be simple and beautiful.

An elegant [Hexo](http://hexo.io) theme for pure reading, thinking and writing.

➡ [Demo](https://voyax.me/)

![](http://oe54phg1r.bkt.clouddn.com/blog/2018-08-16-Google%20Chrome_2018-08-16%2000-03-24%402x.png)

## Installing

Clone the theme into  hexo theme folder and then change theme property in your hexo root _config.yml.

```
# clone into your theme folder
git clone https://github.com/voyax/hexo-theme-ele.git

# modify _config.yml as follows
theme: hexo-theme-ele
```

Preview
```
hexo clean
hexo g
hexo s
```

## Configuration

The theme configuration is simple enough, be easy.

### Theme Configuration

```
menu:
  首页: /
  归档: /archives/
  分类: /categories
  关于: /about

logo: http://oe54phg1r.bkt.clouddn.com/blog/2017-07-26-075816.jpg

favicon: http://oe54phg1r.bkt.clouddn.com/favicon32x32.ico

# nav avatar
avatar: http://oe54phg1r.bkt.clouddn.com/blog/2017-07-26-075816.jpg
```

### Hexo Configuration

```
title: voya

# disable hexo highlight
highlight:
  enable: false

# Pagination
## Set per_page to 0 to disable pagination
per_page: 5
pagination_dir: page

# set archive pagination
archive_generator:
  per_page: 20
  yearly: true
  monthly: true
  daily: false
  order_by: -date

# set category pagination
category_generator:
  per_page: 20

tag_generator:
  per_page: 20
```

## License
MIT