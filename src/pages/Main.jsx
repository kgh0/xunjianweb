import React, { lazy, Suspense } from 'react';
import { Redirect, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Spin } from 'antd';
import { connect } from 'react-redux';
import { getMenus } from "../redux/action/MainAction"
import { bindActionCreators } from "redux";

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
const OLMap = lazy(()=>import('./OLMap'));
const GroupManager = lazy(()=>import("./xtgl/GroupManager"));
const DutyAreaManager = lazy(()=>import("./xtgl/DutyAreaManager"));
const DeviceManager = lazy(()=>import("./xtgl/DeviceManager"));

const PatrolPlan = lazy(()=>import("./rcxj/PatrolPlan"));
const PatrolTask = lazy(()=>import("./rcxj/PatrolTask"));
const PatrolIssue = lazy(()=>import("./rcxj/PatrolIssue"));
const UserTrack = lazy(()=>import("./rcxj/UserTrack"));
const CommandInfo = lazy(()=>import("./rcxj/CommandInfo"));

const IssueMgr = lazy(()=>import("./xjpz/IssueMgr"));
const ParameterInfo = lazy(()=>import("./xjpz/ParameterInfo"));
const PatrolMainbody = lazy(()=>import("./xjpz/PatrolMainbody"));
const PatrolItemMgr = lazy(()=>import("./xjpz/PatrolItemMgr"));

const MainContent = () => {
    return (
        <div style={{ padding: '2px' }}>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/user/list" component={List} />
                <Route exact path="/user/connect" component={Connect} />
                <Route exact path="/gdmap" component={GdMap} />
                <Route exact path="/olmap" component={OLMap} />
                
                <Route exact path="/xtgl/groupManager" component={GroupManager} />
                <Route exact path="/xtgl/dutyAreaManager" component={DutyAreaManager} />
                <Route exact path="/xtgl/deviceManager" component={DeviceManager} />

                <Route exact path="/rcxj/patrolPlan" component={PatrolPlan} />
                <Route exact path="/rcxj/patrolTask" component={PatrolTask} />
                <Route exact path="/rcxj/patrolIssue" component={PatrolIssue} />
                <Route exact path="/rcxj/userTrack" component={UserTrack} />
                <Route exact path="/rcxj/commandInfo" component={CommandInfo} />


                <Route exact path="/xtpz/patrolMainbody" component={PatrolMainbody} />
                <Route exact path="/xtpz/patrolItemMgr" component={PatrolItemMgr} />
                <Route exact path="/xtpz/issueMgr" component={IssueMgr} />
                <Route exact path="/xtpz/parameterInfo" component={ParameterInfo} />




                <Redirect to="/home" />
            </Switch>
        </div>
    );
}



class Main extends React.Component {

    componentWillMount() {
         
        const { getMenus2 } = this.props;
        // getMenus();
        getMenus2("admin");
    }

    render() {
         
        const loggedIn = window.localStorage.getItem("loggedIn");
        const { isFetching } = this.props;
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
    const { isFetching,  error } = state.main;
    return { isFetching, error };
}


const mapDispatchToProps = dispatch => ({
    getMenus2:bindActionCreators(getMenus, dispatch),
})

const temp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default temp;