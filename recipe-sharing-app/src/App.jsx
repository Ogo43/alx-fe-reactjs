import { BrowseRouter, Routes, Route} from "react-router-dom"
import RecipeList from "./components/RecipeList"
import AddRecipeForm from "./components/AddRecipeForm"
import RecipeDetails from "./components/RecipeDetails";


function App() {
  return (
    <>
    <RecipeList />
      <AddRecipeForm />
      <RecipeDetails />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<><RecipeList /><AddRecipeForm /></>} />
        <Route path= "/recipe/:recipeId" element={<RecipeDetails/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
