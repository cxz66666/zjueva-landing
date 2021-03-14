import React from "react";
import axios from "axios";
import {
  Button,
  Form,
  Input,
  Icon,
  Radio,
  message,
  Divider,
  Modal,
} from "antd";
import "antd/dist/antd.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import qs from "qs";
import successInform from "./Message";
import qrqq from "../picture/qr-qq.png";
class NewForm extends React.Component {
  constructor() {
    super();
    this.state = {
      WishValid: false,
      firstWish: undefined,
      secondWish: undefined,
      visible: false,
      isFinishSubmit: false,
      confirmLoading: false,
    };
  }

  componentDidMount() {
    this.loadLocalStorage();
    this.props.form.validateFields(["firstWish"], { force: true });
  }
  loadLocalStorage = () => {
    const values = JSON.parse(localStorage.getItem("formCache") || "{}");
    this.props.setID(values.id_student);
    this.props.form.setFieldsValue(values);
  };
  saveLocalStorage = () => {
    const values = this.props.form.getFieldsValue();
    localStorage.setItem("formCache", JSON.stringify(values));
  };
  onStuIdChange = () => {
    let ID = this.props.form.getFieldsValue(["id_student"])["id_student"];
    this.props.setID(ID);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ visible: true, isFinishSubmit: false });
  };
  handleSuccessSubmit = () => {
    this.setState({ isFinishSubmit: true, confirmLoading: false });
  };
  handleFailSubmit = () => {
    this.setState({
      isFinishSubmit: false,
      confirmLoading: false,
      visible: false,
    });
  };
  handleStartSubmit = () => {
    this.setState({ confirmLoading: true });
  };
  handleCancel = (e) => {
    this.setState({
      visible: false,
      isFinishSubmit: false,
      confirmLoading: false,
    });
  };
  handleOk = (e) => {
    this.setState({
      visible: true,
    });
    const validateFieldsAndScroll = this.props.form.validateFieldsAndScroll;
    validateFieldsAndScroll((err, values) => {
      if (err) {
        message.error("填写不正确，请按照提示修改");
      } else {
        // console.log(values);
        let addForm = async () => {
          this.handleStartSubmit();
          let result = await axios("api/submit", {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "POST",
            data: qs.stringify({ dto: JSON.stringify(values) }),
          });

          this.saveLocalStorage();
          if (result.data.status === "success") {
            message.success(
              "提交成功！后续的面试时间会以短信形式通知，期待你的加入！",
              5
            );
            //maybe this is useless but I really don't want to delete it
            successInform(
              values.phone,
              values.name,
              values.id_student,
              values.firstWish,
              values.secondWish
            );
            this.handleSuccessSubmit();
          } else {
            if (result.data.errorMsg === "TICKET_NOT_LEGEAL") {
              message.error("提交失败！请检查报名表填写是否正确。");
            } else if (result.data.errorMsg === "TICKET_INFO_INCOMPLETE") {
              message.error("提交失败！请检查报名表填写是否完整。");
            } else if (result.data.errorMsg === "TICKET_ALREADY_OK") {
              message.error(
                "我们已为您分配了面试场次，请注意短信通知，请勿重复提交!"
              );
            } else {
              message.error("提交失败！可能是网络问题。");
            }
            this.handleFailSubmit();
          }
        };
        addForm();
      }
    });
  };
  validator = (rule, value, callback) => {
    this.setState({ WishValid: true });
    const form = this.props.form;
    var firstWish = value;
    var secondWish = form.getFieldValue("secondWish");
    var thirdWish = form.getFieldValue("thirdWish");
    this.setState({ firstWish: firstWish, secondWish: secondWish });
    try {
      if (
        firstWish === undefined ||
        secondWish === undefined ||
        thirdWish === undefined
      ) {
        throw "请完整填写三个志愿";
      }
      if (
        firstWish === secondWish ||
        firstWish === thirdWish ||
        secondWish === thirdWish
      ) {
        throw "三个志愿不能重复";
      }
    } catch (err) {
      this.setState({ WishValid: false });
      callback(err);
    }
    callback();
  };
  render() {
    const questions = [
      [],
      [
        "【电脑部】说说你跟电脑有关的印象深刻的事情（或者你对电脑最感兴趣的地方，可以是某个组成部分）",
        "【电脑部】来电脑部之后想学些什么?有什么想学的也可以说呀",
      ],
      [
        "【电器部】你现在有哪些电子或技术方面的知识或经历吗？若有，请简述；若无，请讲讲你当下最想学会的一项技能，并打算如何运用它",
        "【电器部】你认为动手能力和理论知识对于电器维修来说哪个更重要？为什么？",
      ],
      [
        "【文宣部】在文宣方面，你有什么优势或者打算如何提高自己？",
        "【文宣部】描述一下你构想的以xx为主题的海报or摄影作品，xx可以是你想到的任何事物",
      ],
      [
        "【人资部】请举一个你想出的创新点子（实现过或现实中有一定的可操作性），最好是关于组织某次活动（宣传活动，内建活动，特殊的生日祝福等等）",
        "【人资部】你觉得你身上最符合人资部的特点是什么？",
      ],
      [
        "【财外部】在社团全员大会/部门内建/部门事务这三种情况打破了你原来的学习安排的情况下，你如何去平衡社团与学习生活？",
        "【财外部】说说令你印象最深刻的理财经历，可以是任何和理财有关的哦",
      ],
    ];
    const ToolTips = this.state.isFinishSubmit ? (
      <>
        <p>提交报名表后，我们强烈建议您加入QQ纳新咨询群，群号:1126888868</p>
        <img src={qrqq} alt="二维码" width={250} />
      </>
    ) : (
      <>
        <p>
          您填写的表格已经保存在浏览器中，之后可以修改后覆盖原提交。请点击按钮进行提交。
        </p>
      </>
    );
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
    const questionItemLayout = {
      labelAlign: "left",
      labelCol: {
        xs: { span: 24 },
        sm: { span: 20, offset: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 11, offset: 4 },
      },
    };
    const { getFieldDecorator } = this.props.form;

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Divider
          dashed={true}
          orientatio="center"
          style={{
            fontSize: 19,
            fontWeight: "bold",
          }}
        >
          基本信息
        </Divider>
        <Form.Item label="姓名">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "请在此处填入你的姓名",
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label="学号(请先填写此项再上传照片)"
          onChange={this.onStuIdChange}
        >
          {getFieldDecorator("id_student", {
            rules: [
              {
                required: true,
                message: "请在此处填入你的学号",
              },
              { pattern: /^[0-9]+$/, message: "混进去了数字以外的东西呀" },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="性别">
          {getFieldDecorator("sex", {
            rules: [
              {
                required: true,
                message: "请选择你的性别",
              },
            ],
          })(
            <Radio.Group>
              <Radio.Button value={0}>
                <div>
                  <Icon type="man" />男
                </div>
              </Radio.Button>
              <Radio.Button value={1}>
                <div>
                  <Icon type="woman" />女
                </div>
              </Radio.Button>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item label="年级">
          {getFieldDecorator("grade", {
            rules: [
              {
                required: true,
                message: "请选择你的年级",
              },
            ],
          })(
            <Radio.Group>
              <Radio.Button value={1}>大一</Radio.Button>
              <Radio.Button value={2}>大二</Radio.Button>
              <Radio.Button value={3}>大三</Radio.Button>
              <Radio.Button value={4}>大四</Radio.Button>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item label="专业/大类">
          {getFieldDecorator("major", {
            rules: [
              {
                required: true,
                message: "请在这里填入你的专业",
              },
            ],
          })(<Input placeholder="例如：工科试验班(电气)" />)}
        </Form.Item>

        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                message: "请在此处填入你的E-mail",
              },
              { type: "email", message: "邮箱格式不正确" },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="联系电话">
          {getFieldDecorator("phone", {
            rules: [
              {
                required: true,
                message: "请在此处填入你的电话号码",
              },
              { pattern: /^1[3456789]\d{9}$/, message: "手机号不太对呀" },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="自我介绍(可以说说你的兴趣,特长等)">
          {getFieldDecorator("question1", {
            rules: [
              {
                required: true,
                message: "做一个简单的自我介绍呗",
              },
            ],
          })(<Input.TextArea autosize={{ minRows: 2, maxRows: 8 }} />)}
        </Form.Item>
        <Divider
          orientation="center"
          style={{
            fontSize: 19,
            fontWeight: "bold",
          }}
        >
          Pick你的最爱
        </Divider>
        <Form.Item label="第一志愿（三个志愿请不要重复选择）">
          {getFieldDecorator("firstWish", {
            rules: [
              {
                required: true,
                message: "请选择第一志愿",
              },
              {
                validator: this.validator,
              },
            ],
          })(
            <Radio.Group name="firstWish" size="medium">
              <Radio.Button value={1}>电脑部</Radio.Button>
              <Radio.Button value={2}>电器部</Radio.Button>
              <Radio.Button value={3}>文宣部</Radio.Button>
              <Radio.Button value={4}>人资部</Radio.Button>
              <Radio.Button value={5}>财外部</Radio.Button>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item label="第二志愿（三个志愿请不要重复选择）">
          {getFieldDecorator("secondWish", {
            rules: [
              {
                required: true,
                message: "请选择第二志愿",
              },
              {
                validator: (rule, value, callback) => {
                  this.props.form.validateFields(["firstWish"], {
                    force: true,
                  });
                  callback();
                },
              },
            ],
          })(
            <Radio.Group name="secondWish" size="medium">
              <Radio.Button value={1}>电脑部</Radio.Button>
              <Radio.Button value={2}>电器部</Radio.Button>
              <Radio.Button value={3}>文宣部</Radio.Button>
              <Radio.Button value={4}>人资部</Radio.Button>
              <Radio.Button value={5}>财外部</Radio.Button>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item label="第三志愿（三个志愿请不要重复选择）">
          {getFieldDecorator("thirdWish", {
            rules: [
              {
                required: true,
                message: "请选择第三志愿",
              },
              {
                validator: (rule, value, callback) => {
                  this.props.form.validateFields(["firstWish"], {
                    force: true,
                  });
                  callback();
                },
              },
            ],
          })(
            <Radio.Group name="thirdWish" size="medium">
              <Radio.Button value={1}>电脑部</Radio.Button>
              <Radio.Button value={2}>电器部</Radio.Button>
              <Radio.Button value={3}>文宣部</Radio.Button>
              <Radio.Button value={4}>人资部</Radio.Button>
              <Radio.Button value={5}>财外部</Radio.Button>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item
          label="是否服从调剂"
          onChange={() => {
            if (this.props.form.getFieldValue("adjustment") === true)
              message.warning(
                "往届两技术部报名人数较多，选择调剂表示存在您被分配到第二、三志愿的可能，请审慎选择。",
                6
              );
          }}
        >
          {getFieldDecorator("adjustment", {
            rules: [
              {
                required: true,
                message: "请选择是否服从调剂",
              },
            ],
          })(
            <Radio.Group>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item
          {...questionItemLayout}
          label={this.state.firstWish ? questions[this.state.firstWish][0] : ""}
          style={this.state.WishValid ? {} : { display: "none" }}
        >
          {getFieldDecorator("firstReason", {
            rules: [
              {
                required: true,
                message: "请回答问题",
              },
            ],
          })(<Input.TextArea autosize={{ minRows: 2, maxRows: 8 }} />)}
        </Form.Item>

        <Form.Item
          {...questionItemLayout}
          label={this.state.firstWish ? questions[this.state.firstWish][1] : ""}
          style={this.state.WishValid ? {} : { display: "none" }}
        >
          {getFieldDecorator("secondReason", {
            rules: [
              {
                required: true,
                message: "请回答问题",
              },
            ],
          })(<Input.TextArea autosize={{ minRows: 2, maxRows: 8 }} />)}
        </Form.Item>

        <Form.Item
          {...questionItemLayout}
          label={
            this.state.secondWish ? questions[this.state.secondWish][0] : ""
          }
          style={this.state.WishValid ? {} : { display: "none" }}
        >
          {getFieldDecorator("thirdReason", {
            rules: [
              {
                required: true,
                message: "请回答问题",
              },
            ],
          })(<Input.TextArea autosize={{ minRows: 2, maxRows: 8 }} />)}
        </Form.Item>
        <Divider
          orientation="center"
          style={{
            fontSize: 19,
            fontWeight: "bold",
          }}
        >
          小E想听你说
        </Divider>
        <Form.Item
          label="你希望未来能在E志者协会得到什么？又能为E志付出什么？"
          {...questionItemLayout}
        >
          {getFieldDecorator("question2", {
            rules: [
              {
                required: true,
                message: "请填入问题的回答",
              },
            ],
          })(<Input.TextArea autosize={{ minRows: 2, maxRows: 8 }} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            icon="copy"
            style={{ textAlign: "center" }}
            type="primary"
            htmlType="submit"
          >
            提交
          </Button>
          <Button
            icon="save"
            style={{ margin: "20px", textAlign: "center" }}
            onClick={() => {
              this.saveLocalStorage();
              message.success("草稿已保存");
            }}
          >
            保存草稿
          </Button>
        </Form.Item>
        <Modal
          title={this.state.isFinishSubmit ? "提交成功！" : "提交表单"}
          visible={this.state.visible}
          onOk={this.state.isFinishSubmit ? this.handleCancel : this.handleOk}
          onCancel={this.handleCancel}
          okText={this.state.isFinishSubmit ? "这就加群" : "提交"}
          cancelText="我再想想"
          confirmLoading={this.state.confirmLoading}
        >
          {ToolTips}
        </Modal>
      </Form>
    );
  }
}

const Sheet = Form.create({})(NewForm);
export default Sheet;
