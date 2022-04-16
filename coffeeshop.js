let coffeeApp = angular.module('home_app', []);
coffeeApp.controller('ctrl1', function($scope) {
    $scope.coffee = [
        {coffeeName:"Nicaragua Coffee", coffeeImg: "./img/coffee_bean1.jpg", coffeePrice: "$49.99"},
        {coffeeName:"Sumatra", coffeeImg: "./img/coffee_bean2.jpg", coffeePrice: "$59.99"},
        {coffeeName:"Gravitas Brand", coffeeImg: "./img/coffee_bean3.jpg", coffeePrice: "$54.99"},
        {coffeeName:"Costa Rica", coffeeImg: "./img/coffee_bean4.jpg", coffeePrice: "$45.99"},
    ];

    $scope.item_desc = [
        {desc : "This coffee has a floral aroma followed by a sweetness reminiscent of nectarine and marzipan, and a bright flavour."},
        {desc:"This coffee has a strong flavour with aromas reminiscent of forest floor and leather, and flavours reminiscent of maple syrup, baked marshmallow and spice cake."},
        {desc:"This coffee has a rich flavour of morello cherries and spicy, rich molasses, with an aftertaste reminiscent of cocoa powder."},
        {desc:"A well-balanced coffee with a flavour reminiscent of sweet orange and toasted pine nuts and a custard-like sweetness. Grown on the Bella Vista Estate in the Tres Rios region of Costa Rica, Central America. It is grown in an ideal region for coffee, with volcanic soil and extreme temperature differences between day and night."}
    ];

    $scope.blog = [
        {title:"New Item will coming soon!", sentence:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate!"},
        {title:"3 Year Anniversary", sentence:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate!"},
        {title:"Now hiring!!", sentence:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate!"},
    ]
})

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


