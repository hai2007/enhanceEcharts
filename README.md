# enhanceEcharts
一个加强版本的echarts，比如可以自动监听画布大小改变并进行重绘。

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=enhance-echarts"><img src="https://img.shields.io/npm/dm/enhance-echarts.svg" alt="downloads"></a>
  <a href="https://www.jsdelivr.com/package/npm/enhance-echarts"><img src="https://data.jsdelivr.com/v1/package/npm/enhance-echarts/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/enhance-echarts"><img src="https://img.shields.io/npm/v/enhance-echarts.svg" alt="Version"></a>
  <a href="https://github.com/hai2007/enhanceEcharts/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/enhance-echarts.svg" alt="License"></a>
  <a href="https://github.com/hai2007/enhanceEcharts" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/hai2007/enhanceEcharts?style=social">
    </a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/enhanceEcharts/issues)，欢迎参与维护！

## How to use?

首先你需要通过命令行安装，就像这样：

```
npm install --save enhance-echarts
```

安装好了以后，然后引入你需要的方法即可（在具体方法的开头会说明），除此之外，你还可以直接引入全部方法：

```js
import enhanceEcharts from 'enhance-echarts';
```

或

```html
<script src='https://unpkg.com/enhance-echarts@0'></script>
```

然后，就可以直接使用了：

```js
enhanceEcharts(echarts);
```

经过上面的处理后，echarts就被进行了强化(比如，如何挂载点大小改变，绘制的图形会自动适配等)。

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/enhanceEcharts/blob/master/LICENSE)

Copyright (c) 2022 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
