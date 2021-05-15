import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./pages/Login";

import styles from "./App.module.css"; // module.css를 이용해서 컴포넌트 하나 당 독립적인 css를 적용할 수 있도록 설정한다.
import logo from "./logo.svg";
import Button from "./components/Button";

const isLogin = false;
// 동적 라우팅 -> switch를 이용해서 NotFound(default)페이지 표현하기
function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["header"]}>
        <img src={logo} className={styles["logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles["link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Button</Button>
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
  );
}

export default App;
