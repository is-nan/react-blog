import React,{useState,useEffect,useContext} from "react";
import { Modal } from 'antd';
import LinkFrom from "../LinkFrom";
function AddAndSetLink(props) {
    return(
        <div>
            {/*友情链接修改新增弹出层*/}
            <Modal
                title="新增"
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