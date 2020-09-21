import React, { useState, FC } from 'react'
import { Table, Tag, Button, Modal, Form, Input, Select, message, PageHeader } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface User {
    id: string
    name: string
    code: string
}

const data: User[] = [
    { id: '1', name: '用户1', code: 'code1' },
    { id: '2', name: '用户2', code: 'code2' },
    { id: '3', name: '用户3', code: 'code3' },
    { id: '4', name: '用户4', code: 'code4' },
    { id: '5', name: '用户5', code: 'code5' },
    { id: '6', name: '用户6', code: 'code6' },
    { id: '7', name: '用户7', code: 'code7' },
    { id: '8', name: '用户8', code: 'code8' },
    { id: '9', name: '用户9', code: 'code9' },
    { id: '10', name: '用户10', code: 'code10' },
    { id: '11', name: '用户11', code: 'code11' },
    { id: '12', name: '用户12', code: 'code12' }
]

const Platform: FC = (props) => {
    const columns: ColumnsType<User> = [
        { title: '用户', dataIndex: 'name' },
        { title: '编码', dataIndex: 'code' },
        { title: '标签', render: () => <Tag color='lime'>呵呵</Tag> },
        {
            title: '操作',
            render: (row: User) => {
                return (
                    <Button
                        type='primary'
                        onClick={() => {
                            handleClick(row.id)
                        }}
                    >
                        {row.name}
                    </Button>
                )
            }
        }
    ]
    const [visible, setVisible] = useState<boolean>(false)
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false)
    const [form] = Form.useForm()
    const handleClick = (id: string) => {
        setVisible(true)
    }
    const submitForm = () => {
        const { validateFields } = form
        validateFields()
            .then((values) => {
                setConfirmLoading(true)
                setTimeout(() => {
                    message.success('成功')
                    setVisible(false)
                    setConfirmLoading(false)
                }, 1000)
            })
            .catch(() => null)
    }
    return (
        <>
            <PageHeader title='角色管理' subTitle='角色信息配置在这里'></PageHeader>
            <Table rowKey='id' bordered style={{ margin: '0 20px' }} columns={columns} dataSource={data}></Table>
            <Modal
                title='角色管理'
                visible={visible}
                confirmLoading={confirmLoading}
                okText='确认'
                cancelText='取消'
                destroyOnClose
                onOk={submitForm}
                onCancel={() => {
                    setVisible(false)
                }}
            >
                <Form form={form} labelCol={{ span: 4 }} preserve={false}>
                    <Form.Item label='角色编码' name='code' rules={[{ required: true }]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label='角色名称' name='name' rules={[{ required: true }]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label='角色标签' name='tag' rules={[{ required: true }]}>
                        <Select allowClear>
                            <Select.Option value='jack'>Jack</Select.Option>
                            <Select.Option value='lucy'>Lucy</Select.Option>
                            <Select.Option value='disabled' disabled>
                                Disabled
                            </Select.Option>
                            <Select.Option value='Yiminghe'>yiminghe</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default Platform
