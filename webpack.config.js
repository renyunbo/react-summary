const webpack = require('webpack');
const path = require('path');
//配置html模板，每个插件都是一个雷，所以命名的时候最好首字母大写
let HtmlWebpackPlugin = require('html-webpack-plugin');
//拆分css样式的插件
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
//清空生成的文件
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');//拷贝静态文件

module.exports = {
    entry: './src/index.js',    // 入口文件
    output: {
        filename: '[name].[hash].bundle.js',      // 打包后的文件名称
        path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
    },
    devServer: {
        contentBase: './dist',    //服务器启动的目录
        open: true,   //自动打开浏览器
        // proxy: {    //设置代理，可用于本地mock数据，本地自己启动另外一个服务
        //     "/api": {
        //         target: "http://127.0.0.1:8083/"
        //     }
        // },
        port: 8083, //指定端口号
        hot: true,   //开启HMR(Hot Module Replacement)热模块替换,由于是webpack自带的，所以要引入webpack ，监控并更新js模块的工作vue等框架自己做了，否则需要自己手动监控 
        hotOnly: true
    },
    module: {
        rules: [
            {
                test: /\.less$/,     // 解析less
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader', 'less-loader'] // 从右向左解析
                })
            },
            {
                test: /\.scss$/,     // 解析scss
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader', 'sass-loader'] // 从右向左解析
                })
            },
            {
                test: /\.css$/,     // 解析css
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader']
                })
            }, {
                test: /\.(jpe?g|png|gif)$/, //引用图片
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: "[name]-[hash:5].min.[ext]", //打包后图片的名称 [name]表示图片的名称 [hash:5]表示5位hash值 [ext]表示文件的扩展名
                            limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                            outputPath: 'images/'  //打包后的图片放在 dist/images/下边
                        }
                    }
                ]
            }, {//页面img引入图片
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
            }, {//引用字体图片和SVG图片
                test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader'
            }, {
                test: /\.js$/,//将代码转成ES5
                use: 'babel-loader',
                include: /src/,          // 只转化src目录下的js
                exclude: /node_modules/  // 排除掉node_modules，优化打包速度
            }
        ],
    },
    plugins: [
        //打包前先清空dist目录
        new CleanWebpackPlugin(),
        //通过new一下这个类来使用插件
        new HtmlWebpackPlugin({
            //在src目录下创建一个index.html页面当做模板来使用
            title: 'react-summary',
            template: './src/index.html',
            hash: true,//会在打包好的bundle.js后面加上hash串
            inject: 'body',//js等具体注入的位置
        }),
        //拷贝静态文件
        new CopyWebpackPlugin([
            {
                from: 'src/public/',
                to:''
            }
        ]),
        // 拆分后会把css文件放到dist目录下的css/style.css
        new ExtractTextWebpackPlugin('css/style.css'),
        // 热更新，热更新不是刷新
        new webpack.HotModuleReplacementPlugin(),
        
    ],
    devtool: 'source-map',     //设置文件映射
    resolve: {
        // 别名
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
        },
        // 省略后缀
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
    }
}