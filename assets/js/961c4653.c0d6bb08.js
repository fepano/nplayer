(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(118)),c={title:"\u5f39\u5e55\u63d2\u4ef6"},i={unversionedId:"ecosystem/danmaku",id:"ecosystem/danmaku",isDocsHomePage:!1,title:"\u5f39\u5e55\u63d2\u4ef6",description:"\u8be5\u63d2\u4ef6\u53ef\u4ee5\u7ed9 NPlayer \u6dfb\u52a0\u5f39\u5e55\u529f\u80fd\u3002\u5b83\u53ef\u4ee5\u4fdd\u6301\u5927\u91cf\u5f39\u5e55\u800c\u4e0d\u5361\u987f\uff0c\u8be5\u5f39\u5e55\u7cfb\u7edf\u4f53\u9a8c\u548c\u6027\u80fd\u4e0eB\u7ad9\u5f39\u5e55\u5341\u5206\u76f8\u4f3c\uff0c\u652f\u6301\u975e\u5e38\u591a\u7684\u8bbe\u7f6e\uff0c\u5f39\u5e55\u9632\u78b0\u649e\u3001\u5f39\u5e55\u901f\u5ea6\u3001\u5b57\u4f53\u3001\u901f\u5ea6\u3001\u900f\u660e\u5ea6\u3001\u663e\u793a\u533a\u57df\u3001\u65e0\u9650\u5f39\u5e55\u7b49\u3002",source:"@site/docs/ecosystem/danmaku.md",slug:"/ecosystem/danmaku",permalink:"/docs/ecosystem/danmaku",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/ecosystem/danmaku.md",version:"current",sidebar:"docs",previous:{title:"\u6d41\u5a92\u4f53",permalink:"/docs/streaming"},next:{title:"\u6e05\u6670\u5ea6\u5207\u6362",permalink:"/docs/examples/quantity-switch"}},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",children:[]},{value:"API",id:"api",children:[]}],l={toc:u};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u8be5\u63d2\u4ef6\u53ef\u4ee5\u7ed9 NPlayer \u6dfb\u52a0\u5f39\u5e55\u529f\u80fd\u3002\u5b83\u53ef\u4ee5\u4fdd\u6301\u5927\u91cf\u5f39\u5e55\u800c\u4e0d\u5361\u987f\uff0c\u8be5\u5f39\u5e55\u7cfb\u7edf\u4f53\u9a8c\u548c\u6027\u80fd\u4e0eB\u7ad9\u5f39\u5e55\u5341\u5206\u76f8\u4f3c\uff0c\u652f\u6301\u975e\u5e38\u591a\u7684\u8bbe\u7f6e\uff0c\u5f39\u5e55\u9632\u78b0\u649e\u3001\u5f39\u5e55\u901f\u5ea6\u3001\u5b57\u4f53\u3001\u901f\u5ea6\u3001\u900f\u660e\u5ea6\u3001\u663e\u793a\u533a\u57df\u3001\u65e0\u9650\u5f39\u5e55\u7b49\u3002"),Object(o.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(o.b)("p",null,"\u6267\u884c\u4e0b\u9762\u547d\u4ee4\u4f7f\u7528 npm \u5305\u7684\u5f62\u5f0f\u5b89\u88c5\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm i -S @nplayer/danmaku\n")),Object(o.b)("p",null,"\u6216\u8005\u4f7f\u7528 CDN \u7684\u65b9\u5f0f\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@nplayer/danmaku@latest/dist/index.min.js"><\/script>\n')),Object(o.b)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),Object(o.b)("p",null,"\u5b89\u88c5\u597d\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u5f39\u5e55\u63d2\u4ef6\u5566\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import Player from 'nplayer'\nimport DanmukuPlugin from '@nplayer/danmaku'\n\nconst danmakuOptions = {\n  items: [\n    { time: 1, text: '\u5f39\u5e55\uff5e' }\n  ]\n}\n\nconst player = new Player({\n  plugins: [new DanmakuPlugin(danmakuOptions)]\n})\n\nplayer.mount(document.body)\n")),Object(o.b)("h2",{id:"api"},"API"))}p.isMDXComponent=!0},118:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return t?a.a.createElement(b,i(i({ref:n},l),{},{components:t})):a.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);