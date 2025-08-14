import { useParams } from "react-router-dom";
import recipeData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeData.find((r) => r.id === Number(id));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="container p-6 leading-[1.6]">
      <h1 className="text-xl sm:text-md lg:text-3xl font-bold text-center mb-8">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg text-sm md:text-md"/>
      <p className="text-md md:text-lg">{recipe.summary}</p>
      
      <h2 className="text-xl lg:text-2xl font-medium mb-3 mt-8">Ingredients</h2>
      <ol className="list-decimal list-inside md:text-lg">
        {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="">{ingredient}</li>
        ))}
      </ol>

      <h4 className="text-xl font-medium mb-3 mt-8">Cooking Steps</h4>
      <ul className="list-disc list-inside md:text-lg">
        {recipe.cookingSteps.map((step, index) => (
            <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetail;
