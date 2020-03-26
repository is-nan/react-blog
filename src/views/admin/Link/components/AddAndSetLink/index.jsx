import React,{useState,useEffect,useContext} from "react";
import { Modal } from 'antd';
import LinkFrom from "../LinkFrom";
import {LinkData} from "../../index";
function AddAndSetLink(props) {
    //使用共享数据
    const {Data,setData}=useContext(LinkData)
    return(
        <div>
            {/*友情链接修改新增弹出层*/}
            <Modal
                title={Data.id?"修改":"新增"}
                width={40+'vw'}
                visible={props.visible}
                onCancel={props.onCancel}
                onOk={props.handleCreate}
            >
                <LinkFrom />
            </Modal>
        </div>
    )
}

export default AddAndSetLink