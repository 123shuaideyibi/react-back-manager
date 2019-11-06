import React, {Component} from 'react';
import '../../css/portrait.css'

class Portrait extends Component {
    render() {
        return (
            <div className="portrait">
                <img
                    className="portrait-image"
                    src={require('../../assets/portrait.png')}
                    alt="用户头像"/>
                <span className="portrait-name">君莫笑</span>
            </div>
        );
    }
}

export default Portrait;
