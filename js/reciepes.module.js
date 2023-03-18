import { rec_details } from "./details.module.js";

export class Recipies{
    constructor(term,key){
        this.getMeals(term,key);
        this.displayAllMeals();
        this.createListeners();
        document.getElementById("meals").innerHTML = '';

    }

    async getMeals(term,key){   
        $(".main-content").show();
  
        let result;
        if (term.includes('=')){
            result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f${term}`);
        } else if(key === 'categories'){
            result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`);
        } else if (key === 'area'){
            result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${term}`);
        } else if (key === 'ing'){

            result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${term}`);
        }
        else {
            result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
        }
        result = await result.json();
        this.displayAllMeals(result.meals);
    }
    
    displayAllMeals(result){
        let temp = '';
        document.getElementById("meals").innerHTML = temp;

        for (let i = 0; i<result.length ;i++){
            temp += `<div class="col-md-3">
            <div class="card position-relative overflow-hidden border-0" data-id="${result[i].idMeal}">
                <img src="${result[i].strMealThumb}" class="w-100" alt="">
                <div class="layer position-absolute bottom-0 start-0 end-0 bg-white opacity-50 rounded-2">
                <div class="d-flex flex-column justify-content-center align-items-center h-100">
                <h2 class="">${result[i].strMeal}</h2>
                <h2 class=""></h2>
            </div>                </div>
            </div>
        </div>`
        }

        document.getElementById("meals").innerHTML = temp;
        this.createListeners();
    }

    createListeners(){
        document.querySelectorAll(".card").forEach( (item) => {
            item.addEventListener('click',()=>{
                const rec_id = item.dataset.id;
                $(".details-content").show();
                $(".main-content").hide();
                new rec_details(rec_id);
            });
        });   
 }
}

