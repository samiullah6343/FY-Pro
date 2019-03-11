import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux'

import Header from './components/header';
import Foot from './components/footer';
import './App.css';

import Home from './components/home';
import About from './components/about';
import Products from './components/products';
import Contact from './components/contact';
import Profile from './components/profile';
import Cart from './components/cart';
import Airc from './components/wp-ac';
import Freezer from './components/wp-frz';
import Refri from './components/wp-ref';
import Show from './components/wp-show';
import Wdispencer from './components/wp-wd';
import Wmachine from './components/wp-wm';
import Tv from './components/wp-tv';
import Led from './components/wp-led';
import Dishw from './components/wp-dw';
import Register from './components/register';





class App extends Component {

  render() {

    return (
      <Provider store={store}>

        <BrowserRouter>

          <div className="App">

            <Header />

            <Switch>

              <Route path="/about" component={About} />
              <Route path="/products" component={Products} />
              <Route path="/contact" component={Contact} />
              <Route path="/profile" component={Profile} />
              <Route path="/cart" component={Cart} />
              <Route path="/wp-ac" component={Airc} />
              <Route path="/wp-frz" component={Freezer} />
              <Route path="/wp-ref" component={Refri} />
              <Route path="/wp-show" component={Show} />
              <Route path="/wp-wd" component={Wdispencer} />
              <Route path="/wp-wm" component={Wmachine} />
              <Route path="/wp-tv" component={Tv} />
              <Route path="/wp-led" component={Led} />
              <Route path="/wp-dw" component={Dishw} />
              <Route path="/register" component={Register} />
              <Route path="/" component={Home} />

            </Switch>

            <Foot />

          </div>

        </BrowserRouter>
      </Provider>
    );

  }

}

export default App;
