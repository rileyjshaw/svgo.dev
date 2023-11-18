"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[6150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={title:"Convert Colors",svgo:{pluginId:"convertColors",defaultPlugin:!0,parameters:{currentColor:{description:'If to convert all instances of a color to <code>currentColor</code>. This means to inherit the active foreground color, for example in HTML5 this would be the <a href="https://developer.mozilla.org/docs/Web/CSS/color" target="_blank"><code>color</code></a> property in CSS.',default:!1},names2hex:{description:"If to convert color names to the hex equivalent.",default:!0},rgb2hex:{description:"If to convert RGB colors to the hex equivalent, does ignores RGBA.",default:!0},shorthex:{description:"If to convert 6 character hex colors to the 3 character equivalent where possible.",default:!0},shortname:{description:"If to convert hex colors to the color name, if the color name is shorter then the hex equivalent.",default:!0}}}},s=void 0,p={unversionedId:"plugins/convert-colors",id:"plugins/convert-colors",title:"Convert Colors",description:"Converts color references to the shortest equivalent.",source:"@site/.svgo/docs/03-plugins/convert-colors.mdx",sourceDirName:"03-plugins",slug:"/plugins/convert-colors",permalink:"/docs/plugins/convert-colors",draft:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/convert-colors.mdx",tags:[],version:"current",frontMatter:{title:"Convert Colors",svgo:{pluginId:"convertColors",defaultPlugin:!0,parameters:{currentColor:{description:'If to convert all instances of a color to <code>currentColor</code>. This means to inherit the active foreground color, for example in HTML5 this would be the <a href="https://developer.mozilla.org/docs/Web/CSS/color" target="_blank"><code>color</code></a> property in CSS.',default:!1},names2hex:{description:"If to convert color names to the hex equivalent.",default:!0},rgb2hex:{description:"If to convert RGB colors to the hex equivalent, does ignores RGBA.",default:!0},shorthex:{description:"If to convert 6 character hex colors to the 3 character equivalent where possible.",default:!0},shortname:{description:"If to convert hex colors to the color name, if the color name is shorter then the hex equivalent.",default:!0}}}},sidebar:"docsSidebar",previous:{title:"Collapse Groups",permalink:"/docs/plugins/collapse-groups"},next:{title:"Convert Ellipse to Circle",permalink:"/docs/plugins/convert-ellipse-to-circle"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},m=u("PluginUsage"),g=u("PluginParams"),f=u("PluginDemo"),h={toc:d},v="wrapper";function k(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)(v,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Converts color references to the shortest equivalent."),(0,a.kt)("p",null,"Colors can be represented in various notations, the following table showcases some equivalent colors:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"rgb()"),(0,a.kt)("th",{parentName:"tr",align:null},"#rrggbb"),(0,a.kt)("th",{parentName:"tr",align:null},"#rgb"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"red")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rgb(255, 0, 0)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"#ff0000")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"#f00"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"orange")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rgb(255, 165, 0)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"#ffa500")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"yellow")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rgb(255, 255, 0)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"#ffff00")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"#ff0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"green")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rgb(0, 128, 0)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"#008000")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"blue")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rgb(0, 0, 255)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"#0000FF")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"#00f"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"purple")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rgb(128, 0, 128)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"#800080")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"It makes no difference which format is received by a client, and each one has wide support across browsers and image viewing software."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(m,{mdxType:"PluginUsage"}),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)(g,{mdxType:"PluginParams"}),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)(f,{mdxType:"PluginDemo"}),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/svg/svgo/blob/main/plugins/convertColors.js"},"https://github.com/svg/svgo/blob/main/plugins/convertColors.js"))))}k.isMDXComponent=!0}}]);