let sides = [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"
]

let mains = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"
]

let dessert = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
]

let entireMealOptions = [];

// button variables
let letsCookBtn = document.querySelector('.lets-cook-btn'); // generate a meal
let showAddRecipeFromBtn = document.querySelector('.add-recipe-btn'); // toggles add recipe form
let clearMealBtn = document.querySelector('.clear-meal-div'); // clear btn
let addNewRecipeBtn = document.querySelector('.add-new-recipe'); // adds a recipe (user input)

let showMealOption = document.querySelector('.display-meal'); 
let addNewRecipeForm = document.querySelector('.add-new-recipe-form');

let cookPotImg = document.querySelector('.cook-pot-img');

let inputMealType = document.querySelector('#meal-option-input');
let inputRecipeName = document.querySelector('#recipe-name-input');


showAddRecipeFromBtn.addEventListener('click', function() {
    addNewRecipeForm.classList.toggle('hidden');
})

clearMealBtn.addEventListener('click', function() {
    cookPotImg.classList.remove('hidden');
    showMealOption.classList.add('hidden');
    clearMealBtn.classList.add('hidden');
})

addNewRecipeBtn.addEventListener('click', addNewRecipe);
letsCookBtn.addEventListener('click', displayMealOption);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function showMealBox() {
    cookPotImg.classList.add('hidden');
    clearMealBtn.classList.remove('hidden');
    showMealOption.classList.remove('hidden');
}

function showCookPot() {
    cookPotImg.classList.remove('hidden');
    showMealOption.classList.add('hidden');
    clearMealBtn.classList.add('hidden');
}


function generateDish() {
    let mealChoice = findMealValue();
    switch (mealChoice) {
        case 'sides':
            return sides[getRandomIndex(sides)];
        case 'main-dish':
            return mains[getRandomIndex(mains)];
        case 'dessert':
            return dessert[getRandomIndex(dessert)];
        case 'entire meal':
            entireMealOptions.push(mains[getRandomIndex(mains)]);
            entireMealOptions.push(sides[getRandomIndex(sides)]);
            entireMealOptions.push(dessert[getRandomIndex(dessert)]);
            return entireMealOptions;
        case undefined:
            alert('Pick something')
    }
}

function findMealValue () {
    let checkRadio = document.getElementsByName('meal_option');
    for (let i = 0; i < checkRadio.length; i++) {
        if (checkRadio[i].checked) {
            return checkRadio[i].value;
        }
    }
}

function displayMealOption() {
    showMealBox();
    let mealOption = generateDish();
    if (Array.isArray(mealOption)) {
        showMealOption.innerHTML = `<article class="make-this"><h3 class="you-should-make">You should make: </h3>
        <h3>${mealOption[0]} with a side of ${mealOption[1]} and ${mealOption[2]} for dessert!</h3></article>`;
        entireMealOptions = [];
    } else if (!mealOption) {
        cookPotImg.classList.remove('hidden');
        clearMealBtn.classList.add('hidden');
    } else {
        showMealOption.innerHTML = `<article class="make-this"><h3 class="you-should-make">You should make: </h3>
        <h1>${mealOption}!</h1></article>`;
    }
}

function addNewRecipe() {
    let mealTypeVal = inputMealType.value;
    let recipeNameVal = inputRecipeName.value;
    let recipeName = recipeNameVal.charAt(0).toUpperCase() + recipeNameVal.slice(1);
    if (mealTypeVal === 'sides') {
        sides.push(recipeName);
    } else if (mealTypeVal === 'mains') {
        mains.push(recipeName);
    } else if (mealTypeVal === 'dessert') {
        dessert.push(recipeName);
    }
    showMealBox();
    showMealOption.innerHTML = `<article class="add-this"><h3 class="you-added">You added: </h3>
    <h1>${recipeName} to ${mealTypeVal}!</h1></article>`;
    console.log(sides);
}