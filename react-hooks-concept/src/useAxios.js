import defaultAxios from 'axios';
import { useState, useEffect } from 'react';

// axios를 이용한 hooks! 이와 같이 인스턴스를 내 임의로 설정해서 만들어 낼 수 있다.
const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [ state, setState ] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [trigger, setTrigger] = useState(false);
  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  }
  useEffect(() => {
    axiosInstance(opts)
    .then(data => {
      setState({ ...state, loading: false, data })
    })
    .catch(err => {
      setState({ ...state, loading: false, err })
    })
  }, [trigger]);
  if (!opts.url) return;
  return {...state, refetch};
}

export default useAxios;