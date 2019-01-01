import React, { useState } from "react"
import { connect } from "react-redux";
// import {useSortHook} from "../Hooks/p3Hook.js"
import { portSortAction } from "../../state/p3/actions.js"
import { withStyles } from '@material-ui/core/styles';
import bgImage from "../../assets/img/page3BG.jpg"
import bgImage1 from "../../assets/img/trianglify.png"
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Portfolio from "../Portfolio/Portfolio.js"
import Left from '@material-ui/icons/KeyboardArrowLeft';
import Right from '@material-ui/icons/KeyboardArrowRight';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import green from '@material-ui/core/colors/green';
import ScrollableAnchor from 'react-scrollable-anchor'


const styles = theme => ({
    thirdContainer: {
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        zIndex: "1",
    },
    thirdPage: {
        position: "absolute",
        height: "100vh",
        width: "50vw",
        top: "0px",
        left: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage1 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        [theme.breakpoints.up('sm')]: {
            backgroundAttachment: 'fixed',
        },
    },
    thirdEmptyHalf: {
        position: "absolute",
        height: "100vh",
        width: "50vw",
        top: "0px",
        right: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        [theme.breakpoints.up('sm')]: {
            backgroundAttachment: 'fixed',
        },
    },
    portfolioContainer: {
        boxSizing: "border-box",
        padding: "8px",
        [theme.breakpoints.up('sm')]: {
            paddingLeft: "72px",
            paddingRight: "72px",
        },
        width: "100%",
        height: "100%",
        paddingTop: "30px",
    },
    portfolioHeader: {
        backgroundImage: "url('" + bgImage1 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        [theme.breakpoints.up('sm')]: {
            backgroundAttachment: 'fixed',
        },
        "-webkit-background-clip": "text",
        backgroundClip: "text",
        color: "transparent",
        textAlign: "center",
        filter: "invert(1) grayscale(1) contrast(9)",
        fontSize: "4rem",
        marginBottom: "2rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "4rem",
            // marginBottom: "0px"
            marginBottom: "0px"
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "5rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "5rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "10rem",
            // marginBottom: "0px"
        },
        fontFamily: "monospace",
        fontVariant: "ordinal",
        fontWeight: "bold",
        // marginBottom: "2rem"
    },
    portfolioGridListContainer: {
        // padding: "30px",
        paddingLeft: "3px",
        paddingRight: "3px",
        [theme.breakpoints.up('sm')]: {
            paddingLeft: "30px",
            paddingRight: "33px",
        },
        // paddingBottom: "30px",
        borderRadius: "3px",
        backgroundColor: "#81848399"
    },
    // root: {
    //     backgroundColor: theme.palette.background.paper,
    //     width: 500,
    //     position: 'relative',
    //     minHeight: 200,
    // },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
    },
    portfolioTabBar: {
        backgroundColor: "transparent",
        boxShadow: "none !important"
    },
    portfolioTabs: {
        color: "#000000e3"
    },
    leftIcon: {
        fontSize: "2rem",
        marginRight: "1rem"
    },
    rightIcon: {
        fontSize: "2rem",
        marginLeft: "1rem"
    },
    portfolioWrapper: {
        height: "90%"
    }
})

// const initialState = {portfolioSort: 0};
function Page3(props) {
    const { classes } = props;
    // const [portfolioSort, setPortfolioSort] = useSortHook(initialState, {useState})
    // console.log(portfolioSort.portfolioSort)
    // console.log(setPortfolioSort)
    console.log(props)
    let mousedownIDL = -1;
    let mousedownIDR = -1;
    function scrollPortfolioLeft(x) {
        let currentPosition = document.getElementById("portfolioTarget").scrollLeft
        document.getElementById("portfolioTarget").scroll({
            left: currentPosition.scrollLeft - 200,
            behavior: 'smooth'
        })
    }
    function scrollPortfolioRight(x) {
        let currentPosition = document.getElementById("portfolioTarget")
        currentPosition.scroll({
            left: currentPosition.scrollLeft + 200,
            behavior: 'smooth'
        })
    }
    function mousedownL(event) {
        if (mousedownIDL === -1)  //Prevent multimple loops!
            mousedownIDL = setInterval(whilemousedownL, 300 /*execute every 100ms*/);
    }
    function mouseupL(event) {
        if (mousedownIDL !== -1) {  //Only stop if exists
            clearInterval(mousedownIDL);
            mousedownIDL = -1;
        }
    }
    function whilemousedownL() {
        scrollPortfolioLeft()
    }
    function mousedownR(event) {
        if (mousedownIDR === -1)  //Prevent multimple loops!
            mousedownIDR = setInterval(whilemousedownR, 300 /*execute every 100ms*/);
    }
    function mouseupR(event) {
        if (mousedownIDR !== -1) {  //Only stop if exists
            clearInterval(mousedownIDR);
            mousedownIDR = -1;
        }
    }
    function whilemousedownR() {
        scrollPortfolioRight()
    }

    return (
        <ScrollableAnchor id={'projects'}>
            <div className={classes.thirdContainer}>
                <div className={classes.thirdPage} />
                <div className={classes.thirdEmptyHalf} />
                <div className={classes.portfolioContainer}>
                    <Typography variant="h2" className={classes.portfolioHeader}>Project Anthology</Typography>
                    <div className={classes.portfolioGridListContainer}>
                        <AppBar position="static" color="default" className={classes.portfolioTabBar}>
                            <Tabs
                                value={props.portfolioSort}
                                // onChange={this.handleChange}
                                indicatorColor="primary"
                                // textColor="primary"
                                fullWidth
                                className={classes.portfolioTabs}
                            >
                                <Tab label="All" onClick={() => props.setPortfolioSort( portSortAction, 0)} />
                                <Tab label="Polished" onClick={() => props.setPortfolioSort( portSortAction, 1) }/>
                                <Tab label="Practice" onClick={() => props.setPortfolioSort( portSortAction, 2)} />
                            </Tabs>
                        </AppBar>
                        <div className={classes.portfolioWrapper}>
                            <Portfolio sort={props.portfolioSort} ></Portfolio>
                        </div>
                        <IconButton>
                            <Left className={classes.leftIcon} onClick={scrollPortfolioLeft} onMouseDown={mousedownL} onMouseUp={mouseupL} />
                        </IconButton>
                        <IconButton>
                            <Right className={classes.rightIcon} onClick={scrollPortfolioRight} onMouseDown={mousedownR} onMouseUp={mouseupR} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )

}

function mapDispatchToProps(dispatch) {
    const p3Methods = {
        setPortfolioSort(portSortAction, sortId) {
            // setCurrentGraph(graphId)
            dispatch(portSortAction({
                portfolioSort: sortId
            }))
        }
    }
    return(p3Methods)
}

function mapStateToProps(state) {
    return { portfolioSort: state.portfolioSort.portfolioSort }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page3))
// export default withStyles(styles)(Page3)