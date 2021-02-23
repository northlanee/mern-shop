import React from "react";
import { Menu, Layout } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const { Header: HeaderAntd } = Layout;

const Header: React.FC<{}> = () => {
  return (
    <HeaderAntd
      style={{
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      <div className="logo">PROSHOP</div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <ShoppingCartOutlined /> Cart
        </Menu.Item>
        <Menu.Item key="2">
          <UserOutlined /> Sign In
        </Menu.Item>
      </Menu>
    </HeaderAntd>
  );
};

export default Header;
