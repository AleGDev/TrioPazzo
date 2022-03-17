import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router";

import Wrapper from "./components/Wrapper"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound";
import Discordate from "./pages/Discordate";

import "./css/style.css"

const App = () => {
    return ( 
        <Wrapper>
            <Routes>
                <Route path="*" element={ <NotFound /> } />
                <Route path="/" element={ <Home /> } />
                <Route path="/discordate" element={ <Discordate /> } />
            </Routes>
        </Wrapper>
    );
}


export default App;