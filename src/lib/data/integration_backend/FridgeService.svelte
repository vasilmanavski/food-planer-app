<script>

  import Ingredients from 'src/lib/data/dto/Ingredients.svelte'

  export class FridgeService {
    addIngredientsPath = 'api/add-to-fridge'
    constructor() {
      this.addIngredients = function (ingredients: Ingredients) {
        // TODO ddzalev 2022-10-29: add call to backend
      }
    }
  }
</script>