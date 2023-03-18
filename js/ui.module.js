import {Recipies} from './reciepes.module.js'
import { Search } from './search.module.js';
import { Categories } from './categories.module.js';
import { Area } from './area.module.js';
import { Ing } from './ingredients.module.js';
import { Contact } from './contact.module.js';

$(document).ready(function(){

    $(".details-content").hide();
    $("#search-input").hide();
    $(".categories-section").hide();
    $(".area-section").hide();
    $(".ing-section").hide();
    $(".contact-section").hide();

    let innerWidth = $(".side-options").outerWidth(true);
    $(".side-nav").animate({left: `-${innerWidth}px`},0);
    $(".navs li").animate({
        top: 300
    }, 0)
 

    $(".menu-btn").click(function(){
        let left = $(".side-nav").css("left");
        if(left == "0px"){
            let innerWidth = $(".side-options").outerWidth(true);
            $(".side-nav").animate({left: `-${innerWidth}px`},500);
            $(".menu-btn").addClass("fa-bars");
            $(".menu-btn").removeClass("fa-close");
    
            $(".navs li").animate({
                top: 300
            }, 500)
    
        } else {
            closeSideMenu();    
        }
    });

    $("#search").click(function(){
        pressLiSideMenu();
        let others = $(".sections").not(".main-content");
        others.hide();
        new Search();
    });

    $("#categories").click(function(){
        pressLiSideMenu();
        $("#search-input").hide();
        let others = $(".sections").not(".categories-section");
        others.hide();
        $("categories-section").show();

        new Categories();
    });
    $("#area").click(function(){
        pressLiSideMenu();
        $("#search-input").hide();
        let others = $(".sections").not(".area-section");
        others.hide();
        new Area();
    });
    $("#ing").click(function(){
        pressLiSideMenu();
        $("#search-input").hide();
        let others = $(".sections").not(".ing-section");
        others.hide();
        new Ing();
    });
    $("#contact").click(function(){
        pressLiSideMenu();
        $("#search-input").hide();
        let others = $(".sections").not(".contact-section");
        others.hide();
        new Contact();
    });
    
    new Recipies("",false);
});

function closeSideMenu(){
    $(".side-nav").animate({left: `0px`},500);
        
    $(".menu-btn").removeClass("fa-bars");
    $(".menu-btn").addClass("fa-close");

    for (let i = 0; i < 5; i++) {
    $(".navs li").eq(i).animate({
        top: 0
    }, (i + 5) * 100)};
}

function pressLiSideMenu(){
    let innerWidth = $(".side-options").outerWidth(true);
            $(".side-nav").animate({left: `-${innerWidth}px`},500);
            $(".menu-btn").addClass("fa-bars");
            $(".menu-btn").removeClass("fa-close");
    
            $(".navs li").animate({
                top: 300
            }, 500)
}

