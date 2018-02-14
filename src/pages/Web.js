import React, {Component} from 'react'
import Menu from '../components/Web/Menu/Menu'
import Map from '../components/Web/Map/Map'

class Web extends Component {
    render() {
        return (
            <div className="page">
                <Map/>
                <Menu/>
            </div>
        );
    }
}

export default Web;