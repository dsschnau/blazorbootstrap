"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[42016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||s;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74404:(e,t,r)=>{r.d(t,{ZP:()=>c});var n=r(87462),a=r(67294),s=r(3905);class o extends a.Component{constructor(e){super(e),this.name=this.props.name||"docsblazorbootstrapcom",this.serve=this.props.serve||"CWYICKJI",this.script=this.props.script||null,this.placement=this.props.placement||"",this.fallback=this.props.fallback||null,this.showFallback=!1}adShowing=()=>null!==document.getElementById(`${this.name} #carbonads`);componentDidMount=()=>{let e=document.createElement("script");e.defer=!!this.script,e.async=!0,e.id=this.script?"":"_carbonads_js",e.type="text/javascript",e.src=this.script||`//cdn.carbonads.com/carbon.js?serve=${this.serve}&placement=${this.placement}`,e.onerror=()=>{this.showFallback=!0,this.forceUpdate()},e.addEventListener("load",(()=>{this.adShowing||_.invoke(window._carbonads,"refresh")})),document.querySelector(`#${this.name}`).appendChild(e)};render(){return this.showFallback&&this.fallback?this.fallback:a.createElement("div",{id:this.name})}}const l=o,i={toc:[]},p="wrapper";function c(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l,{mdxType:"CarbonAd"}))}c.isMDXComponent=!0},77179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),s=r(74404);const o={id:"blazor-webassembly-net-8",sidebar_label:"Blazor WebAssembly (.NET 8)",sidebar_position:1,title:"Blazor WebAssembly (.NET 8)"},l="Getting started - Blazor WebAssembly (.NET 8)",i={unversionedId:"getting-started/blazor-webassembly-net-8",id:"getting-started/blazor-webassembly-net-8",title:"Blazor WebAssembly (.NET 8)",description:"Get started with the Enterprise-class Blazor Bootstrap Component library built on the Blazor and Bootstrap CSS framework.",source:"@site/docs/01-getting-started/01-a-getting-started-webassembly-NET-8.mdx",sourceDirName:"01-getting-started",slug:"/getting-started/blazor-webassembly-net-8",permalink:"/getting-started/blazor-webassembly-net-8",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/01-getting-started/01-a-getting-started-webassembly-NET-8.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"blazor-webassembly-net-8",sidebar_label:"Blazor WebAssembly (.NET 8)",sidebar_position:1,title:"Blazor WebAssembly (.NET 8)"},sidebar:"tutorialSidebar",next:{title:"Blazor WebApp Server (.NET 8)",permalink:"/getting-started/blazor-webapp-server-global-net-8"}},p={},c=[{value:"Install Nuget Package",id:"install-nuget-package",level:2},{value:"Add CSS references",id:"add-css-references",level:2},{value:"Add script references",id:"add-script-references",level:2},{value:"Register services",id:"register-services",level:2},{value:"Remove default references",id:"remove-default-references",level:2},{value:"Starter template",id:"starter-template",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"index.html",id:"indexhtml",level:3},{value:"Program.cs",id:"programcs",level:3},{value:"_Imports.razor",id:"_importsrazor",level:3},{value:"MainLayout.razor",id:"mainlayoutrazor",level:3}],m={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started---blazor-webassembly-net-8"},"Getting started - Blazor WebAssembly (.NET 8)"),(0,a.kt)("p",null,"Get started with the Enterprise-class Blazor Bootstrap Component library built on the Blazor and Bootstrap CSS framework."),(0,a.kt)(s.ZP,{mdxType:"CarbonAd"}),(0,a.kt)("h2",{id:"install-nuget-package"},"Install Nuget Package"),(0,a.kt)("p",null,"Looking to quickly add ",(0,a.kt)("strong",{parentName:"p"},"Blazor Bootstrap")," to your project? Use NuGet package manager."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Install-Package Blazor.Bootstrap -Version 1.10.5\n")),(0,a.kt)("h2",{id:"add-css-references"},"Add CSS references"),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},'<base href="/" />')," tag in the ",(0,a.kt)("strong",{parentName:"p"},"head")," section of the ",(0,a.kt)("strong",{parentName:"p"},"wwwroot/index.html")," file, add the following references:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />\n<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" rel="stylesheet" />\n<link href="_content/Blazor.Bootstrap/blazor.bootstrap.css" rel="stylesheet" />\n')),(0,a.kt)("h2",{id:"add-script-references"},"Add script references"),(0,a.kt)("p",null,"Insert the following references into the ",(0,a.kt)("strong",{parentName:"p"},"body")," section of the ",(0,a.kt)("strong",{parentName:"p"},"wwwroot/index.html")," file, immediately after the ",(0,a.kt)("strong",{parentName:"p"},"_framework/blazor.webassembly.js")," reference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"><\/script>\n\x3c!-- Add chart.js reference if chart components are used in your application. --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.0.1/chart.umd.js" integrity="sha512-gQhCDsnnnUfaRzD8k1L5llCCV6O9HN09zClIzzeJ8OJ9MpGmIlCxm+pdCkqTwqJ4JcjbojFr79rl2F1mzcoLMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n\x3c!-- Add chartjs-plugin-datalabels.min.js reference if chart components with data label feature is used in your application. --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.2.0/chartjs-plugin-datalabels.min.js" integrity="sha512-JPcRR8yFa8mmCsfrw4TNte1ZvF1e3+1SdGMslZvmrzDYxS69J7J49vkFL8u6u8PlPJK+H3voElBtUCzaXj+6ig==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n<script src="_content/Blazor.Bootstrap/blazor.bootstrap.js"><\/script>\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("strong",{parentName:"p"},"chart.js")," reference is optional. Include it only when the ",(0,a.kt)("strong",{parentName:"p"},"Chart")," components are used in the application.")),(0,a.kt)("h2",{id:"register-services"},"Register services"),(0,a.kt)("p",null,"Add Blazor Bootstrap service in the ",(0,a.kt)("strong",{parentName:"p"},"Program.cs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"builder.Services.AddBlazorBootstrap();\n")),(0,a.kt)("p",null,"Register tag helpers in ",(0,a.kt)("strong",{parentName:"p"},"_Imports.razor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-razor",metastring:"showLineNumbers",showLineNumbers:!0},"@using BlazorBootstrap;\n")),(0,a.kt)("h2",{id:"remove-default-references"},"Remove default references"),(0,a.kt)("p",null,"The default Blazor template includes demonstration code and Bootstrap. To remove these components, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Delete the ",(0,a.kt)("strong",{parentName:"p"},"bootstrap")," folder from the ",(0,a.kt)("strong",{parentName:"p"},"wwwroot")," directory:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Delete the ",(0,a.kt)("strong",{parentName:"li"},"wwwroot/css/bootstrap")," folder."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove the following line from ",(0,a.kt)("strong",{parentName:"p"},"wwwroot/index.html")," file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link href="css/bootstrap/bootstrap.min.css" rel="stylesheet" />\n')))),(0,a.kt)("h2",{id:"starter-template"},"Starter template"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET8.BlazorWebAssemblyStandaloneApp"},"GitHub Repo: Blazor Bootstrap - Blazor WebAssembly Standalone App (.NET 8)")),(0,a.kt)("img",{src:"https://i.imgur.com/2SuR7oA.png",alt:"Blazor Bootstrap - Blazor WebAssembly Standalone App"}),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("h3",{id:"indexhtml"},"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"{9-11,32-37} showLineNumbers","{9-11,32-37}":!0,showLineNumbers:!0},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>NET8.BlazorWebAssemblyStandaloneApp</title>\n    <base href="/" />\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" rel="stylesheet" />\n    <link href="_content/Blazor.Bootstrap/blazor.bootstrap.css" rel="stylesheet" />\n    <link rel="stylesheet" href="css/app.css" />\n    <link rel="icon" type="image/png" href="favicon.png" />\n    <link href="NET8.BlazorWebAssemblyStandaloneApp.styles.css" rel="stylesheet" />\n</head>\n\n<body>\n    <div id="app">\n        <svg class="loading-progress">\n            <circle r="40%" cx="50%" cy="50%" />\n            <circle r="40%" cx="50%" cy="50%" />\n        </svg>\n        <div class="loading-progress-text"></div>\n    </div>\n\n    <div id="blazor-error-ui">\n        An unhandled error has occurred.\n        <a href="" class="reload">Reload</a>\n        <a class="dismiss">\ud83d\uddd9</a>\n    </div>\n    <script src="_framework/blazor.webassembly.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"><\/script>\n    \x3c!-- Add chart.js reference if chart components are used in your application. --\x3e\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.0.1/chart.umd.js" integrity="sha512-gQhCDsnnnUfaRzD8k1L5llCCV6O9HN09zClIzzeJ8OJ9MpGmIlCxm+pdCkqTwqJ4JcjbojFr79rl2F1mzcoLMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n    \x3c!-- Add chartjs-plugin-datalabels.min.js reference if chart components with data label feature is used in your application. --\x3e\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.2.0/chartjs-plugin-datalabels.min.js" integrity="sha512-JPcRR8yFa8mmCsfrw4TNte1ZvF1e3+1SdGMslZvmrzDYxS69J7J49vkFL8u6u8PlPJK+H3voElBtUCzaXj+6ig==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n    <script src="_content/Blazor.Bootstrap/blazor.bootstrap.js"><\/script>\n</body>\n\n</html>\n')),(0,a.kt)("h3",{id:"programcs"},"Program.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{11} showLineNumbers","{11}":!0,showLineNumbers:!0},'using Microsoft.AspNetCore.Components.Web;\nusing Microsoft.AspNetCore.Components.WebAssembly.Hosting;\nusing NET8.BlazorWebAssemblyStandaloneApp;\n\nvar builder = WebAssemblyHostBuilder.CreateDefault(args);\nbuilder.RootComponents.Add<App>("#app");\nbuilder.RootComponents.Add<HeadOutlet>("head::after");\n\nbuilder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });\n\nbuilder.Services.AddBlazorBootstrap();\n\nawait builder.Build().RunAsync();\n')),(0,a.kt)("h3",{id:"_importsrazor"},"_Imports.razor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-razor",metastring:"{11} showLineNumbers","{11}":!0,showLineNumbers:!0},"@using System.Net.Http\n@using System.Net.Http.Json\n@using Microsoft.AspNetCore.Components.Forms\n@using Microsoft.AspNetCore.Components.Routing\n@using Microsoft.AspNetCore.Components.Web\n@using Microsoft.AspNetCore.Components.Web.Virtualization\n@using Microsoft.AspNetCore.Components.WebAssembly.Http\n@using Microsoft.JSInterop\n@using NET8.BlazorWebAssemblyStandaloneApp\n@using NET8.BlazorWebAssemblyStandaloneApp.Layout\n@using BlazorBootstrap;\n")),(0,a.kt)("h3",{id:"mainlayoutrazor"},"MainLayout.razor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-razor",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@inherits LayoutComponentBase\n\n<div class="bb-page">\n\n    <Sidebar @ref="sidebar"\n             IconName="IconName.BootstrapFill"\n             Title="Blazor Bootstrap"\n             DataProvider="SidebarDataProvider" />\n\n    <main>\n        <div class="bb-top-row px-4 d-flex justify-content-end">\n            <a href="https://docs.microsoft.com/aspnet/" target="_blank">About</a>\n        </div>\n\n        <article class="content px-4">\n            <div class="py-2">@Body</div>\n        </article>\n    </main>\n\n</div>\n\n@code {\n    Sidebar sidebar;\n    IEnumerable<NavItem> navItems;\n\n    private async Task<SidebarDataProviderResult> SidebarDataProvider(SidebarDataProviderRequest request)\n    {\n        if (navItems is null)\n            navItems = GetNavItems();\n\n        return await Task.FromResult(request.ApplyTo(navItems));\n    }\n\n    private IEnumerable<NavItem> GetNavItems()\n    {\n        navItems = new List<NavItem>\n        {\n            new NavItem { Id = "1", Href = "/", IconName = IconName.HouseDoorFill, Text = "Home", Match=NavLinkMatch.All},\n            new NavItem { Id = "2", Href = "/counter", IconName = IconName.PlusSquareFill, Text = "Counter"},\n            new NavItem { Id = "3", Href = "/weather", IconName = IconName.Table, Text = "Fetch Data"},\n        };\n\n        return navItems;\n    }\n}\n')))}u.isMDXComponent=!0}}]);