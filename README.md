## Ano

Ano，一个简约适用的ghost主题，基于[onevcat/vno](https://github.com/onevcat/vno)进行的二次开发。

也是我的ghost博客主题 

Demo  [https://i.alexxd.com](https://i.alexxd.com)

预览

![preview](http://o6x2vif88.bkt.clouddn.com/blogshow.png)


## 开发

### ghost根目录pm2启动或npm启动

```bash
sudo NODE_ENV=development pm2 start index.js --name "ghost"
sudo pm2 save & sudo pm2 startup
```

or

`npm start`


### sass

css依赖`bounce`，安装方式见官网[http://bourbon.io/](http://bourbon.io/)

监听

`sass --watch assets/scss/vno.scss:assets/css/vno.css --style compressed`