app.controller('mainController', function($scope,$location,$window) {
    $scope.modelInnerContent=$('.sv_container').text();
    $scope.backLink=false;
    $scope.noExpedia=true;
    $scope.modalContent=true;
    $scope.loader=false;
    $scope.info=true;
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
            $scope.proceedShow=false;
            $scope.gangLink=true;
            $scope.gangContentMain=gangValue;
            setTimeout(function(){angular.element('#proceed').triggerHandler('click');},1200);
            $scope.noExpedia=true;
        }
    };

    $scope.goToUDP = function(path){
        $scope.desc = "We are finding you the best package.Please wait ...";
        $scope.modalContent=false;
        $scope.loader=true;
        $scope.info=false;
        var text = $scope.desc ;

        var chars = text.split('');
        var container = document.getElementById("container");

        var i = 0;
        setInterval(function () {
            if (i < chars.length) {
                container.innerHTML += chars[i++];
            } else {
                i = 0;
                container.innerHTML = "";
            }
        }, 100);

        setTimeout(function(){
            $('#myModal').hide();
            $(".modal-backdrop").css('display','none');
            $scope.gotToUdpPage('/udpPage')

        },5300);

    };

    $scope.gotToUdpPage = function(path) {
        $window.location.href = '/#!/udpPage';
    }


    $scope.loadReviews = function(){
        $scope.reviews = [
            {
                name : "Steve Richard",
                designation : "Executive Officer, Netscape",
                userImage : "user3.jpeg",
                review:"I expected the photos shown to be out dated. The building is as advertised. We loved the apartment. The amenities were great. Only complaint was parking offered was too expensive.",
                ratings : 5,
                images:[
                    "../img/hotel/hotel1.jpeg",
                    "../img/hotel/hotel2.jpeg",
                    "../img/hotel/hotel3.jpeg",
                    "../img/hotel/hotel4.jpeg"
                ],
                reviewInDays: 1
            },
            {
                name : "Mellinda Roy",
                designation : "Senior Dev Engineer, Expedia",
                userImage : "user6.jpeg",
                ratings : 4,
                review:"Not having an on-sight rep. was difficult. The bedroom had no windows and the overhead fan was broken; the fan was noisy and unbalanced. There were dirty wash cloths in the washing machine, dirty glasses in the cupboard, used coffee grinds in the coffee maker. We could hear occupants above and next door to us. For the price of nightly stay and $40/day parking, I will seek elsewhere for nightly accommodation.",
                images:[
                    "../img/hotel/hotel5.jpeg",
                    "../img/hotel/hotel6.jpeg"
                ],
                reviewInDays: 4
            },
            {
                name : "Brenda Martina",
                designation : "Manager, Sales & Operations, Nest Group",
                userImage : "user5.jpeg",
                ratings : 2,
                review:"Not having an on-sight rep. was difficult. The bedroom had no windows and the overhead fan was broken; the fan was noisy and unbalanced. There were dirty wash cloths in the washing machine, dirty glasses in the cupboard, used coffee grinds in the coffee maker. We could hear occupants above and next door to us. For the price of nightly stay and $40/day parking, I will seek elsewhere for nightly accommodation.",
                images:[
                    "../img/hotel/hotel10.jpeg"
                ],
                reviewInDays:2
            },
            {
                name : "Johny Vellikala ",
                designation : "Politician",
                userImage : "user4.jpeg",
                ratings : 4,
                review:"I LOVED staying at the Chroma Condos. As soon as I walked into the lobby I knew this was going to be a really cool place to stay. I liked the extra security that they had by the use of key fobs to get into the building and to get to your floor. I felt really safe staying alone. The condo was SO HIP. It was clean and I felt so at home there. THE GYM IS AMAZING!! I want to move to Seattle just to live there!!!",
                images:[
                    "../img/hotel/hotel7.jpeg",
                    "../img/hotel/hotel8.jpeg",
                    "../img/hotel/hotel9.jpeg"
                ],
                reviewInDays:3
            },
            {
                name : "Kathy Richard",
                designation : "Finance Officer, Google",
                userImage : "user1.jpeg",
                review:"I expected the photos shown to be out dated. The building is as advertised. We loved the apartment. The amenities were great. Only complaint was parking offered was too expensive.",
                ratings : 3,
                images:[
                    "../img/hotel/hotel1.jpeg",
                    "../img/hotel/hotel2.jpeg",
                    "../img/hotel/hotel3.jpeg",
                    "../img/hotel/hotel4.jpeg"
                ],
                reviewInDays:8
            },
            {
                name : "Vinod Balakrishnan",
                designation : "Senior Executive Director, Adobe",
                userImage : "user2.jpeg",
                ratings : 3,
                review:"Not having an on-sight rep. was difficult. The bedroom had no windows and the overhead fan was broken; the fan was noisy and unbalanced. There were dirty wash cloths in the washing machine, dirty glasses in the cupboard, used coffee grinds in the coffee maker. We could hear occupants above and next door to us. For the price of nightly stay and $40/day parking, I will seek elsewhere for nightly accommodation.",
                images:[
                    "../img/hotel/hotel5.jpeg",
                    "../img/hotel/hotel6.jpeg"
                ],
                reviewInDays:7
            },
            {
                name : "Brenda Martina",
                designation : "Manager, Sales & Operations, Nest Group",
                userImage : "user7.jpeg",
                ratings : 1,
                review:"Not having an on-sight rep. was difficult. The bedroom had no windows and the overhead fan was broken; the fan was noisy and unbalanced. There were dirty wash cloths in the washing machine, dirty glasses in the cupboard, used coffee grinds in the coffee maker. We could hear occupants above and next door to us. For the price of nightly stay and $40/day parking, I will seek elsewhere for nightly accommodation.",
                images:[
                    "../img/hotel/hotel10.jpeg"
                ],
                reviewInDays:6
            },
            {
                name : "Johny Vellikala ",
                designation : "Politician",
                userImage : "user8.jpeg",
                ratings : 1,
                review:"I LOVED staying at the Chroma Condos. As soon as I walked into the lobby I knew this was going to be a really cool place to stay. I liked the extra security that they had by the use of key fobs to get into the building and to get to your floor. I felt really safe staying alone. The condo was SO HIP. It was clean and I felt so at home there. THE GYM IS AMAZING!! I want to move to Seattle just to live there!!!",
                images:[
                    "../img/hotel/hotel7.jpeg",
                    "../img/hotel/hotel8.jpeg",
                    "../img/hotel/hotel9.jpeg"
                ],
                reviewInDays:5
            },
            {
                name : "Steve Richard",
                designation : "Executive Officer, Netscape",
                userImage : "user8.jpeg",
                review:"I expected the photos shown to be out dated. The building is as advertised. We loved the apartment. The amenities were great. Only complaint was parking offered was too expensive.",
                ratings : 4,
                images:[
                    "../img/hotel/hotel1.jpeg",
                    "../img/hotel/hotel2.jpeg",
                    "../img/hotel/hotel3.jpeg",
                    "../img/hotel/hotel4.jpeg"
                ],
                reviewInDays:10
            },
            {
                name : "Mellinda Roy",
                designation : "Senior Dev Engineer, Expedia",
                userImage : "user10.jpeg",
                ratings : 2,
                review:"Not having an on-sight rep. was difficult. The bedroom had no windows and the overhead fan was broken; the fan was noisy and unbalanced. There were dirty wash cloths in the washing machine, dirty glasses in the cupboard, used coffee grinds in the coffee maker. We could hear occupants above and next door to us. For the price of nightly stay and $40/day parking, I will seek elsewhere for nightly accommodation.",
                images:[
                    "../img/hotel/hotel5.jpeg",
                    "../img/hotel/hotel6.jpeg"
                ],
                reviewInDays:12
            }


        ];
    };

    $scope.orderByUser = function(selectedFilter) {
        $scope.myOrderBy = selectedFilter.toLowerCase();
    };

    $scope.range = function(count){
        return new Array(+count);
    };

    $scope.filters = [
        {text:'Select.....',value:''},
        {text:'Ratings',value:'ratings'},
        {text:'Recent Reviews',value:'reviewInDays'},
    ];


    $scope.udpPageData = [
        {
            departureFlightName:"JetBlue",
            departureFlightTime:"10.30 AM - 06.47 PM",
            departureFlightRoute:"SEA-JFK",
            departureFlightCategory:"Nonstop",
            returnFlightName:"JetBlue",
            returnFlightTime:"07.22 AM - 10.37 PM",
            returnFlightRoute:"",
            returnFlightCategory:"",
            hotelName:"Night Hotel Time Square",
            hotelPlace:"Newyork",
            hotelRoom:"Superior Room, 1 Queen Bed",
        }
    ];

});

