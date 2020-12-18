import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Join from './routes/Join';
import Product from './routes/Product';
import Detail from './routes/Detail';
import News from './routes/News';
import NewsDetail from './routes/NewsDetail';
import MenuTab from './routes/MenuTab';
import RoadMap from './routes/RoadMap';

const App = () => {
  return (
    <HashRouter>
      <Route path='/' exact={true} component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/join' component={Join} />
      <Route path='/product' exact={true} component={Product} />
      <Route path='/product/detail' component={Detail} />
      <Route path='/news' exact={true} component={News} />
      <Route path='/news/detail' component={NewsDetail} />
      <Route path='/menutab' component={MenuTab} />
      <Route path='/roadmap' component={RoadMap} />
    </HashRouter>
  );
};

export default App;