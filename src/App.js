import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { authenticated } from "./actions/auth";
import { Toaster } from 'react-hot-toast';
import PrivateRoutes from './hoc/PrivateRoutes';
import jwt_decode from 'jwt-decode';
import NavBar from "./component/NavBar";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Settings from "./component/Settings";
import UserProfile from "./component/UserProfile";
import Home from "./component/Home";
import Page404 from "./component/Page404";
import "./App.css";
import './styles/auth.css';
import "./styles/media.css";



function App() {
  const dispatch = useDispatch();
 

  // fetch posts
  useEffect(() => {
    let user , getToken;
    getToken = localStorage.getItem('token');
    if(getToken) {
      user = jwt_decode(getToken);
    }
    if(user) {
      dispatch(authenticated({
        _id : user._id,
        email  : user.email,  
        username : user.username,
        avatar : user.avatar
      }));
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <div className="App">
          <Toaster />
           <Routes>
              <Route path="/" element={
                <PrivateRoutes>
                   <Home />
                </PrivateRoutes>
              } exact={true} 
              />
            <Route path="/profile/:userId" element={
              <PrivateRoutes>
                 <Settings />
              </PrivateRoutes>
            } />
            <Route path="/user_profile/:userId" element={
              <PrivateRoutes>
                 <UserProfile />
              </PrivateRoutes>
            } />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}


export default App;
