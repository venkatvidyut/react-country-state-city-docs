import React, { useState, useEffect } from "react";
import { GetPhonecodes } from "react-country-state-city";

function PhonecodeSample() {
  const [phonecode, setPhonecode] = useState(null);
  const [phoncodeList, setPhonecodeList] = useState([]);
  useEffect(() => {
    GetPhonecodes().then((result) => {
      setPhonecodeList(result);
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
        <h6 style={{ marginTop: 10, marginBottom: 5 }}>Mobile</h6>
        <div style={{ display: "flex" }}>
          <select
            onChange={(e) => setPhonecode(e.target.value)}
            value={phonecode}
            style={{ minHeight: 40 }}
          >
            <option value={""}>-- Select --</option>
            {phoncodeList.map((_code) => (
              <option key={_code.id} value={_code.phone_code}>
                +{_code.phone_code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            style={{ width: "100%", minHeight: 40 }}
            placeholder="Mobile no"
          />
        </div>
      </div>
    </div>
  );
}

export default PhonecodeSample;
