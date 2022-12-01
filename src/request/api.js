import requests from "./index";
// 登录接口
export const loginentry = (data) => {
  return requests({
    method: 'post',
    url: '/api/login',
    data,
  })
}
// 注册接口
export const register = (data) => {
  return requests({
    url: '/api/resign',
    method: 'post',
    data,
  })
}
export const zonedata = () => {
  return requests({
    url: '/api/zone_data',
    method: 'get',

  })
}
export const getuserdata = () => {
  return requests({
    url: '/api/User_data',
    method: 'get',
  })
}
export const getzonedata = () => {
  return requests({
    url: '/api/today_data',
    method: 'get',
  })
}
export const editzone = (data) => {
  return requests({
    method: 'post',
    url: '/api/set_zone',
    data,
  })
}
export const editusername = (data) => {
  return requests({
    method: 'post',
    url: '/api/set_name',
    data,
  })
}
export const editpassword = (data) => {
  return requests({
    method: 'post',
    url: '/api/set_password',
    data,
  })
}
export const knngetdata = () => {
  return requests({
    method: 'get',
    url: '/api/knn_data',
  })
}
export const normaltdata = () => {
  return requests({
    method: 'get',
    url: '/api/normalModel',
  })
}