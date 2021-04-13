import * as http from './http.js'
import * as view from './view.js'
const GET_COCKTAIL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
const state = {};

window.getCocktail = async () => {
    const json = await http.sendGETRequest(GET_COCKTAIL);
    [state.cocktail] = json.drinks;
    view.displayCocktail(state);
}

window.start = async () => {
    getCocktail();
}

window.addEventListener('load', start);