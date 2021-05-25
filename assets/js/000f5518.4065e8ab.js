(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[220],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,p(p({ref:t},l),{},{components:n})):r.createElement(y,p({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2723:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return i},default:function(){return l}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),p={title:"React"},c={unversionedId:"ecosystem/react",id:"ecosystem/react",isDocsHomePage:!1,title:"React",description:"npm version",source:"@site/docs/ecosystem/react.md",sourceDirName:"ecosystem",slug:"/ecosystem/react",permalink:"/docs/ecosystem/react",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/ecosystem/react.md",version:"current",frontMatter:{title:"React"},sidebar:"docs",previous:{title:"\u5f39\u5e55\u63d2\u4ef6",permalink:"/docs/ecosystem/danmaku"},next:{title:"Vue2 / Vue3",permalink:"/docs/ecosystem/vue"}},i=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",children:[]},{value:"\u5728\u7ebf\u9884\u89c8",id:"\u5728\u7ebf\u9884\u89c8",children:[]}],s={toc:i};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/woopen/nplayer"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/nplayer?logo=npm",alt:"npm version"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https:/unpkg.com/@nplayer/react/dist/index.min.js"},(0,o.kt)("img",{parentName:"a",src:"https://badge-size.herokuapp.com/woopen/nplayer/main/packages/nplayer-react/dist/index.min.js?compression=gzip",alt:"gzip size"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.codacy.com/gh/woopen/nplayer/dashboard?utm_source=github.com&utm_medium=referral&utm_content=woopen/nplayer&utm_campaign=Badge_Grade"},(0,o.kt)("img",{parentName:"a",src:"https://app.codacy.com/project/badge/Grade/08e3f1086b5748aaa745ca655ecd1c6a",alt:"Codacy Badge"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/woopen/nplayer/actions/workflows/test.yml"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/woopen/nplayer/actions/workflows/test.yml/badge.svg?branch=main",alt:"Test"}))," "),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5728 React \u9879\u76ee\u4e2d\u4f7f\u7528 NPlayer\uff0c\u53ef\u4ee5\u4f7f\u7528 React \u7ec4\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -S nplayer @nplayer/react\n")),(0,o.kt)("p",null,"\u4f60\u9700\u8981\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"nplayer")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"@nplayer/react"),"\u3002"),(0,o.kt)("p",null,"\u6216\u8005\u901a\u8fc7 CDN \u7684\u65b9\u5f0f\u4f7f\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/nplayer@latest/dist/index.min.js"><\/script>\n<script src="https:/unpkg.com/@nplayer/react/dist/index.min.js"><\/script>\n')),(0,o.kt)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useEffect, useRef } from "react";\nimport NPlayer from "@nplayer/react";\n\nexport default function App() {\n  const player = useRef();\n\n  useEffect(() => {\n    console.log(player.current);\n  }, []);\n\n  return (\n    <div>\n      <NPlayer\n        ref={player}\n        className=" "\n        style={{  }}\n        options={{ src: "https://v-cdn.zjol.com.cn/280443.mp4" }}\n      />\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"NPlayer \u7ec4\u4ef6\u63a5\u6536\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," prop\u3002\u5b83\u662f NPlayer \u6784\u9020\u51fd\u6570\u53c2\u6570\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/config"},"\u914d\u7f6e"),"\u3002"),(0,o.kt)("p",null,"NPlayer \u5185\u90e8\u628a\u64ad\u653e\u5668\u5305\u88f9\u5728\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," \u90fd\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"100%")," \u7684 div \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," prop\uff0c\u8bbe\u7f6e\u5b83\u7684 css \u7c7b\u540d\u548c\u6837\u5f0f\u3002"),(0,o.kt)("h2",{id:"\u5728\u7ebf\u9884\u89c8"},"\u5728\u7ebf\u9884\u89c8"),(0,o.kt)("p",null,"React DEMO: ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/nplayer-react-demo-p558g"},"https://codesandbox.io/s/nplayer-react-demo-p558g")))}l.isMDXComponent=!0}}]);