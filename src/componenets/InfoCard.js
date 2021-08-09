import React from 'react'
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { Col } from 'react-flexbox-grid';

export default function InfoCard(props) {
    return (
        <Col xs={6} sm={4} md={3} lg={2} >
            <Card raised >
                <CardWrapper>
                    <TitleWrapper><h4>{props.title.split(' ').map((word) => ` ${word.charAt(0).toUpperCase()}${word.slice(1)} `)}</h4></TitleWrapper>
                    <CountWraper><p>{props.count}</p></CountWraper>
                </CardWrapper>
            </Card>
        </Col>
    )
}

const CardWrapper = styled.div`
    padding:5px;
    width:150px;
    height:120px;
    margin:15px;
    border-radius: 65px;
    text-align:center;
`;

const TitleWrapper = styled.div`
`;

const CountWraper = styled.div``;

