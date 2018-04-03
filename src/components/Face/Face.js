import React, {Component} from "react"
import "./Face.css"

class Face extends Component {
    render() {
        return (
            <div className="face">
                <h2 className="face__text one">Здесь и сейчас.</h2>
                <h2 className="face__text two">Время для живого общения.</h2>
            </div>
        );
    }
}

export default Face;