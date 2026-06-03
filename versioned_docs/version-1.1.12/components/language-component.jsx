import React, { useState } from "react";
import { LanguageSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

function LanguageComponent() {
  const [language, setLanguage] = useState(null);
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
        <h6>Language</h6>
        <LanguageSelect
          containerClassName="form-group"
          inputClassName=""
          onChange={(_lan) => setLanguage(_lan)}
          onTextChange={(_txt) => console.log(_txt)}
          defaultValue={language}
          placeHolder="Select Language"
        />
      </div>
    </div>
  );
}

export default LanguageComponent;
