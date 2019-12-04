import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import getRouter from './router/router';

import './css/style.less';
import './css/index.less';

//为了实现热更新（需要在主要的js文件里写入下面的这段代码）
if (module.hot) {
    //实现热更新
    module.hot.accept();
}
console.log('bbbbbbb');

ReactDom.render(
    <Provider store={store}>{getRouter()}</Provider>,//Provider组件是让所有的组件可以访问到store，不用手动去传，也不用手动去监听
    document.getElementById('app')
);