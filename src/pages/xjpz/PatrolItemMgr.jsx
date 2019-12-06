import React from 'react';
import { connect } from 'react-redux';
class PatrolItemMgrUI  extends  React.Component{
    render(){
        return (<div>
              PatrolItemMgrUI  

        </div>)
    }
}


const mapStateToProps = (state, ownProps) => {
    debugger;
    const { isFetching, data, error } = state.main;
    return {};
}


const mapDispatchToProps = dispatch => ({
    todo: (username) => {
        debugger;
        // return dispatch(getMenus(username));
    }
})

const temp = connect(
    mapStateToProps,
    mapDispatchToProps
)(PatrolItemMgrUI);

export default temp;
