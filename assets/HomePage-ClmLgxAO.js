import{Q as g}from"./AppPage-OviaOs6d.js";import{d as _,m as T,_ as p,r as n,o as s,c,w as t,a,t as o,b as u,e as O,f as v,F as N,g as m}from"./index-CEy_EXS8.js";import{u as A}from"./main-Cl-fP2ux.js";import{M as d,v as R}from"./consts-Brrv2HHV.js";import{S as U}from"./ScrollablePage-CGGrP7VV.js";import"./CardButton-DWSzFBdx.js";const E=_({components:{MenuButton:d},props:{course:{type:Object,default:void 0}},computed:{...T(A,["getScore"]),score(){return this.getScore(this.course.name)},scoreLabel(){return Number(this.score||0).toFixed(2)}}}),L={class:"row"};function P(e,f,b,$,h,S){const r=n("menu-button");return s(),c(r,{to:{name:e.course.name}},{default:t(()=>[a("div",L,[a("div",null,o(e.course.title),1),u(g),a("div",null,o(e.scoreLabel)+"%",1)])]),_:1},8,["to"])}const y=p(E,[["render",P]]),B=_({components:{CourseButton:y,MenuButton:d,ScrollablePage:U},data:()=>({version:R}),computed:{courses(){return[{title:this.$t("COURSE_COUNTRY_CAPITAL"),name:"country-capital"},{title:this.$t("COURSE_CAPITAL_COUNTRY"),name:"capital-country"},{title:this.$t("COURSE_FLAG_COUNTRY"),name:"flag-country"},{title:this.$t("COURSE_COUNTRY_FLAG"),name:"country-flag"}]}}}),I={class:"text-h6 non-selectable muted"};function w(e,f,b,$,h,S){const r=n("course-button"),l=n("menu-button"),C=n("scrollable-page");return s(),c(C,{title:e.$t("_APP_TITLE")},{corner:t(()=>[a("div",I,o(e.$t("APP_VERSION",{number:e.version})),1)]),default:t(()=>[(s(!0),O(N,null,v(e.courses,i=>(s(),c(r,{key:i.name,course:i},null,8,["course"]))),128)),u(l,{icon:"fa-solid fa-screwdriver-wrench",to:{name:"settings"},class:"q-mt-xl"},{default:t(()=>[m(o(e.$t("SETTINGS")),1)]),_:1}),u(l,{icon:"fa-solid fa-lightbulb",to:{name:"about"}},{default:t(()=>[m(o(e.$t("ABOUT")),1)]),_:1})]),_:1},8,["title"])}const Q=p(B,[["render",w],["__scopeId","data-v-9840d9b1"]]);export{Q as default};
