import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { updateScroll } from "../../state/Portfolio/actions.js"
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import GitHubIcon from '../../assets/icons/GitHub.svg';
import LinkedIcon from '../../assets/icons/linked.svg';
import { connect } from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchIcon from '@material-ui/icons/Search';
import SavedIcon from '@material-ui/icons/Save';
import AccountIcon from '@material-ui/icons/PersonPin';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import InfoIcon from '@material-ui/icons/AccountCircleOutlined';
import StatsIcon from '@material-ui/icons/InfoOutlined';
import CodeIcon from '@material-ui/icons/AssessmentOutlined';
import ResourceIcon from '@material-ui/icons/HelpOutline';
import ContactIcon from '@material-ui/icons/ContactMailOutlined';
import HistoryIcon from '@material-ui/icons/Code';
import ShieldIcon from '@material-ui/icons/Security';
import WorldIcon from '@material-ui/icons/VpnLockOutlined';
import DeviceIcon from '@material-ui/icons/DeviceUnknownOutlined';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import { goToAnchor, configureAnchors } from "react-scrollable-anchor"
const axios = require("axios")
const moment = require("moment")
// import { searchJobs, updateNumberResults } from "../../state/search/actions";

configureAnchors({ scrollDuration: 1000 })

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "transparent !important",
        boxShadow: "none !important"
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarShift2: {
        marginRight: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
        backgroundColor: "#1a1a1ac2"
    },
    menuButton2: {
        marginRight: 12,
        marginLeft: 36,
        backgroundColor: "#1a1a1ac2"
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
    },
    drawerOpen: {
        backgroundColor: "#1a1a1ae8",
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        backgroundColor: "#1a1a1a9c",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    drawer2: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
    },
    drawer2Open: {
        backgroundColor: "#1a1a1ae8",
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawer2Close: {
        backgroundColor: "#1a1a1a9c",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        //removed + 1 from both equations below
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        width: "100%",
        justifyContent: "flex-end",
        alignItems: 'center',
        padding: '0 8px',
        position: "absolute",
        top: "0px",
        ...theme.mixins.toolbar,
    },
    toolbar2: {
        display: 'flex',
        width: "100%",
        justifyContent: "flex-start",
        alignItems: 'center',
        padding: '0 8px',
        position: "absolute",
        top: "0px",
        ...theme.mixins.toolbar,
    },
    sideTbCloseIcon: {
        color: "white",
        marginRight: "10px"
    },
    sideTbCloseIcon2: {
        color: "white",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    sideIcons: {
        color: "white !important"
    },
    sideIconsScroll: {
        color: "white !important",
        height: "1rem",
        width: "1rem",
        overflow: "visible",
    },
    sideIconsHide: {
        color: "transparent !important"
    },
    sideIconLabels: {
        color: "white !important",
        textDecoration: "none !important"
    },
    sideIconSubLabels: {
        color: "white !important"
    },
    infoSideIconLabels: {
        color: "white !important",
        fontSize: ".7rem",
        // lineHeight: "1rem",
    },
    infoSideIconSubLabels: {
        color: "#909090 !important",
        fontSize: ".5rem",
        lineHeight: "3px",
        paddingLeft: "1rem"
    },
    mainIconJR: {
        "border-radius": "0 !important"
    },
    signOutStayDown: {
        position: "absolute",
        bottom: "0px",
        width: "100%"
    },
    toolSplit: {
        justifyContent: "space-between",
    },
    seeThruPaper: {
        // backgroundColor: "transparent !important",
        border: "none !important",
    },
    sBDrawerPaper: {
        justifyContent: "center"
    },
    sideListItems: {
        backgroundColor: "transparent"
    },
    selectedListItems: {
        backgroundColor: "#0c0b0ba8 !important"
    },
    customAvatars: {
        height: "1.3em",
        width: "1.3em",
    },
    customIcons: {
        textAlign: "left"
    },
    infoListItems: {
        paddingTop: "0px",
        paddingBottom: "0px",
        // marginBottom: ".3rem",
        paddingRight: "0px",
        height: "1.3rem",
        width: "1.3rem"
    },
    infoListHeader: {
        position: "fixed",
        top: "1rem",
        paddingTop: "0px",
        paddingBottom: "0px",
        marginBottom: ".3rem",
        paddingRight: "0px",
        height: "1.3rem",
        width: "1.3rem",
        zIndex: "-1"
    },
    infoSidePrimaryHeader: {
        fontSize: "1.2rem",
        color: "white !important"
    },
    infoSideSecondaryHeader: {
        fontSize: "1rem",
        lineHeight: ".5rem",
        color: "white !important"
    }
});


class Sidebar extends React.Component {
    state = {
        open: false,
        mediaQ: true,
        open2: false,
        mediaQ2: true,
        currentPage: window.location.hash,
        devicePixelRatio: window.devicePixelRatio,
        networkType: window.navigator.connection ? window.navigator.connection.effectiveType : "Protected",
        networkGHZ: window.navigator.connection ? window.navigator.connection.downlink : "Protected",
        cookiesEnabled: window.navigator ? (window.navigator.cookieEnabled ? "true" : "false") : "Protected",
        doNotTrackBool: window.navigator ? (window.navigator.doNotTrack === 1 ? "on" : "off") : "Protected",
        geolocationBool: window.navigator ? (!window.navigator.geolocation ? "none" : "true") : "Protected",
        // userMedia: window.mediaCapabilities.getUserMedia,
        browserType: window.navigator ? window.navigator.vendor : "Protected",
        systemType: window.navigator ? window.navigator.platform : "Protected",
        screenSize: [window.innerWidth, window.innerHeight],
        screenOrientationAngle: window.screen.orientation ? window.screen.orientation.angle : "Hidden",
        screenOrientationType: window.screen.orientation ? window.screen.orientation.type : "Hidden",
        screenZoom: window.visualViewport ? window.visualViewport.scale : "Hidden",
        IPAddress: "Hidden",
        userCity: "Hidden",
        userState: "Hidden",
        userCountry: "Hidden",
        userLongitude: "Hidden",
        userLatitude: "Hidden",
        userInternetServiceProvider: "Hidden",
        userProxyBool: false,
        userAnonymousBool: false,
        userCurrentTime: "Hidden",
        yScrollPosition: window.scrollY,
        path: this.props
    };


    componentDidMount() {
        let hello = this
        console.log(window)
        window.addEventListener('hashchange', function () {
            hello.setState({ currentPage: window.location.hash })
        });
        window.addEventListener('scroll', function () {
            hello.setState({ yScrollPosition: Math.floor(window.scrollY) })
        });
        window.addEventListener("orientationchange", function () {
            hello.setState({ screenOrientationAngle: window.screen.orientation ? window.screen.orientation.angle : "Hidden" })
        });
        window.addEventListener("resize", function () {
            hello.setState({ screenZoom: window.visualViewport ? window.visualViewport.scale : "hidden", screenSize: [window.innerWidth, window.innerHeight] })
        });
        let infoRequestConfig = {
            "async": true,
            "crossDomain": true,
            "Access-Control-Allow-Origin": true,
            "url": "https://api.ipdata.co/?api-key=948cfcfcf9eceb6f31f485bb0afc3b49031841c2624c3e2777ca522d",
            "method": "GET",
            "headers": {
                "Accept": "application/json",
            }
        }
        axios(infoRequestConfig).then(resp => {
            this.setState({
                IPAddress: resp.data.ip,
                userCity: resp.data.city,
                userState: resp.data.region_code,
                userCountry: resp.data.country_code,
                userLongitude: resp.data.longitude,
                userLatitude: resp.data.latitude,
                userInternetServiceProvider: resp.data.organisation,
                userProxyBool: (resp.data.threat.is_proxy ? "true" : "false"),
                userAnonymousBool: (resp.data.threat.is_anonymous ? "true" : "false"),
                userCurrentTime: moment(resp.data.time_zone.current_time).format('MMMM Do YYYY, h:mm:ss a')
            })
        })
    }
    componentWillUnmount() {
        let hello = this
        window.removeEventListener("hashchange", function () {
            hello.setState({ currentPage: window.location.hash })
        })
        window.removeEventListener("orientationchange", function () {
            hello.setState({ screenOrientationAngle: window.screen.orientation.angle })
        })
        window.removeEventListener("scroll", function () {
            hello.setState({ yScrollPosition: Math.floor(window.scrollY) })
        })
        window.removeEventListener("resize", function () {
            hello.setState({ screenZoom: window.visualViewport.scale, screenSize: [window.innerWidth, window.innerHeight] })
        })
    }
    guttersMod = (open1, open2) => {
        if (open1 || open2) {
            return (false)
        } else {
            return (true)
        }
    }

    handleDrawerOpen = () => {
        this.setState({ mediaQ: false });
        setTimeout(() => this.setState({ open: true }), 150);
        // this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
        setTimeout(() => this.setState({ mediaQ: true }), 300);
    };

    handleDrawer2Open = () => {
        this.setState({ mediaQ2: false });
        setTimeout(() => this.setState({ open2: true }), 150);
        // this.setState({ open2: true });
    };

    handleDrawer2Close = () => {
        this.setState({ open2: false });
        setTimeout(() => this.setState({ mediaQ2: true }), 300);
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {/* <CssBaseline /> */}
                <AppBar position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                        [classes.appBarShift2]: this.state.open2,
                    })}
                >
                    <Toolbar disableGutters={this.guttersMod(this.state.open, this.state.open2)} className={classes.toolSplit}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: this.state.open || this.state.open2,
                                // [classes.hide]: this.state.open2,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawer2Open}
                            className={classNames(classes.menuButton2, {
                                [classes.hide]: this.state.open || this.state.open2,
                            })}
                        >
                            <ShieldIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Hidden xsDown={this.state.mediaQ} implementation="css">
                    <Drawer
                        variant="permanent"
                        className={classNames(classes.drawer, {
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        })}
                        classes={{
                            paper: classNames("sidebarClass", classes.seeThruPaper, classes.sBDrawerPaper, {
                                [classes.drawerOpen]: this.state.open,
                                [classes.drawerClose]: !this.state.open,
                            }),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={this.handleDrawerClose}>
                                {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                                {this.state.open ? <ChevronLeftIcon className={classes.sideTbCloseIcon} /> : ""}
                            </IconButton>
                        </div>
                        {/* <Divider /> */}
                        <List>
                            {/* <ListItem button={true}
                                key={"IpAddress"}
                                className={classes.sideListItems}>
                                <ListItemIcon>
                                    <ListItemText primary={"y: " + this.state.yScrollPosition} primaryTypographyProps={{ className: classes.sideIconsScroll }} />
                                </ListItemIcon> */}
                            {/* <ListItemText primary="Current Page Location" primaryTypographyProps={{ className: classes.sideIconLabels }}  /> */}
                            {/* </ListItem> */}
                            <ListItem button={true}
                                key={"Home"}
                                onClick={() => goToAnchor("home", true)}
                                selected={this.state.currentPage === "#home"}
                                className={this.state.currentPage === "#home" ? classes.selectedListItems : classes.sideListItems}
                            >
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Home" primaryTypographyProps={{ className: classes.sideIconLabels }} secondaryTypographyProps={{ className: classes.sideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"About Me"}
                                onClick={() => goToAnchor("about_me", true)}
                                selected={this.state.currentPage === "#about_me"}
                                className={this.state.currentPage === "#about_me" ? classes.selectedListItems : classes.sideListItems}
                            >
                                <ListItemIcon>
                                    <InfoIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="About Me" primaryTypographyProps={{ className: classes.sideIconLabels }} secondaryTypographyProps={{ className: classes.sideIconSubLabels }} />
                            </ListItem>
                            <ListItem button className={this.state.currentPage === "#practical_knowledge" ? classes.selectedListItems : classes.sideListItems} key={"Practical Knowledge"}
                                onClick={() => goToAnchor("practical_knowledge", true)}
                                selected={this.state.currentPage === "#practical_knowledge"}
                            >
                                <ListItemIcon>
                                    <CodeIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Practical Knowledge" primaryTypographyProps={{ className: classes.sideIconLabels }} secondaryTypographyProps={{ className: classes.sideIconSubLabels }} />
                            </ListItem>
                            <ListItem button className={this.state.currentPage === "#projects" ? classes.selectedListItems : classes.sideListItems}
                                key={"Project Anthology"}
                                onClick={() => goToAnchor("projects", true)}
                                selected={this.state.currentPage === "#projects"}
                            >
                                <ListItemIcon>
                                    <HistoryIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Project Anthology" primaryTypographyProps={{ className: classes.sideIconLabels }} secondaryTypographyProps={{ className: classes.sideIconSubLabels }} />
                            </ListItem>
                            <ListItem button className={this.state.currentPage === "#resources" ? classes.selectedListItems : classes.sideListItems} key={"Resources"}
                                onClick={() => goToAnchor("resources", true)}
                                selected={this.state.currentPage === "#resources"}
                            >
                                <ListItemIcon>
                                    <ResourceIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Resources" primaryTypographyProps={{ className: classes.sideIconLabels }} secondaryTypographyProps={{ className: classes.sideIconSubLabels }} />
                            </ListItem>
                            <ListItem button key={"Contact"} className={this.state.currentPage === "#contact" ? classes.selectedListItems : classes.sideListItems} onClick={() => goToAnchor("contact", true)}
                                selected={this.state.currentPage === "#contact"}
                            >
                                <ListItemIcon>
                                    <ContactIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Contact" primaryTypographyProps={{ className: classes.sideIconLabels }} secondaryTypographyProps={{ className: classes.sideIconSubLabels }} />
                            </ListItem>
                        </List>
                        <List className={classes.signOutStayDown}>
                            <a className={classes.sideIconLabels} href="https://github.com/blaney83" rel="noopener noreferrer" target="_blank">
                                <ListItem
                                    button={true}
                                    className={classes.sideListItems}
                                >
                                    <ListItemIcon
                                        className={classes.customIcons}
                                    >
                                        <Avatar src={GitHubIcon}
                                            className={classes.customAvatars}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="GitHub"
                                        primaryTypographyProps={{ className: classes.sideIconLabels }} secondaryTypographyProps={{ className: classes.sideIconSubLabels }} />
                                </ListItem>
                            </a>
                            <a className={classes.sideIconLabels} href="https://www.linkedin.com/in/ben-laney-090613117/" rel="noopener noreferrer" target="_blank">
                                <ListItem
                                    button={true}
                                    className={classes.sideListItems}
                                >
                                    <ListItemIcon
                                        className={classes.customIcons}
                                    >
                                        <Avatar src={LinkedIcon}
                                            className={classes.customAvatars}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="LinkedIn"
                                        primaryTypographyProps={{ className: classes.sideIconLabels }} secondaryTypographyProps={{ className: classes.sideIconSubLabels }} />
                                </ListItem>
                            </a>
                        </List>
                    </Drawer>
                </Hidden>
                <Hidden xsDown={this.state.mediaQ2} implementation="css">
                    <Drawer
                        variant="permanent"
                        anchor="right"
                        className={classNames(classes.drawer2, {
                            [classes.drawer2Open]: this.state.open2,
                            [classes.drawer2Close]: !this.state.open2,
                        })}
                        classes={{
                            paper: classNames("sidebarClass", classes.seeThruPaper, classes.sBDrawerPaper, {
                                [classes.drawer2Open]: this.state.open2,
                                [classes.drawer2Close]: !this.state.open2,
                            }),
                        }}
                        open={this.state.open2}
                    >
                        <div className={classes.toolbar2}>
                            <IconButton onClick={this.handleDrawer2Close}>
                                {/* {theme.direction === 'ltr' ?  <ChevronRightIcon /> : <ChevronLeftIcon /> } */}
                                {this.state.open2 ? <ChevronRightIcon className={classes.sideTbCloseIcon2} /> : ""}
                            </IconButton>
                        </div>
                        {/* <Divider /> */}
                        <List>
                            <ListItem button={true}
                                key={"header"}
                                className={classes.infoListHeader}>
                                <ListItemIcon>
                                    <StatsIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary="Know your Data" secondary="Protect your Data" primaryTypographyProps={{ className: classes.infoSidePrimaryHeader }} secondaryTypographyProps={{ className: classes.infoSideSecondaryHeader }} />
                            </ListItem>
                            {/* <ListItem button={true}
                                key={"IpAddress"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <DeviceIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Device Info" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem> */}
                            <ListItem button={true}
                                key={"networkType"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <DeviceIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.networkType} secondary="NetworkType" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"downSpeed"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.networkGHZ} secondary="Downlink Speed" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"browserOrigin"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.browserType} secondary="Browser Origin" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"os"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.systemType} secondary="OS" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"screenSize"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.screenSize[0] + " x " + this.state.screenSize[1]} secondary="Screen Size" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"orientation"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.screenOrientationType} secondary="Orientation" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"orientation2"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.screenOrientationType} secondary="Orientation" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"deviceAngle"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.screenOrientationAngle + " degrees"} secondary="Device Angle" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"zoomSettings"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.screenZoom + "x"} secondary="Current Zoom" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"IpAddress"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <WorldIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.IPAddress} secondary="IP Address" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"userCity"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.userCity} secondary="City" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"userState"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.userState} secondary="State" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"userCountry"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.userCountry} secondary="Country" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"userLongitude"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.userLongitude} secondary="Longitude" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"userLatitude"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.userLatitude} secondary="Latitude" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button={true}
                                key={"internetProvider"}
                                className={classes.infoListItems}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.userInternetServiceProvider} secondary="Internet Provider" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button key={"proxy"}
                                className={classes.infoListItems}
                            >
                                <ListItemIcon>
                                    <SearchIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.userProxyBool} secondary="Proxy" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button key={"anonymous"}
                                className={classes.infoListItems}
                            >
                                <ListItemIcon>
                                    <SavedIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.userAnonymousBool} secondary="Anonymous" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button key={"userTime"}
                                className={classes.infoListItems}
                            >
                                <ListItemIcon>
                                    <AccountIcon className={classes.sideIconsHide} />
                                </ListItemIcon>
                                <ListItemText primary={this.state.userCurrentTime} secondary="Your Time" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} />
                            </ListItem>
                            <ListItem button key={"userTime"}
                                className={classes.infoListItems}
                            >
                                <ListItemIcon>
                                    <ListItemText primary={"y: " + this.state.yScrollPosition} primaryTypographyProps={{ className: classes.sideIconsScroll }} />
                                </ListItemIcon>
                                {/* <ListItemText primary={this.state.userCurrentTime} secondary="Your Time" primaryTypographyProps={{ className: classes.infoSideIconLabels }} secondaryTypographyProps={{ className: classes.infoSideIconSubLabels }} /> */}
                            </ListItem>
                        </List>
                        <List className={classes.signOutStayDown}>
                            <ListItem button={true}
                            >
                                <ListItemIcon>
                                    <ShareIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Share" primaryTypographyProps={{ className: classes.sideIconLabels }} />
                            </ListItem>
                        </List>
                    </Drawer>
                </Hidden>
            </div >
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     const scrollTracker = function(previousScrollTotal, dispatchScrollChange){
//         window.addEventListener("scroll", ()=>{
//             dispatchScrollChange({scroll: previousScrollTotal + Math.abs(oldYlocation-window.scrollY)})
//         })
//     }
// }

function mapStateToProps(state) {
    return {
        scroll: state.portfolioReducer.distanceScrolled
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(Sidebar));
// export default withStyles(styles, { withTheme: true })(Sidebar);