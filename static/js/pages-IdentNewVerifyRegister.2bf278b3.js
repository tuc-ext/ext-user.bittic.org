(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-IdentNewVerifyRegister"],{"0ce5":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,"uni-page-body[data-v-01ac778e]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff;color:#000}.sticky-head[data-v-01ac778e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;position:-webkit-sticky;\nposition:sticky;top:var(--window-top);z-index:99;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin:0;padding:20px;background-color:#fff\n    /* \tbackground-color: #F4F5F6;\n\tborder-bottom-style: solid;\n\tborder-bottom-color: #E2E2E2; */}.main[data-v-01ac778e]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.sticky-footer[data-v-01ac778e]{padding:20px;background-color:#1b2227\n    /* \tbackground-color: #F4F5F6;\n    border-bottom-style: solid;\n    border-bottom-color: #E2E2E2; */}li[data-v-01ac778e]{display:-webkit-box;display:-webkit-flex;display:flex}.headNav[data-v-01ac778e]{display:-webkit-box;display:-webkit-flex;display:flex;margin:0 20px 0 0}body.?%PAGE?%[data-v-01ac778e]{background-color:#fff}",""]),e.exports=t},"2aad":function(e,t,a){"use strict";a.r(t);var n=a("f88b"),o=a("4769");for(var i in o)"default"!==i&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("6280");var s,r=a("f0c5"),l=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"01ac778e",null,!1,n["a"],s);t["default"]=l.exports},4769:function(e,t,a){"use strict";a.r(t);var n=a("d46f"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},6280:function(e,t,a){"use strict";var n=a("c81a"),o=a.n(n);o.a},c81a:function(e,t,a){var n=a("0ce5");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("4f06").default;o("02dd34a1",n,!0,{sourceMap:!1,shadowMode:!1})},d46f:function(e,t,a){"use strict";var n=a("4ea4");a("dca8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var o=n(a("1da1")),i={data:function(){return{isLoading:!1,password:"",passwordAgain:"",i18nText:Object.freeze({zhCN:{tPageTitle:"注册",tPhoneLabel:"手机号",tEmptyPhone:"手机号不存在",tPasswordLabel:"密 码",tPasswordPrompt:"设置6位以上登录密码",tPasswordAgainLabel:"确认密码",tPasswordAgainPrompt:"确认登录密码",tPasswordError:"密码不符合最低要求（至少6位字符）",tPasswordAgainError:"两次密码输入不匹配",tBadResponse:"后台错误，请稍后再试",tRegisterButton:"注 册"},enUS:{tPageTitle:"Register",tPhoneLabel:"Phone",tEmptyPhone:"Empty number, go back please",tPasswordLabel:"Password",tPasswordPrompt:"Setup user password",tPasswordAgainLabel:"Password again",tPasswordAgainPrompt:"Confirm your user password",tPasswordError:"Invalid (6 chars at minimum)",tPasswordAgainError:"Not identical",tBadResponse:"😭 Unknown response, try again later",tRegisterButton:"Register"}})}},computed:{lote:getApp().$T.localeText},onLoad:function(){this.$store.dispatch("Ident/restartIfOnline")},onShow:function(){this.$store.commit("i18n/setBarTitles")},methods:{submitRegister:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function t(){var a,n,o,i,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=!0,/^.{6,}$/.test(e.password)||(e.$refs.uTips.show({type:e.$T.RED,title:e.lote.tPasswordError}),a=!1),e.password!==e.passwordAgain&&(e.$refs.uTips.show({type:e.$T.RED,title:e.lote.tPasswordAgainError}),a=!1),!a){t.next=18;break}return e.$SS.Ident.passwordClient=e.$T.hash(e.password+e.$SS.Ident.uuid),e.isLoading=!0,t.next=8,e.$T.callBackend({backend:"SERVER",apiWho:"User",apiTodo:"register",apiWhat:{phone:e.$SS.Ident.phone,passwordClient:e.$SS.Ident.passwordClient,lang:e.$SS.i18n.mylang,citizen:e.$SS.i18n.myland}});case 8:if(t.t0=t.sent,t.t0){t.next=11;break}t.t0={};case 11:n=t.t0,o=n._state,i=n.onlineUser,s=n._passtoken,r=n.uni_id_token,e.isLoading=!1,"REGISTER_SUCCESS"===o?(e.$T.clog("注册结果：REGISTER_SUCCESS"),uni.setStorageSync("_passtoken",s),uni.setStorageSync("uni_id_token",r),e.$SS.User.onlineUser=i,e.$T.clog(i),uni.showModal({title:e.$ll({zhCN:"欢迎来到 EXT",enUS:"Welcome to EXT"}),content:e.$ll({zhCN:"您已获得一笔启动金",enUS:"You've got a startup reward"}),showCancel:!1,confirmText:e.$ll({zhCN:"开始一段旅程",enUS:"Start a journey"}),success:function(e){e.confirm,e.cancel;uni.navigateTo({url:"Create"})}})):e.$refs.uTips.show({type:e.$T.RED,title:e.lote.tBadResponse});case 18:case"end":return t.stop()}}),t)})))()}}};t.default=i},f88b:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var n={uTopTips:a("dd54").default,uInput:a("7fef").default,uButton:a("7d45").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticStyle:{width:"100%",height:"100%","align-items":"center"}},[a("v-uni-view",{staticClass:"sLoginContent"},[a("u-top-tips",{ref:"uTips"}),a("u-input",{staticStyle:{margin:"20px auto",width:"100%"},attrs:{type:"text",disabled:!0,"input-align":"center",placeholder:e.$SS.Ident.phone||e.$ll({zhCN:"手机号不存在！",enUS:"Phone number not existing!"}),"custom-style":{"font-size":"36rpx"}}}),a("u-input",{staticStyle:{"letter-spacing":"10px",margin:"20px 0"},attrs:{type:"password",focus:!0,border:!0,placeholder:e.$ll({zhCN:"请输入您的密码",enUS:"Enter your password please"}),"placeholder-style":"letter-spacing: initial",onkeypress:"if(event.keyCode===32) {\n        event.returnValue=false\n        const pageNow = thisPage()\n        pageNow.$refs.uTips.show({type:pageNow.$T.RED, title: pageNow.$ll({zhCN:'密码不能含有空格',enUS:'Space is disallowed in password'})})\n      }"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("u-input",{staticStyle:{"letter-spacing":"10px",margin:"20px 0"},attrs:{type:"password",border:!0,placeholder:e.$ll({zhCN:"请再次确认您的密码",enUS:"Confirm your password please"}),"placeholder-style":"letter-spacing: initial",onkeypress:"if(event.keyCode===32) {\n        event.returnValue=false\n        const pageNow = thisPage()\n        pageNow.$refs.uTips.show({type:pageNow.$T.RED, title: pageNow.$ll({zhCN:'密码不能含有空格',enUS:'Space is disallowed in password'})})\n      }"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitRegister(t)}},model:{value:e.passwordAgain,callback:function(t){e.passwordAgain=t},expression:"passwordAgain"}}),a("u-button",{staticStyle:{width:"100%",margin:"20px 0"},attrs:{type:e.$T.BLUE,loading:e.isLoading,disabled:e.isLoading,shape:"square",size:"medium"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitRegister.apply(void 0,arguments)}}},[e._v(e._s(e.$ll({zhCN:"注 册",enUS:"Register"})))])],1)],1)},i=[]}}]);