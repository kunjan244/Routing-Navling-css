import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Info from './component/Info';
import Menu from './Menu';
import User from './component/User';
import Login from './component/Login';
import  Function from './component/Function';
import Pagenotfound from './component/Pagenotfound';
import Product from './component/Product';



function App() {
  return (
    <>
<Menu />

<Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/about' component={About} />
  <Route exact path='/contact' component={Contact} />
  <Route exact path='/login' component={Login} />
  <Route exact path='/user' component={User} />
  <Route exact path='/info' component={Info} />
  <Route exact path='/Function' component={Function} />
  <Route exact path='/Product' component={Product} />
  <Route component={Pagenotfound} />

</Switch>


     
      </>   
  );
}

export default App;
