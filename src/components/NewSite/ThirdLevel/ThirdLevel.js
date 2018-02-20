import React, {Component} from "react"
import "./ThirdLevel.css"
import Footer from "../Footer/Footer"

class ThirdLevel extends Component {
    render() {
        return (
            <div id="p3" className="n_third-level">
                <div  className="n_third-level__inner">
                    <div  className="n_third-level__inner__left">
                        <p className="n_third-level__inner__left__text">Зарегистрируйтесь прямо сейчас!</p>
                        <a className="n_third-level__inner__left__button" href="/login">Попробовать</a>
                        <p className="n_third-level__inner__left__text">или</p>
                        <div className="n_third-level__inner__left__download-buttons">
                            <a className="n_third-level__inner__left__download-buttons__ios" href="/"></a>
                            <a className="n_third-level__inner__left__download-buttons__android" href="/"> </a>
                        </div>
                    </div>
                    <div  className="n_third-level__inner__right">
                        <div className="n_third-level__inner__right__phone-1"> </div>
                        <div className="n_third-level__inner__right__phone-2"> </div>
                    </div>
                </div>
                <Footer/>

                {/*<a className="scrollto n_third-level__button" href="#p0"></a>*/}
            </div>
        );
    }
}

export default ThirdLevel;