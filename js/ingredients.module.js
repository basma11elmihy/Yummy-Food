import { Recipies } from "./reciepes.module.js";

export class Ing{
    constructor(){
        this.getIng();
    }

    async getIng(){
        $(".ing-section").show();

        let result = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list
        `);
        result = await result.json();
        this.displayAllIngs(result.meals);
    }
    displayAllIngs(result){
        let temp = '';
        for (let i = 0; i<result.length;i++){
            temp += `<div class="col-md-3">
            <div class="card position-relative overflow-hidden border-0" data-ing="${result[i].strIngredient}">
                <img src="./Assets/logo.png" class="w-100" alt="">
                <h3>${result[i].strIngredient}</h3>
            </div>
        </div>`

        }
        document.getElementById("ing-row").innerHTML = temp;
        this.createListeners();
    }

    createListeners(){
        document.querySelectorAll(".card").forEach( (item) => {
            item.addEventListener('click',()=>{
                const ing = item.dataset.ing;
                let others = $(".sections").not(".main-content");
                others.hide();
                new Recipies(ing,'ing');
            });
        });   
    }
}