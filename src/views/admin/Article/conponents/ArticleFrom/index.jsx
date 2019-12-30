import React, {useState,useContext} from "react";
import {Input, Form, Tag, Icon, Select, DatePicker, Switch,Upload} from "antd";
import '../../index.scss'
import { ArticleData } from '../AddAndSetArticle'

const { CheckableTag } = Tag;
const {Option} = Select;
function ArticleFrom() {
    //使用共享数据
  const {Data,setData}=useContext(ArticleData)
  //封面上传配置
  const UploadConfig = {
        action: '/api/UploadImages',
        listType: 'picture',
        className: 'upload-list-inline',
        withCredentials:true,
        beforeUpload:(file)=>{
            setData({...Data,Cover:file})
            return false
        }
   }
    return (
        <div className="From">
            <Form layout="inline">
                <Form.Item label="标题">
                    <Input placeholder="请输入标题" className="From_Input"
                           defaultValue={Data.title}
                           onChange={(e)=>{setData({...Data,title: e.target.value})}}/>
                </Form.Item>
                <Form.Item label="分类">
                    <Tags GetValue={(value)=>{setData({...Data,Category: value})}}/>
                </Form.Item>
                <Form.Item label={'标签'}>
                    <Tags GetValue={(value)=>{setData({...Data,TagName: value})}}/>
                </Form.Item>
                <Form.Item label="日期">
                    <DatePicker showTime onChange={(date,dataTime)=>{console.log(setData({...Data,createdAt:dataTime}))}}/>
                </Form.Item>
                <Form.Item label="状态">
                    <Switch checkedChildren="发布" unCheckedChildren="草稿" defaultChecked
                            onChange={(checked)=>{setData({...Data,status:checked})}}/>
                </Form.Item>
                <Form.Item label="封面">
                    <Upload {...UploadConfig}>
                        <Button>
                            <Icon type="upload" /> Upload
                        </Button>
                    </Upload>
                </Form.Item>
            </Form>
        </div>
    )
}

function Tags(props) {
    //标签列表
    const [TagsList,setTagsList]=useState(['Movies', 'Books', 'Music', 'Sports'])
    //选中标签
    const [TagsValue,setTagsValue]=useState([])
    //添加框显示隐藏
    const [Show,setShow]=useState(false)
    //添加输入框内容
    const [AddTagsValue,setAddTagsValue]=useState('')
    //添加事件
    const handleChange=(tag, checked)=>{
        const nextSelectedTags = checked ? [...TagsValue, tag] : TagsValue.filter(t => t !== tag);
        setTagsValue(nextSelectedTags);
        props.GetValue(nextSelectedTags)
    }
    //点击添加时显示输入框
    const showInput = () => {
        setShow(true)
    };
    //获取选中的内容
    const handleInputChange = e => {
      setAddTagsValue(e.target.value)
    };
    //回车确定添加标签
    const handleInputConfirm = () => {
        if (AddTagsValue && TagsList.indexOf(AddTagsValue) === -1) {
            setTagsList([...TagsList, AddTagsValue]);
        }
        setAddTagsValue('')
        setShow(false)
    };
    return(
        <div>
            {TagsList.map(tag => (
                <CheckableTag
                    key={tag}
                    checked={TagsValue.indexOf(tag) > -1}
                    onChange={checked => handleChange(tag, checked)}
                >
                    {tag}
                </CheckableTag>
            ))}
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
