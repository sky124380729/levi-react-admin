import React, { FC, useState } from 'react'
import { Table, Radio, Divider } from 'antd'
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        render: (text: React.ReactNode) => <a>{text}</a>
    },
    {
        title: 'Age',
        dataIndex: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address'
    }
]
interface IModel {
    key: string
    name: string
    age: number
    address: string
}
const data: IModel[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park'
    }
] // rowSelection object indicates the need for row selection

const rowSelection = {
    onChange: (selectedRowKeys: React.ReactText[], selectedRows: IModel[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: (record: IModel) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name
    })
}

const Demo: FC = () => {
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio' | undefined>('checkbox')
    return (
        <div>
            <Radio.Group
                onChange={({ target: { value } }) => {
                    setSelectionType(value)
                }}
                value={selectionType}
            >
                <Radio value='checkbox'>checkbox</Radio>
                <Radio value='radio'>radio</Radio>
            </Radio.Group>

            <Divider />

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default Demo
