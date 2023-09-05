import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () =>{

    const[countries, setCountries] = useState(null);

    const loadData = async () => {
        const response = await fetch ("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        console.log("loading data");
        loadData();
    },[])

    return(
    <div>
        { countries ? <CountryList countries={countries} /> : <p>loading..</p>}
    </div>)
}

export default CountryContainer;