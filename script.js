// Md Shakil Ahmed_2120290
let currentMeals = [];

function searchMeal() {
  var searchTerm = document.getElementById("searchInput").value;
  var apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.meals) {
        for (let i = 0; i < Math.min(data.meals.length, 5); i++) {
          displayMeal(data.meals[i]);
          currentMeals.push(data.meals[i]);
        }

        if (data.meals.length > 5) {
          showMoreButton(data.meals.slice(5));
        }
      } else {
        document.getElementById("mealResults").innerHTML =
          "<p>No results found</p>";
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function displayMeal(meal) {
  var mealElement = document.createElement("div");
  mealElement.classList.add("col-lg-4", "col-md-6", "col-12", "mb-4");
  mealElement.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">Meal ID: ${meal.idMeal}</p>
                <p class="card-text">${meal.strInstructions}</p>
            </div>
        </div>
    `;
  document.getElementById("mealResults").appendChild(mealElement);
}


