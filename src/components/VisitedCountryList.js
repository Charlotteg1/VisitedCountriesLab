const VisitedCountryList = ({ visitedCountry }) => {
  return (
    <div>
      <ul>
        {visitedCountry.map((visitedCountry) => (
            <li>{visitedCountry}</li>
        ))}
        
      </ul>
    </div>
  );
};

export default VisitedCountryList;