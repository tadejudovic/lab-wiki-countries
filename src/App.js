import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar><h1>Lab - Wiki Countries</h1></Navbar>
      </div>

      <div class="mainPage">
        <div class="container">

          <div class="col-5">
            <div class="list-group">
              <CountriesList></CountriesList>
            </div>
          </div>

        </div>


        <Route exact path="/:coryId" component={CountryDetails} />




      </div>
    </div>
  );
}

export default App;
