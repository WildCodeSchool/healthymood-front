import React from 'react';
import './Styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Recipe from './Pages/Recipe';
import Article from './Pages/Article';
import Search from './Components/Search';

function App () {
  return (
    <>
      <Router>
        <div className='App'>
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/recettes' component={Recipe} />
            <Route exact path='/conseils-astuces' component={Article} />
            <Route exact path='/rechercher' component={Search} />
            <Route exact path='/' /* component={...} */ />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
