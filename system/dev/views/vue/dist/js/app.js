(function(e){function a(a){for(var s,o,i=a[0],l=a[1],c=a[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(a);while(f.length)f.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],s=!0,i=1;i<t.length;i++){var l=t[i];0!==n[l]&&(s=!1)}s&&(r.splice(a--,1),e=o(o.s=t[0]))}return e}var s={},n={app:0},r=[];function o(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=s,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)o.d(t,s,function(a){return e[a]}.bind(null,s));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var d=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},4603:function(e,a,t){"use strict";var s=t("c226"),n=t.n(s);n.a},4678:function(e,a,t){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var a=r(e);return t(a)}function r(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),n=t("f23d"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],i=t("2877"),l={},c=Object(i["a"])(l,r,o,!1,null,null,null),d=c.exports,u=(t("202f"),t("8c4f")),f=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("nav",{staticClass:"navigation"},[t("img",{attrs:{alt:"Vue logo",src:e.$store.state.base_url+"assets/images/wecodefy.png"}}),t("br")]),t("div",{staticClass:"dev-options"},[t("a-radio-group",{attrs:{size:"large",defaultValue:e.selected_panel,buttonStyle:"solid"},on:{change:e.onChangePanel}},[t("a-radio-button",{attrs:{value:"Generate"}},[e._v("Generate")]),t("a-radio-button",{attrs:{value:"Database"}},[e._v("Database")]),t("a-radio-button",{attrs:{value:"Angular"}},[e._v("Angular")]),t("a-radio-button",{attrs:{value:"Vue"}},[e._v("Vue")]),t("a-radio-button",{attrs:{value:"React"}},[e._v("React")]),t("a-radio-button",{attrs:{value:"Build"}},[e._v("JS Build")])],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:"Generate"==e.selected_panel,expression:"selected_panel == 'Generate'"}],staticClass:"dev-options-panel"},[t("div",{staticClass:"dev-task"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("ul",[t("li",[t("a-checkbox",{model:{value:e.generate.is.model,callback:function(a){e.$set(e.generate.is,"model",a)},expression:"generate.is.model"}},[e._v("Model")])],1),t("li",[t("a-checkbox",{model:{value:e.generate.is.controller,callback:function(a){e.$set(e.generate.is,"controller",a)},expression:"generate.is.controller"}},[e._v("Controller")])],1),t("li",[t("a-checkbox",{model:{value:e.generate.is.view,callback:function(a){e.$set(e.generate.is,"view",a)},expression:"generate.is.view"}},[e._v("View")])],1)])]),t("a-col",{attrs:{span:18}},[t("a-row",{attrs:{gutter:16,type:"flex",justify:"end"}},[t("a-col",{attrs:{span:19}},[t("a-row",{attrs:{gutter:10}},[t("a-col",{attrs:{span:12}},[t("a-input",{attrs:{placeholder:"Folder name",size:"large"},model:{value:e.generate.folder_name,callback:function(a){e.$set(e.generate,"folder_name",a)},expression:"generate.folder_name"}},[t("a-icon",{attrs:{slot:"prefix",type:"folder"},slot:"prefix"})],1)],1),t("a-col",{attrs:{span:12}},[t("a-input",{attrs:{placeholder:"Class name",size:"large"},model:{value:e.generate.class_name,callback:function(a){e.$set(e.generate,"class_name",a)},expression:"generate.class_name"}},[t("a-icon",{attrs:{slot:"prefix",type:"codepen"},slot:"prefix"})],1)],1)],1)],1),t("a-col",{attrs:{span:5}},[t("a-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"large",loading:e.generate.loading},on:{click:function(a){return e.onGenerate()}}},[e._v("Generate")])],1)],1),t("a-row",[t("a-col",{attrs:{span:24}},[t("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1,smooth:!0,scrollonremoved:!1},expression:"{always: false, smooth: true, scrollonremoved:false}"}],staticClass:"dev-console"},[t("code",[e._v("console: ~ wecodefy")]),t("br"),e._l(e.generate.console,(function(a,s){return t("div",{key:s+"generate"},["success"==a.status?t("div",[t("span",{staticStyle:{color:"green","font-size":"10px"}},[e._v(e._s(a.message))]),t("br"),e._v("------- ")]):e._e(),"fail"==a.status?t("div",[t("span",{staticStyle:{color:"red","font-size":"10px"}},[e._v(e._s(a.message))]),t("br"),e._v("------- ")]):e._e()])})),t("span",{staticClass:"type-cursor"},[e._v("|")])],2)])],1)],1)],1)],1)]),t("div",{directives:[{name:"show",rawName:"v-show",value:"Database"==e.selected_panel,expression:"selected_panel == 'Database'"}],staticClass:"dev-options-panel"},[t("div",{staticClass:"dev-task"},[t("a-row",[t("a-col",{attrs:{span:8}},[t("ul",[t("li",[t("a-button",{attrs:{size:"large",loading:e.database.run_migration_loading,type:"primary"},on:{click:function(a){return e.runMigration()}}},[e._v("Run migration")])],1),t("li",[t("a-button",{attrs:{loading:e.database.reverse_migration_loading,size:"large",type:"primary"},on:{click:function(a){return e.reverseMigration()}}},[e._v("Reverse back migration")])],1),t("li",[t("a-button",{attrs:{size:"large",loading:e.database.run_seeder_loading,type:"primary"},on:{click:function(a){return e.runSeeder()}}},[e._v("Run seeder")])],1),t("li",[t("a-button",{attrs:{size:"large",loading:e.database.reverse_seeder_loading,type:"primary"},on:{click:function(a){return e.reverseSeeder()}}},[e._v("Reverse back seeder")])],1)])]),t("a-col",{attrs:{span:16}},[t("a-row",[t("a-col",{attrs:{span:24}},[t("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1,smooth:!0,scrollonremoved:!1},expression:"{always: false, smooth: true, scrollonremoved:false}"}],staticClass:"dev-console"},[t("code",[e._v("console: ~ wecodefy")]),t("br"),e._l(e.database.console,(function(a,s){return t("div",{key:s+"database"},["success"==a.status?t("div",[t("span",{staticStyle:{color:"green","font-size":"10px"}},[e._v(e._s(a.message))]),t("br"),e._v("------- ")]):e._e(),"fail"==a.status?t("div",[t("span",{staticStyle:{color:"red","font-size":"10px"}},[e._v(e._s(a.message))]),t("br"),e._v("------- ")]):e._e()])})),t("span",{staticClass:"type-cursor"},[e._v("|")])],2)])],1)],1)],1)],1)]),t("div",{directives:[{name:"show",rawName:"v-show",value:"Angular"==e.selected_panel,expression:"selected_panel == 'Angular'"}],staticClass:"dev-options-panel"},[t("div",{staticClass:"dev-task"},[t("a-row",[t("a-col",{attrs:{span:8}},[t("ul",[t("li",[t("a-button",{attrs:{size:"large",loading:e.angular.generate_component_loading,type:"primary"},on:{click:function(a){return e.generateComponent()}}},[e._v("Generate component")])],1),t("li",[t("a-button",{attrs:{loading:e.angular.generate_service_loading,size:"large",type:"primary"},on:{click:function(a){return e.generateService()}}},[e._v("Generate service")])],1)])]),t("a-col",{attrs:{span:16}},[t("a-row",{attrs:{gutter:16,type:"flex",justify:"end"}},[t("a-col",{attrs:{span:24}},[t("a-row",[t("a-col",{attrs:{span:12}},[t("a-input",{attrs:{placeholder:"Enter name",size:"large"},model:{value:e.angular.name,callback:function(a){e.$set(e.angular,"name",a)},expression:"angular.name"}},[t("a-icon",{attrs:{slot:"prefix",type:"file"},slot:"prefix"})],1)],1)],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:24}},[t("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1,smooth:!0,scrollonremoved:!1},expression:"{always: false, smooth: true, scrollonremoved:false}"}],staticClass:"dev-console"},[t("code",[e._v("console: ~ wecodefy")]),t("br"),e._l(e.angular.console,(function(a,s){return t("div",{key:s+"angular"},["success"==a.status?t("div",[t("span",{staticStyle:{color:"green","font-size":"10px"}},[e._v(e._s(a.message))]),t("br"),e._v("------- ")]):e._e(),"fail"==a.status?t("div",[t("span",{staticStyle:{color:"red","font-size":"10px"}},[e._v(e._s(a.message))]),t("br"),e._v("------- ")]):e._e()])})),t("span",{staticClass:"type-cursor"},[e._v("|")])],2)])],1)],1)],1)],1)]),t("div",{directives:[{name:"show",rawName:"v-show",value:"Vue"==e.selected_panel,expression:"selected_panel == 'Vue'"}],staticClass:"dev-options-panel"},[t("div",{staticClass:"dev-task"},[t("a-row",[t("a-col",{attrs:{span:8}},[t("ul",[t("li",[t("a-button",{attrs:{size:"large",loading:e.vue.generate_component_loading,type:"primary"},on:{click:function(a){return e.generateVueComponent()}}},[e._v("Generate component")])],1)])]),t("a-col",{attrs:{span:16}},[t("a-row",{attrs:{gutter:16,type:"flex",justify:"end"}},[t("a-col",{attrs:{span:24}},[t("a-row",{attrs:{gutter:10}},[t("a-col",{attrs:{span:12}},[t("a-input",{attrs:{placeholder:"Folder name",size:"large"},model:{value:e.vue.folder_name,callback:function(a){e.$set(e.vue,"folder_name",a)},expression:"vue.folder_name"}},[t("a-icon",{attrs:{slot:"prefix",type:"folder"},slot:"prefix"})],1)],1),t("a-col",{attrs:{span:12}},[t("a-input",{attrs:{placeholder:"Enter name",size:"large"},model:{value:e.vue.file_name,callback:function(a){e.$set(e.vue,"file_name",a)},expression:"vue.file_name"}},[t("a-icon",{attrs:{slot:"prefix",type:"file"},slot:"prefix"})],1)],1)],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:24}},[t("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1,smooth:!0,scrollonremoved:!1},expression:"{always: false, smooth: true, scrollonremoved:false}"}],staticClass:"dev-console"},[t("code",[e._v("console: ~ wecodefy")]),t("br"),e._l(e.vue.console,(function(a,s){return t("div",{key:s+"vue"},["success"==a.status?t("div",[t("span",{staticStyle:{color:"green","font-size":"10px"}},[e._v(e._s(a.message))]),t("br"),e._v("------- ")]):e._e(),"fail"==a.status?t("div",[t("span",{staticStyle:{color:"red","font-size":"10px"}},[e._v(e._s(a.message))]),t("br"),e._v("------- ")]):e._e()])})),t("span",{staticClass:"type-cursor"},[e._v("|")])],2)])],1)],1)],1)],1)]),t("div",{directives:[{name:"show",rawName:"v-show",value:"React"==e.selected_panel,expression:"selected_panel == 'React'"}],staticClass:"dev-options-panel"},[t("div",{staticClass:"dev-task"},[t("a-row",[t("a-col",{attrs:{span:8}},[t("ul",[t("li",[t("a-button",{attrs:{size:"large",loading:e.react.generate_component_loading,type:"primary"},on:{click:function(a){return e.generateRactComponent()}}},[e._v("Generate component")])],1)])]),t("a-col",{attrs:{span:16}},[t("a-row",{attrs:{gutter:16,type:"flex",justify:"end"}},[t("a-col",{attrs:{span:24}},[t("a-row",{attrs:{gutter:10}},[t("a-col",{attrs:{span:12}},[t("a-input",{attrs:{placeholder:"Folder name",size:"large"},model:{value:e.react.folder_name,callback:function(a){e.$set(e.react,"folder_name",a)},expression:"react.folder_name"}},[t("a-icon",{attrs:{slot:"prefix",type:"folder"},slot:"prefix"})],1)],1),t("a-col",{attrs:{span:12}},[t("a-input",{attrs:{placeholder:"Enter name",size:"large"},model:{value:e.react.file_name,callback:function(a){e.$set(e.react,"file_name",a)},expression:"react.file_name"}},[t("a-icon",{attrs:{slot:"prefix",type:"file"},slot:"prefix"})],1)],1)],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:24}},[t("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1,smooth:!0,scrollonremoved:!1},expression:"{always: false, smooth: true, scrollonremoved:false}"}],staticClass:"dev-console"},[t("code",[e._v("console: ~ wecodefy")]),t("br"),e._l(e.react.console,(function(a,s){return t("div",{key:s+"vue"},["success"==a.status?t("div",[t("span",{staticStyle:{color:"green","font-size":"10px"}},[e._v(e._s(a.message))]),t("br"),e._v("------- ")]):e._e(),"fail"==a.status?t("div",[t("span",{staticStyle:{color:"red","font-size":"10px"}},[e._v(e._s(a.message))]),t("br"),e._v("------- ")]):e._e()])})),t("span",{staticClass:"type-cursor"},[e._v("|")])],2)])],1)],1)],1)],1)]),t("div",{directives:[{name:"show",rawName:"v-show",value:"Build"==e.selected_panel,expression:"selected_panel == 'Build'"}],staticClass:"dev-options-panel"},[t("div",{staticClass:"dev-task"},[t("a-row",[t("a-col",{attrs:{span:8}},[t("ul",[t("li",[t("a-button",{attrs:{size:"large",loading:e.build.loading,type:"primary"},on:{click:function(a){return e.runBuild()}}},[e._v("Build js")])],1)])]),t("a-col",{attrs:{span:16}},[t("a-row",[t("a-col",{attrs:{span:24}},[t("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1,smooth:!0,scrollonremoved:!1},expression:"{always: false, smooth: true, scrollonremoved:false}"}],staticClass:"dev-console"},[t("code",[e._v("console: ~ wecodefy")]),t("br"),e._l(e.build.console,(function(a,s){return t("div",{key:s+"vue"},["success"==a.status?t("div",[t("span",{staticStyle:{color:"green","font-size":"10px"}},[e._v(e._s(a.message))]),t("br"),e._v("------- ")]):e._e(),"fail"==a.status?t("div",[t("span",{staticStyle:{color:"red","font-size":"10px"}},[e._v(e._s(a.message))]),t("br"),e._v("------- ")]):e._e()])})),t("span",{staticClass:"type-cursor"},[e._v("|")])],2)])],1)],1)],1)],1)])])},p=[],m=(t("b0c0"),t("159b"),{name:"home",components:{},data:function(){return{selected_panel:"Generate",generate:{console:[],loading:!1,folder_name:"site",class_name:"",is:{controller:!1,model:!1,view:!1}},database:{console:[],run_migration_loading:!1,reverse_migration_loading:!1,run_seeder_loading:!1,reverse_seeder_loading:!1},angular:{console:[],name:"",generate_component_loading:!1,generate_service_loading:!1},vue:{console:[],file_name:"",folder_name:"components",generate_component_loading:!1,generate_service_loading:!1},react:{console:[],file_name:"",folder_name:"components",generate_component_loading:!1,generate_service_loading:!1},build:{console:[],loading:!1}}},methods:{onChangePanel:function(e){var a=this;a.selected_panel=e.target.value},onGenerate:function(){var e=this;if(e.generate.folder_name)if(0==/\s/.test(e.generate.folder_name))if(e.generate.class_name)if(0==/\s/.test(e.generate.class_name))if(e.generate.is.controller||e.generate.is.model||e.generate.is.view){e.generate.loading=!0;var a={folder_name:e.generate.folder_name,class_name:e.generate.class_name,controller:e.generate.is.controller,model:e.generate.is.model,view:e.generate.is.view};this.axios.post(e.$apiUrl("generate"),a).then((function(a){e.generate.loading=!1,a.data.forEach((function(a){e.generate.console.push(a)}))})).catch((function(a){var t={error:a,status:"fail",message:"Something went wrong, Please Try again"};e.generate.console.push(t)}))}else this.$error({title:"This is an error message",content:"No type selected"});else this.$error({title:"This is an error message",content:"File name contain whitespace"});else this.$error({title:"This is an error message",content:"File name filed is empty"});else this.$error({title:"This is an error message",content:"Folder name contain whitespace"});else this.$error({title:"This is an error message",content:"Folder name filed is empty"})},runMigration:function(){var e=this;e.database.run_migration_loading=!0,this.axios.get(e.$apiUrl("run-migration")).then((function(a){e.database.run_migration_loading=!1,a.data.forEach((function(a){e.database.console.push(a)}))})).catch((function(a){var t={error:a,status:"fail",message:"Something went wrong, Please Try again"};e.database.console.push(t)}))},reverseMigration:function(){var e=this;e.reverse_migration_loading=!0,this.axios.get(e.$apiUrl("reverse-migration")).then((function(a){e.reverse_migration_loading=!1,a.data.forEach((function(a){e.database.console.push(a)}))})).catch((function(a){var t={error:a,status:"fail",message:"Something went wrong, Please Try again"};e.database.console.push(t)}))},runSeeder:function(){var e=this;e.database.run_seeder_loading=!0,this.axios.get(e.$apiUrl("run-seeder")).then((function(a){e.database.run_seeder_loading=!1,a.data.forEach((function(a){e.database.console.push(a)}))})).catch((function(a){var t={error:a,status:"fail",message:"Something went wrong, Please Try again"};e.database.console.push(t)}))},reverseSeeder:function(){var e=this;e.reverse_seeder_loading=!0,e.axios.get(e.$apiUrl("reverse-seeder")).then((function(a){e.database.reverse_seeder_loading=!1,a.data.forEach((function(a){e.database.console.push(a)}))})).catch((function(a){var t={error:a,status:"fail",message:"Something went wrong, Please Try again"};e.database.console.push(t)}))},generateComponent:function(){var e=this;if(e.angular.name)if(0==/\s/.test(e.angular.name)){e.angular.generate_component_loading=!0;var a={name:e.angular.name};this.axios.post(e.$apiUrl("angular-g-component"),a).then((function(a){e.angular.generate_component_loading=!1,a.data.forEach((function(a){e.angular.console.push(a)}))})).catch((function(a){var t={error:a,status:"fail",message:"Something went wrong, Please Try again"};e.angular.console.push(t)}))}else this.$error({title:"This is an error message",content:"Angular component name must not contain whitespace"});else this.$error({title:"This is an error message",content:"Angular component name filed is empty"})},generateService:function(){var e=this;if(e.angular.name)if(0==/\s/.test(e.angular.name)){e.angular.generate_service_loading=!0;var a={name:e.angular.name};this.axios.post(e.$apiUrl("angular-g-service"),a).then((function(a){e.angular.generate_service_loading=!1,a.data.forEach((function(a){e.angular.console.push(a)}))})).catch((function(a){var t={error:a,status:"fail",message:"Something went wrong, Please Try again"};e.angular.console.push(t)}))}else this.$error({title:"This is an error message",content:"Angular service name must not contain whitespace"});else this.$error({title:"This is an error message",content:"Angular service name filed is empty"})},generateVueComponent:function(){var e=this;if(e.vue.folder_name)if(0==/\s/.test(e.vue.folder_name))if(e.vue.file_name)if(0==/\s/.test(e.vue.file_name)){e.vue.generate_component_loading=!0;var a={folder_name:e.vue.folder_name,file_name:e.vue.file_name};this.axios.post(e.$apiUrl("create-vue-component"),a).then((function(a){e.vue.generate_component_loading=!1,a.data.forEach((function(a){e.vue.console.push(a)}))})).catch((function(a){var t={error:a,status:"fail",message:"Something went wrong, Please Try again"};e.vue.console.push(t)}))}else this.$error({title:"This is an error message",content:"File name contain whitespace"});else this.$error({title:"This is an error message",content:"File name filed is empty"});else this.$error({title:"This is an error message",content:"Folder name contain whitespace"});else this.$error({title:"This is an error message",content:"Folder name filed is empty"})},generateRactComponent:function(){var e=this;if(e.react.folder_name)if(0==/\s/.test(e.react.folder_name))if(e.react.file_name)if(0==/\s/.test(e.react.file_name)){e.react.generate_component_loading=!0;var a={folder_name:e.react.folder_name,file_name:e.react.file_name};this.axios.post(e.$apiUrl("create-react-component"),a).then((function(a){e.react.generate_component_loading=!1,a.data.forEach((function(a){e.react.console.push(a)}))})).catch((function(a){var t={error:a,status:"fail",message:"Something went wrong, Please Try again"};e.react.console.push(t)}))}else this.$error({title:"This is an error message",content:"File name contain whitespace"});else this.$error({title:"This is an error message",content:"File name filed is empty"});else this.$error({title:"This is an error message",content:"Folder name contain whitespace"});else this.$error({title:"This is an error message",content:"Folder name filed is empty"})},runBuild:function(){var e=this;e.build.loading=!0,this.axios.get(e.$apiUrl("build-js")).then((function(a){e.build.loading=!1,a.data.forEach((function(a){e.build.console.push(a)}))})).catch((function(a){var t={error:a,status:"fail",message:"Something went wrong, Please Try again"};e.build.console.push(t)}))}}}),g=m,v=(t("4603"),Object(i["a"])(g,f,p,!1,null,"bff0e852",null)),_=v.exports;s["a"].use(u["a"]);var h=[{path:"/dev",redirect:"/dev/ui"},{path:"/dev/ui/*",redirect:"/dev/ui"},{path:"/dev/ui",name:"home",component:_}],b=new u["a"]({mode:"history",base:"/",routes:h}),j=b,y=t("2f62"),w=document.head.querySelector('meta[name="app-url"]'),x=null;x=w?w.content:"http://wecodefy.test/",s["a"].use(y["a"]);var k=new y["a"].Store({state:{api_base_url:x+"dev/ui/api/",base_url:x},mutations:{},actions:{},modules:{}}),z={data:function(){return{}},methods:{$apiUrl:function(e){return this.$store.state.api_base_url+e}}},$=t("bc3a"),S=t.n($),C=t("a7fe"),T=t.n(C),P=t("123d"),E=t.n(P);s["a"].use(E.a),s["a"].use(T.a,S.a),s["a"].config.productionTip=!1,s["a"].use(n["a"]),s["a"].mixin(z),new s["a"]({router:j,store:k,render:function(e){return e(d)}}).$mount("#app")},c226:function(e,a,t){}});
//# sourceMappingURL=app.js.map