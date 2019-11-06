import React, {Component} from 'react';
//引入antd组件库
import {Menu, Icon} from 'antd'
import 'antd/dist/antd.css'
import '../../css/Left/verticalmenu.css'

const {SubMenu} = Menu;

class VerticalMenu extends Component {
    render() {
        return (
            <div className="verticalmenu">
                {/*左侧菜单栏*/}
                <Menu
                    theme="dark"
                    mode="inline">
                    <SubMenu
                        key="users"
                        title={
                            <span>
                                <Icon type="user"/>
                                <span>用户管理</span>
                            </span>
                        }>
                        <Menu.Item>增加用户</Menu.Item>
                        <Menu.Item>删除用户</Menu.Item>
                        <Menu.Item>修改用户</Menu.Item>
                        <Menu.Item>查找用户</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="settings"
                        title={
                            <span>
                                <Icon type="setting"/>
                                <span>设置管理</span>
                             </span>
                        }>
                        <Menu.Item>设置1</Menu.Item>
                        <Menu.Item>设置2</Menu.Item>
                        <Menu.Item>设置3</Menu.Item>
                        <Menu.Item>设置4</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default VerticalMenu;
