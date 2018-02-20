import React, {Component} from "react"
import "./SecondLevel.css"
import GMaps from "gmaps.core"
import {addMarker} from "gmaps.markers"

class SecondLevel extends Component {
    componentDidMount() {
        const map = (new GMaps({
            div: '#map',
            lat: 55.76,
            lng: 37.64,
            zoom: 12,
            styles: [
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 100
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#C6E2FF"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#C5E3BF"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#D1D1B8"
                        }
                    ]
                }
            ]
        }));

        map.addMarker({
            lat: 55.763432,
            lng: 37.65344,
            title: 'Lima',
            // icon: "https://yadi.sk/i/bD8cG5Yl3Sbb33",
            infoWindow: {
                content: '<p>HTML Content</p>'
            }
        });
    }

    render() {
        return (
            <div id="p2" className="n_second-level">
                <div className="n_second-level__title">Предстоящие мероприятия</div>
                <div id="map" className="n_second-level__map"></div>
                {/*<a className="scrollto n_second-level__button" href="#p3"></a>*/}
            </div>
        );
    }
}

export default SecondLevel;