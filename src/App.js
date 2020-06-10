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
import Article from './Pages/Article';
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
            <Route exact path='/conseils-astuces' component={Article} />
            <Route exact path='/' /* component={...} */ />
            <Route exact path='/' /* component={...} */ />
            <Route path='/recettes/:slug' component={Recipe} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
