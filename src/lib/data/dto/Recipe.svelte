<script>
  import Ingredient from './Ingredient.svelte';

  export class Recipe {
    constructor(name, ingredients: [Ingredient], description, image64) {
      this.name = name;
      this.ingredients = structuredClone(ingredients);
      this.description = description;
      this.image64 = image64;
    }
  }
</script>