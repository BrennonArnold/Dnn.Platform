!function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var o={};return t.m=e,t.c=o,t.p="http://localhost:8050/dist/",t(0)}([function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}var a=o(20),r=n(a),l=o(6),i=n(l),u=o(29),s=n(u),c=o(1),p=n(c);window.dnn||(window.dnn={}),window.dnn.Sites||(window.dnn.Sites={}),window.dnn.Sites.CommonActionTypes=p,window.dnn.Sites.CommonComponents=r,window.dnn.Sites.CommonReducers=s,window.dnn.Sites.CommonActions=i},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.pagination=t.visiblePanel=t.portal=void 0;var a=o(22),r=n(a),l=o(23),i=n(l),u=o(21),s=n(u);t.portal=r["default"],t.visiblePanel=i["default"],t.pagination=s["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},n=o({},window.dnn.utility);t["default"]=n},function(e,t){e.exports=dnn.nodeModules.React},function(e,t){"use strict";function o(e,t){if(e.some(function(e){return e.PortalID===t.PortalID})&&(e=e.filter(function(e){return e.PortalID!==t.PortalID})),!e.some(function(e){return e.PortalID===t.PortalID}))return e=[t].concat(e),e=e.sort(function(e,t){var o=e.PortalID,n=t.PortalID;return o<n?-1:o>n?1:0})}function n(e,t){if(e.some(function(e){return e.Value===t.Value})&&(e=e.filter(function(e){return e.Value!==t.Value})),!e.some(function(e){return e.Value===t.Value}))return e=[t].concat(e),e=e.sort(function(e,t){var o=e.Name,n=t.Name;return o<n?-1:o>n?1:0})}function a(e,t){var o=e;return"[object Array]"===Object.prototype.toString.call(t)&&t.forEach(function(e){var t=!1,n=0;o.forEach(function(o,a){e.condition===o.condition&&(t=!0,n=a)}),t?o[n]=e:o.push(e)}),o}Object.defineProperty(t,"__esModule",{value:!0}),t.addPortalToList=o,t.addTemplateToList=n,t.getFinalSwitchCase=a},function(e,t){e.exports=dnn.nodeModules.CommonComponents.GridCell},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CommonPaginationActions=t.CommonVisiblePanelActions=t.CommonExportPortalActions=t.CommonPortalListActions=void 0;var a=o(24),r=n(a),l=o(26),i=n(l),u=o(27),s=n(u),c=o(25),p=n(c);t.CommonPortalListActions=i["default"],t.CommonExportPortalActions=r["default"],t.CommonVisiblePanelActions=s["default"],t.CommonPaginationActions=p["default"]},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(n[r]=!0)}for(a=0;a<t.length;a++){var l=t[a];"number"==typeof l[0]&&n[l[0]]||(o&&!l[2]?l[2]=o:o&&(l[2]="("+l[2]+") and ("+o+")"),e.push(l))}},e}},function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],a=f[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(s(n.parts[r],t))}else{for(var l=[],r=0;r<n.parts.length;r++)l.push(s(n.parts[r],t));f[n.id]={id:n.id,refs:1,parts:l}}}}function a(e){for(var t=[],o={},n=0;n<e.length;n++){var a=e[n],r=a[0],l=a[1],i=a[2],u=a[3],s={css:l,media:i,sourceMap:u};o[r]?o[r].parts.push(s):t.push(o[r]={id:r,parts:[s]})}return t}function r(e,t){var o=h(),n=E[E.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),E.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function l(e){e.parentNode.removeChild(e);var t=E.indexOf(e);t>=0&&E.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function s(e,t){var o,n,a;if(t.singleton){var r=x++;o=v||(v=i(t)),n=c.bind(null,o,r,!1),a=c.bind(null,o,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=u(t),n=d.bind(null,o),a=function(){l(o),o.href&&URL.revokeObjectURL(o.href)}):(o=i(t),n=p.bind(null,o),a=function(){l(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}function c(e,t,o,n){var a=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var r=document.createTextNode(a),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(r,l[t]):e.appendChild(r)}}function p(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function d(e,t){var o=t.css,n=t.sourceMap;n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var a=new Blob([o],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(a),r&&URL.revokeObjectURL(r)}var f={},g=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=g(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=g(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,x=0,E=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=a(e);return n(o,t),function(e){for(var r=[],l=0;l<o.length;l++){var i=o[l],u=f[i.id];u.refs--,r.push(u)}if(e){var s=a(e);n(s,t)}for(var l=0;l<r.length;l++){var u=r[l];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete f[u.id]}}}};var b=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CommonPortalService=void 0;var a=o(33),r=n(a);t.CommonPortalService=r["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(14),r=n(a),l={get:function(e){var t="Sites";return r["default"].getResx(t,e)}};t["default"]=l},,function(e,t){e.exports=dnn.nodeModules.CommonComponents.Button},function(e,t){e.exports=dnn.nodeModules.ReactRedux},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},n=o({},window.dnn.utility);t["default"]=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{portalBeingExported:e.exportPortal.portalBeingExported}}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(3),p=n(c),d=o(13),f=o(6),g=o(44),m=n(g),h=o(49),v=n(h),x=o(48),E=n(x),b=o(41),P=n(b),y=o(5),_=n(y),C=o(43),T=n(C),O=o(52),L=n(O),M=o(47),R=n(M),w=o(45),S=n(w),I=o(12),A=n(I),D=o(42),B=n(D),j=o(51),N=n(j),k=o(46),V=n(k),G=o(2),U=n(G),W=o(34),F=n(W),z=o(10),Q=n(z);o(38);var Z={fileName:"",description:"",portalId:-1,pages:[],locales:[],isMultiLanguage:!1,includeContent:!1,includeFiles:!1,includeRoles:!0,includeProfile:!0,includeModules:!0,localizationCulture:"en-US"},H={width:"100%",height:200,marginTop:0,border:"1px solid #c8c8c8"},K=["fileName","description"],X=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={localData:{locales:[],errors:{fileName:!1,description:!1}},portalBeingExported:Z,reloadPages:!1},e}return l(t,e),s(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props;t.dispatch(f.CommonExportPortalActions.getPortalLocales(t.portalBeingExported.PortalID,function(o){var n=e.state.portalBeingExported,a=e.state.localData;n.portalId=t.portalBeingExported.PortalID,n.portalName=t.portalBeingExported.PortalName,a.locales=o.Results,n.locales=o.Results.map(function(e){return e.Code}),n.isMultiLanguage=t.portalBeingExported.contentLocalizable,n.localizationCulture=t.portalBeingExported.DefaultLanguage,e.setState({portalBeingExported:n,localData:a})}))}},{key:"onChange",value:function(e,t){var o="object"===("undefined"==typeof t?"undefined":u(t))?t.target.value:t,n=this.state.portalBeingExported;n[e]=o,this.setState({portalBeingExported:n}),K.some(function(t){return t==e})&&this.ValidateTexts(e)}},{key:"onExportPortal",value:function(){var e=this,t=this.props,o=this.state;this.Validate()&&t.dispatch(f.CommonExportPortalActions.exportPortal(o.portalBeingExported,function(n){if(U["default"].notify(n.Message),n.Success){var a=o.portalBeingExported;a.fileName="",a.description="",e.setState({portalBeingExported:a},function(){t.onCancel()})}}))}},{key:"Validate",value:function(){var e=!0,t=this.state.portalBeingExported;return e=this.ValidateTexts(),e&&t.pages.length<=0&&(e=!1,U["default"].notify(Q["default"].get("ErrorPages"))),e}},{key:"ValidateTexts",value:function(e){var t=this,o=!0,n=this.state.portalBeingExported,a=this.state.localData;return K.map(function(r){void 0!==e&&e!=r||(""===n[r]?(o=!1,a.errors[r]=!0):a.errors[r]=!1),t.setState({})}),o}},{key:"onLanguageSelectionChange",value:function(e){var t=this,o=this.state.portalBeingExported,n=this.state.reloadPages;n=!0,o.localizationCulture=e.value,this.setState({portalBeingExported:o,reloadPages:n},function(){t.setState({reloadPages:!1})})}},{key:"createLocaleOptions",value:function(e){var t=[];return t=this.state.localData.locales.map(function(t){return e?{label:t.EnglishName,value:t.Code}:{label:t.EnglishName,value:t.Code}})}},{key:"onLanguageCheckBoxChange",value:function(e,t){var o=this.state.portalBeingExported;t&&!o.locales.some(function(t){return t===e})?o.locales=o.locales.concat([e]):!t&&o.locales.some(function(t){return t===e})&&(o.locales=o.locales.filter(function(t){return t!==e})),this.setState({portalBeingExported:o})}},{key:"createLanguageDropDownOptions",value:function(){var e=this,t=this.state;return t.localData.locales.map(function(o){return{label:p["default"].createElement("div",null,p["default"].createElement(P["default"],{label:o.EnglishName,value:t.portalBeingExported.locales.some(function(e){return e===o.Code}),onChange:e.onLanguageCheckBoxChange.bind(e,o.Code),enabled:e.props.portalBeingExported.DefaultLanguage!==o.Code}),o.Code===t.portalBeingExported.localizationCulture&&p["default"].createElement(L["default"],{messages:[F["default"].format(Q["default"].get("lblNote"),o.EnglishName)]})),value:o.Code}})}},{key:"updatePagesToExport",value:function(e){var t=this.state.portalBeingExported;t.pages=e,this.setState({portalBeingExported:t})}},{key:"render",value:function(){var e=this.props,t=this.state,o=this.createLocaleOptions(),n=this.createLanguageDropDownOptions(),a={portalId:t.portalBeingExported.portalId,cultureCode:t.portalBeingExported.localizationCulture,isMultiLanguage:t.portalBeingExported.isMultiLanguage,excludeAdminTabs:!0,disabledNotSelectable:!1,roles:"",sortOrder:0};return console.log(U["default"]),p["default"].createElement(_["default"],{className:"export-portal-container"},p["default"].createElement(v["default"],{title:Q["default"].get("ControlTitle_template")}),p["default"].createElement(E["default"],null,p["default"].createElement("div",{className:"export-portal"},p["default"].createElement(_["default"],{className:"export-site-container"},p["default"].createElement("h3",{className:"site-template-info-title"},Q["default"].get("titleTemplateInfo")),p["default"].createElement(_["default"],null,p["default"].createElement(R["default"],{label:Q["default"].get("plPortals"),tooltipMessage:Q["default"].get("plPortals.Help"),enabled:!1,value:t.portalBeingExported.portalName,error:!1})),p["default"].createElement(_["default"],null,p["default"].createElement(R["default"],{label:Q["default"].get("plTemplateName")+"*",tooltipMessage:Q["default"].get("plTemplateName.Help"),onChange:this.onChange.bind(this,"fileName"),error:t.localData.errors.fileName,errorMessage:Q["default"].get("valFileName.ErrorMessage"),value:t.portalBeingExported.fileName})),p["default"].createElement(_["default"],null,p["default"].createElement(S["default"],{label:Q["default"].get("plDescription")+"*",tooltipMessage:Q["default"].get("plDescription.Help"),className:"portal-description",onChange:this.onChange.bind(this,"description"),error:t.localData.errors.description,errorMessage:Q["default"].get("valDescription.ErrorMessage"),value:t.portalBeingExported.description}),p["default"].createElement("hr",null)),p["default"].createElement(T["default"],null,p["default"].createElement("div",{className:"export-switches"},p["default"].createElement(N["default"],{label:Q["default"].get("plContent"),tooltipMessage:Q["default"].get("plContent.Help"),value:t.portalBeingExported.includeContent,onChange:this.onChange.bind(this,"includeContent")}),p["default"].createElement(N["default"],{label:Q["default"].get("lblFiles"),tooltipMessage:Q["default"].get("lblFiles.Help"),value:t.portalBeingExported.includeFiles,onChange:this.onChange.bind(this,"includeFiles")}),p["default"].createElement(N["default"],{label:Q["default"].get("lblRoles"),tooltipMessage:Q["default"].get("lblRoles.Help"),value:t.portalBeingExported.includeRoles,onChange:this.onChange.bind(this,"includeRoles")}),p["default"].createElement(N["default"],{label:Q["default"].get("lblProfile"),tooltipMessage:Q["default"].get("lblProfile.Help"),value:t.portalBeingExported.includeProfile,onChange:this.onChange.bind(this,"includeProfile")}),p["default"].createElement(N["default"],{label:Q["default"].get("lblModules"),tooltipMessage:Q["default"].get("lblModules.Help"),value:t.portalBeingExported.includeModules,onChange:this.onChange.bind(this,"includeModules")}),e.portalBeingExported.contentLocalizable&&p["default"].createElement(N["default"],{label:Q["default"].get("lblMultilanguage"),tooltipMessage:Q["default"].get("lblMultilanguage.Help"),value:t.portalBeingExported.isMultiLanguage,onChange:this.onChange.bind(this,"isMultiLanguage")})),t.portalBeingExported.portalId>=0&&p["default"].createElement("div",{className:"export-pages"},e.portalBeingExported.contentLocalizable&&p["default"].createElement("div",{className:"language-box"},p["default"].createElement(m["default"],{label:Q["default"].get("lblLanguages"),tooltipMessage:Q["default"].get("lblLanguages.Help")}),!t.portalBeingExported.isMultiLanguage&&p["default"].createElement(B["default"],{options:o,value:t.portalBeingExported.localizationCulture,onSelect:this.onLanguageSelectionChange.bind(this)}),t.portalBeingExported.isMultiLanguage&&p["default"].createElement(B["default"],{options:n,label:Q["default"].get("lblSelectLanguages"),closeOnClick:!1})),p["default"].createElement(m["default"],{label:Q["default"].get("lblPages"),tooltipMessage:Q["default"].get("lblPages.Help")}),p["default"].createElement(V["default"],{serviceFramework:U["default"]&&U["default"].sf,PortalTabsParameters:a,scrollAreaStyle:H,OnSelect:this.updatePagesToExport.bind(this),allSelected:!0,IsMultiSelect:!0,IsInDropDown:!1,ShowCount:!1,Reload:this.state.reloadPages,ShowIcon:!1}))),p["default"].createElement(_["default"],{className:"site-action-buttons"},p["default"].createElement(A["default"],{type:"secondary",onClick:e.onCancel.bind(this)},Q["default"].get("cmdCancel")),p["default"].createElement(A["default"],{type:"primary",onClick:this.onExportPortal.bind(this)},Q["default"].get("cmdExport")))))))}}]),t}(c.Component);t["default"]=(0,d.connect)(i)(X)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(3),r=n(a),l=o(5),i=n(l),u=function(e){var t=e.label,o=e.portalAliases;return r["default"].createElement(i["default"],{className:"portal-name-info"},r["default"].createElement("label",null,t),r["default"].createElement(i["default"],null,o.map(function(e){return r["default"].createElement("a",{href:e.link,target:"_blank"},e.url)})))};t["default"]=u},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(3),r=n(a),l=o(16),i=n(l),u=o(18),s=n(u),c=o(5),p=n(c),d=o(39),f=n(d),g=function(e){var t=e.portal,o=e.portalStatisticInfo,n=e.portalButtons;return r["default"].createElement(p["default"],{className:f["default"].portalListItem},r["default"].createElement(p["default"],{className:"portal-info-container"},r["default"].createElement(p["default"],{className:"portal-main-info",columnSize:35},r["default"].createElement(i["default"],{label:t.PortalName,portalAliases:t.PortalAliases}),r["default"].createElement(p["default"],{className:"icon-container"},n)),r["default"].createElement(p["default"],{className:"portal-statistics-info",columnSize:65},o.map(function(e){return r["default"].createElement(s["default"],{label:e.label,value:e.value})}))))};t["default"]=g},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(3),r=n(a),l=function(e){var t=e.label,o=e.value;return r["default"].createElement("div",{className:"portal-statistic"},r["default"].createElement("div",{className:"statistic-label"},r["default"].createElement("p",null,t,": ",r["default"].createElement("span",null,o))))};t["default"]=l},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{portals:e.portal.portals,totalCount:e.portal.totalCount}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(3),c=n(s),p=o(13),d=o(17),f=n(d),g=o(10),m=n(g),h=o(6),v=o(5),x=n(v),E=o(2),b=n(E),P=o(53),y=n(P),_=o(12),C=(n(_),o(50)),T=o(40),O=n(T),L=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return l(t,e),u(t,[{key:"onDelete",value:function(e,t){var o=this.props;b["default"].confirm(m["default"].get("deletePortal").replace("{0}",e.PortalName),m["default"].get("ConfirmPortalDelete"),m["default"].get("CancelPortalDelete"),function(){o.dispatch(h.CommonPortalListActions.deletePortal(e.PortalID,t))})}},{key:"onSetting",value:function(e){alert("Not yet implemented!")}},{key:"onPreview",value:function(e){e.PortalAliases&&e.PortalAliases.length>0&&window.open(e.PortalAliases[0].link)}},{key:"navigateMap",value:function(e,t){var o=this.props;o.dispatch(h.CommonVisiblePanelActions.selectPanel(e))}},{key:"onExport",value:function(e){var t=this.props;t.dispatch(h.CommonExportPortalActions.setPortalBeingExported(e,this.navigateMap.bind(this,2)))}},{key:"getPortalButtons",value:function(e,t){var o=[{icon:C.PreviewIcon,onClick:this.onPreview.bind(this,e,t)},{icon:C.SettingsIcon,onClick:this.onSetting.bind(this,e,t)},{icon:C.TemplateIcon,onClick:this.onExport.bind(this,e,t)}];return e.allowDelete&&(o=o.concat([{icon:C.TrashIcon,onClick:this.onDelete.bind(this,e,t)}])),o.map(function(e){return c["default"].createElement("div",{dangerouslySetInnerHTML:{__html:e.icon},onClick:e.onClick})})}},{key:"getPortalMapping",value:function(e){return[{label:m["default"].get("SiteDetails_SiteID"),value:e.PortalID},{label:m["default"].get("SiteDetails_Users"),value:e.Users},{label:m["default"].get("SiteDetails_Updated"),value:(0,y["default"])(e.LastModifiedOnDate).fromNow()},{label:m["default"].get("SiteDetails_Pages"),value:e.Pages}].concat(this.props.getPortalMapping&&this.props.getPortalMapping(e)||[])}},{key:"getDetailList",value:function(){var e=this,t=this.props;return t.portals.map(function(t,o){return c["default"].createElement(f["default"],{key:"portal-"+t.PortalID,portal:t,portalButtons:e.getPortalButtons(t,o),portalStatisticInfo:e.getPortalMapping(t)})})}},{key:"cancelExport",value:function(e){void 0!==e&&e.preventDefault(),this.setState({portalBeingExported:{}}),this.navigateMap(0)}},{key:"render",value:function(){var e=this.getDetailList(),t=this.props;return c["default"].createElement(x["default"],{className:O["default"].siteList},c["default"].createElement(x["default"],{className:"portal-list-container "+t.className},e))}}]),t}(s.Component);t["default"]=(0,p.connect)(i)(L)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ExportPortal=t.ListView=void 0;var a=o(19),r=n(a),l=o(15),i=n(l);t.ListView=r["default"],t.ExportPortal=i["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={LOAD_MORE:"LOAD_MORE"};t["default"]=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={RETRIEVED_PORTALS:"RETRIEVED_PORTALS",RETRIEVED_PORTALS_CONCAT:"RETRIEVED_PORTALS_CONCAT",RETRIEVED_PORTAL_TEMPLATES:"RETRIEVED_PORTAL_TEMPLATES",RETRIEVED_PORTAL_TABS_DESCENDANTS:"RETRIEVED_PORTAL_TABS_DESCENDANTS",RETRIEVED_PORTAL_TABS:"RETRIEVED_PORTAL_TABS",CREATED_PORTAL:"CREATED_PORTAL",DELETED_PORTAL:"DELETED_PORTAL",EXPORTED_PORTAL_TEMPLATE:"EXPORTED_PORTAL_TEMPLATE",SET_PORTAL_BEING_EXPORTED:"SET_PORTAL_BEING_EXPORTED"};t["default"]=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={SELECT_PANEL:"SELECT_PANEL"};t["default"]=o},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){u["default"].notify(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),l=o(9),i=o(2),u=n(i),s={getPortalLocales:function(e,t){return function(o){l.CommonPortalService.getPortalLocales(e,function(e){t&&t(e)},a)}},exportPortal:function(e,t){return function(o){l.CommonPortalService.exportPortal(e,function(e){o({type:r.portal.EXPORTED_PORTAL_TEMPLATE,payload:{Success:e.Success,Message:e.Message,Template:e.Template}}),t&&t(e)},a)}},setPortalBeingExported:function(e,t){return function(o){o({type:r.portal.SET_PORTAL_BEING_EXPORTED,payload:e}),u["default"].throttleExecution(t)}}};t["default"]=s},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(1),r=o(2),l=n(r),i={loadMore:function(e){return function(t){t({type:a.pagination.LOAD_MORE}),e&&l["default"].throttleExecution(e)}}};t["default"]=i},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){u["default"].notifyError(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),l=o(9),i=o(2),u=n(i),s={deletePortal:function(e,t,o){return function(n){l.CommonPortalService.deletePortal(e,function(l){l.Success?(n({type:r.portal.DELETED_PORTAL,payload:{index:t,portalId:e}}),o&&o(l)):a(l.ErrorMessage)},a)}},getPortalTemplates:function(e){return function(t){l.CommonPortalService.getPortalTemplates(function(o){t({type:r.portal.RETRIEVED_PORTAL_TEMPLATES,payload:{templates:o.Results.Templates,totalCount:o.TotalResults}}),e&&e(o)},a)}},createPortal:function(e,t){return function(o){console.log(r.portal),l.CommonPortalService.createPortal(e,function(e){o({type:r.portal.CREATED_PORTAL,payload:{Portal:e.Portal,Success:e.Success,ErrorMessage:e.ErrorMessage}}),t&&t(e)},a)}},loadPortals:function(e,t,o){return function(n){l.CommonPortalService.getPortals(e,function(e){n(t?{type:r.portal.RETRIEVED_PORTALS_CONCAT,payload:{portals:e.Results,totalCount:e.TotalResults}}:{type:r.portal.RETRIEVED_PORTALS,payload:{portals:e.Results,totalCount:e.TotalResults}}),o&&o(e)},a)}}};t["default"]=s},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),a={selectPanel:function(e){return function(t){t({type:n.visiblePanel.SELECT_PANEL,payload:{selectedPage:e}})}}};t["default"]=a},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r({templates:[],totalTemplateCount:0,portalBeingExported:{}},e),n=arguments[1],a=(0,i.getFinalSwitchCase)(c,t),l=r({},o);return a.forEach(function(e){if(e.condition===n.type){var t=e.functionToRun(o,n);l=r(l,t)}}),l}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};t["default"]=a;var l=o(1),i=o(4),u=o(2),s=n(u),c=[{condition:l.portal.SET_PORTAL_BEING_EXPORTED,functionToRun:function(e,t){return{portalBeingExported:t.payload}}},{condition:l.portal.RETRIEVED_PORTAL_TEMPLATES,functionToRun:function(e,t){return{templates:t.payload.templates,totalTemplateCount:t.payload.totalCount}}},{condition:l.portal.EXPORTED_PORTAL_TEMPLATE,functionToRun:function(e,t){if(t.payload.Success){var o=r([],s["default"].getObjectCopy(e.templates)),n=r(e.totalTemplateCount);return{templates:(0,i.addTemplateToList)(o,t.payload.Template),totalTemplateCount:n+1}}return e}}]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.pagination=t.visiblePanel=t.exportPortal=t.portal=void 0;var a=o(31),r=n(a),l=o(28),i=n(l),u=o(32),s=n(u),c=o(30),p=n(c);t.portal=r["default"],t.exportPortal=i["default"],t.visiblePanel=s["default"],t.pagination=p["default"]},function(e,t,o){"use strict";function n(e,t){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a({pageIndex:0,pageSize:10,portalGroupId:-1,filter:""},e),n=arguments[1],r=(0,l.getFinalSwitchCase)(i,t),u=a({},o);return r.forEach(function(e){if(e.condition===n.type){var t=e.functionToRun(o,n);u=a(u,t)}}),u}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};t["default"]=n;var r=o(1),l=o(4),i=[{condition:r.pagination.LOAD_MORE,functionToRun:function(e,t){return{pageIndex:e.pageIndex+1}}}]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}function r(e,t){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l({portals:[],totalCount:0},e),n=arguments[1],a=(0,u.getFinalSwitchCase)(p,t),r=l({},o);return a.forEach(function(e){if(e.condition===n.type){var t=e.functionToRun(o,n);r=l(r,t)}}),r}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};t["default"]=r;var i=o(1),u=o(4),s=o(2),c=n(s),p=[{condition:i.portal.RETRIEVED_PORTALS,functionToRun:function(e,t){return{portals:t.payload.portals,totalCount:t.payload.totalCount}}},{condition:i.portal.DELETED_PORTAL,functionToRun:function(e,t){var o=l(e.totalCount);return{portals:[].concat(a(e.portals.slice(0,t.payload.index)),a(e.portals.slice(t.payload.index+1))),totalCount:o-1}}},{condition:i.portal.RETRIEVED_PORTALS_CONCAT,functionToRun:function(e,t){return{portals:e.portals.concat(t.payload.portals),totalCount:t.payload.totalCount}}},{condition:i.portal.CREATED_PORTAL,functionToRun:function(e,t){if(t.payload.Success){var o=l([],c["default"].getObjectCopy(e.portals)),n=l(e.totalCount);return{portals:(0,u.addPortalToList)(o,t.payload.Portal),totalCount:n+1}}return e}}]},function(e,t,o){"use strict";function n(e,t){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a({selectedPage:0},e),n=arguments[1],r=(0,l.getFinalSwitchCase)(i,t),u=a({},o);return r.forEach(function(e){if(e.condition===n.type){var t=e.functionToRun(o,n);u=a(u,t)}}),u}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};t["default"]=n;var r=o(1),l=o(4),i=[{condition:r.visiblePanel.SELECT_PANEL,functionToRun:function(e,t){return{selectedPage:t.payload.selectedPage}}}]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){var t=[];for(var o in e)e.hasOwnProperty(o)&&t.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return t.join("&")}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(2),u=n(i),s=function(){function e(){a(this,e)}return l(e,[{key:"getServiceFramework",value:function(e){var t=u["default"].sf;return t.moduleRoot="PersonaBar",t.controller=e,t}},{key:"getPortalLocales",value:function(e,t,o){var n=this.getServiceFramework("Sites");n.get("GetPortalLocales?portalId="+e,{},t,o)}},{key:"deletePortal",value:function(e,t,o){var n=this.getServiceFramework("Sites");n.post("DeletePortal?portalId="+e,{},t,o)}},{key:"exportPortal",value:function(e,t,o){var n=this.getServiceFramework("Sites");n.post("ExportPortalTemplate",e,t,o)}},{key:"getPortalTemplates",value:function(e,t){var o=this.getServiceFramework("Sites");o.get("GetPortalTemplates",{},e,t)}},{key:"createPortal",value:function(e,t,o){var n=this.getServiceFramework("Sites");n.post("CreatePortal",e,t,o)}},{key:"getPortals",value:function(e,t,o){var n=this.getServiceFramework("Sites");n.get("GetPortals?"+r(e),{},t,o)}}]),e}(),c=new s;t["default"]=c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={format:function n(){var n=arguments[0],e=arguments;return n.replace(/{(\d+)}/gi,function(t,o){var n=parseInt(o)+1;
return e[n]})}};t["default"]=o},function(e,t,o){t=e.exports=o(7)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.export-portal{float:left}.export-portal .normalPanel,.export-portal .searchPanel,.export-portal .socialpanelbody,.export-portal .socialpanelbody>div{float:left;width:100%}.export-portal .export-site-container{padding:50px 35px}.export-portal .export-site-container .dnn-multi-line-input-with-error,.export-portal .export-site-container .dnn-single-line-input-with-error{width:100%}.export-portal .export-site-container .portal-description .dnn-ui-common-multi-line-input{height:130px;overflow:auto}.export-portal .export-site-container .site-template-box{margin-top:25px}.export-portal .export-site-container .site-template-box .dnn-label{display:block;width:100%}.export-portal .export-site-container .site-thumbnails-container{width:100%}.export-portal .export-site-container .site-thumbnails-container .dnn-dropdown-with-error{width:100%;margin-top:25px;margin-bottom:35px}.export-portal .export-site-container .site-type-container{margin-top:25px}.export-portal .export-site-container .site-type-container .dnn-radio-buttons{padding-top:6px}.export-portal .export-site-container .site-type-container .dnn-radio-buttons>label{margin-right:25px}.export-portal .export-site-container .site-type-container .dnn-radio-buttons ul li label{float:left}.export-portal .export-site-container .site-type-container .home-directory .dnn-label{width:40%;margin-right:0}.export-portal .export-site-container .site-type-container .home-directory .dnn-label>label{font-size:15px}.export-portal .export-site-container .site-type-container .home-directory .input-tooltip-container{width:60%}.export-portal .export-site-container .site-type-container #home-directory{width:100%}.export-portal .export-site-container .export-switches{margin-top:25px;border-right:1px solid #c8c8c8;padding-right:35px}.export-portal .export-site-container .export-switches .dnn-switch-container{width:100%;margin-top:15px}.export-portal .export-site-container .export-switches .dnn-switch-container .switch-label{width:55%}.export-portal .export-site-container .export-switches .dnn-switch-container .dnn-switch{float:right}.export-portal .export-site-container .export-pages{float:left;margin-top:25px;margin-left:35px;box-sizing:border-box}.export-portal .export-site-container .export-pages .dnn-label{margin-bottom:5px;font-weight:700}.export-portal .export-site-container .export-pages .dnn-label .dnn-ui-common-tooltip{font-weight:400}.export-portal .export-site-container .export-pages .dnn-dropdown{width:300px;margin-bottom:15px}.export-portal .export-site-container .export-pages .language-box{float:left;width:100%;height:70px}.export-portal .export-site-container .export-pages .dnn-checkbox-container{float:left}.export-portal .export-site-container .export-pages .dnn-checkbox-container .checkbox{margin-bottom:2px}.export-portal .export-site-container .export-pages .dnn-label,.export-portal .export-site-container .export-pages .dnn-label label{float:left}.export-portal .export-site-container .export-pages .dnn-dropdown .collapsible-content ul li{display:-webkit-box}.export-portal .export-site-container .export-pages .dnn-dropdown .collapsible-content ul li .dnn-ui-common-tooltip{float:left}.export-portal .export-site-container .export-pages div.tooltip-text{max-width:250px}.export-portal .export-site-container .site-action-buttons{text-align:center;margin-top:25px}.export-portal .export-site-container .site-action-buttons .dnn-ui-common-button{margin-right:10px}#notification-dialog{overflow-wrap:break-word}",""])},function(e,t,o){t=e.exports=o(7)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.VOZGLhchLWIgRIMdlmQVG{float:left;width:100%;box-sizing:border-box;border:1px solid #c8c8c8;padding:15px;margin-bottom:15px;background:#fff}.VOZGLhchLWIgRIMdlmQVG *{box-sizing:border-box}.VOZGLhchLWIgRIMdlmQVG .portal-main-info{border-right:1px solid #c8c8c8}.VOZGLhchLWIgRIMdlmQVG .portal-main-info .portal-name-info label{font-weight:700;display:block;margin-bottom:5px}.VOZGLhchLWIgRIMdlmQVG .portal-main-info .portal-name-info a{color:#1e88c3;max-width:100%;word-wrap:break-word}.VOZGLhchLWIgRIMdlmQVG .portal-main-info:hover .icon-container>div svg{fill:#c8c8c8}.VOZGLhchLWIgRIMdlmQVG .portal-main-info:hover .icon-container>div svg:hover{fill:#6f7273}.VOZGLhchLWIgRIMdlmQVG .portal-main-info:hover .icon-container>div svg:active{fill:#1e88c3}.VOZGLhchLWIgRIMdlmQVG .portal-main-info .icon-container{margin-top:10px}.VOZGLhchLWIgRIMdlmQVG .portal-main-info .icon-container>div{display:inline;margin-right:10px}.VOZGLhchLWIgRIMdlmQVG .portal-main-info .icon-container>div svg{cursor:pointer;width:20px;height:20px;fill:#fff}.VOZGLhchLWIgRIMdlmQVG .portal-statistics-info{padding:0 15px}.VOZGLhchLWIgRIMdlmQVG .portal-statistics-info .portal-statistic{float:left;width:50%}.VOZGLhchLWIgRIMdlmQVG .portal-statistics-info .portal-statistic .statistic-label{padding:0 15px;float:left;width:100%;margin-bottom:5px}.VOZGLhchLWIgRIMdlmQVG .portal-statistics-info .portal-statistic .statistic-label p span{float:right;margin-right:15px}",""]),t.locals={portalListItem:"VOZGLhchLWIgRIMdlmQVG"}},function(e,t,o){t=e.exports=o(7)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.mKGNTUYco7qjKwW4ii19_{display:table;width:100%;box-sizing:border-box}.mKGNTUYco7qjKwW4ii19_ .portal-list-container{transition:.5s;opacity:1}.mKGNTUYco7qjKwW4ii19_ .portal-list-container.hidden{opacity:0}",""]),t.locals={siteList:"mKGNTUYco7qjKwW4ii19_"}},function(e,t,o){var n=o(35);"string"==typeof n&&(n=[[e.id,n,""]]);o(8)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,o){var n=o(36);"string"==typeof n&&(n=[[e.id,n,""]]);o(8)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,o){var n=o(37);"string"==typeof n&&(n=[[e.id,n,""]]);o(8)(n,{});n.locals&&(e.exports=n.locals)},function(e,t){e.exports=dnn.nodeModules.CommonComponents.Checkbox},function(e,t){e.exports=dnn.nodeModules.CommonComponents.Dropdown},function(e,t){e.exports=dnn.nodeModules.CommonComponents.GridSystem},function(e,t){e.exports=dnn.nodeModules.CommonComponents.Label},function(e,t){e.exports=dnn.nodeModules.CommonComponents.MultiLineInputWithError},function(e,t){e.exports=dnn.nodeModules.CommonComponents.PagePicker},function(e,t){e.exports=dnn.nodeModules.CommonComponents.SingleLineInputWithError},function(e,t){e.exports=dnn.nodeModules.CommonComponents.SocialPanelBody},function(e,t){e.exports=dnn.nodeModules.CommonComponents.SocialPanelHeader},function(e,t){e.exports=dnn.nodeModules.CommonComponents.SvgIcons},function(e,t){e.exports=dnn.nodeModules.CommonComponents.Switch},function(e,t){e.exports=dnn.nodeModules.CommonComponents.Tooltip},function(e,t){e.exports=window.dnn.nodeModules.Moment}]);