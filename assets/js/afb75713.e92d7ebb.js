"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[6063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74404:(e,t,r)=>{r.d(t,{ZP:()=>c});var n=r(87462),a=r(67294),o=r(3905);class s extends a.Component{constructor(e){super(e),this.name=this.props.name||"docsblazorbootstrapcom",this.serve=this.props.serve||"CWYICKJI",this.script=this.props.script||null,this.placement=this.props.placement||"",this.fallback=this.props.fallback||null,this.showFallback=!1}adShowing=()=>null!==document.getElementById(`${this.name} #carbonads`);componentDidMount=()=>{let e=document.createElement("script");e.defer=!!this.script,e.async=!0,e.id=this.script?"":"_carbonads_js",e.type="text/javascript",e.src=this.script||`//cdn.carbonads.com/carbon.js?serve=${this.serve}&placement=${this.placement}`,e.onerror=()=>{this.showFallback=!0,this.forceUpdate()},e.addEventListener("load",(()=>{this.adShowing||_.invoke(window._carbonads,"refresh")})),document.querySelector(`#${this.name}`).appendChild(e)};render(){return this.showFallback&&this.fallback?this.fallback:a.createElement("div",{id:this.name})}}const l=s,i={toc:[]},p="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"CarbonAd"}))}c.isMDXComponent=!0},88367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(74404);const s={id:"blazor-webapp-auto-global-net-8",sidebar_label:"Blazor WebApp Auto (.NET 8)",sidebar_position:3,title:"Blazor WebApp Auto (.NET 8)"},l="Getting started - Blazor WebApp (.NET 8) - Interactive render mode Auto - Global location",i={unversionedId:"getting-started/blazor-webapp-auto-global-net-8",id:"getting-started/blazor-webapp-auto-global-net-8",title:"Blazor WebApp Auto (.NET 8)",description:"Get started with the Enterprise-class Blazor Bootstrap Component library built on the Blazor and Bootstrap CSS frameworks.",source:"@site/docs/01-getting-started/01-c-getting-started-webapp-auto-global-NET-8.mdx",sourceDirName:"01-getting-started",slug:"/getting-started/blazor-webapp-auto-global-net-8",permalink:"/getting-started/blazor-webapp-auto-global-net-8",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/01-getting-started/01-c-getting-started-webapp-auto-global-NET-8.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"blazor-webapp-auto-global-net-8",sidebar_label:"Blazor WebApp Auto (.NET 8)",sidebar_position:3,title:"Blazor WebApp Auto (.NET 8)"},sidebar:"tutorialSidebar",previous:{title:"Blazor WebApp Server (.NET 8)",permalink:"/getting-started/blazor-webapp-server-global-net-8"},next:{title:"MAUI Blazor Hybrid App (.NET 8)",permalink:"/getting-started/maui-blazor-net-8"}},p={},c=[{value:"Server Project",id:"server-project",level:2},{value:"Install Nuget Package",id:"install-nuget-package",level:3},{value:"Add CSS references",id:"add-css-references",level:3},{value:"Add script references",id:"add-script-references",level:3},{value:"Register services",id:"register-services",level:3},{value:"Remove default references",id:"remove-default-references",level:3},{value:"Client Project",id:"client-project",level:2},{value:"Install Nuget Package",id:"install-nuget-package-1",level:3},{value:"Register services",id:"register-services-1",level:3},{value:"Starter template",id:"starter-template",level:2},{value:"Sample Code - Server",id:"sample-code---server",level:2},{value:"App.razor",id:"apprazor",level:3},{value:"Program.cs",id:"programcs",level:3},{value:"_Imports.razor",id:"_importsrazor",level:3},{value:"Sample Code - Client",id:"sample-code---client",level:2},{value:"Program.cs",id:"programcs-1",level:3},{value:"_Imports.razor",id:"_importsrazor-1",level:3},{value:"MainLayout.razor",id:"mainlayoutrazor",level:3}],d={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started---blazor-webapp-net-8---interactive-render-mode-auto---global-location"},"Getting started - Blazor WebApp (.NET 8) - Interactive render mode Auto - Global location"),(0,a.kt)("p",null,"Get started with the Enterprise-class Blazor Bootstrap Component library built on the Blazor and Bootstrap CSS frameworks."),(0,a.kt)(o.ZP,{mdxType:"CarbonAd"}),(0,a.kt)("h2",{id:"server-project"},"Server Project"),(0,a.kt)("h3",{id:"install-nuget-package"},"Install Nuget Package"),(0,a.kt)("p",null,"Use NuGet package manager."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Install-Package Blazor.Bootstrap -Version 3.0.0-preview.1\n")),(0,a.kt)("h3",{id:"add-css-references"},"Add CSS references"),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},'<base href="/" />')," tag in the ",(0,a.kt)("strong",{parentName:"p"},"head")," section of the ",(0,a.kt)("strong",{parentName:"p"},"Components/App.razor"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">\n<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet" />\n<link href="_content/Blazor.Bootstrap/blazor.bootstrap.css" rel="stylesheet" />\n')),(0,a.kt)("h3",{id:"add-script-references"},"Add script references"),(0,a.kt)("p",null,"Insert the following references into the ",(0,a.kt)("strong",{parentName:"p"},"body")," section of the ",(0,a.kt)("strong",{parentName:"p"},"Components/App.razor")," file, immediately after the ",(0,a.kt)("strong",{parentName:"p"},"_framework/blazor.web.js")," reference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"><\/script>\n\x3c!-- Add chart.js reference if chart components are used in your application. --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.0.1/chart.umd.js" integrity="sha512-gQhCDsnnnUfaRzD8k1L5llCCV6O9HN09zClIzzeJ8OJ9MpGmIlCxm+pdCkqTwqJ4JcjbojFr79rl2F1mzcoLMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n\x3c!-- Add chartjs-plugin-datalabels.min.js reference if chart components with data label feature is used in your application. --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.2.0/chartjs-plugin-datalabels.min.js" integrity="sha512-JPcRR8yFa8mmCsfrw4TNte1ZvF1e3+1SdGMslZvmrzDYxS69J7J49vkFL8u6u8PlPJK+H3voElBtUCzaXj+6ig==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n\x3c!-- Add sortable.js reference if SortableList component is used in your application. --\x3e\n<script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"><\/script>\n<script src="_content/Blazor.Bootstrap/blazor.bootstrap.js"><\/script>\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"chart.js")," reference is optional. Add when the ",(0,a.kt)("strong",{parentName:"p"},"Chart")," components are used in the application.")),(0,a.kt)("h3",{id:"register-services"},"Register services"),(0,a.kt)("p",null,"Add Blazor Bootstrap service in the ",(0,a.kt)("strong",{parentName:"p"},"Program.cs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"builder.Services.AddBlazorBootstrap();\n")),(0,a.kt)("p",null,"Register tag helpers in ",(0,a.kt)("strong",{parentName:"p"},"Components/_Imports.razor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-razor"},"@using BlazorBootstrap;\n")),(0,a.kt)("h3",{id:"remove-default-references"},"Remove default references"),(0,a.kt)("p",null,"The default Blazor template includes demonstration code and Bootstrap. To remove these components, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Delete the ",(0,a.kt)("strong",{parentName:"p"},"bootstrap")," folder from the ",(0,a.kt)("strong",{parentName:"p"},"wwwroot")," directory:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Delete the ",(0,a.kt)("strong",{parentName:"li"},"wwwroot/css/bootstrap")," folder."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove the following line from ",(0,a.kt)("strong",{parentName:"p"},"Components/App.razor")," file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link rel="stylesheet" href="bootstrap/bootstrap.min.css" />\n')))),(0,a.kt)("h2",{id:"client-project"},"Client Project"),(0,a.kt)("h3",{id:"install-nuget-package-1"},"Install Nuget Package"),(0,a.kt)("p",null,"Use NuGet package manager."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Install-Package Blazor.Bootstrap -Version 2.2.1\n")),(0,a.kt)("h3",{id:"register-services-1"},"Register services"),(0,a.kt)("p",null,"Add Blazor Bootstrap service in the ",(0,a.kt)("strong",{parentName:"p"},"Program.cs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"builder.Services.AddBlazorBootstrap();\n")),(0,a.kt)("p",null,"Register tag helpers in ",(0,a.kt)("strong",{parentName:"p"},"_Imports.razor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-razor"},"@using BlazorBootstrap;\n")),(0,a.kt)("h2",{id:"starter-template"},"Starter template"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/Net8.BlazorAutoGlobal"},"GitHub Repo: Blazor Bootstrap - Blazor Web App - Interactive Render Mode Auto - Interactive Location Global (.NET 8)")),(0,a.kt)("img",{src:"https://i.imgur.com/m2lUTME.png",alt:"Blazor Bootstrap - Blazor Web App - Interactive Render Mode Auto - Interactive Location Global"}),(0,a.kt)("h2",{id:"sample-code---server"},"Sample Code - Server"),(0,a.kt)("h3",{id:"apprazor"},"App.razor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"{8-10,20-25} showLineNumbers","{8-10,20-25}":!0,showLineNumbers:!0},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <base href="/" />\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet" />\n    <link href="_content/Blazor.Bootstrap/blazor.bootstrap.css" rel="stylesheet" />\n    <link rel="stylesheet" href="app.css" />\n    <link rel="stylesheet" href="Net8.BlazorAutoGlobal.styles.css" />\n    <link rel="icon" type="image/png" href="favicon.png" />\n    <HeadOutlet @rendermode="@InteractiveAuto" />\n</head>\n\n<body>\n    <Routes @rendermode="@InteractiveAuto" />\n    <script src="_framework/blazor.web.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"><\/script>\n    \x3c!-- Add chart.js reference if chart components are used in your application. --\x3e\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.0.1/chart.umd.js" integrity="sha512-gQhCDsnnnUfaRzD8k1L5llCCV6O9HN09zClIzzeJ8OJ9MpGmIlCxm+pdCkqTwqJ4JcjbojFr79rl2F1mzcoLMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n    \x3c!-- Add chartjs-plugin-datalabels.min.js reference if chart components with data label feature is used in your application. --\x3e\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.2.0/chartjs-plugin-datalabels.min.js" integrity="sha512-JPcRR8yFa8mmCsfrw4TNte1ZvF1e3+1SdGMslZvmrzDYxS69J7J49vkFL8u6u8PlPJK+H3voElBtUCzaXj+6ig==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n    \x3c!-- Add sortable.js reference if SortableList component is used in your application. --\x3e\n    <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"><\/script>\n    <script src="_content/Blazor.Bootstrap/blazor.bootstrap.js"><\/script>\n</body>\n\n</html>\n')),(0,a.kt)("h3",{id:"programcs"},"Program.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{11} showLineNumbers","{11}":!0,showLineNumbers:!0},'using Net8.BlazorAutoGlobal.Client.Pages;\nusing Net8.BlazorAutoGlobal.Components;\n\nvar builder = WebApplication.CreateBuilder(args);\n\n// Add services to the container.\nbuilder.Services.AddRazorComponents()\n    .AddInteractiveServerComponents()\n    .AddInteractiveWebAssemblyComponents();\n\nbuilder.Services.AddBlazorBootstrap();\n\nvar app = builder.Build();\n\n// Configure the HTTP request pipeline.\nif (app.Environment.IsDevelopment())\n{\n    app.UseWebAssemblyDebugging();\n}\nelse\n{\n    app.UseExceptionHandler("/Error", createScopeForErrors: true);\n    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.\n    app.UseHsts();\n}\n\napp.UseHttpsRedirection();\n\napp.UseStaticFiles();\napp.UseAntiforgery();\n\napp.MapRazorComponents<App>()\n    .AddInteractiveServerRenderMode()\n    .AddInteractiveWebAssemblyRenderMode()\n    .AddAdditionalAssemblies(typeof(Counter).Assembly);\n\napp.Run();\n\n')),(0,a.kt)("h3",{id:"_importsrazor"},"_Imports.razor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-razor",metastring:"{12} showLineNumbers","{12}":!0,showLineNumbers:!0},"@using System.Net.Http\n@using System.Net.Http.Json\n@using Microsoft.AspNetCore.Components.Forms\n@using Microsoft.AspNetCore.Components.Routing\n@using Microsoft.AspNetCore.Components.Web\n@using static Microsoft.AspNetCore.Components.Web.RenderMode\n@using Microsoft.AspNetCore.Components.Web.Virtualization\n@using Microsoft.JSInterop\n@using Net8.BlazorAutoGlobal\n@using Net8.BlazorAutoGlobal.Client\n@using Net8.BlazorAutoGlobal.Components\n@using BlazorBootstrap;\n")),(0,a.kt)("h2",{id:"sample-code---client"},"Sample Code - Client"),(0,a.kt)("h3",{id:"programcs-1"},"Program.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{5} showLineNumbers","{5}":!0,showLineNumbers:!0},"using Microsoft.AspNetCore.Components.WebAssembly.Hosting;\n\nvar builder = WebAssemblyHostBuilder.CreateDefault(args);\n\nbuilder.Services.AddBlazorBootstrap();\n\nawait builder.Build().RunAsync();\n")),(0,a.kt)("h3",{id:"_importsrazor-1"},"_Imports.razor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-razor",metastring:"{10} showLineNumbers","{10}":!0,showLineNumbers:!0},"@using System.Net.Http\n@using System.Net.Http.Json\n@using Microsoft.AspNetCore.Components.Forms\n@using Microsoft.AspNetCore.Components.Routing\n@using Microsoft.AspNetCore.Components.Web\n@using static Microsoft.AspNetCore.Components.Web.RenderMode\n@using Microsoft.AspNetCore.Components.Web.Virtualization\n@using Microsoft.JSInterop\n@using Net8.BlazorAutoGlobal.Client\n@using BlazorBootstrap;\n")),(0,a.kt)("h3",{id:"mainlayoutrazor"},"MainLayout.razor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-razor",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@inherits LayoutComponentBase\n\n<div class="bb-page">\n\n    <Sidebar @ref="sidebar"\n             IconName="IconName.BootstrapFill"\n             Title="Blazor Bootstrap"\n             DataProvider="SidebarDataProvider" />\n\n    <main>\n        <div class="bb-top-row px-4 d-flex justify-content-end">\n            <a href="https://docs.microsoft.com/aspnet/" target="_blank">About</a>\n        </div>\n\n        <article class="content px-4">\n            <div class="py-2">@Body</div>\n        </article>\n    </main>\n\n</div>\n\n@code {\n    Sidebar sidebar;\n    IEnumerable<NavItem> navItems;\n\n    private async Task<SidebarDataProviderResult> SidebarDataProvider(SidebarDataProviderRequest request)\n    {\n        if (navItems is null)\n            navItems = GetNavItems();\n\n        return await Task.FromResult(request.ApplyTo(navItems));\n    }\n\n    private IEnumerable<NavItem> GetNavItems()\n    {\n        navItems = new List<NavItem>\n                   {\n                       new NavItem { Id = "1", Href = "/", IconName = IconName.HouseDoorFill, Text = "Home", Match=NavLinkMatch.All},\n                       new NavItem { Id = "2", Href = "/counter", IconName = IconName.PlusSquareFill, Text = "Counter"},\n                       new NavItem { Id = "3", Href = "/weather", IconName = IconName.Table, Text = "Fetch Data"},\n                   };\n\n        return navItems;\n    }\n}\n\n<div id="blazor-error-ui">\n    An unhandled error has occurred.\n    <a href="" class="reload">Reload</a>\n    <a class="dismiss">\ud83d\uddd9</a>\n</div>\n')))}u.isMDXComponent=!0}}]);