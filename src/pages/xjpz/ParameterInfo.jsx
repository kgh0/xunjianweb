import React from 'react';
import { connect } from 'react-redux';
class ParameterInfoUI  extends  React.Component{
    render(){
        return (<div>
              ParameterInfoUI  

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
)(ParameterInfoUI);

export default temp;
