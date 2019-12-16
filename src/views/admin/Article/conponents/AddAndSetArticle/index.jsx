import React,{useState} from "react";
import { Modal } from 'antd';
import moment from 'moment'
import ArticleFrom from "../ArticleFrom";
function AddAndSetArticle(props) {
    //表单内容
    const [form,setform]=useState({Title:'两只老虎',TowTitle:'跑得快',
        class:'分类',tag:'标签',time:'2019',status:false})

    const [ formRef,setformRef ]=useState()
    //获取表单
    const saveFormRef = formRef => {
        setformRef(formRef)
    }
    //获取内容
    const handleCreate = () => {
        console.log(formRef)
        const { form } = formRef.props;
        console.log(''+form)
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ',moment().format(),moment(values.time._d));
            form.resetFields();
        });
    }
    return(
        <div>
            <Modal
                title="新增"
                width={100+'vw'}
                visible={props.visible}
                onCancel={props.onCancel}
                onOk={handleCreate}
            >
                <ArticleFrom
                    from={form}
                    wrappedComponentRef={saveFormRef}
                />
            </Modal>
        </div>
    )
}

export default AddAndSetArticle