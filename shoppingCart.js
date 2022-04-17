var app = angular.module("shoppingcart", [])
.controller("shoppingCTR", function($scope){
    $scope.carts=[];
    $scope.products = [
    {p_id: "1", p_name: "Nicaragua Coffee", p_image: "./img/coffee_bean1.jpg", p_price: 50},
    {p_id: "2", p_name: "Sumatra", p_image: "./img/coffee_bean2.jpg", p_price: 60},
    {p_id: "3", p_name: "Gravitas Brand", p_image: "./img/coffee_bean3.jpg", p_price: 55},
    {p_id: "4", p_name: "Costa Rica", p_image: "./img/coffee_bean4.jpg", p_price: 45},
    ];
                 
    $scope.add_cart = function(product){
        if(product){
            $scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
        }
        }

    $scope.total = 0;
                 
    $scope.setTotals = function(cart){
        if(cart){
            $scope.total += cart.p_price;
        }
    }
                 
    $scope.remove_cart = function(cart){
        if(cart){
            $scope.carts.splice($scope.carts.indexOf(cart), 1);
            $scope.total -= cart.p_price;
        }
    }
});

    //Send the userinfo(First name, Last name, Email, Phone number, Address)
    fnameInfo = document.getElementById("exampleInputfname1");
    lnameInfo = document.getElementById("exampleInputlname1");
    emailInfo = document.getElementById("exampleInputEmail1");
    phoneNumInfo = document.getElementById("exampleInputPhoneNum1");
    addressInfo = document.getElementById("exampleInputAddress1");

    writeCookie = function() {
      fnameCookieValue = fnameInfo.value;
      lnameCookieValue = lnameInfo.value;
      emailCookieValue = emailInfo.value;
      phoneNumCookieValue = phoneNumInfo.value;
      addressCookieValue = addressInfo.value;
      document.cookie = fnameCookieValue + " " + lnameCookieValue + " " + emailCookieValue + " " + phoneNumCookieValue + " " + addressCookieValue;
      console.log(document.cookie);
    }