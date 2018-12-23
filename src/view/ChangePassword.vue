<template>
  <div class="content">
    <div class="log"></div>
    <form method="post" action="" onsubmit="save_username();" id="myform" name="myform">
      <div class="login_con fix">

        <div>
          <label >手机号</label>

          <input type="text" name="sex"  /><br />
        </div>
        <div>
          <label >旧密码</label>

          <input type="text" name="sex"  /><br />
        </div>
        <div>
          <label >新密码</label>

          <input type="text" name="sex"  /><br />
        </div>

          <div class="tf">
            <input type="submit" value="确认" name="dosubmit"  class="login">
            <!-- 返回到登录页 -->
            <router-link to="/login"><input type="submit" value="返回" name="dosubmit"  class="login"></router-link>
          </div>
        </div>

    </form>
  </div>

</template>

<style>
  input,select{
    border: 1px solid #aeaeae;width: 6rem;margin-bottom: 1.05rem;line-height: 1.1rem;border-radius: 0.6rem;border: 1px solid #aeaeae;font-size: .54rem;
    height: 1.1rem;
    color: #666;
    padding-left: .5rem;
    outline: none;
    float: right;
  }
  .login_con{
    margin: 0;
  }
  select{width: 6.5rem;-webkit-appearance: none;   /* Safari 和 Chrome */
    -moz-appearance: none;   /* Firefox */
    background: transparent;
    background: url("https://raw.githubusercontent.com/ourjs/static/gh-pages/2015/arrow.png") no-repeat scroll right center transparent;
    padding-right: .14rem;

  }
  option{
    font-size: .54rem;
  }

  label{line-height: 1.1rem;font-size: .54rem;margin-left: .6rem;float: left;}
  .fix{*zoom:1;}
  .fix:after{content:""; display:block; clear:both;}
  .login_con{ padding:0 .3rem}
  .login_con div{
    content:""; display:block; clear:both;
    /*display: flex;
      justify-content: flex-end;*/
    margin-right: .8rem;

  }

  .login_con .tf{margin: 0 auto;margin-left: .8rem;display: flex;justify-content: space-between;}
  .login {
    background: #6699cc;
    width: 4rem;
    margin-bottom: 1.5rem;
    padding-left: 0;
  }
</style>
<script type=“text/ecmascript-6”>
</script>
