import React, { useState } from "react";

function AddRecipeForm() {
  const [recipeForm, setRecipeForm] = useState({
    title: "",
    ingredients: [],
    instructions: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for at least two ingredients
    if (recipeForm.ingredients.length < 2) {
      alert("Please add at least two ingredients.");
      return;
    }

    console.log("Form submitted:", recipeForm);

    setRecipeForm({ title: "", ingredients: [], instructions: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto my-30 bg-white p-6 rounded shadow space-y-4"
    >
      <div>
        <label className="block font-medium">Title</label>
        <input
          type="text"
          value={recipeForm.title}
          onChange={(e) =>
            setRecipeForm({ ...recipeForm, title: e.target.value })
          }
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Ingredients</label>
        <input
          type="text"
          placeholder="Separate by commas"
          onChange={(e) =>
            setRecipeForm({
              ...recipeForm,
              ingredients: e.target.value.split(",").map((i) => i.trim()),
            })
          }
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Instructions</label>
        <textarea
          value={recipeForm.instructions}
          onChange={(e) =>
            setRecipeForm({ ...recipeForm, instructions: e.target.value })
          }
          className="border p-2 w-full rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
