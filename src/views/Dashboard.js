import React from 'react'
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import InfoCard from '../componenets/InfoCard';

/** Redux */
import { connect } from 'react-redux'
import { GET_DASHBOARD_INTEREST_COUNT } from '../store/dashboard/actions'




function Dashboard(props) {
    React.useEffect(() => {
        props.dispatch({ type: GET_DASHBOARD_INTEREST_COUNT })
    }, [])

    props.dashboardInfo && console.log(Object.keys(props.dashboardInfo).length);

    return (
        <MainWrapper>
            <Grid fluid>
                <Row>
                    {props.dashboardInfo && Object.keys(props.dashboardInfo).map((interest) => {
                        return <InfoCard title={interest} count={props.dashboardInfo[interest]} />
                    })}
                </Row>
            </Grid>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    margin:10px;
`;

const mapStateToProps = (state) => {
    return {
        dashboardInfo: state.dashboard.dashboard,
    }
}

export default connect(mapStateToProps)(Dashboard);
