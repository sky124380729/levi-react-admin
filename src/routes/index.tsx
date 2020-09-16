import React from 'react'
import Platform from '../views/platform'
import Settings from '../views/Settings'

const User = (): JSX.Element => <div>User</div>
const Role = (): JSX.Element => <div>Role</div>
const Test = (): JSX.Element => <div>Test</div>

export interface IRoute {
    /** 路径 */
    path: string
    /** 重定向 */
    redirect?: string
    /** 标题 */
    title: string
    /** 图标 */
    icon?: string
    /** 组件 */
    component: () => JSX.Element
    /** 子路由 */
    children?: IRoute[]
}

const routes: IRoute[] = [
    { path: '/platform', title: '中央控制台', icon: 'rocket', component: Platform, redirect: '/platform/index' },
    { path: '/test', title: '测试', icon: 'rocket', component: Test, redirect: '/platform/index' },
    {
        path: '/settings',
        title: '系统设置',
        icon: 'rocket',
        component: Settings,
        children: [
            { path: 'user', title: '用户管理', component: User },
            { path: 'role', title: '角色管理', component: Role }
        ]
    }
]

export default routes
