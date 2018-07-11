app.controller('udpController', function($scope,$location,$window,$rootScope) {

$scope.udpListPackages = localStorage.getItem("mainListNew");
$scope.attrDetails=false;
$scope.markerGreenClick=function(val){
    debugger
    $scope.attrDetails=true;
    if(val=="marker1"){
        $scope.attrName = "Statue of Liberty & Ellis Island Tour with Pedestal Access";
        $scope.attrDescription = "Discover the majesty of the Statue of Liberty and the history of Ellis Island on this engaging walking tour. With convenient priority boarding on the ferry, enjoy quick access to the Statue of Liberty and take an informative stroll around these historic sites with your expert guide";
        $scope.attrDistance = "5mile";
        $scope.rating ="4.8/5";
    }
    if(val=="marker2"){
        $scope.attrName = "9/11 Memorial & Museum Admission: Skip the Ticket Line";
        $scope.attrDescription = "Step into the 9/11 Memorial Museum, where historical exhibits convey the shock, horror, and disbelief felt around the nation—and the world—as the World Trade Center towers fell. Walk through a solemn gallery to see portraits of the nearly 3,000 victims of the attacks of September 11, 2001 and of the bombing on February 26, 1993.";
        $scope.attrDistance = "16mile";
        $scope.rating ="4.3/5";
    }
    if(val=="marker3"){
        $scope.attrName = "Empire State Building Tickets with Optional VIP Skip-the-Line Access";
        $scope.attrDescription = "The must see for any visitor to New York City, the World’s Most Famous Building is on every list for its Observatory’s spectacular indoor and outdoor 360-degree views from the heart of Manhattan. Along the way, become a part of history as you journey through this Art Deco masterpiece including the restored lobby and murals. Download the free multi-media app and experience the exhibits tracing the building’s construction";
        $scope.attrDistance = "3mile";
        $scope.rating ="3/5";
    }
    if(val=="marker4"){
        $scope.attrName = "New York Hop-On Hop-Off Bus Tour";
        $scope.attrDescription = "Pop around the Big Apple's must-see sights and can't-miss attractions aboard an open-air double-decker bus. Explore the city at your own pace and consider opting for packages that offer everything from admission to the Museum of the City of New York to Ellis Island ferry passes";
        $scope.attrDistance = "10mile";
        $scope.rating ="4/5";
    }
    if(val=="marker5"){
        $scope.attrName = "New York CityPASS: 6 Must-See Museums & Attractions";
        $scope.attrDescription = "Bypass most of the long ticket lines and spend as much time as you like exploring the world-class exhibits at the American Museum of Natural History in the shadow of a T-Rex fossil, scoping out the masterpieces in the Met, and taking in the city lights by day and by night at the Empire State Building.";
        $scope.attrDistance = "23mile";
        $scope.rating ="4.6/5";
    }
}

});

