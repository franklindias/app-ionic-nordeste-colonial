app.controller('MenuController', function($scope, $cordovaBarcodeScanner, $location) {
    $scope.scanear = function(){
    $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
           $location.path(barcodeData.text);
      }, function(error) {
      });
    }
});