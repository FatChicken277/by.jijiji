import{_ as L,r as l,i as B,j as E,b as i,e as s,t as V,g as M,F as z,k as S,o as c,p as U,l as C}from"./index-b444351a.js";const H="/assets/overlay-efadfa35.mp4",O={content:["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],theme:{extend:{},screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}},plugins:[]};const x=d=>(U("data-v-7c5a4d5c"),d=d(),C(),d),P={class:"h-[100dvh]"},R={key:0,class:"absolute top-0 z-10 flex h-[100dvh] w-[100dvw] items-center justify-center bg-black"},F=x(()=>s("video",{class:"z-5 absolute h-full w-full object-cover",src:H,muted:"",autoplay:"",loop:"",preload:"auto",playsinline:""},null,-1)),N=["src"],$=x(()=>s("div",{id:"logo",class:"absolute h-full w-full"},null,-1)),D={class:"relative hidden md:z-10 md:grid md:h-full md:grid-flow-col md:py-20"},Q=["onMouseover"],q={class:"mt-auto hidden group-hover:block md:text-[5rem] xl:text-[7rem]"},A=13,G={__name:"Home",setup(d){const r=l("videos/Video01.mp4"),v=l([]),h=l(0),_=l(0);let f=0,a=0,y={1:"videos/Video01.mp4",2:"videos/Video02.mp4",3:"videos/Video03.mp4",4:"videos/Video04.mp4",5:"videos/Video05.mp4",6:"videos/Video06.mp4",7:"videos/Video07.mp4",8:"videos/Video08.mp4",9:"videos/Video09.mp4",10:"videos/Video10.mp4",11:"videos/Video11.mp4",12:"videos/Video12.mp4",13:"videos/Video13.mp4"};async function b(e){const p=await(await fetch(e)).arrayBuffer(),n=new Blob([p],{type:"video/mp4"}),m=URL.createObjectURL(n);let t=document.createElement("video");return t.style.display="none",t.preload="auto",t.src=m,document.body.appendChild(t),t.load(),await new Promise((k,I)=>{t.addEventListener("loadeddata",()=>{h.value++,_.value=Math.round(h.value/A*100),k(m)}),t.addEventListener("error",()=>{I()})})}function w(){const e=Object.values(y).map(o=>b(o));return Promise.all(e)}B(async()=>{try{v.value=await w()}catch{}});function u(e){r.value=v.value[e]}function g(){clearInterval(f)}function j(){g(),u(a),f=setInterval(()=>{a=(a+1)%Object.keys(y).length,u(a)},5e3)}return E(()=>{const e=window.matchMedia(`(max-width: ${O.theme.screens.md})`),o=()=>{e.matches?j():g()};return e.addEventListener("change",o),o(),()=>{e.removeEventListener("change",o)}}),(e,o)=>(c(),i("div",P,[v.value.length!==13?(c(),i("div",R,[s("h1",null,"Loading: "+V(_.value)+"%",1)])):M("",!0),F,(c(),i("video",{id:"video",class:"absolute h-full w-full object-cover",src:r.value,type:"video/mp4",autoplay:"",muted:"",loop:"",playsinline:"",preload:"auto",key:r.value},null,8,N)),$,s("div",D,[(c(),i(z,null,S(13,(p,n)=>s("div",{key:n,onMouseover:m=>u(n),class:"group flex justify-center"},[s("h1",q,V(p),1)],40,Q)),64))])]))}},K=L(G,[["__scopeId","data-v-7c5a4d5c"]]);export{K as default};