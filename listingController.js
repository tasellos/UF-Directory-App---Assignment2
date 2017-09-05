angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.addListing = function () {
        
            if ($scope.code != undefined && $scope.name != undefined) {
                if ($scope.latitude == undefined)
                    $scope.latitude = "Not Found";
                if ($scope.longitude == undefined)
                    $scope.longitude = "Not Found";
                if ($scope.address == undefined)
                    $scope.address = "Not Found";

            var coords = { latitude: $scope.latitude, longitude: $scope.longitude }
            var entry = {
                code: $scope.code, name: $scope.name, coordinates: coords, address: $scope.address
            };

            $scope.listings.push(entry);

            $scope.code = undefined;
            $scope.name = undefined;
            $scope.latitude = undefined;
            $scope.longitude = undefined;
            $scope.address = undefined;
        }
    };
    $scope.deleteListing = function (name, code) {
        for (i = 0; i < $scope.listings.length; i++) {
            if ($scope.listings[i].name == name && $scope.listings[i].code == code)
                break;
        };
        $scope.listings.splice(i, 1);
    };
    $scope.showDetails = function (name, code) {
        for (i = 0; i < $scope.listings.length; i++) {
            if ($scope.listings[i].name == name && $scope.listings[i].code == code)
                break;
        };
        $scope.detailedInfo = $scope.listings[i];
    };

    $scope.containsSearch = function (entry) {
        return entry.name.match($scope.search) || entry.code.match($scope.search);
    };
  }
]);