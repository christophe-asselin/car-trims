import React from 'react';
import './App.css';
import AppBar from './Components/AppBar';
import TopAppBarFixedAdjust from '@material/react-top-app-bar';

function App() {
    return (
        <div className="App">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <AppBar></AppBar>
            <TopAppBarFixedAdjust></TopAppBarFixedAdjust>
        </div>
    );
}

export default App;
