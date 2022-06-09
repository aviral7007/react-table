import React, { useState, useEffect } from "react";

import Table from "./Table";
import "./App.css";

function App() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App"></div>
  );
}

export default App;