/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Nav3 from "./Nav3";
import Banner3 from "./Banner3";
import Feature2 from "./Feature2";
import Feature1 from "./Feature1";
import Content3 from "./Content3";
import Feature8 from "./Feature8";
import Feature3 from "./Feature3";
import Feature6 from "./Feature6";
import Content5 from "./Content5";
import Content9 from "./Content9";
import Footer1 from "./Footer1";
import Point from "./Point";
import Content4 from "./Content4";
import {
  Nav30DataSource,
  Banner31DataSource,
  Feature20DataSource,
  Feature10DataSource,
  Feature30DataSource,
  Feature31DataSource,
  Feature80DataSource,
  Feature60DataSource,
  Content40DataSource,
  Content50DataSource,
  Content90DataSource,
  Footer10DataSource,
} from "./data.source";
import "./less/antMotionStyle.less";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner3
        id="Banner3_1"
        key="Banner3_1"
        dataSource={Banner31DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_0"
        key="Feature2_0"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content4
        id="Content4_0"
        key="Content4_0"
        dataSource={Content40DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Feature3_0"
        key="Feature3_0"
        dataSource={Feature30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature8
        id="Feature8_0"
        key="Feature8_0"
        dataSource={Feature80DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature6
        id="Feature6_0"
        key="Feature6_0"
        dataSource={Feature60DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature3
        id="Feature3_1"
        key="Feature3_1"
        dataSource={Feature31DataSource}
        isMobile={this.state.isMobile}
      />,

      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Point
        key="list"
        data={[
          "Nav3_0",
          "Banner3_1",
          "Feature2_0",
          "Feature1_0",
          "Content3_0",
          "Feature8_0",
          "Feature6_0",
          "Content5_0",
          "Content9_0",
          "Footer0_0",
        ]}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
