#小说源制作

######以搜索源为例：
![](/assets/QQ截图20191011170037.png)
搜索关键字替换为：
>{QZQuery}

进行测试，寻找列表跟元素：
![](/assets/QQ截图20191011170327.png)
可以发现时在“result-list”下的每个div
所以列表规则为：
>//*[@class="result-list"]/div

展开div，可以看到标题在h3下：
![](/assets/QQ截图20191011170603.png)

标题是h3-a-span,所以标题规则可以写成：

>//*/h3/a/span/text()

也可以写完整：

>//*/div[2]/h3/a/span/text()

链接的规则为:
>//*/h3/a/@href

选择下一步为**“继续解析”**

第二部获取小说的目录列表：
![](/assets/QQ截图20191011171107.png)
每一个章节为id="list"下的dl下的dd
列表规则为：
>//*[@id="list"]/dl/dd

标题规则为:
>//*/a/text()

链接规则为:
>//*/a/@href

由于链接获取不完整，需要加上域名
链接的处理值为：
>{"type":"leftjoin","value":"https://www.biquge.com.cn"}

最后**链接类型**选择**”阅读模式“**
打开小说正文页面：
![](/assets/QQ截图20191011171615.png)
小说内容都在id="content"下
######阅读规则处添加规则
>div[id="content"]

一个简单小说搜索源就制作完成了！