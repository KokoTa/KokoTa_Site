(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{289:function(e,t,r){"use strict";r.r(t);var a=r(14),v=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mvvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[e._v("#")]),e._v(" MVVM")]),e._v(" "),t("h2",{attrs:{id:"传统的-mvc-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传统的-mvc-模式"}},[e._v("#")]),e._v(" 传统的 MVC 模式")]),e._v(" "),t("p",[e._v("Model（模型）表示应用程序核心（比如数据库记录列表）\nView（视图）显示数据（数据库记录）\nController（控制器）处理输入（写入数据库记录）")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/mvc.png",alt:"mvc"}})]),e._v(" "),t("h2",{attrs:{id:"mvvm-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-模式"}},[e._v("#")]),e._v(" MVVM 模式")]),e._v(" "),t("p",[e._v("传统 MVC 模式中的 View 依赖 Model，简而言之就是前端中我们获取后端数据(model)后需要操作DOM更新视图(view)，久而久之代码就会变臃肿")]),e._v(" "),t("p",[e._v("MVVM 模式是 MVC 模式的改进版，它切断了 Model 改变 View 这条线，将 Control 换成了 ViewModel，简而言之就是前端中我们使用的 Vue 框架的双向数据绑定，视图(view)改变会改变前端数据(view model)，同时也会改变后端数据(model)，反之亦然，精简了大量冗余代码，提高了开发效率")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/mvvm.png",alt:"mvvm"}})]),e._v(" "),t("h2",{attrs:{id:"vue-双向数据绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-双向数据绑定"}},[e._v("#")]),e._v(" Vue 双向数据绑定")]),e._v(" "),t("p",[e._v("View 和 ViewModel 的通信是双向数据通信，在前端框架中，就是双向数据绑定")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/vue%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.png",alt:"vue双向数据绑定"}})]),e._v(" "),t("p",[e._v("上图简要说明了双向数据绑定的方法")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.png",alt:"双向绑定设计模式"}})]),e._v(" "),t("p",[e._v("上图简要说明了双向数据绑定的设计模式(发布/订阅模式)：")]),e._v(" "),t("p",[e._v("Observer 就是 Object.definedProperty，用来监听数据变化\nDep 就是放置订阅者的列表\nWatcher 就是订阅者\nView 就是视图")]),e._v(" "),t("p",[e._v("当我们声明数据时，会生成一个 Watcher 放到 Dep 中，即完成订阅\n当我们改变数据时，Observer 会监听到然后通知 Dep 中的所有 Watcher 执行 update 回调函数更新视图")]),e._v(" "),t("h2",{attrs:{id:"vue-框架解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-框架解析"}},[e._v("#")]),e._v(" Vue 框架解析")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/KokoTa/All-demo/tree/master/other/MVVM",target:"_blank",rel:"noopener noreferrer"}},[e._v("地址"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);