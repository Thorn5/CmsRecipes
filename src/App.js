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
  }, []);
  console.log(data.items[0].fields.image.fields.file.url);
  return;
}

export default App;


