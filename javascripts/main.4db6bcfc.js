webpackJsonp([0],{112:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(113),a=r(o),i=n(117),l=r(i),u=n(118),c=r(u),d={map:o.initialMap,copiedBranch:i.initialCopiedBranch,selectedId:u.initialSelectedId};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments[1];return{map:(0,a.default)(e.map,t,e),copiedBranch:(0,l.default)(e.copiedBranch,t,e),selectedId:(0,c.default)(e.selectedId,t,e)}}},113:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.initialMap=t.default=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(47),u=r(l),c=n(116),d=r(c),f=function(e){var t={id:(0,u.default)(),text:"",childIds:[],parentId:"",numberChild:!1};return i({},t,e)},s={0:{id:"0",text:"My Mind Map :)",childIds:[],parentId:""}},p=function(e,t,n){var r,l=e[t].parentId,u=e[l],c=u.childIds.indexOf(t)+(n?0:1),d=[].concat(a(u.childIds)),s=f({parentId:l});return d.splice(c,0,s.id),i({},e,(r={},o(r,l,i({},u,{childIds:d})),o(r,s.id,s),r))},h=function(e,t){var n,r=e[t].parentId,l=e[r],u=l.childIds.indexOf(t),c=[].concat(a(l.childIds)),d=f({parentId:r,childIds:[t]});return c.splice(u,1,d.id),i({},e,(n={},o(n,r,i({},l,{childIds:c})),o(n,t,i({},e[t],{parentId:d.id})),o(n,d.id,d),n))},v=function(e,t){var n,r=f({parentId:t}),l=[].concat(a(e[t].childIds));return l.push(r.id),i({},e,(n={},o(n,t,i({},e[t],{childIds:l})),o(n,r.id,r),n))},m=function e(t,n){return n[t].childIds.reduce(function(t,r){return[].concat(a(t),[r,e(r,n)])},[])},_=function(e,t){var n=e.indexOf(t);return[].concat(a(e.slice(0,n)),a(e.slice(n+1)))},y=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments[1],r=arguments[2];switch(n.type){case"EDIT_ITEM":case"NUMBER_CHILD":return i({},t,o({},n.id,(0,d.default)(t[n.id],n)));case"ADD_ITEM_BEFORE":return p(t,n.id,!0);case"ADD_ITEM_AFTER":return p(t,n.id);case"ADD_PARENT_ITEM":return h(t,n.id);case"ADD_CHILD_ITEM":return v(t,n.id);case"PASTE":var l=r.copiedBranch,u=r.selectedId;return""===l.rootId?t:i({},t,l.items,(e={},o(e,l.rootId,i({},l.items[l.rootId],{parentId:u})),o(e,u,i({},t[u],{childIds:[].concat(a(t[u].childIds),[l.rootId])})),e));case"CUT":case"REMOVE":t=i({},t);var c=t[n.id].parentId;return[n.id].concat(a(m(n.id,t))).forEach(function(e){return delete t[e]}),i({},t,o({},c,i({},t[c],{childIds:_(t[c].childIds,n.id)})));default:return t}};t.default=y,t.initialMap=s},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(e,t){switch(t.type){case"EDIT_ITEM":return r({},e,{text:t.text});case"NUMBER_CHILD":return r({},e,{numberChild:!e.numberChild});default:return e}};t.default=o},117:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.initialCopiedBranch=t.default=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(47),i=function(e){return e&&e.__esModule?e:{default:e}}(a),l={rootId:"",items:{}},u=function(e,t,n){return o({},e,{parentId:t,id:n||(0,i.default)(),childIds:e.childIds.map(function(e){return(0,i.default)()})})},c=function(e,t){return new Map(e.map(function(e,n){return[e,t[n]]}))},d=function e(t,n,a){var i=c(t.childIds,n.childIds);return t.childIds.reduce(function(t,l){var c=o({},u(a[l],n.id,i.get(l)));return o({},t,r({},c.id,c),e(a[l],c,a))},{})},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1],n=arguments[2];if("COPY"===t.type||"CUT"===t.type){var a=t.id,i=n.map[a],c=u(i,"");return{rootId:c.id,items:o(r({},c.id,c),d(i,c,n.map))}}if("PASTE"===t.type){if(""===e.rootId)return e;var f=e.items[e.rootId],s=u(f,"");return{rootId:s.id,items:o(r({},s.id,s),d(f,s,e.items))}}return e};t.default=f,t.initialCopiedBranch=l},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];arguments[2];return"SELECT_ITEM"===t.type?t.id||"":"CUT"===t.type||"REMOVE"===t.type?"":e};t.default=r,t.initialSelectedId=""},119:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(4),l=(r(i),n(243)),u=r(l),c=n(252),d=r(c),f=n(72),s=(r(f),function(){return a.default.createElement("div",{id:"app-root"},a.default.createElement(u.default,null),a.default.createElement(d.default,null))});t.default=s},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return{type:"SELECT_ITEM",id:e}},o=function(e,t){return{type:"EDIT_ITEM",id:e,text:t}},a={BEFORE:function(e){return{type:"ADD_ITEM_BEFORE",id:e}},AFTER:function(e){return{type:"ADD_ITEM_AFTER",id:e}},PARENT:function(e){return{type:"ADD_PARENT_ITEM",id:e}},CHILD:function(e){return{type:"ADD_CHILD_ITEM",id:e}}},i=function(e){return{type:"COPY",id:e}},l=function(e){return{type:"PASTE",id:e}},u=function(e){return{type:"CUT",id:e}},c=function(e){return{type:"REMOVE",id:e}},d=function(e){return{type:"NUMBER_CHILD",id:e}};t.selectItem=r,t.editItem=o,t.numberChild=d,t.addItem=a,t.copy=i,t.paste=l,t.cut=u,t.remove=c},243:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(4),l=r(i),u=n(244),c=r(u),d=n(72),f=r(d),s=(0,l.default)(f.default,{allowMultiple:!0,handleNotFoundStyleName:"ignore"})(function(){return a.default.createElement("div",{styleName:"map"},a.default.createElement(c.default,{id:"0",level:0}))});t.default=s},244:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=n(4),f=(r(d),n(11)),s=n(245),p=r(s),h=n(251),v=r(h),m=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,n=e.map,r=e.id,o=e.level,a=e.beNumbered,i=n[r];return c.default.createElement("div",{className:"0"===r?v.default["branch-root"]:v.default.branch},c.default.createElement("div",{className:v.default["parent-item"]},c.default.createElement(p.default,{level:o,content:i,beNumbered:a}),i.childIds.length>0&&c.default.createElement("div",{className:v.default.link})),i.childIds.length>0&&c.default.createElement("div",{className:v.default["child-items"]},i.childIds.map(function(e,r){return c.default.createElement(t,{map:n,key:e,id:e,beNumbered:!!i.numberChild&&r+1,level:Math.min(3,o+1)})})))}}]),t}(c.default.Component);t.default=(0,f.connect)(function(e){return e})(m)},245:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(0),f=r(d),s=n(4),p=r(s),h=n(11),v=n(12),m=n(246),_=r(m),y=n(250),b=r(y),E=(l=(0,p.default)(b.default,{allowMultiple:!0,handleNotFoundStyleName:"ignore"}))(u=function(e){function t(){var e,n,r,i;o(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.firstClickStamp=null,r.clearClickStampTimer=null,r.state={showAddBtnGrp:!1},r.handlePossibleExit=function(e){"Enter"===e.key&&r.input.blur()},r.handleChange=function(e){return r.props.dispatch((0,v.editItem)(r.props.content.id,e.target.value))},r.toggleMask=function(){return r.mask.style.display="none"===r.mask.style.display?"block":"none"},r.handleAddItem=function(e){return r.props.dispatch(v.addItem[e](r.props.content.id))},r.emitEditOrSelect=function(e){e.preventDefault(),r.firstClickStamp?(clearTimeout(r.clearClickStampTimer),r.firstClickStamp=null,r.toggleMask(),r.input.focus()):(r.firstClickStamp=Date.now(),r.clearClickStampTimer=setTimeout(function(){r.firstClickStamp=null,r.props.dispatch((0,v.selectItem)(r.props.content.id))},300))},r.getAddBtnColor=function(e){switch(e){case 0:return"#4a2d5d";case 1:return"#fbc2a4";case 2:return"#c2e3d2";default:return"#a39e8a"}},i=n,a(r,i)}return i(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.content,r=t.level,o=t.selectedId,a=t.beNumbered,i=n.id,l=n.text;return f.default.createElement("div",{styleName:"item-level-"+r+(o===i?"-selected":""),onMouseEnter:function(){return e.setState({showAddBtnGrp:!0})},onMouseLeave:function(){return e.setState({showAddBtnGrp:!1})}},f.default.createElement("textarea",{styleName:"item-input",ref:function(t){return e.input=t},value:l,onKeyDown:this.handlePossibleExit,onChange:this.handleChange,onBlur:this.toggleMask}),f.default.createElement("label",{styleName:"item-mask",ref:function(t){return e.mask=t},onMouseDown:this.emitEditOrSelect}),f.default.createElement(_.default,{color:this.getAddBtnColor(r),onlyRenderChildBtn:"0"===i,showGrp:this.state.showAddBtnGrp,handleClick:this.handleAddItem}),l,a&&f.default.createElement("div",{styleName:"item-no"},a))}}]),t}(f.default.Component))||u;t.default=(0,h.connect)(function(e){return e})(E)},246:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=n(247),f=r(d),s=function(e){function t(){var e,n,r,i;o(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={hoverOn:""},r.handleHoverChange=function(e){return r.setState({hoverOn:r.state.hoverOn?"":e})},i=n,a(r,i)}return i(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.color,r=t.onlyRenderChildBtn,o=t.showGrp,a=t.handleClick,i=this.state.hoverOn,l=r?["CHILD"]:["BEFORE","AFTER","PARENT","CHILD"];return c.default.createElement("div",{style:{fill:n}},l.map(function(t){return c.default.createElement(f.default,{key:t,type:t,show:o&&""===i||i===t,handleToggleHide:e.handleHoverChange,handleClick:function(){return a(t)}})}))}}]),t}(c.default.Component);t.default=s},247:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(4),l=r(i),u=n(248),c=r(u),d=(0,l.default)(c.default,{allowMultiple:!0,handleNotFoundStyleName:"ignore"})(function(e){var t=e.type,n=e.show,r=e.handleToggleHide,o=e.handleClick;return a.default.createElement("div",{styleName:"add-"+t.toLowerCase(),style:{display:n?"block":"none"},onMouseEnter:function(){return r(t)},onMouseLeave:function(){return r(t)},onClick:function(){return o(t)}},a.default.createElement("svg",{viewBox:f[t].viewBox,version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a.default.createElement("path",{d:f[t].path})))}),f={BEFORE:{viewBox:"0 0 48 24",path:"M19.774 15.407l-1.294-1.294 5.519-5.519 5.519 5.519-1.294 1.294-4.226-4.226z"},AFTER:{viewBox:"0 0 48 24",path:"M19.774 8.593l4.226 4.226 4.226-4.226 1.294 1.294-5.52 5.52-5.52-5.52z"},PARENT:{viewBox:"0 0 24 48",path:"M15.704 28.594l-1.406 1.406-6.001-6.001 6.001-6.001 1.406 1.406-4.594 4.594z"},CHILD:{viewBox:"0 0 24 48",path:"M8.297 28.594l4.594-4.594-4.594-4.594 1.406-1.406 6.001 6.001-6.001 6.001z"}};t.default=d},248:function(e,t){e.exports={"add-icon":"add-btn__add-icon--_Vi_TH","add-before":"add-btn__add-before--QsXyge add-btn__add-icon--_Vi_TH","add-after":"add-btn__add-after--D5YKBt add-btn__add-icon--_Vi_TH","add-parent":"add-btn__add-parent--2UVIQI add-btn__add-icon--_Vi_TH","add-child":"add-btn__add-child--2p8Ylr add-btn__add-icon--_Vi_TH"}},250:function(e,t){e.exports={item:"item__item--2i7JEl","item-input":"item__item-input--1x-Z_m","item-mask":"item__item-mask--xPfKrX","item-level-0":"item__item-level-0--1MZhTt item__item--2i7JEl","item-level-0-selected":"item__item-level-0-selected--3XXwQW item__item-level-0--1MZhTt item__item--2i7JEl","item-level-1":"item__item-level-1--1B4fxY item__item--2i7JEl","item-level-1-selected":"item__item-level-1-selected--2QooqB item__item-level-1--1B4fxY item__item--2i7JEl","item-level-2":"item__item-level-2--132V-7 item__item--2i7JEl","item-level-2-selected":"item__item-level-2-selected--1DJIaG item__item-level-2--132V-7 item__item--2i7JEl","item-level-3":"item__item-level-3--1DEPmP item__item--2i7JEl","item-level-3-selected":"item__item-level-3-selected--JzX4vl item__item-level-3--1DEPmP item__item--2i7JEl","item-no":"item__item-no--3MeAKh"}},251:function(e,t){e.exports={branch:"branch__branch--1Mm4G3","branch-root":"branch__branch-root--8VilXt","parent-item":"branch__parent-item--1pnCAn","child-items":"branch__child-items--_Gj8oh",link:"branch__link--1KFD_M"}},252:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),s=r(f),p=n(4),h=r(p),v=n(11),m=n(253),_=r(m),y=n(12),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(y),E=n(34),w=n(258),O=r(w),M=(l=(0,h.default)(O.default,{allowMultiple:!0,handleNotFoundStyleName:"ignore"}))(u=function(e){function t(){var e,n,r,i;o(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={showToolGrp:!1},r.toggleShowToolGrp=function(){return r.setState({showToolGrp:!r.state.showToolGrp})},r.handleOptionsOnMap=function(e){r.props.selectedId&&r.props.dispatch(b[e](r.props.selectedId))},i=n,a(r,i)}return i(t,e),d(t,[{key:"render",value:function(){var e=this,t=this.state.showToolGrp;return s.default.createElement("div",{styleName:"container"},s.default.createElement("div",{styleName:t?"expand-btn-expanded":"expand-btn",onClick:this.toggleShowToolGrp},s.default.createElement("svg",{viewBox:"0 0 36 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t?s.default.createElement("path",{d:g.fold}):s.default.createElement("path",{d:g.expand}))),s.default.createElement("div",{styleName:"tool-grp-container"},s.default.createElement("div",{styleName:"tool-grp",style:{transform:"translateX("+(t?0:320)+"px)",opacity:t?1:0}},s.default.createElement(_.default,c({},C.copy,{svgPath:g.copy,handleClick:function(){return e.handleOptionsOnMap("copy")}})),s.default.createElement(_.default,c({},C.paste,{svgPath:g.paste,handleClick:function(){return e.handleOptionsOnMap("paste")}})),s.default.createElement(_.default,c({},C.cut,{svgPath:g.cut,handleClick:function(){return e.handleOptionsOnMap("cut")}})),s.default.createElement(_.default,c({},C.remove,{svgPath:g.remove,handleClick:function(){return e.handleOptionsOnMap("remove")}})),s.default.createElement("div",{styleName:"vertical-line"}),s.default.createElement(_.default,c({},C.numberChild,{svgPath:g.numberChild,handleClick:function(){return e.handleOptionsOnMap("numberChild")}})),s.default.createElement("div",{styleName:"vertical-line"}),s.default.createElement(_.default,c({},C.save,{svgPath:g.save,handleClick:function(){return(0,E.saveMap)(e.props.map)}})))))}}]),t}(s.default.Component))||u,g={expand:"M24.727 18.948h-5.779v5.779h-1.896v-5.779h-5.779v-1.896h5.779v-5.779h1.896v5.779h5.779v1.896z",fold:"M25.359 19.037h-14.717v-2.074h14.717v2.074z",copy:"M24.888 13.592c0.456 0 0.827 0.37 0.827 0.827v10.47c0 0.456-0.37 0.827-0.827 0.827h-8.266c-0.456 0-0.827-0.37-0.827-0.827v-2.48h-4.684c-0.456 0-0.827-0.37-0.827-0.827v-5.786c0-0.456 0.267-1.093 0.586-1.412l3.513-3.513c0.319-0.319 0.956-0.586 1.412-0.586h3.582c0.456 0 0.827 0.37 0.827 0.827v2.824c0.336-0.198 0.766-0.344 1.102-0.344h3.582zM20.204 15.426l-2.574 2.574h2.574v-2.574zM14.694 12.119l-2.574 2.574h2.574v-2.574zM16.381 17.69l2.721-2.721v-3.582h-3.306v3.582c0 0.456-0.37 0.827-0.827 0.827h-3.582v5.511h4.408v-2.204c0-0.456 0.267-1.094 0.586-1.412zM24.613 24.613v-9.919h-3.306v3.582c0 0.456-0.37 0.827-0.827 0.827h-3.582v5.511h7.715z",paste:"M16.898 24.613h7.715v-5.511h-3.582c-0.456 0-0.827-0.37-0.827-0.827v-3.582h-3.306v9.919zM19.102 12.214v-0.551c0-0.146-0.129-0.276-0.276-0.276h-6.062c-0.146 0-0.276 0.129-0.276 0.276v0.551c0 0.146 0.129 0.276 0.276 0.276h6.062c0.146 0 0.276-0.129 0.276-0.276zM21.306 18h2.575l-2.575-2.575v2.575zM25.715 19.102v5.786c0 0.456-0.37 0.827-0.827 0.827h-8.266c-0.456 0-0.827-0.37-0.827-0.827v-1.378h-4.684c-0.456 0-0.827-0.37-0.827-0.827v-11.572c0-0.456 0.37-0.827 0.827-0.827h9.368c0.456 0 0.827 0.37 0.827 0.827v2.824c0.112 0.069 0.215 0.146 0.31 0.241l3.513 3.513c0.327 0.327 0.586 0.956 0.586 1.412z",cut:"M23.231 11.26h2.247v0.737l-5.231 5.266-1.51-1.51zM18 18.386c0.211 0 0.386-0.175 0.386-0.386s-0.175-0.386-0.386-0.386-0.386 0.175-0.386 0.386 0.175 0.386 0.386 0.386zM13.507 24.003c0.807 0 1.51-0.667 1.51-1.51s-0.702-1.51-1.51-1.51-1.51 0.667-1.51 1.51 0.702 1.51 1.51 1.51zM13.507 15.016c0.807 0 1.51-0.667 1.51-1.51s-0.702-1.51-1.51-1.51-1.51 0.667-1.51 1.51 0.702 1.51 1.51 1.51zM16.245 14.735l9.232 9.267v0.737h-2.247l-5.231-5.231-1.755 1.755c0.175 0.386 0.246 0.772 0.246 1.229 0 1.65-1.334 2.984-2.984 2.984s-2.984-1.334-2.984-2.984 1.334-2.984 2.984-2.984c0.456 0 0.842 0.070 1.229 0.246l1.755-1.755-1.755-1.755c-0.386 0.175-0.772 0.246-1.229 0.246-1.65 0-2.984-1.334-2.984-2.984s1.334-2.984 2.984-2.984 2.984 1.334 2.984 2.984c0 0.456-0.070 0.842-0.246 1.229z",remove:"M24.727 12.627l-5.373 5.373 5.373 5.373-1.354 1.354-5.373-5.373-5.373 5.373-1.354-1.354 5.373-5.373-5.373-5.373 1.354-1.354 5.373 5.373 5.373-5.373z",numberChild:"M13.682 24.192c0 0.941-0.735 1.471-1.625 1.471-0.539 0-1.086-0.18-1.471-0.565l0.488-0.753c0.231 0.214 0.582 0.385 0.907 0.385 0.299 0 0.616-0.145 0.616-0.488 0-0.479-0.547-0.505-0.898-0.479l-0.222-0.479c0.308-0.393 0.59-0.83 0.958-1.163v-0.009c-0.274 0-0.556 0.017-0.83 0.017v0.453h-0.907v-1.3h2.848v0.753l-0.812 0.984c0.573 0.137 0.949 0.582 0.949 1.172zM13.699 18.83v1.36h-3.096c-0.026-0.154-0.051-0.308-0.051-0.462 0-1.582 1.933-1.822 1.933-2.54 0-0.291-0.18-0.445-0.462-0.445-0.299 0-0.547 0.257-0.693 0.496l-0.727-0.505c0.282-0.59 0.864-0.924 1.514-0.924 0.795 0 1.48 0.47 1.48 1.317 0 1.266-1.856 1.548-1.881 2.215h1.086v-0.513h0.898zM25.749 21.558v1.642c0 0.145-0.128 0.274-0.274 0.274h-10.399c-0.154 0-0.274-0.128-0.274-0.274v-1.642c0-0.154 0.12-0.274 0.274-0.274h10.399c0.145 0 0.274 0.12 0.274 0.274zM13.708 13.869v0.847h-2.865v-0.847h0.915c0-0.693 0.009-1.385 0.009-2.078v-0.103h-0.017c-0.094 0.188-0.265 0.316-0.428 0.462l-0.607-0.65 1.163-1.086h0.907v3.455h0.924zM25.749 17.179v1.642c0 0.145-0.128 0.274-0.274 0.274h-10.399c-0.154 0-0.274-0.128-0.274-0.274v-1.642c0-0.154 0.12-0.274 0.274-0.274h10.399c0.145 0 0.274 0.12 0.274 0.274zM25.749 12.8v1.642c0 0.145-0.128 0.274-0.274 0.274h-10.399c-0.154 0-0.274-0.128-0.274-0.274v-1.642c0-0.145 0.12-0.274 0.274-0.274h10.399c0.145 0 0.274 0.128 0.274 0.274z",save:"M21.769 18.74h-2.255v-2.994h-3.030v2.994h-2.254l3.769 3.769zM23.531 16.52c1.938 0.141 3.487 1.761 3.487 3.734 0 2.078-1.691 3.769-3.769 3.769h-9.758c-2.501 0-4.509-2.008-4.509-4.509 0-2.325 1.761-4.227 4.016-4.474 0.951-1.797 2.818-3.065 5.002-3.065 2.748 0 5.002 1.938 5.531 4.544"},C={copy:{name:"复制",shortcut:"Ctrl + C"},paste:{name:"粘贴",shortcut:"Ctrl + V"},cut:{name:"剪切",shortcut:"Ctrl + X"},remove:{name:"删除分支",shortcut:"Delete"},numberChild:{name:"编号子级",shortcut:"Ctrl + L"},save:{name:"保存",shortcut:"Ctrl + S"}};t.default=(0,v.connect)(function(e){return e})(M)},253:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(0),f=r(d),s=n(4),p=r(s),h=n(254),v=r(h),m=n(256),_=r(m),y=(l=(0,p.default)(_.default,{allowMultiple:!0,handleNotFoundStyleName:"ignore"}))(u=function(e){function t(){var e,n,r,i;o(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={clientRect:{},showTip:!1},i=n,a(r,i)}return i(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.name,r=t.shortcut,o=t.svgPath,a=t.handleClick,i=this.state,l=i.clientRect,u=i.showTip;return f.default.createElement("div",{styleName:"btn",onClick:a,onMouseLeave:function(){return e.setState({showTip:!1})},onMouseEnter:function(t){e.setState({showTip:!0,clientRect:t.currentTarget.getBoundingClientRect()})}},f.default.createElement("svg",{viewBox:"0 0 36 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},f.default.createElement("path",{d:o})),u&&f.default.createElement(v.default,{btnRect:l},f.default.createElement("b",null,n),f.default.createElement("div",null,r)))}}]),t}(f.default.Component))||u;t.default=y},254:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=n(23),f=r(d),s=n(4),p=(r(s),n(255)),h=r(p),v=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.rootEl=null,n.containerEl=null,n.ROOT_ID="tool-tip-root",n.rootEl=document.createElement("div"),n.rootEl.id=n.ROOT_ID,document.getElementById("root").appendChild(n.rootEl),n.containerEl=document.createElement("div"),n.containerEl.className=h.default.tip,n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.rootEl.appendChild(this.containerEl);var e=this.props.btnRect,t={top:e.top+"px",left:e.left+"px",transform:"translate(calc("+e.width/2+"px - 50%), calc(-100% - 10px))"};for(var n in t)this.containerEl.style[n]=t[n]}},{key:"componentWillUnmount",value:function(){this.rootEl.removeChild(this.containerEl),this.rootEl.parentNode.removeChild(this.rootEl)}},{key:"render",value:function(){return f.default.createPortal(this.props.children,this.containerEl)}}]),t}(c.default.Component);t.default=v},255:function(e,t){e.exports={tip:"tooltip__tip--1dtEHN"}},256:function(e,t){e.exports={btn:"tool-btn__btn--3z0BWx"}},257:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=n(23),f=r(d),s=function(e){function t(){var e,n,r,i;o(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.handleUnmount=function(e){0==e.target.style.opacity&&f.default.unmountComponentAtNode(e.target.parentNode)},i=n,a(r,i)}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=f.default.findDOMNode(this);e.style.opacity=1,setTimeout(function(){e.style.opacity=0},3e3)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(document.getElementById("toast-root"))}},{key:"render",value:function(){var e={opacity:0,position:"fixed",left:"50%",bottom:"36px",transform:"translateX(-50%)",minWidth:"300px",height:"36px",lineHeight:"36px",backgroundColor:"rgba(144, 139, 125, .5)",borderRadius:"18px",color:"#fff",fontSize:"16px",textAlign:"center",boxShadow:"0 2px 8px 1px rgba(144, 139, 125, .2)",transition:"all 120ms ease-out"};return c.default.createElement("div",{style:e,onTransitionEnd:this.handleUnmount},this.props.text)}}]),t}(c.default.Component),p=function(e){var t=document.createElement("div");t.id="toast-root",document.body.appendChild(t),f.default.render(c.default.createElement(s,{text:e}),t)};t.default=p},258:function(e,t){e.exports={container:"tools__container--1nBsRN","expand-btn":"tools__expand-btn--2fwcGy","expand-btn-expanded":"tools__expand-btn-expanded--Lc8a00 tools__expand-btn--2fwcGy","tool-grp-container":"tools__tool-grp-container--2POP2x","tool-grp":"tools__tool-grp--32xDgn","vertical-line":"tools__vertical-line--3TZvCL"}},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),a=n(34),i=function(e){return function(t){if(t.target===document.body){var n=e.getState(),r=n.selectedId,i=n.map,l=""!==r,u=e.dispatch;l&&t.ctrlKey&&"c"===t.key.toLowerCase()?u(o.copy(r)):l&&t.ctrlKey&&"v"===t.key.toLowerCase()?u(o.paste(r)):l&&t.ctrlKey&&"x"===t.key.toLowerCase()?u(o.cut(r)):l&&t.ctrlKey&&"l"===t.key.toLowerCase()?(t.preventDefault(),u(o.numberChild(r))):l&&"delete"===t.key.toLowerCase()?u(o.remove(r)):t.ctrlKey&&"s"===t.key.toLowerCase()&&(t.preventDefault(),(0,a.saveMap)(i))}}};t.default=i},260:function(e,t){},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.retrieveMap=t.saveMap=void 0;var r=n(257),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a="__MIND_MAP",i=function(e){try{var t=JSON.stringify(e);localStorage.setItem(a,t),(0,o.default)("保存成功，下次打开可继续编辑 :)")}catch(e){(0,o.default)("保存失败")}},l=function(){try{var e=localStorage.getItem(a);return null===e?void 0:JSON.parse(e)}catch(e){return}};t.saveMap=i,t.retrieveMap=l},72:function(e,t){e.exports={map:"map__map--3vxAyr"}},73:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),a=r(o),i=n(23),l=n(37),u=n(11),c=n(112),d=r(c),f=n(12),s=n(119),p=r(s),h=n(34),v=n(259),m=r(v);n(260);var _=(0,h.retrieveMap)(),y=(0,l.createStore)(d.default,{map:_});document.body.onkeydown=(0,m.default)(y),document.body.onclick=function(e){(e.target===document.body||"string"==typeof e.target.className&&0===e.target.className.indexOf("branch"))&&y.dispatch((0,f.selectItem)())};var b=function(){var e=window.innerWidth,t=window.innerHeight,n=333-e/4,r=3333-t/3;window.scroll(n,r)};window.onload=function(){b(),(0,i.render)(a.default.createElement(u.Provider,{store:y},a.default.createElement(p.default,null)),document.getElementById("root"))}}},[73]);