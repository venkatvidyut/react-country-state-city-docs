import React, { useState } from "react";
import {
  CountrySelect,
  StateSelect,
  CitySelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export default function CityComponent() {
  const [country, setCountry] = useState(null);
  const [currentState, setCurrentState] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);

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
        {/* Country Selection */}
        <h6 style={{marginTop:10,marginBottom:5}}>Country</h6>
        <CountrySelect
          onChange={(_country) => setCountry(_country)}
          defaultValue={country}
          placeHolder="Select Country"
        />

        {/* State Selection */}
        <h6 style={{marginTop:10,marginBottom:5}}>State</h6>
        <StateSelect
          countryid={country?.id}
          onChange={(_state) => setCurrentState(_state)}
          defaultValue={currentState}
          placeHolder="Select State"
        />

        {/* City Selection */}
        <h6 style={{marginTop:10,marginBottom:5}}>City</h6>
        <CitySelect
          countryid={country?.id}
          stateid={currentState?.id}
          onChange={(_city) => setCurrentCity(_city)}
          defaultValue={currentCity}
          placeHolder="Select City"
        />
      </div>
    </div>
  );
}
