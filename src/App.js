import React from 'react'
import { BrowserRouter as Router, Route, Switch } 
from 'react-router-dom';
import Contact from './component/Contact';
import Home from './component/Home';
import Header from './component/Header';
import About from './component/About'
import { Footer } from './component/Footer';

export default function App() {
  return (
    <div>
      <Router >
        <Header />          
            <Switch>    
              <Route exact path="/"><Home/></Route>
              <Route path="/about"><About/></Route>
              <Route path="/contact"><Contact/></Route>
            </Switch>          
          <Footer/>
      </Router>
    </div>
  )
}
