import{_ as b,u as m,c as x,r as k,a as i,b as r,d as e,w as s,e as a,f as g,g as w,n as C,o as d,h as o}from"./index-5a8f181c.js";const v={class:"hidden md:flex md:items-center md:text-lg"},y={class:"flex"},O={class:"p-4"},T={class:"p-4"},B={class:"p-4"},H={class:"p-4"},E={class:"ml-5 space-x-5 px-5"},A={key:0,class:"mt-10 flex basis-full flex-col justify-center space-y-10 bg-black py-10 md:hidden"},M={class:"flex flex-col items-center"},N={class:"p-4"},j={class:"p-4"},R={class:"p-4"},S={class:"p-4"},V={class:"flex justify-center space-x-10 p-4"},f="https://www.instagram.com/by.haski/",_="https://www.facebook.com/profile.php?id=100054453782766",u="https://www.behance.net/ByHaski",I={__name:"Header",setup(L){const h=m(),p=x(()=>h.currentRoute.value.name);let l=k(!1);function n(){l.value=!l.value}return(q,J)=>{const c=i("font-awesome-icon"),t=i("router-link");return d(),r("header",{class:C([{absolute:p.value==="home"},"flex w-full flex-wrap items-center justify-between p-5 font-black md:flex-nowrap"])},[e(t,{to:"/",class:"hidden md:block md:text-lg xl:text-2xl"},{default:s(()=>[o("BY.HASKI"),e(c,{class:"ml-2 align-text-bottom text-lg",icon:"fa-regular fa-copyright"})]),_:1}),a("nav",v,[a("ul",y,[a("li",O,[e(t,{to:"/"},{default:s(()=>[o("HOME")]),_:1})]),a("li",T,[e(t,{to:"/projects"},{default:s(()=>[o("PROJECTS")]),_:1})]),a("li",B,[e(t,{to:"/about"},{default:s(()=>[o("ABOUT ME")]),_:1})]),a("li",H,[e(t,{to:"/contact"},{default:s(()=>[o("CONTACT")]),_:1})])]),a("div",E,[a("a",{href:f,"aria-label":"instagram"},[e(c,{icon:"fa-brands fa-instagram"})]),a("a",{href:_,"aria-label":"facebook"},[e(c,{icon:"fa-brands fa-square-facebook"})]),a("a",{href:u,"aria-label":"behance"},[e(c,{icon:"fa-brands fa-behance"})])])]),e(t,{to:"/",class:"text-xl md:hidden"},{default:s(()=>[o("BY.HASKI"),e(c,{class:"ml-2 align-text-bottom text-base",icon:"fa-regular fa-copyright"})]),_:1}),e(c,{onClick:n,class:"text-2xl md:hidden",icon:"fa-solid fa-bars"}),g(l)?(d(),r("nav",A,[a("ul",M,[a("li",N,[e(t,{onClick:n,to:"/"},{default:s(()=>[o("HOME")]),_:1})]),a("li",j,[e(t,{onClick:n,to:"/projects"},{default:s(()=>[o("PROJECTS")]),_:1})]),a("li",R,[e(t,{onClick:n,to:"/about"},{default:s(()=>[o("ABOUT ME")]),_:1})]),a("li",S,[e(t,{onClick:n,to:"/contact"},{default:s(()=>[o("CONTACT")]),_:1})])]),a("div",V,[a("a",{href:f,"aria-label":"instagram"},[e(c,{icon:"fa-brands fa-instagram"})]),a("a",{href:_,"aria-label":"facebook"},[e(c,{icon:"fa-brands fa-square-facebook"})]),a("a",{href:u,"aria-label":"behance"},[e(c,{icon:"fa-brands fa-behance"})])])])):w("",!0)],2)}}},P=b(I,[["__scopeId","data-v-53d15db0"]]);export{P as default};