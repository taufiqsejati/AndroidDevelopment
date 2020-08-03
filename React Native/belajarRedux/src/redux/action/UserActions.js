import axios from 'axios';

// actions
export const onUserLogin = ({email, password}) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('https://netflix-example.herokuapp.com/user/mock-login', {email, password});
        dispatch({type: 'DO_LOGIN', payload: response.data});
      } catch (error) {
        dispatch({type: 'DO_LOGIN', payload: error});
      }
    };
  };
  export const onFetchProduct = () => {
    return async (dispatch) => {
      try {
        const response = {
          data: [
            {name: 'Machbook Pro', price: '$1500'},
            {name: 'iPhone', price: '$1000'},
            {name: 'Nexus', price: '$500'},
          ],
        };
        dispatch({type: 'FETCH_PRODUCTS', payload: response.data});
      } catch (error) {
        dispatch({type: 'DO_LOGIN', payload: error});
      }
    };
  };