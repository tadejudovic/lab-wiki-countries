import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import countriesJson from '../countries.json';


function getCountry(code) {
    return countriesJson.find((country) => country.cca3 === code);
}

function CountryDetails(props) {
    console.log(props)

    // This returns theCountry where countrId from params match the first country in JSON 
    const theCountry = getCountry(props.match.params.coryId);
    console.log(theCountry)

    return (


        <div class="countryDescription">
            <br></br>
            <h1>{theCountry.name.common} </h1>
            <p> Capital: {theCountry.capital} </p>
            <p> Area: {theCountry.area} km^2 </p>


            <p>
                {theCountry.borders.map((country) => {
                    return (
                        <li>
                            <Link to={`/${country}`}>
                                {getCountry(country)?.name.common}
                            </Link>

                        </li>

                    )
                })}


            </p>

        </div>




    )
}







export default CountryDetails
