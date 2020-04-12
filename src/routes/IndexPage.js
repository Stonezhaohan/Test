import React from "react";
import GitHup from "./GitHup";
import Block from "dxc-flex";
import Main from "./Main/Main";
import Donation from "./Donation/Donation";
import qqShare from "qq-share";
qqShare({
  title: "拒绝盗用身份证信息，如有违法请点击举报！",
  desc: "这是一款最安全，最快速的纯前端图片加水印，拒绝上传保证个人信息安全。",
  imgUrl: "https://www.mps.gov.cn/"
});
export default class IndexPage extends React.Component {
  render() {
    return (
      <div style={{ padding: "30px 15px" }}>
        <div
          style={{ textAlign: "center", fontSize: 18, fontWeight: 700, marginBottom: 15 }}
        >
          最新Canvas算法加水印、拒绝上传、防止破解、保证个人信息安全。
        </div>
        <Block vertical="center" horizontal="center">
          <div>石小花花倾情打造</div>
          <GitHup />
        </Block>
        <Block horizontal="center" style={{ fontSize: 16, fontWeight: 700, marginTop: 15 }}>
          主要用途
        </Block>
        <Block style={{ margin: "15px 0" }} horizontal="center">
          在各种证件上添加“仅用于办理XXXX，他用无效。”，防止证件被他人盗用！
        </Block>
        <Block horizontal="center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1b9af7" }}
            href="https://www.mps.gov.cn/"
          >
            拒绝盗用身份证信息，如有违法请点击举报！
          </a>
        </Block>
        <Main />
        <Donation />
      </div>
    );
  }
}
