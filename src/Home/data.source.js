import React from "react";
import history from "../picture/history.jpg";
import back1 from "../picture/back1.jpg";
import xueyuan1 from "../picture/xueyuan1.jpg";
import shequ1 from "../picture/shequ1.jpg";
import richang1 from "../picture/richang1.jpg";
import richang2 from "../picture/richang2.jpg";
import jingpin1 from "../picture/jingpin1.jpg";
import xueshengjie1 from "../picture/xueshengjie1.jpg";
import luntan1 from "../picture/luntan1.jpg";
import background from "../picture/background.png";
import tool from "../picture/tool.png";
import diannao from "../picture/diannao.png";
import caiwaibu from "../picture/caiwaibu.png";
import wenxuanbu from "../picture/wenxuanbu.png";
import renzibu from "../picture/renzibu.png";
import diannaobu from "../picture/diannaobu.png";
import dianqibu from "../picture/dianqibu.png";
import diy from "../picture/diy.png";
import fenxiang2 from "../picture/fenxiang2.png";
import fenxiang1 from "../picture/fenxiang1.png";
import huodong from "../picture/huodong.png";
import jicheng from "../picture/jicheng.png";

import ketang from "../picture/ketang.png";
import weixiu from "../picture/weixiu.png";

import xianshang from "../picture/xianshang.png";
import xuesheng from "../picture/xuesheng.png";
import zhiban from "../picture/zhiban.png";
import zhiyuanzhe from "../picture/zhiyuanzhe.png";
import qrwexin from "../picture/qr-wexin.jpg";
import qrbilibili from "../picture/qr-bilibili.jpg";
import qrqq from "../picture/qr-qq.png";
import beian from "../picture/beian.png";

import fivestars from "../picture/fivestars.png";
import shijia from "../picture/shijiashetuan.png";
import wujia from "../picture/wujiakecheng.png";
import gongyi from "../picture/gongyi.png";
import jingpinhuodong from "../picture/huodong.png";
const style_qrtest = {
  width: "100%",
  height: "100%",
};
const style_beian = {
  width: "18px",
  height: "18px",
};
export const Nav30DataSource = {
  wrapper: {
    className: "header3 home-page-wrapper",
  },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo",
    children: background,
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "item2",
        className: "header3-item",
        children: {
          href: "https://wiki.zjueva.net/",
          children: [
            {
              children: <></>,
              name: "text",
            },
            {
              name: "content~k6byeg17g6u",
              className: "",
              children: <b>维修资料</b>,
            },
          ],
        },
      },
      {
        name: "item~k6byeb33em",
        className: "header3-item",
        children: {
          href: "/#/ticket",
          children: [
            {
              children: (
                <>
                  <b>报名入口</b>
                </>
              ),
              name: "text",
            },
          ],
        },
      },

      {
        name: "item~k6byhi1zqeh",
        className: "header3-item",
        children: {
          href: "https://oreo.zjueva.net/",
          children: [{ children: <b>会员登录</b>, name: "text" }],
        },
      },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
};
export const Banner31DataSource = {
  wrapper: { className: "banner3  " },
  textWrapper: {
    className: "banner3-text-wrapper k6bxcwa6wb-editor_css",
    children: [
      {
        name: "nameEn",
        className: "banner3-name-en",
        children: (
          <>
            <p> Electrical Volunteer Association of ZJU</p>
          </>
        ),
      },
      {
        name: "slogan",
        className: "banner3-slogan k6bx9bxsgw-editor_css",
        children: "浙江大学学生E志者协会",
        texty: true,
      },
      {
        name: "name",
        className: "banner3-name k6bx9qqmas-editor_css",
        children: (
          <>
            <p>E我世界，志我人生</p>
          </>
        ),
      },
      {
        name: "button",
        className: "banner3-button ant-btn k6bxcnb8hlg-editor_css",
        href: "/#/ticket",
        children: (
          <>
            <b>加入我们</b>
          </>
        ),
      },
      {
        name: "time~k6bxdqq7sz",
        className: "banner3-time",
        children: (
          <>
            <b>2020秋季纳新/中国·杭州</b>
          </>
        ),
      },
    ],
  },
};
export const Feature20DataSource = {
  wrapper: { className: "home-page-wrapper content2-wrapper" },
  OverPack: { className: "home-page content2", playScale: 0.3 },
  imgWrapper: { className: "content2-img", md: 10, xs: 24 },
  img: {
    children: tool,
  },
  textWrapper: { className: "content2-text", md: 14, xs: 24 },
  title: {
    className: "content2-title k6bz79j5xeo-editor_css",
    children: "五星级社团  ",
  },
  content: {
    className: "content2-content k6bzcb3z43g-editor_css",
    children: (
      <>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          协会历史最早可追溯到1984年，前身为陈强先生创办的电器工程学院电气维修小组，是浙江大学创办最早的志愿维修服务集体，2008年创立学生E志者协会，于2016年升为5星级社团，更多获奖详情请点击
          <b>
            <a href="https://baike.baidu.com/item/%E6%B5%99%E6%B1%9F%E5%A4%A7%E5%AD%A6%E5%AD%A6%E7%94%9FE%E5%BF%97%E8%80%85%E5%8D%8F%E4%BC%9A/19391530?fr=aladdin">
              <i>了解更多</i>
            </a>
          </b>
        </p>
      </>
    ),
  },
};
export const Feature10DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: diannao,
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: { className: "content1-title", children: "公益型社团  " },
  content: {
    className: "content1-content",
    children: (
      <>
        <p>
          <u>
            <i>
              <b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp; 世界在变，E志者精神永远不变
              </b>
            </i>
          </u>
        </p>
        <p></p>
        <p>
          自社团成立以来，协会秉承“以服务社会为己任，搭建电器维修爱好者交流平台”的宗旨，致力于做安全用电和节约用电的实践者和宣传者，研究电力电气热点问题，为建设社会主义和谐社会贡献力量
        </p>
      </>
    ),
  },
};
export const Feature30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <>
            <p>
              协会主要架构
              <br />
            </p>
          </>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children: (
          <>
            <p>
              五大部门职能简介
              <br />
            </p>
          </>
        ),
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: caiwaibu,
          },
          textWrapper: { className: "content3-text k6rogje9n6d-editor_css" },
          title: {
            className: "content3-title k6rof9gjex-editor_css",
            children: (
              <a href="https://mp.weixin.qq.com/s/-V8en6GdLk-Cv4km8SYo4Q">
                <p>
                  财外部
                  <br />
                </p>
              </a>
            ),
          },
          content: {
            className: "content3-content k6rog7ap4c-editor_css",
            children: (
              <>
                <p>
                  &nbsp; &nbsp;
                  协会年度财务预算和结算的制定，规范协会各项财务手续，为协会争取更多的资金支持等
                  <br />
                </p>
              </>
            ),
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: wenxuanbu,
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title k6rogxj5m3r-editor_css",
            children: (
              <a href="https://mp.weixin.qq.com/s/S-uhGNp2LJtR3qIAjU-Y4w">
                <p>
                  文宣部
                  <br />
                </p>
              </a>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <>
                <p>
                  &nbsp; &nbsp;
                  协会形象的塑造和宣传，制定和执行每次活动前的宣传方案，活动现场的摄影和记录，活动后新闻稿的撰写和投出等
                  <br />
                </p>
              </>
            ),
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: renzibu,
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title k6rohgkzazi-editor_css",
            children: (
              <a href="https://mp.weixin.qq.com/s/VLMAcVkLFCQ_QmcqnEglbg">
                <p>
                  人资部
                  <br />
                </p>
              </a>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <>
                <p>
                  &nbsp; &nbsp;
                  协会活动的现场执行以及普通会员的管理，活动现场的安排和布置，普通会员志愿服务小时数的统计等
                  <br />
                </p>
              </>
            ),
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: diannaobu,
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title k6roi0sr9o-editor_css",
            children: (
              <a href="https://mp.weixin.qq.com/s/YjMZGxYKWf941BFHRBiiJQ">
                <p>
                  电脑部
                  <br />
                </p>
              </a>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <>
                <p>
                  &nbsp; &nbsp;
                  协会日常电脑维修服务，同时会负责开展若干次培训活动，面向全体会员旨在提高大家的维修水平
                  <br />
                </p>
              </>
            ),
          },
        },
      },
      {
        name: "block4",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: dianqibu,
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title k6roin896g-editor_css",
            children: (
              <a href="https://mp.weixin.qq.com/s/tN6mPHzVeD6RbjEqF_yWhA">
                <p>
                  电器部
                  <br />
                </p>
              </a>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <>
                <p>
                  &nbsp; &nbsp;
                  协会的电器维修与内部资料编篡，也会定期向会员科普一些电器的保养维修常识以及工具的使用方法
                  <br />
                </p>
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Feature80DataSource = {
  wrapper: { className: "home-page-wrapper feature8-wrapper" },
  page: { className: "home-page feature8" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "feature8-title-wrapper",
    children: [
      {
        name: "title",
        className: "feature8-title-h1",
        children: (
          <>
            <p>
              协会主要活动
              <br />
            </p>
          </>
        ),
      },
      {
        name: "content",
        className: "feature8-title-content",
        children: (
          <>
            <p>
              <i>以服务社会为己任，为建设社会主义和谐社会贡献力量</i>
              <br />
            </p>
          </>
        ),
      },
    ],
  },
  childWrapper: {
    className: "feature8-button-wrapper",
    children: [
      {
        name: "button",
        className: "feature8-button",
        children: {
          href: "/#/ticket",
          children: (
            <>
              <p>立即加入</p>
            </>
          ),
          target: "",
        },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: "feature8-carousel",
    wrapper: { className: "feature8-block-wrapper" },
    children: {
      className: "feature8-block",
      titleWrapper: {
        className: "feature8-carousel-title-wrapper",
        title: { className: "feature8-carousel-title" },
      },
      children: [
        {
          name: "block0",
          className: "feature8-block-row",
          gutter: 120,
          title: {
            className: "feature8-carousel-title-block",
            children: (
              <>
                <p>公益活动</p>
              </>
            ),
          },
          children: [
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child0",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children: <img src={zhiban} width={40} alt="img" />,
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: (
                      <a href="https://mp.weixin.qq.com/s/3NU4B1NJMa2fyPMfa6ER0A">
                        <p>
                          <b>日常值班</b>
                        </p>
                      </a>
                    ),
                  },
                  {
                    name: "content",
                    className: "feature8-block-content k6rxvzc0seb-editor_css",
                    children: (
                      <>
                        <p>
                          每天固定值班时间超过<b>6</b>
                          小时，为同学们提供免费维修电脑电器的服务
                          <br />
                        </p>
                      </>
                    ),
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child1",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children: (
                      <img src={xianshang} width={40} alt="xianshang" />
                    ),
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: (
                      <a href="https://mp.weixin.qq.com/s/vaaQJT_MUB3tGCabofXYIg">
                        <p>
                          <b>线上咨询</b>
                        </p>
                      </a>
                    ),
                  },
                  {
                    name: "content",
                    className: "feature8-block-content k6rxwi5wuik-editor_css",
                    children: (
                      <>
                        <p>
                          为全校师生提供电脑基础知识普及以及免费的购机咨询
                          <br />
                        </p>
                      </>
                    ),
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child2",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children: (
                      <img src={diannaobu} width={40} alt="diannanbu" />
                    ),
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: (
                      <a href="https://mp.weixin.qq.com/s/DVRq674tvVmJnFzrG9dUUg">
                        <p>
                          <b>公益进社会</b>
                        </p>
                      </a>
                    ),
                  },
                  {
                    name: "content",
                    className: "feature8-block-content k6rxwszwjur-editor_css",
                    children: (
                      <>
                        <p>
                          开展社区维修服务，积极拓展校外公益活动，积极与在杭其他高校拓展合作关系
                          <br />
                        </p>
                      </>
                    ),
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child3",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children: (
                      <img src={zhiyuanzhe} width={40} alt="zhiyuanzhe" />
                    ),
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: (
                      <a href="https://mp.weixin.qq.com/s/388x1PW1CNBph8a_7dWjig">
                        <p>
                          <b>志愿服务</b>
                          <br />
                        </p>
                      </a>
                    ),
                  },
                  {
                    name: "content",
                    className: "feature8-block-content k6rxx2szsa-editor_css",
                    children: (
                      <>
                        <p>
                          30年来，E志者协会始终立足于志愿维修服务，坚持为全校师生与社会群体提供公益服务
                          <br />
                        </p>
                      </>
                    ),
                  },
                ],
              },
            },
          ],
        },
        {
          name: "block1",
          className: "feature8-block-row",
          gutter: 120,
          title: {
            children: (
              <>
                <p>社团活动</p>
              </>
            ),
            className: "feature8-carousel-title-block",
          },
          children: [
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child0",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children: <img src={weixiu} width={40} alt="weixiu" />,
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: (
                      <a href="https://mp.weixin.qq.com/s/388x1PW1CNBph8a_7dWjig">
                        <p>
                          校园维修&amp;社区维修
                          <br />
                        </p>
                      </a>
                    ),
                  },
                  {
                    name: "content",
                    className: "feature8-block-content k6rxyghtzno-editor_css",
                    children: (
                      <>
                        <p>
                          协会日常值班维修，每月一次的学园义务维修和不定期开展的社区义务维修
                          <br />
                        </p>
                      </>
                    ),
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child1",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children: <img src={huodong} width={40} alt="huodong" />,
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: (
                      <a href="https://mp.weixin.qq.com/s/ohFvSbbmUaubnCj-z4qDcw">
                        <p>
                          社团精品活动
                          <br />
                        </p>
                      </a>
                    ),
                  },
                  {
                    name: "content",
                    className: "feature8-block-content k6rxyx9aadd-editor_css",
                    children: (
                      <>
                        <p>
                          每学年各部门都会开展相应的精品活动，优秀者会有第二课堂的加分&nbsp;
                          <br />
                        </p>
                      </>
                    ),
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child2",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",

                    children: <img src={ketang} width={40} alt="ketang" />,
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: (
                      <a href="https://mp.weixin.qq.com/s/KA7ggOmDcmhclWt0vCQC0Q">
                        <p>
                          维修知识课堂
                          <br />
                        </p>
                      </a>
                    ),
                  },
                  {
                    name: "content",
                    className: "feature8-block-content k6rxz5lsgkf-editor_css",
                    children: (
                      <>
                        <p>
                          协会每个长学期都会开办电脑电器维修知识精品课程，旨在传授相关的知识并交流经验
                          <br />
                        </p>
                      </>
                    ),
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child3",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children: <img src={xuesheng} width={40} alt="xuesheng" />,
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: (
                      <>
                        <p>
                          学生节活动
                          <br />
                        </p>
                      </>
                    ),
                  },
                  {
                    name: "content",
                    className: "feature8-block-content k6rxzt66fnu-editor_css",
                    children: (
                      <>
                        <p>
                          在每年的12月末学校举办的学生节中，协会会开展一系列活动向外界展示&nbsp;
                          <br />
                        </p>
                      </>
                    ),
                  },
                ],
              },
            },
          ],
        },
        {
          name: "elem~k6rr9jdpl9",
          className: "feature8-block-row",
          gutter: 120,
          title: {
            children: (
              <>
                <p>创新创E</p>
              </>
            ),
            className: "feature8-carousel-title-block",
          },
          children: [
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child0",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children: <img src={jicheng} width={40} alt="jicheng" />,
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: (
                      <>
                        <p>
                          <br />
                        </p>
                      </>
                    ),
                  },
                  {
                    name: "content",
                    className: "feature8-block-content k6ry0mq0ks-editor_css",
                    children: (
                      <a href="https://mp.weixin.qq.com/s/xGDr9QoajBd83RHuZPIZKg">
                        <p>
                          积极追求参与竞赛等创新实践活动
                          <br />
                        </p>
                      </a>
                    ),
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child1",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children: (
                      <img src={fenxiang1} width={40} alt="fenxiang1" />
                    ),
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: (
                      <>
                        <p>
                          <br />
                        </p>
                      </>
                    ),
                  },
                  {
                    name: "content",
                    className: "feature8-block-content k6ry1c380kk-editor_css",
                    children: (
                      <a href="https://mp.weixin.qq.com/s/IVyDrEojMEM6Zkr4u9DJGg">
                        <p>
                          “中控杯”参赛经验分享&nbsp;
                          <br />
                        </p>
                      </a>
                    ),
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child2",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children: (
                      <img src={fenxiang2} width={40} alt="fenxiang2"></img>
                    ),
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: (
                      <>
                        <p>
                          <br />
                        </p>
                      </>
                    ),
                  },
                  {
                    name: "content",
                    className: "feature8-block-content k6ry1to1v9g-editor_css",
                    children: (
                      <>
                        <p>
                          智能车竞赛经验分享
                          <br />
                        </p>
                      </>
                    ),
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child3",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children: <img src={diy} width={40} alt="diy" />,
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: (
                      <>
                        <p>
                          <br />
                        </p>
                      </>
                    ),
                  },
                  {
                    name: "content",
                    className: "feature8-block-content k6ry25i9bt9-editor_css",
                    children: (
                      <>
                        <p>
                          废旧电子元件创意DIY大赛
                          <br />
                        </p>
                      </>
                    ),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
};

export const Feature60DataSource = {
  wrapper: { className: "home-page-wrapper feature6-wrapper" },
  OverPack: { className: "home-page feature6", playScale: 0.3 },
  Carousel: {
    className: "feature6-content",
    dots: false,
    wrapper: { className: "feature6-content-wrapper" },
    titleWrapper: {
      className: "feature6-title-wrapper",
      barWrapper: {
        className: "feature6-title-bar-wrapper",
        children: { className: "feature6-title-bar" },
      },
      title: { className: "feature6-title" },
    },
    children: [
      {
        title: { className: "feature6-title-text", children: "电脑  " },
        className: "feature6-item",
        name: "block0",
        children: [
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child0",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "件/次  " },
              toText: true,
              children: "1562",
            },
            children: {
              className: "feature6-text",
              children: "年均维修件数  ",
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child1",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "%  " },
              toText: true,
              children: "90.7",
            },
            children: {
              className: "feature6-text",
              children: "维修成功率  ",
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child2",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "时  " },
              toText: true,
              children: "8",
            },
            children: {
              className: "feature6-text",
              children: "值班时间  ",
            },
          },
        ],
      },
      {
        title: {
          className: "feature6-title-text",
          children: (
            <>
              <p>电器</p>
            </>
          ),
        },
        className: "feature6-item",
        name: "block1",
        children: [
          {
            md: 8,
            xs: 24,
            name: "child0",
            className: "feature6-number-wrapper",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "件  " },
              toText: true,
              children: "218",
            },
            children: {
              className: "feature6-text",
              children: (
                <>
                  <p>年均维修量</p>
                </>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            name: "child1",
            className: "feature6-number-wrapper",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "%  " },
              toText: true,
              children: "81.3",
            },
            children: {
              className: "feature6-text",
              children: "维修成功率  ",
            },
          },
          {
            md: 8,
            xs: 24,
            name: "child2",
            className: "feature6-number-wrapper",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "时  " },
              toText: true,
              children: "8",
            },
            children: {
              className: "feature6-text",
              children: "值班时间  ",
            },
          },
        ],
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: "home-page-wrapper content5-wrapper" },
  page: { className: "home-page content5" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      { name: "title", children: "精彩瞬间回放  ", className: "title-h1" },
      {
        name: "content",
        className: "title-content",
        children: "协会有关照片欣赏  ",
      },
    ],
  },
  block: {
    className: "content5-img-wrapper",
    gutter: 16,
    children: [
      {
        name: "block0",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: back1,
          },
          content: { children: "E志新晚" },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },

          img: {
            children: richang1,
          },
          content: { children: "日常值班(1)" },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: richang2,
          },
          content: { children: "日常值班(2)" },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: xueyuan1,
          },
          content: { children: "学院维修" },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: shequ1,
          },
          content: { children: "社区维修" },
        },
      },
      {
        name: "block5",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: jingpin1,
          },
          content: { children: "精品活动" },
        },
      },
      {
        name: "block6",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: xueshengjie1,
          },
          content: { children: "学生节" },
        },
      },
      {
        name: "block7",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: luntan1,
          },
          content: { children: "公益论坛" },
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: "home-page-wrapper content9-wrapper" },
  page: { className: "home-page content9" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      { name: "title", children: "协会荣誉  ", className: "title-h1" },
    ],
  },
  block: {
    className: "timeline",
    children: [
      {
        name: "block0",
        className: "block-wrapper",
        playScale: 0.4,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper k6c37bgt0io-editor_css" },
          img: {
            className: "block-img k6c3b63w63l-editor_css",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg",
          },
          name: {
            className: "block-name k6c3bgi5wr-editor_css",
            children: "2008-2009年  ",
          },
          post: {
            className: "block-post k6c3bvphdf-editor_css",
            children: "公司 职位",
          },
          time: {
            className: "block-time",
            children: <></>,
          },
          title: {
            className: "block-title",
            children: (
              <>
                <p>
                  2009年浙江大学学生E志者协会获“浙江省优秀志愿者服务队伍”荣誉称号
                </p>
                <p></p>
                <p>
                  2009年浙江大学学生E志者协会获“浙江大学十大优秀志愿者服务集体”荣誉称号
                </p>
                <p></p>
                <p>
                  2009年浙江大学学生E志者协会被评为“2009-2010年度浙江大学校级优秀社团”
                </p>
              </>
            ),
          },
          content: { className: "block-content", children: "" },
        },
      },
      {
        name: "block~k6c3e920hz",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper k6c37bgt0io-editor_css" },
          img: {
            className: "block-img k6c3b63w63l-editor_css",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg",
          },
          name: {
            className: "block-name k6c3bgi5wr-editor_css",
            children: "2010-2014年  ",
          },
          post: {
            className: "block-post k6c3bvphdf-editor_css",
            children: "公司 职位",
          },
          time: {
            className: "block-time",
            children: <></>,
          },
          title: {
            className: "block-title",
            children: (
              <>
                <p>2010年末浙江大学学生E志者协会由一星级社团跃升为三星级社团</p>
                <p></p>
                <p>
                  2010——2012年连续三年浙江大学学生E志者协会获评“浙江大学学生十佳社团”
                </p>
                <p></p>
                <p>2014年浙江大学学生E志者协会荣升为浙江大学四星级社团</p>
              </>
            ),
          },
          content: { className: "block-content", children: "" },
        },
      },
      {
        name: "block~k6c3e9yqitf",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper k6c37bgt0io-editor_css" },
          img: {
            className: "block-img k6c3b63w63l-editor_css",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg",
          },
          name: {
            className: "block-name k6c3bgi5wr-editor_css",
            children: "2015-2018年  ",
          },
          post: {
            className: "block-post k6c3bvphdf-editor_css",
            children: "公司 职位",
          },
          time: {
            className: "block-time",
            children: <></>,
          },
          title: {
            className: "block-title",
            children: (
              <>
                <p>2015年浙江大学学生E志者协会入选浙江大学最美公益服务集体</p>
                <p></p>
                <p>2016年浙江大学学生E志者协会荣升为浙江大学五星级社团</p>
                <p></p>
                <p>2017年浙江大学学生E志者协会获社团精品课程一等奖</p>
                <b>此外，社团连续三年被评为“年度浙江大学十佳社团”</b>
              </>
            ),
          },
          content: { className: "block-content", children: "" },
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: "home-page-wrapper teams1-wrapper" },
  page: { className: "home-page teams1" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <>
            <p>
              精彩瞬间回放
              <br />
            </p>
          </>
        ),
      },
    ],
  },
  block: {
    className: "block-wrapper",
    children: [
      {
        name: "block0",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              className: "teams1-image k6d84n0pi88-editor_css",
              img: {
                children: back1,
              },
            },

            {
              name: "content1",
              className: "teams1-content k6d8cnw0kx-editor_css",
              children: (
                <>
                  <p>cxz666</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: "block~k6d8gm5t74a",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              className: "teams1-image k6d84n0pi88-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ",
            },
            {
              name: "title",
              className: "teams1-title k6d8cd2spqg-editor_css",
              children: "叶秀英",
            },
            {
              name: "content",
              className: "teams1-job k6d8cjs331-editor_css",
              children: "公司+职位 信息暂缺",
            },
            {
              name: "content1",
              className: "teams1-content k6d8cnw0kx-editor_css",
              children: (
                <>
                  <p>cxz</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: "block~k6d8gmrc9da",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              className: "teams1-image k6d84n0pi88-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ",
            },
            {
              name: "title",
              className: "teams1-title k6d8cd2spqg-editor_css",
              children: "叶秀英",
            },
            {
              name: "content",
              className: "teams1-job k6d8cjs331-editor_css",
              children: "公司+职位 信息暂缺",
            },
            {
              name: "content1",
              className: "teams1-content k6d8cnw0kx-editor_css",
              children: (
                <>
                  <p>cxz</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: "block~k6d8gn5m3i9",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              className: "teams1-image k6d84n0pi88-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ",
            },
            {
              name: "title",
              className: "teams1-title k6d8cd2spqg-editor_css",
              children: "叶秀英",
            },
            {
              name: "content",
              className: "teams1-job k6d8cjs331-editor_css",
              children: "公司+职位 信息暂缺",
            },
            {
              name: "content1",
              className: "teams1-content k6d8cnw0kx-editor_css",
              children: (
                <>
                  <p>cxz</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: "block~k6d8gnp75f",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              className: "teams1-image k6d84n0pi88-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ",
            },
            {
              name: "title",
              className: "teams1-title k6d8cd2spqg-editor_css",
              children: "叶秀英",
            },
            {
              name: "content",
              className: "teams1-job k6d8cjs331-editor_css",
              children: "公司+职位 信息暂缺",
            },
            {
              name: "content1",
              className: "teams1-content k6d8cnw0kx-editor_css",
              children: (
                <>
                  <p>cxz</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: "block~k6d8go2ngsc",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              className: "teams1-image k6d84n0pi88-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ",
            },
            {
              name: "title",
              className: "teams1-title k6d8cd2spqg-editor_css",
              children: "叶秀英",
            },
            {
              name: "content",
              className: "teams1-job k6d8cjs331-editor_css",
              children: "公司+职位 信息暂缺",
            },
            {
              name: "content1",
              className: "teams1-content k6d8cnw0kx-editor_css",
              children: (
                <>
                  <p>cxz</p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
};

export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          className: "logo",
          children: (
            <span>
              <p>
                想要了解更多？
                <br />
              </p>
            </span>
          ),
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: (
                <span>
                  <p>
                    <br />
                  </p>
                  <p>
                    快动动手指&nbsp; <b>E键关注</b>
                  </p>
                  <p>
                    <br />
                  </p>
                </span>
              ),
              className: "kd2miilu93t-editor_css",
            },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <span>
                <span>
                  <p>QQ</p>
                </span>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: "link0",
              children: (
                <span>
                  <img src={qrqq} alt="" style={style_qrtest}></img>
                </span>
              ),
              className: "kd2mmt7a7qg-editor_css",
            },
            {
              name: "link1",
              children: (
                <span>
                  <br />
                  <b>纳新咨询群：1126888868</b>
                </span>
              ),
              className: "kd2mqk40hca-editor_css",
            },
          ],
        },
      },
      {
        name: "block~kd2muekobzl",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <span>
                <p>微信公众号</p>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: "link0",
              children: (
                <span>
                  <img src={qrwexin} alt="" style={style_qrtest}></img>
                </span>
              ),
              className: "kd2mmt7a7qg-editor_css",
            },
          ],
        },
      },
      {
        name: "block~kd2muff5cyp",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <p>Bilibili&nbsp;</p>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: "link0",
              children: (
                <span>
                  <img src={qrbilibili} alt="" style={style_qrtest}></img>
                </span>
              ),
              className: "kd2mmt7a7qg-editor_css",
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <span>
        <span class="first">
          ©2008-2020 浙江大学学生E志者协会 All Rights Reserved
        </span>
        <p>
          <span>
            <a href="http://www.beian.miit.gov.cn/">浙ICP备20022913号-2</a>
            <img style={style_beian} src={beian} alt="我爬了" />

            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602011155">
              浙公网安备 33010602011155号
            </a>
          </span>
        </p>
      </span>
    ),
  },
};

export const Content110DataSource = {
  OverPack: {
    className: "home-page-wrapper content11-wrapper k6lxojfwiy-editor_css",
    playScale: 0.3,
  },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      {
        name: "title",
        children: (
          <>
            <p>悠久的协会历史</p>
          </>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        children: (
          <>
            <p>
              <i>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; ——1984-2020
              </i>
            </p>
          </>
        ),
        className: "title-content",
      },
      {
        name: "title~k6lxiecs7mc",
        className: "k6lxlv638d8-editor_css",
        children: (
          <>
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              浙江大学学生E志者协会的前身是1984年陈强先生创办的电器工程学院电气维修小组。
              <br />
            </p>
          </>
        ),
      },
      {
        name: "title~k6lxii52wgt",
        className: "k6lxnkyb05e-editor_css",
        children: (
          <>
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;步入21世纪，为适应新时期学校教育体制的改革和管理模式的创新，在电气工程学院团委的大力支持和推动下，电器维修小组终于在2008年
              <span>
                9月正式成为校级学生社团，面向全校吸纳志愿维修的志愿者，在全校范围内搭建以志愿维修为主体的服务平台，做志愿维修的践行者，做安全用电
              </span>
              <span>
                和节约用电的实践者和宣传者，做电力热点问题及电器电脑新尖问题
              </span>
            </p>
          </>
        ),
      },
      {
        name: "title~k6lxiiz6njn",
        className: "k6lxrmle9fu-editor_css",
        children: (
          <>
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;在此后，协会抓紧机遇，在做好本职工作的同时，积极开拓其他公益志愿活动，服务广大师生与社会群众。多年来，协会还在组织架构、运行管理机制、文化建设、对外宣传等方面展开了积极的探索，开展了多项校级精品活动，提高了协会在校园文化中的知名度和影响力。
              <br />
            </p>
          </>
        ),
      },
      {
        name: "title~k6lxsl0gn1",
        className: "k6lxsmos5a-editor_css",
        children: (
          <>
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;近五年来，浙江大学学生E志者协会凭借出色的表现，屡次获得“浙江大学校级优秀社团”、“校级十佳社团”、“青年志愿服务优秀集体”等荣誉称号。2015年4月，浙江大学E志者协会荣升为校四星级社团。2016年6月，浙江大学学生E志者协会获评“浙江大学学生示范性社团”，该奖项是浙江大学社团最高荣誉。
              <br />
            </p>
          </>
        ),
      },
      {
        name: "image",
        className: "k6ly1aw82ke-editor_css",
        children: <img src={history} width="360" height="300" alt="jpg"></img>,
      },
      {
        name: "image~k6ly6iq7hge",
        className: "k6ly6kbgb-editor_css",
        children: <img src={jingpin1} width="360" height="300" alt="jpg"></img>,
      },
      {
        name: "title~k6n8yao5dk8",
        className: "k6n8yboe41-editor_css",
        children: (
          <>
            <p>丰富的社团活动</p>
          </>
        ),
      },
    ],
  },
  button: {
    className: "k6n8x5ig5jn-editor_css",
    children: {
      a: { className: "button", href: "/#/ticket", children: "立即报名" },
    },
  },
};

export const Feature13DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: shequ1,
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: {
    className: "content1-title",
    children: (
      <>
        <p>
          校园维修&amp;社区维修
          <br />
        </p>
      </>
    ),
  },
  content: {
    className: "content1-content k6lymhkssyk-editor_css",
    children: (
      <>
        <p>
          协会日常值班维修，每月一次的学园义务维修和不定期开展的社区义务维修为同学们和社区居民的生活带来了极大的便利。
          <br />
        </p>
        <p>
          <br />
        </p>
        <p>
          <br />
        </p>
      </>
    ),
  },
};
export const Feature11DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: jingpin1,
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: {
    className: "content1-title",
    children: (
      <>
        <p>
          电脑电器维修知识课堂（社联精品课程）
          <br />
        </p>
      </>
    ),
  },
  content: {
    className: jingpin1,
    children: (
      <>
        <p>
          协会每个长学期都会开办电脑电器维修知识精品课程，旨在传授对于电脑电器维修感兴趣的同学相关的知识并交流经验，方便同学们自主解决生活中遇到的简单的电脑电器故障。2015年秋冬学期精品课程荣获浙江大学学生社团精品课程评比一等奖。
        </p>
      </>
    ),
  },
};
export const Feature12DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: xueshengjie1,
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: {
    className: "content1-title",
    children: (
      <>
        <p>
          学生节活动/社团精品活动
          <br />
        </p>
      </>
    ),
  },
  content: {
    className: "content1-content k6lyqr8k4ri-editor_css",
    children: (
      <>
        <div>
          在每年的12月末浙江大学学生节期间，协会应邀参与举办学生节社团体验日，协会会在文化广场举办有趣的互动活动和电路DIY活动，鼓励大家自己动手体验LED简单电路的制作。
        </div>
        <p>
          <br />
        </p>
      </>
    ),
  },
};
export const Content40DataSource = {
  wrapper: { className: "home-page-wrapper content4-wrapper" },
  page: { className: "home-page content4 ke03sm80c9e-editor_css" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>小E与你，就在浙里</p>
          </span>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content content4-title-content",
        children: (
          <span>
            <span>
              <span>
                <p>
                  <i>也许明年的你就会出现在这里哦</i>
                </p>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  video: {
    className: "content4-video",
    children: (
      //这些是不起作用的  只是个装饰，实际得在js文件中改
      <iframe
        src="//player.bilibili.com/player.html?aid=244539528&bvid=BV1rv41117UV&cid=236113571&page=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
        {" "}
      </iframe>
    ),
  },
};
export const Feature31DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <span>
              <span>
                <p>
                  协会荣誉
                  <br />
                </p>
              </span>
            </span>
          </span>
        ),
        className: "title-h1 keedh95kxlm-editor_css",
      },
      {
        name: "content",
        className: "title-content",
        children: (
          <span>
            <span>
              <span>
                <p>仅摘取近期部分荣誉展示</p>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: fivestars,
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <p>五星级社团</p>
              </span>
            ),
          },
          content: {
            className: "content3-content keedl4m5lk-editor_css",
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      2016年协会荣升为浙江大学<b>五星级社团</b>，至今
                      <b>已经连续四年</b>保持这一称号
                      <br />
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: shijia,
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <p>十佳社团</p>
              </span>
            ),
          },
          content: {
            className: "content3-content keedn4gkykf-editor_css",
            children: (
              <span>
                <p>
                  2016-2019年连续<b>获得三年</b>十佳社团荣誉称号，近九年
                  <b>累计获得七次</b>十佳社团称号
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: wujia,
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <p>五佳课程</p>
              </span>
            ),
          },
          content: {
            className: "content3-content keedi0sp7vt-editor_css",
            children: (
              <span>
                <span>
                  <p>
                    近年来协会连续多次获得“<b>五佳课程</b>
                    ”，“精品课程一等奖”等称号，精品课程也备受学员好评
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: jingpinhuodong,
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <p>精品活动</p>
              </span>
            ),
          },
          content: {
            className: "content3-content keedtwaja47-editor_css",
            children: (
              <span>
                <span>
                  <p>
                    在学生社团文化节上举办的精品活动多次获得奖项，2019年、2018年均获得二等奖
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block4",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: gongyi,
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <span>
                  <span>
                    <p>公益先锋</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <span>
                <p>
                  2019年协会获得<b>至美公益项目</b>二等奖，同年获
                  <b>“尚德学子”</b>
                  奖学金社会公益奖，2015年获年度浙江大学最美公益集体。
                  <br />
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block5",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <p>社会实践</p>
              </span>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <span>
                <p>
                  2019年赴甘肃酒泉暑期社会实践团获杭州日报2019大学生社会实践擂台赛优秀奖、浙江大学优秀实践团队。2017年获浙江大学年度暑期大学生社会实践活动优秀论文
                  <br />
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
