app.controller('mainController', function($scope,$location) {
    $scope.modelInnerContent=$('.sv_container').text();
    $scope.backLink=false;
$scope.proceedShow=false;
$scope.purposeModel=true;
$scope.progress=false;
$scope.activitiesModel=false;
$scope.gangModel=false;
$scope.purposeLink=false;
    $scope.activitiesLink=false;
    $scope.gangLink=false;
    $scope.pWidth=0;
    $scope.choices=["Business", "Educational", "Holidays", "Honeymoon","Other"]
    $scope.select_text = "Please choose Purpose of visit" ;
    $scope.purposeChange=function(value) {
        $scope.progress=true;
        if(value!=undefined){
            $scope.purposeLink=true;
            $scope.purposeContentMain=value;
        }
        $scope.pWidth=33;
$scope.select_text = "Please choose activities preferred" ;
        $scope.backLink=true;
        if (value == "Business") {
            $scope.purposeModel = false;
            $scope.activitiesModel = true;
            $scope.gangModel = false;
            $scope.choices = ["Meetings", "Conferences", "Seminar", "Other"]

        }

        if (value == "Educational") {
            $scope.purposeModel = false;
            $scope.activitiesModel = true;
            $scope.gangModel = false;
            $scope.choices = ["Study Conferences", "Seminars", "Teaching", "Other"]
        }
        if (value == "Holidays") {
            $scope.purposeModel = false;
            $scope.activitiesModel = true;
            $scope.gangModel = false;
            $scope.choices = ["Trucking", "Beaches", "Adventurous", "Other"]
        }
        if (value == "Honeymoon") {
            $scope.purposeModel = false;
            $scope.activitiesModel = true;
            $scope.gangModel = false;
            $scope.choices = ["Lovely places", "Attractions", "Beaches", "Other"]
        }
    }
    $scope.activitiesChange=function(value){
        if(value!=undefined){
            $scope.activitiesLink=true;
            $scope.activitiesContentMain=value;
        }
        $scope.progress=true;
        $scope.pWidth=67;
        $scope.select_text = "Please choose your gang" ;
        $scope.purposeModel = false;
        $scope.activitiesModel = false;
        $scope.gangModel = true;
        $scope.backLink=false;
        $scope.choices=["Please select","Family", "Colleagues", "Friends", "Couple","Other"]
    }
    $scope.backBtn=function(){
        $scope.progress=true;
        if($scope.activitiesModel){
            $scope.pWidth=0;
            $scope.select_text = "Please choose Purpose of visit" ;
            $scope.purposeModel = true;
            $scope.activitiesModel = false;
            $scope.gangModel = false;
            $scope.proceedShow=false;
            $scope.backLink=false;
            $scope.choices=["Business", "Educational", "Holidays", "Honeymoon","Other"]

        }
        if($scope.gangModel){
            $scope.select_text = "Please choose activities preferred" ;
            $scope.purposeModel = false;
            $scope.activitiesModel = true;
            $scope.gangModel = false;
            $scope.proceedShow=false;

        }
    }
    $scope.gangChange=function(gangValue){
        $scope.progress=true;
        if(gangValue!=undefined){
            $scope.pWidth=100;
            $scope.proceedShow=true;
            $scope.gangLink=true;
            $scope.gangContentMain=gangValue;
        }
    };

    $scope.goToUDP = function(path){
        $(".modal-backdrop").css('display','none');
        $location.path(path);
    };


});