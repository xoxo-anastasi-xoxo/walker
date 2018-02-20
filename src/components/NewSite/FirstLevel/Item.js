import React, {Component} from "react"
import "./FirstLevel.css"
import Line from "./Line";
import {connect} from "react-redux";

class Item extends Component {
    render() {
        return (
            <div className="n_first-level__left__item">
               <div  className="n_first-level__left__item__img-item">
                   <div className="n_first-level__left__item__img-item__circle"> </div>
                   <div className="n_first-level__left__item__img-item__line"> </div>

               </div>
                <p  className="n_first-level__left__item__text">{this.props.text}</p>
            </div>
        );
    }
}



export default Item;