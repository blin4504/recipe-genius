import ingredients from "@/public/data.json"
import { createRecipe } from "@/app/lib/actions"

export default function RecipeForm() {

  let ingredientOptions = ingredients.map((ingredient, i) => {
    return <option key={i} value={ingredient.food}>{ingredient.food}</option>
  })

  return (
    <form action={createRecipe}>
      {/* container */}
      <div className="flex flex-col">
        <h2 className="font-extrabold">Generate a Recipe</h2>
        <div>
          <label>Dietary Pattern</label>
          <select name="diet">
            <option value="Vegan">Vegan</option>
            <option value="Non-Vegan">Non-Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>
        </div>
        <div>
          <label>Ingredients</label>
          <select multiple name="ingredients">
            {ingredientOptions}
          </select>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}