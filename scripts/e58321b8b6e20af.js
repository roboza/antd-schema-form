!function(e){function t(t){for(var a,r,l=t[0],i=t[1],u=t[2],s=0,d=[];s<l.length;s++)r=l[s],o[r]&&d.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(m&&m(t);d.length;)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={1:0},o={1:0},c=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{0:1,2:1,3:1}[e]&&t.push(r[e]=new Promise(function(t,n){for(var a={0:"f14936355d61031",2:"f4ae7581b30a1c2",3:"0e756dd0bba51c1"}[e]+".css",o=l.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=(m=c[i]).getAttribute("data-href")||m.getAttribute("href");if("stylesheet"===m.rel&&(u===a||u===o))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){var m;if((u=(m=s[i]).getAttribute("data-href"))===a||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=o,document.getElementsByTagName("head")[0].appendChild(d)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=a);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=function(e){return l.p+"scripts/"+{0:"f14936355d61031",2:"f4ae7581b30a1c2",3:"0e756dd0bba51c1"}[e]+".js"}(e);var u=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}o[e]=void 0}};var s=setTimeout(function(){c({type:"timeout",target:i})},12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="https://duan602728596.github.io/antd-schema-form/",l.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var m=u;c.push([407,4]),n()}({106:function(e,t,n){e.exports={headerBox:"_2dbs7_",navList:"_2SmpIy",langSelect:"_1-PcJ7",version:"_10arcJ",github:"_1ilanr"}},133:function(e,t,n){e.exports={desc:"_3E-9Uj",codePre:"_1q3H14",code:"_3yssJa",mb10:"_-yW_OM"}},203:function(e,t,n){"use strict";var a=n(58),r=n.n(a),o=n(118),c=n(370),l=n(139),i=n(119),u=n(372),s={};function m(e){return Object(u.combineReducers)(Object(i.a)({},s,e))}n.d(t,"b",function(){return h}),n.d(t,"a",function(){return g});var d=m({}),p=Object(o.a)(c.a),f={asyncReducers:{}};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(l.fromJS)(e),n=Object(l.Map)(t);return r()(f,Object(o.d)(d,n,Object(o.c)(p))),f}function g(e){for(var t in e){var n=e[t];t in f.asyncReducers||(f.asyncReducers[t]=n)}f.replaceReducer(m(f.asyncReducers))}},204:function(e,t,n){e.exports={loadingBox:"_gP9Zo0",loading:"_2ntQ2z",loadingIcon:"_1lzHCp"}},266:function(e,t,n){e.exports={arrangement:"_2qYRem",content:"_2HhEKC"}},366:function(e,t,n){"use strict";(function(e){n(413);var a,r=n(392),o=n(19),c=n(20),l=n(21),i=n(22),u=n(23),s=n(1),m=n.n(s),d=n(87),p=n(72),f=n(276),h=n(393),g=n.n(h),b=n(369),v=n(203),E=n(394),y=n(61),j=Object(b.hot)(e)(a=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(f.a,{store:Object(v.b)(window.__INITIAL_STATE__||{})},m.a.createElement(r.a,{locale:g.a},m.a.createElement(y.a,null,m.a.createElement(d.a,null,m.a.createElement(p.c,null,m.a.createElement(p.a,{component:E.a,exact:!0}))))))}}]),t}(s.Component))||a;t.a=j}).call(this,n(160)(e))},374:function(e){e.exports={nav:["Home","Form Generation","Form Preview","Document"],switchLoading:"Loading...",index:{introduction:["Antd-schema-form based",", Quickly generate interactive forms with","configuration.","This demo simply shows how to build a form by configuring schema.json."],demoTitle:"Form:"},createForm:{title:"Form generation",introduction:"You can configure a form with the configuration function.",copy:"Copy",refreshFormConfiguration:"Refresh Form Configuration",add:"Add",edit:"Edit",delete:"Delete",drawerLabel:"Select the variable type:",selectOptions:["String","Number","Boolean","Array","Object"]},preview:{title:"Form preview",introduction:"You can paste json to generate and preview the form.",copy:"Copy",generateForm:"Generate form",modalTitle:"The value of the form is:"},message:{modalTitle:"The value of the form is:",jsonFormatError:"JSON format error!",copyMessage:"It has been copied to the clipboard."}}},375:function(e){e.exports={nav:["首页","表单生成","表单预览","文档"],switchLoading:"加载中...",index:{introduction:["antd-schema-form基于","，可以通过","配置快速生成可交互的表单。","这个Demo简单的展示了通过配置schema.json构建一个表单。"],demoTitle:"表单："},createForm:{title:"表单生成",introduction:"你可以通过配置功能来配置一个表单。",copy:"复制",refreshFormConfiguration:"刷新表单配置",add:"添加",edit:"编辑",delete:"删除",drawerLabel:"选择变量类型：",selectOptions:["字符串（string）","数字（number）","布尔（boolean）","数组（array）","对象（object）"]},preview:{title:"表单预览",introduction:"你可以粘贴json来生成并预览表单。",copy:"复制",generateForm:"生成表单"},message:{modalTitle:"表单的值为：",jsonFormatError:"JSON格式错误！",copyMessage:"已复制到剪贴板。"}}},390:function(e){e.exports={id:"$root",type:"object",title:"Form",description:"Form preview.",properties:{name:{id:"$root/properties/name",type:"string",title:"Name",description:"Please type in your name.",$required:!0},age:{id:"$root/properties/age",type:"number",title:"Age",description:"Please enter age."},gender:{id:"$root/properties/gender",type:"string",title:"Gender",description:"Please select gender.",$componentType:"radio",$options:[{label:"Male",value:"Male"},{label:"Female",value:"Female"}]},schools:{id:"$root/properties/schools",type:"array",title:"Educational experience",description:"Educational experience.",items:{id:"$root/properties/schools/items",type:"string",title:"Institution",description:"Please fill in the school.",$required:!0}}}}},391:function(e){e.exports={id:"$root",type:"object",title:"表单",description:"表单预览。",properties:{name:{id:"$root/properties/name",type:"string",title:"姓名",description:"请输入姓名",$required:!0},age:{id:"$root/properties/age",type:"number",title:"年龄",description:"请输入年龄"},gender:{id:"$root/properties/gender",type:"string",title:"性别",description:"请选择性别",$componentType:"radio",$options:[{label:"男",value:"男"},{label:"女",value:"女"}]},schools:{id:"$root/properties/schools",type:"array",title:"教育经历",description:"教育经历",items:{id:"$root/properties/schools/items",type:"string",title:"就读院校",description:"请填写学校",$required:!0}}}}},394:function(e,t,n){"use strict";n(301);var a=n(151),r=n(1),o=n.n(r),c=n(266),l=n.n(c),i=(n(156),n(8)),u=(n(153),n(44)),s=n(373),m=n(106),d=n.n(m),p=n(87),f=n(61);var h=function(e){return o.a.createElement("nav",null,o.a.createElement(f.b.Consumer,null,function(e){var t=e.language,n=e.languagePack.nav,a="zh-cn"===t?"https://github.com/duan602728596/antd-schema-form/blob/master/README-zhCN.md#antd-schema-form":"https://github.com/duan602728596/antd-schema-form#antd-schema-form";return o.a.createElement("ul",{className:d.a.navList},o.a.createElement("li",null,o.a.createElement(p.b,{to:"/"},o.a.createElement(i.a,{type:"home",theme:"twoTone"}),o.a.createElement("span",null,n[0]))),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/CreateForm"},o.a.createElement(i.a,{type:"file-text",theme:"twoTone"}),o.a.createElement("span",null,n[1]))),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/Preview"},o.a.createElement(i.a,{type:"eye",theme:"twoTone"}),o.a.createElement("span",null,n[2]))),o.a.createElement("li",null,o.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(i.a,{type:"book",theme:"twoTone"}),o.a.createElement("span",null,n[3]))))}))};var g=function(e){return o.a.createElement(a.a.Header,null,o.a.createElement("div",{className:d.a.headerBox},o.a.createElement(h,null),o.a.createElement("div",null,o.a.createElement(f.b.Consumer,null,function(e){return o.a.createElement(u.a,{className:d.a.langSelect,size:"small",value:e.language,onSelect:e.onSelect},o.a.createElement(u.a.Option,{key:"default",value:"default"},"EN"),o.a.createElement(u.a.Option,{key:"zh-cn",value:"zh-cn"},"中文"))}),o.a.createElement("span",{className:d.a.version},"v",s.a),o.a.createElement("a",{className:d.a.github,href:"https://github.com/duan602728596/antd-schema-form",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(i.a,{type:"github"})))))},b=(n(206),n(553),n(19)),v=n(20),E=n(21),y=n(22),j=n(23),O=n(72),w=n(203),x=(n(334),n(197)),k=n(204),_=n.n(k);var C=function(e){return o.a.createElement("div",{className:_.a.loadingBox},o.a.createElement("div",{className:_.a.loading},o.a.createElement(x.a,{indicator:o.a.createElement(i.a,{className:_.a.loadingIcon,type:"loading"})}),o.a.createElement(f.b.Consumer,null,function(e){return o.a.createElement("span",null,e.languagePack.switchLoading)})))},N=o.a.createElement(C,null);var P=function(e){var t=Object(r.lazy)(e);return function(){return o.a.createElement(r.Suspense,{fallback:N},o.a.createElement(t,{injectReducers:w.a}))}},S=n(278),T=n.n(S),F=(n(396),n(281)),$=(n(397),n(259)),L=n(248),R=n.n(L),A=(n(400),n(364)),I=n(49),M=n(31),z=n(3),B=n.n(z),D=n(275),J=(n(395),n(158)),q=n(159),H=n(272),G=n.n(H),U=(n(738),n(133)),Y=n.n(U),K=n(390),Q=n(391),W=function(e){function t(){var e;Object(b.a)(this,t),e=Object(E.a)(this,Object(y.a)(t).apply(this,arguments)),Object(M.a)(Object(I.a)(e),"codeRef",Object(r.createRef)()),Object(M.a)(Object(I.a)(e),"handleOnFormOkClick",function(t,n,a){var r=e.context.languagePack.message;A.a.info({content:o.a.createElement("div",null,o.a.createElement("h4",null,r.modalTitle),o.a.createElement("pre",null,R()(n,null,2)))})});var n=e.context.language;return e.state={language:n},e}return Object(j.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){G.a.highlightBlock(this.codeRef.current)}},{key:"componentDidUpdate",value:function(e,t){var n=this.context.language;n!==t.language&&(G.a.highlightBlock(this.codeRef.current),this.setState({language:n}))}},{key:"render",value:function(){var e=this.context,t=e.language,n=e.languagePack.index,a="zh-cn"===t?Q:K;return o.a.createElement(r.Fragment,null,o.a.createElement("p",{className:Y.a.desc},n.introduction[0],o.a.createElement("a",{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener noreferrer"},"Ant Design"),n.introduction[1],o.a.createElement("a",{href:"http://json-schema.org/draft-07/json-schema-validation.html",target:"_blank",rel:"noopener noreferrer"},"JSON Schema"),n.introduction[2]),o.a.createElement("p",{className:Y.a.desc},n.introduction[3]),o.a.createElement(F.a,{type:"flex",gutter:10},o.a.createElement($.a,{className:Y.a.mb10,xs:24,sm:24,md:12},o.a.createElement("h4",null,n.demoTitle),o.a.createElement(D.a,{json:a,languagePack:"zh-cn"===t?q:J,onOk:this.handleOnFormOkClick})),o.a.createElement($.a,{xs:24,sm:24,md:12},o.a.createElement("h4",null,"schema.json："),o.a.createElement("pre",{className:Y.a.codePre},o.a.createElement("code",{ref:this.codeRef,className:B()("json",Y.a.code)},R()(a,null,2))))))}}]),t}(r.Component);Object(M.a)(W,"contextType",f.b);var Z=W,V=function(e){function t(){return Object(b.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return[o.a.createElement(T.a,{key:"helmet"},o.a.createElement("title",null,"antd-schema-form")),o.a.createElement(O.c,{key:"main"},o.a.createElement(O.a,{path:"/",component:Z,exact:!0}),o.a.createElement(O.a,{path:"/Index",component:Z,exact:!0}))]}}]),t}(r.Component),X=P(function(){return Promise.all([n.e(3),n.e(0)]).then(n.bind(null,776))}),ee=P(function(){return n.e(2).then(n.bind(null,777))}),te=function(e){function t(){return Object(b.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(O.c,null,o.a.createElement(O.a,{path:"/",component:V,exact:!0}),o.a.createElement(O.a,{path:"/Index",component:V}),o.a.createElement(O.a,{path:"/CreateForm",component:X}),o.a.createElement(O.a,{path:"/Preview",component:ee}))}}]),t}(r.Component);t.a=function(e){return o.a.createElement(a.a,{className:l.a.arrangement},o.a.createElement(g,null),o.a.createElement(a.a.Content,{className:l.a.content},o.a.createElement(te,null)))}},407:function(e,t,n){e.exports=n(408)},408:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(7),c=n(366);Object(o.render)(r.a.createElement(c.a,null),document.getElementById("app"))},61:function(e,t,n){"use strict";var a=n(101),r=n(19),o=n(20),c=n(21),l=n(22),i=n(49),u=n(23),s=n(31),m=n(1),d=n.n(m),p=n(0),f=n.n(p),h={default:n(374),"zh-cn":n(375)};n.d(t,"b",function(){return g}),n.d(t,"a",function(){return b});var g=Object(m.createContext)({language:"default"}),b=function(e){function t(){var e;Object(r.a)(this,t),e=Object(c.a)(this,Object(l.a)(t).apply(this,arguments)),Object(s.a)(Object(i.a)(e),"handleLanguageSelect",function(t,n){e.setState({language:t})});var n="object"===("undefined"==typeof window?"undefined":Object(a.a)(window))?(window.navigator.language||window.navigator.userLanguage).toLocaleLowerCase():"default";return e.state={language:n},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.language,n={language:t,onSelect:this.handleLanguageSelect,languagePack:t in h?h[t]:h.default};return d.a.createElement(g.Provider,{value:n},e)}}]),t}(m.Component);Object(s.a)(b,"propTypes",{children:f.a.node})}});