<template>
  <div class="content">
    <div class="log"></div>
    <form method="post" action="" onsubmit="save_username();" id="myform" name="myform">
      <div class="login_con fix">

        <div class="search_cont">

          <p>卡号 <span>签约日期</span>		</p>
          <p>1111111111111111 <span>2018-10-11</span>	</p>
          <p>1111111111111111 <span>2018-10-11</span> </p>
          <p>1111111111111111 <span>2018-10-11</span></p>
          <p>1111111111111111 <span>2018-10-11</span></p>
          <p>1111111111111111 <span>2018-10-11</span></p>
        </div>
        <router-link to="/index"><input type="submit" value="返回" name="dosubmit" id="dosubmit" class="login"></router-link>
      </div>
    </form>
  </div>
</template>

<style>
  body{margin: 0;padding:0;}
  .fix{*zoom:1;}
  .fix:after{content:""; display:block; clear:both;}

  .search{
    display: flex;
    justify-content: space-between;
    margin: 0 .3rem;
  }
  .search button{
    width: 3rem;
    line-height: 1.2rem;
    font-size:.6rem;
    border:none;
    color:white;
  }
  .log {background:url(../assets/image/u2.jpg) no-repeat center; background-size:contain;height: 7rem;}
  .search_cont p{font-size: .46rem;color: #666;
    border-radius: 0; border:none;line-height: 1.2rem;border-bottom: 1px dashed #666;
    padding: 0 .5rem;width: auto;}
  .search_cont span{float: right;display: inline-block;font-size: .46rem;color: #666;}
  .login_con p:nth-child(2) {
    margin-bottom: 1rem;
  }
  .login_con p:nth-child(3) {
    border-bottom: 1px dashed #666;
    text-align: left;
    margin-bottom: 1rem;
  }
  .login {
    background: #6699cc;
    height: 1.2rem;
    line-height: 1.2rem;
    outline: none;
    color: #fff;
    width: 8rem;
    font-size: 0.65rem;
    border: none;
    border-radius: 0.6rem;
    text-align: center;
    border: none;
    display: inherit;
    margin: 1rem auto;
  }
  .login_con{margin:0;}

</style>
<script type=“text/ecmascript-6”>
</script>
