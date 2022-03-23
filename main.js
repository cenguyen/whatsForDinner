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

let whichMealOption = document.getElem
let letsCookBtn = document.querySelector('.lets-cook-btn');

letsCookBtn.addEventListener('click', generateDish);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function generateDish() {
    let mealoption = findMealValue();
    console.log(mealoption);
    if (mealoption === 'sides') {
        console.log(sides[getRandomIndex(sides)]);
    } else if (mealoption === 'main-dish') {
        console.log(mains[getRandomIndex(mains)]);
    } else if (mealoption === 'dessert') {
        console.log(dessert[getRandomIndex(dessert)]);
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