app.controller('mainController', function($scope,$location,$window,$rootScope) {
    $scope.modelInnerContent=$('.sv_container').text();
    var sliderVal;
    $scope.purposeValue="Please Select";
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
    $scope.mainPackageList=[];
    $rootScope.mainDataColl=[];
    $scope.packageMainData={
        "PackageSearchResultList": {
            "PackageSearchResult": [{
                "purpose": "Business",
                "budget": "750",
                "FlightReferenceIndex": {
                    "FlightIndex": "1",
                    "FlightItinerary": {
                        "FlightLeg": [{
                            "FlightLegIndex": "1",
                            "FlightDuration": "PT8H6M",
                            "FlightSegment": [{
                                "FlightSegmentIndex": "1",
                                "DepartureAirportCode": "SEA",
                                "ArrivalAirportCode": "LAS",
                                "DepartureDateTime": "2018-08-09T20:12:00",
                                "ArrivalDateTime": "2018-08-09T22:38:00",
                                "CarrierCode": "NK",
                                "FlightNumber": "726",
                                "FlightDuration": "PT2H26M",
                                "AirlineType": "32A",
                                "CabinClass": "ECONOMY",
                                "FlightDistance": {
                                    "UnitCount": "1407.87",
                                    "Unit": "KM"
                                }
                            },
                                {
                                    "FlightSegmentIndex": "2",
                                    "DepartureAirportCode": "LAS",
                                    "ArrivalAirportCode": "MCO",
                                    "DepartureDateTime": "2018-08-09T23:40:00",
                                    "ArrivalDateTime": "2018-08-10T07:18:00",
                                    "CarrierCode": "NK",
                                    "FlightNumber": "726",
                                    "FlightDuration": "PT4H38M",
                                    "AirlineType": "32A",
                                    "CabinClass": "ECONOMY",
                                    "FlightDistance": {
                                        "UnitCount": "3256.62",
                                        "Unit": "KM"
                                    }
                                }
                            ]
                        },
                            {
                                "FlightLegIndex": "2",
                                "FlightDuration": "PT10H10M",
                                "FlightSegment": [{
                                    "FlightSegmentIndex": "1",
                                    "DepartureAirportCode": "MCO",
                                    "ArrivalAirportCode": "DFW",
                                    "DepartureDateTime": "2018-08-12T10:10:00",
                                    "ArrivalDateTime": "2018-08-12T11:54:00",
                                    "CarrierCode": "NK",
                                    "FlightNumber": "407",
                                    "FlightDuration": "PT2H44M",
                                    "AirlineType": "32A",
                                    "CabinClass": "ECONOMY",
                                    "FlightDistance": {
                                        "UnitCount": "1568.77",
                                        "Unit": "KM"
                                    }
                                },
                                    {
                                        "FlightSegmentIndex": "2",
                                        "DepartureAirportCode": "DFW",
                                        "ArrivalAirportCode": "SEA",
                                        "DepartureDateTime": "2018-08-12T15:10:00",
                                        "ArrivalDateTime": "2018-08-12T17:20:00",
                                        "CarrierCode": "NK",
                                        "FlightNumber": "253",
                                        "FlightDuration": "PT4H10M",
                                        "AirlineType": "32A",
                                        "CabinClass": "ECONOMY",
                                        "FlightDistance": {
                                            "UnitCount": "2675.77",
                                            "Unit": "KM"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    "FlightPrice": {
                        "BaseRate": {
                            "Value": "520.88",
                            "Currency": "USD"
                        },
                        "TaxesAndFees": {
                            "Value": "121.26",
                            "Currency": "USD"
                        },
                        "TotalRate": {
                            "Value": "642.14",
                            "Currency": "USD"
                        }
                    },
                    "TicketsRemaining": "10"
                },
                "HotelReferenceIndex": {
                    "CheckInDate": "2018-08-10",
                    "CheckOutDate": "2018-08-12",
                    "NumberOfRooms": "1",
                    "NumberOfNights": "2",
                    "HotelIndex": "1",
                    "HotelID": "64289",
                    "Name": "Magnuson Hotel Kissimmee Maingate",
                    "Image_url_1": "https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg",
                    "Image_url_2": "./img/hotel_in/inside1.jpeg",
                    "Image_url_3": "./img/hotel_in/inside2.jpeg",
                    "Image_url_4": "./img/hotel_in/inside3.jpeg",
                    "Image_url_5": "./img/hotel_in/inside4.jpeg",
                    "Location": {
                        "StreetAddress": "4694 W Irlo Bronson Memorial Hwy",
                        "City": "Kissimmee",
                        "Province": "FL",
                        "GeoLocation": {
                            "Latitude": "28.319171",
                            "Longitude": "-81.470512"
                        },
                        "PostalCode": "34746"
                    },
                    "Distance": {
                        "UnitCount": "26.29",
                        "Unit": "km"
                    },
                    "Description": "Situated in Kissimmee, this hotel is within a 15-minute walk of Capone's Dinner Show and Congo River Golf. 192 Flea Market and Shingle Creek Regional Park are also within 2 mi (3 km). ",
                    "StarRating": "2.0",
                    "TravelerReviewRating": "2.5",
                    "TravelerReviewCount": "1615",
                    "OverviewThumbnail": "https://images.trvl-media.com/hotels/1000000/70000/64300/64289/64289_80_t.jpg",
                    "RoomRatePlanDescription": "Room, 2 Double Beds, Non Smoking",
                    "RoomTypeID": "200567027",
                    "RatePlanID": "202888877",
                    "RateRuleID": "204869814",
                    "HotelPrice": {
                        "BaseRate": {
                            "Value": "70.00",
                            "Currency": "USD"
                        },
                        "TaxRcAndFees": {
                            "Value": "20.86",
                            "Currency": "USD"
                        },
                        "TotalRate": {
                            "Value": "90.86",
                            "Currency": "USD"
                        }
                    },
                    "RoomsRemaining": "4"
                },
                "PackagePrice": {
                    "TotalPrice": {
                        "Value": "724.84",
                        "Currency": "USD"
                    },
                    "TotalSavings": {
                        "Value": "8.16",
                        "Currency": "USD"
                    }
                },
                "DetailsUrl": "https://www.expedia.com/go/udp?ProductType=multiitem&Meta=1&langid=1033&NumRoom=1&NumAdult=R1:2&DepartureTLA=L1:SEA|L2:MCO&ArrivalTLA=L1:MCO|L2:SEA&DepartureDate=L1:2018-08-09|L2:2018-08-12&HotelID=64289&RatePlanCode=202888877&RoomTypeCode=200567027&InventoryType=1&CheckInDate=2018-08-10&CheckOutDate=2018-08-12&AirTokens=AQohCh8IzpYBEgM3MjYYkgEgzHAogOyTATDm75MBOFRAAFgBCkQKIAjOlgESAzQwNxjMcCCjsQEo0oeUATD2iJQBOFVAAFgBCiAIzpYBEgMyNTMYo7EBIJIBKLqKlAEwtIyUAThVQABYARIKCAEQARgBKgJOSxgCIgQIARACKAIoAygEMAI&Price=724.84&CurrencyCode=USD"
            },
                {
                    "purpose": "Honeymoon",
                    "budget": "800",
                    "FlightReferenceIndex": {
                        "FlightIndex": "1",
                        "FlightItinerary": {
                            "FlightLeg": [{
                                "FlightLegIndex": "1",
                                "FlightDuration": "PT8H6M",
                                "FlightSegment": [{
                                    "FlightSegmentIndex": "1",
                                    "DepartureAirportCode": "SEA",
                                    "ArrivalAirportCode": "LAS",
                                    "DepartureDateTime": "2018-08-09T20:12:00",
                                    "ArrivalDateTime": "2018-08-09T22:38:00",
                                    "CarrierCode": "NK",
                                    "FlightNumber": "726",
                                    "FlightDuration": "PT2H26M",
                                    "AirlineType": "32A",
                                    "CabinClass": "ECONOMY",
                                    "FlightDistance": {
                                        "UnitCount": "1407.87",
                                        "Unit": "KM"
                                    }
                                },
                                    {
                                        "FlightSegmentIndex": "2",
                                        "DepartureAirportCode": "LAS",
                                        "ArrivalAirportCode": "MCO",
                                        "DepartureDateTime": "2018-08-09T23:40:00",
                                        "ArrivalDateTime": "2018-08-10T07:18:00",
                                        "CarrierCode": "NK",
                                        "FlightNumber": "726",
                                        "FlightDuration": "PT4H38M",
                                        "AirlineType": "32A",
                                        "CabinClass": "ECONOMY",
                                        "FlightDistance": {
                                            "UnitCount": "3256.62",
                                            "Unit": "KM"
                                        }
                                    }
                                ]
                            },
                                {
                                    "FlightLegIndex": "2",
                                    "FlightDuration": "PT10H10M",
                                    "FlightSegment": [{
                                        "FlightSegmentIndex": "1",
                                        "DepartureAirportCode": "MCO",
                                        "ArrivalAirportCode": "DFW",
                                        "DepartureDateTime": "2018-08-12T10:10:00",
                                        "ArrivalDateTime": "2018-08-12T11:54:00",
                                        "CarrierCode": "NK",
                                        "FlightNumber": "407",
                                        "FlightDuration": "PT2H44M",
                                        "AirlineType": "32A",
                                        "CabinClass": "ECONOMY",
                                        "FlightDistance": {
                                            "UnitCount": "1568.77",
                                            "Unit": "KM"
                                        }
                                    },
                                        {
                                            "FlightSegmentIndex": "2",
                                            "DepartureAirportCode": "DFW",
                                            "ArrivalAirportCode": "SEA",
                                            "DepartureDateTime": "2018-08-12T15:10:00",
                                            "ArrivalDateTime": "2018-08-12T17:20:00",
                                            "CarrierCode": "NK",
                                            "FlightNumber": "253",
                                            "FlightDuration": "PT4H10M",
                                            "AirlineType": "32A",
                                            "CabinClass": "ECONOMY",
                                            "FlightDistance": {
                                                "UnitCount": "2675.77",
                                                "Unit": "KM"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        "FlightPrice": {
                            "BaseRate": {
                                "Value": "520.88",
                                "Currency": "USD"
                            },
                            "TaxesAndFees": {
                                "Value": "121.26",
                                "Currency": "USD"
                            },
                            "TotalRate": {
                                "Value": "642.14",
                                "Currency": "USD"
                            }
                        },
                        "TicketsRemaining": "10"
                    },
                    "HotelReferenceIndex": {
                        "CheckInDate": "2018-08-10",
                        "CheckOutDate": "2018-08-12",
                        "NumberOfRooms": "1",
                        "NumberOfNights": "2",
                        "HotelIndex": "2",
                        "HotelID": "256",
                        "Name": "The Grand Orlando Resort at Celebration",
                        "Image_url_1": "./img/hotel/hotel2.jpeg",
                        "Image_url_2": "./img/hotel_in/inside1.jpeg",
                        "Image_url_3": "./img/hotel_in/inside5.jpeg",
                        "Image_url_4": "./img/hotel_in/inside8.jpeg",
                        "Image_url_5": "./img/hotel_in/inside7.jpeg",
                        "Location": {
                            "StreetAddress": "2900 Parkway Blvd",
                            "City": "Kissimmee",
                            "Province": "FL",
                            "GeoLocation": {
                                "Latitude": "28.33647",
                                "Longitude": "-81.534655"
                            },
                            "PostalCode": "34747"
                        },
                        "Distance": {
                            "UnitCount": "27.41",
                            "Unit": "km"
                        },
                        "Description": "This 23-acre resort is 1.5 miles (2.4 kilometers) from <b>Walt Disney World</b> Resort and across from Celebration with its restaurants, shops, cafes and theaters.",
                        "StarRating": "3.5",
                        "TravelerReviewRating": "3.6",
                        "TravelerReviewCount": "6495",
                        "OverviewThumbnail": "https://images.trvl-media.com/hotels/1000000/10000/300/256/1d1e62a0_t.jpg",
                        "RoomRatePlanDescription": "Deluxe Room, 2 Double Beds",
                        "RoomTypeID": "211800290",
                        "RatePlanID": "232006864",
                        "RateRuleID": "206052422",
                        "HotelPrice": {
                            "BaseRate": {
                                "Value": "210.20",
                                "Currency": "USD"
                            },
                            "TaxRcAndFees": {
                                "Value": "20.42",
                                "Currency": "USD"
                            },
                            "TotalRate": {
                                "Value": "230.62",
                                "Currency": "USD"
                            }
                        },
                        "Promotion": {
                            "Amount": {
                                "Value": "72.08",
                                "Currency": "USD"
                            },
                            "Description": "Book now and save"
                        },
                        "RoomsRemaining": "100"
                    },
                    "PackagePrice": {
                        "TotalPrice": {
                            "Value": "782.32",
                            "Currency": "USD"
                        },
                        "TotalSavings": {
                            "Value": "90.44",
                            "Currency": "USD"
                        }
                    },
                    "BrandedDealsMarker": {
                        "BrandedDealsType": [
                            "HotelDeal",
                            "FreeHotelNights",
                            "HotelSavingsFreeNights"
                        ]
                    },
                    "DetailsUrl": "https://www.expedia.com/go/udp?ProductType=multiitem&Meta=1&langid=1033&NumRoom=1&NumAdult=R1:2&DepartureTLA=L1:SEA|L2:MCO&ArrivalTLA=L1:MCO|L2:SEA&DepartureDate=L1:2018-08-09|L2:2018-08-12&HotelID=256&RatePlanCode=232006864&RoomTypeCode=211800290&InventoryType=1&CheckInDate=2018-08-10&CheckOutDate=2018-08-12&AirTokens=AQohCh8IzpYBEgM3MjYYkgEgzHAogOyTATDm75MBOFRAAFgBCkQKIAjOlgESAzQwNxjMcCCjsQEo0oeUATD2iJQBOFVAAFgBCiAIzpYBEgMyNTMYo7EBIJIBKLqKlAEwtIyUAThVQABYARIKCAEQARgBKgJOSxgCIgQIARACKAIoAygEMAI&Price=732.32&CurrencyCode=USD"
                },
                {
                    "purpose": "Business",
                    "budget": "750",
                    "FlightReferenceIndex": {
                        "FlightIndex": "1",
                        "FlightItinerary": {
                            "FlightLeg": [{
                                "FlightLegIndex": "1",
                                "FlightDuration": "PT8H6M",
                                "FlightSegment": [{
                                    "FlightSegmentIndex": "1",
                                    "DepartureAirportCode": "SEA",
                                    "ArrivalAirportCode": "LAS",
                                    "DepartureDateTime": "2018-08-09T20:12:00",
                                    "ArrivalDateTime": "2018-08-09T22:38:00",
                                    "CarrierCode": "NK",
                                    "FlightNumber": "726",
                                    "FlightDuration": "PT2H26M",
                                    "AirlineType": "32A",
                                    "CabinClass": "ECONOMY",
                                    "FlightDistance": {
                                        "UnitCount": "1407.87",
                                        "Unit": "KM"
                                    }
                                },
                                    {
                                        "FlightSegmentIndex": "2",
                                        "DepartureAirportCode": "LAS",
                                        "ArrivalAirportCode": "MCO",
                                        "DepartureDateTime": "2018-08-09T23:40:00",
                                        "ArrivalDateTime": "2018-08-10T07:18:00",
                                        "CarrierCode": "NK",
                                        "FlightNumber": "726",
                                        "FlightDuration": "PT4H38M",
                                        "AirlineType": "32A",
                                        "CabinClass": "ECONOMY",
                                        "FlightDistance": {
                                            "UnitCount": "3256.62",
                                            "Unit": "KM"
                                        }
                                    }
                                ]
                            },
                                {
                                    "FlightLegIndex": "2",
                                    "FlightDuration": "PT10H10M",
                                    "FlightSegment": [{
                                        "FlightSegmentIndex": "1",
                                        "DepartureAirportCode": "MCO",
                                        "ArrivalAirportCode": "DFW",
                                        "DepartureDateTime": "2018-08-12T10:10:00",
                                        "ArrivalDateTime": "2018-08-12T11:54:00",
                                        "CarrierCode": "NK",
                                        "FlightNumber": "407",
                                        "FlightDuration": "PT2H44M",
                                        "AirlineType": "32A",
                                        "CabinClass": "ECONOMY",
                                        "FlightDistance": {
                                            "UnitCount": "1568.77",
                                            "Unit": "KM"
                                        }
                                    },
                                        {
                                            "FlightSegmentIndex": "2",
                                            "DepartureAirportCode": "DFW",
                                            "ArrivalAirportCode": "SEA",
                                            "DepartureDateTime": "2018-08-12T15:10:00",
                                            "ArrivalDateTime": "2018-08-12T17:20:00",
                                            "CarrierCode": "NK",
                                            "FlightNumber": "253",
                                            "FlightDuration": "PT4H10M",
                                            "AirlineType": "32A",
                                            "CabinClass": "ECONOMY",
                                            "FlightDistance": {
                                                "UnitCount": "2675.77",
                                                "Unit": "KM"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        "FlightPrice": {
                            "BaseRate": {
                                "Value": "520.88",
                                "Currency": "USD"
                            },
                            "TaxesAndFees": {
                                "Value": "121.26",
                                "Currency": "USD"
                            },
                            "TotalRate": {
                                "Value": "642.14",
                                "Currency": "USD"
                            }
                        },
                        "TicketsRemaining": "10"
                    },
                    "HotelReferenceIndex": {
                        "CheckInDate": "2018-08-10",
                        "CheckOutDate": "2018-08-12",
                        "NumberOfRooms": "1",
                        "NumberOfNights": "2",
                        "HotelIndex": "3",
                        "HotelID": "470869",
                        "Name": "Monumental Movieland Hotel Orlando",
                        "Image_url_1": "./img/hotel/hotel5.jpeg",
                        "Image_url_2": "./img/hotel_in/inside5.jpeg",
                        "Image_url_3": "./img/hotel_in/inside6.jpeg",
                        "Image_url_4": "./img/hotel_in/inside7.jpeg",
                        "Image_url_5": "./img/hotel_in/inside8.jpeg",
                        "Location": {
                            "StreetAddress": "6233 International Drive",
                            "City": "Orlando",
                            "Province": "FL",
                            "GeoLocation": {
                                "Latitude": "28.461766",
                                "Longitude": "-81.466118"
                            },
                            "PostalCode": "32819"
                        },
                        "Distance": {
                            "UnitCount": "12.28",
                            "Unit": "km"
                        },
                        "Description": "Located in Sand Lake, this hotel is within 2 mi (3 km) of iFLY Orlando, <b>Universal Studios Florida</b>™, and <b>Universal’s Islands of Adventure</b>™. I-Drive 360 and Orange County Convention Center are also within 3 mi (5 km). ",
                        "StarRating": "3.0",
                        "TravelerReviewRating": "3.2",
                        "TravelerReviewCount": "2014",
                        "OverviewThumbnail": "https://images.trvl-media.com/hotels/1000000/480000/470900/470869/470869_66_t.jpg",
                        "RoomRatePlanDescription": "Standard Double Room, 2 Double Beds",
                        "RoomTypeID": "7375",
                        "RatePlanID": "35553",
                        "RateRuleID": "55902",
                        "HotelPrice": {
                            "BaseRate": {
                                "Value": "109.98",
                                "Currency": "USD"
                            },
                            "TaxRcAndFees": {
                                "Value": "15.74",
                                "Currency": "USD"
                            },
                            "TotalRate": {
                                "Value": "125.72",
                                "Currency": "USD"
                            }
                        },
                        "RoomsRemaining": "1"
                    },
                    "PackagePrice": {
                        "TotalPrice": {
                            "Value": "732.66",
                            "Currency": "USD"
                        },
                        "TotalSavings": {
                            "Value": "35.20",
                            "Currency": "USD"
                        }
                    },
                    "DetailsUrl": "https://www.expedia.com/go/udp?ProductType=multiitem&Meta=1&langid=1033&NumRoom=1&NumAdult=R1:2&DepartureTLA=L1:SEA|L2:MCO&ArrivalTLA=L1:MCO|L2:SEA&DepartureDate=L1:2018-08-09|L2:2018-08-12&HotelID=470869&RatePlanCode=35553&RoomTypeCode=7375&InventoryType=1&CheckInDate=2018-08-10&CheckOutDate=2018-08-12&AirTokens=AQohCh8IzpYBEgM3MjYYkgEgzHAogOyTATDm75MBOFRAAFgBCkQKIAjOlgESAzQwNxjMcCCjsQEo0oeUATD2iJQBOFVAAFgBCiAIzpYBEgMyNTMYo7EBIJIBKLqKlAEwtIyUAThVQABYARIKCAEQARgBKgJOSxgCIgQIARACKAIoAygEMAI&Price=732.66&CurrencyCode=USD"
                }
            ]
        }
    }
    $scope.choices=["Business", "Educational", "Holidays", "Honeymoon","Other"]
    $scope.select_text = "Please choose Purpose of visit" ;
    $scope.purposeChange=function(value) {
        $scope.progress=true;
        if(value!=undefined){
            $scope.purposeLink=true;
            $scope.purposeContentMain=value;
        }
        $scope.pWidth=33;
$scope.select_text = "Please choose preferred time of travel" ;

        $scope.backLink=true;
        if (value == "Business") {
            $scope.purposeModel = false;
            $scope.activitiesModel = true;
            $scope.gangModel = false;
            $scope.choices = ["6am-12pm", "12pm-6pm", "6pm-12am","12am-6am"]

        }

        if (value == "Educational") {
            $scope.purposeModel = false;
            $scope.activitiesModel = true;
            $scope.gangModel = false;
            $scope.choices = ["6am-12pm", "12pm-6pm", "6pm-12am","12am-6am"]
        }
        if (value == "Holidays") {
            $scope.purposeModel = false;
            $scope.activitiesModel = true;
            $scope.gangModel = false;
            $scope.choices = ["6am-12pm", "12pm-6pm", "6pm-12am","12am-6am"]
        }
        if (value == "Honeymoon") {
            $scope.purposeModel = false;
            $scope.activitiesModel = true;
            $scope.gangModel = false;
            $scope.choices = ["6am-12pm", "12pm-6pm", "6pm-12am","12am-6am"]

        }
    }
    $scope.makeProgress=function(){
        $scope.pWidth=100;
    }
    $scope.activitiesChange=function(value){
        if(value!=undefined){
            $scope.activitiesLink=true;
            $scope.activitiesContentMain=value;
        }

        $scope.progress=true;
        $scope.pWidth=67;
        $scope.select_text = "Expected Budget" ;
        $scope.purposeModel = false;
        $scope.activitiesModel = false;
        $scope.gangModel = true;
        $scope.backLink=false;
        $scope.choices=["50-100$","100-200$", "200-300$", "300-400$", "I dont mind"]
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
    $scope.sliderChange=function(){
        debugger;
        $scope.gangContentMain=$("#info").val();
    }

    $scope.gangChange=function(gangValue){
        $scope.progress=true;
        if(gangValue!=undefined){
            $scope.pWidth=100;
            $scope.proceedShow=false;
            $scope.gangLink=true;
            $scope.gangContentMain=gangValue;
            setTimeout(function(){angular.element('#proceed').triggerHandler('click');},2000);
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
            $scope.mainPackageList=[];
            localStorage.setItem("mainListNew","");
            $scope.mainPackageList=[];
            $rootScope.mainDataColl=[];
            angular.forEach($scope.packageMainData.PackageSearchResultList, function(value, key) {
                $scope.mainPackageList=[];
                $rootScope.mainDataColl=[];
                angular.forEach(value, function(val, key1) {
                    $scope.budgetSelected = localStorage.getItem('sliderval');
                    $scope.purposeContentMain;
                    $scope.activitiesContentMain;
                    if(val.purpose == $scope.purposeContentMain && $scope.budgetSelected>=val.budget){
                        debugger
                        $scope.mainPackageList.push(val);
                        $rootScope.mainDataColl = $scope.mainPackageList;
                        localStorage.setItem("mainListNew",JSON.stringify($scope.mainPackageList));

                    }


                });
            });
console.log("mainList",$scope.mainPackageList);
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

    $( "#slider" ).slider({
        min: 100,
        max:1000,
        step:100,
        change: function( event, ui ) {
            //console.log(ui.value);
            $("#info").text( ui.value+'$');
            $("#info1").text( ui.value+'$');
            sliderVal=$("#info1").val();
            localStorage.setItem("sliderval", ui.value);
            $scope.gangChange(sliderVal);
            $scope.gangLink=true;
            $scope.pWidth=100;
            $scope.gangContentMain=$("#info").text( ui.value+'$');
        }
    });


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

