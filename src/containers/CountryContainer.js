import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import './CountryContainer.css'
import VisitedCountryList from "../components/VisitedCountryList";

const CountryContainer = () =>{

    const[countries, setCountries] = useState(null);
    const[visitedCountries,setVisitedCountries]= useState([])

    const loadData = async () => {
        const response = await fetch ("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        setCountries(jsonData);
    }


  const addNewCountry = (country) => {
      setVisitedCountries([...visitedCountries, country]);
  };

    useEffect(() => {
        console.log("loading data");
        loadData();
    },[])

    return (
        <div id="container">
            <div className="allCountries">
                <h2>All Countries</h2>
                { countries ? <CountryList countries={countries} addNewCountry={addNewCountry}/> : <p>loading..</p>}
            </div>
            <div className="visitedCountries">
                <h2>Visited Countries</h2>
                {visitedCountries.length > 0 ? <VisitedCountryList visitedCountry={visitedCountries} />:<h3>Please tick countries you have visited</h3>}
                <p>Number of Countries Visited: {visitedCountries.length}/250</p>
                <p>Percentage of World Visited: {Math.round((visitedCountries.length/250) *100)}%</p>
            </div>
        </div>
        )
}

export default CountryContainer;