import React from "react";
import { useState, useEffect} from "react";
import {Link} from "react-router-dom";


function HomePage(props) {
    const [countries, setCountries] = useState([]);

    useEffect (() => {
        setCountries(props.countries);
    }, [props.countries]);

    return(
        <div className="container mt-4">
            <h1>Countries List</h1>
            <div className="row">
            {countries.map((country) => {
                return (
                    <div key={country.alpha2Code} className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                                                 <h3>
                                                   <Link to={`/${country.alpha2Code}`} className={({ isActive }) => isActive ? "selected" : ""}>
                                                   {country.name.common}
                                                   </Link>
                                                  </h3>
                        </div>
                    </div>
                    </div>
                )
            })}
            </div>
            
        </div>
    );
}

export default HomePage;