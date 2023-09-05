import Country from "./Country";

const CountryList = ({countries, addNewCountry}) =>{
    const mappedCountries = countries.map(country =>{
        return <Country country={country} key={country.altSpellings[0]} addNewCountry={addNewCountry} />
    })

    return(
        <>
        {mappedCountries}
        </>
    )
    

}

export default CountryList;