Reactjs roadmap
- 현재 서비스에 당장 적용하고 싶을 때
- create-react-app으로 Reactjs를 사용하기
- Reactjs 프로젝트를 원하는대로 설정하기
- class 컴포넌트 웹페이지   
  1. 상태관리
      - useReducer
      - contextAPI
      - redux
- hooks 컴포넌트 웹페이지
  1. 상태관리   
  - useReducer
  - contextAPI
- next

## React-basic-applyCDN
- cdn을 이용하기
## create-react-app
```cmd
npx create-react-app [Project name]
```
## react-webpack-template 
- webpack.config.js, .babelrc.js, .postcssrc.js, .eslintrc.js 역할
- vue3-webpack-template와 비슷한 구조의 template만들기
  ```cmd
    npm i -D @babel/preset-react 
    npm i react react-dom
  ```
- webpack.config.js
  - [HtmlWebpackPlugin](https://webpack.kr/plugins/html-webpack-plugin/#root): ```npm i -D html-webpack-plugin```
  - [CopyWebpackPlugin](https://webpack.kr/plugins/copy-webpack-plugin/#root): ```npm i -D copy-webpack-plugin```
  - [DevServer](https://webpack.kr/configuration/dev-server/): ```npm i -D webpack-dev-server```
  ```js
      const path = require('path');
      const HtmlPlugin = require('html-webpack-plugin');
      const CopyPlugin = require('copy-webpack-plugin');
      //export
      module.exports = {
        name: 'Toy',
        resolve: {
          extensions: ['.js', '.jsx'], 
        },
        entry: './src/main',
        output: {
          path: path.join(__dirname, 'dist'), 
          filename: 'bundle.[hash].js', 
        },
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              },
            },
            {
              test: /\.s?css$/,
              use: [
                'style-loader',
                'css-loader', //3
                'postcss-loader', //2  // 순서가 중요하다.
                'sass-loader' // 1
              ]
            },
          ]
        },
        plugins: [
          new HtmlPlugin({
            template: './public/index.html'
          }),
          new CopyPlugin({
            patterns: [
              { from: 'src/assets', to: './myAssets'}
            ]
          }),
        ],
        devServer: {
          host: 'localhost',
          port: 8083,
          open: true,
        },
      } 

  ```
- .babelrc.js    
  - webpack의 ```babel-loader```에서 .babelrc.js가 불러와진다.
  - 최신 es 문법과 리액트의 JSX를 es5로 변환해준다.
  - ```@babel/plugin-transform-runtime``` 비동기를 처리하는 플러그인이다.
  ```js
    module.exports = {
      presets: ['@babel/preset-env', '@babel/preset-react'], 
      plugins: [
        ['@babel/plugin-transform-runtime']
      ]
    }
  ```
- .postcssrc.js   
  - webpack의 ```postcss-loader```에서 .postcssrc.js가 불러와진다.
  - 변경된 css를 바로 적용해준다.
  ```js
    module.exports = {
      plugins: [
        require('autoprefixer')
      ]
    }
  ```
- .eslintrc.js
  ```cmd
  npm info "eslint-config-airbnb@latest" peerDependencies
  # airbnb를 적용하기위한 eslint 패키지 리스트
  npm i -D eslint eslint-plugin-react babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks

  ```
  - eslint-config-airbnb를 적용한다 
    ```js
    module.exports = {
      parser: 'babel-eslint',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        // react
        'airbnb',
        'airbnb/hooks',
        'plugin:import',
      ],
      rules: {
      },
    };

    ```

## 