# 制作简单网页

首先配置基本源信息\(\)：

![](/assets/QQ截图20191011133554.png)

 分别配置“**日期**”，“**源分组**”，“**源标题**”，“**源地址**”。

 以“异次元软件”为例，打开异次元网站，查看网页源代码：

#### ![](/assets/QQ截图20191011134303.png)

可以看到div id="postlist"下是当前页面所有文章

所以“列表xpath”为 

>“_**//\*\[@id="postlist"\]/div**_” 

  表示id为"postlist"下的div，展开div可以看到文章的标题，简介所在的位置：

#### ![](/assets/QQ截图20191011145325.png)

 这里标题为h2/a/text\(\),链接为h2/a/@href：

![](/assets/QQ截图20191011145923.png)

寻找下一页的规则，可以看到在原url后面加上了/page/页数

![](/assets/QQ截图20191011150848.png)

“下页Xpath”默认填入“{QZLink}”，“下页Xpath”下方的“处理值”填入对当前url要处理的方式，

该例子当前url为：
>https://www.iplaysoft.com

，只需要在后面添加/page/页数即可，页数使用“{QZPage}”，填入：_**{"type":"rightjoin","value":"/page/{QZPage}"}**_

处理后：https://www.iplaysoft.com/page/2。


最后选择链接类型：**网页**

![](/assets/QQ截图20191011151820.png)

一个简单解析列表后打开网页的源就制作完成了。