import React, { useState, useEffect } from "react";
import { GetRegions, GetCountriesByRegion } from "react-country-state-city";
function CountryByRegionSample() {
  const [country, setCountry] = useState(null);
  const [countriesList, setCountriesList] = useState([]);
  const [region, setRegion] = useState(null);
  const [regionList, setRegionList] = useState([]);
  useEffect(() => {
    GetRegions().then((result) => {
      setRegionList(result);
    });
  }, []);
  useEffect(() => {
    if (region)
      GetCountriesByRegion(region).then((result) => {
        setCountriesList(result);
      });
  }, [region]);
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
        <h3 style={{ marginTop: 10, marginBottom: 5 }}>Region</h3>
        <select
          onChange={(e) => setRegion(e.target.value)}
          value={region}
          style={{ width: "100%", minHeight: 40 }}
        >
          <option value={""}>-- Select Region --</option>
          {regionList.map((_region) => (
            <option key={_region.code} value={_region.name}>
              {_region.name}
            </option>
          ))}
        </select>
        <h3 style={{ marginTop: 10, marginBottom: 5 }}>Country</h3>
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

export default CountryByRegionSample;
