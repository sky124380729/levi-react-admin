import React, { FC, useState } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout as Wrapper, Menu } from 'antd'
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
                <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
                    <Menu.Item key='1'>nav 1</Menu.Item>
                    <Menu.SubMenu key='2' title='nav 2'>
                        <Menu.Item key='2-1'>nav 2-1</Menu.Item>
                        <Menu.Item key='2-2'>nav 2-2</Menu.Item>
                    </Menu.SubMenu>
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
