import { Recipies } from './reciepes.module.js';

export class Search{
    constructor(){
        this.setUI();
        this.closeSideMenu();
        this.searchByName();
        this.searchByFirstLetter();

    }

    setUI(){
        document.getElementById("meals").innerHTML = "";
        $("#search-input").show();
        $(".main-content").show();
        this.searchByName();
        this.searchByFirstLetter();

    }
    searchByName(){
        document.getElementById("s-name").addEventListener("keyup", (event) => {
            let value = event.target.value;
            if (value == ""){
                document.getElementById("meals").innerHTML = "";
            } else {
                new Recipies(event.target.value,false);
            }
        });
    }
    searchByFirstLetter(){
        document.getElementById("s-letter").addEventListener("keyup", (event) => {
            let value = event.target.value;
            if (value == ""){
                document.getElementById("meals").innerHTML = "";
            } else {
                new Recipies('=' + event.target.value,false);
            }
        }); 
    }

}