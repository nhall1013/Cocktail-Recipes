const Cocktail = (drinks) => (
    `<h2>${drinks.strDrink}</h2>
    <img  src='${drinks.strDrinkThumb}' class='center'>
    <div>
        <h3>Glass Type:</h3>
        <p>${drinks.strGlass}</p>
    </div>
    <div>
        <h3>Ingredients:</h3>
        <p>${drinks.strIngredient1} - ${drinks.strMeasure1}</p> 
        <p>${drinks.strIngredient2} - ${drinks.strMeasure2}</p>
        <p>${drinks.strIngredient3} - ${drinks.strMeasure3}</p>
        <p>${drinks.strIngredient4} - ${drinks.strMeasure4}</p> 
        <p>${drinks.strIngredient5} - ${drinks.strMeasure5}</p>
    </div>
    <div>
        <h3>Instructions:</h3>
        <p>${drinks.strInstructions}</p>
    </div>`
)

export default Cocktail;