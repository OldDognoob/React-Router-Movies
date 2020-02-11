import React, { useState} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';


import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );
  

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  // return (
  //   <Router>
  //     <div>
  //       <SavedList list={savedList} />
  //       <Route exact path='/' component={MovieList}/>
  //       <Route path='/movies/:id' Component={Movie}}/>
  //     </div>
  //   </Router>
  // );


  //New way of syntax


return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path="/">
        <MovieList/>
        </Route>
        <Route exact path="/movies/:movieId">
        <Movie addToSavedList={addToSavedList}/>
        </Route>
      </Switch>
    </div>
  );




};



export default App;
