const types = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN_SUCCESS',
};

export const actions = {
  login: (user) => {
    return {type: types.LOGIN, user};
  },
  logout() {
    return {type: types.LOGOUT};
  },
};

const initialState = {
  Name: '',
  Telp: '',
  Email: '',
  // "image": ""
};

export const reducer = (state = initialState, action) => {
  const {type, user} = action;

  switch (type) {
    case types.LOGOUT:
      return Object.assign({}, initialState);

    case types.LOGIN:
      return Object.assign({}, state, {
        Name: user.nama_lengkap,
        Telp: user.no_telp,
        Email: user.email,
        // "image":user.image
      });

    default:
      return state;
  }
};
