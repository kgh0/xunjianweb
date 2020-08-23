import React from 'react';
import { connect } from 'react-redux';
class PatrolTaskUI  extends  React.Component{
    render(){
        return (<div>
              PatrolTaskUI  

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
)(PatrolTaskUI);

export default temp;
