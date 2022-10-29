import type {Ingredient} from "./Ingredient";

export class Recipe {
  private _name: string;
  private _ingredients: Array<Ingredient>;
  private _description: string;
  private _image64: string;
  constructor(name: string, ingredients: Array<Ingredient>, description: string, image64: string) {
    this._name = name;
    this._ingredients = structuredClone(ingredients);
    this._description = description;
    this._image64 = image64;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get ingredients(): Array<Ingredient> {
    return this._ingredients;
  }

  set ingredients(value: Array<Ingredient>) {
    this._ingredients = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get image64(): string {
    return this._image64;
  }

  set image64(value: string) {
    this._image64 = value;
  }
}