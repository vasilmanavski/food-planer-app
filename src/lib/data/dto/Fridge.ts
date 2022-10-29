import type {Ingredient} from "./Ingredient";

export class Fridge {

  private _ingredients: Array<Ingredient>;

  constructor(ingredients: Array<Ingredient>) {
    this._ingredients = structuredClone(ingredients);
  }
}