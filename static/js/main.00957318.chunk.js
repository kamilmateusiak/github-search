(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{27:function(e,t,r){e.exports=r(53)},32:function(e,t,r){},53:function(e,t,r){"use strict";r.r(t);var n,a=r(1),s=r.n(a),i=r(19),o=r.n(i),c=(r(32),r(33),r(4)),u=r(8),l=r(20),b=r(26),d=r(21),p=r.n(d),g=r(2);!function(e){e.Text="14px"}(n||(n={}));var j=Object(g.a)("font-size:",n.Text,";box-sizing:border-box;display:flex;text-align:left;flex-wrap:wrap;align-items:flex-start;margin-bottom:20px;input{display:block;width:100%;border:1px solid #fff;color:#fff;border-radius:4px;margin:0;padding:10px;box-sizing:border-box;background-color:transparent;margin-top:10px;}"),m=r(0),f=function(e){var t=e.label,r=e.onChange,n=e.name,a=e.value;return Object(m.a)("label",{css:j},t,Object(m.a)("input",{type:"text",name:n,value:a,onChange:r}))},h=function(e){var t=e.onChange,r=e.delay,n=Object(b.a)(e,["onChange","delay"]),s=Object(a.useState)(""),i=Object(u.a)(s,2),o=i[0],c=i[1],d=Object(a.useRef)(p()(t,r)),g=Object(a.useCallback)((function(e){var t=e.target.value;c(t),d.current(t)}),[c]);return Object(m.a)(f,Object(l.a)({},n,{value:o,onChange:g}))};h.defaultProps={delay:500};var O=h;var v,x={name:"b0dycv",styles:"min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;"},y={name:"1n286ra",styles:"max-width:900px;width:100%;margin:20px auto;padding:0 30px;"},w={name:"iif40d",styles:"background-color:#414141;width:100%;color:#d9b792;"},k={name:"8atqhb",styles:"width:100%;"},C={name:"1mohtgr",styles:"text-transform:uppercase;font-weight:700;"},L=function(e){return Object(m.a)("div",{css:x},Object(m.a)("header",{css:w},Object(m.a)("div",{css:y},Object(m.a)("h1",{css:C},e.title),e.header)),Object(m.a)("main",{css:k},Object(m.a)("div",{css:y},e.children)))},S=r(5),z=r.n(S),U=r(23),E=r(24),q=r(25),_=r.n(q);!function(e){e[e.Success=200]="Success",e[e.NotFound=404]="NotFound"}(v||(v={}));var B=new(function(){function e(){Object(U.a)(this,e),this.api=void 0,this.api=_.a.create({baseURL:"https://api.github.com"})}return Object(E.a)(e,[{key:"request",value:function(e){var t,r;return z.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={result:null,error:null},n.prev=1,n.next=4,z.a.awrap(this.api.request(e));case 4:(r=n.sent).status!==v.Success?t.error=new Error(r.statusText):t.result=r.data,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),t.error=n.t0;case 11:return n.abrupt("return",t);case 12:case"end":return n.stop()}}),null,this,[[1,8]])}},{key:"get",value:function(e){return this.request({method:"GET",url:e})}}]),e}());function F(e){if(!e)return null;var t=e.id,r=e.name;return{id:t,login:e.login,name:r,email:e.email,url:e.html_url,apiUrls:{repos:e.repos_url},avatarUrl:e.avatar_url,description:e.bio}}function P(e){if(!e||null===e)return[];return e.map((function(e){return function(e){return e?{id:e.id,name:e.name,language:e.language,isPrivate:e.private,starsCount:e.stargazers_count,watchersCount:e.watchers_count,url:e.html_url,fullName:e.full_name}:null}(e)})).filter((function(e){return null!==e}))}var I={findUser:function(e){var t,r;return z.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",{result:null,error:new Error("Please provide user login")});case 2:return t="/users/".concat(e),n.next=5,z.a.awrap(B.get(t));case 5:return r=n.sent,n.abrupt("return",Object(c.a)({},r,{result:F(r.result)}));case 7:case"end":return n.stop()}}))},getMostPopularRepos:function(e){var t,r;return z.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",{result:null,error:new Error("Please provide user login")});case 2:return t="/search/repositories?q=user:".concat(e,"&sort=stars&order=desc&per_page=3"),n.next=5,z.a.awrap(B.get(t));case 5:return r=n.sent,n.abrupt("return",Object(c.a)({},r,{result:P(r.result&&r.result.items)}));case 7:case"end":return n.stop()}}))}},M=r(9),R=r(7);function T(){var e=Object(M.a)(["\n  0% {\n    background-position: 100% 50%;\n  }\n\n  100% {\n    background-position: 0 50%;\n  }\n"]);return T=function(){return e},e}var N={name:"1lz15hj",styles:"margin:0;margin-bottom:10px;"},G={name:"1jfvg9w",styles:"align-items:flex-start;"},J={name:"q2y3yl",styles:"color:inherit;"},W=Object(m.b)(T()),$=Object(g.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#dde2e6",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.05;return Object(g.a)("background-image:linear-gradient( 90deg,",Object(R.a)(t,e)," 25%,",e," 37%,",Object(R.a)(t,e)," 63% );animation:",W," 1.4s ease infinite;background-size:400% 100%;")}()," height:14px;margin-top:5px;width:200px;");var A={name:"17mrx6g",styles:"padding:0;margin:0;list-style:none;"},D=Object(g.a)(""),H=function(e){return Object(m.a)("ul",{css:A},e.children)},K=function(e){return Object(m.a)("li",{css:D},e.children)};var Q={name:"5rmrew",styles:"display:flex;align-items:center;flex-direction:column;justify-content:center;border:1px solid #e2e2e2;border-radius:4px;padding:20px;box-sizing:border-box;color:#414141;margin:10px 0;transition:1s ease-in-out all;"},V=function(e){var t=e.cssStyles,r=e.isLoading,n=e.children,a=e.error,s=e.isEmpty,i=e.loadingState;return r?Object(m.a)("div",{css:Object(g.a)([Q,t],";label:ContentBox;")},i||"Loading"):a?Object(m.a)("div",{css:Object(g.a)([Q,t],";label:ContentBox;")},a):s?Object(m.a)("div",{css:Object(g.a)([Q,t],";label:ContentBox;")},"Empty"):Object(m.a)("div",{css:Object(g.a)([Q,t],";label:ContentBox;")},n)},X=function(){return Object(m.a)(H,null,Object(m.a)("h4",{css:N},"Most popular repositories:"),Object(m.a)("div",{css:$}),Object(m.a)("div",{css:$}),Object(m.a)("div",{css:$}))},Y=function(e){var t=e.repos,r=e.isLoading,n=e.error;return Object(m.a)(V,{cssStyles:G,isLoading:r,error:n,isEmpty:!t||0===t.length,loadingState:Object(m.a)(X,null)},Object(m.a)("h4",{css:N},"Most popular repositories:"),Object(m.a)(H,null,t&&t.map((function(e){return Object(m.a)(K,{key:e.id},Object(m.a)("a",{css:J,href:e.url},e.name),"(",e.starsCount,")")}))))};function Z(){var e=Object(M.a)(["\n  0% {\n    background-position: 100% 50%;\n  }\n\n  100% {\n    background-position: 0 50%;\n  }\n"]);return Z=function(){return e},e}var ee={name:"101zow6",styles:"width:200px;height:200px;border-radius:100px;border:1px solid #e2e2e2;"},te={name:"1mi5qty",styles:"color:#414141;font-weight:normal;margin:0;margin-top:10px;"},re={name:"1h6b6rl",styles:"height:14px;width:200px;margin:0 auto;margin-top:10px;"},ne={name:"bizuqa",styles:"color:#414141;margin:0;margin-top:10px;"},ae={name:"1wzlo7j",styles:"height:14px;max-width:400px;width:100%;margin:0 auto;margin-top:10px;"},se=Object(m.b)(Z()),ie=Object(g.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#dde2e6",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.05;return Object(g.a)("background-image:linear-gradient( 90deg,",Object(R.a)(t,e)," 25%,",e," 37%,",Object(R.a)(t,e)," 63% );animation:",se," 1.4s ease infinite;background-size:400% 100%;")}(),""),oe=function(){return Object(m.a)(s.a.Fragment,null,Object(m.a)("div",{css:Object(g.a)([ee,ie],";label:UserInfoSkeleton;")}),Object(m.a)("div",{css:Object(g.a)([te,re,ie],";label:UserInfoSkeleton;")}),Object(m.a)("div",{css:Object(g.a)([ne,ae,ie],";label:UserInfoSkeleton;")}))},ce=function(e){var t=e.user,r=e.error,n=e.isLoading;return Object(m.a)(V,{isLoading:n,error:r,isEmpty:!t,loadingState:Object(m.a)(oe,null)},t&&Object(m.a)(s.a.Fragment,null,t.avatarUrl&&Object(m.a)("a",{href:t.url},Object(m.a)("img",{css:ee,src:t.avatarUrl,alt:"".concat(t.name," avatar")})),Object(m.a)("h5",{css:te},t.name||t.login),t.description&&Object(m.a)("p",{css:ne},t.description)))},ue={isLoading:!1,error:void 0,user:void 0},le={isLoading:!1,error:void 0,repos:void 0},be=function(){var e=Object(a.useState)(ue),t=Object(u.a)(e,2),r=t[0],n=t[1],i=Object(a.useState)(le),o=Object(u.a)(i,2),l=o[0],b=o[1],d=Object(a.useCallback)((function(e){if(""===e)return n(ue),void b(le);n(Object(c.a)({},ue,{isLoading:!0})),b(Object(c.a)({},le,{isLoading:!0})),I.findUser(e).then((function(t){if(t.error)return n(Object(c.a)({},ue,{error:t.error.message})),void b(Object(c.a)({},le));t.result&&(n(Object(c.a)({},ue,{user:t.result})),I.getMostPopularRepos(e).then((function(e){e.error?b(Object(c.a)({},le,{error:e.error.message})):e.result&&b(Object(c.a)({},le,{repos:e.result}))})))}))}),[n,b]);return Object(m.a)(L,{title:"Github search",header:Object(m.a)(O,{onChange:d,name:"Search",label:"Find user"})},Object(m.a)(s.a.Fragment,null,Object(m.a)(ce,{user:r.user,isLoading:r.isLoading,error:r.error}),r.user&&Object(m.a)(Y,{repos:l.repos,isLoading:l.isLoading,error:l.error})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(m.a)(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.00957318.chunk.js.map