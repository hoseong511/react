- 제로초 강좌 [React Node Bird](https://www.inflearn.com/course/%EB%85%B8%EB%93%9C%EB%B2%84%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A6%AC%EB%89%B4%EC%96%BC/#)를 보며 배운 React+Node fullstack 개발
- sns 트위터 서비스의 기능을 따라 구현하여 만든 서비스이다.
- next.js, node.js, mariadb를 활용한 동적(dynamic)웹페이지
- 모바일에 최적화
---

## **demo**
- [node-bird](http://49.50.161.74/)

## **env**
- next: 10.2.0
- react: 17.0.2
- pm2: 4.5.6
- npm: 6.14.13
- node: 14.17.0
- nvm: 0.38
- mariadb: 10.1.37
- Powered: [naver cloud platform](https://www.ncloud.com/)

## **detail package**
- Front End
  ```json
  {   
      "dependencies": {
        "@ant-design/icons": "^4.6.2",
        "@popperjs/core": "^2.9.2",
        "antd": "^4.15.4",
        "axios": "^0.21.1",
        "babel-plugin-styled-components": "^1.12.0",
        "css-loader": "^5.2.4",
        "faker": "^5.5.3",
        "immer": "^9.0.2",
        "next": "^10.2.0",
        "next-redux-wrapper": "^6.0.2",
        "prop-types": "^15.7.2",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-redux": "^7.2.4",
        "react-router-dom": "^5.2.0",
        "react-slick": "^0.28.1",
        "react-virtualized": "^9.22.3",
        "react-window": "^1.8.6",
        "redux": "^4.1.0",
        "redux-devtools-extension": "^2.13.9",
        "redux-saga": "^1.1.3",
        "shortid": "^2.2.16",
        "style-loader": "^2.0.0",
        "styled-components": "^5.3.0"
      },
      "devDependencies": {
        "babel-eslint": "^10.1.0",
        "eslint": "^7.25.0",
        "eslint-config-airbnb": "^18.2.1",
        "eslint-plugin-import": "^2.23.3",
        "eslint-plugin-jsx-a11y": "^6.4.1",
        "eslint-plugin-react": "^7.23.2",
        "eslint-plugin-react-hooks": "^4.2.0",
        "sass": "^1.32.13",
        "sass-loader": "^11.1.1"
      }
    }
  }
  ```
- Back End
  ```json
  {
      "dependencies": {
      "bcrypt": "^5.0.1",
      "cookie-parser": "^1.4.5",
      "cors": "^2.8.5",
      "dotenv": "^10.0.0",
      "express": "^4.17.1",
      "express-session": "^1.17.2",
      "morgan": "^1.10.0",
      "multer": "^1.4.2",
      "mysql2": "^2.2.5",
      "passport": "^0.4.1",
      "passport-local": "^1.0.0",
      "sequelize": "^6.6.2",
      "sequelize-cli": "^6.2.0"
    },
    "devDependencies": {
      "nodemon": "^2.0.7"
    }
  }
  ```

## **features**
- 처음 웹페이지에 접속 시 에는 검색엔진에 최적화(SEO)된 SSR방식, 이후에는 CSR 방식이 가능한 next.js를 이용
- redux-saga를 이용한 상태 관리 및 비동기 데이터 처리
- 
