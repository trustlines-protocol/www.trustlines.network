(self.webpackChunktrustlines_network=self.webpackChunktrustlines_network||[]).push([[848],{6843:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},924:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(6793);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},648:function(e,t,n){var r=n(1694),o=n(4326),a=n(5112)("toStringTag"),i="Arguments"==o(function(){return arguments}());e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),a))?n:i?o(t):"Object"==(r=o(t))&&"function"==typeof t.callee?"Arguments":r}},6135:function(e,t,n){"use strict";var r=n(7593),o=n(3070),a=n(9114);e.exports=function(e,t,n){var i=r(t);i in e?o.f(e,i,a(0,n)):e[i]=n}},9974:function(e,t,n){var r=n(3099);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},1246:function(e,t,n){var r=n(648),o=n(7497),a=n(5112)("iterator");e.exports=function(e){if(null!=e)return e[a]||e["@@iterator"]||o[r(e)]}},7659:function(e,t,n){var r=n(5112),o=n(7497),a=r("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[a]===e)}},408:function(e,t,n){var r=n(9670),o=n(7659),a=n(7466),i=n(9974),u=n(1246),l=n(9212),c=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var s,f,d,m,p,g,y,N=n&&n.that,v=!(!n||!n.AS_ENTRIES),M=!(!n||!n.IS_ITERATOR),b=!(!n||!n.INTERRUPTED),j=i(t,N,1+v+b),w=function(e){return s&&l(s),new c(!0,e)},x=function(e){return v?(r(e),b?j(e[0],e[1],w):j(e[0],e[1])):b?j(e,w):j(e)};if(M)s=e;else{if("function"!=typeof(f=u(e)))throw TypeError("Target is not iterable");if(o(f)){for(d=0,m=a(e.length);m>d;d++)if((p=x(e[d]))&&p instanceof c)return p;return new c(!1)}s=f.call(e)}for(g=s.next;!(y=g.call(s)).done;){try{p=x(y.value)}catch(h){throw l(s),h}if("object"==typeof p&&p&&p instanceof c)return p}return new c(!1)}},9212:function(e,t,n){var r=n(9670);e.exports=function(e){var t=e.return;if(void 0!==t)return r(t.call(e)).value}},7497:function(e){e.exports={}},133:function(e,t,n){var r=n(5268),o=n(7392),a=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(e,t,n){var r=n(7854),o=n(2309),a=n(6656),i=n(9711),u=n(133),l=n(3307),c=o("wks"),s=r.Symbol,f=l?s:s&&s.withoutSetter||i;e.exports=function(e){return a(c,e)&&(u||"string"==typeof c[e])||(u&&a(s,e)?c[e]=s[e]:c[e]=f("Symbol."+e)),c[e]}},8559:function(e,t,n){var r=n(2109),o=n(408),a=n(6135);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return o(e,(function(e,n){a(t,e,n)}),{AS_ENTRIES:!0}),t}})},7980:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});n(8559);var r=n(7294),o=n(9109),a=n(1249),i=JSON.parse('[{"label":"I would like to learn more","value":"I would like learn more"},{"label":"I would like to get started","value":"I would like to get started"},{"label":"I would like to build a community","value":"I would like to build a community"},{"label":"I would like to use Trustlines for my community","value":"I would like to use Trustlines for my community"},{"label":"I would like to share my feedback","value":"I would like to share my feedback"},{"label":"Other","value":"Other"}]'),u=n(6572);function l(e){var t=(0,r.useState)(!1),n=t[0],l=t[1],s=(0,r.useState)(!1),f=s[0],d=s[1],m=(0,r.useState)(!1),p=m[0],g=m[1],y="https://europe-west1-trustlines-network.cloudfunctions.net/websiteContact";return r.createElement("form",{id:"contactUs",name:"contactUs",className:"flex flex-col gap-4 mt-4 "+(e.hidden?"hidden":""),action:y,method:"POST",onSubmit:function(e){e.preventDefault(),l(!1),d(!1),g(!1);var t=new FormData(e.target),n=Object.fromEntries(t.entries()),r=new Headers;r.append("Content-Type","application/json");var o={method:"POST",mode:"cors",headers:r,body:JSON.stringify(n),redirect:"follow"};fetch(y,o).then((function(e){return e.json()})).then((function(e){e.success?(document.getElementById("contactUs").reset(),l(!0)):(g(e.errors),d(!0))})).catch((function(e){console.log(e),alert("something went wrong")}))}},f&&r.createElement("div",{className:"flex justify-between rounded p-2 bg-red-500 text-white"},r.createElement("div",null,"There was a problem submitting your message:",Object.values(p).map((function(e,t){return r.createElement("div",{key:"error"+t},e)}))),r.createElement(u.Z,{className:"cursor-pointer hover:opacity-50",onClick:function(){d(!1)}})),n&&r.createElement("div",{className:"flex justify-between rounded p-2 bg-majorelle-blue text-white"},"Your message was submitted successfully. We'll get back to you ASAP.",r.createElement(u.Z,{className:"cursor-pointer hover:opacity-50",onClick:function(){l(!1)}})),r.createElement("div",{className:"flex flex-col md:flex-row gap-4"},r.createElement(c,{placeholder:"Name",name:"name",required:!0}),r.createElement(c,{placeholder:"Email",name:"email",required:!0}),r.createElement("div",{className:"flex-1 flex py-4 md:py-0 px-6 bg-gray-300 rounded-full overflow-hidden overflow-ellipsis"},r.createElement("select",{name:"topic",className:"flex-1 bg-gray-300 text-sm font-semibold w-full focus:outline-none",required:!0,defaultValue:""},r.createElement("option",{label:"Select Topic",value:"",disabled:!0}),i.map((function(e){return r.createElement("option",{key:e.label,label:e.label,value:e.value})}))))),r.createElement("div",{className:"flex flex-col md:flex-row gap-4 items-center"},r.createElement("textarea",{name:"message",className:"w-full md:w-auto flex-1 px-6 py-4 bg-gray-300 rounded-full text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-majorelle-blue",placeholder:"Message",required:!0,rows:1}),r.createElement(o.Z,{Icon:r.createElement(a.Z,{size:16,className:"stroke-2"}),textColor:"white",bgColor:"majorelle-blue",label:"Send",iconPosition:"right",className:"w-full md:w-28",type:"submit"})),r.createElement("div",{className:"text-gray-500 text-center md:text-left"},"Or simply"," ",r.createElement("a",{className:"underline",href:"mailto:info@trustlines.network"},"send us an email"),"."))}function c(e){return r.createElement("input",Object.assign({className:"flex-1 px-6 py-4 bg-gray-300 rounded-full text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-majorelle-blue"},e))}},9109:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(6843),o=n(7294);n(1013);function a(e){var t=e.Icon,n=e.iconPosition,a=void 0===n?"left":n,i=e.bgColor,u=e.textColor,l=e.ringColor,c=void 0===l?"transparent":l,s=e.hoverRingColor,f=void 0===s?"transparent":s,d=e.hoverBgColor,m=void 0===d?i:d,p=e.hoverTextColor,g=void 0===p?u:p,y=e.onClick,N=e.label,v=e.href,M=void 0===v?"":v,b=e.className,j=void 0===b?"":b,w=e.isCircle,x=void 0!==w&&w,h=e.glowColor,E=void 0===h?"":h,I=e.whitespaceClass,O=void 0===I?"whitespace-nowrap":I,D=(0,r.Z)(e,["Icon","iconPosition","bgColor","textColor","ringColor","hoverRingColor","hoverBgColor","hoverTextColor","onClick","label","href","className","isCircle","glowColor","whitespaceClass"]),T=o.cloneElement(t,{size:t.props.size,className:t.props.className+" stroke-current group:text-"+g}),z=j+" group rounded-full flex items-center justify-center gap-2 cursor-pointer "+(x?"p-0 h-10 w-10":"px-4 py-3 h-11")+"\n    focus:outline-none text-sm md:text-base "+O+" z-10 ring-2 transition-all duration-500 ease-in-out "+("left"===a?"flex-row":"flex-row-reverse")+" \n      hover:text-"+g+" hover:bg-"+m+" hover:ring-"+f+"\n      text-"+u+" bg-"+i+" ring-"+c+"\n      "+(E?"hover:shadow-glow-"+E:"");return M?o.createElement("a",Object.assign({href:M,target:"_blank",rel:"noreferrer",className:z},D),T,N):o.createElement("button",Object.assign({className:z,onClick:y},D),T,N)}},3709:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){var t=e||{},n=t.size,o=void 0===n?24:n,a=t.className;return r.createElement("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a},r.createElement("path",{d:"M12 5V19",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M19 12L12 19L5 12",strokeLinecap:"round",strokeLinejoin:"round"}))}},1249:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){var t=e||{},n=t.size,o=void 0===n?24:n,a=t.className;return r.createElement("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a},r.createElement("path",{d:"M5 12L19 12",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M12 5L19 12L12 19",strokeLinecap:"round",strokeLinejoin:"round"}))}},1220:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){var t=e.className;return r.createElement("div",{className:"rounded-full h-4 w-4 transition-colors duration-500 "+t})}},9490:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){var t=e.size,n=void 0===t?17:t;return r.createElement("svg",{width:n,height:n,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e.className},r.createElement("path",{d:"M14.5 10.0769V12.7436C14.5 13.0972 14.3595 13.4363 14.1095 13.6864C13.8594 13.9364 13.5203 14.0769 13.1667 14.0769H3.83333C3.47971 14.0769 3.14057 13.9364 2.89052 13.6864C2.64048 13.4363 2.5 13.0972 2.5 12.7436V10.0769",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M5.16663 6.74359L8.49996 10.0769L11.8333 6.74359",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M8.5 10.0769V2.0769",strokeLinecap:"round",strokeLinejoin:"round"}))}},8942:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var r=n(7294),o=n(6843);function a(e,t){if(null==e)return{};var n,r,a=(0,o.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=n(924),u=(0,r.createContext)(null),l=u.Provider;function c(){var e=(0,r.useContext)(u);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var s=n(4118);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e){var t=e.children,n=e.className,o=e.id,u=e.placeholder,c=e.style,d=e.whenCreated,m=a(e,["children","className","id","placeholder","style","whenCreated"]),p=(0,r.useRef)(null),g=function(e,t){var n=(0,r.useState)(null),o=(0,i.Z)(n,2),a=o[0],u=o[1];return(0,r.useEffect)((function(){if(null!==e.current&&null===a){var n=new s.Map(e.current,t);null!=t.center&&null!=t.zoom?n.setView(t.center,t.zoom):null!=t.bounds&&n.fitBounds(t.bounds,t.boundsOptions),null!=t.whenReady&&n.whenReady(t.whenReady),u(n)}}),[e,a,t]),a}(p,m),y=(0,r.useRef)(!1);(0,r.useEffect)((function(){null!=g&&!1===y.current&&null!=d&&(y.current=!0,d(g))}),[g,d]);var N=(0,r.useState)({className:n,id:o,style:c}),v=(0,i.Z)(N,1)[0],M=(0,r.useMemo)((function(){return g?{__version:1,map:g}:null}),[g]),b=M?r.createElement(l,{value:M},t):null!=u?u:null;return r.createElement("div",f({},v,{ref:p}),b)}var m=n(3935);function p(e,t){return null==t?function(t,n){return(0,r.useRef)(e(t,n))}:function(n,o){var a=(0,r.useRef)(e(n,o)),i=(0,r.useRef)(n),u=a.current.instance;return(0,r.useEffect)((function(){i.current!==n&&(t(u,n,i.current),i.current=n)}),[u,n,o]),a}}function g(e,t){var n=(0,r.useRef)(t);(0,r.useEffect)((function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t}),[e,t])}function y(e,t){var n=(0,r.useRef)();(0,r.useEffect)((function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}}),[e,t])}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){var n,r=null!=(n=e.pane)?n:t.pane;return r?M(M({},e),{},{pane:r}):e}function j(e){return function(t){var n=c(),o=e(b(t,n),n);return g(n.map,t.attribution),y(o.current,t.eventHandlers),function(e,t){(0,r.useEffect)((function(){var n,r=null!=(n=t.layerContainer)?n:t.map;return r.addLayer(e.instance),function(){r.removeLayer(e.instance)}}),[t,e])}(o.current,n),o}}var w=function(e){function t(t,n){var o=e(t).current.instance;return(0,r.useImperativeHandle)(n,(function(){return o})),null}return(0,r.forwardRef)(t)}(j(p((function(e,t){var n=e.url,r=a(e,["url"]);return{instance:new s.TileLayer(n,b(r,t)),context:t}}),(function(e,t,n){var r=t.opacity,o=t.zIndex;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=o&&o!==n.zIndex&&e.setZIndex(o)}))));function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e,t){return function(e){function t(t,n){var o=e(t).current,a=o.instance,i=o.context;return(0,r.useImperativeHandle)(n,(function(){return a})),null==t.children?null:r.createElement(l,{value:i},t.children)}return(0,r.forwardRef)(t)}(j(p(e,t)))}((function(e,t){var n=e.position,r=a(e,["position"]),o=new s.Marker(n,r);return{instance:o,context:h(h({},t),{},{overlayContainer:o})}}),(function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),null!=t.icon&&t.icon!==n.icon&&e.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),null!=e.dragging&&t.draggable!==n.draggable&&(!0===t.draggable?e.dragging.enable():e.dragging.disable())})),I=function(e,t){return function(e){function t(t,n){var o=(0,r.useState)(!1),a=(0,i.Z)(o,2),u=a[0],l=a[1],c=e(t,l).current.instance;(0,r.useImperativeHandle)(n,(function(){return c})),(0,r.useEffect)((function(){u&&c.update()}),[c,u,t.children]);var s=c._contentNode;return s?(0,m.createPortal)(t.children,s):null}return(0,r.forwardRef)(t)}(function(e,t){return function(n,r){var o=c(),a=e(b(n,o),o);return g(o.map,n.attribution),y(a.current,n.eventHandlers),t(a.current,o,n,r),a}}(p(e),t))}((function(e,t){return{instance:new s.Popup(e,t.overlayContainer),context:t}}),(function(e,t,n,o){var a=n.onClose,i=n.onOpen,u=n.position;(0,r.useEffect)((function(){var n=e.instance;function r(e){e.popup===n&&(n.update(),o(!0),null==i||i())}function l(e){e.popup===n&&(o(!1),null==a||a())}return t.map.on({popupopen:r,popupclose:l}),null==t.overlayContainer?(null!=u&&n.setLatLng(u),n.openOn(t.map)):t.overlayContainer.bindPopup(n),function(){t.map.off({popupopen:r,popupclose:l}),null==t.overlayContainer?t.map.removeLayer(n):t.overlayContainer.unbindPopup()}}),[e,t,o,a,i,u])}));function O(){return c().map}var D=JSON.parse('[{"name":"Brainbot","position":[50.014474950264436,8.262298463382924],"contactName":"","contactTitle":"","contactMail":""},{"name":"Zeitbank Mainz","position":[50.01457495026444,8.263229846338293],"contactName":"","contactTitle":"","contactMail":""},{"name":"Anyblock","position":[50.00079619457116,8.20617752049894],"contactName":"","contactTitle":"","contactMail":""},{"name":"Venezuela","position":[7.0271180050306645,-66.10122467517937],"contactName":"","contactTitle":"","contactMail":""},{"name":"Rawanda","position":[-1.976164583691933,29.917494768939612],"contactName":"","contactTitle":"","contactMail":""}]');function T(){var e=function(e){var t=O();return(0,r.useEffect)((function(){return t.on(e),function(){t.off(e)}}),[t,e]),t}({click:function(){e.scrollWheelZoom.enabled()?e.scrollWheelZoom.disable():e.scrollWheelZoom.enable()}});return null}function z(e){var t=e.borderColor,n=e.shadowColor,o=e.subTextHTML,a=e.textColor,i=void 0===a?"rich-black":a;if("undefined"==typeof window)return null;var u=(0,s.icon)({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyNSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMjUuNDYxNEwxMS42Njc5IDI2LjcwOTVDMTIuMTcxOCAyNy4wNDU0IDEyLjgyODIgMjcuMDQ1NCAxMy4zMzIxIDI2LjcwOTVMMTIuNSAyNS40NjE0Wk0xMi41IDI1LjQ2MTRDMTMuMzMyMSAyNi43MDk1IDEzLjMzMjQgMjYuNzA5MyAxMy4zMzI4IDI2LjcwOUwxMy4zMzM4IDI2LjcwODNMMTMuMzM2MyAyNi43MDY2TDEzLjM0MzkgMjYuNzAxNkwxMy4zNjg2IDI2LjY4NDhDMTMuMzg5MyAyNi42NzA4IDEzLjQxODMgMjYuNjUwOSAxMy40NTUxIDI2LjYyNTVDMTMuNTI4NyAyNi41NzQ1IDEzLjYzMzUgMjYuNTAwOSAxMy43NjUgMjYuNDA2QzE0LjAyNzggMjYuMjE2MSAxNC4zOTgzIDI1Ljk0MDIgMTQuODQwNiAyNS41ODhDMTUuNzIzIDI0Ljg4NTMgMTYuOTAzNCAyMy44Njk0IDE4LjA4ODkgMjIuNjE4QzIwLjM5ODYgMjAuMTggMjMgMTYuNTY0MyAyMyAxMi40NjE0QzIzIDkuNjc2NjUgMjEuODkzOCA3LjAwNTk0IDE5LjkyNDYgNS4wMzY4QzE3Ljk1NTUgMy4wNjc2NyAxNS4yODQ4IDEuOTYxNDMgMTIuNSAxLjk2MTQzQzkuNzE1MjMgMS45NjE0MyA3LjA0NDUxIDMuMDY3NjcgNS4wNzUzOCA1LjAzNjhDMy4xMDYyNSA3LjAwNTk0IDIgOS42NzY2NSAyIDEyLjQ2MTRDMiAxNi41NjQzIDQuNjAxMzkgMjAuMTggNi45MTEwNyAyMi42MThDOC4wOTY1OCAyMy44Njk0IDkuMjc3IDI0Ljg4NTMgMTAuMTU5NCAyNS41ODhDMTAuNjAxNyAyNS45NDAyIDEwLjk3MjIgMjYuMjE2MSAxMS4yMzUgMjYuNDA2QzExLjM2NjUgMjYuNTAwOSAxMS40NzEzIDI2LjU3NDUgMTEuNTQ0OSAyNi42MjU1QzExLjU4MTcgMjYuNjUwOSAxMS42MTA3IDI2LjY3MDggMTEuNjMxNCAyNi42ODQ4TDExLjY1NjEgMjYuNzAxNkwxMS42NjM3IDI2LjcwNjZMMTEuNjY2MiAyNi43MDgzTDExLjY2NzIgMjYuNzA5QzExLjY2NzYgMjYuNzA5MyAxMS42Njc5IDI2LjcwOTUgMTIuNSAyNS40NjE0WiIgZmlsbD0iIzNFM0U0OCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEyLjUgMTUuNDYxNEMxNC4xNTY5IDE1LjQ2MTQgMTUuNSAxNC4xMTgzIDE1LjUgMTIuNDYxNEMxNS41IDEwLjgwNDYgMTQuMTU2OSA5LjQ2MTQzIDEyLjUgOS40NjE0M0MxMC44NDMxIDkuNDYxNDMgOS41IDEwLjgwNDYgOS41IDEyLjQ2MTRDOS41IDE0LjExODMgMTAuODQzMSAxNS40NjE0IDEyLjUgMTUuNDYxNFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",iconSize:[24,24]});return r.createElement("div",{className:"\n      mt-6 md:mt-11 border-4 rounded-3xl overflow-hidden\n      border-"+t+" shadow-card-"+n+"\n      "},r.createElement(d,{center:[25.072835488010323,-9.120591748774364],zoom:2,scrollWheelZoom:!1,className:"z-40"},r.createElement(T,null),r.createElement(w,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),D.map((function(e){return r.createElement(E,{key:e.name,position:e.position,icon:u},r.createElement(I,{className:"custom-leaflet-popup"},r.createElement("div",{className:"bg-rich-black-lighter"},r.createElement("div",{className:"text-base text-white font-semibold"},e.name),r.createElement("div",{className:"text-xs text-white"},e.contactName),r.createElement("div",{className:"text-xs text-white"},e.contactTitle),r.createElement("div",{className:"text-xs text-white"},e.contactMail))))}))),r.createElement("div",{className:"\n        bg-"+t+" text-"+i+" text-center\n        p-2 flex flex-col md:flex-row justify-center items-center text-sm md:text-base gap-0 md:gap-1\n        ",dangerouslySetInnerHTML:{__html:o}}))}}}]);
//# sourceMappingURL=448b921611e656da2bf754e9e7de7f17b1eef67f-6992d75453e3ff2fc305.js.map