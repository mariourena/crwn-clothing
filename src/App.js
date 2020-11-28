import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import SECTIONS_DATA from './config/sections.data';
import './App.css';

const HatsPage = props => (
  <div>Hats Page</div>
)

class App extends Component {
  render() {
    return <div className='App'>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInUp} />
        {SECTIONS_DATA.map(({id, linkUrl}) => 
          <Route key={id} path={`/${linkUrl}`} component={HatsPage} />
        )}
      </Switch>
    </div>;
  }
}

export default App;
