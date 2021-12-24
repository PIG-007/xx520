import './App.css';
import About from './About';
import {HashRouter, Route, Link, Routes} from 'react-router-dom';
import React from "react";

class RouterDemo extends React.Component {
    render() {
        return(
                <HashRouter>
                    <ul id="startControl">
                        <li><Link to="/about">Start</Link></li>
                    </ul>
                    <Routes>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </HashRouter>
        );
    }
}


export default RouterDemo;
