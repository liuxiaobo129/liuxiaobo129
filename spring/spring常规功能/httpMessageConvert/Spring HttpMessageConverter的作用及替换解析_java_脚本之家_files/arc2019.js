jbMap = window.jbMap || {};

function jbViaJs(locationId) {
    var _f = undefined;
    var _fconv = 'jbMap[\"' + locationId + '\"]';
    try {
        _f = eval(_fconv);
        if (_f != undefined) {
            _f()
        }
    } catch (e) {}
}

function jbLoader(closetag) {
    var jbTest = null,
        jbTestPos = document.getElementsByTagName("span");
    for (var i = 0; i < jbTestPos.length; i++) {
        if (jbTestPos[i].className == "jbTestPos") {
            jbTest = jbTestPos[i];
            break
        }
    }
    if (jbTest == null) return;
    if (!closetag) {
        document.write("<span id=jbTestPos_" + jbTest.id + " style=display:none>");
        jbViaJs(jbTest.id);
        return
    }
    document.write("</span>");
    var real = document.getElementById("jbTestPos_" + jbTest.id);
    for (var i = 0; i < real.childNodes.length; i++) {
        var node = real.childNodes[i];
        if (node.tagName == "SCRIPT" && /closetag/.test(node.className)) continue;
        jbTest.parentNode.insertBefore(node, jbTest);
        i--
    }
    jbTest.parentNode.removeChild(jbTest);
    real.parentNode.removeChild(real)
}

var pathName = window.document.location.pathname;
var projectName = pathName.substring(1, pathName.substr(1).indexOf('/') + 1);

var logo_m = '<a href="http://dakawm.net:10802/" target="_blank"><img src="//files.jb51.net/image/dkwm370.gif?0723" width="430" height="60" /></a>';
var logo_r = '<a href="http://10A.908872.com" target="_blank"><img src="//files.jb51.net/image/xingyunlm.gif?1116" width="430" height="60" /></a>';

//var logo_r = '<a href="http://www.huokesoft.com/" target="_blank"><img src="//files.jb51.net/image/huoke_430.gif" width=430 height=60 /></a>';

var aliyun1000 = '';
aliyun1000 += '<div class="mainlr"><a href="http://f.wz-i.cn/0L0" target="_blank"><img src="//files.jb51.net/image/msb1200.jpg" alt="" width="1200" height="50"><span><img src="//files.jb51.net/image/tu.jpg" width="29" height="16" alt=""></span></a></div><div class="blank5"></div>';
aliyun1000 += '<div class="mainlr"><a href="http://l.wz-i.cn/2Y40" target="_blank"><img src="//files.jb51.net/image/kkb_xzk_1200.png" alt="" width="1200" height="50"><span><img src="//files.jb51.net/image/tu.jpg" width="29" height="16" alt=""></span></a></div><div class="blank5"></div>';
//aliyun1000 += '<div class="mainlr"><a href="http://www.huokesoft.com/" target="_blank"><img src="//files.jb51.net/image/huoke.png?200322" alt="" width="1200" height="50"><span><img src="//files.jb51.net/image/tu.jpg" width="29" height="16" alt=""></span></a></div><div class="blank5"></div>';


var aliyun10002 = '<div class="blank5"></div>';

var idctu = "";
//idctu+='<scr'+'ipt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scr'+'ipt><!--thea+300*250--><ins class="adsbygoogle"style="display:inline-block;width:300px;height:250px"data-ad-client="ca-pub-6389290466807248"data-ad-slot="6788945816"></ins><scr'+'ipt>(adsbygoogle=window.adsbygoogle||[]).push({});</scr'+'ipt>';
//idctu+='<scrip'+'t async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- content_r2 --><ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6500564943"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</scr'+'ipt>';
idctu += '<scri' + 'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri' + 'pt>';
idctu += '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="4845332105"></ins><scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';
idctu += '<A href="https://www.henghost.com/act/202002/202002.html?s=zz&jiaobenzhijia-jpg2" target="_blank"><IMG alt="" src="//files.jb51.net/image/henghost300.gif?0228" width="300" height="100"></A>';
idctu += '<div class="blank10"></div><A href="https://www.50vm.com/server.html?pg=34" target="_blank"><IMG alt="" src="//files.jb51.net/image/99idc300.jpg" width="300" height="100"></A>';

var aliwenzi = '<li><a href="http://click.aliyun.com/m/15321/" target="_blank"><span style="color:red;">30余款阿里云产品免费6个月</span></a></li>';
var ali237 = '<li><A href="http://click.aliyun.com/m/28331/" target="_blank"><IMG alt="" src="//files.jb51.net/image/ali2650323.gif" width="211" height="50"></A></li>';
var ali2371 = '<li><A href="http://click.aliyun.com/m/17168/" target="_blank"><IMG alt="" src="//files.jb51.net/image/ali2371.jpg" width="211" height="50"></A></li>';

var tgtxt = "";
tgtxt += '<div id="txtlink"><ul>';

tgtxt += '<li><a href="https://www.lanyunhost.com/" target="_blank"><span style="color:red;">香港云服务器39起三网优化至20MS免费试用</span></a></li>';
tgtxt += '<li><a href="http://www.uuwaf.com" target="_blank"><span style="color:red;">网站全球加速和超级防御[优优加速]</span></a></li>';
tgtxt += '<li><a href=" http://52google.cn/?f=jb51" target="_blank"><span style="color:red;">$新手0基础赚美元教程点击免费下载$</span></a></li>';
tgtxt += '<li><a href="http://h5spirit.cn/?jb51" target="_blank"><span style="color:red;">在线网页制作-h5spirit.cn</span></a></li>';

tgtxt += '<li><a href="https://www.jb51.net/s/idc/" target="_blank"><span style="color:blue;">脚本之家高防服务器 2020会员特价</span></a></li>';
tgtxt += '<li><a href="http://www.zoneidc.com/" target="_blank"><span style="color:blue;">香港/美国/韩国等十五国云服务器9.9元/月起</span></a></li>';
tgtxt += '<li><a href="http://www.xiaozhiyun.com/2016/" target="_blank"><span style="color:blue;">韩国香港美国站群服务器 巨牛网络</span></a></li>';
tgtxt += '<li><a href="http://tianyi.jb51.net/" target="_blank"><span style="color:blue;">天翼云，云主机，云存储，云安全</span></a></li>';

tgtxt += '<li><a href="https://www.henghost.com/?s=zz&jiaobenzhijia-wenzi" target="_blank"><span style="color:red;">██恒创科技██◆香港服务器·CN2极速稳定◆</span></a></li>';
tgtxt += '<li><a href="http://www.gwidc.com/rent/home/index.html" target="_blank"><span style="color:red;">港湾网络徐州百独800/月,100G高防云150</span></a></li>';
tgtxt += '<li><a href="http://www.hostspaceidc.com/front/products/datacenter?from=jb51-pic" target="_blank"><span style="color:red;">海外大带宽 站群 高防服务器</span></a></li>';
tgtxt += '<li><a href="http://www.centcc.com" target="_blank"><span style="color:red;">北京闪迅 机架3900元 BGP带宽</span></a></li>';

tgtxt += '<li><a href="https://www.wsisp.net/clientcenter/shownews_852.html?indexjb" target="_blank"><span style="color:blue;">█▇▆5M独享云主机599/年▆▇█</span></a></li>';
tgtxt += '<li><a href="http://www.qy.com.cn/" target="_blank"><span style="color:blue;">群英云服务器送10M带宽30G防御,49元起</span></a></li>';
tgtxt += '<li><a href="http://www.tuidc.com/" target="_blank"><span style="color:blue;">服务器租用/托管-域名空间/认准腾佑科技</span></a></li>';
tgtxt += '<li><a href="http://www.vzidc.com/cloud/" target="_blank"><span style="color:blue;">华为云4核8g限时免费送另有代金券免费送</span></a></li>';

tgtxt += '<li><a href="http://www.ushk.net/server.html" target="_blank"><span style="color:red;">██美港数据██高端香港服务器租用</span></a></li>';
tgtxt += '<li><a href="http://vps.zzidc.com/tongji/jb51w.html" target="_blank"><span style="color:red;">★☆云服务器5折，天天抽红包抵扣☆★</span></a></li>';
tgtxt += '<li><a href="https://www.tzidc.com/dist/highDefense.html#jb51" target="_blank"><span style="color:red;">██高防ip██高防服务器租用</span></a></li>';
tgtxt += '<li><a href="https://www.dzisp.cn/" target="_blank"><span style="color:red;">成都|德阳|电信100G高防24核物理机500元</span></a></li>';

tgtxt += '<li><a href="http://www.pppoevps.com/" target="_blank"><span style="color:blue;">█动态拨号IP云主机，电信ADSL独享20M█ </span></a></li>';
tgtxt += '<li><a href="http://www.360jq.com/hkshuang.htm" target="_blank"><span style="color:blue;">[香港双高防]无视CC★DDOS/堪比广东！</span></a></li>';
tgtxt += '<li><a href="http://www.cyidc.cc/" target="_blank"><span style="color:blue;">畅游网络 百独服务器 包跑满 998元</span></a></li>';
tgtxt += '<li><a href="http://www.wdw6.com/" target="_blank"><span style="color:blue;">bgp多线机房、大带宽</span></a></li>';

tgtxt += '<li><a href="http://www.ssf.cc/" target="_blank"><span style="color:red;">免备vps20/百独799/双线350/45互联</span></a></li>';
tgtxt += '<li><a href="http://www.zitian.cn/" target="_blank"><span style="color:red;">中原地区核心数据中心，月付299元起</span></a></li>';
tgtxt += '<li><a href="http://www.qy.cn/gfhd.html" target="_blank"><span style="color:red;">██群英网络██◆◆◆300G高防仅需599元◆◆◆</span></a></li>';
tgtxt += '<li><a href="https://yun.zj-idc.com/" target="_blank"><span style="color:red;">华晨云服务器4折起免费100G金盾防御</span></a></li>';

tgtxt += '<li><a href="https://kyun.hk/" target="_blank"><span style="color:blue;">不限内容【海外】独立服务器租用</span></a></li>';
tgtxt += '<li><a href="http://www.hkcn2.com/51.htm" target="_blank"><span style="color:blue;">**香港高防10m大带宽独服，低至999元**</span></a></li>';
tgtxt += '<li><a href="http://www.xiaozhiyun.com/2016/" target="_blank"><span style="color:blue;">韩国香港美国站群服务器 巨牛网络</span></a></li>';
tgtxt += '<li><a href="http://tianyi.jb51.net/" target="_blank"><span style="color:blue;">天翼云，云主机，云存储，云安全</span></a></li>';

tgtxt += '</ul><DIV class=clearfix></DIV></div><div class="blank5"></div>';

var tonglan1 = "";
tonglan1 += aliyun1000;
tonglan1 += tgtxt;
tonglan1 += '<div class="topimg"><ul>';
tonglan1 += '<li><A href="https://www.mhyun.net/act/20201111" target="_blank"><IMG alt="" src="//files.jb51.net/image/mhy_235.gif" width="210" height="50"></A></li>';
tonglan1 += '<li><A href="http://www.vzidc.com/sjjh" target="_blank"><IMG alt="" src="//files.jb51.net/image/hwy_235.gif" width="235" height="50"></a></li>';
//tonglan1 += '<li><A href="http://www.cnzlapp.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/cnzlapp210.gif?20200813" width="235" height="50"></a></li>';
tonglan1 += '<li><A href="https://www.7e.hk/act/sale/" target="_blank"><IMG alt="" src="//files.jb51.net/image/7ehk235.gif?0921" width="235" height="50"></A></li>';
//tonglan1 += '<li><A href="https://www.2yun.com/server/buy.html" target="_blank"><IMG alt="" src="//files.jb51.net/image/2yun235.gif" width="235" height="50"></a></li>';
tonglan1 += '<li><A href="https://www.yiyangidc.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/yy235.gif" width="235" height="50"></A></li>';
tonglan1 += '<li><A href="https://www.8a.hk/server/" target="_blank"><IMG alt="" src="//files.jb51.net/image/8a210.gif" width="235" height="50"></A></li>';

//tonglan1+='<li><A href="https://jieidc.taobao.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/jieidc_237.gif?0327" width="210" height="50"></A></li>';
tonglan1 += '</ul></div>';
tonglan1 += aliyun10002;

var tonglan1_2 = "";
tonglan1_2 += aliyun1000;
tonglan1_2 += tgtxt;
tonglan1_2 += '<div class="blank5"></div>';
tonglan1_2 += '<div class="topimg"><ul>';
tonglan1_2 += '<li><A href="http://t.cn/E9OUxEx" target="_blank"><IMG alt="" src="//files.jb51.net/image/tb_210_50.gif?1008" width="265" height="50"></A></li>';
tonglan1_2 += '<li><A href="https://jieidc.taobao.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/jieidc_237.gif?0327" width="210" height="50"></A></li>';
//tonglan1_2+=ali237;
tonglan1_2 += '<li><A href="http://www.ku86.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/ku86_237.gif?1010" width="210" height="50"></A></li>';
tonglan1_2 += '<li><A href="http://www.wsisp.com" target="_blank"><IMG alt="" src="//files.jb51.net/image/wsisp23701051.gif?0611" width="265" height="50"></A></li>';
tonglan1_2 += '</ul></div><div class="blank5"></div>';

var tonglan2 = '';
var tonglan2_1 = '<a href="https://www.jb51.net/s/idc/" alt="高防服务器" target="_blank"><img src="//files.jb51.net/image/bgp_jb51.gif" width="1080" height="50" border="0" /></a>';
var tonglan2_2 = '<a href="http://www.tuidc.com" alt="腾佑" target="_blank"><img src="//files.jb51.net/image/tuidc1080.gif?0516" width="1080" height="50" border="0" /></a>';


var tonglan3_1 = '<div class="mainlr"><a href="https://www.qy.cn/free/?f=jb51" target="_blank"><img src="//files.jb51.net/image/qy1080.gif?0313" width="1200" height="50"></a></div><div class="blank5"></div>';

var tonglan3_2 = '<div class="topimg"><ul>';
tonglan3_2 += '<li><A href="https://jieidc.taobao.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/jieidc_237.gif?0327" width="210" height="50"></A></li>';
tonglan3_2 += '<li><A href="https://www.yiyangidc.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/yy235.gif" width="210" height="50"></A></li>';
//tonglan3_2+='<li><A href="http://www.enkj.com/gfcloud/" target="_blank"><IMG alt="" src="//files.jb51.net/image/enkj0810.gif" alt="云服务器" width="210" height="50"></A></li>';
tonglan3_2 += '<li><A href="http://www.cnzlapp.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/cnzlapp210.gif" width="235" height="50"></A></li>';
tonglan3_2 += '<li><A href="http://www.cyidc.cc/" target="_blank"><IMG alt="" src="//files.jb51.net/image/cyidc237.gif" width="210" height="50"></A></li>';
tonglan3_2 += '<li><A href="https://www.wsisp.net/clientcenter/shownews_852.html?indexjb" target="_blank"><IMG alt="" src="//files.jb51.net/image/wsisp210.gif?1226" width="210" height="50"></a></li>';
tonglan3_2 += '</ul></div>';

var tonglan3_3 = '<div class="mainlr"><a href="http://www.qy.com.cn" target="_blank"><img src="//files.jb51.net/image/qy_1000.gif" width="1200" height="50"></a></div><div class="blank5"></div>';

var botad = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
botad += '<ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6445926239" data-override-format="true" data-page-url="http://www.jb51.net"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
//u2261513
var bd200 = '<scri' + 'pt type="text/javascript" src="//jscode.jbzj.com/hod9xqa8sj.js"></sc' + 'ript>';

var zbafer = '<div class="r300 clearfix">';
zbafer += '<a href="https://mp.weixin.qq.com/s/HFvRM6gpaACettv5ffM0tg" target="_blank"><img src="https://files.jb51.net/image/msb300.jpg" alt="java" width="300" height="100" /></a>';
zbafer += '<div class="blank10"></div><A href="https://www.hostspaceidc.com/front/products/pop?from=jb51-pic" target="_blank"><IMG alt="" src="//files.jb51.net/image/hsidc300.gif?0615" width="300" height="100"></A>';
zbafer += '</div>';

if ($('.sidebox-recomm')) {
    $('.sidebox-recomm').after(zbafer);
}

var idctu1 = '<div class="idc3"><a href="http://tools.jb51.net" target="_blank"><h1>在线工具</h1><span>代码格式化等</span> </a><a href="https://www.jb51.net/s/idc/" target="_blank"><h1>高防主机</h1><span>600G 防护</span> </a><a href="http://www.33ip.com" target="_blank"><h1>枫信科技</h1><span>IDC服务商</span> </a></div>';
var idctu2 = '<a href="http://www.tuidc.com/indexhd.html" target="_blank"><img src="//files.jb51.net/image/tengyou300.gif?1209" width="300" height="100"></a>';
//idctu2+='<div class="blank5"></div><a href="http://www.enkj.com/encloud/" target="_blank"><img src="//files.jb51.net/image/enkj300.gif?0319" alt="云服务器" width="300" height="100"></a>';
idctu2 += '<div class="blank10"></div><a href="https://www.yiyangidc.com/" target="_blank"><img src="//files.jb51.net/image/yyqz300.gif" alt="服务器" width="300" height="100"></a>';

//if (projectName=='article'){idctu2=bd200+'<div class="blank5"></div>'+idctu2;}

/*******---------在线工具start----------********/
var bctools = '<li><a href="http://tools.jb51.net/code/css" target="_blank"><font color="red">CSS代码工具</font></a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/js" target="_blank"><font color="red">JavaScript代码格式化工具</font></a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/xmlformat" target="_blank">在线XML格式化/压缩工具</a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/phpformat" target="_blank"><font color="red">php代码在线格式化美化工具</font></a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/sqlcodeformat" target="_blank">sql代码在线格式化美化工具</a></li>';
bctools += '<li><a href="http://tools.jb51.net/transcoding/html_transcode" target="_blank">在线HTML转义/反转义工具</a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/json" target="_blank">在线JSON代码检验/检验/美化/格式化</a></li>';
bctools += '<li><a href="http://tools.jb51.net/regex/javascript" target="_blank">JavaScript正则在线测试工具</a></li>';
bctools += '<li><a href="http://tools.jb51.net/transcoding/jb51qrcode" target="_blank">在线生成二维码工具(加强版)</a></li>';
bctools += '<li><a href="http://tools.jb51.net/" target="_blank">更多在线工具</a></li>';
/*******---------在线工具end----------********/


//u336546
var tonglanbd = '<scr' + 'ipt type="text/javascript" src="//jscode.jbzj.com/cmds5flr1.js"></scr' + 'ipt>';

var tonglangg = '<scri' + 'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri' + 'pt>';
tonglangg += '<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="9750602991"></ins><scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';

var tonglan_1024 = '';

var tit_down = ''

var art_up_isbd = 0;
var art_upp = new Array()
art_upp[0] = '<scri' + 'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri' + 'pt><ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="3921475131"></ins><scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';
art_upp[1] = '<scri' + 'pt type="text/javascript" src="//jscode.jbzj.com/production/n/i/production/eqhjo/openjs/oq.js"></s' + 'cript>';
//820*250
art_upp[2] = '<scri' + 'pt type="text/javascript" src="//jscode.jbzj.com/production/ql/common/h/source/n/h/production/kmtr.js"></s' + 'cript>';
art_upp[3] = '<a href="http://d.wz-i.cn/0L0" target="_blank"><img src="https://files.jb51.net/image/msb8001.jpg" alt="java" width="820"/></a>';
//art_upp[4] = '<a href="https://t.1yb.co/4JA2" target="_blank"><img src="https://files.jb51.net/image/kkb_dubbo.png" alt="dubbo" width="820" height="150" /></a>';
//art_upp[5] = '<a href="https://datayi.cn/w/z98j4D6P" target="_blank"><img src="https://files.jb51.net/image/kkb_sjkf.png" alt="数据开发" width="820" height="150" /></a>';
//art_upp[6] = '<a href="https://datayi.cn/w/1P6j2OVP" target="_blank"><img src="https://files.jb51.net/image/kkb_web.png" alt="web" width="820" height="150" /></a>';
//art_upp[7] = '<a href="https://datayi.cn/w/EoZa4AkP" target="_blank"><img src="https://files.jb51.net/image/kkb_ai.png" alt="AI" width="820" height="150" /></a>';
var art_up = art_upp[3];
//var nn =Math.round(Math.random());
//if (nn==1){art_up_isbd=1}
//if ("undefined" != typeof lmname && lmname == "python") {
//    var art_up = art_upp[6];
//} else {
//    var nm = Math.round(Math.random() * 3 + 4);
//    var art_up = art_upp[nm];
//}
/*var art_up='<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt><ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="3921475131"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';
auto <ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-6384567588307613" data-ad-slot="3418757643"></ins>
*/

var art_down = art_upp[0];
var art_bot = '<a href="https://mp.weixin.qq.com/s/HFvRM6gpaACettv5ffM0tg" target="_blank"><img src="https://files.jb51.net/image/msb800.jpg" alt="java" width="820"/></a>';
if (projectName != 'article') {
    art_bot = art_upp[2];
}
var art_down2 = '<scri' + 'pt type="text/javascript" src="//jscode.jbzj.com/source/p_khqtq/common/j/source/qq.js"></s' + 'cript>';

var list_r_r300 = '<scrip' + 't type="text/javascript" src="//jscode.jbzj.com/common/static/js/2f9w.js?cxtwdu=wg"></s' + 'cript>';

var art_xg = '<scr' + 'ipt type="text/javascript" src="//jscode.jbzj.com/site/g/bx_d/production/hak_cq.js"></scr' + 'ipt>';
var side_up = '<a href="http://h.wz-i.cn/2Y0" target="_blank"><img src="https://files.jb51.net/image/kkb_xzk_300.png" alt="web"/></a>';
//var side_up = '<scri' + 'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri' + 'pt>';
//side_up += '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="4845332105"></ins><scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';
var r_2 = '<script type="text/javascript">var cpro_id="u1397867";(window["cproStyleApi"] = window["cproStyleApi"] || {})[cpro_id]={at:"3",rsi0:"300",rsi1:"380",pat:"6",tn:"baiduCustNativeAD",rss1:"#FFFFFF",conBW:"1",adp:"1",ptt:"0",titFF:"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91",titFS:"14",rss2:"#000000",titSU:"0",ptbg:"90",piw:"0",pih:"0",ptp:"0"}</script><script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>';

var fudong = r_2;



var gg_l = '';
gg_l += '<scri' + 'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri' + 'pt>';
gg_l += '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6438537127"></ins>';
gg_l += '<scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';

//var gg_l= '<scr'+'ipt type="text/javascript" src="//jscode.jbzj.com/lgycphfyo.js"></scr'+'ipt>';

//u811641
var gg_r = '<scri' + 'pt type="text/javascript" src="//jscode.jbzj.com/bwyffvsfzdec.js"></sc' + 'ript>';

//var r1gg=side_up;

var r1gg = '<scri' + 'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri' + 'pt>';
r1gg += '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="2817964327"></ins>';
r1gg += '<scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';

var r2gg = '<scri' + 'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri' + 'pt>';
//r2gg+='<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="2129515335"></ins>';
r2gg += '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6500564943"></ins>';
r2gg += '<scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';


var rbbd = '<scri' + 'pt type="text/javascript" src="//jscode.jbzj.com/source/hcy/static/z/common/l/k-blu.js"></sc' + 'ript>';

var dxy728 = '<a href="http://www.33ip.com" target="_blank"><img src="//files.jb51.net/image/33ip_728.gif"></a>';
var dxy320 = '<a href="http://edu.jb51.net/" target="_blank"><img src="//files.jb51.net/image/edu320.png" width=320 height=90></a>';

//u1424765
var qq_index = '<scri' + 'pt type="text/javascript" src="//jscode.jbzj.com/rldzo3l5kz.js"></scri' + 'pt>';

//list820
var index_top = '<scri' + 'pt type="text/javascript" src="//jscode.jbzj.com/common/e/static/zw-vo/common/v-oao.js"></scri' + 'pt>';

var list_r_mid = '<scri' + 'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri' + 'pt>';
list_r_mid += '<ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-6384567588307613" data-ad-slot="3321016300" data-ad-format="auto" data-full-width-responsive="true"></ins>';
list_r_mid += '<scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';

jbMap['logo_m'] = function () {
    document.writeln(logo_m);
};

jbMap['logo_r'] = function () {
    document.writeln(logo_r);
};

jbMap['idctu'] = function () {
    document.writeln(idctu);
};

jbMap['tonglanbd'] = function () {
    document.writeln(tonglanbd);
};

jbMap['tonglangg'] = function () {
    document.writeln(tonglangg);
};

jbMap['tonglan1'] = function () {
    document.writeln(tonglan1);
};

jbMap['tonglan1_2'] = function () {
    document.writeln(tonglan1_2);
};

jbMap['tonglan2'] = function () {
    document.writeln(tonglan2);
};

jbMap['tonglan2_1'] = function () {
    document.writeln(tonglan2_1);
};

jbMap['tonglan2_2'] = function () {
    document.writeln(tonglan2_2);
};

jbMap['tonglan3_1'] = function () {
    document.writeln(tonglan3_1);
};

jbMap['tonglan3_2'] = function () {
    document.writeln(tonglan3_2);
};

jbMap['tonglan3_3'] = function () {
    document.writeln(tonglan3_3);
};

jbMap['tonglan_1024'] = function () {
    document.writeln(tonglan_1024);
};

jbMap['botad'] = function () {
    document.writeln(botad);
};

jbMap['idctu1'] = function () {
    document.writeln(idctu1);
};

jbMap['idctu2'] = function () {
    document.writeln(idctu2);
};

jbMap['tit_down'] = function () {
    document.writeln(tit_down);
};

jbMap['art_up'] = function () {
    document.writeln(art_up);
};

jbMap['art_bot'] = function () {
    document.writeln(art_bot);
};

jbMap['art_down'] = function () {
    document.writeln(art_down);
};

jbMap['art_down2'] = function () {
    document.writeln(art_down2);
};

jbMap['list_r_r300'] = function () {
    document.writeln(list_r_r300);
};

jbMap['art_xg'] = function () {
    document.writeln(art_xg);
};

jbMap['side_up'] = function () {
    document.writeln(side_up);
};

jbMap['r_2'] = function () {
    document.writeln(r_2);
};

jbMap['fudong'] = function () {
    document.writeln(fudong);
};


jbMap['gg_l'] = function () {
    document.writeln(gg_l);
};

jbMap['gg_r'] = function () {
    document.writeln(gg_r);
};

jbMap['r1gg'] = function () {
    document.writeln(r1gg);
};

jbMap['r2gg'] = function () {
    document.writeln(r2gg);
};

jbMap['rbbd'] = function () {
    document.writeln(rbbd);
};

jbMap['bd200'] = function () {
    document.writeln(bd200);
};


jbMap['bctools'] = function () {
    document.writeln(bctools);
};

jbMap['dxy728'] = function () {
    document.writeln(dxy728);
};

jbMap['dxy320'] = function () {
    document.writeln(dxy320);
};

jbMap['qq_index'] = function () {
    document.writeln(qq_index);
};

jbMap['index_top'] = function () {
    document.writeln(index_top);
};

jbMap['list_r_mid'] = function () {
    document.writeln(list_r_mid);
};

if (jQuery) {
    /*$jb51_top = $('#jb51_topbar');
    if($jb51_top){
        $jb51_top.html('<div class="userbar"><a href="http://tougao.jb51.net" target="_blank">投稿中心</a><img style="width:32px; height:22px" src="http://img.jb51.net/skin/2016/images/newn.gif" alt="hot"></div>');
    }*/

    $addnr = $('div#content .clearfix');
    var xbqq = '';
    var xbtj = '';
    if ($addnr) {
        if (projectName == "article") {
            xbqq = '2998481778';
        } else {
            xbqq = '1079426599';
            if (projectName == "office") {
                xbtj = '<div class="sidebox-recomm1"><a class="style03" href="https://www.jb51.net/news/699009.html" target="_blank"><div class="title"><strong>站长推荐</strong></div><div class="tj_ico3"></div><h4>Office专业增强版2019正版办公软件</h4><p>一次购买终身使用，绑定您的微软账户！安全可靠看得见！脚本之家粉丝专属价[<i>￥148元</i>]</p></a></div>';
            } else if (projectName == "os") {
                xbtj = '<div class="sidebox-recomm1"><a class="style02" href="https://www.jb51.net/os/win10/698746.html" target="_blank"><div class="title"><strong>站长推荐</strong></div><div class="tj_ico2"></div><h4>正版Windows 10家庭版/专业版永久激活密钥</h4><p>正版支持无限次重装系统，绑定微软官方个人帐户，支持更换设备，购买一次可永久使用。限时抢购[￥<span>1088</span>&rarr;<i>￥248</i>]起</p></a></div>';
            }
        }

        if (projectName == "article") {
            $('#content').append(xbtj + '<p class="tip">也许是最全java资料！（文档+项目+资料）<a href="https://mp.weixin.qq.com/s/HFvRM6gpaACettv5ffM0tg" target="_blank">【点击下载】</a> 和努力的人一起学习Java！</p>');
        } else {
            $addnr.before(xbtj + '<p class="tip">如您对本文有所疑义或者有任何需求，请<a href="//shequ.jb51.net" target="_blank">点击访问脚本社区</a>，百万网友为您解惑!</p>');
        }
        //$addnr.before(xbtj+'');
    }

    $yuanshichang = $('.topbarleft');
    if ($yuanshichang) {
        $yuanshichang.find('a').eq(0).attr('href', 'https://shequ.jb51.net');
        $yuanshichang.find('a').eq(0).text('脚本之家社区');
        $yuanshichang.append('<a href="https://www.yuanshichang.com/" target="_blank" style="color:red">源码商城</a>');
    }
    if ("undefined" != typeof ourl) {
        if (ourl) {
            $content = $('#content');
            if ($content) {
                if (ourl.indexOf(":") > 0) {
                    if (projectName == "article") {
                        $('.lbd_bot').after('<p>原文链接：' + ourl + '</p>');
                    } else {
                        $content.append('<p>原文链接：' + ourl + '</p>');
                    }
                } else {
                    if (projectName == "article") {
                        $('.lbd_bot').after('<p>原文链接：' + window.atob(ourl) + '</p>');
                    } else {
                        $content.append('<p>原文链接：' + window.atob(ourl) + '</p>');
                    }
                }
            }
        }
    }
    $(function () {
        var vzl = document.getElementById('txtlink').getElementsByTagName('span'),
            j = 0;
        for (var i = 0; i < vzl.length; i++) {
            j = i % 4 ? j : ++j;
            vzl[i].style = j % 2 ? 'color:red' : 'color:blue';
        }
    });
    $(document).ready(function () {
        /*var shequimg = new Array()
    shequimg[0] = '//files.jb51.net/image/pythonsq1.png';
    shequimg[1] = '//files.jb51.net/image/pythonsq2.png';
    var nn =Math.round(Math.random());*/

        var shequlink = '<div id="ewm"><div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/skin/2018/images/jb51ewm.png" /></div><div class="fr"><p>微信公众号搜索 “ <span>脚本之家</span> ” ，选择关注</p><p>程序猿的那些事、送书等活动等着你</p></div></div></div>';
        //var shequlink = '<div id="ewm"><div class="jb51ewm"><img src="'+ shequimg[nn] +'" /></div></div>';
        var newslink = '<div id="ewm"><div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/skin/2018/images/itewm.png"></div><div class="fr"><p>微信公众号搜索 “ <span>IT服务圈儿</span> ” ，选择关注</p><p>每日十点播报，把握行业热点，紧跟行业脚步</p></div></div></div>';
        var gamelink = '<div id="ewm"><div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/image/yxewm.png"></div><div class="fr"><p>微信公众号搜索 “ <span>游戏圈儿的那些事</span> ” </p><p>参加抽现金红包活动。</p></div></div></div>';
        $content = $('#content');
        //shequlink=art_wxz+shequlink;

        if ("undefined" != typeof downlm && downlm == "art-news") {
            if ($content) {
                $content.after(newslink);
            }
        } else if ("undefined" != typeof downlm && downlm == "art" && projectName == "gonglue") {
            if ($content) {
                $content.after(gamelink);
            }
        } else {
            if ($content) {
                $('.lbd_bot').after(shequlink);
            }
        }

        var topli = $('#ic .list:first');
        if (topli) {
            //topli.find("li:eq(0)").html('<li><a href="###" title="java" target="_blank" class="tag">福利</a><a rel="nofollow" href="https://www.jb51.net/os/win10/698746.html" title="正版Windows 10 家庭/专业版 新年特价 248元" target="_blank" class="tt" style=" color:red;">正版Windows 10 家庭/专业版 新年特价 248元</a><span>01-04</span></li>');
        }

        if ("undefined" == typeof tougao) {

            var yyweb = $('.bor-red');
            if (yyweb) {
                if (projectName == 'web' || projectName == 'htm5' || projectName == 'css' || projectName == 'xml' || projectName == 'Dreamweaver' || projectName == 'frontpage') {
                    yyweb.after('<div class="r300 clearfix mt10"><a href="https://www.yiyangidc.com/" target="_blank"><img src="//files.jb51.net/image/yywysj300.png" width="300" height="100"></a></div>');
                }
            }
            if ("undefined" != typeof lmname) {
                var lmarr = ',,脚本专栏,vbs,DOS/BAT,hta,htc,python,perl,游戏相关,VBA,远程脚本,ColdFusion,ruby专题,autoit,seraphzone,PowerShell,linux shell,Lua,Golang,Erlang,其他,服务器,,';
                if (lmarr.indexOf(',' + lmname + ',') > 0) {
                    $(document.getElementById('sidebar-right').children[3]).before('<div class="r300 clearfix mt10"><a href="https://www.yiyangidc.com/" target="_blank"><img src="//files.jb51.net/image/yyjbzl300.png" width="300" height="100" class="nohref"></a></div>');
                }
                var lmsjk = ',,数据库,MsSql,Mysql,mariadb,oracle,DB2,mssql2008,mssql2005,SQLite,PostgreSQL,MongoDB,Redis,Access,数据库文摘,数据库其它,,';
                if (lmsjk.indexOf(',' + lmname + ',') > 0) {
                    $(document.getElementById('sidebar-right').children[3]).before('<div class="r300 clearfix mt10"><a href="https://www.yiyangidc.com/" target="_blank"><img src="//files.jb51.net/image/yysjk300.png" width="300" height="100" class="nohref"></a></div>');
                }
            }

        }
        if ("undefined" != typeof tougao) {
            var sid = $('#SOHUCS').attr('sid').replace('art_', '');
            var zzzl = '<div class="regulartg"><div class="qr"><div class="pic"><img src="//files.jb51.net/images/erweima/qdewm.jpg"></div><div class="slogan"><p>微信扫码，回复 “<em class="red"> 666 </em>” 领取正则相关资料！</p></div></div></div>';
            var jszl = '<p>一个包解决你所有的JS问题,<a href="https://shimo.im/docs/YKWPTdkPdKpwWG9H/read" target="_blank">点击获取</a></p>';
            if (sid == "73342") {
                $content.children('p').eq(17).after(zzzl);
            } else if (sid == "167287") {
                $content.children('p').eq(2).after(zzzl);
            } else if (sid == "134312") {
                $content.children('p').eq(2).before(jszl);
            } else if (sid == "172722") {
                $content.children('p').eq(0).after(jszl);
            } else if (sid == "143286") {
                $content.children('h2').eq(1).before(jszl);
            } else if (sid == "139346") {
                $content.children('p').eq(0).before(jszl);
            }
            var tztext = $(".downsoft a");
            if (tztext.text() == "\xa0") {
                tztext.attr('href', 'https://pan.lanzous.com/u/shaizishenshou');
                tztext.text("立即下载");
            }
        }
    });
}
