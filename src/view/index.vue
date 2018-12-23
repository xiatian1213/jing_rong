<template>
  <div class="content">
    <div class="log"></div>
    <form method="post" action="" onsubmit="save_username();" id="myform" name="myform">
      <div class="login_con fix">
        <div class="tf">
          <router-link to="/signed"><input type="submit" value="签约" name="dosubmit" class="qianyue"></router-link>
          <router-link to="/pay"><input type="submit" value="支付" name="dosubmit"  class="zhifu"></router-link>
          <router-link to="/Paymentenquiry"><input type="submit" value="支付查询" name="dosubmit"  class="zfcx"></router-link>
        </div>
      </div>

    </form>
  </div>
</template>

<style scoped>
  input{
    border: none;
    width: 100%;
    margin-bottom: 1.05rem;
    line-height: 1.1rem;border-radius: 0.6rem;
    font-size: .54rem;
    height: 1.1rem;
    color: #fff;
    outline: none;
  }

  .login {
    background: #6699cc;
    width: 100%;
    margin-bottom: 1.5rem;
    padding-left: 0;
  }
  .qianyue{
    background: url(../assets/image/qianyue.png) no-repeat .8rem #cccc99;
    background-size: contain;
  }
  .zhifu{
    background: url(../assets/image/zhifu.png) no-repeat .8rem #cccc99;
    background-size: contain;
  }
  .zfcx{
    background: url(../assets/image/chaxun.png) no-repeat .8rem #cccc99;
    background-size: contain;
  }

</style>
<script >
import { setCookie,getCookie,delCookie } from '../utils/cookie.js'
    export default{
        data(){
            return{
                name: ''
            }
        },
        mounted(){
            /*页面挂载获取保存的cookie值，渲染到页面上*/
            let uname = getCookie('username')
            this.name = uname
            /*如果cookie不存在，则跳转到登录页*/
            if(uname == ""){
                this.$router.push('/')
            }
        },
        methods:{
            quit(){
                /*删除cookie*/
                delCookie('username')
            }
        }
    }
</script>
