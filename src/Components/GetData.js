import React, { useEffect, useState } from 'react'
import { client } from "../client";

    const GetData = async ({data, setData}) => {
        const [loading, setLoading] = useState(true);
        try {
          const response = await client.getEntries({
            content_type: "recipeEntry",
          });
          // console.log(response);
          setData(response)
        } catch (error) {
          console.error(error);
          setLoading(false)
        }
        
        useEffect(() => {
            GetData();
      }, []);
      
    //   console.log(data);
      return(
        <div>
        {loading ? <p>Loading..</p> : data ? <p>{data.items[2].fields.recipeName}</p>: <p>Error</p>}
      </div>
      )

}

export default GetData
