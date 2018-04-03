import React, {Component} from "react"
import "./SecondLevel.css"
import GMaps from "gmaps.core"
import $ from "jquery"
import "./InfoWindow.css"
import {connect} from "react-redux";
import moment from "moment/moment";

class SecondLevel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 0,
            currentName: "",
            currentDescription: "",
            currentImg: "/img/velo.png",
            currentDate: 0,
            list: [],
            num: false,
            map: undefined
        };
    }


    componentWillMount() {
        // скачать от огонька мини-дату и положить в стор
        // fetch('http://walkerapp.ru:8080/events/get_between_public?min_lat=-200&max_lat=200&min_lon=-200&max_lon=200', {
        //     method: 'GET'
        // }).then(function (response) {
        //     return response.json();
        // }).then((value => {
        //     this.props.uploadEvents.call(this, value.pojoEvents);
        //     // console.log(value.pojoEvents);
        //     this.setState.call(this, {num: false});
        // }));
    }

    componentWillUpdate() {
        // if (this.state.map)
    //     for (let el of this.props.list) {
    //     // let elem;
    //     // fetch('http://walkerapp.ru:8080/events/get_public?event_id=' + el.id, {
    //     //     method: 'GET'
    //     // }).then(function (response) {
    //     //     return response.json();
    //     // }).then((value => {
    //     //     elem = value;
    //     // }));
    //
    //     let content = '<div id="iw-container">' +
    //         '<div id="top">' +
    //         '<img id="pic" src="' + el.pathToThePicture
    //         + '" alt=' + el.name + ' />' +
    //         '</div>' +
    //         '<div id="bottom">' +
    //         '<p id="name">' + el.name + '</p>' +
    //         '<p id="date">' + moment(el.date).format("lll") + '</p>' +
    //         '</div>' +
    //         '</div>';
    //
    //     this.state.map.addMarker({
    //         lat: el.latitude,
    //         lng: el.longitude,
    //         title: this.state.currentName,
    //         icon: el.type ? "/img/Marker-1.png" : "/img/Marker.png",
    //         infoWindow: {
    //             content: content,
    //             maxWidth: 134
    //         },
    //         click: (function () {
    //             setTimeout((function () {
    //                 this.setState({key: Math.random()});
    //             }).bind(this), 2);
    //         }).bind(this)
    //     });
    // }
    }

    componentDidUpdate() {
        let iwOuter = $('.gm-style-iw');
        if (iwOuter) {
            let iwBackground = iwOuter.prev();
            // Remove the background shadow DIV
            iwBackground.children(':nth-child(2)').css({'display': 'none'});
            // Remove the white background DIV
            iwBackground.children(':nth-child(4)').css({'display': 'none'});

            // Moves the infowindow 115px to the right.
            iwOuter.parent().parent().css({left: '0'});

            // Changes the desired tail shadow color.
            iwBackground.children(':nth-child(3)').find('div').children().css({
                'background-color': '#ededed',
                'box-shadow': '0 1px 6px rgba(178, 178, 178, 0.6)',
                'border-left': '1px solid rgba(87, 89, 87, 0.6)',
                'border-right': '1px solid rgba(87, 89, 87, 0.6)',
                'z-index': '1'
            });

            let iwCloseBtn = iwOuter.next();
            iwCloseBtn.css({
                right: '40px', top: '20px', // button repositioning
                background: 'none',
                'border-radius': '13px', // circular effect
            });
        }
    }

    componentDidMount() {
            let map = (new GMaps({
                div: '#map',
                lat: 55.76,
                lng: 37.64,
                zoom: 12,
                styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.locality",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "saturation": "-65"
                            },
                            {
                                "lightness": "45"
                            },
                            {
                                "gamma": "1.78"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "saturation": "-33"
                            },
                            {
                                "lightness": "22"
                            },
                            {
                                "gamma": "2.08"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.airport",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "gamma": "2.08"
                            },
                            {
                                "hue": "#ffa200"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.airport",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.rail",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.rail",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "saturation": "-55"
                            },
                            {
                                "lightness": "-2"
                            },
                            {
                                "gamma": "1.88"
                            },
                            {
                                "hue": "#ffab00"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#bbd9e5"
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    }
                ]
            }));

        for (let el of this.props.list) {
            // let elem;
            // fetch('http://walkerapp.ru:8080/events/get_public?event_id=' + el.id, {
            //     method: 'GET'
            // }).then(function (response) {
            //     return response.json();
            // }).then((value => {
            //     elem = value;
            // }));

            let content = '<div id="iw-container">' +
                '<div id="top">' +
                '<img id="pic" src="' + el.img
                + '" alt=' + el.name + ' />' +
                '</div>' +
                '<div id="bottom">' +
                '<p id="name">' + el.name + '</p>' +
                '<p id="date">' + moment(el.date).format("lll") + '</p>' +
                '</div>' +
                '</div>';

            map.addMarker({
                lat: el.lat,
                lng: el.lng,
                title: el.name,
                icon: el.type ? "/img/Marker-1.png" : "/img/Marker.png",
                infoWindow: {
                    content: content,
                    maxWidth: 134
                },
                click: (function () {
                    setTimeout((function () {
                        this.setState({key: Math.random()});
                    }).bind(this), 2);
                }).bind(this)
            });
        }
    }

    changeInfoWindow() {
        this.setState({key: Math.random()});
    }


    render() {
        return (
            <div id="p2" className="n_second-level">
                <div className="n_second-level__title">Предстоящие мероприятия</div>
                <div id="map" className="n_second-level__map"
                     onLoad={this.changeInfoWindow.bind(this)}
                     onFocus={this.changeInfoWindow.bind(this)}
                     onMouseDown={this.changeInfoWindow.bind(this)}
                     onClick={this.changeInfoWindow.bind(this)}> </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    list: state.main_info.pubEvents
});


const mapDispatchToProps = dispatch => ({
    changeAnchor: (scroll, height) => dispatch({
        type: 'CHANGE_ANCHOR',
        scrol: scroll,
        height: height
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondLevel);