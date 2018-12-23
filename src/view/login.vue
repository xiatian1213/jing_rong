<template>
  <div class="content">

    <div class="log"></div>
    <form @submit.prevent="login"  id="myform" name="myform">
        <!--<p v-show="showTishi">{{tishi}}</p>-->
      <div class="login_con">
        <p><input type="text" placeholder="手机号码"  id="username" name="username" class="txt1"></p>
        <p><input type="password" placeholder="密码"  name="password" class="txt2"></p>
        <p><router-link to="/ChangePassword"><span>修改密码</span></router-link></p>
        <input type="hidden" name="notcode" value="yes">
        <input type="button" @click=login value="登录" name="dosubmit" class="login">
      </div>
    </form>

  </div>
</template>

<style scoped>
  * { margin: 0; padding: 0;}
  body,form,input{ margin: 0px; padding: 0px; border:0; font-size: 14px; font-weight: normal; font-family:"Microsoft Yahei"; color:#000;}
  ul,ol,li { list-style: none; list-style-type:none; margin:0; padding:0px;}
  p,div,a,h1,h2,h3,h4,h5,h6,span,ul,li,img,form,input,br,dl,dt,dd{ padding:0; margin:0;}
  img {border-style:none; border:0; padding:0; margin:0;}
  a{color:#000; text-decoration:none;}
  a:hover{ text-decoration:none;}
  .clear{ clear:both; height:0; display:block;}
  h1,h2,h3,h4,h5,h6{ font-weight:normal;}
  em,i,samp,b{ font-style:normal;font-weight: normal; font-family:"Microsoft Yahei";}
  .fix{*zoom:1;}
  .fix:after{content:""; display:block; clear:both;}
  .content{width:10.8rem;margin: 0 auto;}
  .t_top{ height:1.35rem; line-height:1.35rem; position:relative; margin-bottom:4.2rem}
  .t_top span.pre{ display:block; position:absolute; top:0.4rem; left:0.36rem; width:0.33rem; height:0.6rem;}
  .t_top span.pre a{ display:block}
  .t_top span.pre img{ width:0.33rem; height:0.6rem;}
  .log {background:url(../assets/image/u2.jpg) no-repeat center; background-size:contain;height: 7rem;}
  .login_con{margin:0 1.22rem;}
  .login_con p input{ outline:none; font-size:0.54rem; height:1.2rem; line-height:1.2rem; color:#666;padding-left:1.2rem; margin-left:0.5rem;border:none }
  .login_con p{ margin-bottom:1.05rem; background:#fff;border-radius:0.6rem; border: 1px solid #aeaeae;width:100%}
  .txt1{ background:url(../assets/image/user.png) no-repeat left center; background-size:contain; }
  .txt2{ background:url(../assets/image/password.png) no-repeat left center; background-size:contain;}
  .login_con p:nth-child(2){ margin-bottom:0.5rem}
  .login_con p:nth-child(3){ background:none; border:none;text-align:right; margin-bottom:1.3rem}
  .login_con p span{ display:block; font-size:0.44rem; background:url(../assets/image/tp2_09.png) no-repeat 5.8rem center; background-size:contain;}
  .login{ background:#6699cc; height:1.2rem; line-height:1.2rem; outline:none; color:#fff; width:100%; font-size:0.65rem; border:none; border-radius:0.6rem; text-align:center; border:none}

</style>

<script>
  import  {login,test} from "@/api/index.js";
  import {setCookie,getCookie} from '../utils/cookie.js'
  export default {
    name:'login',
    data () {
        return {

//            showTishi: false,
//            tishi: '',
//            phone: '',
//            password: '',
//            newUsername: '',
//            newPassword: ''
        }
    },
  mounted(){
      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
      if(getCookie('mobile')){
          this.$router.push('/index')
      }
  },
    methods:{
        login(){
            let data={
                mobile:13439492129,
                password:76543211
            };
            login(data).then(response =>{
              console.log(response);
            }).catch(error =>{
                console.log(error)
            })
        }
    }


  }
</script>
<!--testAxioszz(){
    let param = {
      mobile:this.mobile,
      password:this.password
    }



//    this.http.post('http://119.3.38.190:8081/payController/login',{params:params}).then((response)=>{
//      let res = response.data
//      if(res.status===0){
//        this.goodList = res.result.list
//        console.log(data);
//      }
//      else{
//        this.goodList=[]
//      }
//    })
  }-->
