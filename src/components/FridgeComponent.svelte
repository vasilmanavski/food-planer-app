<script lang="ts">
  import {FridgeController} from "../lib/data/controller/FridgeController";
  import IngredientComponent from "./IngredientComponent.svelte";

  let ingredients = FridgeController.getIngredients();
</script>
<h1>You have this in the fridge:</h1>
<IngredientComponent ingredients={ingredients}/>