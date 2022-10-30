<script lang="ts">
  import IngredientForm from "./IngredientForm.svelte";
  import {RecipeController} from "../lib/data/controller/RecipeController";
  import { derivedIngredient, derivedCarbs, derivedProteins, derivedFats, derivedKcals } from '../store';

  export let recipes = "";

  let result = "";
  async function fetchRecipes() {
    result = await RecipeController.fetchRecipes($derivedIngredient, $derivedCarbs, $derivedFats, $derivedProteins, $derivedKcals)
    console.log(result)
  }
</script>

<IngredientForm />
<button style="margin-top: 1%; margin-left: 25%" on:click="{fetchRecipes}" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


<div class="flex flex-wrap m-20">
  {#if recipes !== ''}
    {#each recipes.hits as {recipe}}
      <div class="max-w-md rounded overflow-hidden shadow-lg grow sm-4">
        <img class="max-w-full" src="{recipe['image']}" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{recipe['label']}</div>
          <p class="no-underline hover:underline text-blue-600">
            <a href="{recipe['url']}">Click to see full recipe</a>
          </p>
          <p class="text-gray-700 text-base">
            Calories {Math.round(recipe['calories'])}
          </p>
          <hr/>
          <p class="text-gray-700 text-base">
           Carbs {Math.round(recipe['totalNutrients']['CHOCDF']['quantity'])}
          </p>
          <p class="text-gray-700 text-base">
            Proteins {Math.round(recipe['totalNutrients']['PROCNT']['quantity'])}
          </p>
          <p class="text-gray-700 text-base">
            Fat {Math.round(recipe['totalNutrients']['FAT']['quantity'])}
          </p>

        </div>
        <div class="px-6 pt-4 pb-2">
          {#if recipe['cuisineType'] === ""}
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{recipe['cuisineType']}</span>
          {/if}

          {#if recipe['dishType'] === ""}
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{recipe['dishType']}</span>
          {/if}

          {#if recipe['dietLabels'] === ""}
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{recipe['dietLabels']}</span>
          {/if}
        </div>
      </div>
    {/each}
  {/if}
</div>