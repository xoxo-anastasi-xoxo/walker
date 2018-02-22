import React, {Component} from "react"
import "./SecondLevel.css"
import GMaps from "gmaps.core"
import {addMarker} from "gmaps.markers"
import $ from "jquery"
import "./InfoWindow.css"
import {connect} from "react-redux";

class SecondLevel extends Component {
    constructor(props) {
        super(props);
        this.state = {key: 0};
    }

    changeInfoWindow() {
        this.setState({key: Math.random()});
    }

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

        for (let el of this.props.list) {
            let content = '<div id="iw-container">' +
                '<div id="top">' +
                '<img id="pic" src="/img/velo.png" alt=' + el.title + '/>' +
                '</div>' +
                '<div id="bottom">' +
                '<p id="name">' + el.name + '</p>' +
                '<p id="date">' + el.date + '</p>' +
                '</div>' +
                '</div>';
            map.addMarker({
                lat: el.lat,
                lng: el.lng,
                title: el.name,
                icon: el.type ? "/img/Marker-1.png" : "/img/Marker.png",
                infoWindow: {
                    content: content,
                    maxWidth: 134,
                    load: (function (e) {
                        // this.setState({key: Math.random()});
                        // console.log(this.state)
                        alert("iw load")
                    }).bind(this)
                },
                click: (function (e) {
                    // this.setState({key: Math.random()});
                    // console.log(this.state)
                    alert("marker click")
                }).bind(this),
                mousedown: (function (e) {
                    alert("mousedown")
                }).bind(this),
                focus: (function (e) {
                    alert("focus")

                }).bind(this),
                touchStart: (function (e) {
                    alert("touchStart")

                }).bind(this),
                touchstart: (function (e) {
                    alert("touchstart")
                }).bind(this),
                touchend: (function (e) {
                    alert("touchend")
                }).bind(this),
            });
        }
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
                'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px',
                'z-index': '1'
            });

            let iwCloseBtn = iwOuter.next();
            iwCloseBtn.css({
                //opacity: '1', // by default the close button has an opacity of 0.7
                right: '40px', top: '20px', // button repositioning
                background: 'none',
                'border-radius': '13px', // circular effect
            });
        }
    }

    render() {
        return (
            <div id="p2" className="n_second-level">
                <div className="n_second-level__title">Предстоящие мероприятия</div>
                <div
                    onLoad={this.changeInfoWindow.bind(this)}
                    onFocus={this.changeInfoWindow.bind(this)}
                    onMouseDown={this.changeInfoWindow.bind(this)}
                    onClick={this.changeInfoWindow.bind(this)}
                    id="map" className="n_second-level__map"></div>
                {/*<a className="scrollto n_second-level__button" href="#p3"></a>*/}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    list: state.main_info.eventsData
});


const mapDispatchToProps = dispatch => ({
    changeAnchor: (scroll, height) => dispatch({
        type: 'CHANGE_ANCHOR',
        scrol: scroll,
        height: height
    })
});

export default connect(mapStateToProps)(SecondLevel);