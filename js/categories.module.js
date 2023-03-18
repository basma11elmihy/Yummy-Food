import { Recipies } from './reciepes.module.js';

export class Categories {
    constructor(){
        this.getCategories();
    }
    async getCategories(){  
        $(".categories-section").show();

        let result = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php
        `);
        result = await result.json();
        this.displayAllCategories(result.categories);
    }

    displayAllCategories(result){
        let temp = '';

        for (let i = 0; i<result.length;i++){
            temp += ` <div class="col-md-3">
            <div class="card bg-black position-relative overflow-hidden border-0" data-category="${result[i].strCategory}">
                <img src="${result[i].strCategoryThumb}" class="w-100" alt="">
                <div class="layer position-absolute bottom-0 start-0 end-0 bg-white opacity-50 rounded-2">
                    <div class="d-flex flex-column justify-content-start align-items-center p-3">
                        <p class="">${result[i].strCategory}</p>
                        <p class="">${result[i].strCategoryDescription}</p>
                    </div>
                </div>
            </div>
        </div>`

        }
        document.getElementById("categories-row").innerHTML = temp;
        this.createListeners();
    }

    createListeners(){
        document.querySelectorAll(".card").forEach( (item) => {
            item.addEventListener('click',()=>{
                const category = item.dataset.category;
                let others = $(".sections").not(".main-content");
                others.hide();
                new Recipies(category,'categories');
            });
        });   
 }
}
 
