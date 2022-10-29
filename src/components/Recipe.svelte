<script lang="ts">
  import {recipes} from "../lib/data/data";

</script>

<div class="flex flex-wrap m-10">
  {#each recipes.hits as {recipe}}
    <div class="max-w-md rounded overflow-hidden shadow-lg grow sm-4">
      <img class="max-w-full" src="https://thumbs.dreamstime.com/b/serving-spicy-beef-lasagne-restaurant-traditional-italian-modern-white-square-plate-red-napkin-dark-counter-64979715.jpg" alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{recipe['label']}</div>
        <p class="no-underline hover:underline text-blue-600">
          <a href="{recipe['url']}">Click to see full recipe</a>
        </p>
        <p class="text-gray-700 text-base">
          Calories {recipe['calories']}
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
</div>