import { useEffect, useState } from "react";
import { client } from "./client";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "recipeEntry",
      });
      // console.log(response);
      setData(response)
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return(
    <div>
    {loading ? <p>Loading..</p> : data ? <p>{data.items[2].fields.recipeName}</p>: <p>Error</p>}
  </div>
  )
}

export default App;


