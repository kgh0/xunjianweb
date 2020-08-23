import React from 'react';
import { connect } from 'react-redux';
class DeviceManagerUI  extends  React.Component{
    render(){
        return (<div>
              DeviceManagerUI  

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
)(DeviceManagerUI);

export default temp;
