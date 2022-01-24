import React, { useEffect, useState } from 'react';
import { useGetCryptoExchangesQuery } from '../services/cryptoExchangesApi';
import { Card, Input, Col, Row, Typography } from 'antd';
import millify from 'millify';

const {Title, Text} = Typography

const Exchanges = ({simplified}) => {

  const {data, isFetching} = useGetCryptoExchangesQuery(simplified ? 10 : 25)
  const [searchTerm, setSearchTerm] = useState('')
  const [markets, setMarkets] = useState([])

  useEffect(() => {
    const filteredData = data?.filter((market) => market.name.toLowerCase().includes(searchTerm))
    setMarkets(filteredData)
    console.warn(filteredData);
  },[searchTerm, data])

  if(isFetching) return "Loading..."

  return(
    <>
      {!simplified &&
        <div className="search-crypto">
          <Input placeholder='search crypto markets' onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
      }
      <Row gutter={[24,24]}>
        {markets?.map((market) => (
          <Col xs={24} md={12} lg={8} key={market.id}>
            <a href={market?.url} target="_blank" rel='noreferrer'>
              <Card hoverable className='news-card'>
                  <div className="news-image-container">
                    <Title className='news-title' level={4}>
                      {market.name}
                    </Title>
                    <img src={market.image} alt='Exchange market' style={{maxHeight:100, maxWidth:100}} />
                  </div>
                  <p>
                    {market.description}
                  </p>
                  <div className='exchangeInfoContainer'>
                    <Text style={{display:'block'}}>Exhange ranking: {market?.trust_score_rank}</Text>
                    <Text style={{display:'block'}}>Trust score rating: {market?.trust_score}</Text>
                    <Text style={{display:'block'}}>Active since: {market?.year_established}</Text>
                    <Text style={{display:'block'}}>24 Trading volume (BTC) {millify(market?.trade_volume_24h_btc)}</Text>
                  </div>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
