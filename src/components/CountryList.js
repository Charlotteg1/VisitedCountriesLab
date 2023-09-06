import Country from "./Country";

const CountryList = ({countries, addNewCountry}) =>{
    const allContinents = ["Africa","North America","Asia","South America","Europe","Oceania","Antarctica"];

    const countriesByContinents = allContinents.map((continent) =>
        countries.filter((country) => country.continents[0] === continent) 
        // note eg Russia which is in Asia and Europe, so want to compare to the first element in continents
        // done instead of .includes(continent) as would mean can be added twice to visited countries, messing up stats  
    );

    const mappedCountries = (index)=>{ return countriesByContinents[index].map((country) =>
        <Country country={country} key={country.altSpellings[0]} addNewCountry={addNewCountry} />
    )}

    return(
        <>
        {allContinents.map((continent, index) => ( // allows for each continent to be displayed (so can repeat code)
          <div key={index}>
            <h3>{continent}</h3>
              {mappedCountries(index)}
            
          </div>
        ))}
      </>
    )
    

}

export default CountryList;