"use strict";(self["webpackChunks024"]=self["webpackChunks024"]||[]).push([[9585],{9585:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("Row",{staticStyle:{height:"100%"},attrs:{justify:"center",align:"middle"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitRegist.apply(null,arguments)}}},[e("div",{staticClass:"loginUp"},[e("div",{staticClass:"loginLeft"},[e("img",{attrs:{src:a(9722),alt:"",srcset:""}}),e("span",{staticClass:"line"}),e("span",{staticClass:"title"},[t._v("农村物流配送系统")])])]),e("div",{staticClass:"loginMiddle"},[e("div",{staticClass:"login-background"},[e("div",{staticClass:"loginBg"}),e("div",{staticClass:"loginRight"},[t.socialLogining?t._e():e("Row",{staticClass:"loginRow"},[e("Form",{ref:"usernameLoginForm",staticClass:"form",staticStyle:{width:"100%"},attrs:{model:t.form,rules:t.rules}},[e("FormItem",{staticClass:"loginInput",attrs:{prop:"username"}},[e("Row",[e("Input",{attrs:{size:"large",clearable:"",placeholder:"您的手机号",autocomplete:"off"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}},[e("Icon",{staticClass:"iconfont icon-yonghu",staticStyle:{"line-height":"50px"},attrs:{slot:"prefix"},slot:"prefix"})],1)],1)],1),e("FormItem",{staticClass:"loginInput",attrs:{prop:"nickname"}},[e("Row",[e("Input",{attrs:{size:"large",clearable:"",placeholder:"您的姓名",autocomplete:"off"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}},[e("Icon",{staticClass:"iconfont icon-yonghu",staticStyle:{"line-height":"50px"},attrs:{slot:"prefix"},slot:"prefix"})],1)],1)],1),e("FormItem",{attrs:{prop:"password"}},[e("Input",{staticStyle:{height:"50px","line-height":"50px"},attrs:{type:"password",size:"large",placeholder:"您的密码",password:"",autocomplete:"off"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[e("Icon",{staticClass:"iconfont icon-mima1",staticStyle:{"line-height":"50px"},attrs:{slot:"prefix"},slot:"prefix"})],1)],1),e("FormItem",{attrs:{prop:"code"}},[e("Row",{staticStyle:{"align-items":"center",overflow:"hidden"},attrs:{type:"flex",justify:"space-between"}},[e("Col",{attrs:{span:"16"}},[e("Input",{staticClass:"input-verify",staticStyle:{width:"90%"},attrs:{size:"large",clearable:"",placeholder:"请输入图片验证码",maxlength:10},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"code-image",staticStyle:{position:"relative","font-size":"12px",width:"100%"}},[t.loadingCaptcha?e("Spin",{attrs:{fix:""}}):t._e(),e("img",{staticStyle:{width:"110px",cursor:"pointer",display:"block"},attrs:{src:t.captchaImg,alt:"加载验证码失败"},on:{click:t.getCaptchaImg}})],1)])],1)],1)],1),e("Row",[e("Button",{staticClass:"login-btn",attrs:{type:"primary",size:"large",loading:t.loading,long:""},on:{click:t.submitRegist}},[t.loading?e("span",[t._v("正在注册")]):e("span",{staticStyle:{"letter-spacing":"20px","font-weight":"bold"}},[t._v("注册")])])],1),e("Row",[e("router-link",{attrs:{to:"/login"}},[e("Button",{staticClass:"login-btn",attrs:{type:"primary",size:"large",long:""}},[t._v("返回登录")])],1)],1)],1),e("p",{staticClass:"loginBottom"},[t._v(" ART YOUR DREAM ")]),t.socialLogining?e("div",[e("RectLoading")],1):t._e()],1)])]),e("div",{staticClass:"loginDown"},[e("p",{staticStyle:{"margin-top":"10px"}},[t._v("帮助 | 隐私 | 条款")]),e("p",[e("span",[t._v("Copyright © 2020 - 至今 XXX 版权所有")]),e("span",{staticStyle:{display:"inline-block",width:"4px",height:"6px"}}),e("a",{staticStyle:{color:"#848585"},attrs:{target:"_blank",href:"https://beian.miit.gov.cn"}},[t._v("ICP备案 浙ICP备XXXXXXXX号")]),e("a",{attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=XXXXXXXXXXXXXX号"}},[e("img",{staticStyle:{"margin-left":"6px"},attrs:{src:a(7581)}}),e("p",{staticStyle:{display:"inline-block",color:"#848585"}},[t._v("浙公网安备 XXXXXXXXXXXXXX号")])])])])])],1)},i=[],o=a(7877),r=a(6551);const l={components:{},data(){return{captchaId:"",captchaImg:"",error:!1,loading:!1,errorCode:"",form:{username:"",password:"",mobile:"",code:"",captchaId:""},rules:{username:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:r.gG,trigger:"blur"}],nickname:[{required:!0,message:"请输入您的姓名",trigger:"blur"}],password:[{required:!0,message:"请输入登录密码",trigger:"blur"},{validator:r.uo,trigger:"blur"}]}}},methods:{getCaptchaImg(){this.loadingCaptcha=!0,(0,o.Ul)().then((t=>{this.loadingCaptcha=!1,t.success&&(this.captchaId=t.result,this.captchaImg=o._g+this.captchaId)}))},submitRegist(){this.form.captchaId=this.captchaId,this.form.mobile=this.form.username,this.$refs.usernameLoginForm.validate((t=>{if(t){if(!this.form.code)return void(this.errorCode="验证码不能为空");this.errorCode="",this.loading=!0,(0,o.$k)(this.form).then((t=>{this.loading=!1,t.success&&this.$router.push({name:"login"})}))}}))}},mounted(){this.getCaptchaImg()}},n=l;var c=a(1001),p=(0,c.Z)(n,s,i,!1,null,null,null);const g=p.exports},6551:(t,e,a)=>{a.d(e,{gG:()=>o,rV:()=>s,uo:()=>i});const s=(t,e,a)=>{var s=/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,16}$/;e.length>16?a(new Error("长度不能超过16个字符")):s.test(e)?a():a(new Error("仅支持大小写英文、中文和下划线_"))},i=(t,e,a)=>{e.length<6?a(new Error("密码长度不得小于6位")):a()},o=(t,e,a)=>{var s=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;s.test(e)?a():a(new Error("手机号格式错误"))}},7581:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAADU0lEQVQ4T02SW0xbdQCHf/9z6Tk9PW2ht1EKHReXEbqYLGPOaHRBcTEYXXQIOmP0wUXReddoxh5U4qXoFt6Ul+ncFnAXdTGSEJx4W1iGDGHjEmRDoLbrvaXt6ek5p+eYLVni7+l7+H1vH8H/FoudFOXZVJNssK2XJq48qYEw27Y3D/Kq/HNdS8M8cbav37qTW2AYYeHS2a/f//XshU4ndd3HKxLNed3QfRvLK/Nq5J62wJlte57tIaSqcMO5KRqGwUenjuw7FBzu28DG+V3JFQiyAZPLDK3GjTFPAEtzueLrbz30svv26qOEtGrEMP5kI1MTH3zc+0c3Z1Htb9pnkf0hBllgwVpZyEtxVL+9EwO5LZDW4snXXmnqD1PXgsSID3hHxpaHXnxHv/fDjjm0/jKOxAoFysKgrOpQSgoq/QwWX+jCS0EafQdMY491bt9Lcuf290yuqj37gi7z4UcvYuvINJLXNdBtXvAOAaXRNbCGgvSBPdjba0f/e0Rq3xX4jISGnvgpqXD3dwWb8WrHFezWp7E4moJjZxUs/gqoCzm4m0X8mK/HR0c8GPo0jQYHf54sDjwetTvh6TxxF0ozMzjaPgmkDOQTJfAuARwBzPU2PHWqAeXGTfj+jXnkwsUImf2iI+2zZSu+jN2HQwdD+IY9httaLAhxHESfDTWyhqXhGHYX2vF87ybs3zyBWE4MkeXB5+ZFc7wp7wig86AVpt/OoYWLwG8pwyKyiAkOTK1asNocwOBhFS4tgZJhmyT/fNu9LkfCVqeHwhwVwKnhAv5apnF3XRZ2poBj424Iooh3n5HQVruITLoMwV+bIYmZvpPrC+cfUSJ5TmQUVLTU40ZXXKmIcl5Fzl4FhjZAX/4bRY0Gv9FatDZuPU6K6fG6/MrI53J0+sH8QhpWvx02nx2lVBGUmQVXwUMKZSGlNDDVHlCC+ztbw5Zusr58uknNzH1V1tZ2aDkVKMmgTABoDrSuQIpkQXgevM8FXdMArvKi4N38NJH+HfAbeqanEL3WpacyVpYDpeVlEJqGLivQKQaUQBngBIPdUBPlKmtPUETsvxl56uon9uiFq3cqyfgDnK20g+c4L8PCSplMOhhzgnFWhaU89bthYkbrGu+4TKoflv4DDAFn2kNBLNMAAAAASUVORK5CYII="},9722:(t,e,a)=>{t.exports=a.p+"img/logo.270e10d3.png"}}]);