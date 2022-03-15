import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router";

import Home from "./pages/Home"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
        </Routes>
    );
}


export default App;