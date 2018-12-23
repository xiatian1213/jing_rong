/**
 * Created by Administrator on 2018/12/22.
 */
export default  {
    'local_gxf': {
        HOST_NAME:'http://echarts.baidu.com/examples/',

    },
    // 这个是示例，是你们测试服务器
    'test': {
        HOST_NAME:'http://119.3.38.190:8081/',// 那边(requset.js)现在引用的是 test 这个变量
    },
    // 这个是示例，是你们服务器
    'server': {
        HOST_NAME:'http:examplie.heeo.com',
    }
}
/*let prot = 8081+'/payController'
 let host = '://119.3.38.190:'+prot
 let baswURL = 'http'+host
 let axiosConfig = {
 baseURL,
 timeout:1000
 }
 let instanceTmp = axios.create(axiosConfig)

 export default {
 getAxios:instanceTmp,
 getCancelToken:axios.Cancel.token
 }

 */