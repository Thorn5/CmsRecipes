import React, { useEffect, useState } from "react";
import { client } from "../client";

const GetData = ({ data, setData }) => {
    const [loading, setLoading] = useState(true);

    const ApiCall = async () => {
        try {
            const response = await client.getEntries({
                content_type: "recipeEntry",
            });
            // console.log(response);
            setData(response);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    // const DeconstructData = () => {
    //     const arrayValue = 2;
    //     const [recipeName, setRecipeName] = useState("");
    //     const [description, setDescription] = useState("");
    //     const [image, setImage] = useState("");
    //     const [ingredients, setIngredients] = useState([]);
    //     const [method, setMethod] = useState([]);
    //     const [sourceUrl, setSourceUrl] = useState([]);
    //     const ingredientHolder = [];
    //     const methodHolder = [];

    //         for (let index = 0; index < data.length; index++) {
    //             const ingredientHolder = data[index];
    //         }

    //         for (let index = 0; index < data.length; index++) {
    //             const methodHolder = data[index];
    //         }

    //     setRecipeName(data.items[arrayValue].fields.recipeName);
    //         setDescription()
    //         setImage()
    //         setIngredients()
    //         setMethod()
    //         setSourceUrl()
    //     console.log(recipeName);
    // };

    useEffect(() => {
        ApiCall();
    }, []);

    // console.log(data.items[0].fields.description);
    // console.log(data.items[1].fields.description);
    // console.log(data.items[3].fields.description);

    return (
    <div>
      {loading ? <p>Loading..</p> : <p>{data.items[0].fields.description}</p>}
    </div>
    );
};

export default GetData;
