<script>
  import Ingredients from './Ingredients.svelte';

  export class Recipe {
    constructor(name, ingredients: Ingredients, description) {
      this.name = name;
      this.ingredients = structuredClone(ingredients);
      this.description = description;
    }
  }
</script>