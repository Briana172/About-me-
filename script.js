// Local array to hold items
let foods = ["Pizza 🍕", "Burgers 🍔", "Tacos 🌮"];

// DOM references
const foodInput = document.getElementById('foodInput');
const addBtn = document.getElementById('addBtn');
const foodList = document.getElementById('foodList');
const pickBtn = document.getElementById('pickBtn');
const resultDisplay = document.getElementById('resultDisplay');

// Render list of foods onto the UI
function displayFoods() {
    foodList.innerHTML = '';
    foods.forEach((food, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${food}</span>
            <button class="delete-btn" onclick="deleteFood(${index})">×</button>
        `;
        foodList.appendChild(li);
    });
}

// Add typed food to array
function addFood() {
    const text = foodInput.value.trim();
    if (text !== '') {
        foods.push(text);
        foodInput.value = '';
        displayFoods();
    }
}

// Delete food item from array
function deleteFood(index) {
    foods.splice(index, 1);
    displayFoods();
}

// Select one random food item
function pickRandomFood() {
    if (foods.length === 0) {
        resultDisplay.textContent = "Please add some foods first! 🥺";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * foods.length);
    const chosen = foods[randomIndex];
    resultDisplay.textContent = `🎉 Try this: ${chosen}`;
}

// Attach script triggers to actions
addBtn.addEventListener('click', addFood);
pickBtn.addEventListener('click', pickRandomFood);

// Also add item if user hits the enter key inside input
foodInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addFood();
    }
});

// Run initial layout setup on launch
displayFoods();