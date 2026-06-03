import React, { useState, useEffect } from "react";
import { GetCountries } from "react-country-state-city";

function Countrysample() {
  const [countriesList, setCountriesList] = useState([]);
  const [country, setCountry] = useState(null);
  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "16px",
        marginTop: "16px",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <h6 style={{ marginTop: 10, marginBottom: 5 }}>Country</h6>
        <select
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          style={{ width: "100%", minHeight: 40 }}
        >
          <option value={""}>-- Select Country --</option>
          {countriesList.map((_country) => (
            <option key={_country.id} value={_country.id}>
              {_country.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Countrysample;
