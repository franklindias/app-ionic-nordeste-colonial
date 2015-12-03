app.controller('MenuController', function($scope, $cordovaBarcodeScanner, $location, $state) {
    $scope.scanear = function(){
    $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
            
         $state.go('local-qr', {'id': barcodeData.text, 'status':'1'});
      }, function(error) {
      });
    }
});