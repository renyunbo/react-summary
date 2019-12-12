import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../container/Home/Home';
import Page1 from '../container/page1/Page1';
import Counter from '../container/counter/Counter';
import UserInfo from '../container/UserInfo/UserInfo';
import ContractForm from '../container/contractForm/ContractForm'

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/page1">Page1</Link>
        </li>
        <li>
          <Link to="/couter">Counter</Link>
        </li>
        <li>
          <Link to="/userinfo">UserInfo</Link>
        </li>
        <li>
          <Link to="/contracForm">contractForm</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/couter" component={Counter} />
        <Route path="/userinfo" component={UserInfo} />
        <Route path="/contracForm" component={ContractForm} />
      </Switch>
    </div>
  </Router>
);

export default getRouter;