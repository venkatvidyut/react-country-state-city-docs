import React, { useState, useEffect } from "react";
import { GetLanguages } from "react-country-state-city";

function Languagesample() {
  const [language, setLanguage] = useState(null);
  const [languageList, setLanguageList] = useState([]);
  useEffect(() => {
    GetLanguages().then((result) => {
      setLanguageList(result);
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
        <h6 style={{ marginTop: 10, marginBottom: 5 }}>Language</h6>
        <select
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          style={{ width: "100%", minHeight: 40 }}
        >
          <option value={""}>-- Select Language --</option>
          {languageList.map((_lan) => (
            <option key={_lan.name} value={_lan.name}>
              {_lan.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Languagesample;
