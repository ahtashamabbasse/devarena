import React from 'react';
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Landing from "./components/layouts/Landing";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Route exact path={'/'} component={Landing}/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
