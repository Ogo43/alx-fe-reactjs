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
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) => {
        const term = state.searchTerm.toLowerCase();
        const inTitle = recipe.title.toLowerCase().includes(term);
        const inIngredients = recipe.ingredients?.some((ing) =>
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
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: [
        ...state.recipes.map((recipe) =>
          recipe.id === updatedRecipe.id
            ? { ...recipe, ...updatedRecipe }
            : recipe
        ),
      ],
    })),
}));

export default useRecipeStore;