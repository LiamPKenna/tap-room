import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route, } from 'react-router-dom';
import EmployeeDashboard from './components/EmployeeDashboard';
import PatronDashboard from './components/PatronDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Router>
        <Switch>
          <Route path='/'>
            <PatronDashboard/>
          </Route>
          <Route path='/emp'>
            <EmployeeDashboard/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
