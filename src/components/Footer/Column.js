import React, {Component} from "react"
import "./Footer.css"

class Column extends Component {
    render() {
        return (
            <div className="footer-up__column">
                <div className="footer-up__column__title">{this.props.item.title}</div>
                {
                    this.props.item.list.map((key, index) => {
                        if (this.props.item.isLink)
                            return <a className="footer-up__column__item link"
                                      href={key.href} key={index}>{key.title}</a>;
                        else return <div className="footer-up__column__item" key={index}>{key.title}</div>
                    })
                }
            </div>
        );
    }
}

export default Column;