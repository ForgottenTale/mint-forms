(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{8679:function(e,t,n){"use strict";var r=n(59864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function i(e){return r.isMemo(e)?a:l[e.$$typeof]||o}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=a;var c=Object.defineProperty,u=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,_=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(_){var o=d(n);o&&o!==_&&e(t,o,r)}var a=u(n);p&&(a=a.concat(p(n)));for(var l=i(t),y=i(n),x=0;x<a.length;++x){var m=a[x];if(!s[m]&&(!r||!r[m])&&(!y||!y[m])&&(!l||!l[m])){var b=f(n,m);try{c(t,m,b)}catch(g){}}}}return t}},7532:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return n(59233)}])},47174:function(e,t,n){"use strict";var r=n(85893),o=n(96438),s=n.n(o);t.Z=function(e){var t=e.label,n=e.placeholder,o=e.value,a=e.onChange,l=e.errors;return(0,r.jsxs)("div",{className:s().inputContainer,children:[(0,r.jsx)("p",{className:s().label,children:t}),(0,r.jsx)("input",{placeholder:n,value:o,style:{boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",outlineColor:""!==l?"red":"#1479ff"},onChange:function(e){return a(e)},className:s().input}),(0,r.jsx)("p",{className:s().errorMsg,children:l})]})}},77265:function(e,t,n){"use strict";var r=n(85893),o=n(58236),s=n.n(o);t.Z=function(e){var t=e.label,n=e.placeholder,o=e.value,a=e.onChange,l=e.errors;return(0,r.jsxs)("div",{className:s().inputContainer,children:[(0,r.jsx)("p",{className:s().label,children:t}),(0,r.jsx)("textarea",{placeholder:n,value:o,style:{boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",outlineColor:""!==l?"red":"#1479ff"},onChange:function(e){return a(e)},className:s().input}),(0,r.jsx)("p",{className:s().errorMsg,children:l})]})}},47704:function(e,t,n){"use strict";var r=n(85893),o=n(29396),s=n.n(o);t.Z=function(e){var t=e.label,n=e.onClick,o=e.checked;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:s().radioButton,onClick:function(){return n(t)},children:[(0,r.jsx)("input",{className:s().radio,type:"radio",onChange:function(e){return n(e)},checked:o}),(0,r.jsx)("label",{children:t})]})})}},59233:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(85893),o=n(67294),s=n(92271),a=n.n(s),l=function(e){var t=e.onChange,n=e.state,s=e.label,l=(0,o.useState)(n),i=l[0],c=l[1];return(0,r.jsxs)("div",{className:a().togglebutton,children:[(0,r.jsx)("p",{className:a().p,children:s}),(0,r.jsx)("div",{className:a().togglebutton_outer,onClick:function(){c(!i),t()},children:(0,r.jsx)("div",{className:i?a().togglebutton_inner_active:a().togglebutton_inner})})]})},i=n(47174),c=n(65399),u=n.n(c),p=n(65601),f=n(47704),d=n(77265),_=n(81811),y=function(e){var t=e.data,n=e.array,s=(e.index,e.setData),a=(0,o.useState)("shortAnswer"),c=a[0],p=a[1];return(0,r.jsxs)("div",{className:u().inputField,children:[(0,r.jsxs)("div",{className:u().inputField_con,children:[(0,r.jsx)("input",{className:u().inputField_ques,defaultValue:"Question"}),(0,r.jsx)(_.ZP,{options:[{label:"Checkbox",value:"choice"},{label:"Long answer",value:"longAnswer"},{label:"Short answer",value:"shortAnswer"}],defaultValue:{label:"Short answer",value:"shortAnswer"},onChange:function(e){p(e.value)}})]}),"shortAnswer"===c?(0,r.jsx)(i.Z,{label:"",placeholder:"Enter your answers",onChange:function(){return p("shortAnswer")},value:"HI",errors:"DASFA"}):null,"longAnswer"===c?(0,r.jsx)(d.Z,{label:"",placeholder:"Enter your answers",onChange:function(){return p("longAnswer")},value:"HI",name:"DFDSFSD",errors:"DASFA"}):null,"choice"===c?(0,r.jsx)(f.Z,{label:"Question",checked:!0,onClick:function(){return p("longAnswer")}}):null,(0,r.jsxs)("div",{className:u().inputField_con,children:[(0,r.jsx)(l,{state:!1,onChange:function(){return console.log()},label:"Required"}),(0,r.jsx)(l,{state:!0,onChange:function(){return console.log()},label:"Long answer"}),(0,r.jsx)("div",{onClick:function(){return function(){var e=n.indexOf(t);e>-1&&s([n.splice(e,1)])}()},children:"Remove"})]})]})},x=function(){var e=(0,o.useState)([[{type:"checkbox"}]]),t=e[0],n=e[1];return(0,r.jsx)(p.Z,{children:(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsx)("input",{className:u().title,defaultValue:"Untitled Form"}),t[0].map((function(e,o){return(0,r.jsx)(y,{data:e,setData:n,array:t[0],index:o},o)})),(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:function(){var e=t;e[0].push({type:"shortAnswer"}),console.log(e),n([e[0]])},children:"Add new"})})]})})}},96438:function(e){e.exports={label:"styles_label__DQ9xL",input:"styles_input__h6qDh",inputContainer:"styles_inputContainer___1bxz",errorMsg:"styles_errorMsg__ASszU"}},58236:function(e){e.exports={label:"styles_label__vOLU3",input:"styles_input__l0tmT",inputContainer:"styles_inputContainer__R0Oi3",errorMsg:"styles_errorMsg__SeKEo"}},29396:function(e){e.exports={radioButton:"styles_radioButton__nwR2f",radio:"styles_radio__HKRA3",option:"styles_option__vzXbj",button:"styles_button__IofV9"}},92271:function(e){e.exports={togglebutton:"styles_togglebutton__V_dTe",p:"styles_p__eUUx3",togglebutton_outer:"styles_togglebutton_outer__oNfhj",togglebutton_inner:"styles_togglebutton_inner__Bu5gl",active:"styles_active__cuCJr"}},65399:function(e){e.exports={container:"Create_container___ggYn",title:"Create_title__6NRYr",inputField:"Create_inputField__qxStm",inputField_con:"Create_inputField_con__hgxA_",inputField_ques:"Create_inputField_ques__YGjgl"}},69921:function(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,s=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,_=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,x=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,h=n?Symbol.for("react.scope"):60119;function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case p:case s:case l:case a:case d:return e;default:switch(e=e&&e.$$typeof){case c:case f:case x:case y:case i:return e;default:return t}}case o:return t}}}function j(e){return v(e)===p}t.AsyncMode=u,t.ConcurrentMode=p,t.ContextConsumer=c,t.ContextProvider=i,t.Element=r,t.ForwardRef=f,t.Fragment=s,t.Lazy=x,t.Memo=y,t.Portal=o,t.Profiler=l,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return j(e)||v(e)===u},t.isConcurrentMode=j,t.isContextConsumer=function(e){return v(e)===c},t.isContextProvider=function(e){return v(e)===i},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return v(e)===f},t.isFragment=function(e){return v(e)===s},t.isLazy=function(e){return v(e)===x},t.isMemo=function(e){return v(e)===y},t.isPortal=function(e){return v(e)===o},t.isProfiler=function(e){return v(e)===l},t.isStrictMode=function(e){return v(e)===a},t.isSuspense=function(e){return v(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===s||e===p||e===l||e===a||e===d||e===_||"object"===typeof e&&null!==e&&(e.$$typeof===x||e.$$typeof===y||e.$$typeof===i||e.$$typeof===c||e.$$typeof===f||e.$$typeof===b||e.$$typeof===g||e.$$typeof===h||e.$$typeof===m)},t.typeOf=v},59864:function(e,t,n){"use strict";e.exports=n(69921)}},function(e){e.O(0,[811,601,774,888,179],(function(){return t=7532,e(e.s=t);var t}));var t=e.O();_N_E=t}]);