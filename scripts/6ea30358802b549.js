!function(e){function t(t){for(var a,r,i=t[0],l=t[1],u=t[2],s=0,m=[];s<i.length;s++)r=i[s],o[r]&&m.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(d&&d(t);m.length;)m.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={1:0},o={1:0},c=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{0:1,2:1,3:1}[e]&&t.push(r[e]=new Promise(function(t,n){for(var a={0:"f2d8108dcb16b41",2:"5c1dda83561b934",3:"eb45d13208a41ef"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var u=(d=c[l]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===a||u===o))return t()}var s=document.getElementsByTagName("style");for(l=0;l<s.length;l++){var d;if((u=(d=s[l]).getAttribute("data-href"))===a||u===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],m.parentNode.removeChild(m),n(c)},m.href=o,document.getElementsByTagName("head")[0].appendChild(m)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+"scripts/"+{0:"f2d8108dcb16b41",2:"5c1dda83561b934",3:"eb45d13208a41ef"}[e]+".js"}(e);var u=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}o[e]=void 0}};var s=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://duan602728596.github.io/antd-schema-form/",i.oe=function(e){throw console.error(e),e};var l=this.webpackJsonp=this.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=u;c.push([436,4]),n()}({113:function(e,t,n){e.exports={headerBox:"_2dbs7_",navList:"_2SmpIy",langSelect:"_1-PcJ7",version:"_10arcJ",github:"_1ilanr"}},139:function(e,t,n){e.exports={desc:"_3E-9Uj",codePre:"_1q3H14",code:"_3yssJa",mb10:"_-yW_OM"}},213:function(e,t,n){"use strict";var a=n(66),r=n.n(a),o=n(126),c=n(398),i=n(145),l=n(59),u=n.n(l),s=n(127),d=n.n(s),m=n(86),p=n.n(m),f=n(60),h=n.n(f),g=n(65),b=n.n(g),v=n(128),E=n.n(v),y=n(85),O=n.n(y),j=n(116),w=n.n(j),x=n(28),k=n(399);function T(e,t){var n=w()(e);if(O.a){var a=O()(e);t&&(a=E()(a).call(a,function(t){return b()(e,t).enumerable})),n.push.apply(n,a)}return n}var C={};function _(e){return Object(k.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=T(a,!0)).call(n,function(t){Object(x.a)(e,t,a[t])});else if(p.a)d()(e,p()(a));else{var r;h()(r=T(a)).call(r,function(t){u()(e,t,b()(a,t))})}}return e}({},C,{},e))}n.d(t,"b",function(){return F}),n.d(t,"a",function(){return L});var N=_({}),S=Object(o.a)(c.a),P={asyncReducers:{}};function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(i.fromJS)(e),n=Object(i.Map)(t);return r()(P,Object(o.d)(N,n,Object(o.c)(S))),P}function L(e){for(var t in e){var n=e[t];t in P.asyncReducers||(P.asyncReducers[t]=n)}P.replaceReducer(_(P.asyncReducers))}},214:function(e,t,n){e.exports={loadingBox:"_gP9Zo0",loading:"_2ntQ2z",loadingIcon:"_1lzHCp"}},275:function(e,t,n){e.exports={arrangement:"_2qYRem",content:"_2HhEKC"}},278:function(e,t,n){"use strict";n.r(t);var a=n(310),r=n.n(a);n.d(t,"DownOutline",function(){return r.a});var o=n(311),c=n.n(o);n.d(t,"RightOutline",function(){return c.a});var i=n(312),l=n.n(i);n.d(t,"UpOutline",function(){return l.a});var u=n(313),s=n.n(u);n.d(t,"CloseOutline",function(){return s.a});var d=n(314),m=n.n(d);n.d(t,"InfoCircleOutline",function(){return m.a});var p=n(315),f=n.n(p);n.d(t,"PlusCircleOutline",function(){return f.a});var h=n(316),g=n.n(h);n.d(t,"PlusOutline",function(){return g.a});var b=n(317),v=n.n(b);n.d(t,"CopyOutline",function(){return v.a});var E=n(318),y=n.n(E);n.d(t,"DeleteOutline",function(){return y.a});var O=n(319),j=n.n(O);n.d(t,"EditOutline",function(){return j.a});var w=n(320),x=n.n(w);n.d(t,"RedoOutline",function(){return x.a});var k=n(321),T=n.n(k);n.d(t,"GithubOutline",function(){return T.a});var C=n(322),_=n.n(C);n.d(t,"EyeOutline",function(){return _.a});var N=n(323),S=n.n(N);n.d(t,"EyeInvisibleOutline",function(){return S.a});var P=n(324),F=n.n(P);n.d(t,"TabletOutline",function(){return F.a});var L=n(325),$=n.n(L);n.d(t,"CloseCircleFill",function(){return $.a});var R=n(326),I=n.n(R);n.d(t,"InfoCircleFill",function(){return I.a});var A=n(327),J=n.n(A);n.d(t,"BookTwoTone",function(){return J.a});var B=n(328),M=n.n(B);n.d(t,"EyeTwoTone",function(){return M.a});var z=n(329),D=n.n(z);n.d(t,"FileTextTwoTone",function(){return D.a});var q=n(330),H=n.n(q);n.d(t,"HomeTwoTone",function(){return H.a})},394:function(e,t,n){"use strict";(function(e){n(442);var a,r=n(421),o=n(18),c=n(19),i=n(20),l=n(21),u=n(22),s=n(1),d=n.n(s),m=n(96),p=n(79),f=n(285),h=n(422),g=n.n(h),b=n(397),v=n(213),E=n(423),y=n(68),O=Object(b.hot)(e)(a=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return d.a.createElement(f.a,{store:Object(v.b)(window.__INITIAL_STATE__||{})},d.a.createElement(r.a,{locale:g.a},d.a.createElement(y.a,null,d.a.createElement(m.a,null,d.a.createElement(p.c,null,d.a.createElement(p.a,{component:E.a,exact:!0}))))))}}]),t}(s.Component))||a;t.a=O}).call(this,n(165)(e))},401:function(e){e.exports=JSON.parse('{"nav":["Home","Form Generation","Form Preview","Document"],"switchLoading":"Loading...","index":{"introduction":["Antd-schema-form based",", Quickly generate interactive forms with","configuration.","This demo simply shows how to build a form by configuring schema.json."],"demoTitle":"Form:"},"createForm":{"title":"Form generation","introduction":"You can configure a form with the configuration function.","copy":"Copy","refreshFormConfiguration":"Refresh Form Configuration","add":"Add","edit":"Edit","delete":"Delete","drawerLabel":"Select the variable type:","selectOptions":["String","Number","Boolean","Array","Object"]},"preview":{"title":"Form preview","introduction":"You can paste json to generate and preview the form.","copy":"Copy","generateForm":"Generate form","modalTitle":"The value of the form is:"},"message":{"modalTitle":"The value of the form is:","jsonFormatError":"JSON format error!","copyMessage":"It has been copied to the clipboard."}}')},402:function(e){e.exports=JSON.parse('{"nav":["首页","表单生成","表单预览","文档"],"switchLoading":"加载中...","index":{"introduction":["antd-schema-form基于","，可以通过","配置快速生成可交互的表单。","这个Demo简单的展示了通过配置schema.json构建一个表单。"],"demoTitle":"表单："},"createForm":{"title":"表单生成","introduction":"你可以通过配置功能来配置一个表单。","copy":"复制","refreshFormConfiguration":"刷新表单配置","add":"添加","edit":"编辑","delete":"删除","drawerLabel":"选择变量类型：","selectOptions":["字符串（string）","数字（number）","布尔（boolean）","数组（array）","对象（object）"]},"preview":{"title":"表单预览","introduction":"你可以粘贴json来生成并预览表单。","copy":"复制","generateForm":"生成表单"},"message":{"modalTitle":"表单的值为：","jsonFormatError":"JSON格式错误！","copyMessage":"已复制到剪贴板。"}}')},418:function(e){e.exports=JSON.parse('{"id":"$root","type":"object","title":"Form","description":"Form preview.","properties":{"name":{"id":"$root/properties/name","type":"string","title":"Name","description":"Please type in your name.","$required":true},"age":{"id":"$root/properties/age","type":"number","title":"Age","description":"Please enter age."},"gender":{"id":"$root/properties/gender","type":"string","title":"Gender","description":"Please select gender.","$componentType":"radio","$options":[{"label":"Male","value":"Male"},{"label":"Female","value":"Female"}]},"schools":{"id":"$root/properties/schools","type":"array","title":"Educational experience","description":"Educational experience.","items":{"id":"$root/properties/schools/items","type":"string","title":"Institution","description":"Please fill in the school.","$required":true}}}}')},419:function(e){e.exports=JSON.parse('{"id":"$root","type":"object","title":"表单","description":"表单预览。","properties":{"name":{"id":"$root/properties/name","type":"string","title":"姓名","description":"请输入姓名","$required":true},"age":{"id":"$root/properties/age","type":"number","title":"年龄","description":"请输入年龄"},"gender":{"id":"$root/properties/gender","type":"string","title":"性别","description":"请选择性别","$componentType":"radio","$options":[{"label":"男","value":"男"},{"label":"女","value":"女"}]},"schools":{"id":"$root/properties/schools","type":"array","title":"教育经历","description":"教育经历","items":{"id":"$root/properties/schools/items","type":"string","title":"就读院校","description":"请填写学校","$required":true}}}}')},423:function(e,t,n){"use strict";n(309);var a=n(157),r=n(1),o=n.n(r),c=n(275),i=n.n(c),l=(n(162),n(7)),u=(n(159),n(44)),s=n(400),d=n(113),m=n.n(d),p=n(96),f=n(68);var h=function(e){return o.a.createElement("nav",null,o.a.createElement(f.b.Consumer,null,function(e){var t=e.language,n=e.languagePack.nav,a="zh-cn"===t?"https://github.com/duan602728596/antd-schema-form/blob/v2/README-zhCN.md#antd-schema-form":"https://github.com/duan602728596/antd-schema-form/tree/v2#antd-schema-form";return o.a.createElement("ul",{className:m.a.navList},o.a.createElement("li",null,o.a.createElement(p.b,{to:"/"},o.a.createElement(l.a,{type:"home",theme:"twoTone"}),o.a.createElement("span",null,n[0]))),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/CreateForm"},o.a.createElement(l.a,{type:"file-text",theme:"twoTone"}),o.a.createElement("span",null,n[1]))),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/Preview"},o.a.createElement(l.a,{type:"eye",theme:"twoTone"}),o.a.createElement("span",null,n[2]))),o.a.createElement("li",null,o.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(l.a,{type:"book",theme:"twoTone"}),o.a.createElement("span",null,n[3]))))}))};var g=function(e){return o.a.createElement(a.a.Header,null,o.a.createElement("div",{className:m.a.headerBox},o.a.createElement(h,null),o.a.createElement("div",null,o.a.createElement(f.b.Consumer,null,function(e){return o.a.createElement(u.a,{className:m.a.langSelect,size:"small",value:e.language,onSelect:e.onSelect},o.a.createElement(u.a.Option,{key:"default",value:"default"},"EN"),o.a.createElement(u.a.Option,{key:"zh-cn",value:"zh-cn"},"中文"))}),o.a.createElement("span",{className:m.a.version},"v",s.a),o.a.createElement("a",{className:m.a.github,href:"https://github.com/duan602728596/antd-schema-form",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(l.a,{type:"github"})))))},b=(n(217),n(588),n(18)),v=n(19),E=n(20),y=n(21),O=n(22),j=n(79),w=n(213),x=(n(361),n(207)),k=n(214),T=n.n(k);var C=function(e){return o.a.createElement("div",{className:T.a.loadingBox},o.a.createElement("div",{className:T.a.loading},o.a.createElement(x.a,{indicator:o.a.createElement(l.a,{className:T.a.loadingIcon,type:"loading"})}),o.a.createElement(f.b.Consumer,null,function(e){return o.a.createElement("span",null,e.languagePack.switchLoading)})))},_=o.a.createElement(C,null);var N=function(e){var t=Object(r.lazy)(e);return function(){return o.a.createElement(r.Suspense,{fallback:_},o.a.createElement(t,{injectReducers:w.a}))}},S=n(287),P=n.n(S),F=(n(425),n(289)),L=(n(426),n(269)),$=n(257),R=n.n($),I=(n(429),n(392)),A=n(50),J=n(28),B=n(2),M=n.n(B),z=n(284),D=(n(424),n(163)),q=n(164),H=n(139),G=n.n(H),U=n(418),Y=n(419),K=n(281),Q=n.n(K),W=(n(796),n(420)),Z=n.n(W);Q.a.registerLanguage("json",Z.a);var V=Q.a,X=function(e){function t(){var e;Object(b.a)(this,t),e=Object(E.a)(this,Object(y.a)(t).apply(this,arguments)),Object(J.a)(Object(A.a)(e),"codeRef",Object(r.createRef)()),Object(J.a)(Object(A.a)(e),"handleOnFormOkClick",function(t,n,a){var r=e.context.languagePack.message;I.a.info({content:o.a.createElement("div",null,o.a.createElement("h4",null,r.modalTitle),o.a.createElement("pre",null,R()(n,null,2)))})});var n=e.context.language;return e.state={language:n},e}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){V.highlightBlock(this.codeRef.current)}},{key:"componentDidUpdate",value:function(e,t){var n=this.context.language;n!==t.language&&(V.highlightBlock(this.codeRef.current),this.setState({language:n}))}},{key:"render",value:function(){var e=this.context,t=e.language,n=e.languagePack.index,a="zh-cn"===t?Y:U;return o.a.createElement(r.Fragment,null,o.a.createElement("p",{className:G.a.desc},n.introduction[0],o.a.createElement("a",{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener noreferrer"},"Ant Design"),n.introduction[1],o.a.createElement("a",{href:"http://json-schema.org/draft-07/json-schema-validation.html",target:"_blank",rel:"noopener noreferrer"},"JSON Schema"),n.introduction[2]),o.a.createElement("p",{className:G.a.desc},n.introduction[3]),o.a.createElement(F.a,{type:"flex",gutter:10},o.a.createElement(L.a,{className:G.a.mb10,xs:24,sm:24,md:12},o.a.createElement("h4",null,n.demoTitle),o.a.createElement(z.a,{json:a,languagePack:"zh-cn"===t?q:D,onOk:this.handleOnFormOkClick})),o.a.createElement(L.a,{xs:24,sm:24,md:12},o.a.createElement("h4",null,"schema.json："),o.a.createElement("pre",{className:G.a.codePre},o.a.createElement("code",{ref:this.codeRef,className:M()("json",G.a.code)},R()(a,null,2))))))}}]),t}(r.Component);Object(J.a)(X,"contextType",f.b);var ee=X,te=function(e){function t(){return Object(b.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return[o.a.createElement(P.a,{key:"helmet"},o.a.createElement("title",null,"antd-schema-form")),o.a.createElement(j.c,{key:"main"},o.a.createElement(j.a,{path:"/",component:ee,exact:!0}),o.a.createElement(j.a,{path:"/Index",component:ee,exact:!0}))]}}]),t}(r.Component),ne=N(function(){return Promise.all([n.e(3),n.e(0)]).then(n.bind(null,834))}),ae=N(function(){return n.e(2).then(n.bind(null,835))}),re=function(e){function t(){return Object(b.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(j.c,null,o.a.createElement(j.a,{path:"/",component:te,exact:!0}),o.a.createElement(j.a,{path:"/Index",component:te}),o.a.createElement(j.a,{path:"/CreateForm",component:ne}),o.a.createElement(j.a,{path:"/Preview",component:ae}))}}]),t}(r.Component);t.a=function(e){return o.a.createElement(a.a,{className:i.a.arrangement},o.a.createElement(g,null),o.a.createElement(a.a.Content,{className:i.a.content},o.a.createElement(re,null)))}},436:function(e,t,n){e.exports=n(437)},437:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(9),c=n(394);Object(o.render)(r.a.createElement(c.a,null),document.getElementById("app"))},68:function(e,t,n){"use strict";var a=n(106),r=n(18),o=n(19),c=n(20),i=n(21),l=n(50),u=n(22),s=n(28),d=n(1),m=n.n(d),p=n(0),f=n.n(p),h={default:n(401),"zh-cn":n(402)};n.d(t,"b",function(){return g}),n.d(t,"a",function(){return b});var g=Object(d.createContext)({language:"default"}),b=function(e){function t(){var e;Object(r.a)(this,t),e=Object(c.a)(this,Object(i.a)(t).apply(this,arguments)),Object(s.a)(Object(l.a)(e),"handleLanguageSelect",function(t,n){e.setState({language:t})});var n="object"===("undefined"==typeof window?"undefined":Object(a.a)(window))?(window.navigator.language||window.navigator.userLanguage).toLocaleLowerCase():"default";return e.state={language:n},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.language,n={language:t,onSelect:this.handleLanguageSelect,languagePack:t in h?h[t]:h.default};return m.a.createElement(g.Provider,{value:n},e)}}]),t}(d.Component);Object(s.a)(b,"propTypes",{children:f.a.node})}});