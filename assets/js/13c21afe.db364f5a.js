(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{118:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),l=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=l.a.createContext({}),b=function(e){var n=l.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return l.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},s=l.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=b(t),s=r,d=u["".concat(o,".").concat(s)]||u[s]||m[s]||a;return t?l.a.createElement(d,c(c({ref:n},i),{},{components:t})):l.a.createElement(d,c({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<a;i++)o[i]=t[i];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(3),l=t(7),a=(t(0),t(118)),o={title:"\u63d2\u4ef6"},c={unversionedId:"plugin",id:"plugin",isDocsHomePage:!1,title:"\u63d2\u4ef6",description:"NPlayer \u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u6765\u6269\u5145\u5b83\u7684\u529f\u80fd\uff0c\u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6\u4e5f\u975e\u5e38\u7684\u7b80\u5355\u3002",source:"@site/docs/plugin.md",slug:"/plugin",permalink:"/docs/plugin",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/plugin.md",version:"current",sidebar:"docs",previous:{title:"\u5b9a\u5236\u4e3b\u9898",permalink:"/docs/theme"},next:{title:"\u6d41\u5a92\u4f53",permalink:"/docs/streaming"}},p=[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]},{value:"\u6ce8\u518c\u53f3\u952e\u83dc\u5355\u3001\u63a7\u5236\u3001\u8bbe\u7f6e\u9879",id:"\u6ce8\u518c\u53f3\u952e\u83dc\u5355\u3001\u63a7\u5236\u3001\u8bbe\u7f6e\u9879",children:[]},{value:"control \u548c contextmenu",id:"control-\u548c-contextmenu",children:[]},{value:"\u5f39\u5e55\u63d2\u4ef6",id:"\u5f39\u5e55\u63d2\u4ef6",children:[]}],i={toc:p};function b(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"NPlayer \u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u6765\u6269\u5145\u5b83\u7684\u529f\u80fd\uff0c\u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6\u4e5f\u975e\u5e38\u7684\u7b80\u5355\u3002"),Object(a.b)("p",null,"NPlayer \u7684\u63d2\u4ef6\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5b83\u7684\u63a5\u53e3\u5b9a\u4e49\u5982\u4e0b\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tyescript"},"interface Plugin {\n  apply: (player: Player) => void;\n  dispose?: () => void;\n}\n")),Object(a.b)("p",null,"\u63d2\u4ef6\u5176\u5b9e\u5c31\u662f\u4e00\u4e2a\u63a5\u6536 ",Object(a.b)("inlineCode",{parentName:"p"},"player")," \u5bf9\u8c61\u7684\u4e00\u4e2a\u51fd\u6570\u3002\u5176\u4e2d ",Object(a.b)("inlineCode",{parentName:"p"},"dispose")," \u53ef\u9009\u7684\u5378\u8f7d\u65b9\u6cd5\uff0c\u5f53\u64ad\u653e\u5668\u5378\u8f7d\u65f6\u4f1a\u8c03\u7528\u8be5\u65b9\u6cd5\u3002"),Object(a.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(a.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"log")," \u63d2\u5728\uff0c\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"player")," \u89e6\u53d1\u4e8b\u4ef6\u65f6\u6253\u5370\u65e5\u5fd7\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"new Player({\n  plugins: [\n    {\n      apply(player) {\n        player.on('Mounted', () => console.log('mounted'))\n        player.on('Play', () => console.log('play'))\n        // ...\n      }\n    }\n  ]\n})\n")),Object(a.b)("p",null,"Player \u63a5\u6536\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"plugins")," \u53c2\u6570\uff0c\u5b83\u662f\u5e94\u7528\u5728\u5f53\u524d\u64ad\u653e\u5668\u7684\u63d2\u4ef6\u3002"),Object(a.b)("h2",{id:"\u6ce8\u518c\u53f3\u952e\u83dc\u5355\u3001\u63a7\u5236\u3001\u8bbe\u7f6e\u9879"},"\u6ce8\u518c\u53f3\u952e\u83dc\u5355\u3001\u63a7\u5236\u3001\u8bbe\u7f6e\u9879"),Object(a.b)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"player")," \u4e0a\u7684\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u6ce8\u518c\u8fd9\u4e9b\u9879\u3002"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"registerSettingItem(item: SettingItem, id?: string): void")," \u6ce8\u518c\u8bbe\u7f6e\u9879"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"registerContextMenuItem(item: ContextMenuItem, id?: string): void")," \u6ce8\u518c\u53f3\u952e\u83dc\u5355\u9879"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"registerControlItem(item: ControlItem, id?: string): void")," \u6ce8\u518c\u63a7\u5236\u9879")),Object(a.b)("p",null,"\u6ce8\u518c\u8fc7\u540e\uff0c\u7528\u6237\u5c31\u53ef\u4ee5\u4f7f\u7528\u5b57\u7b26\u4e32\u914d\u7f6e\u64ad\u653e\u5668\uff0c\u800c\u4e0d\u662f\u5177\u4f53\u5bf9\u8c61\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const myPlugin = {\n  apply(player) {\n    player.registerControlItem({ id: 'my-control', element: document.createElement('input') })\n  }\n}\n\nnew Player({\n  plugins: [myPlugin],\n  controls: ['play', 'spacer', 'my-control']\n})\n")),Object(a.b)("p",null,"\u6211\u4eec\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"registerControlItem")," \u6ce8\u518c\u4e00\u4e2a\u63a7\u5236\u9879\uff0c\u7136\u540e\u5728\u64ad\u653e\u5668\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"controls")," \u53c2\u6570\u4e2d\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"my-control")," \u5b57\u7b26\u4e32\u4e86\u3002"),Object(a.b)("p",null,"\u5bf9\u5e94\u53f3\u952e\u83dc\u5355\u548c\u8bbe\u7f6e\u9879\u90fd\u662f\u76f8\u540c\u7684\u4f7f\u7528\u65b9\u6cd5\u3002"),Object(a.b)("h2",{id:"control-\u548c-contextmenu"},"control \u548c contextmenu"),Object(a.b)("p",null,"\u5728\u6267\u884c\u63d2\u4ef6 ",Object(a.b)("inlineCode",{parentName:"p"},"apply")," \u7684\u65f6\u5019\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"player")," \u5bf9\u8c61\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"control")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"contextmenu")," \u8fd8\u6ca1\u521d\u59cb\u5316\uff0c\u90fd\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"undefined"),"\u3002\uff08player \u4e0a\u7684\u5176\u4ed6\u5bf9\u8c61\u90fd\u5df2\u521d\u59cb\u5316\u5b8c\u6210\uff09"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"{\n  apply(player) {\n    console.log(player.control) // undefined\n    console.log(player.contextmenu) // undefined\n\n    player.on('AfterInit', () => {\n      console.log(player.control) // \u6709\u503c\n      console.log(player.contextmenu) // \u6709\u503c\n    })\n  }\n}\n")),Object(a.b)("p",null,"\u6240\u4ee5\u5728\u63d2\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u4fee\u6539 ",Object(a.b)("inlineCode",{parentName:"p"},"player.opts")," \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"controls"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"settings")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"contextMenus")," \u7684\u503c\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"{\n  apply(player) {\n    player.opts.controls = player.opts.controls.filter(c => c.id !== 'volume')\n  }\n}\n")),Object(a.b)("p",null,"\u4e0a\u9762\u4ee3\u7801\u5c06\u53bb\u9664\u97f3\u91cf\u63a7\u5236\u3002"),Object(a.b)("h2",{id:"\u5f39\u5e55\u63d2\u4ef6"},"\u5f39\u5e55\u63d2\u4ef6"),Object(a.b)("p",null,"NPlayer \u7684\u5f39\u5e55\u529f\u80fd\u5c31\u662f\u7531\u63d2\u4ef6\u5f62\u5f0f\u7f16\u5199\u3002\u5982\u679c\u4f60\u60f3\u7ed9\u64ad\u653e\u5668\u6dfb\u52a0\u5f39\u5e55\u529f\u80fd\uff0c\u53ef\u4ee5\u76f4\u63a5\u5f15\u5165 NPlayer \u7684\u5f39\u5e55\u63d2\u4ef6\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import Player from 'nplayer'\nimport Danmaku from '@nplayer/danmaku'\n\nnew Player(plugins: [new Danmaku()])\n")),Object(a.b)("p",null,"\u66f4\u591a\u63d2\u4ef6\u8be6\u60c5\u53ef\u4ee5\u67e5\u770b\u5f39\u5e55\u63d2\u4ef6\u7ae0\u8282\u3002"))}b.isMDXComponent=!0}}]);