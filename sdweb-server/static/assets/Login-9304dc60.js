import{_ as F,B as c,S as _,x as m,r as t,o as w,c as y,w as o,a as e,f as b}from"./index-1ab7c87c.js";const k={created(){},mounted(){this.$bus1.on("login_user",a=>{a.loginshow?this.dialogVisible=!0:this.dialogVisible=!1})},data(){return{signinForm:c({email:"",password:""}),signupForm:c({email:"",password:""}),rules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空"},{min:8,message:"密码长度不能少于8位"},{pattern:/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,message:"密码必须包含字母和数字"}]},dialogVisible:!1,activeTab:"signin"}},methods:{handleClose(){return this.activeTab="signin",this.signinForm.loginName="",this.signinForm.password="",this.signupForm.loginName="",this.signupForm.email="",this.signupForm.password="",this.dialogVisible=!1,!1},signin(){const a={email:this.signinForm.email,password:this.signinForm.password};this.$refs.signinForm.validate(s=>{if(s)fetch(_+"/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(i=>i.json()).then(i=>{i.code===0?(m({message:"登录成功.",type:"success"}),this.$cookies.set("token",i.token,{expires:1}),localStorage.setItem("userid",a.email),this.dialogVisible=!1,this.$bus1.emit("SelectPageRefresh",{})):m({message:"登录失败.",type:"error"})}).catch(i=>{});else{console.log("校验不通过，请检查输入");return}})},signup(){const a={email:this.signupForm.email,password:this.signupForm.password};this.$refs.signupForm.validate(s=>{if(s)fetch(_+"/api/reg",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(i=>i.json()).then(i=>{i.code===1?(this.$cookies.set("token",i.token,{expires:1}),localStorage.setItem("userid",a.email),this.dialogVisible=!1,this.$bus1.emit("SelectPageRefresh",{}),m({message:"注册成功.",type:"success"})):i.code===2?m({message:"邮箱"+this.signupForm.email+"已被注册，请检查.",type:"warning"}):m({message:"失败.",type:"error"})}).catch(i=>{});else{console.log("校验不通过，请检查输入");return}})}}};function S(a,s,i,v,l,p){const u=t("el-input"),r=t("el-form-item"),g=t("el-button"),d=t("el-form"),f=t("el-tab-pane"),h=t("el-tabs"),V=t("el-dialog");return w(),y(V,{class:"dialogCss",modelValue:l.dialogVisible,"onUpdate:modelValue":s[5]||(s[5]=n=>l.dialogVisible=n),title:"登录-Sign in","align-center":"","close-on-click-modal":!1,"show-close":!1,"before-close":"false"},{default:o(()=>[e(h,{modelValue:l.activeTab,"onUpdate:modelValue":s[4]||(s[4]=n=>l.activeTab=n),class:"demo-tabs"},{default:o(()=>[e(f,{label:"登录-Sign in",name:"signin"},{default:o(()=>[e(d,{model:l.signinForm,ref:"signinForm",rules:l.rules,class:"signin-form"},{default:o(()=>[e(r,{label:"Email",prop:"email"},{default:o(()=>[e(u,{modelValue:l.signinForm.email,"onUpdate:modelValue":s[0]||(s[0]=n=>l.signinForm.email=n)},null,8,["modelValue"])]),_:1}),e(r,{label:"密码(Password)",prop:"password"},{default:o(()=>[e(u,{type:"password",modelValue:l.signinForm.password,"onUpdate:modelValue":s[1]||(s[1]=n=>l.signinForm.password=n)},null,8,["modelValue"])]),_:1}),e(r,null,{default:o(()=>[e(g,{type:"primary",onClick:p.signin},{default:o(()=>[b("登录")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),e(f,{label:"注册-Sign up",name:"signup"},{default:o(()=>[e(d,{model:l.signupForm,ref:"signupForm",rules:l.rules,class:"signup-form"},{default:o(()=>[e(r,{label:"注册Email",prop:"email"},{default:o(()=>[e(u,{modelValue:l.signupForm.email,"onUpdate:modelValue":s[2]||(s[2]=n=>l.signupForm.email=n)},null,8,["modelValue"])]),_:1}),e(r,{label:"注册密码(Password)",prop:"password"},{default:o(()=>[e(u,{type:"password",modelValue:l.signupForm.password,"onUpdate:modelValue":s[3]||(s[3]=n=>l.signupForm.password=n)},null,8,["modelValue"])]),_:1}),e(r,null,{default:o(()=>[e(g,{type:"primary",onClick:p.signup},{default:o(()=>[b("注册")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])}const x=F(k,[["render",S]]);export{x as default};
