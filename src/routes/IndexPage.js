import React from "react";
import GitHup from "./GitHup";
import Block from "dxc-flex";
import Main from "./Main/Main";
import Donation from "./Donation/Donation";
import qqShare from "qq-share";
qqShare({
  title: "拒绝盗用身份证信息，如有违法请点击举报！",
});
export default class IndexPage extends React.Component {
  render() {
    return (
      <div style={{ padding: "30px 15px" }}>
        <Donation />
        <Main />
        <Block vertical="center" horizontal="center">
          <div>石小花花倾情打造</div>
          <GitHup />
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
      </div>
    );
  }
}
