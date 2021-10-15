import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = ''

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 24})
    console.log(cryptoNews)
    
    if(!cryptoNews?.value) return 'Thinkng hard...';

    return (
        <Row gutter={[24, 24]}>
            {cryptoNews.value.map((news, i) => (
            <Col xs={24} sm={16} lg={12} key={i}>
                <Card hoverable className='news-card'>
                    <a href={news.url} target='_blank' rel='noreferrer'>
                        <div className='news-image-container'>
                            <Title className='news-title' level={4}>{news.name}</Title>
                            <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news'/>
                        </div>
                        <p>
                            {news.description > 100
                                ? `${news.description.substring(0, 100)}...`
                                : news.description
                            }
                        </p>
                        <div>
                            <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage } alt='news'/>
                            <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                        </div>
                    </a>
                </Card>

            </Col> 
            ))}
        </Row>
    )
}

export default News
