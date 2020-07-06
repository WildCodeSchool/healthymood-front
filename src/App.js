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
import ConseilsAstuces from './Pages/ConseilsAstuces';
import Search from './Components/Search';
import Recipe from './Components/Recipe';

function App () {
  return (
    <>
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/recettes' component={RecipesPage} />
            <Route path='/conseils-astuces' component={ConseilsAstuces} />
            <Route path='/rechercher' component={Search} />
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
