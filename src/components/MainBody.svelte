<script lang="ts">
  import IngredientForm from './IngredientForm.svelte';
  import {derivedIngredient} from '../store';
  import Header from './Header.svelte';
  import {RecipeController} from "../lib/data/controller/RecipeController";
  let Recipe;

  let result = "";
  async function fetchRecipes() {
    result = await RecipeController.fetchRecipes($derivedIngredient)
    Recipe = (await import('./Recipe.svelte')).default;
  }
</script>


<Header />
<IngredientForm />
<button style="margin-top: 1%; margin-left: 25%" on:click="{fetchRecipes}" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


<svelte:component this="{Recipe}" recipes={result}/>