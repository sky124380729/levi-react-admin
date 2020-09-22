import Platform from '../views/platform'
import Test from '../views/test'
import User from '../views/settings/user'
import Role from '../views/settings/role'

export interface IRoute {
    /* UUID */
    id: string
    /** 路径 */
    path: string
    /** 重定向 */
    redirect?: string
    /** 标题 */
    title: string
    /** 图标 */
    icon?: string
    /** 组件 */
    // component?: FC | (() => JSX.Element)
    component?: any
    /** 子路由 */
    children?: IRoute[]
}

// 路由配置项
const routes: IRoute[] = [
    { id: 'a7d20965-884d-40ae-bd78-08827741023e', path: '/platform', title: '中央控制台', icon: 'rocket', component: Platform },
    { id: '60c122da-0590-43f9-8067-cc11139226d6', path: '/test', title: '测试', icon: 'rocket', component: Test },
    {
        id: '495e5831-9e8d-4d5a-8bda-4d2be4991ea6',
        path: '/settings',
        title: '系统设置',
        icon: 'rocket',
        children: [
            { id: 'e4f7cdea-530b-426c-b85d-1d87b40e6562', path: 'user', title: '用户管理', component: User },
            { id: '88e63792-3d31-4bb7-a0a5-a1dc82403c04', path: 'role', title: '角色管理', component: Role }
        ]
    }
]

export default routes
