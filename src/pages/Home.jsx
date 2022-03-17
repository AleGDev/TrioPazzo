import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="home">
            <h1 className="heading-1 heading-1--white">Sinceramente non so cosa scrivere</h1>
            <p className="home__paragraph" >Pianifica le discordate</p>
            <Link to="/discordate" className="btn btn--purple" >start</Link>

            <div className="home__circle" />
        </div>
    )
}


export default Home;