import React from 'react';
import './Styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Menu from './Components/Menu';

function App() {
  return (
    <>
      <Router>
        <div className="App">


          <Switch>
            <Menu />
            <Route exact path='/' /* component={...} */ />
            <Route exact path='/' /* component={...} */ />
            <Route exact path='/' /* component={...} */ />
            <Route exact path='/' /* component={...} */ />
            <Route exact path='/' /* component={...} */ />
          </Switch>
        </div >
      </Router>
    </>
  );
}


export default App;
