<template>
  <div class="content">
    <div class="log"></div>
    <form method="post" action="" onsubmit="save_username();" id="myform" name="myform">
      <div class="login_con fix">
        <div class="search">
          <button class="ri">日</button>
          <button class="zhou">周</button>
          <button class="yue">月</button>
        </div>
        <div class="search_cont fix">
          <ul>
            <li>
              <p>单号: <span>11111</span></p>
            </li>
            <li>
              <p>交易时间: <span>2018/12/04</span></p>
            </li>
            <li class="jykh">
              <p>交易卡号: <span>1111111111111111</span></p>
            </li>
            <li>
              <p>交易金额: <span>11111</span> </p>
            </li>
            <li>
              <p>交易状态: <span>交易成功</span></p>
            </li>
          </ul>
        </div>
        <div class="search_cont fix">
          <ul>
            <li>
              <p>单号: <span>11111</span></p>
            </li>
            <li>
              <p>交易时间: <span>2018/12/04</span></p>
            </li>
            <li class="jykh">
              <p>交易卡号: <span>1111111111111111</span></p>
            </li>
            <li>
              <p>交易金额: <span>11111</span> </p>
            </li>
            <li>
              <p>交易状态: <span>交易成功</span></p>
            </li>
          </ul>
        </div>
        <div class="search_cont fix">
          <ul>
            <li>
              <p>单号: <span>11111</span></p>
            </li>
            <li>
              <p>交易时间: <span>2018/12/04</span></p>
            </li>
            <li class="jykh">
              <p>交易卡号: <span>1111111111111111</span></p>
            </li>
            <li>
              <p>交易金额: <span>11111</span> </p>
            </li>
            <li>
              <p>交易状态: <span>交易成功</span></p>
            </li>
          </ul>
        </div>
        <div class="fh">
          <router-link to="/index"><input type="submit" value="返回" name="dosubmit" id="dosubmit" class="login"></router-link>

        </div>

      </div>
    </form>
  </div>
</template>

<style scoped>
  body{margin: 0;padding:0;}
  .fix{*zoom:1;}
  .fix:after{}

  .search{
    display: flex;
    justify-content: space-between;
    margin: 0 .6rem;
  }
  .search button{
    width: 3rem;
    line-height: 1.2rem;
    font-size:.5rem;
    border:none;
    color:white;
    background: #666633;
  }
  .fh{margin: 0 auto;width: 8rem;}
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
    margin: .5rem 0 1rem 0;
  }
  .login_con{margin:0rem;}
  .log {background:url(../assets/image/u2.jpg) no-repeat center; background-size:contain;height: 7rem;}
  .search_cont{margin: 1rem .5rem;height: 2.4rem;}
  .search_cont p{font-size: .4rem;color: #666;margin-block-start: 0;border:none;
    margin-block-end: 0;line-height: .8rem;}
  .search_cont span{display: inline-block;font-size: .4rem;color: #000;float: right;}
  ul{
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
  ul>li{
    float: left;
    width: 50%;
    list-style: none;
    border: 1px solid #aeaeae;
    box-sizing: border-box;
    padding:0 .3rem;
  }
  ul>li:nth-child(1){border-bottom: none;border-right: none;}
  ul>li:nth-child(2){border-bottom: none;}
  ul>li:nth-child(4){border-top: none;}
  ul>li:nth-child(5){border-left: none;border-top: none;}
  .jykh{width: 100%;border: 1px solid #aeaeae;}

</style>
<script type=“text/ecmascript-6”>
</script>
