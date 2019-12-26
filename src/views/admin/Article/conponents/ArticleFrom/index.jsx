import React, {useState} from "react";
import {Input, Form, Tag, Icon, Select, DatePicker, Switch,Upload} from "antd";
import '../../index.scss'
const { CheckableTag } = Tag;
const {Option} = Select;
function ArticleFrom() {
    return (
        <div className="From">
            <Form layout="inline">
                <Form.Item label="标题">
                    <Input placeholder="请输入标题" className="From_Input"/>
                </Form.Item>
                <Form.Item label="副标题">
                    <Input placeholder="请输入副标题" className="From_Input"/>
                </Form.Item>
                <Form.Item label="分类">
                    <Tags />
                </Form.Item>
                <Form.Item label={'多标签'}>
                    <Tags />
                </Form.Item>
                <Form.Item label="日期">
                    <DatePicker showTime/>
                </Form.Item>
                <Form.Item label="状态">
                    <Switch checkedChildren="发布" unCheckedChildren="草稿" defaultChecked/>
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
    }
    //点击添加时显示输入框
    const showInput = () => {
        setShow(true)
    };
    //获取输入的内容
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