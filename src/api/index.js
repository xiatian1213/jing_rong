/**
 * Created by Administrator on 2018/12/22.
 */
import request from '@/utils/request';
//登录接口
export function login(data) {
    return request({
        url: '/payController/login',
        method: 'post',
        data:data
    })
}
//修改密码
export function updatePassWord(data) {
  /*{mobile:15332318109 //手机号
   oldPassword:7654321//老密码
   newPassword:12345671
  }*/
  return request({
    url: '/payController/updatePassWord',
    method: 'post',
    data:data
  })
}
/*
* 签约发起
* */
export function agreeapply(data) {
  /*{curl --location --request POST "http://127.0.0.1:8081/payController/agreeapply" \
  --form "meruserid=ca28ef6dd5d74334ad8721a8e00afdc1" \
  --form "accttype=00" \
  --form "acctno=6225882900832236" \
  --form "idno=610103198511052473" \
  --form "acctname=孙文博" \
  --form "mobile=15332318109" \
  --form "cvv2=" \
  --form "validdate="
  }*/
  return request({
    url: '/payController/agreeapply',
    method: 'post',
    data:data
  })
}
/*
* 签约发起确认
* */
export function agreeconfirm(data) {
  /*curl --location --request POST "http://127.0.0.1:8081/payController/agreeconfirm" \
  --form "id=bc3333cb38f34a678ded812944e3eef5" \
  --form "smscode=111111"*/
  return request({
    url: '/payController/agreeconfirm',
    method: 'post',
    data:data
  })
}
/*
* 用户绑卡列表
* */
export function getAcctList(data) {
  /*curl --location --request POST "http://119.3.38.190:8081/payController/getAcctList" \
  --form "meruserid=ca28ef6dd5d74334ad8721a8e00afdc1"*/
  return request({
    url: '/payController/agreeconfirm',
    method: 'post',
    data:data
  })
}
/*
* 支付申请
* */
export function payapply(data) {
  /*curl --location --request POST "http://127.0.0.1:8081/payController/payapply" \
  --form "agreeid=201812190423338003" \
  --form "amount=100" \
  --form "subject=支付" \
  --form "meruserid=ca28ef6dd5d74334ad8721a8e00afdc1"*/
  return request({
    url: '/payController/payapply',
    method: 'post',
    data:data
  })
}

/*
*  支付申请确认
* */
export function pay(data) {
  /*curl --location --request POST "http://127.0.0.1:8081/payController/pay" \
  --form "orderid=db7b253d8b9648d6988aaaad1c59f66a" \
  --form "smscode=111111"*/
  return request({
    url: '/payController/pay',
    method: 'post',
    data:data
  })
}

/*
*  支付申请确认
* */
export function listPage(data) {
  /*curl --location --request POST "http://127.0.0.1:8081/payController/listPage" \
  --form "meruserid=ca28ef6dd5d74334ad8721a8e00afdc1" \
  --form "pageSize=3" \
  --form "pageNo=1" \
  --form "dateIndex=0"*/
  return request({
    url: '/payController/listPage',
    method: 'post',
    data:data
  })
}







/*
* 测试接口
* */
export function test(data) {
    /*http://echarts.baidu.com/examples/data-gl/asset/data/buildings.json*/
    return request({
        url: '/data-gl/asset/data/buildings.json',
        method: 'get',//get ��ʽ�Ĳ��� ����д
        //params:data
    })
}

export function test1(data) {
    return request({
        url: '/payController/login',
        method: 'post',
        data  //post ��ʽ�Ĳ��� ����д
    })
}
