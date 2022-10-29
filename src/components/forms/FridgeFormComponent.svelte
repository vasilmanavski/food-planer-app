<script lang="ts">
  import {FridgeController} from "../../lib/data/controller/FridgeController";
  import IngredientComponent from "../IngredientComponent.svelte";
  import {Ingredient} from "../../lib/data/dto/Ingredient";
  import {FormUtils} from "./util/FormUtils";

  let ingredients = FridgeController.getIngredients();
  ['image','totalCarbohydrates']
  function handleOnSubmit(e) {
    let formData = new FormData(e.target);
    let ingredient = new Ingredient(FormUtils.getString(formData, 'name'),
      FormUtils.getNumber(formData, 'amount'),
      FormUtils.getString(formData, 'unit'),
      FormUtils.getNumber(formData, 'totalProteins'),
      FormUtils.getNumber(formData, 'totalFat'),
      FormUtils.getNumber(formData, 'totalCarbohydrates'),
      FormUtils.getString(formData, 'image')
    );

    FridgeController.addIngredients(Array.of(ingredient));
    FormUtils.resetForm(formData)
    ingredients = FridgeController.getIngredients();
  }
</script>
<IngredientComponent ingredients={ingredients}/>
<form id="fridgeForm" action="{Ingredient.getInputFormAction()}" on:submit|preventDefault={handleOnSubmit}>
  <input id="name" name="name" placeholder="Name"/><br><br>
  <input id="amount" name="amount" type="number" placeholder="Amount"/><br><br>
  <input id="unit" name="unit" placeholder="Unit"/><br><br>
  <input id="totalProteins" name="totalProteins" type="number" placeholder="Proteins"/><br><br>
  <input id="totalFat" name="totalFat" type="number" placeholder="Fat"/><br><br>
  <input id="totalCarbohydrates" name="totalCarbohydrates" type="number" placeholder="Carbohydrates"/><br><br>
  <input id="image" name="image" placeholder="Image"/><br><br>
  <button style="color: white;background:darkblue;padding: 30px" type="submit"> Submit </button>
</form>