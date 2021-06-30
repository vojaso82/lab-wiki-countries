import React, { useState, useEffect } from 'react';
import CountryList from '../countries.json';

function CountryDetails(props) {
    
   const [oneCountry, setOneCountry] = useState({})

   useEffect(() => {
     let country = CountryList.find(eachCountry => eachCountry.cca3 === props.match.params.cca3)
     setOneCountry(country)
   

   }, [])

  console.log(oneCountry)

    return (
        <div>
           CountryDetails {props.match.params.cca3}
           <h1>
               {oneCountry.name?.common}
           </h1>
            <p>Capital: {oneCountry.capital} </p>
            <p>Area: {oneCountry.area} km </p>
            <p>Borders: {oneCountry.borders?.map(eachBorder => {
                return (
                   <li>{eachBorder}</li>
                )
            })}</p>
        </div>
    )
}

export default CountryDetails
