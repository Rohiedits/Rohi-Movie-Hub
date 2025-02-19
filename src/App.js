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
import Help from './components/Help';
import Newfeature from './components/Newfeature';
import Python from './components/python.js';
import PythonCourse from './components/python_course.js';
import Python_p2 from "./components/python_c2.js";
import Python_p3 from "./components/RoadMap.js";
import Part2 from './components/Part_2.js';
import Minigame from './components/Minigame.js';
import Python3_0 from './components/python3_0.js';
import Interviewguide from './components/Interview.js';
import Interview2 from './components/interview2.js';
import Interview3 from './components/interview3.js';
import Interview4 from './components/interview4.js';
import Academic from './components/Academic.js';
import Cs from './components/controlsystem.js';
import Em_2 from './components/em_2.js';
import Dd from './components/Dd.js';
import Td from './components/Td.js';
import python4 from "./components/python4.js";
import python5 from "./components/python5.js";
import python6 from "./components/python6.js";
import python7 from "./components/python7.js";
import Todo from './components/Todo.js'
import Gemini from "./components/geminiAi.js";
import LabAi from "./components/LabAi.js";
import Allpythonotes from "./components/Allpythonotes.js";
import Aitutor from "./components/Aitutor.js";
import NotesApp from "./components/NotesApp.js";
import Cpp from "./components/Cpp.js";
import Ruby from "./components/Ruby.js";
import Javascriptcourse from "./components/Javascriptcourse.js";
import Reactjscourse from "./components/Reactjscourse.js";
import Sqlcourse from "./components/Sqlcourse.js";
import Timetable from './components/Timetable.js'
import AIResumeBuilder from "./components/AiResumeBuilder.js";
// import Mood from './components/mood.js';
// import LoginPage from "./LoginPage2";
import Nextbtn from './components/nextbutton.js'
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
         <Route path="/login2" component ={Signup} /> 
        <Route path="/Yt" component ={Yt} />
        <Route path="/Help" component ={Help} />
        <Route path="/NewFeature" component ={Newfeature} />
        <Route path="/Python" component ={Python} />
        <Route path="/PythonCourse" component ={PythonCourse} />
        <Route path="/Next" component ={Nextbtn} />
        <Route path="/Python_p2" component ={Python_p2} />
        <Route path="/Python_p3.0" component ={Python3_0} />
        <Route path="/RoadMap" component ={Python_p3} />
        <Route path="/part2" component ={Part2} />
        <Route path="/minigame" component ={Minigame} />
        <Route path="/interviewguide" component ={Interviewguide} />
        <Route path="/Interview2" component ={Interview2} />
        <Route path="/Interview3" component ={Interview3} />
        <Route path="/Interview4" component ={Interview4} />
        <Route path="/Academic" component ={Academic} />
        <Route path="/Controlsystems" component ={Cs} />
        <Route path="/em_2" component ={Em_2} />
        <Route path="/Dd" component ={Dd} />
        <Route path="/Td" component ={Td} />
        <Route path="/Python4" component ={python4} />
        <Route path="/Python5" component ={python5} />
        <Route path="/Python6" component ={python6} />
        <Route path="/Python7" component ={python7} />
        <Route path="/Gemini" component ={Gemini} />
        <Route path="/labai" component ={LabAi} />
        <Route path="/Allpythonotes" component ={Allpythonotes} />
        <Route path="/Todo" component ={Todo} />
        <Route path="/aitutor" component ={Aitutor} />
        <Route path="/NotesApp" component ={NotesApp} />
        <Route path="/Cpp" component ={Cpp} />
        <Route path="/Ruby" component ={Ruby} />
        <Route path="/Javascriptcourse" component ={Javascriptcourse} />
        <Route path="/Reactjscourse" component ={Reactjscourse} />
        <Route path="/Sqlcourse" component ={Sqlcourse} />
        <Route path="/Timetable" component ={Timetable} />
        <Route path="/AIResumeBuilder" component ={AIResumeBuilder} />
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

