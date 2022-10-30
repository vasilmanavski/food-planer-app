export class RecipeController {

  private static apiURL = "https://api.edamam.com/api/recipes/v2?type=public";
  private static apiKey = "4cdaa1065747c8199fb12f63cba9224f";
  private static apiId = "1b75121c";

  static async fetchRecipes(ingredients: string) {
    const response = await fetch(`${RecipeController.apiURL}&app_id=${RecipeController.apiId}&app_key=${RecipeController.apiKey}&q=${ingredients}`, {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const json = await response.json()
    console.log(json)
    return json
  }
}