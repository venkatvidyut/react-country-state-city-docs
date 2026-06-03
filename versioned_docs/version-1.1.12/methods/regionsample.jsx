import React, { useState, useEffect } from "react";
import { GetRegions } from "react-country-state-city";

function Regionsample() {
  const [region, setRegion] = useState(null);
  const [regionList, setRegionList] = useState([]);
  useEffect(() => {
    GetRegions().then((result) => {
      setRegionList(result);
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
        <h6 style={{ marginTop: 10, marginBottom: 5 }}>Region</h6>
        <select
          onChange={(e) => setRegion(e.target.value)}
          value={region}
          style={{ width: "100%", minHeight: 40 }}
        >
          <option value={""}>-- Select Region --</option>
          {regionList.map((_region) => (
            <option key={_region.id} value={_region.name}>
              {_region.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Regionsample;
