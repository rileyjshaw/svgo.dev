"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[7903],{1806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(5893),o=t(1151);const r={title:"Remove XLink",svgo:{pluginId:"removeXlink",parameters:{includeLegacy:{description:"If to update references to XLink in elements that don't support the SVG 2 href attribute, like <code>&lt;filter&gt;</code> and <code>&lt;tref&gt;</code>.",default:!1}}}},s=void 0,l={id:"plugins/remove-xlink",title:"Remove XLink",description:"Removes XLink namespace prefixes and converts references to XLink attributes to the native SVG equivalent by performing the following operations:",source:"@site/.svgo/docs/03-plugins/remove-xlink.mdx",sourceDirName:"03-plugins",slug:"/plugins/remove-xlink",permalink:"/docs/plugins/remove-xlink",draft:!1,unlisted:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/remove-xlink.mdx",tags:[],version:"current",frontMatter:{title:"Remove XLink",svgo:{pluginId:"removeXlink",parameters:{includeLegacy:{description:"If to update references to XLink in elements that don't support the SVG 2 href attribute, like <code>&lt;filter&gt;</code> and <code>&lt;tref&gt;</code>.",default:!1}}}},sidebar:"docsSidebar",previous:{title:"Remove ViewBox",permalink:"/docs/plugins/remove-viewbox"},next:{title:"Remove XML Declaration",permalink:"/docs/plugins/remove-xml-proc-inst"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components},{PluginDemo:t,PluginParams:r,PluginUsage:s}=n;return t||p("PluginDemo",!0),r||p("PluginParams",!0),s||p("PluginUsage",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Removes XLink namespace prefixes and converts references to XLink attributes to the native SVG equivalent by performing the following operations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Convert ",(0,i.jsx)(n.code,{children:"*:href"})," to ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/SVG/Attribute/href",children:(0,i.jsx)(n.code,{children:"href"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Convert ",(0,i.jsx)(n.code,{children:"*:show"})," to ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/SVG/Attribute/target",children:(0,i.jsx)(n.code,{children:"target"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Convert ",(0,i.jsx)(n.code,{children:"*:title"})," to ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/SVG/Element/title",children:(0,i.jsx)(n.code,{children:"<title>"})}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Drop all other references to the XLink namespace."}),"\n",(0,i.jsx)(n.li,{children:"Remove XLink namespace declarations."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"When using this plugin, it's recommended to put it toward the end of your pipeline. Other SVGO plugins may add the XLink namespace, and these won't be migrated if they're added after this plugin has already executed."})}),"\n",(0,i.jsxs)(n.p,{children:["In most cases this will remove all references to XLink, but if legacy elements that are deprecated or removed in SVG 2 are found, the references are preserved as those elements do not support the SVG 2 ",(0,i.jsx)(n.code,{children:"href"})," attribute. You can set ",(0,i.jsx)(n.code,{children:"includeLegacy"})," to ",(0,i.jsx)(n.code,{children:"true"})," to apply the plugin in this case too."]}),"\n",(0,i.jsxs)(n.p,{children:["The following support ",(0,i.jsx)(n.code,{children:"xlink:href"})," but not the SVG 2 ",(0,i.jsx)(n.code,{children:"href"})," attribute:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/SVG/Element/cursor",children:(0,i.jsx)(n.code,{children:"<cursor>"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/SVG/Element/filter",children:(0,i.jsx)(n.code,{children:"<filter>"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/SVG/Element/font-face-uri",children:(0,i.jsx)(n.code,{children:"<font-face-uri>"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/SVG/Element/glyphRef",children:(0,i.jsx)(n.code,{children:"<glyphRef>"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/SVG/Element/tref",children:(0,i.jsx)(n.code,{children:"<tref>"})})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["It's recommended to use this plugin if you intend to inline SVGs into an HTML document, ",(0,i.jsx)(n.code,{children:"includeLegacy"})," can be safely set to ",(0,i.jsx)(n.code,{children:"true"})," in this case too. HTML does not support explicit namespaces, so namespace prefixes are ignored by the browser anyway."]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"This replaces XLink with features that are only supported in the SVGO 2 spec, and so breaks compatibility with the SVG 1.1."})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n.h2,{id:"demo",children:"Demo"}),"\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/svg/svgo/blob/main/plugins/removeXlink.js",children:"https://github.com/svg/svgo/blob/main/plugins/removeXlink.js"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);