import React, { useState } from "react";
import { CountrySelect, StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

function StateComponent() {
  const [country, setCountry] = useState(null);
  const [currentState, setCurrentState] = useState(null);
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
        <h3>Country</h3>
        <CountrySelect
          containerClassName="form-group"
          inputClassName=""
          placeHolder="Select Country"
          onChange={(_state) => setCountry(_state)}
          onTextChange={(_txt) => console.log(_txt)}
          defaultValue={country}
        />
      </div>
      <div style={{ maxWidth: "600px", margin: "auto", marginTop: "16px" }}>
        <h3>State</h3>
        <StateSelect
          countryid={country?.id}
          containerClassName="form-group"
          inputClassName=""
          placeHolder="Select State"
          onChange={(_state) => setCurrentState(_state)}
          onTextChange={(_txt) => console.log(_txt)}
          defaultValue={currentState}
        />
      </div>
    </div>
  );
}

export default StateComponent;
