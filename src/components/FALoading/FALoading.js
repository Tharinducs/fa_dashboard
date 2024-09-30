import React from "react"
import {Spin} from 'antd'
import { LoadingOutlined } from '@ant-design/icons';


const FALoading = ({open=false}) => {
    return (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} spinning={open} percent="auto" fullscreen />
    )
}

export default FALoading