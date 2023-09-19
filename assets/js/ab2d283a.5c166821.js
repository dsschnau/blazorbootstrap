"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[29891],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=p(n),u=i,c=d["".concat(s,".").concat(u)]||d[u]||g[u]||r;return n?a.createElement(c,l(l({ref:e},m),{},{components:n})):a.createElement(c,l({ref:e},m))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7770:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Blazor Pagination Component",description:"Use Blazor Bootstrap pagination component to indicate a series of related content exists across multiple pages.",image:"https://i.imgur.com/SCbZVd4.jpg",sidebar_label:"Pagination",sidebar_position:15},l="Blazor Pagination",o={unversionedId:"components/pagination",id:"components/pagination",title:"Blazor Pagination Component",description:"Use Blazor Bootstrap pagination component to indicate a series of related content exists across multiple pages.",source:"@site/docs/05-components/pagination.md",sourceDirName:"05-components",slug:"/components/pagination",permalink:"/components/pagination",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/05-components/pagination.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Blazor Pagination Component",description:"Use Blazor Bootstrap pagination component to indicate a series of related content exists across multiple pages.",image:"https://i.imgur.com/SCbZVd4.jpg",sidebar_label:"Pagination",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Offcanvas",permalink:"/components/offcanvas"},next:{title:"Placeholders",permalink:"/components/placeholders"}},s={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Callback Events",id:"callback-events",level:2},{value:"Examples",id:"examples",level:2},{value:"Pagination",id:"pagination",level:3},{value:"Working with icons",id:"working-with-icons",level:3},{value:"Disabled and active states",id:"disabled-and-active-states",level:3},{value:"Sizing",id:"sizing",level:3},{value:"Alignment",id:"alignment",level:3},{value:"Callback Events",id:"callback-events-1",level:3}],m={toc:p};function g(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blazor-pagination"},"Blazor Pagination"),(0,i.kt)("p",null,"Use Blazor Bootstrap pagination component to indicate a series of related content exists across multiple pages."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivePageNumber"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Active page number. Starts with 1."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Alignment")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the pagination alignment."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Alignment.None"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DisplayPages"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the maximum page links to be displayed."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FirstLinkIcon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IconName")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets first link icon."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FirstLinkText"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets first link text. ",(0,i.kt)("inlineCode",{parentName:"td"},"FirstLinkText")," is ignored if ",(0,i.kt)("inlineCode",{parentName:"td"},"FirstLinkIcon")," is specified."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"First")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LastLinkIcon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IconName")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets last link icon."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LastLinkText"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets last link text. ",(0,i.kt)("inlineCode",{parentName:"td"},"LastLinkText")," is ignored if ",(0,i.kt)("inlineCode",{parentName:"td"},"LastLinkIcon")," is specified."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Last")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NextLinkIcon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IconName")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets next link icon."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NextLinkText"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets next link text. ",(0,i.kt)("inlineCode",{parentName:"td"},"NextLinkText")," is ignored if ",(0,i.kt)("inlineCode",{parentName:"td"},"NextLinkIcon")," is specified."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Next")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PreviousLinkIcon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IconName")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets previous link icon."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PreviousLinkText"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets previous link text. ",(0,i.kt)("inlineCode",{parentName:"td"},"PreviousLinkText")," is ignored if ",(0,i.kt)("inlineCode",{parentName:"td"},"PreviousLinkIcon")," is specified."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Previous")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Size"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PaginationSize")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the pagination size."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TotalPages"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Total pages of data items."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"callback-events"},"Callback Events"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PageChanged"),(0,i.kt)("td",{parentName:"tr",align:null},"This event fires immediately when the page number is changed.")))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"We use a large block of connected links for our pagination, making links hard to miss and easily scalable - all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links."),(0,i.kt)("img",{src:"https://i.imgur.com/6wDZ4zP.jpg",alt:"Pagination - Examples"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Pagination TotalPages="8" />\n<Pagination TotalPages="10" />\n<Pagination TotalPages="13" />\n<Pagination TotalPages="25" />\n<Pagination TotalPages="100" />\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/pagination#examples"},"See demo here.")),(0,i.kt)("h3",{id:"working-with-icons"},"Working with icons"),(0,i.kt)("img",{src:"https://i.imgur.com/nhfGHfy.jpg",alt:"Pagination - Working with icons"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Pagination ActivePageNumber="1"\n            TotalPages="15"\n            DisplayPages="5"\n            FirstLinkIcon="IconName.ChevronDoubleLeft"\n            PreviousLinkIcon="IconName.ChevronLeft"\n            NextLinkIcon="IconName.ChevronRight"\n            LastLinkIcon="IconName.ChevronDoubleRight" />\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/pagination#working-with-icons"},"See demo here.")),(0,i.kt)("h3",{id:"disabled-and-active-states"},"Disabled and active states"),(0,i.kt)("img",{src:"https://i.imgur.com/SCbZVd4.jpg",alt:"Pagination - Disabled and active states"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Pagination ActivePageNumber="1" TotalPages="10" />\n<Pagination ActivePageNumber="3" TotalPages="10" />\n<Pagination ActivePageNumber="5" TotalPages="10" />\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/pagination#disabled-and-active-states"},"See demo here.")),(0,i.kt)("h3",{id:"sizing"},"Sizing"),(0,i.kt)("p",null,"Fancy larger or smaller pagination? Add ",(0,i.kt)("inlineCode",{parentName:"p"},'Size="PaginationSize.Small"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'Size="PaginationSize.Large"')," for additional sizes."),(0,i.kt)("img",{src:"https://i.imgur.com/2kMVncQ.jpg",alt:"Pagination - Sizing"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Pagination ActivePageNumber="5" TotalPages="5" Size="PaginationSize.Small" />\n<Pagination ActivePageNumber="5" TotalPages="5" />\n<Pagination ActivePageNumber="5" TotalPages="5" Size="PaginationSize.Large" />\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/pagination#sizing"},"See demo here.")),(0,i.kt)("h3",{id:"alignment"},"Alignment"),(0,i.kt)("img",{src:"https://i.imgur.com/RkpUdJu.jpg",alt:"Pagination - Alignment"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Pagination ActivePageNumber="2" TotalPages="5" />\n<Pagination ActivePageNumber="2" TotalPages="5" Alignment="Alignment.Center" />\n<Pagination ActivePageNumber="2" TotalPages="5" Alignment="Alignment.End" />\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/pagination#alignment"},"See demo here.")),(0,i.kt)("h3",{id:"callback-events-1"},"Callback Events"),(0,i.kt)("img",{src:"https://i.imgur.com/VsB3ZYW.jpg",alt:"Pagination - Callback Events"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Pagination ActivePageNumber="@currentPageNumber"\n            TotalPages="10"\n            PageChanged="OnPageChangedAsync" />\n\n<text>Current Page Number: @currentPageNumber</text>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    int currentPageNumber = 2;\n\n    private async Task OnPageChangedAsync(int newPageNumber)\n    {\n        await Task.Run(() => { currentPageNumber = newPageNumber; });\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/pagination#events"},"See demo here.")))}g.isMDXComponent=!0}}]);