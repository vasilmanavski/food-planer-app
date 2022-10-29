export class Ingredient {
  private name: string;
  private amount: number;
  private unit: any;
  private totalProteins: number;
  private totalFat: number;
  private image: string;
  private totalCarbohydrates: number;
  constructor(name: string, amount: number, unit: string, totalProteins: number, totalFat: number, totalCarbohydrates: number,
              image64: string) {
    this.name = name;
    this.amount = amount;
    this.unit = unit;
    this.totalProteins = totalProteins;
    this.totalFat = totalFat;
    this.totalCarbohydrates = totalCarbohydrates;
    this.image = image64;
  }

  static getFormParams() {
    return ['name','amount','unit','totalProteins','totalFat','image','totalCarbohydrates'];
  }

  static getInputFormAction() {
    return 'api/insert/ingredient';
  }

  static getNewInstance() {
    return new Ingredient(null, null, null, null, null, null, null);
  }
}