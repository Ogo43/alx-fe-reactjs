import { BrowseRouter, Routes, Route} from "react-router-dom"
import RecipeList from "./components/RecipeList"
import AddRecipeForm from "./components/AddRecipeForm"
import RecipeDetails from "./components/RecipeDetails";
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <>
      <BrowserRouter>
      <div className="app-container">
        <h1 className="app-title">Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
        <Route path="/" element={<><RecipeList /><AddRecipeForm /></>} />
        <Route path= "/recipe/:recipeId" element={<RecipeDetails/>} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
