import "./App.css";
import React from 'react';
import {useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Navbar2 from './components/Navbar2';
import Comingsoon from './components/comingsoon';
import MovieView from './components/MovieView';
import Signup from     './components/Signup';
import SearchView from './components/SearchView';
import Yt from './components/Yt';
import {Switch,Route} from 'react-router-dom';
//import comingsoon from './components/comingsoon';

const App = () => {
  const [searchResults,setSearchResults] = useState([]);
  const [searchText,setSearchText] = useState('');
  useEffect (()=>{
    console.log(searchText,"is the search text")
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response =>response.json())
    .then(data =>{
      setSearchResults(data.results)
    })
  },[searchText])
  return (
    <div>
      <Navbar />
      <Navbar2 searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
         <Home/>
        </Route>
        <Route path="/AboutUs" component ={About} />
        <Route path="/comingsoon" component ={Comingsoon} />
        <Route path="/signup" component ={Signup} />
        <Route path="/Yt" component ={Yt} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults}/>
        </Route>
        <Route path="/movies/:id" component={MovieView}>
         <MovieView/>
        </Route>
       
      </Switch>
    </div>
  );
}

export default App

