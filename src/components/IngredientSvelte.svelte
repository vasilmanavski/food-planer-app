<script lang="ts">

  import {Ingredient} from "../lib/data/dto/Ingredient";

  export let ingredients: Array<Ingredient>;
  let ingredient : Ingredient = null;
</script>
<div>
  {#each ingredients as ingredient}
    <p>{ingredient['name']}</p>
  {/each}
</div>