angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('InfoListCtrl', function($scope, $timeout, $ionicModal, $ionicActionSheet) {
  
  $ionicModal.fromTemplateUrl('newInfo.html', function(modal) {
    $scope.settingsModal = modal;
  });


  $scope.newInfo = function() {
    $scope.settingsModal.show();
  };
})

.controller('InfoCtrl', function($scope) {
  $scope.close = function() {
    $scope.modal.hide();
  }
});

