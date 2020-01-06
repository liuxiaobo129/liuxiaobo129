返回主页
刘忠荣
博客园首页新随笔联系订阅管理随笔 - 159  文章 - 0  评论 - 1
Spring解析自定义XML
Spring框架从2.0版本开始，支持基于Schema的XML扩展机制，允许开发者自定义XML标签。下面以一个小例子，说明如何实现自定义XML配置，并使Spring将我们自定义的XML解析为bean。

我们首先看一下，希望在Spring的XML配置中，添加的新标签：

<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:d="http://www.longingfuture.com/schema/demo"
    xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd
    http://www.longingfuture.com/schema/demo http://www.longingfuture.com/schema/demo.xsd">

    <d:parent id="testParent" name="testParent001">  
        <d:child name="child01" age="22" />
        <d:child name="child03" age="24" />
    </d:parent>
</beans>
命名空间d下的parent和child两个元素，是我们增加的新标签。我们需要一个Schema文档，用来说明自定义标签的各个约束，Spring会用这个Schema文档对XML中的标签进行验证：

xml version="1.0" encoding="UTF-8"
<xsd:schema xmlns="http://www.w3.org/2001/XMLSchema"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
    xmlns:beans="http://www.springframework.org/schema/beans"
    xmlns:tns="http://www.longingfuture.com/schema/demo"
    targetNamespace="http://www.longingfuture.com/schema/demo"
    elementFormDefault="qualified" attributeFormDefault="unqualified">
    
    <xsd:import namespace="http://www.springframework.org/schema/beans" />

    <xsd:element name="parent">
        <xsd:complexType>
            <xsd:complexContent>
                <xsd:extension base="beans:identifiedType">
                    <xsd:sequence>
                        <xsd:element name="child" type="tns:child" maxOccurs="unbounded" />
                    </xsd:sequence>
                    <xsd:attribute name="name" type="xsd:string" />
                </xsd:extension>
            </xsd:complexContent>
        </xsd:complexType>
    </xsd:element>

    <xsd:complexType name="child">
        <xsd:attribute name="name" type="xsd:string" />
        <xsd:attribute name="age" type="xsd:decimal" />
    </xsd:complexType>
</xsd:schema>
在这个Schema文档中，我们定义了parent元素和child元素。parent元素有一个名为name的属性，以及一个child类型的列表。注意，我们为这两个新元素声明了一个名为http://www.longingfuture.com/schema/demo的命名空间。在Spring的XML配置文档中，需要保证这个命名空间的正确。

接下来，我们添加一个NamespaceHandler，来支持对新定义的命名空间元素的解析：

public class  extends  {

大专栏  Spring解析自定义XMLan class="line">    @Override
    public void init() {
        registerBeanDefinitionParser("parent", new MyBeanDefinitorParse());
    }
}
MyNamespaceHandler继承了NamespaceHandlerSupport，并重载了init方法。在init方法中，用registerBeanDefinitionParser方法向Spring注册了一个解析器，当遇到XML配置中的parent元素中，就调用这个解析器进行解析。

MyBeanDefinitorParse继承了AbstractBeanDefinitionParser，并重载parseInternal这个方法。在parseInternal方法中，实现具体的解析逻辑：

public class MyBeanDefinitorParse extends AbstractBeanDefinitionParser {

    @Override
    protected AbstractBeanDefinition parseInternal(Element element, ParserContext parserContext) {
        BeanDefinitionBuilder parentBeanDefinitionBuilder = BeanDefinitionBuilder.rootBeanDefinition(Parent.class);
        parentBeanDefinitionBuilder.addPropertyValue("name", element.getAttribute("name"));

        List<Element> childElements = DomUtils.getChildElementsByTagName(element, "child");
        List<BeanDefinition> childBeanDefinitions = new ArrayList<BeanDefinition>(childElements.size());
        for (Iterator iterator = childElements.iterator(); iterator.hasNext();) {
            Element childElement = (Element) iterator.next();
            BeanDefinitionBuilder childBeanDefinitionBuilder = BeanDefinitionBuilder.genericBeanDefinition(Child.class);
            
            childBeanDefinitionBuilder.addPropertyValue(Conventions.attributeNameToPropertyName("name"), childElement.getAttribute("name"));
            childBeanDefinitionBuilder.addPropertyValue(Conventions.attributeNameToPropertyName("age"), childElement.getAttribute("age"));

            childBeanDefinitions.add(childBeanDefinitionBuilder.getBeanDefinition());
        }
        
        ManagedList list = new ManagedList();
        for (BeanDefinition beanDefinition : childBeanDefinitions) {
            list.add(beanDefinition);
        }

        parentBeanDefinitionBuilder.addPropertyValue("children", list);

        return parentBeanDefinitionBuilder.getBeanDefinition();
    }
}
完成上述过程后，为了能让Spring知道我们新加入的handler和parser，还需要向Spring进行注册，这需要在classpath下的META-INF文档夹下，新增spring.handlers和spring.schemas两个文档。

在spring.handlers文档中，指明了当遇到自定义的命名空间时需要调用哪个handler：

http://www.longingfuture.com/schema/demo=com.longingfuture.demo.spring.customtag.MyNamespaceHandler
在spring.schemas文档中，指明了Schema文档的具体包位置：

http://www.longingfuture.com/schema/demo.xsd=com/longingfuture/demo/spring/customtag/demo.xsd
完成上述后，我们就可以正常的从Spring中获取我们的bean了：

public class Main {

    public static void main(String[] args) throws Exception {
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                new String[] { "appContext-customtag.xml" });
        Parent parent = ctx.getBean(Parent.class);
        System.out.println(parent.getName());
        
        for (Child child : parent.getChildren()) {
            System.out.println(child.getName() + ":" + child.getAge());
        }
    }
}
好文要顶 关注我 收藏该文  
刘忠荣
关注 - 0
粉丝 - 0
+加关注
00
« 上一篇： Mybatis映射文档介绍
» 下一篇： LinkedList源码学习
posted @ 2019-12-05 21:52  刘忠荣  阅读(12)  评论(0)  编辑  收藏
刷新评论刷新页面返回顶部
注册用户登录后才能发表评论，请 登录 或 注册， 访问 网站首页。
【推荐】超50万行VC++源码: 大型组态工控、电力仿真CAD与GIS源码库
【推荐】阿里云双11返场来袭，热门产品低至一折等你来抢！
【活动】开发者上云必备，腾讯云1核4G 2M云服务器11元/月起
【推荐】百度智能云岁末感恩季，明星产品低至1元新老用户畅享
【活动】京东云限时优惠1.5折购云主机，最高返价值1000元礼品！
【推荐】3大阶段，30+教程，超全年度 Python 礼包大放送
【推荐】史上最全python数据爬取面试问答合集 | 开发者福利

相关博文：
· Spring解析自定义XML
· 4.4 spring-自定义标签的解析
· spring基础---->spring自定义标签（一）
· Spring 系列教程之自定义标签的解析
· Spring源码学习（3）—— 自定义标签
» 更多推荐...
免费下载《阿里工程师的自我修养》

最新 IT 新闻:
· ofo新年再成被执行人 执行标的超350万
· 女子车祸后开始“改造”自己：左手芯片开门、右手可刷 NFC
· 英特尔公布十代移动标压处理器：仍打磨14nm，突破5GHz
· 人民需要共享单车
· 海康威视：元器件供应稳定，海外市场不确定性依旧较大
» 更多新闻...
公告
昵称： 刘忠荣
园龄： 1个月
粉丝： 0
关注： 0
+加关注
<	2020年1月	>
日	一	二	三	四	五	六
29	30	31	1	2	3	4
5	6	7	8	9	10	11
12	13	14	15	16	17	18
19	20	21	22	23	24	25
26	27	28	29	30	31	1
2	3	4	5	6	7	8
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
随笔档案
2019年12月(117)
2019年11月(42)
最新评论
1. Re:蓝牙开发 获取mac地址
蓝牙设备系统的sevrice是什么？
--你说我记
阅读排行榜
1. Android 性能优化之布局优化(382)
2. HashMap的key是否可以为null(371)
3. use mixin and autoload_paths vs eager_load_paths(53)
4. 蓝牙开发 获取mac地址(52)
5. 联想小新700安装PCIE(NVME)固态硬盘(50)
评论排行榜
1. 蓝牙开发 获取mac地址(1)
Copyright © 2020 刘忠荣
Powered by .NET Core 3.1.0 on Linux