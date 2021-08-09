import React from 'react'
import UsersList from './../componenets/UsersList'
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

/*** Redux */
import { connect } from 'react-redux'
import { GET_USERS_RESULTS, GET_USERS_SEARCH_RESULTS } from './../store/users/actions'


const Users = (props) => {

    const [searchString, setSearchString] = React.useState("")
    const [paginationNumber, setPaginationNumber] = React.useState(1)


    React.useEffect(() => {
        props.dispatch({ type: GET_USERS_RESULTS, page: 0, limit: 20 })
    }, [])

    const onPaginationChange = (e, value) => {
        setPaginationNumber(value);
        props.dispatch({ type: GET_USERS_RESULTS, page: value, limit: 20 })
    }

    const onTextFieldChange = (event) => {
        setSearchString(event.target.value);
        props.dispatch({ type: GET_USERS_SEARCH_RESULTS, query: event.target.value })
    }

    return (
        <MainWrapper>
            <TextFieldWrapper>
                <TextField id="standard-basic" label="Search by name" fullWidth onChange={onTextFieldChange} />
            </TextFieldWrapper>
            {props.users.loading && <CircularProgress /> ||
                <>
                    <UserListWrapper>
                        <UsersList users={props.users.users} />
                    </UserListWrapper>
                    {searchString.length === 0 && <Pagination count={100} color="primary" onChange={onPaginationChange} defaultPage={paginationNumber} />}</>}
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;  
    align-items: center;
    height:100vh;
`;

const TextFieldWrapper = styled.div`
    margin:10px;
    padding:10px;
    width:90%;
`;

const UserListWrapper = styled.div`
    height:77%;
    overflow: scroll;
`;

const mapStateToProps = (state) => {
    return {
        users: state.users,
        dashboardInfo: state.dashboard,
    }
}


export default connect(mapStateToProps)(Users);
