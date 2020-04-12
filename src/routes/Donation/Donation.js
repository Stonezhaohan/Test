import React from "react";
import Block from "dxc-flex";
import wx from "./wx.png";
import zfb from "./zfb.png";
import DonationItem from "./DonationItem";

export default class Donation extends React.Component {
  render() {
    return (
      <Block layout="vertical" horizontal="center" style={{ margin: "30px 0" }}>
        <Block horizontal="center" style={{ fontSize: 18, fontWeight: 700, marginBottom: 15 }}>
          快拿起你的打手机扫我吧！一分不嫌少，一块不嫌多！
        </Block>
        <Block>
          <DonationItem name="微信" qr={wx} />
          <DonationItem name="支付宝" qr={zfb} />
        </Block>
      </Block>
    );
  }
}
