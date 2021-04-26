(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(3),o=(t(0),t(120));const a={title:"\u89c6\u9891\u622a\u56fe"},c={unversionedId:"examples/screenshot",id:"examples/screenshot",isDocsHomePage:!1,title:"\u89c6\u9891\u622a\u56fe",description:"\u6211\u4eec\u4f7f\u7528\u53f3\u952e\u83dc\u5355\u7684\u5f62\u5f0f\u5b9e\u73b0\u89c6\u9891\u622a\u56fe\u529f\u80fd\u3002",source:"@site/docs/examples/screenshot.md",slug:"/examples/screenshot",permalink:"/docs/examples/screenshot",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/examples/screenshot.md",version:"current",sidebar:"docs",previous:{title:"\u6e05\u6670\u5ea6\u5207\u6362",permalink:"/docs/examples/quantity-switch"},next:{title:"\u89c6\u9891\u955c\u50cf",permalink:"/docs/examples/mirroring"}},i=[],l={toc:i};function s({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u6211\u4eec\u4f7f\u7528\u53f3\u952e\u83dc\u5355\u7684\u5f62\u5f0f\u5b9e\u73b0\u89c6\u9891\u622a\u56fe\u529f\u80fd\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import Player from 'nplayer'\n\nconst Screenshot = {\n  html: '\u622a\u56fe',\n  click(player) {\n    const canvas = document.createElement('canvas')\n    canvas.width = player.video.videoWidth\n    canvas.height = player.video.videoHeight\n    canvas.getContext('2d').drawImage(player.video, 0, 0, canvas.width, canvas.height)\n    canvas.toBlob((blob) => {\n        let dataURL = URL.createObjectURL(blob)\n        const link = document.createElement('a')\n        link.href = dataURL\n        link.download = 'NPlayer.png'\n        link.style.display = 'none'\n        document.body.appendChild(link)\n        link.click()\n        document.body.removeChild(link)\n        URL.revokeObjectURL(dataURL)\n    })\n  }\n}\n\nconst player = new Player({\n  contextMenus: [Screenshot, 'loop', 'pip', 'version'],\n})\nplayer.mount(document.body)\n")))}s.isMDXComponent=!0},120:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?o.a.createElement(f,i(i({ref:n},s),{},{components:t})):o.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);