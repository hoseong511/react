import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./pages/Login";

import styles from "./App.module.css"; // module.css를 이용해서 컴포넌트 하나 당 독립적인 css를 적용할 수 있도록 설정한다.
import logo2 from "./sun.svg";
import Button from "./components/Button";
import StyledButton from "./components/StyledButton";
import styled, { createGlobalStyle } from 'styled-components';
import StyledA from "./components/StyledA";

import root from 'react-shadow'; // module.css, styled-component, shadow 전부 css를 독립적으로 사용하는 기능
// import A from "./components/A";
import A from "./components/ReverseA";


const PrimaryStyledButton = styled(StyledButton)`
  background: royalblue;
  color: white;
  `;

const UppercaseButton = props => <button {...props} children={props.children.toUpperCase()}/>; // as 활용하기(컴포넌트 지정)

const MyButton = props => <button {...props} children={`MyButton ${props.children}`} />;

const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius:3px;
  color: white;
  border: 2px solid ${props => props.color || 'white'};
  margin: 0 1em;
  padding: 0.25em 1em;

  :hover {
    border: 2px solid red;
  }

  ::before {
    content: '|';
  }
`;

const GlobalStyle = createGlobalStyle`
button {
  color: yellow;
  background: black;
}
`;

const isLogin = false;
// 동적 라우팅 -> switch를 이용해서 NotFound(default)페이지 표현하기
function App() {
  return (
    <>
    <root.div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

    </root.div>
    <div className={styles["App"]}>
      <GlobalStyle />
      <header className={styles["header"]}>
        <img src={logo2} className={styles["logo"]} alt="logo" />
        <a
          className={styles["link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <A />

        {/* <button>global</button>
        <Button>Button</Button>
        <StyledButton>버튼</StyledButton>
        <StyledButton primary>버튼</StyledButton>
        <PrimaryStyledButton >버튼</PrimaryStyledButton>
        <StyledButton as='a' href='/'>버튼</StyledButton>
        <StyledButton as={UppercaseButton} href='/'>button</StyledButton>
        <StyledMyButton>button</StyledMyButton>
        <StyledA href='https://google.com'> 구구구구글</StyledA> */}
      </header>
      <BrowserRouter>
        <Links />
        <NavLinks />
        <Switch>
          <Route
            path="/login"
            render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
          />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
