/**
 * Created by Administrator on 2018/12/22.
 */
export default  {
    'local_gxf': {
        HOST_NAME:'http://echarts.baidu.com/examples/',

    },
    // �����ʾ���������ǲ��Է�����
    'test': {
        HOST_NAME:'http://119.3.38.190:8081/',// �Ǳ�(requset.js)�������õ��� test �������
    },
    // �����ʾ���������Ƿ�����
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