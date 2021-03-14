import React from "react";
import Sheet from "./components/Sheet";
import { BackTop, Layout } from "antd";
import Background from "./background2.jpg";
import UploadToOSS from "./components/UploadToOSS";

class Entry extends React.Component {
  state = {
    stuid: null,
  };
  setID = (value) => {
    this.setState({ stuid: value });
  };
  render() {
    return (
      <Layout style={{ backgroundImage: `url(${Background})` }}>
        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            borderRadius: 20,
            paddingTop: 48,
            paddingLeft: 24,
            paddingRight: 24,
            marginTop: 24,
            marginLeft: 24,
            marginRight: 24,
            marginBottom: 24,
          }}
        >
          <h2 class="ant-typography" style={{ textAlign: "center" }}>
            浙江大学学生E志者协会2020年纳新报名表
          </h2>
          <h4
            class="ant-typography"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            报名截止日期：9月27日24:00
          </h4>
          <center>
            <UploadToOSS stuid={this.state.stuid} />
          </center>
          <Sheet setID={this.setID} />
          <BackTop visibilityHeight={200} />
          <h2 style={{ margin: "20px 0 20px 0", textAlign: "center" }}>
            提交报名表后，建议您加入QQ纳新咨询群，群号:1126888868
          </h2>
          {/* <h1>报名已经截止，感谢您的关注</h1> */}
          <p style={{ textAlign: "center" }}>浙江大学学生E志者协会©2020</p>
          <p style={{ textAlign: "center" }}>Created by EVATech</p>
        </div>
      </Layout>
    );
  }
}
export default Entry;
