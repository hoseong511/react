import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux'; // react랑 redux를 연결
import Mylayout from '../components/MyLayout';
import Link from 'next/link';

const Login = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <Mylayout>
                      
      {isLogin ? <Mylayout/> : <LoginForm />}
    </Mylayout>
  )
}

export default Login;
