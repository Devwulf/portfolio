(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/dashboard.66ea9b6d.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/welcome-img.55dc10b0.jpg"},28:function(e,t,a){e.exports=a(43)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),s=(a(33),a(26)),o=a(2),i=(a(34),a(35),a(5)),m=a(6),d=a(8),u=a(7),f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"w-full h-full flex flex-col items-center justify-center bg-gray-700"},r.a.createElement("div",{className:"mb-4 text-xl font-bold text-gray-200"},"Message Me!"),r.a.createElement("form",{action:"",className:"w-1/3"},r.a.createElement("div",{className:"flex flex-col mb-4"},r.a.createElement("label",{htmlFor:"",className:"text-sm mb-2 text-gray-300"},"Name"),r.a.createElement("input",{type:"text",className:"py-1 px-2 rounded"})),r.a.createElement("div",{className:"flex flex-col mb-4"},r.a.createElement("label",{htmlFor:"",className:"text-sm mb-2 text-gray-300"},"Email"),r.a.createElement("input",{type:"text",className:"py-1 px-2 rounded"})),r.a.createElement("div",{className:"flex flex-col mb-4"},r.a.createElement("label",{htmlFor:"",className:"hidden"},"Message"),r.a.createElement("textarea",{className:"py-1 px-2 rounded",placeholder:"Send a message..."}))))}}]),a}(r.a.Component),v=a(9),x=a(23),h=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={isHover:!1},n.onHoverStart=n.onHoverStart.bind(Object(v.a)(n)),n.onHoverEnd=n.onHoverEnd.bind(Object(v.a)(n)),n}return Object(m.a)(a,[{key:"onHoverStart",value:function(){this.setState({isHover:!0})}},{key:"onHoverEnd",value:function(){this.setState({isHover:!1})}},{key:"render",value:function(){var e=this.props,t=e.indexName,a=e.currentIndex,n=e.goToIndex,l=this.state.isHover,c=a===t.index;return r.a.createElement("button",{key:t.index,className:"relative mt-1 mb-1",onClick:function(){return n(t.index)},onMouseEnter:this.onHoverStart,onMouseLeave:this.onHoverEnd},r.a.createElement("div",{className:"transform duration-200 ease-in-out absolute h-full rounded-full ".concat(l||c?"w-full bg-blue-500":"w-8 bg-gray-800"),style:{right:0}}),r.a.createElement("div",{className:"flex flex-row-reverse items-center px-2"},r.a.createElement(x.a,{icon:"dot-circle",className:"text-gray-400",style:{zIndex:100}}),r.a.createElement("span",{className:"mr-4 text-gray-200 ".concat(l||c?"fadeInRight anim-200":"fadeOutRight anim-200")},t.name)))}}]),a}(r.a.Component),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).pageContainer=void 0,n.pageContainer=r.a.createRef(),n.state={currentId:"",scrollIndex:0,isNavHover:!1},n.goToIndex=n.goToIndex.bind(Object(v.a)(n)),n.getSectionNames=n.getSectionNames.bind(Object(v.a)(n)),n.onUpdateId=n.onUpdateId.bind(Object(v.a)(n)),n.onScroll=n.onScroll.bind(Object(v.a)(n)),n.onNavHoverStart=n.onNavHoverStart.bind(Object(v.a)(n)),n.onNavHoverEnd=n.onNavHoverEnd.bind(Object(v.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.goToId&&this.onUpdateId()}},{key:"componentDidUpdate",value:function(){var e=this.props.goToId,t=this.state,a=t.currentId,n=t.scrollIndex;e&&("number"===typeof e&&e!==n?this.goToIndex(e):"string"===typeof e&&e!==a&&this.onUpdateId())}},{key:"goToIndex",value:function(e){var t=this.pageContainer.current;if(t){var a=t.childNodes;if(a){for(var n=a[e].clientHeight,r=0,l=0;l<e;l++)r+=a[l].clientHeight;var c=window.innerHeight,s=0===e?(c-n)/2:0,o=e===a.length-1?c-n:(c-n)/2;t.style.transform="translate3d(0, ".concat(-(r-o+s),"px, 0)"),this.setState({scrollIndex:e})}}}},{key:"getSectionNames",value:function(){var e=this.props.children;if(!e)return[];for(var t=[],a=0;a<e.length;a++){var n=e[a].props["data-name"];n&&t.push({index:a,name:n})}return t}},{key:"onUpdateId",value:function(){var e=this,t=this.props.goToId;if("number"!==typeof t){var a=this.pageContainer.current;if(a){var n=a.childNodes;if(n)for(var r=function(a){if(t&&t===n[a].id)return e.setState({currentId:t},(function(){e.goToIndex(a)})),"break"},l=0;l<n.length;l++){if("break"===r(l))break}}}else this.goToIndex(t)}},{key:"onScroll",value:function(e){var t=this.state.scrollIndex,a=this.pageContainer.current;if(a){var n=a.childNodes;if(n){var r=t,l=Math.sign(e.deltaY);l>0?r=Math.min(n.length-1,r+1):l<0&&(r=Math.max(0,r-1)),r!==t&&this.goToIndex(r)}}}},{key:"onNavHoverStart",value:function(){this.setState({isNavHover:!0})}},{key:"onNavHoverEnd",value:function(){this.setState({isNavHover:!1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.showNavigator,n=t.children,l=this.state.scrollIndex,c=null!==a&&void 0!==a&&a,s=this.getSectionNames();return r.a.createElement("div",{className:"overflow-hidden relative h-screen"},c&&r.a.createElement("div",{className:"absolute flex flex-col justify-center",style:{top:"50%",bottom:"50%",right:"0",zIndex:100}},r.a.createElement("div",{className:"w-40 pr-4",style:{minHeight:32*s.length},onMouseEnter:this.onNavHoverStart,onMouseLeave:this.onNavHoverEnd},r.a.createElement("div",{className:"flex flex-col px-3 py-2 rounded"},s.map((function(t){return r.a.createElement(h,{key:t.index,indexName:t,currentIndex:l,goToIndex:e.goToIndex})}))))),r.a.createElement("div",{ref:this.pageContainer,className:"transform duration-300 ease-in-out h-full",onWheel:this.onScroll},n))}}]),a}(r.a.Component),b=a(16),g=a.n(b),E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.isFlipped;return r.a.createElement("div",{className:"w-full h-full flex items-center justify-center"},!e&&r.a.createElement("div",{className:"w-full h-full flex flex-row"},r.a.createElement("div",{className:"w-1/2 flex items-center justify-center"},r.a.createElement("span",{className:"text-3xl"},"Example Project")),r.a.createElement("img",{src:g.a,style:{width:"60%",height:"100%",objectFit:"cover",objectPosition:"0px -100px"}}))||e&&r.a.createElement("div",{className:"w-full h-full flex flex-row"},r.a.createElement("img",{src:g.a,style:{width:"60%",height:"100%",objectFit:"cover",objectPosition:"0px -100px"}}),r.a.createElement("div",{className:"w-1/2 flex items-center justify-center"},r.a.createElement("span",{className:"text-3xl"},"Example Project"))))}}]),a}(r.a.Component),N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"w-full h-full flex items-center justify-between px-24 py-24 bg-gray-800"},r.a.createElement("div",{className:"flex flex-col items-center justify-center mr-24 w-full h-full rounded-lg shadow-lg bg-gray-200"},r.a.createElement("span",{className:"text-3xl mb-12 font-bold"},"Languages"),r.a.createElement("span",{className:"text-2xl mb-4"},"C#"),r.a.createElement("span",{className:"text-2xl mb-4"},"Java"),r.a.createElement("span",{className:"text-2xl mb-4"},"Javascript/TypeScript"),r.a.createElement("span",{className:"text-2xl mb-4"},"CSS"),r.a.createElement("span",{className:"text-2xl mb-4"},"HTML"),r.a.createElement("span",{className:"text-2xl mb-4"},"Python")),r.a.createElement("div",{className:"flex flex-col items-center justify-center mr-24 w-full h-full rounded-lg shadow-lg bg-gray-200"},r.a.createElement("span",{className:"text-3xl mb-12 font-bold"},"Skills"),r.a.createElement("span",{className:"text-2xl mb-4"},"MySQL"),r.a.createElement("span",{className:"text-2xl mb-4"},"MongoDB"),r.a.createElement("span",{className:"text-2xl mb-4"},"React"),r.a.createElement("span",{className:"text-2xl mb-4"},"Asp.NET Core")),r.a.createElement("div",{className:"flex flex-col items-center justify-center w-full h-full rounded-lg shadow-lg bg-gray-200"},r.a.createElement("span",{className:"text-3xl mb-12 font-bold"},"Interests"),r.a.createElement("span",{className:"text-2xl mb-4"},"Data Science"),r.a.createElement("span",{className:"text-2xl mb-4"},"Machine Learning"),r.a.createElement("span",{className:"text-2xl mb-4"},"Web Development"),r.a.createElement("span",{className:"text-2xl mb-4"},"SaaS")))}}]),a}(r.a.Component),y=a(24),j=a.n(y),w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"w-full h-full flex items-center justify-center px-48 py-40 bg-gray-900"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"mr-48 text-5xl text-gray-200"},"Hello! I am a"),r.a.createElement("div",{className:"mr-48 text-5xl text-gray-200"},"full-stack web dev;"),r.a.createElement("div",{className:"mr-48 text-5xl text-gray-200"},"aspiring data scientist.")),r.a.createElement("img",{src:j.a,width:512,height:512}))}}]),a}(r.a.Component);function I(e){var t=e.id;return r.a.createElement("div",{className:"main2"},r.a.createElement(p,{goToId:t,showNavigator:!0},r.a.createElement("div",{id:"welcome","data-name":"Welcome",className:"w-screen h-screen"},r.a.createElement(w,null)),r.a.createElement("div",{id:"project1","data-name":"Project 1",className:"w-screen bg-gray-200",style:{height:"40rem"}},r.a.createElement(E,{isFlipped:!1})),r.a.createElement("div",{id:"project2","data-name":"Project 2",className:"w-screen bg-gray-300",style:{height:"40rem"}},r.a.createElement(E,{isFlipped:!0})),r.a.createElement("div",{id:"project3","data-name":"Project 3",className:"w-screen bg-gray-400",style:{height:"40rem"}},r.a.createElement(E,{isFlipped:!1})),r.a.createElement("div",{id:"project4","data-name":"Project 4",className:"w-screen bg-gray-500",style:{height:"40rem"}},r.a.createElement(E,{isFlipped:!0})),r.a.createElement("div",{id:"skills","data-name":"Skills",className:"w-screen",style:{height:"48rem"}},r.a.createElement(N,null)),r.a.createElement("div",{id:"contact","data-name":"Contact",className:"w-screen",style:{height:"32rem"}},r.a.createElement(f,null))))}var O=a(12),S=a(25);function k(){var e=Object(o.f)().id;return r.a.createElement(I,{id:e})}O.b.add(S.a);var H=function(){return r.a.createElement(s.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/portfolio/",component:I}),r.a.createElement(o.a,{exact:!0,path:"/portfolio/:id",component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.3d7d17d8.chunk.js.map