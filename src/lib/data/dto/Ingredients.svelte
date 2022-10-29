<script>
  import Ingredient from './Ingredient.svelte';

  export class Ingredients {
    constructor() {
      this.ingredients = [];

      this.addIngredient = function (ingredient: Ingredient)  {
        this.ingredients.push(ingredient);
      }
      this.removeIngredient = function (ingredient: Ingredient)  {
        this.ingredients
      }
    }
  }
</script>