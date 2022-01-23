import React from 'react';
import { Line } from 'react-chartjs-2';
import {Col, Row, Typography} from 'antd'

//register charts
import Chart from 'chart.js/auto';

const {Title} = Typography

const LineChart = ({coinHistory, currentPrice, coinName}) => {

  const coinPrice = []
  const coinTimestamp = []

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }
  
  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString());
  }

  console.warn(coinTimestamp.reverse());

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice.reverse(),
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  }

  const options = {
    scales: {
      yAxis: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className='chart-title'>
          {coinName} Price chart
        </Title>
        <Col className="price-container">
          <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
          <Title level={5} className='current-price'>Current {coinName} Price: ${currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options}/>
    </>
  );
};

export default LineChart;
