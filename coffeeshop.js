window.onload = function(){
    //Storing the images to array
    let images = [
        'url(/img/coffee_1.jpg)',
        'url(/img/coffee_2.jpg)',
        'url(/img/coffee_3.jpg)'
    ]
    //To get the elements from HTML
    let target = document.getElementById("slide");
    let right = document.getElementById("right");
    let left = document.getElementById("left");

    //The counter for changing the image when click the arrow
    let count = 0;

    //The function which is for changing the image with clicking
    function changeImg(){
        target.style.backgroundImage = images[count];
    }

    //When click ">", counter will be +1
    function nextImg(){
        if(count == 2){
            count = 0;
        } else {
            count++;
        }
        changeImg();
    }

    //When click ">", counter will be -1
    function prevImg(){
        if(count == 0){
            count = 2;
        } else {
            count--;
        }
        changeImg();
    }

    //Click event
    left.addEventListener('click', prevImg, false);
    right.addEventListener('click', nextImg, false);
}

let SPA_App = angular.module('spa_app', ['ngRoute']);
SPA_App.config(function($routeProvider){
        $routeProvider
        .when("/",{templateUrl:"./pages/#",controller:"question1_controller"})
        .when("/question2",{templateUrl:"./pages/#",controller:"question2_controller"})
        .otherwise({templateUrl:"./pages/404.html"});
    });