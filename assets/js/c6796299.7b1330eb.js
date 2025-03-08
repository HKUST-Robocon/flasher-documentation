"use strict";(self.webpackChunkflasher_documentation=self.webpackChunkflasher_documentation||[]).push([[182],{3905:(A,e,t)=>{t.d(e,{Zo:()=>f,kt:()=>v});var n=t(7294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function l(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var i=n.createContext({}),s=function(A){var e=n.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):l(l({},e),A)),t},f=function(A){var e=s(A.components);return n.createElement(i.Provider,{value:e},A.children)},p="mdxType",c={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,a=A.originalType,i=A.parentName,f=o(A,["components","mdxType","originalType","parentName"]),p=s(t),d=r,v=p["".concat(i,".").concat(d)]||p[d]||c[d]||a;return t?n.createElement(v,l(l({ref:e},f),{},{components:t})):n.createElement(v,l({ref:e},f))}));function v(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=A,o[p]="string"==typeof A?A:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},858:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const a={},l="Installing Flasher",o={unversionedId:"installing_flasher",id:"installing_flasher",title:"Installing Flasher",description:"This page provides guideline on installing the flasher into your computer.",source:"@site/docs/installing_flasher.md",sourceDirName:".",slug:"/installing_flasher",permalink:"/flasher-documentation/docs/installing_flasher",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Errors",permalink:"/flasher-documentation/docs/troubleshooting/common_errors"}},i={},s=[{value:"macOS",id:"macos",level:2},{value:"Windows",id:"windows",level:2}],f={toc:s},p="wrapper";function c(A){let{components:e,...a}=A;return(0,r.kt)(p,(0,n.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-flasher"},"Installing Flasher"),(0,r.kt)("p",null,"This page provides guideline on installing the flasher into your computer."),(0,r.kt)("h2",{id:"macos"},"macOS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the flasher from the below.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/HKUST-Robocon/robocon_flasher/releases/download/v1.0.5-application/flasher_installer_apple_scilion.dmg"},"Apple Scilion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/HKUST-Robocon/robocon_flasher/releases/download/v1.0.1-application/flasher_installer_apple_intel.dmg"},"Intel Chip")," (Not in support)"))),(0,r.kt)("li",{parentName:"ol"},"Open the downloaded dmg."),(0,r.kt)("li",{parentName:"ol"},"Drag the app icon to the application folder."),(0,r.kt)("li",{parentName:"ol"},'Open "Spotlight", and enter "terminal" to open the terminal app.\n',(0,r.kt)("img",{src:t(1607).Z,width:"1574",height:"1084"})),(0,r.kt)("li",{parentName:"ol"},"In the terminal, enter the following:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xattr -rd com.apple.quarantine /Applications/Robocon\\ Flasher.app\n")),(0,r.kt)("img",{src:t(1409).Z,width:"1364",height:"966"})),(0,r.kt)("li",{parentName:"ol"},"Now you close the terminal app and run the flasher.")),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the flasher from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/HKUST-Robocon/robocon_flasher/releases/download/v1.0.5-application/flasher_installer_windows.exe"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the downloaded installer to open the ",(0,r.kt)("inlineCode",{parentName:"li"},".exe")," file\n",(0,r.kt)("img",{src:t(7657).Z,width:"1506",height:"176"})),(0,r.kt)("li",{parentName:"ol"},"After the setup page pop out, click ",(0,r.kt)("strong",{parentName:"li"},"Next"),".\n",(0,r.kt)("img",{src:t(9544).Z,width:"1148",height:"867"})),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Install")," to start install the application.\n",(0,r.kt)("img",{src:t(7605).Z,width:"1141",height:"894"})),(0,r.kt)("li",{parentName:"ol"},"Follow the instructions to install it, the installation process should be the same as for normal Windows applications.")))}c.isMDXComponent=!0},1607:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/spotlight-f8052cd6ce17788d761fb8f180fb8d3b.png"},1409:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/terminal-8095d18d41416db4a0af2dc246017669.png"},7657:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},7605:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/ready_to_install-f565d9d7c4ff090d308d5698cfe63cdd.png"},9544:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/setup-9bafc68cfe26c04edf26f7330df8d6ca.png"}}]);