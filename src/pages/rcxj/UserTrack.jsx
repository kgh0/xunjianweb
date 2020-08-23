import React from 'react';
import { connect } from 'react-redux';
class UserTrackUI  extends  React.Component{
    render(){
        return (<div>
              UserTrackUI  

        </div>)
    }
}


const mapStateToProps = (state, ownProps) => {
     ;
    const { isFetching, data, error } = state.main;
    return {};
}


const mapDispatchToProps = dispatch => ({
    todo: (username) => {
         ;
        // return dispatch(getMenus(username));
    }
})

const temp = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserTrackUI);

export default temp;
