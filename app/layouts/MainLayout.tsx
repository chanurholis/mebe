import { FC, createElement, ReactElement } from 'react';

import { Layout } from 'antd';
import type { MenuProps } from 'antd';
import { DashboardOutlined, ThunderboltOutlined } from '@ant-design/icons';

import SiderLayout from '@/layouts/SiderLayout';
import FooterLayout from '@/layouts/FooterLayout';
import HeaderLayout from '@/layouts/HeaderLayout';

const { Content } = Layout;

const items: MenuProps['items'] = [
  {
    key: String(1),
    icon: createElement(DashboardOutlined),
    label: 'Dashboard',
  },
  {
    key: String(2),
    icon: createElement(ThunderboltOutlined),
    label: 'World Cup',
  },
];

interface IProps {
  children: ReactElement;
}

const MainLayout: FC<IProps> = ({ children }) => (
  <Layout hasSider>
    <SiderLayout items={items} />
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <HeaderLayout />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        {children}
      </Content>
      <FooterLayout label='Ant Design ©2018 Created by Ant UED' />
    </Layout>
  </Layout>
);

export default MainLayout;