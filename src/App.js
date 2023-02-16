import { useEffect, useState } from "react";
import { client } from "./client";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "recipeEntry",
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, [getData]);
  return;
}

export default App;
