import  useDidMount  from './useDidMount';
import { useEffect, useState } from 'react';
import  axios  from 'axios';
import api from '../constants/api';

const useUser = (id) => {
  const [User, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const didMount = useDidMount(true);

  const fetchUser = async () => {

    try {
      setLoading(true);
      setError('');

      const response = await axios.get(`${process.env.REACT_APP_URL}${api.GET_USER}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });


      if (response.data.length <= 0) {
        if (didMount) {
          setError('No  User found.');
          setLoading(false);
        }
      } else {

        if (didMount) {
          setUser(response.data);
          setLoading(false);
        }
      }
    } catch (e) {
      console.log(e)
      if (didMount) {
        setError('Failed to fetch  User');
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (User.length === 0 && didMount) {
      fetchUser();
    }
  }, []);

  return {
    User, fetchUser, isLoading, error
  };
};



export default useUser;
