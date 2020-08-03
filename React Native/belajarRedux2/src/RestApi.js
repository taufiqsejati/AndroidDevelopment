import {create} from 'apisauce';
import {Config} from '@common';
const ReactNativeCode = Config.ReactNativeCode;
var baseURL = ReactNativeCode.server_url;
var baseURL1 = ReactNativeCode.server_url1;

// define the api
const api = create({
  baseURL: baseURL,
  headers: {
    Accept: 'multipart/form-data',
  },
});
const api2 = create({
  baseURL: baseURL1,
  headers: {
    Accept: 'multipart/form-data',
  },
});

export let login_post = (body) =>
  api.post('/LoginUser/UserLogin', body).then((response) => response);
export let bookmark_post = (body) =>
  api2.post('/LoginUser/UserLogin', body).then((response) => response);
