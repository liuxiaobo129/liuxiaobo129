"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};window._hmt=window._hmt||[],function(){function t(t){for(var e=document.cookie.split("; "),n=0;n<e.length;n++){var o=e[n].split("=");if(o[0]==t&&"UD"==t)return decodeURIComponent(o[1]);if(o[0]==t)return decodeURI(o[1])}}function e(){var t=window.location.host;return 0===t.indexOf("blog")?"UA-127895514-2":0===t.indexOf("download")?"UA-127895514-8":0===t.indexOf("edu")?"UA-127895514-9":0===t.indexOf("bbs")?"UA-127895514-4":0===t.indexOf("ask")?"UA-127895514-5":0===t.indexOf("gitbook")?"UA-127895514-10":0===t.indexOf("iteye")?"UA-127895514-6":0===t.indexOf("passport")?"UA-127895514-7":0===t.indexOf("so")?"UA-127895514-3":0===t.indexOf("www")?t.indexOf("iteye")>0?"UA-127895514-6":"UA-127895514-1":""}var n="6bcd52f51e9b3dce32bec4a3997715ac",o="facf15707d34a73694bf5c0d571a4a72",a=function(){var t="6bcd52f51e9b3dce32bec4a3997715ac",e=$('meta[name="toolbar"]');if(e.length){var n=e.attr("content")||{};n=JSON.parse(n),t=n.hmId||t}return t}();!function(t){for(var e=document.cookie.split("; "),a=0;a<e.length;a++){var r=e[a].split("=");/^Hm\_.+\_.+$/.test(r[0])&&-1===r[0].indexOf(t)&&-1===r[0].indexOf(n)&&-1===r[0].indexOf(o)&&(document.cookie=r[0]+"="+escape("")+";max-age=0;domain=.csdn.net;path=/")}}(a),function(t){_hmt.push(["_setAccount",t])}(a),function(){try{var e=!!t("UN"),n=!!t("UserName"),o=t("p_uid");o=o?o.substr(1,1):0,_hmt.push(["_setUserProperty",{islogin:+e,isonline:+n,isvip:+(1==o)}]),n&&_hmt.push(["_setUserId",t("UserName")]),_hmt.push(["_setUserTag","6525",t("uuid_tt_dd")])}catch(t){void 0}}();var r=document.createElement("script");r.src="https://hm.baidu.com/hm.js?"+a;var s=document.getElementsByTagName("script")[0];if(s.parentNode.insertBefore(r,s),document.referrer.indexOf("google.com")>-1){var c=function(){dataLayer.push(arguments)},i=document.createElement("script");i.src="https://www.googletagmanager.com/gtag/js?id="+e(),s.parentNode.insertBefore(i,s),window.dataLayer=window.dataLayer||[];var l=t("UserName")||"";c("js",new Date),c("config",e()),l&&c("set",{user_id:l})}}(),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://g.csdnimg.cn/??asdf/1.1.2/trackad.js,iconfont/nav/iconfont-1.0.1.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),function(){function t(t,e,n){var o=new Date;if(-1==n)return void(document.cookie=t+"="+escape(e)+";domain=.csdn.net;path=/");if(n)o.setTime(o.getTime()+n);else{o.setTime(o.getTime()+2592e6)}document.cookie=t+"="+escape(e)+";expires="+o.toGMTString()+";domain=.csdn.net;path=/"}var e=["blog","bbs","download","ask","edu","biwen"],n=document.referrer;if(""!==n)if(n.indexOf(".csdn.net")>-1)for(var o=0;o<e.length;o++)n.indexOf(e[o]+".csdn.net")>-1&&t("c_ref",n,-1);else t("c_ref",n.split("?")[0],-1)}(),function(){function t(t,e){var n=document.createElement("script");n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,e&&e())}:n.onload=function(){e&&e()},n.src=t,document.getElementsByTagName("head")[0].appendChild(n)}window.csdn=window.csdn||{};var e=window.location.host,n=function(t,e){var n=t.include||["*"],o=t.exclude||[],a=n.filter(function(t){return!!~n.indexOf("*")||!!~e.indexOf(t)}).length>0,r=o.filter(function(t){return!!~o.indexOf("*")||!!~e.indexOf(t)}).length>0;return a&&!r};[{url:"//g.csdnimg.cn/??login-box/1.1.4/login-box.js,login-box/1.1.4/login-auto.js",exclude:["passport.csdn","edu.csdn","job.csdn","mall.csdn","mp.csdn",".i.csdn"],include:["*"],before:function(){window.csdn.loginBox=window.csdn.loginBox||{},window.csdn.loginBox.loginAutoParams={loginAutoMaxNum:999999,isClosedMaskArea:!1,isClosedBtn:!1}},isInit:function(){if(window.csdn.loginBox&&window.csdn.loginBox.scope)return void 0,!0}}].forEach(function(o){var a=o.isInit&&o.isInit(),r=n(o,e);void 0,r&&!a&&(o.before&&o.before(),o.url&&t(o.url,o.after))})}(),window._hmt=window._hmt||[],function(t,e){function n(t){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,document.getElementsByTagName("head")[0].appendChild(e)}function o(t){for(var e=document.cookie.split("; "),n=0;n<e.length;n++){var o=e[n].split("=");if(o[0]==t&&"UD"==t)return decodeURIComponent(o[1]);if(o[0]==t)return decodeURI(o[1])}}function a(t,e,n){var o=new Date;if(-1==n)return void(document.cookie=t+"="+escape(e)+";domain=.csdn.net;path=/");if(n)o.setTime(o.getTime()+n);else{o.setTime(o.getTime()+2592e6)}document.cookie=t+"="+escape(e)+";expires="+o.toGMTString()+";domain=.csdn.net;path=/"}function r(t){var e=new Date;document.cookie=t+"="+escape("1")+";max-age=0;expires="+e.toGMTString()+";domain=.csdn.net;path=/"}function s(t,e){var n=document.createElement("script");n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,e&&e())}:n.onload=function(){e&&e()},n.src=t,document.getElementsByTagName("head")[0].appendChild(n)}function c(t,e){var n,o=null;return function(){var a=this,r=new Date;r-o-e>0?(n&&(clearTimeout(n),n=null),t.apply(a,arguments),o=r):n||(n=setTimeout(function(){t.apply(a,arguments)},e))}}function i(t){t=t.replace("https://","");var e=t.split(".")[0];return~location.host.indexOf(e)}function l(t){return 0==t.length?"":t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\'/g,"&#39;").replace(/\"/g,"&quot;")}function d(n){if("[object Object]"==Object.prototype.toString.call(n)){var o=e("#csdn-toolbar"),a=n.need_first_suspend||!1,r=n.need_little_suspend||!1,s=n.little_tool_id||"",i=n.little_need_insert_type||"",l=n.need_change_function||"",u="",p="";if(1!=a||1!=r){if(r&&""!=s&&(o=e(s)),r&&s&&""!=i&&(u="."+i,p=e(u)),0===o.length)return void b.push(d.bind(this,n));var h=c(function(){if((document.documentElement.scrollTop||document.body.scrollTop)>=50)o.css({position:"fixed",top:"0",left:"0","z-index":"9999",width:"100%"}),r&&e(".secodn_level_csdn_logo").length&&e(".secodn_level_csdn_logo").css({display:"block"}),r&&""!=i&&(e("body").addClass("toolbar-second-drop"),"onlySearch"==i?e("#csdn_tool_otherPlace").append(p):"onlyUser"==i?e("#csdn_tool_otherPlace").append(p):"searchUser"==i&&(e("#csdn_tool_otherPlace").append(e(".onlySearch")),e("#csdn_tool_otherPlace").append(e(".onlyUser")))),"function"==typeof l&&l("fixed");else{if(o.css({position:"static","z-index":""}),r&&e(".secodn_level_csdn_logo").length&&e(".secodn_level_csdn_logo").css({display:"none"}),r&&""!=i){e("body").removeClass("toolbar-second-drop");var t=e("#csdn-toolbar .toolbar-container");"onlySearch"==i?t.find(".toolbar-menus").after(p):"onlyUser"==i?t.append(p):"searchUser"==i&&(t.append(e(".onlySearch")),t.append(e(".onlyUser")))}"function"==typeof l&&l("noFixed")}},80);(document.documentElement.scrollTop||document.body.scrollTop)>50&&h(),e(t).on("scroll",h)}}}function u(){var e=t.location.host,n=e.split(".")[0],o="";switch(n){case"www":case"blog":case"bbs":o="";break;case"download":o="doc";break;case"ask":case"gitchat":case"geek":o="";break;case"edu":o="course";break;default:o=""}return e.indexOf(".blog.csdn.net")>-1&&(o="blog"),o}function p(t){var e={};return location.href.replace(/([^*#&=?]+)=([^*#&=?]+)/g,function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];var a=n[1],r=n[2];e[a]=r}),t?e[t]:e}function h(t){var e=t.start,n=t.end;if(e&&n){var o=(new Date).getTime(),e=new Date(e).getTime(),n=new Date(n).getTime();return o>=e&&o<=n}}function m(t){try{t&&e(document).trigger(t)}catch(t){void 0}}function f(){this.currentUser={userName:"",userNick:'<a class="set-nick" href="https://passport.csdn.net/account/profile">设置昵称<span class="write-icon"></span></a>',desc:'<a class="fill-dec" href="//my.csdn.net" target="_blank">编辑自我介绍，让更多人了解你<span class="write-icon"></span></a>',avatar:""},this.hasLogin=!1,this.$container="",this.announcement=0,this.logoData={title:"CSDN首页",url:{default:"https://g.csdnimg.cn/common/csdn-toolbar/images/csdn-logo.png",dark:"https://g.csdnimg.cn/common/csdn-toolbar/images/csdn-logo.png",home:"https://g.csdnimg.cn/common/csdn-toolbar/images/csdn-logo.png"}},this.navData=[{id:"blog",name:"博客",url:"https://blog.csdn.net/",report:{mod:"popu_336",dest:"https://blog.csdn.net/",extend1:"博客"},children:[{name:"创作中心",url:"https://mp.csdn.net?utm_medium=fe.tool_bar_second.blog.creative_center",report:'{"mod":"1593505904_001"}'}]},{id:"edu",name:"学院",url:"https://edu.csdn.net/",report:{mod:"popu_336",dest:"https://edu.csdn.net/",extend1:"学院"},children:[]},{id:"download",name:"下载",url:"https://download.csdn.net/",report:{mod:"popu_336",dest:"https://download.csdn.net/",extend1:"下载"},children:[{name:"我的资源",url:"https://mp.csdn.net/console/upDetailed?utm_medium=fe.tool_bar_second.download.my_resources",report:'{"mod":"1593505904_002"}'}]},{id:"bbs",name:"论坛",url:"https://bbs.csdn.net/",report:{mod:"popu_336",dest:"https://bbs.csdn.net/",extend1:"论坛"},children:[{name:"我的积分",url:"https://mp.csdn.net/console/upDetailed?utm_medium=fe.tool_bar_second.download.my_points",report:'{"mod":"1593505904_003"}'}]},{id:"aks",name:"问答",url:"https://ask.csdn.net/",report:{mod:"popu_336",dest:"https://ask.csdn.net/",extend1:"问答"},children:[]},{id:"live",name:"直播",url:"https://live.csdn.net/",report:{mod:"popu_336",dest:"https://live.csdn.net/",extend1:"直播"},children:[]},{id:"job",name:"招聘",url:"https://job.csdn.net/",report:{mod:"popu_336",dest:"https://job.csdn.net/",extend1:"招聘"},children:[]},{id:"vip",name:"VIP会员",url:"https://mall.csdn.net/vip",report:{mod:"popu_336",dest:"https://mall.csdn.net/vip",extend1:"VIP会员"},children:[{name:"VIP权益",url:"https://csdn.net/vip?utm_medium=fe.tool_bar_second.download.vip",report:'{"mod":"1593505904_004"}'}]}],this.personMenuData=[],this.advertData={date:{start:"2020/07/03 08:50:00",end:"2020/07/04 17:30:00"},background:{large:"https://csdnimg.cn/public/publick_img/ad_20200703_toolbar325.jpg",default:"https://csdnimg.cn/public/publick_img/ad_20200703_toolbar80_2.jpg"},color:"#027ef2",url:"https://aiprocon.csdn.net/p/live?utm_source=live_703"},this.init()}t.csdn=t.csdn||{},t.csdn.configuration_tool_parameterv=d;var g=["csdn-toolbar-home","csdn-toolbar-dark","csdn-toolbar-home"],b=[],v=0;f.prototype={constructor:f,init:function(){var t=this;t.checkLogin(function(e){e.userName&&(t.hasLogin=!0,_hmt.push(["_setUserTag","5744",e.userName])),t.setPersonMenuData()}),t.getToolbarData(t.render)},render:function(t){var e=this;e.renderToolbar(),e.renderAdvert(),e.renderLogo(),e.renderNav(),e.renderSearch(),e.renderBtns(),e.getHotSearchWordData(e.setSearchInputPlaceholder.bind(e)),e.chain()},setPersonMenuData:function(){this.personMenuData=[{name:"我的关注",url:"https://i.csdn.net/#/uc/follow-list",report:'{"mod":"popu_789","dest":"https://i.csdn.net/#/uc/follow-list","extend1":"我的关注"}',icon:"toolbar-icon-follow",class:""},{name:"我的收藏",url:"https://i.csdn.net/#/uc/collection-list",report:'{"mod":"popu_789","dest":"https://i.csdn.net/#/uc/collection-list","extend1":"我的关注"}',icon:"toolbar-icon-collect",class:""},{name:"个人中心",url:"https://i.csdn.net/#/uc/profile",report:'{"mod":"popu_789","dest":"https://i.csdn.net/#/uc/profile","extend1":"个人中心"}',icon:"toolbar-icon-profile",class:""},{name:"帐号设置",url:"https://i.csdn.net/#/uc/account/index",report:'{"mod":"popu_789","dest":"https://i.csdn.net/#/uc/account/index","extend1":"帐号设置"}',icon:"toolbar-icon-account",class:"toolbar-subMenu-border"},{name:"我的博客",url:"https://blog.csdn.net/"+this.currentUser.userName,report:'{"mod":"popu_789","dest":"https://blog.csdn.net/","extend1":"我的博客"}',icon:"toolbar-icon-blog",class:""},{name:"管理博客",url:"https://mp.csdn.net/console/article",report:'{"mod":"popu_789","dest":"https://mp.csdn.net/console/article","extend1":"管理博客"}',icon:"toolbar-icon-mp",class:""},{name:"我的学院",url:"https://edu.csdn.net/mycollege",report:'{"mod":"popu_789","dest":"https://edu.csdn.net/mycollege","extend1":"我的学院"}',icon:"toolbar-icon-edu",class:""},{name:"我的下载",url:"https://mp.csdn.net/console/upDetailed",report:'{"mod":"popu_789","dest":"https://mp.csdn.net/console/upDetailed","extend1":"我的下载"}',icon:"toolbar-icon-download",class:"toolbar-subMenu-border"},{name:"我的钱包",url:"https://i.csdn.net/#/wallet/index",report:'{"mod":"popu_789","dest":"https://i.csdn.net/#/wallet/index","extend1":"我的钱包"}',icon:"toolbar-icon-wallet",class:""},{name:"我的订单",url:"https://mall.csdn.net/myorder",report:'{"mod":"popu_789","dest":"https://mall.csdn.net/myorder","extend1":"我的订单"}',icon:"toolbar-icon-order",class:"toolbar-subMenu-border"},{name:"帮助",url:"https://blog.csdn.net/blogdevteam/article/details/103478461",report:'{"mod":"popu_789","dest":"https://blog.csdn.net/blogdevteam/article/details/103478461","extend1":"帮助"}',icon:"toolbar-icon-help",class:""},{name:"退出",url:"javascript:;",icon:"toolbar-icon-logout",class:"toolbar-btn-logout"}]},getAvatarByAu:function(t){return!!t&&"https://profile.csdnimg.cn/"+t.split("").join("/")+"/2_"+(this.currentUser.userName&&this.currentUser.userName.toLowerCase())},checkLogin:function(t){var e=o("AU"),n=o("UserNick"),a=o("UserName"),r=o("UD");this.currentUser.userNick=n,this.currentUser.userName=a,this.currentUser.avatar=this.getAvatarByAu(e),this.currentUser.desc=r?l(r.replace(/\+/g," ")):this.currentUser.desc,t&&t(this.currentUser)},renderToolbar:function(){var t=this,n=t.getToolbarStyle(),o=e('<div id="csdn-toolbar">\n                    <div class="toolbar-inside" style="'+n+'">\n                      <div class="toolbar-container csdn-toolbar-clearfix">\n                        <div class="toolbar-logo toolbar-subMenu-box csdn-toolbar-fl"></div>\n                        <ul class="toolbar-menus csdn-toolbar-fl"></ul>\n                        <div class="toolbar-search onlySearch csdn-toolbar-fl"></div>\n                        <div class="toolbar-btns onlyUser csdn-toolbar-fr"></div>\n                      </div>\n                    </div>\n                  </div>');return e("body").prepend(o),t.$container=o.find(".toolbar-container"),t.$logoBox=o.find(".toolbar-logo"),t.$NavBox=o.find(".toolbar-menus"),t.$searchBox=o.find(".toolbar-search"),t.$btnsBox=o.find(".toolbar-btns"),e(document).on("click",function(n){0!==e(n.target).closest(".toolbar-search").length||t.searchInputFocus||(t.clearSeachDropMenu(),t.toggleSearchBarInput())}),this},renderNav:function(){var t=""+this.navData.map(function(t){return t.active=i(t.url),'<li class="'+(t.active?"active ":"")+(t.children.length?"toolbar-subMenu-box":"")+"\">\n                                <a data-report-click='"+JSON.stringify(t.report)+"' href='"+t.url+"'>"+t.name+"</a>\n                                "+(t.children.length?'<div class="toolbar-subMenu">\n                                    '+t.children.map(function(t){return"<a data-report-click='"+JSON.stringify(t.report)+"' target=\"_blank\" href='"+t.url+"'>"+t.name+"</a>"}).join("")+"\n                                  </div>":"")+"\n                              </li>"}).join("");return this.$NavBox.append(t),this},renderLogo:function(){var t=["default","dark","home"],e=t[v],n='<a href="https://www.csdn.net"><img title="'+this.logoData.title+'" src="'+this.logoData.url[e]+'"></a>\n                    <div class="toolbar-subMenu">\n                      <img width="96" height="96" src="https://csdnimg.cn/public/common/toolbar/images/csdnqr@2x.png">\n                    </div>';return void 0,this.$logoBox.append(n),this},renderSearch:function(){var t=this,n=e('<div class="toolbar-search-container">\n                    <input id="toolbar-search-input" type="text" value="" placeholder="'+this.getSearchInputPlaceHolder()+'">\n                    <button id="toolbar-search-button"></button>\n                  </div>');return n.on("focus","#toolbar-search-input",function(n){""===e(this).val()&&(t.renderSearchHistoryDropMenu(),t.getHotSearchData()),t.toggleSearchBarInput("focus"),t.searchInputFocus=!0}).on("blur","#toolbar-search-input",function(e){t.searchInputFocus=!1}).on("input","#toolbar-search-input",function(n){var o=e(this),a=o.val();void 0,""===a?(t.renderSearchHistoryDropMenu(),t.getHotSearchData()):e(".toolbar-search-drop-menu").remove()}).on("click","button",function(n){var o=e("#toolbar-search-input").val();return t.clickSearchBtnHandler.call(t,o),!1}).on("keyup","#toolbar-search-input",function(t){13===t.keyCode&&e("#toolbar-search-button").trigger("click")}),this.$searchBox.append(n),this.renderBaiduSearchDropMenu(),this},renderBtns:function(){var t=this,n=e('<div class="toolbar-btn toolbar-btn-write csdn-toolbar-fl '+(this.hasLogin?"toolbar-subMenu-box":"")+'">\n                    <a href="https://mp.csdn.net"><i></i>创作中心</a>\n                    '+(this.hasLogin?'<div class="toolbar-subMenu">\n                    <a data-report-click=\'{"mod":"1586414474_001","dest":"https://mp.csdn.net/console/editor/html"}\' target="_blank" href="https://mp.csdn.net/console/editor/html">写博客</a>\n                    <a data-report-click=\'{"mod":"1586414474_002","dest":"https://blink.csdn.net/?utm_source=103209678"}\' target="_blank" href="https://blink.csdn.net/?utm_source=103209678">发Blink</a>\n                    </div>':"")+'\n                  </div>\n                  <a href="https://i.csdn.net/#/uc/collection-list" class="toolbar-btn toolbar-btn-collect csdn-toolbar-fl">收藏</a>\n                  '+(this.hasLogin?'<a href="https://blog.csdn.net/nav/watchers" class="toolbar-btn toolbar-btn-collect csdn-toolbar-fl">动态</a>':"")+'\n                  <div class="toolbar-btn toolbar-btn-msg csdn-toolbar-fl">\n                    <div class="toolbar-subMenu-box">\n                      <a id="toolbar-remind" href="https://i.csdn.net/#/msg/index">消息</a>\n                    </div>\n                    <div class="toolbar-msg-box"></div>\n                  </div>\n                  <div class="toolbar-btn-login csdn-toolbar-fl '+(this.hasLogin?"toolbar-subMenu-box":"")+'">\n                    '+(this.currentUser.avatar?'<a class="hasAvatar" href="https://i.csdn.net"><img src="'+this.currentUser.avatar+'"></a>':' <a href="https://passport.csdn.net/account/login">登录/注册</a>')+"\n                    "+(this.hasLogin?'<div class="toolbar-subMenu">'+this.personMenuData.map(function(t){return"<a "+(t.report?"data-report-click='"+t.report+"'":"")+" href='"+t.url+"' class='"+t.class+"'><i class=\"toolbar-icon "+t.icon+'"></i>'+t.name+"</a>"}).join("")+"</div>":"")+"\n                  </div>");return this.$btnsBox.append(n),n.on("click",".toolbar-btn-logout",function(){t.clickLogoutBtnHandler()}),this.$msgBox=n.find(".toolbar-msg-box"),this},renderMsgMenu:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n='<div class="toolbar-subMenu">\n                    <a id="toolbar-announcement" href="'+(t.announcement?t.announcement.announcementUrl:"javaScript:;")+'">公告'+(t.announcement&&t.announcement.announcementCount?"<i>"+(t.announcement.announcementCount>99?"99+":t.announcement.announcementCount)+"</i>":"")+"</a>\n                    "+(this.hasLogin?'<a href="https://i.csdn.net/#/msg/index">评论'+(t.comment?"<i>"+(t.comment>99?"99+":t.comment)+"</i>":"")+'</a>\n                                      <a href="https://i.csdn.net/#/msg/attention">关注'+(t.follow?"<i>"+(t.follow>99?"99+":t.follow)+"</i>":"")+'</a>         \n                                      <a href="https://i.csdn.net/#/msg/like">点赞'+(t.thumb_up?"<i>"+(t.thumb_up>99?"99+":t.thumb_up)+"</i>":"")+'</a>\n                                      <a href="https://im.csdn.net/im/main.html">私信'+(t.im?"<i>"+(t.im>99?"99+":t.im)+"</i>":"")+'</a>\n                                      <a href="https://i.csdn.net/#/msg/answer">回答'+(t.invitation?"<i>"+(t.invitation>99?"99+":t.invitation)+"</i>":"")+'</a>\n                                      <a href="https://i.csdn.net/#/msg/notice">系统通知'+(t.system?"<i>"+(t.system>99?"99+":t.system)+"</i>":"")+'</a>\n                                      <a href="https://i.csdn.net/#/msg/setting">消息设置</a>':"")+"     \n                  </div>";this.$btnsBox.find(".toolbar-btn-msg .toolbar-subMenu-box").append(n),e("#toolbar-announcement").off("click").on("click",this.clickAnnouncementHandler.bind(this)),t.announcement&&this.setRemind(t.announcement.announcementUrl),b.length&&b.forEach(function(t){return t()})},renderCoupon:function(n){var o=e('<a href="https://i.csdn.net/#/msg/notice" class="toolbar-msg-coupon">你有一张VIP限时优惠券哦</a>');n&&n>0&&-1===t.location.href.indexOf("assign_skin_id")&&(this.$msgBox.append(o),setTimeout(function(){o.remove()},5e3))},renderGuide:function(t){var n=this,r=o("c-toolbar-loginguide"),s=e('<span class="toolbar-msg-guide"><a href="https://i.csdn.net/#/msg/index">登录查看未读消息</a><i></i></span>');!r&&t&&(s.find("i").click(function(t){a("c-toolbar-loginguide",1,864e5),s.remove()}),!n.hasLogin&&t>0&&this.$msgBox.append(s))},renderLiveMsg:function(t){var n=this;if(t&&1===t.status){var o=e('<div class="toolbar-msg-live">\n                      <a class="toolbar-msg-live-title" target="_blank" href="'+t.url+'">'+t.title+'</a>\n                      <p class="toolbar-msg-live-count"><i></i>'+t.count+'人在看</p>\n                      <div class="toolbar-msg-live-avatar"><span><img src="https://avatar.csdnimg.cn/6/0/6/3_qq_36556893_1548408119.jpg" alt=""></span></div>\n                      <span class="toolbar-msg-live-close"></span>\n                    </div>');o.on("click",".toolbar-msg-live-close",function(t){o.remove()}),o.on("click",".toolbar-msg-live-title",function(e){n.reportLiveId(+t.messageId)}),n.$msgBox.append(o),setTimeout(function(){o.remove()},15e3)}},renderAdvert:function(){var n=this,s=n.advertData;if(!s||!h(s.date))return void r("is_advert");if("https://www.csdn.net/"!==t.location.href){var c=!!o("is_advert"),i=e('<div class="toolbar-advert">\n              <a href="'+s.url+'" style="background: '+s.color+';" class="toolbar-advert-default '+(c?"":"toolbar-advert-lg")+'"><img src="'+(c?s.background.default:s.background.large)+'"></a>\n              <span class="toolbar-adver-btn">×</span>\n            </div>');i.find(".toolbar-adver-btn").click(function(t){return i.remove(),m("toolbarHeightChange"),!1}),e("#csdn-toolbar").prepend(i),m("toolbarHeightChange"),!c&&a("is_advert","1",864e5),i.on("transitionend",function(t){m("toolbarHeightChange")}),setTimeout(function(){!c&&e(".toolbar-advert-default").removeClass("toolbar-advert-lg").find("img").attr("src",s.background.default),m("toolbarHeightChange")},5e3)}},reportLiveId:function(t){if(t===t){var n={messageId:t};n=JSON.stringify?JSON.stringify(n):'{"messageId":'+t+"}",e.ajax({url:"https://msg.csdn.net/v1/web/message/view/live",type:"post",data:n,contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(t){}})}},renderSearchHistoryDropMenu:function(){var t=this,n=this.getSearchHistoryData(),o=e('<div class="toolbar-search-drop-menu '+(n.length?"toolbar-search-half":"")+'">\n                        '+(n.length?'<div class="toolbar-search-history">\n                          <p class="toolbar-search-title">搜索历史<span class="toolbar-search-clear"><i></i>清空</span></p>\n                          <ul>\n                            '+n.map(function(t){return'<li class="toolbar-search-item" data-type="history">'+t+"</li>"}).join("")+"\n                          </ul>\n                        </div>":"")+"\n                      </div>");o.on("click",".toolbar-search-clear",function(e){t.clearSearchHistory(),o.find(".toolbar-search-history").remove(),o.removeClass("toolbar-search-half")}).on("click","li",function(n){t.clickSearchItemHandler.call(t,e(this)),t.setAnimate(t.$NavBox,{width:"auto"})}),t.clearSeachDropMenu(),t.$searchHotAndHistoryDropMenu=o,t.$searchBox.append(o),t.buriedPoint({mod:"popu_369"})},renderSearchHotDropMenu:function(t){if(t){var n=e('<div class="toolbar-search-hot">\n                      <p class="toolbar-search-title">CSDN热搜</p>\n                      <ul>\n                        '+t.map(function(t,e){return'<li class="toolbar-search-item '+(e<=2||t.hot?"hot":"")+'" data-type="hot">'+(t.productId||t.word)+"</li>"}).join("")+"\n                      </ul>\n                    </div>");this.$searchHotAndHistoryDropMenu&&this.$searchHotAndHistoryDropMenu.append(n)}},renderBaiduSearchDropMenu:function(){s("https://csdnimg.cn/search/baidu_opensug-1.0.1.js",function(){BaiduSuggestion.bind("toolbar-search-input",{XOffset:"-1",YOffset:"-8",fontSize:"14px",width:260,"line-height":"32px",padding:"0 16px",color:e(".toolbar-search-drop-menu ").css("color"),borderColor:e(".toolbar-search-drop-menu ").css("background-color"),bgcolorHI:"#F0F1F2",sugSubmit:!1},function(){e("#toolbar-search-button").click()})})},clickSearchBtnHandler:function(n){var o=encodeURIComponent(n||this.placeHolder),a=!n&&this.placeHolder,r="",s="https://so.csdn.net/so/search/s.do?q="+o+"&t="+u()+"&u=",c=a?this.urlParamsPlaceholder:this.urlParams,i=this;if(void 0,"undefined"===o)return e("#toolbar-search-input").focus(),!1;if(i.addSearchHistory(decodeURIComponent(o)),c){for(var l in c)if(c.hasOwnProperty(l)){var d=c[l];r+="&"+l+"="+d}s+=r}this.urlParams="",t.location.href.indexOf("so.csdn.net")>-1?t.csdn&&t.csdn.toolbarSearchUrl?t.location.href=t.csdn.toolbarSearchUrl+o+r:t.location.href=s:t.open(s)},clickSearchItemHandler:function(t){var n=t.text(),o=t.data("type"),a=this,r=t.index(),s={history:"popu_845",hot:"popu_846"},c={mod:s[o],extra:JSON.stringify({searchword:n})};if("hot"===o){var i=a.hotSearchData[r],l=i&&i.reportData;c=l?a.getHotSearchPointData(l,n):c}void 0,a.buriedPoint(c),e("#toolbar-search-input").val(n).blur(),e("#toolbar-search-button").click(),a.clearSeachDropMenu(),a.toggleSearchBarInput()},clickAnnouncementHandler:function(){this.hasLogin&&(e("#toolbar-announcement").find(">i").remove(),this.announcement&&(this.announcement.announcementCount=0)&&a("announcement",encodeURIComponent(JSON.stringify(this.announcement)),this.announcement.announcementExpire),this.clearReadAnnouncement())},clickLogoutBtnHandler:function(){var e={mod:"popu_789"},n="https://passport.csdn.net/account/logout?from="+encodeURIComponent(t.location.href);e.dest=n,e.extend1="退出",t.location.href=n,csdn&&csdn.report&&csdn.report.reportClick(e)},clearSeachDropMenu:function(){e(".toolbar-search-drop-menu").remove()},clearReadAnnouncement:function(){e.ajax({url:"https://msg.csdn.net/v1/web/message/read_announcement",type:"post",contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(t){},error:function(t){void 0}})},setUserAvatar:function(t){var n=t.avatarUrl;if(t.totalCount>0&&n&&!this.hasLogin&&o("UN")){var a='<a class="hasAvatar" href="https://passport.csdn.net/account/login"><img src="'+n+'"></a>';e(".toolbar-btn-login").html(a)}},getHotSearchPointData:function(t,e){var n=this,o={mod:"popu_846",extra:JSON.stringify({searchword:e})},a=Object.assign({},{searchword:e},JSON.parse(t.data.extra||"{}"));return n.urlParams=t.urlParams,Object.assign({},t.data,{extra:JSON.stringify(a),mod:t.data.mod||o.mod})},getReadAnnouncement:function(){var t=this;e.ajax({url:"https://msg.csdn.net/v1/web/message/view/announcement",type:"post",contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(e){if(e.status){var n=e.data;t.announcement=n,a("announcement",encodeURIComponent(JSON.stringify(n)),n.announcementExpire),t.hasLogin?t.getUnreadMsg():t.renderMsgMenu({announcement:n})}},error:function(t){void 0}})},getUnreadMsg:function(){if(this.hasLogin||o("UN")){var t=this,n=JSON.stringify?JSON.stringify({coupon:!0}):'{"coupon":true}';e.ajax({url:"https://msg.csdn.net/v1/web/message/view/unread",type:"post",data:n,contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(e){if(e.status){var n=e.data,o=t.announcement&&t.announcement.announcementCount,a=t.announcement&&t.announcement.announcementUrl;n.totalCount=o?o+n.totalCount:n.totalCount,n.announcement={announcementCount:o,announcementUrl:a},t.setRemind("",n.totalCount),t.setDocumentTitle(n.totalCount),t.renderCoupon(n.coupon_order),t.renderGuide(n.totalCount),t.renderLiveMsg(n.live_info),t.setUserAvatar(n),t.renderMsgMenu(n)}}})}},getSearchHistoryData:function(){return this.getSearchHistoryArray("searchHistoryArray").splice(0,10)},getSearchHistoryArray:function(t){var e=o(t);return e?JSON.parse(decodeURIComponent(e)):[]},getHotSearchData:function(){var t=this;if((new Date).valueOf()-t.copyHotSearchDataTime<=2e3&&t.hotSearchData)return void t.renderSearchHotDropMenu(t.hotSearchData);e.ajax({url:"//silkroad.csdn.net/api/v2/assemble/list/channel/pc_hot_word",type:"get",data:{channel_name:"pc_hot_word",size:10,user_name:t.currentUser.userName,platform:"pc",imei:o("uuid_tt_dd")},contentType:"application/json",dataType:"json",success:function(e){if(200===e.code){var n=e.data&&e.data.items;t.copyHotSearchData(n),t.renderSearchHotDropMenu(n)}},error:function(e){t.hotSearchData&&t.renderSearchHotDropMenu(t.hotSearchData)}})},getHotSearchDataOld:function(){var t=this;if((new Date).valueOf()-t.copyHotSearchDataTime<=2e3&&t.hotSearchData)return void t.renderSearchHotDropMenu(t.hotSearchData);e.ajax({url:"https://redisdatarecall.csdn.net/recommend/soHotWord",type:"get",data:{},contentType:"application/json",dataType:"json",success:function(e){e.status&&(t.copyHotSearchData(e.data),t.renderSearchHotDropMenu(e.data))},error:function(e){t.hotSearchData&&t.renderSearchHotDropMenu(t.hotSearchData)}})},getHotSearchWordData:function(t){var n=this;e.ajax({url:"//silkroad.csdn.net/api/v2/assemble/list/channel/pc_search_hot_word",type:"get",data:{channel_name:"pc_hot_word",size:1,user_name:n.currentUser.userName,platform:"pc",imei:o("uuid_tt_dd")},contentType:"application/json",dataType:"json",success:function(e){if(200===e.code){var o=e.data&&e.data.items.length&&e.data.items[0];o&&(n.hotSearchWordData=o,n.placeHolder=o.productId,n.urlParamsPlaceholder=o.reportData&&o.reportData.urlParams),t&&t()}},error:function(t){void 0}})},copyHotSearchData:function(t){if(t){var e=this;e.hotSearchData=t,e.copyHotSearchDataTime=(new Date).getTime()}},clearSearchHistory:function(){this.updataSearchHistoryArray("searchHistoryArray",[])},updataSearchHistoryArray:function(t,e){a(t,encodeURIComponent(JSON.stringify(e)))},addSearchHistory:function(t){t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;");var n=this.getSearchHistoryArray("searchHistoryArray"),o=e.inArray(t,n);o>-1&&n.splice(o,1),""!==e.trim(t)&&n.unshift(t),n.length>10&&n.pop(),this.updataSearchHistoryArray("searchHistoryArray",n)},getSearchInputPlaceHolder:function(){return this.placeHolder?this.placeHolder:~location.host.indexOf("edu")?"搜学院课程":"搜CSDN"},setSearchInputPlaceholder:function(){this.placeHolder&&e("#toolbar-search-input").attr("placeholder",this.placeHolder)},isEffectiveTime:function(t){if(!t)return!1;var e=(new Date).getTime(),n=new Date(t.start);return e<=new Date(t.end)&&e>=n},getCurrentLogoData:function(t){var e=this;return Array.isArray(t)?t.reduce(function(t,n){return t="default"!==n.type||t?t:n,t=e.isEffectiveTime(n.time)?n:t},void 0):"object"===(void 0===t?"undefined":_typeof(t))?t:e.logoData},getToolbarData:function(t){var n=this;e.ajax({url:"https://img-home.csdnimg.cn/data_json/toolbar.json",type:"get",dataType:"JSON",contentType:"application/x-www-form-urlencoded; charset=utf-8",success:function(e){void 0,n.navData=e.menus,
n.logoData=n.getCurrentLogoData(e.logo),void 0,n.advertData=e.advert,n.background=e.background,t&&t.call(n)},error:function(e){t&&t.call(n)}})},buriedPoint:function(t){try{csdn&&csdn.report&&csdn.report.reportClick(t)}catch(t){void 0}},setDocumentTitle:function(t){var e=document.title;t>0&&(document.title="("+t+"条消息) "+e)},setRemind:function(t,n){var o=e("#toolbar-remind");!this.hasLogin&&t&&o.attr("href",t),n&&o.html('消息<i class="toolbar-msg-count">'+(n>99?"99+":n)+"</i>")},setAnimate:function(t,e,n){n&&t.animate(e,n)||t.css(e)},toggleNavItems:function(t,e){var n=this.$NavBox.find(">li").eq(t).nextAll();e&&n.show()||n.hide()},toggleSearchBarInput:function(t){"focus"===t?this.setAnimate(this.$NavBox,{width:"242px"},200):this.setAnimate(this.$NavBox,{width:"auto"},0),this.toggleNavItems(4,"focus"!==t)},getToolbarStyle:function(){var t=this,e=t.background,n=["default","dark","home"],o=n[v];if(e){var a=e[o];if(void 0,a.indexOf("http")>=0)return"background: url("+a+") no-repeat center center;background-size: cover;";if(a.indexOf("#")>=0)return"background: "+a}},chain:function(){var t=o("announcement");return t&&"undefined"!==JSON.parse(decodeURIComponent(t)).announcementUrl?(this.announcement=JSON.parse(decodeURIComponent(t)),this.announcement.isLogin?this.getUnreadMsg():this.getReadAnnouncement(),this):void this.getReadAnnouncement()}},function(){var t=e('meta[name="toolbar"]'),o="",a=0;if(t.length){var r=t.attr("content")||{};r=JSON.parse(r),a=r.type||a}else a=p("toolbarSkinType")||a;o="https://g.csdnimg.cn/common/csdn-toolbar/"+g[a]+".css",v=a,n(o)}(),new f}(window,jQuery);