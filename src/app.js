5// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}
document.querySelector(".btn-patty").addEventListener("click",function () {
  state.Patty = !state.Patty;
  renderAll();
});

// Trial 2 - Setup event listener for the cheese button
function renderCheese() {
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

document.querySelector(".btn-cheese").addEventListener("click", function () {
  state.Cheese = !state.Cheese;
  renderAll();
});

// Trial 2 - Setup event listener for the tomatoes button
function renderTomatoes() {
  let tomatoes = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}
document.querySelector(".btn-tomatoes").addEventListener("click", function() {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
});

// Trial 2 - Setup event listener for the onion button
function renderOnions() {
  let onions = document.querySelector("#onion");
  //you can also use getElementById
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}
document.querySelector(".btn-onions").addEventListener("click", function() {
  state.Onions = !state.Onions;
  renderAll();
});

// Trial 2 - Setup event listener for the lettuce button
function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-lettuce").addEventListener("click", function() {
  state.Lettuce = !state.Lettuce;
  renderAll();
});


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  document.querySelector(".btn-patty").classList.toggle("active",state.Patty)
  document.querySelector(".btn-cheese").classList.toggle("active",state.Cheese);
  document.querySelector(".btn-onions").classList.toggle("active",state.Onions);
  document.querySelector(".btn-tomatoes").classList.toggle("active",state.Tomatoes);
  document.querySelector(".btn-lettuce").classList.toggle("active",state.Lettuce);
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
  const ingredientsBoard = document.querySelector(".menu-container");
  ingredientsBoard.innerHTML = `<h3>Ingredients</h3>` + " ";

  for (let ingredient in state){
    if (state[ingredient]){
      let p = document.createElement("p");
      p.innerHTML = ingredient;
      ingredientsBoard.appendChild(p);
    }
  }
};


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

var priceElement = document.querySelector(".price-details");

function renderPrice(){
  // varwho price = wholeWheatBun;
  let price = 2 * wholeWheatBun;
  for(let i in state){
    if (state[i]){
      price += ingredients[i]
    }
  }
  console.log(price);
  priceElement.innerHTML = "INR " + price;
}