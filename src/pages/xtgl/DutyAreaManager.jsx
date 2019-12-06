import React from 'react';
import { connect } from 'react-redux';
class DutyAreaManagerUI  extends  React.Component{
    render(){
        return (<div>
              DutyAreaManagerUI  

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
)(DutyAreaManagerUI);

export default temp;
