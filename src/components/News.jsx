import {React, useEffect, useState} from 'react';
import {Input, Typography, Row, Col, Avatar, Card} from 'antd'
import moment from 'moment';

import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi'

const {Text, Title} = Typography

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const News = ({simplified}) => {

  const {data: cryptoNews, isFetching } = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 })

  const [searchTerm, setSearchTerm] = useState('');
  const [news, setNews] = useState([]);

  useEffect(()=>{
    const filteredData = cryptoNews?.value?.filter((article) => article.name.toLowerCase().includes(searchTerm));
    setNews(filteredData)
  },[searchTerm,cryptoNews])

  if(isFetching || !cryptoNews?.value) return "Loading..."


  return(
    <>
      {!simplified && 
        <div className='search-crypto'>
          <Input placeholder='search the news' onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
      }
      
      <Row gutter={[24,24]}>
        {news?.map((article, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={article.url} target='_blank' rel='noreferrer'>
                <div className="news-image-container">
                  <Title className='news-title' level={4}>
                    {article.name}
                  </Title>
                  <img src={article?.image?.thumbnail?.contentUrl || demoImage} alt='article images' style={{maxWidth:'100px', maxHeight:'100px'}}/>
                </div>
                <p>
                  {article.description > 100 ? `${article.description.substring(0,100)}...` : article.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar src={article.provider[0]?.image?.thumbnail?.contentUrl || demoImage}/>
                    <Text className='provider-name'>{article.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(article.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
    
  );
};

export default News;
