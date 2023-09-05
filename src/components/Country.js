
const Country = ({country, addNewCountry}) => {


    return(
        <>
        <p>{country.name.common}</p>
        <input
        type="checkbox"
        value={country.name.common}
        onChange = {(event)=> addNewCountry(event.target.value)}
        />
        </>
    )
}
export default Country;