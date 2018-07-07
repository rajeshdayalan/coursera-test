(function functionName(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

   LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
         $scope.value="";
         $scope.resultMessage="";

         $scope.checkIFTooMuch = function(){
         var x = $scope.name.split(",");
         //NOT consider empty item like item1,item2, ,item3
         console.log('The original string is: "' + $scope.name + '"');
         console.log('The array has ' + x.length + ' elements: ' + x.join(' / '));

            var y = parseInt(x.length);
            var message;
                   if (x=="") {
                    message = "Please enter data first";
                   } else if (y<4) {
                       message = "Enjoy";
                   } else  {
                       message = "Too much";
                   }

                   console.log(y);
             $scope.resultMessage = message;
       }
   };
})();
