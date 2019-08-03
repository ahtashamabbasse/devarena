import React from 'react';
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Landing from "./components/layouts/Landing";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux'
import setAuthToken from './utility/setAuthToken'
import jwt_token from 'jwt-decode'
import {logoutUser, setCurrentuser} from "./actions/authAction";

import store from "./store";

import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Dashboard from "./components/dashboard/Dashboard";
import {clearProfile} from "./actions/profileAction";
import PrivateRoute from "./components/common/PrivateRoute";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/profile/EditProfile";
import AddExperience from "./components/experience/AddExperience";
import AddEducation from "./components/education/AddEducation";
import Profile from "./components/profile/Profiles";


if (localStorage.getItem('jwtToken')) {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);
    const decoded = jwt_token(token);
    store.dispatch(setCurrentuser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        store.dispatch(clearProfile());

        window.location.href = "/login"
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
                            <Switch>
                                <PrivateRoute exact path={'/dashboard'} component={Dashboard}/>
                                <PrivateRoute exact path={'/create-profile'} component={CreateProfile}/>
                                <PrivateRoute exact path={'/edit-profile'} component={EditProfile}/>
                                <PrivateRoute exact path={'/add-experience'} component={AddExperience}/>
                                <PrivateRoute exact path={'/add-education'} component={AddEducation}/>
                                <PrivateRoute exact path={'/profiles'} component={Profile}/>

                            </Switch>
                        </div>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
