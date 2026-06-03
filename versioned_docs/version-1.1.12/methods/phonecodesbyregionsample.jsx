import React, { useState, useEffect } from "react";
import { GetRegions, GetPhonecodesByRegion } from "react-country-state-city";
function PhonecodesByRegionSample() {
  const [phonecode, setPhonecode] = useState(null);
  const [phoncodeList, setPhonecodeList] = useState([]);
  const [region, setRegion] = useState(null);
  const [regionList, setRegionList] = useState([]);
  useEffect(() => {
    GetRegions().then((result) => {
      setRegionList(result);
    });
  }, []);
  useEffect(() => {
    if (region)
      GetPhonecodesByRegion(region).then((result) => {
        setPhonecodeList(result);
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
        <h3 style={{ marginTop: 10, marginBottom: 5 }}>Phone Code</h3>
        <select
          onChange={(e) => setPhonecode(e.target.value)}
          value={phonecode}
          style={{ width: "100%", minHeight: 40 }}
        >
          <option value={""}>-- Select Phonecode --</option>
          {phoncodeList.map((_code) => (
            <option key={_code.id} value={_code.phone_code}>
              +{_code.phone_code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default PhonecodesByRegionSample;
