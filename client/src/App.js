import React from 'react';
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Landing from "./components/layouts/Landing";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from 'react-redux'
import setAuthToken from './utility/setAuthToken'
import jwt_token from 'jwt-decode'
import {setCurrentuser} from "./actions/authAction";

import store from "./store";

import Register from "./components/auth/register";
import Login from "./components/auth/login";


if (localStorage.getItem('jwtToken')){
    //localStorage.removeItem('jwtToken')
    // const token=localStorage.getItem('jwtToken');
    // console.log(token)

    // console.log(token);
    //setAuthToken(token);
    // const decoded=jwt_token(token);
    // store.dispatch(setCurrentuser(decoded))
} else {

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

                        </div>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
