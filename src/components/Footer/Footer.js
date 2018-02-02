import React, {Component} from "react"
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a className="footer__item" href="#">Техническая поддержка</a>
                <a className="footer__item" href="#">Сотрудничество</a>
                <p className="footer__item">Ⓒ2018 F&F</p>
            </div>
        );
    }
}

export default Footer;