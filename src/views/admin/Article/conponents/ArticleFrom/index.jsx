import React, {useState,useContext,useEffect} from "react";
import {Input, Form, Tag, Icon, Select, DatePicker, Switch,Upload,Button} from "antd";
import { GetToken } from '../../../../../cookie/index'
import '../../index.scss'
import { ArticleData } from '../../index'
import moment from 'moment';
const { CheckableTag } = Tag;
const {Option} = Select;
function ArticleFrom() {
    //使用共享数据
  const {Data,setData}=useContext(ArticleData)
  //封面上传配置
  const UploadConfig = {
        action: '/api/UploadImages',
        listType: 'picture-card',
        className: 'avatar-uploader',
        withCredentials:true,
        showUploadList:false,
        headers:{Authorization:'Bearer ' + GetToken()}
   }
   //没有封面显示默认
    const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">上传</div>
        </div>
    );
    return (
        <div className="From">
            {/*表单*/}
            <Form layout="inline">
                <Form.Item label="标题" className="From_Item">
                    <Input placeholder="请输入标题"
                           className="From_Item_Input"
                           value={Data.title}
                           onChange={(e)=>{setData({...Data,title: e.target.value})}}/>
                </Form.Item>
                <Form.Item label="分类" className="From_Item">
                    <Tags GetValue={(value)=>{setData({...Data,Category: value})}}
                          TagsValue={Data.Category}/>
                </Form.Item>
                <Form.Item label="标签" className="From_Item">
                    <Tags GetValue={(value)=>{setData({...Data,TagName: value})}}
                          TagsValue={Data.TagName}/>
                </Form.Item>
                <Form.Item label="日期">
                    <DatePicker showTime onChange={(date,dataTime)=>{setData({...Data,createdTime:dataTime})}}
                                value={moment(Data.createdTime)}/>
                </Form.Item>
                <Form.Item label="作者">
                    <Select value={Data.Author} style={{ width: 120 }}>
                        <Option value="南岸有归">南岸有归</Option>
                        <Option value="转载">转载</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="状态">
                    <Switch checkedChildren="发布" unCheckedChildren="草稿" defaultChecked
                            onChange={(checked)=>{setData({...Data,status:checked})}}/>
                </Form.Item>
                <br />
                <Form.Item label="封面" className="From_Item">
                    <Upload
                        className="From_UploadButton"
                        {...UploadConfig} beforeUpload={(file)=>{
                    }}
                            onSuccess={(res)=>{
                                //上传成功
                                if(res.code===0){
                                    setData({...Data,Cover:res.data})
                                }
                            }}
                    >
                        {Data.Cover?<img src={Data.Cover} alt="avatar" style={{ width: '100%' }} />:uploadButton}
                    </Upload>
                </Form.Item>
            </Form>
        </div>
    )
}

//标签组件
function Tags(props) {
    //标签列表
    const [TagsList,setTagsList]=useState(['Movies', 'Books', 'Music', 'Sports'])
    //选中标签
    const [TagsValue,setTagsValue]=useState([])
    //添加框显示隐藏
    const [Show,setShow]=useState(false)
    //添加输入框内容
    const [AddTagsValue,setAddTagsValue]=useState('')
    //获取到选中的标签数据列表
    const handleChange=(tag, checked)=>{
        const nextSelectedTags = checked ? [...TagsValue, tag] : TagsValue.filter(t => t !== tag);
        setTagsValue(nextSelectedTags);
        props.GetValue(nextSelectedTags)
    }
    useEffect(()=>{
        setTagsValue(props.TagsValue)
    },[props])
    //点击添加时显示输入框
    const showInput = () => {
        setShow(true)
    };
    //获取添加显示的输入框内容
    const handleInputChange = e => {
      setAddTagsValue(e.target.value)
    };
    //回车确定或失去焦点时添加标签至标签列表
    const handleInputConfirm = () => {
        if (AddTagsValue && TagsList.indexOf(AddTagsValue) === -1) {
            setTagsList([...TagsList, AddTagsValue]);
        }
        setAddTagsValue('')
        setShow(false)
    };
    return(
        <div>
            {/*标签列表*/}
            {TagsList.map(tag => (
                <CheckableTag
                    key={tag}
                    checked={TagsValue.indexOf(tag) > -1}
                    onChange={checked => handleChange(tag, checked)}
                >
                    {tag}
                </CheckableTag>
            ))}
            {/*添加显示输入框*/}
            {Show && (
                <Input
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={AddTagsValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            )}
            {!Show && (
                <Tag onClick={showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                    <Icon type="plus" /> New Tag
                </Tag>
            )}
        </div>
    )
}

export default ArticleFrom
