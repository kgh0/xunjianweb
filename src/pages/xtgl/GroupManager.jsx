import React from 'react';
import { connect } from 'react-redux';
class GroupManagerUI  extends  React.Component{
    render(){
        return (<div>
              GroupManagerUI  

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
        return "";
    }
})

const temp = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupManagerUI);

export default temp;
