"use strict";(self["webpackChunkthe_build"]=self["webpackChunkthe_build"]||[]).push([[768],{1875:function(e,t,o){o.d(t,{Z:function(){return c}});var r=o(3396);const s=(0,r.uE)('<hr class="mt-32"><footer class="flex mt-5 justify-between"><ul class="text-[#ededed]"><li class="text-3xl font-extrabold">Thebuild</li><li class="text-lg mt-5"> An international real estate company <br> that provides your property solutions <br> with the best quality and affordable prices. </li></ul><div class="w-1/2 grid text-[#ededed] grid-cols-4"><ul class="flex flex-col text-stone-400 gap-4"><li class="text-xl text-[#ededed] font-extrabold">About Us</li><li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Company</li><li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Leadership</li><li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Careers</li></ul><ul class="flex flex-col text-stone-400 gap-4"><li class="text-xl text-[#ededed] font-extrabold">Support</li><li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Help Center</li><li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Support team</li><li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Community</li></ul><ul class="flex flex-col text-stone-400 gap-4"><li class="text-xl text-[#ededed] font-extrabold">Legal</li><li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Security FAQ</li><li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Terms of Use</li><li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Privacy Policy</li></ul><ul class="flex flex-col text-stone-400 gap-4"><li class="text-xl text-[#ededed] font-extrabold">Social</li><li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Instagram</li><li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Facebook</li><li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Twitter</li></ul></div></footer>',2);function l(e,t){return s}var a=o(89);const i={},n=(0,a.Z)(i,[["render",l]]);var c=n},7768:function(e,t,o){o.r(t),o.d(t,{default:function(){return g}});var r=o(3396),s=o(7139);const l={class:"container pb-10 font-base mx-auto"},a={key:0,class:"flex flex-col items-center justify-center mt-20 ml-4 font-base mr-2 text-[#ededed]"},i=(0,r._)("h3",{class:"text-7xl"},"Thank you for your purchase",-1),n={class:"text-3xl mt-8 text-center ml-5 font-extrabold text-stone-400"},c={class:"text-white"},d=(0,r._)("br",null,null,-1),u=(0,r._)("br",null,null,-1),x=(0,r._)("div",{class:"flex mt-10 gap-10"},[(0,r._)("a",{href:"/plans",class:"bg-[#ededed] px-6 py-2 text-[#101014] rounded-lg"},"Browse more plans"),(0,r._)("a",{href:"/contact",class:"bg-[#ededed] px-6 py-2 text-[#101014] rounded-lg"},"Contact Us")],-1);function p(e,t,o,p,h,f){const b=(0,r.up)("Navbar"),v=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(b),null!=h.purchase?((0,r.wg)(),(0,r.iD)("div",a,[i,(0,r._)("h3",n,[(0,r._)("span",c," Purchase code: "+(0,s.zw)(h.purchase?.purchase_code),1),d,(0,r.Uk)(" We have received your payment and we have sent you a link to "),u,(0,r.Uk)(" download your purchase via your email. Please check your inbox now. ")]),x])):(0,r.kq)("",!0),null!=h.purchase?((0,r.wg)(),(0,r.j4)(v,{key:1})):(0,r.kq)("",!0)])}var h=o(1875),f=o(7433),b=o(4161),v={name:"Payment",components:{Navbar:f.Z,Footer:h.Z},data(){return{purchase:null,baseURL:"https://thebuild-api.techwithnick.com/"}},methods:{async getPurchase(e){return await b.Z.get(`${this.baseURL}purchases/${e}`).then((e=>{this.purchase=e.data})).catch((e=>{console.log(e)}))}},mounted(){this.getPurchase(this.$route.params["id"])}},m=o(89);const y=(0,m.Z)(v,[["render",p]]);var g=y}}]);
//# sourceMappingURL=768.65eafb61.js.map