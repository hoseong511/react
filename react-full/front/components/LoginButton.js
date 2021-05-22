/* eslint-disable react/react-in-jsx-scope */
import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { visibleOn } from '../reducers/user';
import LoginForm from './LoginForm';

const LoginButton = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.user.visible);
  const showModal = () => {
    dispatch(visibleOn());
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        title="Login"
        visible={visible}
        footer={null}
      >  <LoginForm />
      </Modal>
    </>
  );
};

export default LoginButton;
