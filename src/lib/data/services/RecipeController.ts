import {Ingredient} from '../dto/Ingredient'
import {Recipe} from '../dto/Recipe'
import {getMockImage} from '../util/mock/MockImage'

export class RecipeController {

  private addIngredientsPath = 'api/recipe/get-recipe-max-calories';

  static getRecipeForIngredientsAndMaxCalories(ingredients: Array<Ingredient>, maxCalories: number): Recipe {
  // TODO ddzalev 2022-10-29: add call
  return new Recipe(
      'recipe1',
      [
        new Ingredient('ing1', 123, 'gram', 87, 333, 6, null),
        new Ingredient('ing2', 234, 'gram', 321, 2, 543, null),
        new Ingredient('ing3', 345, 'gram', 2, 234, 34, null),
        new Ingredient('ing4', 456, 'gram', 3, 876, 65, null),
        new Ingredient('ing5', 567, 'gram', 45, 334, 23, null),
      ],
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris ligula. Quisque blandit sapien malesuada eleifend mollis. Mauris enim erat, tristique a venenatis eu, eleifend tempor augue. In ut arcu maximus, dignissim eros eu, rhoncus est. Etiam maximus luctus lectus, ut vestibulum libero suscipit sollicitudin. Fusce lobortis ullamcorper sem, non fermentum risus dapibus non. Cras tempus dapibus ultrices. Fusce ipsum leo, fringilla sed dolor viverra, vehicula congue quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vehicula odio risus, in condimentum leo porta vitae. Aliquam rutrum gravida sem aliquet rhoncus.\n' +
      '\n' +
      'Mauris at lectus lectus. Sed ullamcorper in libero at tempor. In convallis vehicula enim, eget feugiat lorem vulputate eget. Cras commodo imperdiet ornare. Nunc a rutrum sem. Integer non purus mollis, cursus ex non, dapibus diam. Curabitur urna sem, faucibus nec egestas vitae, mollis a velit. ',
      getMockImage()
    );
  }
}