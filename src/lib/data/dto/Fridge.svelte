<script>

  import Ingredients from './Ingredients.svelte'

  export class Fridge {
    constructor(ingredients: Ingredients) {
      this.ingredients = structuredClone(ingredients);
    }
  }
</script>