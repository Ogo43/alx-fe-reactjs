import React, { useState, useEffect } from "react";
import recipeData from "../data.json";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto text-center p-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-md sm:mb- lg:mb-6">Recipe List</h1>
      {recipes.length === 0 ? (
        <p className="text-base">No recipe found</p>
      ) : (
        <div className="flex justify-center flex-wrap">
          <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="max-w-xs shadow-2xl p-5 sm:py-2 md:p-5 text-start rounded-2xl cursor-pointer hover:bg-fuchsia-200 transition-all duration-300 hover:scale-105">
              <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg text-sm" />
              <h3 className="my-3 text-lg sm:text-md font-bold">{recipe.title}</h3>
              <p className="text-sm">{recipe.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
        </div>
      )}

      <h1 className="text-2xl font-bold my-6">Fill Recipe Form</h1>
      <Link
        to="/add-recipe"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add New Recipe
      </Link>
    </div>
  );
}

export default HomePage;
