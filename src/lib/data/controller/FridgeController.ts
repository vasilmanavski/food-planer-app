import {Ingredient} from '../dto/Ingredient'

export class FridgeController {

  private static inMemoryIngredients = [
    new Ingredient('userIng1', 111, 'grams', 1, 2, 3, null),
    new Ingredient('userIng2', 222, 'grams', 11, 22, 33, null),
    new Ingredient('userIng3', 333, 'grams', 1, 222, 33, null),
    new Ingredient('userIng4', 444, 'grams', 1332, 1232, 1231233, null),
    new Ingredient('userIng5', 555, 'grams', 13245, 12342, 324433, null),
  ]

  static addIngredients(ingredients: Array<Ingredient>): void {
    console.log(ingredients);
    for (let ingredientsKey in ingredients) {
      this.inMemoryIngredients.push(ingredients[ingredientsKey])
    }
    console.log(this.inMemoryIngredients);
  }

  static getIngredients(): Array<Ingredient> {
    return this.inMemoryIngredients;
  }
}