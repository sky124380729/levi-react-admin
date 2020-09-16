import React, { FC, useState } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, MenuOutlined } from '@ant-design/icons'
import { Layout as Wrapper, Menu, Breadcrumb } from 'antd'
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'
import logo from './logo.png'
import './style.scss'
import routes, { IRoute } from '../routes'

const generateMenus = (routes: IRoute[], path = '', code = '') => {
    return routes.map((route: IRoute, index: number) => {
        const uri = (path + '/' + route.path).slice(1)
        const key = (code + '-' + index.toString()).slice(1)
        if (route.children && route.children.length) {
            return (
                <Menu.SubMenu title={route.title} icon={route.icon && <MenuOutlined />} key={key}>
                    {generateMenus(route.children, path + '/' + route.path, code + '-' + index.toString())}
                </Menu.SubMenu>
            )
        } else {
            return (
                <Menu.Item key={key}>
                    <Link to={uri}>
                        {/* {route.icon && <CodeSandboxOutlined />} */}
                        <MenuOutlined />
                        <span>{route.title}</span>
                    </Link>
                </Menu.Item>
            )
        }
    })
}
const generateRoutes = (routes: IRoute[]) => {
    const createRoute = (routes: IRoute[], path = '', code = ''): any => {
        return routes.map((route, index) => {
            const uri = (path + '/' + route.path).slice(1)
            const key = (code + '-' + index.toString()).slice(1)
            if (route.children && route.children.length) {
                return createRoute(route.children, path + '/' + route.path, code + '-' + index.toString())
            } else {
                // return (
                //     <Route key={key} path={uri}>
                //         {route.redirect ? <Redirect to={route.redirect} /> : <route.component></route.component>}
                //     </Route>
                // )
                return <Route key={key} path={uri} component={route.component}></Route>
            }
        })
    }
    return (
        <Switch>
            {createRoute(routes)}
            <Redirect to='/notLogin'></Redirect>
        </Switch>
    )
    // return <Switch>{createRoute(routes)}</Switch>
}

const { Header, Sider, Content } = Wrapper

const About = () => {
    const match = useRouteMatch()
    console.log(match)
    return (
        <>
            <div>About</div>
            <Route path={`${match.path}/kkk`} exact>
                kkk
            </Route>
        </>
    )
}

const Test = () => <div>Test</div>
const None = () => <div>None</div>

const Layout: FC = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Wrapper className='levi-layout'>
            <Sider className='levi-aside' trigger={null} collapsible collapsed={collapsed}>
                <div className='levi-aside__logo'>
                    <img src={logo} alt='' />
                </div>
                <Menu className='levi-aside__menu' theme='dark' mode='inline'>
                    {generateMenus(routes)}
                </Menu>
            </Sider>
            <Wrapper className='levi-section'>
                <Header className='levi-section__header' style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => {
                            setCollapsed(!collapsed)
                        }
                    })}
                    <Breadcrumb>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content className='levi-section__content'>{generateRoutes(routes)}</Content>
            </Wrapper>
        </Wrapper>
    )
}

export default Layout
