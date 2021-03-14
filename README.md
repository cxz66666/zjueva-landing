# 2020EVA纳新主页



在线demo:https://a.zjueva.net

备份demo:https://a.raynor.top



这是一个使用react+ant desgin +ant design landing 的简单主页，基本框架使用react+react-route-dom，并在根路径页面使用[antd landing](https://landing.ant.design/)，大量矢量图标使用[iconfont](https://www.iconfont.cn/)上的图片，基本内容参考[浙江大学E志者协会](https://baike.baidu.com/item/%E6%B5%99%E6%B1%9F%E5%A4%A7%E5%AD%A6%E5%AD%A6%E7%94%9FE%E5%BF%97%E8%80%85%E5%8D%8F%E4%BC%9A/19391530?fr=aladdin)百度百科以及[协会wiki](https://newwiki.zjueva.net/)



### 使用方法

- **我用npm**

  直接在根目录下

  ~~~
  npm install
  ~~~

  之后直接

  ~~~
  npm run start
  ~~~

  

- **我用yarn**

  直接在根目录下

  ~~~
  yarn
  ~~~

  之后直接

  ~~~
  yarn start
  ~~~





### 工具使用部分

- **antd landing使用**

  讲道理landing提供开箱即用的首屏快速设计解决方案非常便捷，但是还有一些小问题比如整体打包结构比较繁琐、无法二次在线编辑等等，总之最后我还是对这个框架打包好的文件进行了大量的修改

- **ant design组件库使用**

  > 由于设计时历史原因使用antd3.x版本，目前已经基本弃用，请自行升级到antd4.0/antd 5.0，主要改动位于Form表单的设计上，详细请看[这里](https://ant.design/docs/react/migration-v4-cn)

  这里主要使用了Form和Upload两个比较大的组件，图片上传OSS采用函数计算的思路，将学号一并上传并在云端进行某个奇怪的hash后存到oss里

- **iconfont使用**

  不得不说阿里的东西就是好，这个图标库不仅内容丰富、下载免费，而且支持多种导出格式，颜色也可以自定义，极大的解决了我找不到图图的困扰

- **在线调色网站coolors.co使用**

  该网站提供大量成熟的配色方案，同时也有在线调色板供用户自定义、自动生成配色，但是由于本人审美素养比较一般，因此使用的配色比较辣眼睛



### 页面结构：

- / 路径对应Home文件夹主页面
- /ticket 路径对应提交表单页面
- /time/:guid 路径对应选择面试时间页面
- /history 对应协会历史页面
- /login 跳转到[Oreo](oreo.zjueva.net)



