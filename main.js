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

//let whichMealOption = document.getElem
let letsCookBtn = document.querySelector('.lets-cook-btn');
let mealResults = document.querySelector('.display-meal');
let cookPotImg = document.querySelector('.cook-pot-img');

letsCookBtn.addEventListener('click', displayMealOption);

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
    // styling notes: text should be centered justify and align
    // you should make smaller text than chosen dish
    // you should make is italicized
    // chosen dish is large, possibly bolded with !

    cookPotImg.classList.add('hidden');
    let mealOption = generateDish();
    mealResults.innerHTML = `<article class="make-this"><h3 class="you-should-make">You should make: </h3>
    <h1>${mealOption}!</h1></article>`;
    console.log(mealResults);
}

// styling notes for entire meal
// chosen dishes text smaller than original
// "main dish" with a side of 
// "side dish" and "dessert" for dessert!