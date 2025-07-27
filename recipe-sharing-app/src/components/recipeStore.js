import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // avoid duplicates
    })),
    removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
          // Mock implementation based on favorites
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
  
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
   filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) => {
        term: state.searchTerm.toLowerCase();
        inTitle: recipe.title.toLowerCase().includes(term);
        inIngredients: recipe.ingredients?.some((ing) =>
          ing.toLowerCase().includes(term)
        );
        return inTitle || inIngredients;
      }),
    })),

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (id) =>
    set((state) => ({
      recipes: [
        ...state.recipes.map((recipe) =>
          recipe.id === updateRecipe.id
            ? { ...recipe, ...updateRecipe }
            : recipe
        ),
      ],
    })),
}))

export default useRecipeStore;
