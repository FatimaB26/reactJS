import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/bootstrap.min.css';
import './assets/main.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Card from './components/movie/Card';
import Discover from './components/Discover';
import DiscoverBattle from './components/DiscoverBattle';
import Popular from './components/Popular';
import PopularBattle from './components/PopularBattle';
import MyList from './components/MyList';

class App extends React.Component {


  render() {

    return (

      <Router>

        <div>
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


          <Route path="/my-list/">
              <MyList />
            </Route>

            <Route path="/popular-battle/">
              <PopularBattle />
            </Route>

            <Route path="/popular/">
              <Popular />
            </Route>

            <Route path="/battle/">
              <DiscoverBattle />
            </Route>

            <Route path="/">
              <Discover />
            </Route>


          </Switch>

          <section>
          {this.state.movies.map((elem, index) => {
            return (
              <div>
                <img src={`https://image.tmdb.org/t/p/w300/${this.state.image}`}></img>
                <span>{elem.titre}</span>
              </div>
            )
          })}
          </section>

          <Card info={this.state}></Card>

        </div>
      </Router>

    );
  }
}


export default App;
