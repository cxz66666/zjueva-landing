import { Upload, Icon, message , Button , Avatar} from 'antd';
import React from 'react';
import axios from 'axios';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class UploadToOSS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headers:{
            },
            fileData: null,
        };
    }


    beforeUpload = (file)=>{
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('只能上传JPG/PNG格式的图片哦！');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('图像文件要小于2MB哦！');
        }
        if(!this.props.stuid){
            message.error("请先填写学号！");
        }
        if (isJpgOrPng && isLt2M && this.props.stuid){
            if(file.type === 'image/png') {
                this.setState({headers:{            
                    'Content-Type': 'application/octet-stream',
                    'stuid':this.props.stuid,
                    'pic-type':'png'}});
            }else{
                this.setState({headers:{            
                    'Content-Type': 'application/octet-stream',
                    'stuid':this.props.stuid,
                    'pic-type':'jpg'}});
            }
            let reader = new FileReader();
            reader.readAsArrayBuffer(file);
            getBase64(file, imageUrl =>
                this.setState({
                    imageUrl,
            }),)
            return new Promise((resolve) => {
                reader.onload = (e) => {
                    this.setState({fileData:reader.result});
                    resolve()
                }
            })
        }else{
            return false;
        }
    }
    handleChange = info => {
    
    };
    customRequest = async () =>{
        if(this.state.fileData === null){
            message.error("图片未能正确读取哦！请重试！")
            return
        }
        console.log(this.state.headers)
        let result =  await axios(
            'https://1299271970796699.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/oss_upload/upload/',
            {
                headers: this.state.headers,
                method: "POST",
                data: this.state.fileData,
            }
        )
        if (result.data==="Success!") {
            message.success("上传成功!(您还可以点击预览图继续上传以覆盖此次上传的图片)")
        }else{
            message.error("上传失败!可能是网络问题！")
        }
    }


    render() {
        const uploadButton = (
            <Button style={{marginBlockEnd:24}}>
                <Icon type="upload" /> 点击或拖拽文件到此处以上传照片
            </Button>
        );
        const { imageUrl } = this.state;
        return (
        <Upload
            showUploadList = {false}
            beforeUpload={this.beforeUpload}
            onChange={this.handleChange}
            customRequest = {this.customRequest}
        >
            {imageUrl ?<Avatar shape="square" size={120} icon="user" src= {imageUrl} style={{marginBlockEnd:24}}/> : uploadButton}
        </Upload>
        );
    }
}
export default UploadToOSS;