import React from 'react';
import './Styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import RecipesPage from './Pages/RecipesPage';
import AdvicesAndTricks from './Pages/AdvicesAndTricks';
import Search from './Components/Search';
import Recipe from './Components/Recipe';
import Article from './Pages/Article';

function App () {
  return (
    <>
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/recettes' component={RecipesPage} />
            <Route exact path='/conseils-astuces' component={AdvicesAndTricks} />
            <Route exact path='/rechercher' component={Search} />
            <Route exact path='/articles/:id' component={Article} />
            <Route exact path='/' /* component={...} */ />
            <Route exact path='/recettes/:slug' component={Recipe} />
            <Route exact path='/recettes/categorie/:id' component={RecipesPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
