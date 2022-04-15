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

// ********** Countdown Timer Part **********
// to get the element from HTML
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

//To get time remaining 
function countdown(){
    let current = new Date();
    let tomorrow = new Date(current.getFullYear(), current.getMonth(), current.getDate()+1);
    let timeGap = tomorrow.getTime() - current.getTime();
    
    //To modify the unit of time
    let calcHour = Math.floor(timeGap / 1000 / 60 / 60);
    let calcMin = Math.floor(timeGap / 1000 / 60) % 60;
    let calcSec = Math.floor(timeGap / 1000) % 60;
    
    //To display the time as 2 digits number
    hour.innerHTML = calcHour < 10 ? '0' + calcHour :calcHour;
    min.innerHTML = calcMin < 10 ? '0' + calcMin :calcMin;
    sec.innerHTML = calcSec < 10 ? '0' + calcSec :calcSec;
}
countdown();
setInterval(countdown, 1000);


let SPA_App = angular.module('spa_app', ['ngRoute']);
SPA_App.config(function($routeProvider){
        $routeProvider
        .when("/",{templateUrl:"./pages/#",controller:"question1_controller"})
        .when("/question2",{templateUrl:"./pages/#",controller:"question2_controller"})
        .otherwise({templateUrl:"./pages/404.html"});
    });