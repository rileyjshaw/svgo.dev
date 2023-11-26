"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[8485],{8104:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var o=t(5893),n=t(1151);const l={title:"Remove Useless Stroke and Fill",svgo:{pluginId:"removeUselessStrokeAndFill",defaultPlugin:!0,parameters:{stroke:{description:"If to remove redundant strokes.",default:!0},fill:{description:"If to remove redundant fills.",default:!0},removeNone:{description:"If to remove elements where both the <code>fill</code> and <code>stroke</code> attributes are <code>none</code>.",default:!1}}}},r=void 0,i={id:"plugins/remove-useless-stroke-and-fill",title:"Remove Useless Stroke and Fill",description:"Removes useless stroke and fill attributes.",source:"@site/.svgo/docs/03-plugins/remove-useless-stroke-and-fill.mdx",sourceDirName:"03-plugins",slug:"/plugins/remove-useless-stroke-and-fill",permalink:"/docs/plugins/remove-useless-stroke-and-fill",draft:!1,unlisted:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/remove-useless-stroke-and-fill.mdx",tags:[],version:"current",frontMatter:{title:"Remove Useless Stroke and Fill",svgo:{pluginId:"removeUselessStrokeAndFill",defaultPlugin:!0,parameters:{stroke:{description:"If to remove redundant strokes.",default:!0},fill:{description:"If to remove redundant fills.",default:!0},removeNone:{description:"If to remove elements where both the <code>fill</code> and <code>stroke</code> attributes are <code>none</code>.",default:!1}}}},sidebar:"docsSidebar",previous:{title:"Remove Useless Defs",permalink:"/docs/plugins/remove-useless-defs"},next:{title:"Remove ViewBox",permalink:"/docs/plugins/remove-viewbox"}},d={},a=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components},{PluginDemo:t,PluginParams:l,PluginUsage:r}=s;return t||m("PluginDemo",!0),l||m("PluginParams",!0),r||m("PluginUsage",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["Removes useless ",(0,o.jsx)(s.code,{children:"stroke"})," and ",(0,o.jsx)(s.code,{children:"fill"})," attributes."]}),"\n",(0,o.jsxs)(s.p,{children:["Assigning these attributes can sometimes change nothing in the document. For example, in most cases assigning a ",(0,o.jsx)(s.code,{children:"stroke"})," color is redundant if the elements ",(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-width",children:(0,o.jsx)(s.code,{children:"stroke-width"})})," or ",(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-opacity",children:(0,o.jsx)(s.code,{children:"stroke-opacity"})})," is ",(0,o.jsx)(s.code,{children:"0"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(r,{}),"\n",(0,o.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(l,{}),"\n",(0,o.jsx)(s.h2,{id:"demo",children:"Demo"}),"\n",(0,o.jsx)(t,{}),"\n",(0,o.jsx)(s.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://github.com/svg/svgo/blob/main/plugins/removeUselessStrokeAndFill.js",children:"https://github.com/svg/svgo/blob/main/plugins/removeUselessStrokeAndFill.js"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function m(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>r});var o=t(7294);const n={},l=o.createContext(n);function r(e){const s=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(l.Provider,{value:s},e.children)}}}]);