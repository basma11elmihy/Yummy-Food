export class rec_details{
    constructor(id){
        this.getMealDetails(id);
        this.displayDetails();
    }

    async getMealDetails(id){
        let result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        result = await result.json();
        this.displayDetails(result.meals[0]);
    }

    displayDetails(result){

        console.log(result);
        let temp = `<div class="col-md-4 text-white">
        <img src="${result.strMealThumb}" class="w-100" alt="">

        <p class="display-5 text-center m-2">${result.strMeal}</p>
    </div>

    <div class="col-md-8 text-white">
        <h2 class="">
            Instructions
        </h2>

        <p> ${result.strInstructions}
        </p>

        <h2 class="">
            Area: <span>${result.strArea}</span>
        </h2>

        <h2 class="">
            Category:<span> ${result.strCategory}</span>
        </h2>

        <h2 class="">
            Ingredients: 
        </h2>

        <div class="p-2 my-2">
            <p class="p-2 bg-secondary text-bg-light rounded-3">${result.strMeasure1} ${result.strIngredient1}</p>
            <p class="p-2 bg-secondary text-bg-light rounded-3">${result.strMeasure2} ${result.strIngredient2}</p>
            <p class="p-2 bg-secondary text-bg-light rounded-3">${result.strMeasure3} ${result.strIngredient3}</p>
            <p class="p-2 bg-secondary text-bg-light rounded-3">${result.strMeasure4} ${result.strIngredient4}</p>
            <p class="p-2 bg-secondary text-bg-light rounded-3">${result.strMeasure5} ${result.strIngredient5}</p>
            <p class="p-2 bg-secondary text-bg-light rounded-3">${result.strMeasure6} ${result.strIngredient6}</p>
        </div>

        

        <div class="d-flex my-3">
            <span class="p-2 bg-info text-bg-light rounded-3">${result.strTags}</span>
           
        </div>

   
        <div class="my-3">
        <a href="${result.strYoutube}" target="_blank"><button class="btn bg-danger">Youtube</button></a>
        <a href="${result.strSource}" target="_blank"><button class="btn bg-success">Source</button></a>
        </div>
        

    </div>`;

    document.getElementById("details-data").innerHTML = temp;
    }
}