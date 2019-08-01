module.exports = {
    // cheap指的是忽略列信息
    // module指的是会定位到我们的源文件，而不是编译之后的js的文件
    // eval-source-map指的是会以data-uri的形式打包到文件中
    devtool: 'cheap-module-eval-source-map'
}