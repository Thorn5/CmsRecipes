import React,{useState, useEffect} from "react";

const Recipes = () => {
  const[recipesLoading, setRecipesLoading] =useState(false)
  const[recipesSlides, setRecipesSlides]= useState([])

const getRecipesSlides = async ()=>{
  try{
    const response = await client.getEntries({content_type:''})
  }
}



  return <div>List of recipes will display </div>;

};

export default Recipes;
