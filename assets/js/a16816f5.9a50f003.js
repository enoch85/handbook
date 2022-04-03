"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"dev-guide-contributing",title:"Contributing Guidelines"},s="How to contribute",p={unversionedId:"dev-guide/dev-guide-contributing",id:"dev-guide/dev-guide-contributing",title:"Contributing Guidelines",description:"We would love to have your help. Before you start working however, please read",source:"@site/docs/dev-guide/contributing.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-contributing",permalink:"/handbook/docs/dev-guide/dev-guide-contributing",editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/contributing.md",tags:[],version:"current",lastUpdatedAt:1648981157,formattedLastUpdatedAt:"4/3/2022",frontMatter:{id:"dev-guide-contributing",title:"Contributing Guidelines"},sidebar:"docs",previous:{title:"Overview",permalink:"/handbook/docs/dev-guide/"},next:{title:"Start",permalink:"/handbook/docs/dev-guide/dev-guide-web"}},u={},d=[{value:"Contributor License Agreement",id:"contributor-license-agreement",level:2},{value:"Creating Pull Requests",id:"creating-pull-requests",level:2},{value:"Coding style",id:"coding-style",level:2},{value:"Comments",id:"comments",level:3},{value:"Duplication",id:"duplication",level:3},{value:"Formatting",id:"formatting",level:3},{value:"Indentation",id:"indentation",level:3},{value:"Naming",id:"naming",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Feature layout",id:"feature-layout",level:4},{value:"Avoiding bundle bloat",id:"avoiding-bundle-bloat",level:4},{value:"Kotlin",id:"kotlin",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-contribute"},"How to contribute"),(0,r.kt)("p",null,"We would love to have your help. Before you start working however, please read\nand follow this short guide."),(0,r.kt)("h1",{id:"reporting-issues"},"Reporting Issues"),(0,r.kt)("p",null,"Provide as much information as possible. Mention the version of Jitsi Meet,\nJicofo and JVB you are using, and explain (as detailed as you can) how the\nproblem can be reproduced."),(0,r.kt)("h1",{id:"code-contributions"},"Code contributions"),(0,r.kt)("p",null,"Found a bug and know how to fix it? Great! Please read on."),(0,r.kt)("h2",{id:"contributor-license-agreement"},"Contributor License Agreement"),(0,r.kt)("p",null,"While the Jitsi projects are released under the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/LICENSE"},"Apache License 2.0"),", the copyright\nholder and principal creator is ",(0,r.kt)("a",{parentName:"p",href:"https://www.8x8.com/"},"8x8"),". To\nensure that we can continue making these projects available under an Open Source license,\nwe need you to sign our Apache-based contributor\nlicense agreement as either a ",(0,r.kt)("a",{parentName:"p",href:"https://jitsi.org/ccla"},"corporation")," or an\n",(0,r.kt)("a",{parentName:"p",href:"https://jitsi.org/icla"},"individual"),". If you cannot accept the terms laid out\nin the agreement, unfortunately, we cannot accept your contribution."),(0,r.kt)("h2",{id:"creating-pull-requests"},"Creating Pull Requests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure your code passes the linter rules beforehand. The linter is executed\nautomatically when committing code."),(0,r.kt)("li",{parentName:"ul"},"Perform ",(0,r.kt)("strong",{parentName:"li"},"one")," logical change per pull request."),(0,r.kt)("li",{parentName:"ul"},"Maintain a clean list of commits, squash them if necessary."),(0,r.kt)("li",{parentName:"ul"},"Rebase your topic branch on top of the master branch before creating the pull\nrequest. Use a branch for the changes with suitable name, do not use master of your fork."),(0,r.kt)("li",{parentName:"ul"},"Commits should have prefix indicating what they do is it feature, a fix or a translation update. This is in regards the\nautomated release notes. Prefix the commits with ",(0,r.kt)("inlineCode",{parentName:"li"},"feat: "),", ",(0,r.kt)("inlineCode",{parentName:"li"},"fix: "),", ",(0,r.kt)("inlineCode",{parentName:"li"},"lang: ")," etc.")),(0,r.kt)("h2",{id:"coding-style"},"Coding style"),(0,r.kt)("h3",{id:"comments"},"Comments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comments documenting the source code are required."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comments from which documentation is automatically generated are ",(0,r.kt)("strong",{parentName:"p"},"not"),"\nsubject to case-by-case decisions. Such comments are used, for example, on\ntypes and their members. Examples of tools which automatically generate\ndocumentation from such comments include JSDoc, Javadoc, Doxygen.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comments which are not automatically processed are strongly encouraged. They\nare subject to case-by-case decisions. Such comments are often observed in\nfunction bodies.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comments should be formatted as proper English sentences. Such formatting pays\nattention to, for example, capitalization and punctuation."))),(0,r.kt)("h3",{id:"duplication"},"Duplication"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Don't copy-paste source code. Reuse it.")),(0,r.kt)("h3",{id:"formatting"},"Formatting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Line length is limited to 120 characters for JavaScript, Java, and Kotlin code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sort by alphabetical order in order to make the addition of new entities as\neasy as looking a word up in a dictionary. Otherwise, one risks duplicate\nentries (with conflicting values in the cases of key-value pairs). For\nexample:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JavaScript: Within an ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," of multiple names from a module, sort the names in\nalphabetical order. (Of course, the default name stays first as required by\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," syntax.)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n    DOMINANT_SPEAKER_CHANGED,\n    JITSI_CLIENT_CONNECTED,\n    JITSI_CLIENT_CREATED,\n    JITSI_CLIENT_DISCONNECTED,\n    JITSI_CLIENT_ERROR,\n    JITSI_CONFERENCE_JOINED,\n    MODERATOR_CHANGED,\n    PEER_JOINED,\n    PEER_LEFT,\n    RTC_ERROR\n} from './actionTypes';\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JavaScript: Within a group of imports (e.g. groups of imports delimited by an empty line\nmay be: third-party modules, then project modules, and eventually the\nprivate files of a module), sort the module names in alphabetical order."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { Component } from 'react';\nimport { connect } from 'react-redux';\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Java: Use package imports (package.*) and DO NOT import classes themselves.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Java: Opening braces MUST be on their own line (especially those beginning a method).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use 4 spaces to indent everything. Instruct your IDE not to use tabs under any circumstances and replace them with spaces.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not use double negative when naming properties, variables or methods/functions."))),(0,r.kt)("h3",{id:"indentation"},"Indentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Align ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"case"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"default"),". Don't indent the ",(0,r.kt)("inlineCode",{parentName:"p"},"case"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"default")," more\nthan its ",(0,r.kt)("inlineCode",{parentName:"p"},"switch"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"switch (i) {\ncase 0:\n    ...\n    break;\ndefault:\n    ...\n}\n")))),(0,r.kt)("h3",{id:"naming"},"Naming"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An abstraction should have one name within the project and across multiple\nprojects. For example:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The instance of lib-jitsi-meet's ",(0,r.kt)("inlineCode",{parentName:"p"},"JitsiConnection")," type should be named\n",(0,r.kt)("inlineCode",{parentName:"p"},"connection")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"jitsiConnection")," in jitsi-meet, not ",(0,r.kt)("inlineCode",{parentName:"p"},"client"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The class ",(0,r.kt)("inlineCode",{parentName:"p"},"ReducerRegistry")," should be defined in ReducerRegistry.js and its\nimports in other files should use the same name. Don't define the class\n",(0,r.kt)("inlineCode",{parentName:"p"},"Registry")," in ReducerRegistry.js and then import it as ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducers")," in other\nfiles.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The names of global constants (including ES6 module-global constants) should\nbe written in uppercase with underscores to separate words. For example,\n",(0,r.kt)("inlineCode",{parentName:"p"},"BACKGROUND_COLOR"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The underscore character at the beginning of a name signals that the\nrespective variable, function, property is non-public i.e. private, protected,\nor internal. In contrast, the lack of an underscore at the beginning of a name\nsignals public API."))),(0,r.kt)("h3",{id:"javascript"},"JavaScript"),(0,r.kt)("h4",{id:"feature-layout"},"Feature layout"),(0,r.kt)("p",null,"When adding a new feature, this would be the usual layout."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"react/features/sample/\n\u251c\u2500\u2500 actionTypes.js\n\u251c\u2500\u2500 actions.js\n\u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u251c\u2500\u2500 AnotherComponent.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 OneComponent.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 middleware.js\n\u2514\u2500\u2500 reducer.js\n")),(0,r.kt)("p",null,"The middleware must be imported in ",(0,r.kt)("inlineCode",{parentName:"p"},"react/features/app/")," specifically\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"middlewares.any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"middlewares.native.js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"middlewares.web.js")," where appropriate.\nLikewise for the reducer."),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file must not be provided for exporting actions, action types and\ncomponent. Features / files requiring those must import them explicitly."),(0,r.kt)("p",null,"This has not always been the case and the entire codebase hasn't been migrated to\nthis model but new features should follow this new layout."),(0,r.kt)("p",null,"When working on an old feature, adding the necessary changes to migrate to the new\nmodel is encouraged."),(0,r.kt)("h4",{id:"avoiding-bundle-bloat"},"Avoiding bundle bloat"),(0,r.kt)("p",null,"When adding a new feature it's possible that it triggers a build failure due to the increased bundle size. We have safeguards inplace to avoid bundles growing disproportionatelly. While there are legit reasons for increasing the limits, please analyze the bundle first to make sure no unintended dependencies have been included, causing the increase in size."),(0,r.kt)("p",null,"First, make a production build with bundle-analysis enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx webpack -p --analyze-bundle\n")),(0,r.kt)("p",null,"Then open the interactive bundle analyzer tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx webpack-bundle-analyzer build/app-stats.json\n")),(0,r.kt)("h3",{id:"kotlin"},"Kotlin"),(0,r.kt)("p",null,"For Kotlin code we use the ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/coding-conventions.html"},"standard convention")," and limit line length to 120 characters. We use ",(0,r.kt)("inlineCode",{parentName:"p"},"ktlint")," to enforce formatting."))}m.isMDXComponent=!0}}]);