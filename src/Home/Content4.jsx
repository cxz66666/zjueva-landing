import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import VideoPlay from "react-sublime-video";
import { getChildrenToRender } from "./utils";

function Content4(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animation = {
    y: "+=30",
    opacity: 0,
    type: "from",
    ease: "easeOutQuad",
  };

  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div key="title" {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack {...dataSource.OverPack}>
          <TweenOne
            key="video"
            animation={{ ...animation, delay: 300 }}
            {...dataSource.video}
          >
            {isMobile ? (
              <iframe
                width="100%"
                src="//player.bilibili.com/player.html?aid=244539528&bvid=BV1rv41117UV&cid=236113571&page=1"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
              ></iframe>
            ) : (
              <iframe
                width="100%"
                height="650px"
                src="//player.bilibili.com/player.html?aid=244539528&bvid=BV1rv41117UV&cid=236113571&page=1"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
              >
                {" "}
              </iframe>
            )}
          </TweenOne>
        </OverPack>
      </div>
    </div>
  );
}

export default Content4;
