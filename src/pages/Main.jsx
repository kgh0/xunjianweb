import React, { lazy, Suspense } from 'react';
import { Redirect, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Spin } from 'antd';
import { connect } from 'react-redux';
import { getMenus } from "../action/MainAction"

// import Home from "./Home";
// import GdMap from "./GdMap";
// import Connect from "./Connect";
// import List from "./List";
import HeaderBar from "./HeaderBar";
import SiderBar from "./SiderBar";
// const SiderBar = lazy(() => import('./SiderBar'));
// const HeaderBar = lazy(() => import('./HeaderBar'));
const Home = lazy(() => import('./Home'));
const GdMap = lazy(() => import('./GdMap'));
const Connect = lazy(() => import('./Connect'));
const List = lazy(() => import('./List'));
const OLMap = lazy(()=>import('./OLMap'))


const MainContent = () => {
    return (
        <div style={{ padding: '2px' }}>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/user/list" component={List} />
                <Route exact path="/user/connect" component={Connect} />
                <Route exact path="/gdmap" component={GdMap} />
                <Route exact path="/olmap" component={OLMap} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
}



class Main extends React.Component {

    componentWillMount() {
        debugger;
        const { getMenus } = this.props;
        getMenus();
    }

    render() {
        debugger;
        const loggedIn = window.localStorage.getItem("loggedIn");
        const { isFetching, menu } = this.props;
        return (
            loggedIn ? (<div >
                {isFetching ?
                    <Spin size="large" spinning={isFetching} /> :
                    <Layout style={{ height: '100vh' }}>
                        <SiderBar />
                        <Layout>
                            <HeaderBar />
                            <Suspense fallback={<Spin size="small" />}>
                                <MainContent />
                            </Suspense>
                        </Layout>
                    </Layout>}
            </div>) : (<Redirect to="/login" />)
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    debugger;
    const { isFetching, data, error } = state.main;
    return { isFetching, menu: data, error };
}


const mapDispatchToProps = dispatch => ({
    getMenus: (username) => {
        debugger;
        return dispatch(getMenus(username));
    }
})

const temp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default temp;