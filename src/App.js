import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route, } from 'react-router-dom';
import EmployeeDashboard from './components/EmployeeDashboard';
import PatronDashboard from './components/PatronDashboard';
import Header from './components/Header';
import NewKeg from './components/NewKeg';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Switch>
          <Route exact path='/'>
            <PatronDashboard/>
          </Route>
          <Route path='/emp'>
            <EmployeeDashboard/>
          </Route>
          <Route path='/new_keg'>
            <NewKeg/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
