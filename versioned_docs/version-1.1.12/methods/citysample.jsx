import React, { useState, useEffect } from "react";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
function Citysample() {
  const [country, setCountry] = useState(null);
  const [currentState, setcurrentState] = useState(null);
  const [city, setCity] = useState(null);
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);
  useEffect(() => {
    if (country)
      GetState(parseInt(country)).then((result) => {
        setStateList(result);
      });
  }, [country]);
  useEffect(() => {
    if (country && currentState)
      GetCity(parseInt(country), parseInt(currentState)).then((result) => {
        setCitiesList(result);
      });
  }, [country, currentState]);
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
        <h3 style={{ marginTop: 10, marginBottom: 5 }}>State</h3>
        <select
          onChange={(e) => setcurrentState(e.target.value)}
          value={currentState}
          style={{ width: "100%", minHeight: 40 }}
        >
          <option value={""}>-- Select State --</option>
          {stateList.map((_state) => (
            <option key={_state.id} value={_state.id}>
              {_state.name}
            </option>
          ))}
        </select>
        <h3 style={{ marginTop: 10, marginBottom: 5 }}>City</h3>
        <select
          onChange={(e) => setCity(e.target.value)}
          value={city}
          style={{ width: "100%", minHeight: 40 }}
        >
          <option value={""}>-- Select City --</option>
          {citiesList.map((_city) => (
            <option key={_city.id} value={_city.id}>
              {_city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Citysample;
