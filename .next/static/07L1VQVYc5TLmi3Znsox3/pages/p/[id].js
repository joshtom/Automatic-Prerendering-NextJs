(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"62Ei":function(e,n,t){"use strict";var r=t("q1tI"),o=t.n(r),s=t("YFqc"),i=t.n(s),a=o.a.createElement,u={marginRight:15},c=function(){return a("div",null,a(i.a,{href:"/"},a("a",{style:u},"Home")),a(i.a,{href:"/about"},a("a",{style:u},"About")))},f=o.a.createElement,l={margin:20,padding:20,border:"1px solid #DDD"};n.a=function(e){return f("div",{style:l},f(c,null),e.children)}},O40h:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t("eVuF"),o=t.n(r);function s(e,n,t,r,s,i,a){try{var u=e[i](a),c=u.value}catch(f){return void t(f)}u.done?n(c):o.a.resolve(c).then(r,s)}function i(e){return function(){var n=this,t=arguments;return new o.a(function(r,o){var i=e.apply(n,t);function a(e){s(i,r,o,a,u,"next",e)}function u(e){s(i,r,o,a,u,"throw",e)}a(void 0)})}}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("/HRN"),o=t("WaGi"),s=t("ZDA2"),i=t("/+P4"),a=t("N9n2"),u=t("5Uuq"),c=t("KI45");n.__esModule=!0,n.default=void 0;var f,l=c(t("LX0d")),p=t("CxY0"),h=u(t("q1tI")),d=(c(t("17x9")),c(t("nOHt"))),v=(t("P5f7"),t("g/15"));function w(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var m=new l.default,g=window.IntersectionObserver;function y(){return f||(g?f=new g(function(e){e.forEach(function(e){if(m.has(e.target)){var n=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),m.delete(e.target),n())}})},{rootMargin:"200px"}):void 0)}var b=function(e){function n(e){var t;return r(this,n),(t=s(this,i(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,r=null;return function(o,s){if(r&&o===n&&s===t)return r;var i=e(o,s);return n=o,t=s,r=i,i}}(function(e,n){return{href:w(e),as:n?w(n):n}}),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=t.formatUrls(t.props.href,t.props.as),i=s.href,a=s.as;if(function(e){var n=(0,p.parse)(e,!1,!0),t=(0,p.parse)((0,v.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(i)){var u=window.location.pathname;i=(0,p.resolve)(u,i),a=a?(0,p.resolve)(u,a):i,e.preventDefault();var c=t.props.scroll;null==c&&(c=a.indexOf("#")<0),d.default[t.props.replace?"replace":"push"](i,a,{shallow:t.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},t.p=!1!==e.prefetch,t}return a(n,e),o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var n=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,n){var t=y();return t?(t.observe(e),m.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}m.delete(e)}):function(){}}(e,function(){n.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href,t=(0,p.resolve)(e,n);d.default.prefetch(t)}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,o=t.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var s=h.Children.only(n),i={ref:function(n){e.handleRef(n),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(n):"object"===typeof s.ref&&(s.ref.current=n))},onMouseEnter:function(n){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(n),e.prefetch()},onClick:function(n){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(i.href=o||r),h.default.cloneElement(s,i)}}]),n}(h.Component);b.propTypes=void 0;var k=b;n.default=k},d5Yn:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/p/[id]",function(){return t("nOj+")}])},"m/Gl":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var o=new XMLHttpRequest,s=[],i=[],a={},u=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:u,headers:{keys:function(){return s},entries:function(){return i},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var c in o.open(n.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){s.push(n=n.toLowerCase()),i.push([n,t]),a[n]=a[n]?a[n]+","+t:t}),t(u())},o.onerror=r,o.withCredentials="include"==n.credentials,n.headers)o.setRequestHeader(c,n.headers[c]);o.send(n.body||null)})}},"nOj+":function(e,n,t){"use strict";t.r(n);var r=t("ln6h"),o=t.n(r),s=t("O40h"),i=t("q1tI"),a=t.n(i),u=t("62Ei"),c=t("zgjP"),f=t.n(c),l=a.a.createElement,p=function(e){return l(u.a,null,l("h1",null,e.show.name),l("p",null,e.show.summary.replace(/<[\/]?p>/g,"")),l("img",{src:e.show.image.medium}))};p.getInitialProps=function(){var e=Object(s.a)(o.a.mark(function e(n){var t,r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.id,e.next=3,f()("https://api.tvmaze.com/shows/".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,console.log("Fetched show: ".concat(s.name)),e.abrupt("return",{show:s});case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),n.default=p},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["d5Yn",1,0]]]);