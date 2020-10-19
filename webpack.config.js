const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")

// const port = process.env.PORT || 3000;
const port = 3000;

module.exports = {
    // webpack 설정을 위한 code 작성
    // 작성된 code는 module.export로 내보내짐
    mode: "development",
    entry: "./src/index.js", // bundling process가 시작되는 지점
    output:{ // bundling process가 끝난 뒤 bundling file을 저장할 장소와 이름 지정
        path: "__dirname + /dist", // bundling된 file을 경로 "./dist"에 저장
        filename: "bundle.[hash].js" // bundling된 file name
        // filename의 [hash]는 application이 수정되어 다시 compile될 때마다 webpack에서 생성된 hash로 변경해 cashing에 도움
    }
}