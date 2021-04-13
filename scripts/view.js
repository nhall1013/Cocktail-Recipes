import Cocktail from './components/Cocktail.js';
import HUD from './components/HUD.js';
import Next from './components/Next.js';

const renderDOM = (html) => document.getElementById('view').innerHTML = html;

export const displayCocktail = (props) => {
    const {cocktail} = props;
    renderDOM(
        `${HUD()}
        ${Cocktail(cocktail)}
        ${Next()}`
    )
}