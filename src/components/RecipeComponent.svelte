<script lang="ts">
  import {RecipeController} from "../lib/data/controller/RecipeController";
  import IngredientComponent from "./IngredientComponent.svelte";

  const recipe = RecipeController.getRecipeForIngredientsAndMaxCalories(null, null);
</script>
<div>
  <p>{recipe.name}</p>
  <IngredientComponent ingredients={recipe.ingredients}/>
  <p>{recipe.description}</p>
  <p>{recipe.image64}</p>
</div>