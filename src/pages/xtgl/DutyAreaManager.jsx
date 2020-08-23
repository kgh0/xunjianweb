import React from 'react';
import "./DutyAreaManager.less"
import { connect } from 'react-redux';
class DutyAreaManagerUI  extends  React.Component{
    render(){
        return (<div>
              DutyAreaManagerUI  

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
       return "";
    }
})

const DutyAreaManager = connect(
    mapStateToProps,
    mapDispatchToProps
)(DutyAreaManagerUI);

export default DutyAreaManager;
