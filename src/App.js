import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import EmployeeDashboard from './components/EmployeeDashboard';
import PatronDashboard from './components/PatronDashboard';
import Header from './components/Header';
import NewKeg from './components/NewKeg';
import EditKeg from './components/EditKeg';
import kegs from './kegs';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kegs: kegs
    }
  }

  addKeg = (newKeg) => {
    this.setState(prevState => {
      prevState.kegs.push(newKeg);
      return { kegs: prevState.kegs }
    });
  }

  render() {

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <Switch>
            <Route exact path='/'>
              <PatronDashboard kegs={this.state.kegs} />
            </Route>
            <Route path='/emp'>
              <EmployeeDashboard kegs={this.state.kegs} />
            </Route>
            <Route path='/new_keg'>
              <NewKeg addKeg={this.addKeg} />
            </Route>
            <Route path='/edit_keg'>
              <EditKeg />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
