import React, { useEffect, useState } from 'react'
import GetData from "./Components/GetData";

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <GetData data={data} setData={setData}/>
      {/* <p>{data.items[2].fields.recipeName}</p> */}
    </div>
  )
}

  export default App;
