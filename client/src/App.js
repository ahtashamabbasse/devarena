import React from 'react';
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Landing from "./components/layouts/Landing";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from 'react-redux'
import setAuthToken from './utility/setAuthToken'
import jwt_token from 'jwt-decode'
import {logoutUser, setCurrentuser} from "./actions/authAction";

import store from "./store";

import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Dashboard from "./components/dashboard/dashboard";
import {clearProfile} from "./actions/profileAction";


if (localStorage.getItem('jwtToken')) {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);
    const decoded = jwt_token(token);
    store.dispatch(setCurrentuser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        store.dispatch(clearProfile());

        window.location.href="/login"
    }
}

function App() {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <div className={'app'}>
                        <Navbar/>
                        <Route exact path={'/'} component={Landing}/>
                        <div className="container">
                            <Route exact path={'/register'} component={Register}/>
                            <Route exact path={'/login'} component={Login}/>
                            <Route exact path={'/dashboard'} component={Dashboard}/>

                        </div>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
