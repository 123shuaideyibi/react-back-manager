import React, {Component} from 'react';
import './css/app.css'
import TopMenu from "./Components/Top/TopMenu";
import RightMain from "./Components/Main/RightMain";
import LeftMenu from "./Components/Left/LeftMenu";

//引入左侧导航栏

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="leftNav">
                    {/*左侧区域*/}
                    <LeftMenu/>
                </div>
                <div className="rightMain">
                    {/*顶部区域*/}
                    <TopMenu/>
                    {/*内容区域*/}
                    <RightMain/>
                </div>
            </div>
        );
    }
}

export default App;
