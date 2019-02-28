/*
ajax请求模块
*/
import axios from "axios";

export default function ajax(url, data = {}, type = "GET") {
  return new Promise(function (resolve, reject) {
    // 执行请求
    let promise;
    let param = new URLSearchParams();
    for (const key in data) {
      param.append(key, data[key]);
    }
    if (type === "GET") {
      // 准备url query参数数据
      let dataStr = ""; // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      //发送get请求
      promise = axios.get(url);
    } else {
      //发送post请求
      promise = axios.post(url, param);
    }
    promise
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
