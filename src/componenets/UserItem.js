import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

export default function UserItem(props) {
    const ref = React.createRef();
    const { title, name, company, outbound_date, id } = props.user;
    return (
        <Col xs={6} sm={4} md={3} lg={2} key={id}>
            <MainWrapper>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                    ref={ref}
                    style={{ width: '200px', height: '200px' }}
                >
                    <FrontSide style={{ backgroundColor: '#41669d' }} >
                        <CardFrontWrapper onClick={() => { ref.current.toggle(); }}>
                            <TitleWrapper>
                                {name.split(' ').map((word) => ` ${word.charAt(0).toUpperCase()}${word.slice(1)} `)}
                            </TitleWrapper>
                            <SubTitleWrapper>
                                {(title.charAt(0).toUpperCase() + title.slice(1)).substring(0, 50)}
                                {title.length > 50 && "..."}
                            </SubTitleWrapper>
                        </CardFrontWrapper>
                    </FrontSide>
                    <BackSide style={{ backgroundColor: '#175852' }}>
                        <CardFrontWrapper>
                            <SubTitleWrapper>
                                {company.charAt(0).toUpperCase() + company.slice(1)}
                            </SubTitleWrapper>
                            <SubTitleWrapper>
                                {outbound_date.charAt(0).toUpperCase() + outbound_date.slice(1)}
                            </SubTitleWrapper>
                        </CardFrontWrapper>
                    </BackSide>
                </Flippy>
            </MainWrapper>
        </Col>
    )
}

const MainWrapper = styled.div`
    margin:10px;
`;

const CardFrontWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
`;

const TitleWrapper = styled.h1`
    font-size:20px;
`;

const SubTitleWrapper = styled.p`
overflow: hidden;
`;