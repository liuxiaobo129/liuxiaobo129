/**
 * Created by evan on 2017/6/1.
 */

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

var appDataConfig = {
    deviceTypeEnumMap: {
        "1": "WEB",
        "2": "app",
        "3": "WAP"
    },
    opTypeEnumMap: {
        "regist": "注册",
        "login": "登录",
        "login0": "登录0",
        "login1": "登录1",
        "login2": "登录2",
        "login3": "登录3",
        "login4": "登录4",
        "login5": "登录5",
        "pwd_login_back": "找回登录密码",
        "pwd_pay_back": "找回支付密码",
        "pwd_login_update": "修改登录密码",
        "pwd_pay_update": "修改支付密码",
        "common_contact_add": "添加常用联系人",
        "common_contact_update": "修改常用联系人",
        "common_contact_delete": "删除常用联系人",
        "common_address_add": "添加常用地址",
        "common_address_update": "修改常用地址",
        "common_address_delete": "删除常用地址",
        "common_card_bind": "常用卡绑定",
        "common_card_unbind": "常用卡解绑"
    },
    registLoginEnumMap: {
        "1": "微信",
        "2": "QQ",
        "3": "weibo",
        "4": "支付宝",
        "5": "手机短信校验码",
        "6": "密码登录"
    },
    channelEnumMap: {
        "1": "火车票",
        "2": "机票",
        "3": "国内游",
        "4": "景点门票",
        "5": "常用信息",
        "6": "其它"
    },
    bankCardTypeEnumMap: {
        "1": "借",
        "2": "贷"
    },
    conclusionEnumMap:{
      "P": '通过',
      "S":'延缓',
      "PA":'挂起',
      "R":'拒绝',
      "V":'验证'
    },
    pay_level1EnumMap:{
      "事前": 0,
      "事后":10000
    },
    pay_level2EnumMap:{
      "快捷支付": 100,
      "同同宝支付":200,
      "微信支付":300,
      "支付宝支付":400,
      "网银支付":500,
      "余额支付":600,
      "匿名支付":700,
      "无卡支付":800,
      "出款":900,
      "账户件转账":1000,
      "对公出款":1100,
      "对公账户件转账":1200,
      "预授权":1300,
      "银行代扣":1400,
      "现金贷":1500,
      "白条":1600,
      "白条首付":1700,
      "外卡支付":1800,
      "白条搭售":1900
    },
    pay_level3EnumMap:{
      "通过": 10,
      "验证":20,
      "挂起":30,
      "拒绝":40
    },
    pay_level4EnumMap:{
      "未知":0,
      "成功": 1,
      "失败":2
    },
    fq_level1EnumMap:{
       "激活接口": 20010,
       "评分接口":20020,
       "下单查询额度接口":20030,
       "交易前接口":20040,
       "交易后接口":20050,
       "自动提额接口":20060,
       "用户等级接口":20070,
       "用户等级异步重跑接口":20080,
       "现金贷通知接口":20090,
       "现金贷授信额度接口":20100,
       "现金贷借款接口":20110,
       "风控查询":20120,
       "现金贷上行拒绝转自融":20130,
       "现金贷复审激活接口":20140,
       "白条收银台":20150,
       "分期游授信接口":20160,
       "分期游复审":20170,
       "(上行)初审-准入":20180,
       "(上行)初审-定价":20190,
       "(上行)初审-额度":20200,
       "(上行)初审-银行筛选":20210,
       "(上行)初审-人行报告获取":20230,
       "(上行)转自融-准入":20240,
       "(上行)转自融-定价":20250,
       "(上行)转自融-额度":20260,
       "(上行)复审-准入":20270,
       "(上行)复审-定价":20280,
       "(上行)复审-额度":20290,
       "(上行)初审-非银行客群准入":20300,
       "(上行)初审-非银行客群定价":20310,
       "(上行)初审-非银行客群额度":20320,
       "分期游通知任务":20330,
       "汽车金融授信":20340,
       "同程信用分":20350,
       "现金贷调额":20360,
       "融易贷":20370,
       "现金贷续约准入":20380,
       "现金贷续约定价":20390,
       "现金贷续约额度":20400,
       "市场季度额度":20410,
       "市场剩余额度":20420,
       "市场单次提额":20430,
       "(上行)小额定价":20440,
       "(上行)小额额度":20450,
       "(上行)客群筛选" :20460
    },
    fq_level2EnumMap:{
       "通过": 0,
       "人工审核":1,
       "延缓":2,
       "拒绝":3
    },
    conclusionEnumMap:{
     "P":"通过",
     "V":"验证",
     "R":"拒绝",
     "PA":"挂起",
     "S":"暂缓"
    },
    actionCodeEnumMap:{
     "FM":"冻结",
     "RA":"审核",
     "BM":"设置BlockCode"
    },
    verifyTypesEnumMap:{
     "PWD":"验证支付密码",
     "CDC":"验证手机动态码",
     "RPWD":"必验支付密码",
     "CVV2":"CVV2验证",
     "VLDT":"有效期验证",
     "FGP":"指纹密码"
    },
    getText: function (text, type) {
        if (text !== null && text !== '') {
            var object = this[type];
            return object["" + text] ? object["" + text] : "" + text;
        }
        return ""
    }
};

appDataConfig['sourceTypeEnumMap'] = function(){
   var dict= {};
   for(key1 in appDataConfig.pay_level1EnumMap){
      for(key2 in appDataConfig.pay_level2EnumMap){
           for(key3 in appDataConfig.pay_level3EnumMap){
             for(key4 in appDataConfig.pay_level4EnumMap){
                 dict[appDataConfig.pay_level1EnumMap[key1] + appDataConfig.pay_level2EnumMap[key2] + appDataConfig.pay_level3EnumMap[key3] + appDataConfig.pay_level4EnumMap[key4]] = [key1,key2,key3,key4].join(" ")
              }
           }
      }
   }
  for(key1 in appDataConfig.fq_level1EnumMap){
    for(key2 in appDataConfig.fq_level2EnumMap){
       dict[appDataConfig.fq_level1EnumMap[key1] + appDataConfig.fq_level2EnumMap[key2]]  = [key1,key2].join(" ")
    }
 }
 return dict;
}()

