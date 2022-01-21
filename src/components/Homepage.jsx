import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic} from 'antd'
import {LinkedList} from 'react-router-dom'

const {Title} = Typography

const Homepage = () => {
  return(
    <>
      <Title level="2" className="heading">Global crypto stats</Title>
    </>
  );
};

export default Homepage;
