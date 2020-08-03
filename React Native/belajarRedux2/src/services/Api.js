import {login_post, bookmark_post} from '../RestApi';

const ReactNativeCodeApi = {
  login_api: async (email, pass) => {
    let body = new FormData();
    body.append('email', email);
    body.append('password', pass);

    return await login_post(body);
  },
  bookmark_api: async (email) => {
    let body = new FormData();
    body.append('email', email);

    return await bookmark_post(body);
  },
};

export default ReactNativeCodeApi;
