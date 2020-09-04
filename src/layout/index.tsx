import React, { FC, useState } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout as Wrapper, Menu, Breadcrumb } from 'antd'
import logo from './logo.png'
import './style.scss'

const { Header, Sider, Content } = Wrapper

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
                        width: '200px',
                        overflow: 'auto',
                        height: 'calc(100vh - 56px)',
                        position: 'fixed',
                        left: 0
                    }}
                    theme='dark'
                    mode='inline'
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key='1'>nav 1</Menu.Item>
                    <Menu.SubMenu key='2' title='nav 2'>
                        <Menu.Item key='2-1'>nav 2-1</Menu.Item>
                        <Menu.Item key='2-2'>nav 2-2</Menu.Item>
                        <Menu.Item key='2-3'>nav 2-3</Menu.Item>
                        <Menu.Item key='2-4'>nav 2-4</Menu.Item>
                        <Menu.Item key='2-5'>nav 2-5</Menu.Item>
                        <Menu.Item key='2-6'>nav 2-6</Menu.Item>
                        <Menu.Item key='2-7'>nav 2-7</Menu.Item>
                        <Menu.Item key='2-8'>nav 2-8</Menu.Item>
                        <Menu.Item key='2-9'>nav 2-9</Menu.Item>
                        <Menu.Item key='2-10'>nav 2-10</Menu.Item>
                        <Menu.Item key='2-11'>nav 2-11</Menu.Item>
                        <Menu.Item key='2-12'>nav 2-12</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key='3'>nav 3</Menu.Item>
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
                    Content
                </Content>
            </Wrapper>
        </Wrapper>
    )
}

export default Layout
