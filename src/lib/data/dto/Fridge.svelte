<script>

  import Ingredient from './Ingredient.svelte'

  export class Fridge {
    constructor(ingredients: [Ingredient]) {
      this.ingredients = structuredClone(ingredients);
    }
  }
</script>