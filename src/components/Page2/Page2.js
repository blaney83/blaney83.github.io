import React from "react"
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import bgImage from "../../assets/img/page2BG.jpg"
import Typography from '@material-ui/core/Typography';
import bgImage1 from "../../assets/img/trianglify.png"
import GraphTabs from "../GraphTabs/GraphTabs.js"
import ScrollableAnchor from 'react-scrollable-anchor'


const styles = theme => ({
    secondContainer: {
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        zIndex: "1",
    },
    secondPage: {
        position: "absolute",
        height: "100vh",
        width: "50vw",
        top: "0px",
        left: "0px",
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
    secondEmptyHalf: {
        position: "absolute",
        height: "100vh",
        width: "50vw",
        top: "0px",
        right: "0px",
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
    graphTabsContainer: {
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
    graphTabsHeader: {
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
            marginBottom: "1rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "5rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "6rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "10rem",
            // marginBottom: "0px"
        },
        fontFamily: "monospace",
        fontVariant: "ordinal",
        fontWeight: "bold",
        marginBottom: "2rem"
    },
})


function Page2(props) {
    const { classes } = props;

    return (
        <ScrollableAnchor id={'practical_knowledge'}>
        <div className={classes.secondContainer}>
            <div className={classes.secondPage} />
            <div className={classes.secondEmptyHalf} />
            <div className={classes.graphTabsContainer}>
                <Typography variant="h2" className={classes.graphTabsHeader}>Practical Knowledge</Typography>
                <GraphTabs></GraphTabs>
            </div>
        </div>
        </ScrollableAnchor>
    )

}

// function mapDispatchToProps(dispatch) {
// }

// function mapStateToProps(state) {

// }

// export default withStyles(styles)(Page2)
export default connect(null, null)(withStyles(styles)(Page2))