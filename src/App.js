import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Trading from './components/Trading';
import Learning from './components/Learning';
import Exchanges from './components/Exchanges';
import Glossary from './components/Glossary';
import Menu from './components/Menu';
import './App.css';

function App() {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/trading" component={Trading} />
          <Route path="/learning" component={Learning} />
          <Route path="/exchanges" component={Exchanges} />
          <Route path="/glossary" component={Glossary} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
