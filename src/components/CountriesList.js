import 'bootstrap/dist/css/bootstrap.css';
import countries from '../countries.json';
import { useState } from 'react';

function CountriesList() {
  const [AllCountriesList, setAllCountriesList] = useState(countries);

  return (
    <div className="lists">
      {AllCountriesList.map((countries) => {
        return (
          <div className="list">
            <link></link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
