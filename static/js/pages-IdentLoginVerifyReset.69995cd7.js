(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-IdentLoginVerifyReset"],{"0f6e":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return n}));var n={uTopTips:o("dd54").default,uInput:o("7fef").default,uButton:o("7d45").default},a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticStyle:{width:"100%",height:"100%","align-items":"center"}},[o("v-uni-view",{staticClass:"sLoginContent"},[o("u-top-tips",{ref:"uTips"}),o("u-input",{staticStyle:{margin:"20px auto",width:"100%"},attrs:{type:"text",disabled:!0,"input-align":"center",placeholder:e.$SS.Ident.phone||e.$ll({zhCN:"手机号不存在！",enUS:"Phone number not existing!"}),"custom-style":{"font-size":"36rpx"}}}),o("u-input",{staticStyle:{"letter-spacing":"10px",margin:"20px 0"},attrs:{type:"password",focus:!0,border:!0,placeholder:e.$ll({zhCN:"请输入您的密码",enUS:"Enter your password please"}),"placeholder-style":"letter-spacing: initial",onkeypress:"if(event.keyCode===32) {\n        event.returnValue=false\n        const pageNow = thisPage()\n        pageNow.$refs.uTips.show({type:pageNow.$T.RED, title: pageNow.$ll({zhCN:'密码不能含有空格',enUS:'Space is disallowed in password'})})\n      }"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),o("u-input",{staticStyle:{"letter-spacing":"10px",margin:"20px 0"},attrs:{type:"password",border:!0,placeholder:e.$ll({zhCN:"请再次输入您的密码",enUS:"Enter your password again please"}),"placeholder-style":"letter-spacing: initial",onkeypress:"if(event.keyCode===32) {\n        event.returnValue=false\n        const pageNow = thisPage()\n        pageNow.$refs.uTips.show({type:pageNow.$T.RED, title: pageNow.$ll({zhCN:'密码不能含有空格',enUS:'Space is disallowed in password'})})\n      }"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitReset(t)}},model:{value:e.passwordAgain,callback:function(t){e.passwordAgain=t},expression:"passwordAgain"}}),o("u-button",{staticStyle:{width:"100%",margin:"20px 0"},attrs:{type:e.$T.BLUE,loading:e.isLoading,disabled:e.isLoading,shape:"square",size:"medium"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitReset.apply(void 0,arguments)}}},[e._v(e._s(e.$ll({zhCN:"注 册",enUS:"Register"})))])],1)],1)},i=[]},3045:function(e,t,o){"use strict";o.r(t);var n=o("a870"),a=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},9179:function(e,t,o){var n=o("f89b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=o("4f06").default;a("0dfc3ee0",n,!0,{sourceMap:!1,shadowMode:!1})},a870:function(e,t,o){"use strict";var n=o("4ea4");o("dca8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("96cf");var a=n(o("1da1")),i={data:function(){return{isLoading:!1,isSending:!1,isSendingDisabled:!1,password:"",passwordAgain:"",i18nText:Object.freeze({zhCN:{tPageTitle:"重置密码",tPhoneLabel:"手机号",tEmptyPhone:"手机号不存在",tPasswordLabel:"新密码",tPasswordPrompt:"设置新的登录密码",tPasswordAgainLabel:"确认密码",tPasswordAgainPrompt:"确认新的登录密码",tRegisterButton:"注 册",tPasswordFeedback:{PASSWORD_MALFORMED:"密码不符合最低要求（至少6位字符）",PASSWORD_MISMATCH:"两次密码输入不匹配",PASSWORD_BAD_RESPONSE:"无法识别的后台错误，请稍后再试",PASSWORD_RESET_FAILED:"重置失败，请稍后再试"},tResetButton:"重 置 密 码",tReloginPrompt:"您已成功重置密码，请使用新密码登录"},enUS:{tPageTitle:"Resetting Password",tPhoneLabel:"手机号",tEmptyPhone:"手机号不存在",tPasswordLabel:"新密码",tPasswordPrompt:"设置新的登录密码",tPasswordAgainLabel:"确认密码",tPasswordAgainPrompt:"确认新的登录密码",tRegisterButton:"注 册",tPasswordFeedback:{PASSWORD_MALFORMED:"密码不符合最低要求（至少6位字符）",PASSWORD_MISMATCH:"两次密码输入不匹配",PASSWORD_BAD_RESPONSE:"无法识别的后台错误，请稍后再试",PASSWORD_RESET_FAILED:"重置失败，请稍后再试"},tResetButton:"重 置 密 码",tReloginPrompt:"您已成功重置密码，请使用新密码登录"}})}},computed:{lote:getApp().$T.localeText},onLoad:function(){this.$store.dispatch("Ident/restartIfOnline")},onShow:function(){this.$store.commit("i18n/setBarTitles")},methods:{goHome:function(){uni.navigateTo({url:"Welcome"})},submitReset:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var o,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=!0,/^.{6,}$/.test(e.password)||(e.$refs.uTips.show({type:e.$T.RED,title:e.lote.tPasswordFeedback.PASSWORD_MALFORMED}),o=!1),e.password!==e.passwordAgain&&(e.$refs.uTips.show({type:e.$T.RED,title:e.lote.tPasswordFeedback.PASSWORD_MISMATCH}),o=!1),!o){t.next=15;break}return e.$SS.Ident.passwordClient=e.$T.hash(e.password+e.$SS.Ident.uuid),e.isLoading=!0,t.next=8,e.$T.callBackend({backend:"SERVER",apiWho:"User",apiTodo:"resetPassword",apiWhat:{phone:e.$SS.Ident.phone,passwordClient:e.$SS.Ident.passwordClient}});case 8:if(t.t0=t.sent,t.t0){t.next=11;break}t.t0={};case 11:n=t.t0,a=n._state,e.isLoading=!1,"RESET_SUCCESS"===a?(uni.removeStorageSync("_passtoken"),uni.removeStorageSync("uni_id_token"),uni.showModal({title:"密码重置成功啦",content:e.lote.tReloginPrompt,showCancel:!1,confirmText:"重新登录",success:function(e){var t=e.confirm;e.cancel;t&&uni.reLaunch({url:"Ident"})}})):"RESET_FAILED"===a?e.$refs.uTips.show({type:e.$T.RED,title:e.lote.tPasswordFeedback.PASSWORD_RESET_FAILED}):e.$refs.uTips.show({type:e.$T.RED,title:e.lote.tPasswordFeedback.PASSWORD_BAD_RESPONSE});case 15:case"end":return t.stop()}}),t)})))()}}};t.default=i},eef5:function(e,t,o){"use strict";o.r(t);var n=o("0f6e"),a=o("3045");for(var i in a)"default"!==i&&function(e){o.d(t,e,(function(){return a[e]}))}(i);o("ef14");var s,r=o("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"4037fdbc",null,!1,n["a"],s);t["default"]=d.exports},ef14:function(e,t,o){"use strict";var n=o("9179"),a=o.n(n);a.a},f89b:function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,"uni-page-body[data-v-4037fdbc]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff;color:#000}.sticky-head[data-v-4037fdbc]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;position:-webkit-sticky;\nposition:sticky;top:var(--window-top);z-index:99;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin:0;padding:20px;background-color:#fff\n    /* \tbackground-color: #F4F5F6;\n\tborder-bottom-style: solid;\n\tborder-bottom-color: #E2E2E2; */}.main[data-v-4037fdbc]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.sticky-footer[data-v-4037fdbc]{padding:20px;background-color:#1b2227\n    /* \tbackground-color: #F4F5F6;\n    border-bottom-style: solid;\n    border-bottom-color: #E2E2E2; */}li[data-v-4037fdbc]{display:-webkit-box;display:-webkit-flex;display:flex}.headNav[data-v-4037fdbc]{display:-webkit-box;display:-webkit-flex;display:flex;margin:0 20px 0 0}body.?%PAGE?%[data-v-4037fdbc]{background-color:#fff}",""]),e.exports=t}}]);