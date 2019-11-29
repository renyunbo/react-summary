import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';

import 'babel-polyfill';
import './css/style.less';
import './css/index.less';
//为了实现热更新（需要在主要的js文件里写入下面的这段代码）
if(module.hot){
    //实现热更新
    module.hot.accept();
}
console.log('bbbbbbb');


ReactDom.render(
    getRouter(),
    document.getElementById("app")
);