<script lang="ts">
  import {RecipeController} from "../lib/data/services/RecipeController";
  import IngredientSvelte from "./IngredientSvelte.svelte";
  import {Ingredient} from "../lib/data/dto/Ingredient.ts";

  const recipe = RecipeController.getRecipeForIngredientsAndMaxCalories(null, null);
  const ingredients = recipe.ingredients;
</script>
<div>
  <p>{recipe.name}</p>
  <IngredientSvelte ingredients={recipe.ingredients}/>
  <p>{recipe.description}</p>
  <p>{recipe.image64}</p>
</div>