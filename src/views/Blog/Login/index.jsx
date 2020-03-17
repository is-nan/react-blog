import React,{useState,useEffect} from 'react'
import { Input, Button, message,Form} from 'antd'
import './index.scss'
import { login } from '../../../api/Login'
import { useHistory } from "react-router-dom";
function Login (props) {
  const history = useHistory()
  //用户名与密码
  const [User,setUser]=useState({username:'',password:''})
  //登录
  const UserLogin=()=>{
    login(User)
      .then((res)=>{
        if (res.data.code === 0) {
          message.success(res.data.mess)
          history.push('/admin/article')
        } else {
          message.error(res.data.mess);
        }
      })
  }
  return(
    <div className="Login">
      <div className="Login_From">
        <p className="Login_From__Title">南岸有归</p>
        <Form>
        <Form.Item>
          <Input className="Login_From__Input"
                 value={User.username}
                 onChange={(e)=>{setUser({...User,username:e.target.value})}}/>
        </Form.Item>
          <Form.Item>
            <Input className="Login_From__Input"
                   type="password"
                   value={User.password}
                   onChange={(e)=>{setUser({...User,password:e.target.value})}}/>
          </Form.Item>
          <Button htmlType="submit"
                  type="primary"
                  size="large"
                  shape="round"
                  className="Login_From__Button"
                  onClick={UserLogin}>
            登录
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login
