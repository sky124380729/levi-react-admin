import React, { FC, useState } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, RocketOutlined } from '@ant-design/icons'
import { Layout as Wrapper, Menu, Breadcrumb } from 'antd'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import logo from './logo.png'
import './style.scss'
import routes, { IRoute } from '../routes'

const generateRoutes = (routes: IRoute[]) => {
    return routes.map((route: IRoute, index: number) => {
        if (route.children && route.children.length) {
            return (
                <Menu.SubMenu title={route.title} icon={route.icon && <RocketOutlined />} key={index}>
                    {generateRoutes(route.children)}
                </Menu.SubMenu>
            )
        } else {
            return (
                <Menu.Item key={index}>
                    <Link to={route.path}>
                        {route.icon && <RocketOutlined />}
                        <span>{route.title}</span>
                    </Link>
                </Menu.Item>
            )
        }
    })
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

const Layout: FC = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Wrapper className='levi-layout'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className='levi-layout-logo'>
                    <img src={logo} alt='' />
                </div>
                <Menu
                    style={{
                        overflow: 'auto',
                        height: 'calc(100vh - 56px)'
                    }}
                    theme='dark'
                    mode='inline'
                    defaultSelectedKeys={['1']}
                >
                    {generateRoutes(routes)}
                    {/* <Menu.Item key='1'>中央控制台</Menu.Item>
                    <Menu.SubMenu icon={<UserOutlined />} key='2' title='nav 2'>
                        <Menu.Item key='2-1'>
                            <Link to='/xxx'>nav 2-1</Link>
                        </Menu.Item>
                        <Menu.Item key='2-2'>
                            <Link to='/yyy'>nav 2-2</Link>
                        </Menu.Item>
                        <Menu.Item key='2-3'>
                            <Link to='/'>nav 2-2</Link>
                        </Menu.Item>
                        <Menu.Item key='2-4'>
                            <Link to='/xxx/kkk'>nav 2-4</Link>
                        </Menu.Item>
                        <Menu.Item key='2-5'>nav 2-5</Menu.Item>
                        <Menu.Item key='2-6'>nav 2-6</Menu.Item>
                        <Menu.Item key='2-7'>nav 2-7</Menu.Item>
                        <Menu.Item key='2-8'>nav 2-8</Menu.Item>
                        <Menu.Item key='2-9'>nav 2-9</Menu.Item>
                        <Menu.Item key='2-10'>nav 2-10</Menu.Item>
                        <Menu.Item key='2-11'>nav 2-11</Menu.Item>
                        <Menu.Item key='2-12'>nav 2-12</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key='3'>nav 3</Menu.Item> */}
                </Menu>
            </Sider>
            <Wrapper className='site-layout'>
                <Header className='site-layout-background' style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => {
                            setCollapsed(!collapsed)
                        }
                    })}
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content
                    className='site-layout-background'
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280
                    }}
                >
                    <Switch>
                        <Route path='/xxx' component={About}></Route>
                        <Route path='/yyy' component={Test}></Route>
                        <Route path='/' component={None}></Route>
                    </Switch>
                </Content>
            </Wrapper>
        </Wrapper>
    )
}

export default Layout
