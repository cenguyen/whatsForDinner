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

//let whichMealOption = document.getElem
let letsCookBtn = document.querySelector('.lets-cook-btn');
let mealResults = document.querySelector('.display-meal');
let cookPotImg = document.querySelector('.cook-pot-img');
let clearMealBtn = document.querySelector('.clear-meal-div');

letsCookBtn.addEventListener('click', displayMealOption);
clearMealBtn.addEventListener('click', function() {
    cookPotImg.classList.remove('hidden');
    mealResults.classList.add('hidden');
    clearMealBtn.classList.add('hidden');
})

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function generateDish() {
    let mealoption = findMealValue();
    console.log(mealoption);
    if (mealoption === 'sides') {
        return sides[getRandomIndex(sides)];
    } else if (mealoption === 'main-dish') {
        return mains[getRandomIndex(mains)];
    } else if (mealoption === 'dessert') {
        return dessert[getRandomIndex(dessert)];
    } else if (mealoption === 'entire meal') {
        entireMealOptions.push(mains[getRandomIndex(mains)]);
        entireMealOptions.push(sides[getRandomIndex(sides)]);
        entireMealOptions.push(dessert[getRandomIndex(dessert)]);
        return entireMealOptions;
    } else if (!mealoption) {
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
    cookPotImg.classList.add('hidden');
    clearMealBtn.classList.remove('hidden');
    mealResults.classList.remove('hidden');
    let mealOption = generateDish();
    if (Array.isArray(mealOption)) {
        mealResults.innerHTML = `<article class="make-this"><h3 class="you-should-make">You should make: </h3>
        <h3>${mealOption[0]} with a side of ${mealOption[1]} and ${mealOption[2]} for dessert!</h3></article>`;
        entireMealOptions = [];
    } else if (!mealOption) {
        cookPotImg.classList.remove('hidden');
        clearMealBtn.classList.add('hidden');
    } else {
        mealResults.innerHTML = `<article class="make-this"><h3 class="you-should-make">You should make: </h3>
        <h1>${mealOption}!</h1></article>`;
    }
}
