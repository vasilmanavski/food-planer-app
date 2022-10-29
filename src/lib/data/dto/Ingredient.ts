export class Ingredient {
  private name: string;
  private _amount: number;
  private _unit: any;
  private _totalProteins: number;
  private _totalFat: number;
  private _image: string;
  private _totalCarbohydrates: number;
  constructor(name: string, amount: number, unit, totalProteins: number, totalFat: number, totalCarbohydrates: number,
              image64: string) {
    this.name = name;
    this._amount = amount;
    this._unit = unit;
    this._totalProteins = totalProteins;
    this._totalFat = totalFat;
    this._totalCarbohydrates = totalCarbohydrates;
    this._image = image64;
  }

  getName() {
    return this.name;
  }
}