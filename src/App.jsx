import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Header, Navigation, About, Portfolio, Contact, Footer } from './js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Redirect from="/" to="/about" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;