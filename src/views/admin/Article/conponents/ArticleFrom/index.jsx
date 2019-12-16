import React from "react";
import {Input, Form, Tag, Icon, Select, DatePicker, Switch} from "antd";
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
                    <Select mode="tags"  placeholder="Tags Mode" className="From_Select">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                    </Select>
                </Form.Item>
                <Form.Item label={'多标签'}>
                    <Select mode="tags"  placeholder="Tags Mode" className="From_Select">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                    </Select>
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

export default ArticleFrom