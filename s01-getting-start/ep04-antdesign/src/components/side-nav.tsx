import { AppstoreOutlined, BlockOutlined, DatabaseTwoTone, HomeFilled } from "@ant-design/icons"
import { Menu, MenuProps } from "antd"

export default function SideNav() {
    return (
        <Menu 
            items={items} 
            mode="inline"
            style={{width : 256, minWidth : 256}}
            className="h-full" />
    )
}

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
    {key : '/', label : 'Home', icon : <HomeFilled />},
    {key : '/ui', label : 'Learning UI', icon : <BlockOutlined />, children : [
        {key : '/ui/form', label : 'Using Form Inputs'},
        {key : '/ui/table', label : 'Using Output Tables'},
        {key : '/ui/grid', label : 'Using Output Grids'},
    ] },
    {key : '/state', label : 'State witn Redux', icon : <AppstoreOutlined />, children : [
        {key : '/state/input', label : 'Create New State'},
        {key : '/state/list', label : 'Reference Persistence State'},
    ]},
]