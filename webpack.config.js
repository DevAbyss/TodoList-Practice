const path = require('path');
// core nodejs module 중 하나, file 경로 설정할 때 사용

const HtmlWebpackPlugin = require('html-webpack-plugin');
// index.html file을 dist folder에 'index_bundle.[hash].js' file과 함께 자동으로 생성

module.exports = {
  entry: './src/index.js',
  // bundling process가 시작되는 지점
  // 생략할 경우 './src/index.js'가 기본 지점
  output: {
    // bundling process가 끝난 뒤 bundling된 file을 저장할 장소와 이름을 지정
    path: path.join(__dirname, '/dist'),
    // bundling된 file을 './dist'에 저장
    filenamd: 'index_bundle.[hash].js',
    // filename의 [hash]는 application이 수정되어 다시 compile될 때마다 Webpack에서 생성된 hash로 변경해 cashing에 도움
  },
  module: {
    // bundling 과정에서 사용할 규칙 설정
    rules: [
      {
        test: /\.js$/,
        // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
        exclude: /node_module/,
        // node module 폴더는 babel 컴파일에서 제외
        use: ['babel-loader'],
        // 모든 javascript file에 '.babelrc'에서 설정한 babel-loader를 적용
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
