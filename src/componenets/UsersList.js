import React from 'react'
import UserItem from './UserItem'
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

export default function UsersList(props) {
    return (
        <UserListWrapper>
            <Grid fluid>
                <Row>
                    {props.users && props.users.map((user) => {
                        return <UserItem user={user} key={`${user.id}${user.name}`} />
                    })}
                </Row>
            </Grid>

        </UserListWrapper>
    )
}

const UserListWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
