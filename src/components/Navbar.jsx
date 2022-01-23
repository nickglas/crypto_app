import React from 'react';
import {Typography, Menu, Avatar} from 'antd' 
import {Link} from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import icon from "../images/cryptocurrency.jpg"

const Navbar = () => {
  
  return (
    <div className="nav-container">
      <div className="logo-container">``
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo"><Link to="/">Cryptoverse</Link></Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined/>} key='home' >
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>} key='cryptocurrencies'>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>} key='exchanges'>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} key='news'>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );};

export default Navbar;
