import axios from "axios";
import { useState } from "react";
function Map() {
  const url = "https://eu1.locationiq.com/v1/search";
  const [res, setResponse] = useState([]);
  const [userInput, setUserInput] = useState("");
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const getLocation = () => {
    axios
      .get(
        `${url}?key=${process.env.REACT_APP_LOCATION_IQ}&city=${userInput}&&format=json`
      )
      .then((data) => setResponse(data.data[0]))
      .catch((err) => alert(err.message));
  };
  return (
    <div>
        <img
        src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ}&center=${res.lat},${res.lon}&zoom=11&&markers=icon:large-red-cutout|17.451377,78.379525&size=400x400&format=jpg`}
        alt="map"
      />
      <div style={{ marginTop: "30px" }}>
        <input type="text" name="city" id="city" onChange={handleUserInput} style={{padding:"5px",borderRadius:"10px"}} />

        <button
          onClick={getLocation}
          style={{ background: "blue", color: "white", padding: "7px" ,borderRadius:"10px",marginLeft:"10px"}}
        >
          Search
        </button>
      </div>
      
    </div>
  );
}

export default Map;
