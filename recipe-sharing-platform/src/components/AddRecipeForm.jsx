import React, { useState } from "react";

function AddRecipeForm() {
  const [recipeForm, setRecipeForm] = useState({
    title: "",
    ingredients: [],
    steps: "",
  });

  const [errors, setErrors] = useState({});

  // 👇 Required function for validation
  const validate = () => {
    let newErrors = {};

    if (!recipeForm.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!recipeForm.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    }

    if (!recipeForm.steps.trim()) {
      newErrors.steps = "Steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", recipeForm);
    }

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
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
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
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      <div>
        <label className="block font-medium">Instructions</label>
        <textarea
          value={recipeForm.steps}
          onChange={(e) =>
            setRecipeForm({ ...recipeForm, stepss: e.target.value })
          }
          className="border p-2 w-full rounded"
        />
        {errors.steps && (
          <p className="text-red-500 text-sm">{errors.steps}</p>
        )}
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
