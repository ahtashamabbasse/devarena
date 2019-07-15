import React from 'react';
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Landing from "./components/layouts/Landing";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./components/auth/register";
import Login from "./components/auth/login";

function App() {
    return (
        <div>
            <Router>
                <div className={'app'}>
                    <Navbar/>
                    <Route exact path={'/'} component={Landing}/>
                    <div className="container">
                        <Route exact path={'/register'} component={Register}/>
                        <Route exact path={'/login'} component={Login}/>

                    </div>
                    <Footer/>
                </div>
            </Router>
        </div>
);
}

export default App;
