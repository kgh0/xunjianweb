import React from 'react';
import { connect } from 'react-redux';
class PatrolPlanUI  extends  React.Component{
    render(){
        return (<div>
              PatrolPlanUI  

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
)(PatrolPlanUI);

export default temp;
