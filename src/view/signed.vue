<template>
  <div class="content">
    <div class="log"></div>
    <form method="post" action="" onsubmit="save_username();" id="myform" name="myform">
      <div class="login_con fix">
        <div>
          <label >卡类型</label>

          <select>
            <option value="00:借记卡">借记卡</option>
            <option value="02:准贷记卡/贷记卡">准贷记卡/贷记卡</option>
          </select><br />
        </div>
        <div>
          <label >卡号</label>

          <input type="text" name="sex"  /><br />
        </div>
        <div>
          <label >户名</label>

          <input type="text" name="sex"  /><br />
        </div>
        <div>
          <label >身份证</label>

          <input type="text" name="sex"  /><br />
        </div>
        <div>
          <label >有效期</label>

          <input type="month" name="sex"  /><br />
        </div>
        <div>
          <label >cvvs</label>

          <input type="text" name="sex"  /><br />
        </div>
        <div class="tf">
          <input type="submit" value="提交" name="" class="login">
          <router-link to="/index"><input type="submit" value="返回" name="" class="login"></router-link>
        </div>
      </div>

    </form>
  </div>
</template>
<style scoped>
input,select{
border: 1px solid #aeaeae;width: 6rem;margin-bottom: 1.05rem;line-height: 1.1rem;border-radius: 0.6rem;border: 1px solid #aeaeae;font-size: .5rem;
height: 1.1rem;
padding-left: .5rem;
outline: none;
float: right;
}
.login_con{
margin: 0;
}
body{position: relative;}
.min_box{position: fixed;top:50%;z-index: 666;display: none;}
select{width: 6.5rem;-webkit-appearance: none;   /* Safari 和 Chrome */
-moz-appearance: none;   /* Firefox */
background: transparent;
background: url("https://raw.githubusercontent.com/ourjs/static/gh-pages/2015/arrow.png") no-repeat scroll right center transparent;
padding-right: .14rem;

}
option{
font-size: .5rem;
}

label{line-height: 1.1rem;font-size: .5rem;margin-left: .6rem;float: left;}
.fix{*zoom:1;}
.fix:after{content:""; display:block; clear:both;}
.login_con{ padding:0 .3rem}
.login_con div{
content:""; display:block; clear:both;
/*display: flex;
justify-content: flex-end;*/
margin-right: .8rem;

}
.login_con .tf{

display: flex;
justify-content:space-between;
margin-left: .8rem;


}
.login {
background: #6699cc;
width: 4rem;
margin-bottom: 1.5rem;
padding-left: 0;
}
</style>
<script type=“text/ecmascript-6”>
</script>
