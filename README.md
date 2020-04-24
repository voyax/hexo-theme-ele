# hexo-theme-ele

> I've always been searching a pure, clean theme like safari's reader view since I started using hexo. Unfortunately there is no one after my own heart. I hope the theme can be simple and beautiful.

An elegant [Hexo](http://hexo.io) theme for pure reading, thinking and writing.

➡ [Demo](http://www.voyax.me/)

![](https://s2.ax1x.com/2019/09/23/uiZX9S.png)

## Changelog

**1.3.0**

文章排版重新设计，参考 github，放弃了以前自己的设计。经过长时间的思考，代码和文字是这个主题的核心，代码尤为重要，最终的效果，希望能干净、整齐地呈现文章内容，读者在阅读过程中忽略到其中的设计而不觉突兀

### 修改内容

* 文章布局按 github 风格修改
* 首页文章摘要样式微调
* 归档页样式微调
* 分类页风格与归档页保持一致
* 文章页调整阅读背景 #FCF5F0 => #262626，希望获得更好的阅读体验，沉浸式阅读一直在尝试，但目前其实没有找到另我满意的效果

### TODO

- [ ] 移动端适配，目前仅简单适配，但没有细致优化，体验糟糕
- [ ] 重构：积累了许多为了“临时”需求遗留的代码，需重新组织，便于后续开发维护
- [ ] 依赖升级

**1.2.0**

* Adjust article page ui for better reading.(Reference to [好讀的排版指南](https://medium.com/deerlight/%E5%A5%BD%E8%AE%80%E7%9A%84%E6%8E%92%E7%89%88%E6%8C%87%E5%8D%97-34b9d2a0ca23))


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
