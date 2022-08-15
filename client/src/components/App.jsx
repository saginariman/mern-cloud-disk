import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Registration from "./authorization/Registration";
import React from 'react';
import Login from "./authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../actions/user";
import Disk from "./disk/Disk";
import Profile from "./profile/Profile";

const App = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth())
  }, [])
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <div className="wrap">
          {!isAuth ?
            <Routes>
              <Route path="/registration" element={<Registration/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="*" element={<Login/>}/>
            </Routes>
            :
            <Routes>
              <Route path="/" element={<Disk/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="*" element={<Disk/>}/>
            </Routes>
          }
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
