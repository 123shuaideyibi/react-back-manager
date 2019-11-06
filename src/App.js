import React, {Component} from 'react';
import './css/app.css'
import Portrait from './Components/Left/Portrait'
import LeftMenu from './Components/Left/LeftMenu'
import TopMenu from "./Components/Top/TopMenu";

//引入左侧导航栏

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="leftNav">
                    {/*头像*/}
                    <Portrait/>
                    {/*左侧导航栏*/}
                    <LeftMenu/>
                </div>
                <div className="rightMain">
                    {/*顶部导航*/}
                    <TopMenu/>
                    <span>aaa</span>
                </div>
            </div>
        );
    }
}

export default App;
