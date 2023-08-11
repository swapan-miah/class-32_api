const searchFood = () => {
  const inputField = document.getElementById("searchInput");
  const inputValue = inputField.value;
  // console.log(inputValue);
  inputField.value = "";

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFood(data.meals));
};

const displayFood = (foods) => {
  //   console.log(foods);
  const resultField = document.getElementById("search_result");
  resultField.textContent = "";
  foods.forEach((food) => {
    // console.log(food);
    const div = document.createElement("div");
    div.classList.add("col");
    // console.log(div.textContent);
    div.innerHTML = ` <div>
    <div class="card">
      <img src="${food.strMealThumb}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${food.strMeal}</h5>
        <p class="card-text">${
          food.strInstructions.slice(0, 150) + "<strong>See More</strong>"
        } </p>
      </div>
      <button onClick="foodDetails(${
        food.idMeal
      })" class="btn btn-outline-dark w-100">See More Details</button>
    </div>
  </div>
    `;
    resultField.appendChild(div);
  });
};

const foodDetails = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySingleFood(data.meals));
};

const displaySingleFood = (food) => {
  console.log(food);
  console.log(food.strMeal);
  const foodDetailes = document.getElementById("food_details");
  const singleFoodContainer = document.createElement("div");
  singleFoodContainer.classList.add("card");
  // console.log(foodDetailes);
  singleFoodContainer.innerHTML = ` 
    <div class="card">
      <img src="${food.strMealThumb}" class="card-img-top" alt="${food.strMealThumb} "/>
      <div class="card-body">
        <h5 class="card-title">${food.strMeal}</h5>
        <p class="card-text">${food.strInstructions} </p>
      </div>
    </div>
    `;
  foodDetailes.appendChild(singleFoodContainer);
};
