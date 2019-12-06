import React from 'react';
import { connect } from 'react-redux';
class CommandInfoUI  extends  React.Component{
    render(){
        return (<div>
              CommandInfoUI  

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
)(CommandInfoUI);

export default temp;
