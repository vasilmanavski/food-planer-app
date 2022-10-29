<script>

  import Ingredients from 'src/lib/data/dto/Ingredients.svelte'

  export class RecipeService {
    addIngredientsPath = 'api/get-recipe-max-calories'
    constructor() {
      this.getRecipeForIngredientsAndMaxCalories = function (ingredients: Ingredients, maxCalories) {
        // TODO ddzalev 2022-10-29: add call to backend
      }
    }
  }
</script>