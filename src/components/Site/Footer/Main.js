import React, {Component} from "react"
import "./Footer.css"

class Main extends Component {
    render() {
        return (
            <div className="footer-down">
                <p className="footer-down__main">Ⓒ2018 F&F</p>
                <p className="footer-down__main dot">•</p>
                <p className="footer-down__main">Сервис для объединения людей</p>
                <p className="footer-down__main dot">•</p>
                <a className="footer-down__main link" href="/">Конфиденциальность и Условия</a>
            </div>
        );
    }
}

export default Main;