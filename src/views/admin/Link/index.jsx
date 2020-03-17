import React, {  useState,useEffect,createContext } from 'react'
import LinkTable from "./components/LinkTable";
import AddAndSetLink from "./components/AddAndSetLink";
import { GetLinkList,NewLink,UpdateLink,DeleteLink } from "../../../api/Link";
import {Button, message} from "antd";

export const LinkData=new createContext()
function Link(props) {
    //Context数据
    const [Data,setData]=useState({name:'',email:'',url:''})
    //表格数据
    const [TableData,setTableData]=useState()
    //获取友情链接
    const GetLinkLists=()=>{
        GetLinkList()
            .then((res)=>{
                setTableData(res.data.data)
            })
    }
    useEffect(()=>{
        GetLinkLists()
    },[])
    //弹出框显示控制变量
    const [visible, setvisible] = useState(false)
    //添加And修改弹出框
    const AddAndSetLinkFun=(type=0)=>{
        //type===0时新增友情链接
        if(type!==0){
            setData({name:'',email:'',url:''})
        }
        setvisible(!visible)
    }
    //友情链接新增修改弹出框确定事件
    const handleCreate=async ()=>{
        //如果没有链接ID就是新增友情链接
        if(!Data.id){
           await NewLink(Data)
                .then((res)=>{
                    if (res.data.code === 0) {
                        message.success(res.data.mess);
                        AddAndSetLinkFun()
                    } else {
                        message.error(res.data.mess);
                    }
                })
        }else {
           await UpdateLink(Data)
                .then((res)=>{
                    if (res.data.code === 0) {
                        message.success(res.data.mess);
                        AddAndSetLinkFun()
                    } else {
                        message.error(res.data.mess);
                    }
                })
        }
        await GetLinkLists()
        setvisible(!visible)
    }
    //删除友情链接
    const DeleteLinks=(id)=>{
        DeleteLink(id)
            .then((res)=>{
                if (res.data.code === 0) {
                    message.success(res.data.mess);
                    GetLinkLists()
                } else {
                    message.error(res.data.mess);
                }
            })
    }
    return (
        <div>
            {/*新增友情链接按钮*/}
            <Button type="primary" onClick={() => {
                AddAndSetLinkFun(0)
            }}>
                新增
            </Button>
            {/*共享数据*/}
            <LinkData.Provider value={{Data,setData}}>
                <LinkTable data={TableData} AddAndSetLinkFun={AddAndSetLinkFun} DeleteLinks={DeleteLinks}/>
                <AddAndSetLink
                    visible={visible}
                    onCancel={AddAndSetLinkFun}
                    onOk={AddAndSetLinkFun}
                    handleCreate={handleCreate}
                />
            </LinkData.Provider>
        </div>
    )
}


export default Link
