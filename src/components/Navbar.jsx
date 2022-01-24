import React, {useState, useEffect} from 'react';
import {Typography, Menu, Avatar, Button} from 'antd' 
import {Link} from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined,MenuOutlined } from '@ant-design/icons';
import icon from "../images/cryptocurrency.jpg"

const Navbar = () => {
  
  const [activeMenu, setActiveMenu] = useState(true)
  const [mobile, setMobile] = useState(null)

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize',handleResize)
  },[])

  useEffect(()=>{
    if(mobile){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  },[mobile])

  const handleMenuClick = () => {
    if(activeMenu && mobile){
      setActiveMenu(false)
    }
  }

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo"><Link to="/">Cryptoverse</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined/>
        </Button>
      </div>
      {activeMenu && 
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined/>} key='home' onClick={() => handleMenuClick()}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>} key='cryptocurrencies' onClick={() => handleMenuClick()}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>} key='exchanges' onClick={() => handleMenuClick()}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} key='news' onClick={() => handleMenuClick()}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
      }
    </div>
  );};

export default Navbar;
