import React from 'react'
import axios from 'axios'
import { Button, Form, Input,Icon, Radio, message } from 'antd'
import 'antd/dist/antd.css'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import qs from 'qs';

class NewForm extends React.Component {
    componentDidMount() {
      this.loadLocalStorage();
    }
    loadLocalStorage = () => {
      const values = JSON.parse(localStorage.getItem('formCache') || '{}');
      this.props.form.setFieldsValue(values);
    }
    saveLocalStorage = () => {
      const values = this.props.form.getFieldsValue();
      localStorage.setItem('formCache', JSON.stringify(values));
    }
    onStuIdChange = () =>{
      let ID = this.props.form.getFieldsValue(['StuId'])['StuId']
      this.props.setID(ID)
    }
    handleSubmit = e => {
        e.preventDefault();
        const validateFieldsAndScroll = this.props.form.validateFieldsAndScroll
        confirmAlert({
          title: '提交报名表',
          message:  '您填写的表格已经保存在浏览器中，以后可以修改后覆盖提交。点击 Yes 进行提交。',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                validateFieldsAndScroll(
                  (err, values) => {
                      if (err) {
                          message.error('填写不正确，请按照提示修改');
                      }
                      else {
                          console.log(values);
                          let addForm = async () => {
                              let result = await axios(
                                  'api/submit',
                                  {
                                      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                                      method: "POST",
                                      data: qs.stringify({"dto":JSON.stringify(values)})
                                  }
                              )
                              if (result.data.success) {
                                  message.success("提交成功！后续的面试时间会以短信形式通知，期待你的加入！")
                              }
                              else {
                                  message.error("提交失败！可能是网络问题。")
                              }
                          }
                          addForm();
                      }
                  }
              )
              }
            },
            {
              label: 'No',
              onClick: () => {}
            }
          ]
        });
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        const { getFieldDecorator } = this.props.form;

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="姓名">
                    {
                        getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message: "请在此处填入你的姓名"
                                }
                            ]
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                
                <Form.Item label="学号"   onChange = {this.onStuIdChange} >
                    {getFieldDecorator('StuId', {
                    rules: [
                        {
                        required: true,
                        message: '请在此处填入你的学号',
                        },
                        { pattern: /^[0-9]+$/, message: "混进去了数字以外的东西呀" }

                    ],
                    })(<Input />)}
                </Form.Item>
                
                <Form.Item label="性别">
                {
                  getFieldDecorator('sex', {
                    rules: [
                      {
                        required: true,
                        message: '请选择你的性别'
                      }
                    ]
                  }
                  )
                    (
                      <Radio.Group>
                        <Radio.Button value={0} ><div><Icon type="man" />男</div></Radio.Button>
                        <Radio.Button value={1} ><div><Icon type="woman" />女</div></Radio.Button>
                      </Radio.Group>
                    )
                }
                </Form.Item>
                
                <Form.Item label="年级">
                {
                  getFieldDecorator('grade', {
                    rules: [
                      {
                        required: true,
                        message: '请选择你的年级'

                      }
                    ]
                  }
                  )
                    (
                      <Radio.Group >
                        <Radio.Button value={1}>大一</Radio.Button>
                        <Radio.Button value={2}>大二</Radio.Button>
                        <Radio.Button value={3}>大三</Radio.Button>
                        <Radio.Button value={4}>大四</Radio.Button>
                      </Radio.Group>
                    )
                }
              </Form.Item>
              
              <Form.Item label="专业/大类">
                {
                  getFieldDecorator('major', {
                    rules: [
                      {
                        required: true,
                        message: '请在这里填入你的专业'

                      }
                    ]
                  }
                  )(
                    <Input placeholder="例如：工科试验班(电气)" />
                  )
                }
              </Form.Item>
              
              <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                  rules: [
                    {
                      required: true,
                      message: '请在此处填入你的E-mail'
                    }, { type: 'email', message: "邮箱格式不正确" }
                  ],
                })(<Input />)}
              </Form.Item>
              
              <Form.Item label="联系电话">
                {getFieldDecorator('phone', {
                  rules: [
                    {
                      required: true,
                      message: '请在此处填入你的电话号码',
                    },
                    { pattern: /^1[3456789]\d{9}$/, message: "手机号不太对呀" }
                  ],
                })(<Input />)}
              </Form.Item>
              
              <Form.Item label="第一志愿（两志愿请不要重复选择）">
                    {        
                        getFieldDecorator('firstWish', {rules: [
                            {
                              required: true,
                              message: '请选择第一志愿'
                            }
                          ]})(       
                            <Radio.Group name="firstWish" size="medium">
                                <Radio.Button value={1}>电脑部</Radio.Button>
                                <Radio.Button value={2}>电器部</Radio.Button>
                                <Radio.Button value={3}>文宣部</Radio.Button>
                                <Radio.Button value={4}>人资部</Radio.Button>
                                <Radio.Button value={5}>财外部</Radio.Button>
                            </Radio.Group>
                        )
                    }
                </Form.Item>
                
                <Form.Item label="第二志愿（两志愿请不要重复选择）">
                    {
                        getFieldDecorator('secondWish', {rules: [
                            {
                              required: true,
                              message: '请选择第二志愿'
                            }
                          ]})(
                            <Radio.Group name="secondWish" size="medium">
                                <Radio.Button value={1}>电脑部</Radio.Button>
                                <Radio.Button value={2}>电器部</Radio.Button>
                                <Radio.Button value={3}>文宣部</Radio.Button>
                                <Radio.Button value={4}>人资部</Radio.Button>
                                <Radio.Button value={5}>财外部</Radio.Button>
                            </Radio.Group>
                        )
                    }
                </Form.Item>
                
                <Form.Item label="是否服从调剂">
                {
                  getFieldDecorator('adjustment', {
                    rules: [
                      {
                        required: true,
                        message: '请选择是否服从调剂'
                      }
                    ]
                  }
                  )(
                    <Radio.Group >
                      <Radio value={true}>是</Radio>
                      <Radio value={false}>否</Radio>
                    </Radio.Group>
                  )
                }
                </Form.Item>

                <Form.Item label="简述你选择第一志愿的原因">
                {
                getFieldDecorator('firstReason', {
                    rules: [
                    {
                        required: true,
                        message: '请填入你选择志愿的原因'
                    }
                    ]
                }
                )(
                    <Input.TextArea autosize={{ minRows: 2, maxRows: 8 }} />
                )
                }
                </Form.Item>
                
                <Form.Item label="简述你选择第二志愿的原因">
                    {
                    getFieldDecorator('secondReason', {
                        rules: [
                        {
                            required: true,
                            message: '请填入你选择志愿的原因'
                        }
                        ]
                    }
                    )
                        (
                        <Input.TextArea autosize={{ minRows: 2, maxRows: 8 }} />
                        )
                    }
                </Form.Item>
                
                <Form.Item label="简单介绍一下你的特长">
                    {
                    getFieldDecorator('question1', {
                        rules: [
                        {
                            required: true,
                            message: '请简单介绍一下你的特长'
                        }
                        ]
                    }
                    )
                        (
                        <Input.TextArea autosize={{ minRows: 2, maxRows: 8 }} />
                        )
                    }
                </Form.Item>
            
                <Form.Item label="你希望未来能在E志者协会得到什么？又能为E志付出什么？">
                    {
                    getFieldDecorator('question2', {
                        rules: [
                        {
                            required: true,
                            message: '请填入问题的回答'
                        }
                        ]
                    }
                    )
                        (
                        <Input.TextArea autosize={{ minRows: 2, maxRows: 8 }} />
                        )
                    }
                </Form.Item>
                <Form.Item style={{display:"none"}}>
                  {
                    getFieldDecorator('time1', {initialValue:0,rules: [{required:true}]})
                  }
                </Form.Item>
                <Form.Item style={{display:"none"}}>
                  {
                    getFieldDecorator('time2', {initialValue:0,rules: [{required:true}]})
                  }
                </Form.Item>
                <Form.Item style={{display:"none"}}>
                  {
                    getFieldDecorator('time3', {initialValue:0,rules: [{required:true}]})
                  }
                </Form.Item>
                <Form.Item style={{display:"none"}}>
                  {
                    getFieldDecorator('time4', {initialValue:0,rules: [{required:true}]})
                  }
                </Form.Item>
                <Form.Item style={{display:"none"}}>
                  {
                    getFieldDecorator('time5', {initialValue:0,rules: [{required:true}]})
                  }
                </Form.Item>
                <Form.Item style={{display:"none"}}>
                  {
                    getFieldDecorator('time6', {initialValue:0,rules: [{required:true}]})
                  }
                </Form.Item>
                <Form.Item style={{display:"none"}}>
                  {
                    getFieldDecorator('time7', {initialValue:0,rules: [{required:true}]})
                  }
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button icon="copy" style={{ textAlign: 'center' }} type="primary" htmlType="submit">提交</Button>
                    <Button icon="save" style={{ margin: "20px", textAlign: 'center' }} onClick={() => { this.saveLocalStorage(); message.success('草稿已保存') }}>保存草稿</Button>
                </Form.Item>
            </Form>
        )
    }

}

const Sheet = Form.create({})(NewForm);
export default Sheet;