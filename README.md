# gulp base
基于[gulp][1]的基本构建流程demo。

## 安装运行
需要先安装[node](http://nodejs.org)，然后打开命令行输入下面的命令，安装gulp：

	$ npm install gulp -g

然后切换到项目目录，安装项目的依赖：

	$ npm install

然后执行下面的命令即可

	$ gulp # 默认执行，效果同下
	$ gulp dev # 执行开发构建

如果你想自动监控，可以执行下面的命令

	$ gulp watch

如果你想构建最终代码使用下面的任务

	$ gulp build

清理输出目录，使用下面的命令

    $ gulp clean
    
## 协议
[MIT-LICENSE](MIT-LICENSE)

## 参考资料
- [getting-started-with-gulp](https://gist.github.com/markgoodyear/8497946)
- [Gulp新手入门教程](http://www.w3ctrain.com/2015/12/22/gulp-for-beginners/)
- [Gulp安装及配合组件构建前端开发一体化](http://www.dbpoo.com/getting-started-with-gulp/)

[1]: http://gulpjs.com/
