import React from "react";
import axios from "axios";
import {
  Button,
  Form,
  Spin,
  message,
  Checkbox,
  Alert,
  BackTop,
  Layout,
  Card,
  List,
} from "antd";
import "antd/dist/antd.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import qs from "qs";
import Background from "../background2.jpg";
import { withRouter } from "react-router-dom";

const Wishes = ["电脑部", "电器部", "文宣部", "人资部", "财外部"];
class TimePicker extends React.Component {
  constructor() {
    super();
    this.state = { confirmed: false };
  }

  componentDidMount() {
    this.queryInfo();
    this.queryTime();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const validateFieldsAndScroll = this.props.form.validateFieldsAndScroll;
    confirmAlert({
      title: "提交面试时间",
      message: "请核实无误后谨慎提交。",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            validateFieldsAndScroll((err, values) => {
              if (err) {
                message.error("填写不正确，请按照提示修改");
              } else {
                var Times = [];
                for (var i in values) {
                  for (var j = 0; j < values[i].length; j++)
                    Times = Times.concat(values[i][j]);
                }
                let addForm = async () => {
                  let result = await axios("api/posttime", {
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    method: "POST",
                    data: qs.stringify({
                      dto: JSON.stringify({ Times: Times }),
                      guid: this.props.match.params.guid,
                    }),
                  });

                  if (result.data.status === "success") {
                    message.success("提交成功！期待你的精彩面试表现！");
                  } else if (result.data.errorMsg === "TIME_ALREAY_CONFIRM") {
                    message.error("我们已经为您分配了场次，请留意短信通知");
                  } else {
                    message.error("提交失败！可能是网络问题。");
                  }
                };
                if (Times.length !== 0) {
                  addForm();
                } else {
                  message.error("请至少选择一个场次！");
                }
              }
            });
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };
  queryTime = async () => {
    let result = await axios("api/gettime", {
      method: "GET",
    });
    if (result.data.status === "success") {
      var timetable = [];
      for (var time of result.data.data) {
        for (var index = 0; index < timetable.length; index++) {
          if (timetable[index].day === time.day) {
            for (var i = 0; i < timetable[index].time.length; i++) {
              if (time.beginTime === timetable[index].time[i].label) {
                timetable[index].time[i].value.push(time.id);
                break;
              }
            }
            if (i === timetable[index].time.length) {
              timetable[index].time.push({
                label: time.beginTime,
                value: [time.id],
              });
            }
            break;
          }
        }
        if (index === timetable.length) {
          timetable.push({
            day: time.day,
            time: [{ label: time.beginTime, value: [time.id] }],
          });
        }
      }
      this.setState({
        option_list: timetable,
        option_number: timetable.length,
      });
    } else {
      message.error("获取面试场次失败，请稍后重试");
      this.props.history.push("/");
    }
  };
  queryInfo = async () => {
    let result = await axios("api/getinfo/" + this.props.match.params.guid, {
      method: "GET",
    });

    if (result.data.status === "success") {
      result.data.data.firstWish = Wishes[result.data.data.firstWish - 1];
      result.data.data.secondWish = Wishes[result.data.data.secondWish - 1];
      result.data.data.thirdWish = Wishes[result.data.data.thirdWish - 1];
      this.setState({
        info: result.data.data,
      });
      if (this.state.info.times.length !== 0) {
        message.warning(
          "你已选择过面试时间！重复提交面试时间可能导致场次排错，请谨慎重复提交！",
          0
        );
      }
    } else {
      message.error("获取个人信息失败，请稍后重试");
      this.props.history.push("/");
    }
  };
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

    const { getFieldDecorator } = this.props.form;
    if (this.state.confirmed) {
      return this.state.option_list ? (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <h4 class="ant-typography" style={{ textAlign: "center" }}>
            请尽量多选
          </h4>
          <Form.Item
            label={
              this.state.option_number > 0 ? this.state.option_list[0].day : 0
            }
          >
            {getFieldDecorator("time1", {
              initialValue: [],
              rules: [{ required: false }],
            })(
              <Checkbox.Group
                options={
                  this.state.option_number > 0
                    ? this.state.option_list[0].time
                    : 0
                }
              />
            )}
          </Form.Item>

          <Form.Item
            label={
              this.state.option_number > 1 ? this.state.option_list[1].day : 0
            }
          >
            {getFieldDecorator("time2", {
              initialValue: [],
              rules: [{ required: false }],
            })(
              <Checkbox.Group
                options={
                  this.state.option_number > 1
                    ? this.state.option_list[1].time
                    : 0
                }
              />
            )}
          </Form.Item>

          <Form.Item
            label={
              this.state.option_number > 2 ? this.state.option_list[2].day : 0
            }
          >
            {getFieldDecorator("time3", {
              initialValue: [],
              rules: [{ required: false }],
            })(
              <Checkbox.Group
                options={
                  this.state.option_number > 2
                    ? this.state.option_list[2].time
                    : 0
                }
              />
            )}
          </Form.Item>

          <Form.Item
            label={
              this.state.option_number > 3 ? this.state.option_list[3].day : 0
            }
          >
            {getFieldDecorator("time4", {
              initialValue: [],
              rules: [{ required: false }],
            })(
              <Checkbox.Group
                options={
                  this.state.option_number > 3
                    ? this.state.option_list[3].time
                    : 0
                }
              />
            )}
          </Form.Item>

          <Form.Item
            label={
              this.state.option_number > 4 ? this.state.option_list[4].day : 0
            }
          >
            {getFieldDecorator("time5", {
              initialValue: [],
              rules: [{ required: false }],
            })(
              <Checkbox.Group
                options={
                  this.state.option_number > 4
                    ? this.state.option_list[4].time
                    : 0
                }
              />
            )}
          </Form.Item>

          <Form.Item
            label={
              this.state.option_number > 5 ? this.state.option_list[5].day : 0
            }
          >
            {getFieldDecorator("time6", {
              initialValue: [],
              rules: [{ required: false }],
            })(
              <Checkbox.Group
                options={
                  this.state.option_number > 5
                    ? this.state.option_list[5].time
                    : 0
                }
              />
            )}
          </Form.Item>

          <Form.Item
            label={
              this.state.option_number > 6 ? this.state.option_list[6].day : 0
            }
          >
            {getFieldDecorator("time7", {
              initialValue: [],
              rules: [{ required: false }],
            })(
              <Checkbox.Group
                options={
                  this.state.option_number > 6
                    ? this.state.option_list[6].time
                    : 0
                }
              />
            )}
          </Form.Item>
          <br></br>
          <Button
            icon="copy"
            style={{ display: "block", margin: "0 auto" }}
            type="primary"
            htmlType="submit"
          >
            提交
          </Button>
        </Form>
      ) : (
        <div>
          <Spin size="large" tip="Loading...">
            <Alert
              message="正在打开页面"
              description="请耐心等待，长时间未加载请请尝试刷新页面"
              style={{ height: "700px", textAlign: "center" }}
              type="info"
            />
          </Spin>
        </div>
      );
    } else if (this.state.info) {
      return this.state.info.times.length !== 0 ? (
        <Alert
          message="你已经选择过面试时间！"
          description={
            <div>
              <p>
                重复提交面试时间可能导致场次排错，请谨慎重复提交，点击右上角关闭警告以继续
              </p>
              <List
                size="small"
                header={<div>已选择的时间</div>}
                bordered
                dataSource={this.state.info.times}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </div>
          }
          type="warning"
          showIcon
          closable
          style={{ height: "700px", textAlign: "center" }}
          afterClose={() => {
            const info = Object.assign({}, this.state.info, { times: [] });
            this.setState({ info: info });
          }}
        />
      ) : (
        <div>
          <Card title="个人信息">
            <Card type="inner" title="姓名">
              <h3>{this.state.info.name}</h3>
            </Card>
            <Card type="inner" title="学号">
              <h3>{this.state.info.id_student}</h3>
            </Card>
            <Card type="inner" title="第一志愿">
              <h3>{this.state.info.firstWish}</h3>
            </Card>
            <Card type="inner" title="第二志愿">
              <h3>{this.state.info.secondWish}</h3>
            </Card>
            <Card type="inner" title="第三志愿">
              <h3>{this.state.info.thirdWish}</h3>
            </Card>
          </Card>
          <br></br>
          <Button
            style={{ display: "block", margin: "0 auto" }}
            type="primary"
            onClick={(e) => {
              this.setState({ confirmed: true });
              if (!this.state.option_list) {
                this.queryTime();
              }
            }}
          >
            确认个人信息
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Spin size="large" tip="Loading...">
            <Alert
              message="正在打开页面"
              description="请耐心等待，长时间未加载请请尝试刷新页面"
              type="info"
              style={{ height: "700px", textAlign: "center" }}
            />
          </Spin>
        </div>
      );
    }
  }
}
const Chooser = withRouter(Form.create({})(TimePicker));

class ChooseTime extends React.Component {
  render() {
    return (
      <Layout style={{ backgroundImage: `url(${Background})` }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            paddingTop: 48,
            paddingLeft: 24,
            paddingRight: 24,
            marginTop: 24,
            marginLeft: 24,
            marginRight: 24,
            marginBottom: 24,
            opacity: 0.92,
          }}
        >
          <h2 class="ant-typography" style={{ textAlign: "center" }}>
            浙江大学学生E志者协会2020年面试时间
          </h2>
          <h4 class="ant-typography" style={{ textAlign: "center" }}>
            如果下列时间全部没空，请联系林同学：QQ 1198940948
          </h4>
          <h4 class="ant-typography" style={{ textAlign: "center" }}>
            面试时间约为30min
          </h4>
          <Chooser />
          <BackTop visibilityHeight={200} />
          <p style={{ textAlign: "center" }}>
            浙江大学学生E志者协会©2020 Created by EVATech
          </p>
        </div>
      </Layout>
    );
  }
}
export default ChooseTime;
