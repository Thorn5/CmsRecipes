import React, { useEffect, useState } from 'react'
import GetData from "./Components/GetData";

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <GetData data={data} setData={setData}/>
    </div>
  )
}

  export default App;
