import { Recipies } from "./reciepes.module.js";

export class Area{
    constructor(){
        this.getAreas();
    }

    async getAreas(){
        $(".area-section").show();

        let result = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list
        `);
        result = await result.json();
        this.displayAllAreas(result.meals);
    }
    displayAllAreas(result){
        let temp = '';
        for (let i = 0; i<result.length;i++){
            temp += `<div class="col-md-3">
            <div class="card position-relative overflow-hidden border-0" data-area="${result[i].strArea}">
                <img src="./Assets/logo.png" class="w-100" alt="">
                <h3>${result[i].strArea}</h3>
            </div>
        </div>`

        }
        document.getElementById("area-row").innerHTML = temp;
        this.createListeners();
    }

    createListeners(){
        document.querySelectorAll(".card").forEach( (item) => {
            item.addEventListener('click',()=>{
                const area = item.dataset.area;
                let others = $(".sections").not(".main-content");
                others.hide();
                new Recipies(area,"area");
            });
        });   
    }
}

