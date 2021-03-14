const activated = true;
const department = ["", "电脑部", "电器部", "文宣部", "人资部", "财外部"];

export default function successInform(phone, name, stuID, first, second) {
  if (!activated) return;
  // console.log(phone, name, stuID, first, second);
  let nownum = localStorage.getItem("EVA_SMS_SERVICE");
  if (nownum === null) localStorage.setItem("EVA_SMS_SERVICE", "1");
  else if (nownum === "1") localStorage.setItem("EVA_SMS_SERVICE", "2");
  else if (nownum === "2") localStorage.setItem("EVA_SMS_SERVICE", "3");
  if (nownum === "3") return;
  // const Core = require("@alicloud/pop-core");
  // let client = new Core({
  //   accessKeyId: "*",
  //   accessKeySecret: "*",
  //   endpoint: "https://dysmsapi.aliyuncs.com",
  //   apiVersion: "2017-05-25",
  // });

  // let temp = {
  //   name: name,
  //   stuID: stuID,
  //   first: department[first],
  //   second: department[second],
  // };
  // temp = JSON.stringify(temp);

  // let params = {
  //   RegionId: "cn-hangzhou",
  //   PhoneNumbers: phone,
  //   SignName: "EVA记录",
  //   TemplateCode: "SMS_199600228",
  //   TemplateParam: temp,
  // };
  // // console.log(params);
  // let requestOption = {
  //   method: "POST",
  //   headers: {},
  // };

  // client.request("SendSms", params, requestOption);
}
