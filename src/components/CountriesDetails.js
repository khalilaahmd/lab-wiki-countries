import React from "react";
import { useParams, Link } from "react-router-dom";
import countriesData from "./../countries.json";
import { useState, useEffect} from "react";


function CountriesDetails (props) {
    const [foundCountry, setFoundCountry] = useState(null);

    const {countryId} = useParams();
    console.log('countryId -->', countryId);

    useEffect (() => {
        const country = countriesData.find((countryObj) => {
            return countryObj.alpha2Code === countryId;
        })

        if (country) {
            setFoundCountry(country);
        }
    }, [countryId]);

    return (
        <div>
        <h1>Countries Details</h1>
        {!foundCountry && <h3>Country Not Found</h3>}

        {foundCountry && (
            <div>
                <h2>Name: {foundCountry.name.common}</h2>
                <p>Capital: {foundCountry.capital}</p>
                <p>Area: {foundCountry.area}</p>
                <p>Border: {foundCountry.border}</p>
            </div>
        )}
        </div>
    );
}

export default CountriesDetails;