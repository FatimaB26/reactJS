import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import './assets/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Discover from './components/Discover';
import DiscoverBattle from './components/DiscoverBattle';
import Popular from './components/Popular';
import PopularBattle from './components/PopularBattle';
import MyList from './components/MyList';

class App extends React.Component {

  render() {

    return (

      <Router>

        <div className = 'container'>
          <nav>

            <ul>
              <li><Link to="/">This Week</Link></li>
              <li><Link to="/battle/">This Week Battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popular Battle</Link></li>
              <li><Link to="/my-list/">My List</Link></li>
            </ul>

          </nav>


          <Switch>

          <Route exact path="/my-list/"><MyList /> </Route>
          <Route exact path="/popular-battle/"><PopularBattle /> </Route>
          <Route exact path="/popular/"><Popular /> </Route>
          <Route exact path="/battle/"><DiscoverBattle /> </Route>
          <Route exact path="/"><Discover /> </Route>

          </Switch>

        </div>
      </Router>

    );
  }
}


export default App;
