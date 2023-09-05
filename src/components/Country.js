const Country = ({country}) => {
    return(
        <>
        <p>{country.name.common}</p>
        <input
        type="checkbox"
        value="Visited"
        />
        </>
    )
}
export default Country;