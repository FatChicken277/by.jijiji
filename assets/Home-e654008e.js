import{_ as b,r as f,i as I,j,b as v,e as a,F as k,k as B,o as p,t as E,p as L,l as M}from"./index-f702879e.js";const S={content:["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],theme:{extend:{},screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}},plugins:[]};const U=s=>(L("data-v-63d466e8"),s=s(),M(),s),H={class:"h-[100dvh]"},O=["src"],P=U(()=>a("div",{id:"logo",class:"absolute h-full w-full"},null,-1)),R={class:"relative hidden md:z-10 md:grid md:h-full md:grid-flow-col md:py-20"},z=["onMouseover"],C={class:"mt-auto hidden group-hover:block md:text-[5rem] xl:text-[7rem]"},F={__name:"Home",setup(s){const n=f("videos/Video01.mp4");let m={1:"videos/Video01.mp4",2:"videos/Video02.mp4",3:"videos/Video03.mp4",4:"videos/Video04.mp4",5:"videos/Video05.mp4",6:"videos/Video06.mp4",7:"videos/Video07.mp4",8:"videos/Video08.mp4",9:"videos/Video09.mp4",10:"videos/Video10.mp4",11:"videos/Video11.mp4",12:"videos/Video12.mp4",13:"videos/Video13.mp4"};async function y(e){const r=await(await fetch(e)).arrayBuffer(),i=new Blob([r],{type:"video/mp4"}),c=URL.createObjectURL(i);let t=document.createElement("video");return t.style.display="none",t.preload="auto",t.src=c,document.body.appendChild(t),await new Promise((V,w)=>{t.addEventListener("loadeddata",()=>{V(c)}),t.addEventListener("error",()=>{w()})})}function x(){const e=Object.values(m).map(o=>y(o));return Promise.all(e)}const u=f([]);I(async()=>{try{u.value=await x()}catch{}});function l(e){n.value=u.value[e]}let _=0,d=0;function h(){clearInterval(_)}function g(){h(),l(d),_=setInterval(()=>{d=(d+1)%Object.keys(m).length,l(d)},5e3)}return j(()=>{const e=window.matchMedia(`(max-width: ${S.theme.screens.md})`),o=()=>{e.matches?g():h()};return e.addEventListener("change",o),o(),()=>{e.removeEventListener("change",o)}}),(e,o)=>(p(),v("div",H,[(p(),v("video",{id:"video",class:"absolute h-full w-full object-cover",src:n.value,type:"video/mp4",autoplay:"",muted:"",loop:"",playsinline:"",preload:"auto",key:n.value},null,8,O)),P,a("div",R,[(p(),v(k,null,B(13,(r,i)=>a("div",{key:i,onMouseover:c=>l(i),class:"group flex justify-center"},[a("h1",C,E(r),1)],40,z)),64))])]))}},D=b(F,[["__scopeId","data-v-63d466e8"]]);export{D as default};
