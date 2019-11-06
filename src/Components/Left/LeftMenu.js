import React, {Component} from 'react';
import Portrait from "./Portrait";
import VerticalMenu from "./VerticalMenu";

class LeftMenu extends Component {
    render() {
        return (
            <div>
                {/*头像组件*/}
                <Portrait/>
                {/*垂直导航*/}
                <VerticalMenu/>
            </div>
        );
    }
}

export default LeftMenu;
