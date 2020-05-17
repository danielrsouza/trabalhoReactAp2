import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Nav from './Componets/Nav';
import Home from './Componets/Home';
import Sobre from './Componets/Sobre';
import Produtos from './Componets/Produtos';
import Contato from './Componets/Contato';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sobre">
            <Sobre />
          </Route>
          <Route path="/produtos">
            <Produtos />
          </Route>
          <Route path="/contatos">
            <Contato />
          </Route>

        </Switch>
      </Router>
    </div>
  
  );
}

export default App;
