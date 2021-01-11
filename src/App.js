import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/CenterPage/Profile/Profile';
import Topbar from './components/Topbar/Topbar';
import Home from './components/CenterPage/Home/Home';
import Shop from './components/CenterPage/Shop/Shop';
import Weather from './components/CenterPage/Weather/Weather';
import Equipment from './components/CenterPage/Equipment/Equipment';
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
       return (
        <BrowserRouter>
        <div className='appFish'>
            <Header/>
            <Topbar/>
            <Navbar/>
            <div class='appFishCenter'>
                <Route path='/bigfish' component={Profile}/>
                <Route path='/shop' component={Shop}/>
                <Route path='/home' component={Home}/>
                <Route path='/equipment' render={ () => <Equipment /> }/>
                <Route path='/weather' component={Weather}/>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default App;

