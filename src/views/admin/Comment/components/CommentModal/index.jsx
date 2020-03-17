import React,{useEffect,useState} from 'react'
import { Modal } from 'antd';
import CommentFrom from "../CommentFrom";

function CommentModal(props) {
    return(
        <div>
            <Modal
                title="回复"
                width={40+'vw'}
                visible={props.visible}
                onCancel={props.onCancel}
                onOk={props.handleCreate}
            >
            <CommentFrom />
            </Modal>
        </div>
    )
}

export default CommentModal