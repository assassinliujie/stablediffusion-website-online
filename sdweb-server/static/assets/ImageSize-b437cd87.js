import{_ as N,S as T,r as c,o as h,b as p,a as s,w as a,e as i,t as b,F as v,d as k,c as U,n as I,A as z,g as C,f as D,p as R,h as F}from"./index-074ff8f3.js";const G={data(){return{cardList:[],modelGridData:[],dialogModelSettingVisible:!1,selectedRows:[],defaultSelection:[],saveData:[],serverAddr:T,cardSelectTitle:"",createImageDialogType:"ttb",selectModel:{miniLogo:"",desc:"",number:1,selectedx:!1,showName:"",title:"",order:1}}},mounted:function(){this.initAllModel(),document.addEventListener("keydown",e=>{e.altKey&&e.code==="KeyP"&&(this.selectCardAdvance(),console.log("hello"))})},created(){this.$bus1.on("getModelInfoSelected",e=>{e(this.selectModel)})},methods:{initAllModel(){this.$myFetch("/api/getCheckModelList","POST",null).then(e=>{this.cardList=this.orderList(e)}).catch(e=>console.error(e))},selectCard(e){this.cardList.forEach((l,t)=>{l.selected=t===e,l.selected&&(this.selectModel=l,this.cardSelectTitle="("+l.showName+")",console.log(l))})},selectCardAdvance(){this.$myFetch("/api/listModel","POST",null).then(e=>{this.dialogModelSettingVisible=!0,this.modelGridData=this.orderList(e)})},orderList(e){return e.sort((l,t)=>l.order===""&&t.order===""?0:l.order===""?1:t.order===""?-1:parseInt(l.order)-parseInt(t.order))},save(){this.saveData=[];const e=this.modelGridData.filter(t=>t.title);let l=0;for(let t of e)if(t.selectedx){if(l++,t.showName===void 0||t.showName===""){this.$message.error("请填写绑定值的显示名称");return}(t.desc===void 0||t.desc==="")&&(t.desc=""),(t.miniLogo===void 0||t.miniLogo==="")&&(t.miniLogo=""),t.number=""+l,this.saveData.push(t)}if(this.saveData.length===0){this.$message.error("请勾选需要绑定的模型");return}console.log(this.saveData),this.$myFetch("/api/saveSdModel","POST",this.saveData).then(t=>{this.dialogModelSettingVisible=!1,this.$message.success("保存成功"),this.initAllModel(),console.log(t)}).catch(t=>console.error(t))},handleSelectionChange(e){this.selectedRows=e}}},O={class:"demonstration",style:{"line-height":"30pt"}},P={class:"card-container"},H={key:0,class:"card-content"},W={class:"card-title"},K={key:0},j={class:"card-container"},q={key:0,class:"card-content"},J={class:"card-title"},Q={class:"btn-wrapper"};function X(e,l,t,$,n,u){const m=c("el-tooltip"),w=c("el-card"),x=c("el-space"),y=c("el-collapse-item"),V=c("el-collapse"),d=c("el-table-column"),_=c("el-input"),L=c("el-checkbox"),E=c("el-table"),M=c("el-button"),A=c("el-drawer");return h(),p(v,null,[s(m,{class:"box-item",effect:"dark",content:"说出你想要画的内容，说的越详细图画越近似，可以通过拆成多个描述词以逗号分割进行描述",placement:"top-start"},{default:a(()=>[i("span",O,"绘画风格"+b(n.cardSelectTitle),1)]),_:1}),i("div",P,[s(x,{style:{"text-align":"center","margin-left":"10px","margin-bottom":"10px"}},{default:a(()=>[(h(!0),p(v,null,k(n.cardList.slice(0,2),(o,r)=>(h(),U(w,{key:r,class:I({selected:o.selected}),onClick:B=>u.selectCard(r)},{default:a(()=>[i("div",{style:z({"background-image":`url(${n.serverAddr}/api/getModelImg?mid=${o.number})`,"background-size":"cover",width:"100px",height:"50px"})},null,4),o.selected?C("",!0):(h(),p("div",H)),i("span",W,b(o.showName),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),n.cardList.length>2?(h(),p("span",K,[s(V,{gutter:16},{default:a(()=>[s(y,{title:"更多绘画风格"},{default:a(()=>[i("div",j,[s(x,{wrap:"",size:16},{default:a(()=>[(h(!0),p(v,null,k(n.cardList.slice(2,99),(o,r)=>(h(),U(w,{key:r,class:I({selected:o.selected}),onClick:B=>u.selectCard(r+2)},{default:a(()=>[i("div",{style:z({"background-image":`url(${n.serverAddr}/api/getModelImg?mid=${o.number})`,"background-size":"cover",width:"100px",height:"50px"})},null,4),o.selected?C("",!0):(h(),p("div",q)),i("span",J,b(o.showName),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})])]),_:1})]),_:1})])):C("",!0),s(A,{"append-to-body":!0,visible:!1,"modal-append-to-body":!1,modelValue:n.dialogModelSettingVisible,"onUpdate:modelValue":l[0]||(l[0]=o=>n.dialogModelSettingVisible=o),title:"设置模型",size:"600",direction:n.createImageDialogType},{footer:a(()=>[s(M,null,{default:a(()=>[D("取消")]),_:1})]),default:a(()=>[i("div",null,[s(E,{data:n.modelGridData,onSelectionChange:u.handleSelectionChange,"default-selection":n.defaultSelection,"header-row-class-name":"table-header-fixed"},{default:a(()=>[s(d,{property:"title",label:"标题"}),s(d,{property:"showName",label:"显示名称",width:"200px"},{default:a(o=>[s(_,{modelValue:o.row.showName,"onUpdate:modelValue":r=>o.row.showName=r,autosize:"",type:"textarea",placeholder:"输入显示名称(10个字内)"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),s(d,{property:"miniLogo",label:"logo",width:"200px"},{default:a(o=>[s(_,{modelValue:o.row.miniLogo,"onUpdate:modelValue":r=>o.row.miniLogo=r,autosize:"",type:"textarea",placeholder:"模型Logo存储位置(程序运行目录下位置，例如/modellogo/anax.png),宽100px 高50px"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),s(d,{property:"order",label:"排序",width:"60px"},{default:a(o=>[s(_,{modelValue:o.row.order,"onUpdate:modelValue":r=>o.row.order=r,placeholder:"排序"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),s(d,{property:"desc",label:"备注",width:"200px"},{default:a(o=>[s(_,{modelValue:o.row.desc,"onUpdate:modelValue":r=>o.row.desc=r,autosize:"",type:"textarea",placeholder:"备注描述"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),s(d,{label:"绑定",width:"100px"},{default:a(o=>[s(L,{modelValue:o.row.selectedx,"onUpdate:modelValue":r=>o.row.selectedx=r},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data","onSelectionChange","default-selection"])]),i("div",Q,[s(M,{onClick:u.save,type:"primary"},{default:a(()=>[D("保存")]),_:1},8,["onClick"])])]),_:1},8,["modelValue","direction"])],64)}const _e=N(G,[["render",X],["__scopeId","data-v-df789daf"]]);let g=50,f=50;const Y={data(){return{width:512,height:512,upscaleB:!1,cards:[{width:g*1.5,height:f*1.5,scale:"1:1",selected:!0},{width:g*1*2,height:f*(1/2)*2,scale:"1:2",selected:!1},{width:g*(4/3)*1.2,height:f*1.2,scale:"4:3",selected:!1},{width:g*(3/4)*1.5,height:f*1.5,scale:"3:4",selected:!1},{width:g*(16/9)*1,height:f*1,scale:"16:9",selected:!1},{width:g*(9/16)*2,height:f*1.7,scale:"9:16",selected:!1}],selectedCardIndex:0}},mounted:function(){this.setElCollapseShowImageSize()},created(){this.$bus1.on("getImageSize",e=>{e(this.width,this.height,this.upscaleB)}),this.$bus1.on("setImageSize",e=>{this.width=e.width,this.height=e.height,this.setElCollapseShowImageSize()})},methods:{setElCollapseShowImageSize(){this.$bus1.emit("setElCollapseShowImageSize",{width:this.width,height:this.height})},selectCard(e){this.selectedCardIndex=e,this.cards.forEach((l,t)=>{l.selected=t===e}),this.setHeightWidth(1)},setHeightWidth(){let e=this.selectedCardIndex,l=0,t=0;e==0?(l=512,t=512):e==1?(l=512,t=768):e==2?(l=512,t=683):e==3?(l=683,t=512):e==4?(l=288,t=512):e==5&&(l=512,t=288),this.upscaleB?(this.height=l*2,this.width=t*2):(this.height=l,this.width=t),this.setElCollapseShowImageSize(),console.log(this.width)},switchUpscaleSize(e){this.upscaleB=e,this.setHeightWidth()}}},S=e=>(R("data-v-4586576c"),e=e(),F(),e),Z=S(()=>i("span",{class:"demonstration",style:{"line-height":"30pt"}},"图像比例",-1)),ee={class:"card-container"},te=["onClick"],le={class:"inner-card"},se=S(()=>i("div",{class:"inner-card-border"},null,-1)),oe={style:{"margin-top":"-20px","text-align":"center"}},ae={style:{"margin-top":"30px"}},ie=S(()=>i("span",{class:"demonstration",style:{"line-height":"30pt"}},"宽",-1)),ne={class:"text-space"},de={style:{position:"absolute","margin-top":"-20px","margin-left":"200px"}},ce={style:{}},re=S(()=>i("span",{class:"demonstration",style:{"line-height":"30pt"}},"高",-1)),he={class:"text-space"};function pe(e,l,t,$,n,u){const m=c("el-tooltip"),w=c("el-col"),x=c("el-row"),y=c("el-input-number"),V=c("el-switch");return h(),p(v,null,[s(x,null,{default:a(()=>[s(w,{span:24,style:{"font-size":"12px"}},{default:a(()=>[s(m,{class:"box-item",effect:"dark",content:"说出你想要画的内容，说的越详细图画越近似，可以通过拆成多个描述词以逗号分割进行描述",placement:"top-start"},{default:a(()=>[Z]),_:1}),i("div",ee,[(h(!0),p(v,null,k(n.cards,(d,_)=>(h(),p("div",{class:I(["card",{selected:d.selected}]),key:_,onClick:L=>u.selectCard(_)},[i("div",le,[i("div",{class:"inner-card-content",style:z({width:d.width+"%",height:d.height+"%","padding-top":"-50px"})},[se,i("div",oe,b(d.scale),1)],4)])],10,te))),128))])]),_:1})]),_:1}),s(x,null,{default:a(()=>[s(w,{span:10,offset:1},{default:a(()=>[i("div",ae,[s(m,{class:"",effect:"dark",content:"说出你想要画的内容，说的越详细图画越近似，可以通过拆成多个描述词以逗号分割进行描述",placement:"top-start"},{default:a(()=>[ie]),_:1}),i("span",ne,[s(y,{modelValue:n.width,"onUpdate:modelValue":l[0]||(l[0]=d=>n.width=d),min:20,max:2560},null,8,["modelValue"])]),i("div",de,[s(m,{class:"box-item",effect:"dark",content:"开启高清修复需要消耗更多算力和时间，使用Latent 采样器",placement:"top-start"},{default:a(()=>[s(V,{modelValue:n.upscaleB,"onUpdate:modelValue":l[1]||(l[1]=d=>n.upscaleB=d),class:"ml-2","inline-prompt":"",size:"large",style:{"--el-switch-on-color":"#ff4949","--el-switch-off-color":"#13ce66"},"active-text":"高清修复","inactive-text":"原始大小",onChange:u.switchUpscaleSize},null,8,["modelValue","onChange"])]),_:1})])]),i("div",ce,[s(m,{class:"",effect:"dark",content:"说出你想要画的内容，说的越详细图画越近似，可以通过拆成多个描述词以逗号分割进行描述",placement:"top-start"},{default:a(()=>[re]),_:1}),i("span",he,[s(y,{modelValue:n.height,"onUpdate:modelValue":l[2]||(l[2]=d=>n.height=d),min:20,max:2560},null,8,["modelValue"])])])]),_:1})]),_:1})],64)}const me=N(Y,[["render",pe],["__scopeId","data-v-4586576c"]]);export{me as I,_e as M};
