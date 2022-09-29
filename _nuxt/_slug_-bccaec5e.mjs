import{_ as k,o as s,c as n,j as w,k as j,l as C,u as E,m as N,n as V,g as y,a as t,b,w as x,t as o,f as g,p as u,q as I,s as R,h as A,F,r as L,d as v}from"./entry-16a6e229.mjs";import{_ as P}from"./banner-bdc88f10.mjs";import{d as f}from"./sessions-329eaa0d.mjs";const D={name:"SessionSkeleton"},M={class:"w-full flex items-start flex-col bg-white dark:bg-dark"},T=w('<h4 class="pt-2 h-4 w-20 bg-gray-200 skeleton"></h4><p class="pt-2 h-4 mt-2 w-40 bg-gray-200 skeleton"></p><p class="pt-2 h-4 mt-2 w-56 bg-gray-200 skeleton"></p><h6 class="pt-2 h-4 w-48 bg-gray-200 skeleton mt-4 md:mt-10"></h6><p class="text-px-13 green-dark pt-2 h-4 mt-2 w-24 bg-gray-200 skeleton"></p><p class="text-px-13 green-dark pt-2 h-4 mt-2 w-48 bg-gray-200 skeleton"></p><p class="text-px-13 green-dark pt-2 h-4 mt-2 w-64 bg-gray-200 skeleton"></p><div class="w-full justify-center md:justify-start flex mt-4 md:mt-10"></div>',8),U=[T];function q(r,_,c,e,d,i){return s(),n("div",M,U)}var O=k(D,[["render",q]]);const z={name:"SpeakerSkeleton"},G=w('<div class="w-full flex items-start flex text-center"><div class="w-24 h-24 md:w-32 md:h-32 p-2 md:p-4 flex-none bg-green-c-2 rounded"><img class="w-full p-0 rounded-full border-2 border-primary" src="https://via.placeholder.com/150/E2E8F0?text=elixirConfAfrica" alt="Sunset in the mountains"></div><div class="w-full text-left px-2 py-1 lg:py-4"><div class="text-px-13-slab-b h-3 w-32 bg-gray-200 skeleton"></div><p class="text-px-13 gray h-4 w-40 bg-gray-200 mt-2 skeleton"></p><p class="text-px-13 green-dark mt-2 h-4 w-40 bg-gray-200 skeleton"></p></div></div><div class="w-full mb-10"><h4 class="black text-px-13-slab-b mt-2 md:mt-4"> Bio: </h4><p class="text-px-13 green-dark pt-2 h-4 mt-2 w-40 bg-gray-200 skeleton"></p><p class="text-px-13 green-dark pt-2 h-4 mt-2 w-56 bg-gray-200 skeleton"></p><p class="text-px-13 green-dark pt-2 h-4 mt-2 w-24 bg-gray-200 skeleton"></p><p class="text-px-13 green-dark pt-2 h-4 mt-2 w-48 bg-gray-200 skeleton"></p><p class="text-px-13 green-dark pt-2 h-4 mt-2 w-64 bg-gray-200 skeleton"></p></div>',2),H=[G];function J(r,_,c,e,d,i){return s(),n("div",null,H)}var K=k(z,[["render",J]]);const Q={__name:"[slug]",setup(r,{expose:_}){_();const c=j(!0),e=C(),d=E();let i=[];for(const p in f.data)i=[...i,...f.data[p]];const a=i.find(p=>p.slug===e.params.slug);N(()=>{setTimeout(()=>{c.value=!1},100)}),V({title:a.title,meta:[{hid:"description",name:"description",content:a.description.slice(0,100)+"..."},{hid:"og:description",name:"description",content:a.description.slice(0,100)+"..."},{hid:"og:url",property:"og:url",content:d.BASE_URL+e.fullPath},{hid:"twitter:url",name:"twitter:url",content:d.BASE_URL+e.fullPath},{hid:"og:title",property:"og:title",content:a.title},{hid:"twitter:title",name:"twitter:title",content:a.title},{hid:"og:image",property:"og:image",content:a.session_image!==null?a.session_image:"/images/logo-purple.png"},{hid:"twitter:image",name:"twitter:image",content:a.session_image!==null?a.session_image:"/images/logo-purple.png"}]});const m={pending:c,route:e,config:d,sessions:i,session:a,data:f,SpeakerSkeleton:K};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}},h=r=>(I("data-v-66b8a7b6"),r=r(),R(),r),W={class:"d-container"},X=v("Session detail"),Y={class:"w-full px-0 sm:px-10"},Z={class:"w-full container mx-auto flex flex-wrap items-start px-0 md:px-12 py-0 md:py-3"},tt={class:"w-full flex-wrap lg:w-4/12 flex border-r-0 lg:border-r border-primary dark:border-primary-dark pr-0 lg:pr-4 mb-6 md:mb-0"},et={class:"w-full py-4"},st={key:0,class:"w-full text-xl text-primary dark:text-primary-dark"},at={class:"flex flex-col text-left"},ot={class:"w-full flex items-start flex"},rt={class:"w-28 md:w-40 p-2 md:p-3 flex-none bg-secondary dark:bg-secondary-dark rounded"},nt=["src","alt"],lt={class:"w-full text-left px-2 py-1 lg:py-4"},it={class:"text-base"},dt={class:"text-sm text-dark-text dark:text-dark-text-dark"},ct={class:"text-px-13 pt-1"},pt=["href"],_t=h(()=>t("i",{class:"fa fa-twitter"},null,-1)),mt={class:"w-full"},xt={key:0,class:"text-primary dark:text-primary-dark text-base mt-2 md:mt-4"},gt={class:"text-dark-text dark:text-dark-text-dark text-sm mt-2 md:mt-4 mb-4 lg:mb-16"},ut={class:"w-full flex-wrap content-start items-start lg:w-6/12 px-0 lg:px-6 flex"},ht=h(()=>t("div",{class:"w-full flex items-center py-4"},[t("h4",{class:"text-xl text-primary dark:text-primary-dark mr-0 md:mr-10"}," Session ")],-1)),ft={key:0,class:"w-full flex items-start flex-col"},kt={key:0,class:"rounded-lg"},yt=["src"],bt={class:"text-primary dark:text-primary-dark text-base mt-4"},wt={class:"text-xl gray mt-2 font-bold"},vt={class:"text-sm text-dark-text dark:text-dark-text-dark uppercase mt-1"},St=h(()=>t("h6",{class:"text-base font-bold text-primary dark:text-primary-dark mt-4 md:mt-10 w-full"}," Session Description ",-1)),$t={class:"p gray mt-2"},Bt={key:1,class:"w-full justify-center md:justify-start flex flex-col mt-4 md:mt-10 mb-4 lg:mb-16"},jt=h(()=>t("div",{class:"w-full flex"},null,-1)),Ct=[jt];function Et(r,_,c,e,d,i){const a=P,m=y("slide"),p=y("carousel"),S=A,$=O;return s(),n("div",null,[t("div",W,[b(a,null,{default:x(()=>[X]),_:1}),t("section",Y,[t("div",Z,[t("div",tt,[t("div",et,[e.pending?g("",!0):(s(),n("h4",st," Speaker"+o(e.session.speakers.length>1?"s":""),1))]),e.pending?(s(),u(e.SpeakerSkeleton,{key:1})):(s(),u(S,{key:0},{default:x(()=>[b(p,{"per-page":1,nav:!1,"wrap-around":"","pause-autoplay-on-hover":"",loop:!0,"pagination-enabled":!0,transition:500,autoplay:3e3,"mouse-drag":!1},{default:x(()=>[(s(!0),n(F,null,L(e.session.speakers,(l,B)=>(s(),u(m,{key:B,class:"w-full"},{default:x(()=>[t("div",at,[t("div",ot,[t("div",rt,[t("img",{class:"w-full p-0 rounded-xl border-2 border-primary dark:border-primary-dark",src:l.avatar,alt:l.name},null,8,nt)]),t("div",lt,[t("p",it,o(l.name),1),t("p",dt,o(l.tagline),1),t("p",ct,[t("a",{href:l.twitter,target:"_blank"},[_t,v(" "+o(l.name),1)],8,pt)])])]),t("div",mt,[l.biography!==null?(s(),n("h4",xt," Bio: ")):g("",!0),t("p",gt,o(l.biography),1)])])]),_:2},1024))),128))]),_:1})]),_:1}))]),t("div",ut,[ht,e.pending?(s(),u($,{key:1})):(s(),n("div",ft,[e.session.session_image!==null?(s(),n("div",kt,[t("img",{class:"h-48",src:e.session.session_image,alt:"session image"},null,8,yt)])):g("",!0),t("h4",bt,o(e.session.session_format),1),t("p",wt,o(e.session.title),1),t("p",vt,o(r.$hour(e.session.start_date_time))+" - "+o(r.$hour(e.session.end_date_time)),1),St,t("p",$t,o(e.session.description),1),e.session.is_serviceSession?g("",!0):(s(),n("div",Bt,Ct))]))])])])])])}var Rt=k(Q,[["render",Et],["__scopeId","data-v-66b8a7b6"]]);export{Rt as default};
