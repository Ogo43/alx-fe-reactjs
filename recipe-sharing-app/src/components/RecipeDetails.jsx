import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm"
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = ({recipeId}) => {
    const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === recipeId));
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
        {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="mb-4 p-4 border rounded">
            <h3 className="text-lg font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
        <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  )
}

export default RecipeDetails