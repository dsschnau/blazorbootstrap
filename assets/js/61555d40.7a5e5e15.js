"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[46583],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,d=u["".concat(i,".").concat(b)]||u[b]||c[b]||o;return r?a.createElement(d,l(l({ref:t},m),{},{components:r})):a.createElement(d,l({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},18040:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={id:"blazor-server",sidebar_label:"Blazor Server",sidebar_position:2,title:"Blazor Server"},l="Layout Setup - Blazor WebAssembly",s={unversionedId:"layout/blazor-server",id:"layout/blazor-server",title:"Blazor Server",description:"Get started with the Enterprise-class Blazor Bootstrap Component library built on the Blazor and Bootstrap CSS framework.",source:"@site/docs/02-layout/getting-started-server.md",sourceDirName:"02-layout",slug:"/layout/blazor-server",permalink:"/layout/blazor-server",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/02-layout/getting-started-server.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"blazor-server",sidebar_label:"Blazor Server",sidebar_position:2,title:"Blazor Server"},sidebar:"tutorialSidebar",previous:{title:"Blazor WebAssembly",permalink:"/layout/blazor-webassembly"},next:{title:"Icons",permalink:"/content/icons"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Starter templates",id:"starter-templates",level:2},{value:".NET 6",id:"net-6",level:3},{value:".NET 7",id:"net-7",level:3}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"layout-setup---blazor-webassembly"},"Layout Setup - Blazor WebAssembly"),(0,n.kt)("p",null,"Get started with the Enterprise-class Blazor Bootstrap Component library built on the Blazor and Bootstrap CSS framework."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Assuming you followed the getting started docs for the initial setup."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Blazor WebAssembly Project:")," Follow the ",(0,n.kt)("a",{parentName:"li",href:"/getting-started/blazor-webassembly"},"getting started")," steps for the initial setup."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Blazor Server Project:")," Follow the ",(0,n.kt)("a",{parentName:"li",href:"/getting-started/blazor-server"},"getting started")," steps for the initial setup.")),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("p",null,"Replace ",(0,n.kt)("strong",{parentName:"p"},"MainLayout.razor")," page code with the below code."),(0,n.kt)("admonition",{title:"NOTE",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Remove all the CSS content from the ",(0,n.kt)("strong",{parentName:"p"},"Shared/MainLayout.razor.css")," file.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@inherits LayoutComponentBase\n\n<div class="bb-page">\n\n    <Sidebar @ref="sidebar"\n             IconName="IconName.BootstrapFill"\n             Title="Blazor Bootstrap"\n             DataProvider="SidebarDataProvider" />\n\n    <main>\n        <div class="bb-top-row px-4 d-flex justify-content-end">\n            <a href="https://docs.microsoft.com/aspnet/" target="_blank">About</a>\n        </div>\n\n        <article class="content px-4">\n            <div class="py-2">\n                @Body\n            </div>\n        </article>\n    </main>\n\n</div>\n\n@code {\n    private Sidebar sidebar = default!;\n    private IEnumerable<NavItem> navItems = default!;\n\n    private async Task<SidebarDataProviderResult> SidebarDataProvider(SidebarDataProviderRequest request)\n    {\n        if (navItems is null)\n            navItems = GetNavItems();\n\n        return await Task.FromResult(request.ApplyTo(navItems));\n    }\n\n    private IEnumerable<NavItem> GetNavItems()\n    {\n        navItems = new List<NavItem>\n        {\n            new NavItem { Id = "1", Href = "/", IconName = IconName.HouseDoorFill, Text = "Home", Match=NavLinkMatch.All},\n            new NavItem { Id = "2", Href = "/counter", IconName = IconName.PlusSquareFill, Text = "Counter"},\n            new NavItem { Id = "3", Href = "/fetchdata", IconName = IconName.Table, Text = "Fetch Data"},\n        };\n\n        return navItems;\n    }\n}\n')),(0,n.kt)("h2",{id:"starter-templates"},"Starter templates"),(0,n.kt)("h3",{id:"net-6"},".NET 6"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET6.BlazorWebAssemblyApp"},"Blazor Bootstrap - Blazor WebAssembly App")),(0,n.kt)("img",{src:"https://i.imgur.com/aRV3rJm.png",alt:"Blazor Bootstrap - Blazor WebAssembly App"}))),(0,n.kt)("h3",{id:"net-7"},".NET 7"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET7.BlazorWebAssemblyApp"},"Blazor Bootstrap - Blazor WebAssembly App")),(0,n.kt)("img",{src:"https://i.imgur.com/4P8u0HR.png",alt:"Blazor Bootstrap - Blazor WebAssembly App"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET7.BlazorWebAssemblyAppEmpty"},"Blazor Bootstrap - Blazor Empty WebAssembly App")),(0,n.kt)("img",{src:"https://i.imgur.com/CBEoZ6P.png",alt:"Blazor Bootstrap - Blazor Empty WebAssembly App"}))))}c.isMDXComponent=!0}}]);