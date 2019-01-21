import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { updateGraph } from "../../state/Graphs/actions"
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import VisualIcon from '@material-ui/icons/PanoramaOutlined';
import ScriptIcon from '@material-ui/icons/WrapTextOutlined';
import Cloud from '@material-ui/icons/CloudOutlined';
import Lock from '@material-ui/icons/LockOutlined';
import SQLIcon from "@material-ui/icons/StorageOutlined";
import ServerIcon from "@material-ui/icons/RouterOutlined"
import CSIcon from "@material-ui/icons/CategoryOutlined"
import SevenIcon from "@material-ui/icons/Fingerprint"
import EightIcon from "@material-ui/icons/FormatAlignRightOutlined"
import NineIcon from "@material-ui/icons/AssessmentOutlined"
import TenIcon from "@material-ui/icons/DeveloperModeOutlined"
import Typography from '@material-ui/core/Typography';
import ChartistGraph from "react-chartist";
import "./graphStyle.css"
import {
    visualChart,
} from "../Charts/Visual.js";
import {
    serverChart,
} from "../Charts/Server.js";
import {
    scriptChart,
} from "../Charts/Scripting.js";
import {
    sqlChart,
} from "../Charts/Database.js";
import {
    noSQLChart,
} from "../Charts/Database.js";
import {
    unstructuredChart,
} from "../Charts/Database.js";
import {
    dataAnalysisChart,
} from "../Charts/DataAnalysis.js";
import {
    csChart,
} from "../Charts/CS.js";
import {
    compiledChart,
} from "../Charts/Compiled.js";
import {
    cloudChart,
} from "../Charts/Cloud.js";
import {
    ideChart,
} from "../Charts/IDEs.js";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3, backgroundColor: "#deb78ec2" }} >
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: "transparent",
    },
    graphBackground: {

    },
    tabBar: {
        backgroundColor: "#2e2a23e0",
        color: "white"
    },
    eachTab: {
        color: "white"
    },
});

function GraphTabs(props) {
    console.log(props)
    const { classes } = props;
    // let [currentGraph, setCurrentGraph] = useState(props.graph)

    // function switchGraph(burro) {
    //     setCurrentGraph(burro)
    //     console.log(setCurrentGraph)
    // }

    // useEffect(() => {
    //     console.log("im hooks")
    // })

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" className={classes.tabBar}>
                <Tabs
                    value={props.graph}
                    scrollable
                    scrollButtons="on"
                    // indicatorColor="#ffff"
                    // textColor="#ffff"
                    className={classes.eachTab}
                >
                    <Tab label="Visual" icon={<VisualIcon />} onClick={() => props.toggleGraph(updateGraph, 0)} />
                    <Tab label="Scripting/Functional" icon={<ScriptIcon />} onClick={() => props.toggleGraph(updateGraph, 1)} />
                    <Tab label="Compiled/OOP" icon={<Lock />} onClick={() => props.toggleGraph(updateGraph, 2)} />
                    <Tab label="IDEs" icon={<TenIcon />} onClick={() => props.toggleGraph(updateGraph, 3)} />
                    <Tab label="Cloud-Based" icon={<Cloud />} onClick={() => props.toggleGraph(updateGraph, 4)} />
                    <Tab label="SQL" icon={<SQLIcon />} onClick={() => props.toggleGraph(updateGraph, 5)} />
                    <Tab label="noSQL" icon={<EightIcon />} onClick={() => props.toggleGraph(updateGraph, 6)} />
                    <Tab label="Unstructured Data" icon={<SevenIcon />} onClick={() => props.toggleGraph(updateGraph, 7)} />
                    <Tab label="Data Analysis" icon={<NineIcon />} onClick={() => props.toggleGraph(updateGraph, 8)} />
                    <Tab label="Server" icon={<ServerIcon />} onClick={() => props.toggleGraph(updateGraph, 9)} />
                    <Tab label="CS Basics" icon={<CSIcon />} onClick={() => props.toggleGraph(updateGraph, 10)} />
                </Tabs>
            </AppBar>
            {props.graph === 0 && <TabContainer className={classes.graphBackground}>
                Visual
                <ChartistGraph
                    className="ct-chart"
                    data={visualChart.data}
                    type="Bar"
                    options={visualChart.options}
                    responsiveOptions={visualChart.responsiveOptions}
                    listener={visualChart.animation}
                    plugins={visualChart.plugins.chartistPluginAxisTitle}
                />
            </TabContainer>}
            {props.graph === 1 && <TabContainer className={classes.graphBackground}>
                Scripting
                                <ChartistGraph
                    className="ct-chart"
                    data={scriptChart.data}
                    type="Line"
                    options={scriptChart.options}
                    responsiveOptions={scriptChart.responsiveOptions}
                    listener={scriptChart.animation}
                    plugins={scriptChart.plugins.chartistPluginAxisTitle}
                />
            </TabContainer>}
            {props.graph === 2 && <TabContainer className={classes.graphBackground}>
                Compiled/OOP
                                <ChartistGraph
                    className="ct-chart"
                    data={compiledChart.data}
                    type="Bar"
                    options={compiledChart.options}
                    responsiveOptions={compiledChart.responsiveOptions}
                    listener={compiledChart.animation}
                    plugins={compiledChart.plugins.chartistPluginAxisTitle}
                />
            </TabContainer>}
            {props.graph === 3 && <TabContainer className={classes.graphBackground}>
                Integrated Development Environments
                                <ChartistGraph
                    className="ct-chart"
                    data={ideChart.data}
                    type="Line"
                    options={ideChart.options}
                    responsiveOptions={ideChart.responsiveOptions}
                    listener={ideChart.animation}
                    plugins={ideChart.plugins.chartistPluginAxisTitle}
                />
            </TabContainer>}
            {props.graph === 4 && <TabContainer className={classes.graphBackground}>
                Cloud-Based
                                <ChartistGraph
                    className="ct-chart"
                    data={cloudChart.data}
                    type="Bar"
                    options={cloudChart.options}
                    responsiveOptions={cloudChart.responsiveOptions}
                    listener={cloudChart.animation}
                    plugins={cloudChart.plugins.chartistPluginAxisTitle}
                />
            </TabContainer>}
            {props.graph === 5 && <TabContainer className={classes.graphBackground}>
                SQL Databases
                                <ChartistGraph
                    className="ct-chart"
                    data={sqlChart.data}
                    type="Line"
                    options={sqlChart.options}
                    responsiveOptions={sqlChart.responsiveOptions}
                    listener={sqlChart.animation}
                    plugins={sqlChart.plugins.chartistPluginAxisTitle}
                />
            </TabContainer>}
            {props.graph === 6 && <TabContainer className={classes.graphBackground}>
                noSQL Databases
                                <ChartistGraph
                    className="ct-chart"
                    data={noSQLChart.data}
                    type="Bar"
                    options={noSQLChart.options}
                    responsiveOptions={noSQLChart.responsiveOptions}
                    listener={noSQLChart.animation}
                    plugins={noSQLChart.plugins.chartistPluginAxisTitle}
                />
            </TabContainer>}
            {props.graph === 7 && <TabContainer className={classes.graphBackground}>
                Unstructured Data
                                <ChartistGraph
                    className="ct-chart"
                    data={unstructuredChart.data}
                    type="Line"
                    options={unstructuredChart.options}
                    responsiveOptions={unstructuredChart.responsiveOptions}
                    listener={unstructuredChart.animation}
                    plugins={unstructuredChart.plugins.chartistPluginAxisTitle}
                />
            </TabContainer>}
            {props.graph === 8 && <TabContainer className={classes.graphBackground}>
                Data Analysis
                    <ChartistGraph
                    className="ct-chart"
                    data={dataAnalysisChart.data}
                    type="Bar"
                    options={dataAnalysisChart.options}
                    responsiveOptions={dataAnalysisChart.responsiveOptions}
                    listener={dataAnalysisChart.animation}
                    plugins={dataAnalysisChart.plugins.chartistPluginAxisTitle}
                />
            </TabContainer>}
            {props.graph === 9 && <TabContainer className={classes.graphBackground}>
                Server
                    <ChartistGraph
                    className="ct-chart"
                    data={serverChart.data}
                    type="Line"
                    options={serverChart.options}
                    responsiveOptions={serverChart.responsiveOptions}
                    listener={serverChart.animation}
                    plugins={serverChart.plugins.chartistPluginAxisTitle}
                />
            </TabContainer>}
            {props.graph === 10 && <TabContainer className={classes.graphBackground}>
                CS Basics
                    <ChartistGraph
                    className="ct-chart"
                    data={csChart.data}
                    type="Bar"
                    options={csChart.options}
                    responsiveOptions={csChart.responsiveOptions}
                    listener={csChart.animation}
                    plugins={csChart.plugins.chartistPluginAxisTitle}
                />
            </TabContainer>}
        </div>
    );
}

GraphTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
    const graphMethods = {
        toggleGraph(graphAction, graphId, setCurrentGraph) {
            // setCurrentGraph(graphId)
            dispatch(graphAction({
                currentGraph: graphId
            }))
        }
    }
    return (graphMethods)
}

function mapStateToProps(state) {
    return { graph: state.graphReducer.currentGraph }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(GraphTabs))

// export default withStyles(styles)(GraphTabs);