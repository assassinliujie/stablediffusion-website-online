import f from"./Login-77a0be52.js";import{_ as C,r as i,o as u,b as _,a as t,e as s,w as l,F as k,S as M,E as v,n as h,f as a,t as c,g as w,p as S,h as I}from"./index-3931a563.js";const n=e=>(S("data-v-14704235"),e=e(),I(),e),O=n(()=>s("div",{class:"mode-title"},"创造模式",-1)),y=n(()=>s("div",{class:"mode-desc"},"自己创造想要的图像（建议PC端使用）",-1)),B=n(()=>s("div",{class:"mode-title"},"刷图模式",-1)),b=n(()=>s("div",{class:"mode-desc"},"适合移动端刷图玩",-1)),$=n(()=>s("p",null,"本站系统已在github开源",-1)),E=n(()=>s("p",null,"4090免费算力平台",-1)),N={key:0},V=n(()=>s("div",{class:"bgimg"},null,-1)),F={created(){this.check(),this.$bus1.on("SelectPageRefresh",e=>{this.userid=localStorage.getItem("userid"),this.showLoginInfo=!0,this.check()})},data(){return{isOnline:!1,isOnlineMsg:"检测中...",gotoCreateModeClick:!1,gotoBrushModeClick:!1,userid:localStorage.getItem("userid"),allImageCount:0,showLoginInfo:!1}},mounted:function(){},methods:{gotoCreateMode(){this.isOnline?(this.$router.push("/createModel"),this.gotoCreateModeClick=!0):this.$message.error("服务器离线，请联系管理员，或使用刷图模式")},gotoBrushMode(){this.$router.push("/viewer"),this.gotoBrushModeClick=!0},check(){this.$myFetch(M+"/api/checkx","POST").then(e=>{e.warring!=""&&v.alert(e.warring,"使用警告",{confirmButtonText:"我同意及希望继续使用",showClose:!1,type:"warning",callback:()=>{}}),this.allImageCount=e.imgCount,e.ol==1?(this.isOnline=!0,this.isOnlineMsg="在线"):(this.isOnline=!1,this.isOnlineMsg="离线("+e.offline+"分钟)")}).catch(e=>{})},logout(){this.$cookies.remove("token"),localStorage.removeItem("userid"),window.location.reload()}}},L=Object.assign(F,{__name:"Select",setup(e){return(o,P)=>{const r=i("el-card"),g=i("el-tag"),m=i("el-button"),d=i("el-col"),p=i("el-row");return u(),_(k,null,[t(f),s("div",null,[t(p,null,{default:l(()=>[t(d,{span:8},{default:l(()=>[t(r,{class:h(["mode-card card-hover",{"card-grey":o.gotoCreateModeClick}]),onClick:o.gotoCreateMode},{default:l(()=>[O,y]),_:1},8,["onClick","class"]),t(r,{class:h(["mode-card card-hover",{"card-grey":o.gotoBrushModeClick}]),onClick:o.gotoBrushMode},{default:l(()=>[B,b]),_:1},8,["onClick","class"]),a(" 当前服务器状态："),t(g,{type:o.isOnline?"success":"error"},{default:l(()=>[a(c(o.isOnlineMsg),1)]),_:1},8,["type"]),a(c(o.isOnline?"尽情进行你的创作":"浏览你的历史创作")+" ",1),$,s("p",null,"当前平台共创作"+c(o.allImageCount)+"张杰作，期待你的创作及与大家分享",1),E,o.userid!=""&&o.userid!=null?(u(),_("p",N,[a("当前登录账号"+c(o.userid)+" ",1),t(m,{type:"danger",onClick:o.logout},{default:l(()=>[a("退出")]),_:1},8,["onClick"])])):w("",!0)]),_:1}),t(d,{span:2},{default:l(()=>[V]),_:1})]),_:1})])],64)}}}),D=C(L,[["__scopeId","data-v-14704235"]]);export{D as default};
