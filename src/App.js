import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import KegList from './components/KegList';
import Header from './components/Header';
import KegForm from './components/KegForm';
import kegs from './kegs';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kegs: kegs
    }
  }

  addKeg = (newKeg) => {
    newKeg.id = v4();
    this.setState(prevState => {
      prevState.kegs.push(newKeg);
      return { kegs: prevState.kegs }
    });
  }

  updateKeg = (updatedKeg) => {
    this.setState(prevState => {
      const newKegs = prevState.kegs.map(k => 
        ((k.id === updatedKeg.id) ? updatedKeg : k)
      );
      return { kegs: newKegs }
    });
  }

  sellPint = (id) => {
    this.setState(prevState => {
      const newKegs = prevState.kegs.map(k => {
        if (k.id === id) k.pints -= 1;
        return k;
      });
      const notEmptyKegs = newKegs.filter(k => k.pints > 0);
      return { kegs: notEmptyKegs }
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
              <KegList  
              employee={false}
              kegs={this.state.kegs} 
              sellPint={this.sellPint} />
            </Route>
            <Route path='/emp'>
              <KegList
              employee={true} 
              kegs={this.state.kegs} 
              sellPint={this.sellPint} />
            </Route>
            <Route path='/new_keg'>
              <KegForm submitKeg={this.addKeg} />
            </Route>
            <Route path='/edit_keg/:id'>
              <KegForm 
                submitKeg={this.updateKeg} 
                kegs={this.state.kegs} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
