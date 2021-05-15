import styles from "./Button.module.css";
import React from "react";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
console.log(cx("button", "loading"));

// css의 모듈과 className을 쉽게 사용할 수 있는 라이브러리 !
class Button extends React.Component {
  state = {
    loading: false,
  };
  startLoading = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  };

  render() {
    console.log(classNames("foo", "bars"));
    console.log(classNames("foo", "bar", "bas"));
    console.log(classNames({ foo: true }, { bar: false }));
    console.log(classNames(null, false, "bar", 0, 1, { bar: false }, ""));
    console.log(classNames(styles["button"], styles["loading"]));

    const { loading } = this.state;
    return (
      <button
        onClick={this.startLoading}
        className={cx("button", { loading })}
        {...this.props}
      ></button>
    );
  }
}

export default Button;
