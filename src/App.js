import React from 'react';
import './style/App.scss';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage'

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      
        <NavBar/>
        <Switch>
          <Route exact path="/" component={MainPage}/>
        </Switch>
        
      
    </BrowserRouter></div>
  );
}

export default App;
