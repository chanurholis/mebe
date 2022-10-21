import { FC } from "react";

import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";

interface IProps {
  items: any;
};

const SiderLayout: FC<IProps> = ({ items }) => {
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
    </Sider>
  )
}

export default SiderLayout;