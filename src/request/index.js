//对axios进行二次封装,将刚才下载好的axios导入进来
import axios from "axios";
import Cookies from "js-cookie";
//1.利用axios对象的方法create,去创建一个axios实例
//2.requests就是axios,只不过稍微配置一下
const requests = axios.create({
	//配置对象
	//基础路径，发请求的时候，路径当中会出现api，不用你手写
	baseURL:'http://172.18.38.22:8081',
	//请求时间超过5秒
	timeout:5000,
});

// Add a request interceptor
requests.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("1")

    config.headers.Authorization = localStorage.getItem("token")
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
requests.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
//对外暴露requests(axios的二次封装)
export default requests;
