<script lang="ts">
  import IngredientForm from './IngredientForm.svelte';
  import {derivedIngredient} from '../store';
  import Header from './Header.svelte';
  const apiURL = "https://api.edamam.com/api/recipes/v2?type=public";
  const apiKey = "4cdaa1065747c8199fb12f63cba9224f";
  const apiId = "1b75121c";

  let Recipe;

  let result = "";

  export async function fetchRecipes() {
      const response = await fetch(`${apiURL}&app_id=${apiId}&app_key=${apiKey}&q=${$derivedIngredient}`, {
          method: 'GET',
          cache: 'no-cache',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      const json = await response.json()
      result = json;
      console.log(json)
      Recipe = (await import('./Recipe.svelte')).default;
  }
</script>


<Header />
<IngredientForm />
<button style="margin-top: 1%; margin-left: 25%" on:click="{fetchRecipes}" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


<svelte:component this="{Recipe}" recipes={result}/>