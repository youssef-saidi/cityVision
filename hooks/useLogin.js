import  useDidMount  from './useDidMount';
import { useEffect, useState } from 'react';
import  axios  from 'axios';
import api from '../constants/api';

const useLogin = (formData) => {
  const [Login, setLogin] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const didMount = useDidMount(true);

  const fetchLogin = async (state) => {
    if(state){

    try {
      setLoading(true);
      setError('');
      const response = await axios.post(`${process.env.REACT_APP_URL}${api.LOGIN}`,formData);


      if (response.data.length <= 0) {
        if (didMount) {
          setError('No  Login found.');
          setLoading(false);
        }
      } else {

        if (didMount) {
          setLogin(response.data);
          setLoading(false);
        }
      }
    } catch (e) {
      console.log(e)
      if (didMount) {
        setError('Failed to fetch  Login');
        setLoading(false);
      }
    }
  };
}
  useEffect(() => {
    if (Login.length === 0  && didMount) {
      fetchLogin();
    }
  }, []);

  return {
    Login, fetchLogin, isLoading, error
  };
};



export default useLogin;
