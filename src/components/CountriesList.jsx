import React from 'react'
import countriesList from '../countries.json'
import { Route, Link, Switch, Redirect } from 'react-router-dom';


function CountriesList() {


    return (
        <div>

            {countriesList.map(country => {
                return <Link to={`/${country.cca3}`}
                    className="list-group-item"
                    list-group-item-action
                    key={country.cca3}>

                    {country.flag} {country.name.common}
                </Link>

            })}
        </div>
    )
}

export default CountriesList
