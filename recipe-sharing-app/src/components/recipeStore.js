import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
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
}));

export default useRecipeStore;
