import React, { FC, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { MenuUnfoldOutlined, MenuFoldOutlined, MenuOutlined, DownOutlined } from '@ant-design/icons'
import { Layout as Wrapper, Menu, Breadcrumb, Affix, Avatar, Dropdown } from 'antd'
import { Link, Route, Switch, Redirect, RouteProps } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Location } from 'history'
import routes, { IRoute } from '../routes'
import './style.scss'

const Welcome = (): JSX.Element => {
    return <div>Welcome</div>
}

const generateMenus = (routes: IRoute[], fullPath = '') => {
    return routes.map((route: IRoute) => {
        const { id, title, path, children, icon } = route
        const uri = '/app' + (fullPath + '/' + path).slice(1)
        if (children && children.length) {
            return (
                <Menu.SubMenu title={title} icon={icon && <MenuOutlined />} key={id}>
                    {generateMenus(children, fullPath + '/' + path)}
                </Menu.SubMenu>
            )
        } else {
            return (
                <Menu.Item key={id}>
                    <Link to={uri}>
                        {/* {route.icon && <CodeSandboxOutlined />} */}
                        <MenuOutlined />
                        <span>{title}</span>
                    </Link>
                </Menu.Item>
            )
        }
    })
}

const generateRoutes = (routes: IRoute[], props: RouteProps) => {
    const createRoute = (routes: IRoute[], fullPath = ''): any => {
        return routes.map((route: IRoute) => {
            const { id, path, children, component } = route
            const uri = '/app' + (fullPath + '/' + path).slice(1)
            if (children && children.length) {
                return createRoute(children, fullPath + '/' + path)
            } else {
                return <Route key={id} path={uri} component={component}></Route>
            }
        })
    }
    return (
        <TransitionGroup>
            <CSSTransition key={props.location?.pathname} classNames='fade-in-linear' timeout={300}>
                <Switch>
                    {/* 欢迎页 */}
                    <Route path='/app' exact component={Welcome}></Route>
                    {/* 动态路由表 */}
                    {createRoute(routes)}
                    {/* 未匹配到选项重定向 */}
                    <Route render={() => <Redirect to='/404' push />} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

// 处理面包屑导航的函数
const generateBreadcrumb = (location: Location, routes: IRoute[]): JSX.Element[] => {
    const breadList: JSX.Element[] = []
    const names = location.pathname.split('/').slice(1)
    names.reduce((prev: IRoute[], curr: string) => {
        prev.forEach((item: IRoute) => {
            const path = item.path.replace('/', '')
            if (path === curr) {
                breadList.push(<Breadcrumb.Item key={item.id}>{item.title}</Breadcrumb.Item>)
                item.children && item.children.length && (prev = item.children)
            }
        })
        return prev
    }, routes)
    return breadList
}

// 获取当前菜单路由对应的id
const getRouteKeys = (location: Location, routes: IRoute[]): string[] => {
    const ids: string[] = []
    const names = location.pathname.split('/').slice(1)
    names.reduce((prev: IRoute[], curr: string) => {
        prev.forEach((item: IRoute) => {
            const path = item.path.replace('/', '')
            if (path === curr) {
                ids.push(item.id)
                item.children && item.children.length && (prev = item.children)
            }
        })
        return prev
    }, routes)
    return ids
}

const { Header, Sider, Content } = Wrapper

const Layout: FC = (props: any) => {
    const activeKeys = props.location ? getRouteKeys(props.location, routes) : []
    const [collapsed, setCollapsed] = useState(false)
    const [openKeys, setOpenKeys] = useState(activeKeys)
    // 是否已登录，未登录跳转到登录页
    const isLoggedIn = Cookies.get('token')
    const openMenu = (v: any) => {
        setOpenKeys(v)
    }
    // 路由变化的时候回到顶部
    const pathname = props.location && props.location.pathname
    useEffect(() => {
        window.scrollTo({})
    }, [pathname])
    const changePwd = () => {
        console.log('呵呵')
    }
    const logout = () => {
        // console.log('')
        Cookies.remove('token')
        props.history.push('/login')
    }
    const menu = (
        <Menu>
            <Menu.Item
                onClick={() => {
                    changePwd()
                }}
            >
                修改密码
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
                onClick={() => {
                    logout()
                }}
            >
                退出登录
            </Menu.Item>
        </Menu>
    )
    return (
        <>
            {!isLoggedIn && <Redirect to='/login'></Redirect>}
            <Wrapper className='levi-layout'>
                <Sider className='levi-aside' trigger={null} collapsible collapsed={collapsed}>
                    <div className='levi-aside__logo'>
                        <img src={require('./logo.png')} alt='' />
                    </div>
                    <Menu className='levi-aside__menu' theme='dark' mode='inline' onOpenChange={openMenu} selectedKeys={activeKeys} openKeys={openKeys}>
                        {generateMenus(routes)}
                    </Menu>
                </Sider>

                <Wrapper className='levi-section'>
                    <Affix>
                        <Header className='levi-section__header'>
                            <div className='header__left'>
                                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: () => {
                                        setCollapsed(!collapsed)
                                    }
                                })}
                                <Breadcrumb>
                                    <Breadcrumb.Item>
                                        <Link to={'/app/platform'}>首页</Link>
                                    </Breadcrumb.Item>
                                    {props.location && generateBreadcrumb(props.location, routes)}
                                </Breadcrumb>
                            </div>
                            <div className='header__right'>
                                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                                <span className='userName'>Levi</span>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <a
                                        className='ant-dropdown-link'
                                        onClick={(e) => {
                                            console.log(e)
                                        }}
                                    >
                                        个人中心 <DownOutlined />
                                    </a>
                                </Dropdown>
                            </div>
                        </Header>
                    </Affix>
                    <Content className='levi-section__content'>{generateRoutes(routes, props)}</Content>
                </Wrapper>
            </Wrapper>
        </>
    )
}

export default Layout
