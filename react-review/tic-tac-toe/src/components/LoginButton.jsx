import { withRouter } from "react-router-dom";
// withRouter 를 이용하면 하위 컴포넌트에 props를 전달하기 쉬워진다. ( 인자로 넘겨줄 필요가 없이진다.)
export default withRouter(function LoginButton(props) {
  function login() {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  }
  return <button onClick={login}>로그인 하기</button>;
});

/**
 * 1. props전달하기
 * 2. HOC(High Order Component)이용하기
 * 3. hook
 */
