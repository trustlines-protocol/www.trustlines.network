(self.webpackChunktrustlines_network=self.webpackChunktrustlines_network||[]).push([[957],{6976:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return Q}});var n=l(7294),r=l(1824),a=l(5444),o=l(7817);function i(e){var t=e.title,l=e.textHtml,r=e.textColor,a=e.Button,i=(o.y[r]||{}).textColorClassName;return n.createElement("div",{className:"flex flex-col "+i+" space-y-4"},n.createElement("div",{className:"text-3xl lg:text-6xl font-semibold"},t),n.createElement("div",{className:"border-"+r+" border-b-2"}),n.createElement("div",{className:"font-semibold flex flex-col space-y-1",dangerouslySetInnerHTML:{__html:l}}),n.createElement("div",{className:"flex"},a))}var c=l(9109),s=l(9490),m=l.p+"static/hero-e3ef6c4d541e11cedba41a54613665c9.svg";function u(){var e=(0,a.useStaticQuery)("878721897").markdownRemark,t=e.html,l=e.frontmatter;return n.createElement("div",{className:"bg-dark-green flex flex-row justify-end relative"},n.createElement("img",{src:m,alt:"hero image",className:"h-96 w-auto object-cover md:h-auto md:w-full md:object-contain"}),n.createElement("div",{className:"absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center container mx-auto px-4 text-white"},n.createElement(i,{title:l.title,textHtml:t,textColor:"white",Button:n.createElement(c.Z,{Icon:n.createElement(s.Z,{className:"stroke-4/3"}),label:l.bottomLinkLabel,href:l.bottomLink,textColor:"white",bgColor:"majorelle-blue"})})))}function f(){var e=(0,a.useStaticQuery)("3266854705").markdownRemark,t=e.html,l=e.frontmatter;return n.createElement("div",{className:"bg-aquamarine-green-light"},n.createElement("div",{className:"mx-auto container flex flex-col justify-center px-4 section"},n.createElement(i,{title:l.title,textHtml:t,textColor:"dark-green",Button:n.createElement(c.Z,{Icon:n.createElement(s.Z,{className:"stroke-4/3"}),label:l.bottomLinkLabel,href:l.bottomLink,textColor:"white",bgColor:"dark-green"})})))}var d=l(8942);function x(){var e=(0,a.useStaticQuery)("249932774").markdownRemark,t=e.html,l=e.frontmatter;return n.createElement("div",{className:"container mx-auto px-4 py-20"},n.createElement("div",{className:"text-lg md:text-3xl font-semibold"},l.title),n.createElement("div",{className:"text-rich-black my-4"},l.subTitle),n.createElement(d.Z,{textColor:"white",borderColor:"gray-500",shadowColor:"neon-pink",subTextHTML:t}))}var h=l(924),b="undefined"==typeof window?n.useEffect:n.useLayoutEffect;var v={isVisible:null,visibilityRect:{}};function g(e,t){switch(t.type){case"set":return e.isVisible===t.payload.isVisible?e:t.payload;default:return e}}var w={intervalCheck:!1,partialVisibility:!1,containment:null,scrollCheck:!0,scrollDebounce:250,scrollThrottle:-1,resizeCheck:!1,resizeDebounce:250,resizeThrottle:-1,shouldCheckOnMount:!0,minTopValue:0};var E=function(e,t){var l=(0,n.useReducer)(g,v),r=(0,h.Z)(l,2),a=r[0],o=r[1],i=Object.assign({},w,t),c=i.containment,s=i.intervalCheck,m=i.scrollCheck,u=i.shouldCheckOnMount,f=i.scrollDebounce,d=i.scrollThrottle,x=i.resizeCheck,E=i.resizeDebounce,k=i.resizeThrottle,p=i.partialVisibility,y=i.minTopValue;function N(){if(e.current){var t=function(){var t;if(c){var l=c.getBoundingClientRect();t={top:l.top,left:l.left,bottom:l.bottom,right:l.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var n=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(e.current.getBoundingClientRect()),r=n.height>0&&n.width>0,a={top:n.top>=t.top,left:n.left>=t.left,bottom:n.bottom<=t.bottom,right:n.right<=t.right},o=r&&a.top&&a.left&&a.bottom&&a.right;if(r&&p){var i=n.top<=t.bottom&&n.bottom>=t.top&&n.left<=t.right&&n.right>=t.left;"string"==typeof p&&(i=a[p]),o=y?i&&n.top<=t.bottom-y:i}return{isVisible:o,visibilityRect:a}}(),l=t.isVisible,n=t.visibilityRect;o({type:"set",payload:{isVisible:l,visibilityRect:n}})}}function C(e,t,l){var n,r,a=c||window,o=function(){n=null,N()};return r=l>-1?function(){n||(n=setTimeout(o,l||0))}:function(){clearTimeout(n),n=setTimeout(o,t||0)},a.addEventListener(e,r),function(){clearTimeout(n),a.removeEventListener(e,r)}}return(0,n.useEffect)((function(){u&&N()}),[]),(0,n.useEffect)((function(){N()}),[e.current]),(0,n.useEffect)((function(){if(s&&s>0){var e=setInterval((function(){N()}),s);return function(){clearInterval(e)}}}),[s]),b((function(){if(m)return C("scroll",f,d)}),[]),b((function(){if(x)return C("resize",E,k)}),[]),a};function k(e){return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M20 6L9 17L4 12",stroke:"#FF7C4E",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}var p=l(6344),y=JSON.parse('{"T":"What Can Trustlines Do for your Community?","Q":[{"text":"Strengthen the circular economy and encourage sustainable trade loops"},{"text":"Motivate people to volunteer and contribute to the community by using a time credits system"},{"text":"Use local currency to forge positive relationships between community members and reduce isolation"},{"text":"Stimulate markets so the local economy thrives, even when national currency is scarce"},{"text":"Reduce bank dependency along with banking fees"}]}'),N=l(7901);function C(){var e=(0,N.Z)()[1],t=y.T,l=y.Q,r=(0,n.useState)(0),a=r[0],o=r[1],i=(0,n.useRef)(null),c=E(i,{intervalCheck:!1,scrollCheck:!0,resizeCheck:!0,partiallyVisible:"bottom"}).isVisible;(0,n.useEffect)((function(){if(c){o((function(e){return(null===e?0:++e)%l.length}));var e=setInterval((function(){return o((function(e){return(null===e?0:++e)%l.length}))}),5e3);return function(){return clearInterval(e)}}}),[c,e]);var s=null!==a,m=(0,p.Z)("tablet");return n.createElement("div",{key:e,className:"transition-colors duration-500 "+(s?"bg-coral-red":"bg-cyber-yellow")+" "+(m?"h-screen":"section")},n.createElement("div",{className:"container mx-auto px-4 flex flex-col justify-evenly h-full items-center md:items-start"},n.createElement("div",{ref:i,className:"font-semibold text-3xl lg:text-6xl text-center md:text-left "+(s?"text-coral-pastel":"text-cyber-yellow-darker")},t),n.createElement("div",{className:"flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-4 "+(s?"visible":"invisible")},n.createElement(j,{activeIndex:a}),n.createElement("div",{className:"text-white text-lg md:text-3xl max-w-3xl text-center md:text-left h-28 md:flex-1 flex flex-col justify-center"},l[a||0].text)),n.createElement(T,{totalNum:l.length,activeIndex:a,onClick:function(e){return o(e)}})))}var L={16:"h-16 w-16",20:"h-20 w-20",24:"h-24 w-24",28:"h-28 w-28",32:"h-32 w-32"};function j(e){var t=[16,20,24,28,32][e.activeIndex||0];return n.createElement("div",{className:"h-28 w-64 flex flex-row justify-center items-center"},n.createElement("div",{className:"\n        "+L[t]+" transition-all duration-500\n        rounded-full bg-coral-pastel flex flex-row justify-center items-center"},n.createElement("div",{className:"h-14 w-14 rounded-full bg-white flex flex-row justify-center items-center"},n.createElement(k,null))))}function T(e){var t=e.totalNum,l=e.activeIndex,r=e.onClick;return n.createElement("div",{className:"flex flex-row space-x-2"},Array(t).fill(0).map((function(e,t){return n.createElement("div",{key:t,className:"h-4 rounded-full cursor-pointer transition-all duration-500 "+(null===l?"bg-cyber-yellow-darker":"bg-coral-pastel")+" "+(l===t?"w-8":"w-4"),onClick:function(){return r(t)}})})))}function Z(e){var t=e.className,l=void 0===t?"":t;return n.createElement("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:l},n.createElement("path",{d:"M12.6666 14.5L7.99992 11.1667L3.33325 14.5V3.83333C3.33325 3.47971 3.47373 3.14057 3.72378 2.89052C3.97382 2.64048 4.31296 2.5 4.66659 2.5H11.3333C11.6869 2.5 12.026 2.64048 12.2761 2.89052C12.5261 3.14057 12.6666 3.47971 12.6666 3.83333V14.5Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function I(){var e=(0,a.useStaticQuery)("369865075").markdownRemark,t=e.html,l=e.frontmatter;return n.createElement("div",{className:"bg-coral-red-lighter"},n.createElement("div",{className:"mx-auto container flex flex-col justify-center px-4 section"},n.createElement(i,{title:l.title,textHtml:t,textColor:"coral-red",Button:n.createElement(c.Z,{Icon:n.createElement(Z,{className:"stroke-4/3"}),label:l.bottomLinkLabel,href:l.bottomLink,textColor:"white",bgColor:"coral-red"})})))}var R=l(410),V=l(1220);function S(){var e=(0,a.useStaticQuery)("4139827059").markdownRemark;return n.createElement("div",{className:"mx-auto px-4 container flex flex-col-reverse md:flex-row py-14 md:py-28"},n.createElement("div",{className:"flex-1 flex flex-col space-y-8 justify-center"},n.createElement("div",{className:"text-2xl md:text-3xl font-semibold text-rich-black max-w-xs md:max-w-md"},e.frontmatter.title),n.createElement("div",{className:"text-base md:text-lg md:pr-8 max-w-md space-y-4 flex flex-col",dangerouslySetInnerHTML:{__html:e.html}}),n.createElement("div",{className:"flex"},n.createElement(c.Z,{key:e.frontmatter.bottomLinkLabel,href:e.frontmatter.bottomLink,label:e.frontmatter.bottomLinkLabel,textColor:"white",bgColor:"black",hoverBgColor:"coral-red",Icon:n.createElement(V.Z,{className:"bg-coral-red group-hover:bg-white"}),glowColor:"coral-red"}))),n.createElement("div",{className:"flex-1 flex flex-row justify-end mb-8 md:mb-0"},n.createElement(R.G,{alt:"grant image",image:(0,R.e)(e.frontmatter.image),objectFit:"contain",className:"max-h-64 md:max-h-full"})))}var z=l(9218),B=l(3709),H=l(2922);function M(){var e=(0,n.useState)(!1),t=e[0],l=e[1],r=(0,a.useStaticQuery)("3346047577").markdownRemark.frontmatter;return n.createElement("div",{className:"bg-pink-pastel"},n.createElement("div",{className:"mx-auto container flex flex-col justify-center px-4 section py-8"},n.createElement("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"},n.createElement("div",{className:"text-2xl text-center md:text-left md:text-3xl font-semibold text-rich-black max-w-lg"},r.title),n.createElement(c.Z,{Icon:t?n.createElement(H.Z,{size:16,className:"stroke-4/3"}):n.createElement(B.Z,{size:16,className:"stroke-4/3"}),label:"Contact us",textColor:"rich-black",bgColor:"neon-pink",iconPosition:"right",onClick:function(){return l(!t)},className:"w-full md:w-auto"})),t&&n.createElement("div",{className:"mt-4"},n.createElement(z.Z,null))))}function Q(){return n.createElement("div",null,n.createElement(r.Z,{title:"Communities | Trustlines Network - Building a better financial system"}),n.createElement(u,null),n.createElement(f,null),n.createElement(x,null),n.createElement(C,null),n.createElement(I,null),n.createElement(S,null),n.createElement(M,null))}}}]);
//# sourceMappingURL=component---src-pages-communities-js-84f65fc422ddaa14ea28.js.map