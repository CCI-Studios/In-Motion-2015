(function($) {
    $(function(){
       

        if($("#block-block-7").length > 0)
        {
            createMap();
        }

    });

    function createMap()
    {
        var location = new google.maps.LatLng(42.980968,-82.3609);
        var mapOptions = {
            zoom: 15,
            center: location,
            draggable: false,
            scrollwheel: false,
        }

        var styles = [
                          {
                            stylers:  [
                                    {
                                        saturation: -700

                                    },
                                    {
                                        gamma: 0.4
                                    }
                                ]
                          },
                          {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [
                              { lightness: 16 },
                              {color:"#ffffff"},
                              { visibility: "simplified" }
                            ]
                          },
                            {
                                "featureType": "road",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "lightness": 0, 
                                         color:"#404040"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {   
                                        color:"#ffffff",
                                        "lightness":-100
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 0
                                    }
                                ]
                            }
                         
                    ];

          google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(location);
        });
        var image = '/sites/all/themes/inmotion/images/marker.png';
    
        var map = new google.maps.Map($("#block-block-7").get(0),
                        mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            title: "In Motion"
        });

       marker.setMap(map);
       map.setOptions({styles: styles});
    }
}(jQuery));