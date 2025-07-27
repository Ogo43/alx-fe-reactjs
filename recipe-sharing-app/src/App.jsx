import { BrowseRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <>
      <BrowseRouter>
        <div className="app-container">
          <h1 className="app-title">Recipe Sharing App</h1>
          <SearchBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <RecipeList />
                  <AddRecipeForm />
                </>
              }
            />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          </Routes>
        </div>
        <FavoritesList />
        <RecommendationsList />
      </BrowseRouter>
    </>
  );
}

export default App;
