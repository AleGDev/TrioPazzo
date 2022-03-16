import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Wrapper = (props) => {
    return (
        <div className="layout">
            <Header />
            <main className="main">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}


export default Wrapper;