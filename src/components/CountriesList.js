import { Switch, Link, Route } from 'react-router-dom'
import CountryList from '../countries.json'
import React from 'react'

function CountriesList() {
    
    const ShowCountries = () => {
       return CountryList.map(eachCountry => {
           return (
               <li>
                   <Link to={`/country/${eachCountry.cca3}`}>
                   {eachCountry.flag} {eachCountry.name.common}
                    </Link>
               </li>
           )
       })
        
    }

    return (
        <ul>
           <ShowCountries /> 
            
        </ul>
    )
}

export default CountriesList
