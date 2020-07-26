import React from 'react';
import Sheet from './components/Sheet';
import { BackTop,Layout} from 'antd';
import Background from './background2.jpg';
import UploadToOSS from './components/UploadToOSS'

class Entry extends React.Component {
  state = {
    stuid : null,
  }
  setID = (value) =>{
    this.setState({stuid:value})
  }
  render() {
    return (
      <Layout style={{backgroundImage: `url(${Background})`}}>
        <div style={{background:'#fff',borderRadius:20,
        paddingTop:48, paddingLeft:24, paddingRight:24, marginTop: 24, marginLeft: 24, marginRight: 24,marginBottom:24,opacity:0.75 }} >
          <h2 class="ant-typography" style={{ textAlign: 'center' }}>
            浙江大学学生E志者协会2020年纳新报名表
          </h2>
          <center>
            <UploadToOSS stuid={this.state.stuid} />
          </center>
          <Sheet setID = {this.setID} />
          <BackTop visibilityHeight={200} />
          <p style={{textAlign: 'center'}}>
            浙江大学学生E志者协会©2020 Created by EVATech
          </p>
        </ div>
      </Layout>
    );
  }
}
export default Entry;
