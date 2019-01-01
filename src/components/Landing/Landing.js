import React from "react"
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import bgImage from "../../assets/img/stars.jpg"
import ScrollableAnchor from 'react-scrollable-anchor'

const styles = theme => ({
    landingPage: {
        height: "33vh",
        width: "100vw",
        backgroundImage: "url('" + bgImage + "')",
        backgroundPositionX: "center",
        backgroundRepeat: 'no-repeat',
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        [theme.breakpoints.up('sm')]: {
            backgroundPositionY: "-30px",
            backgroundAttachment: 'fixed',
        },
        zIndex: "-1",
        pointerEvents: "auto"
    },
    mainTitle: {
        background: "inherit",
        "-webkit-background-clip": "text",
        backgroundClip: "text",
        color: "transparent",
        font: "900 35vmin/50vh cookie, cursive",
        textAlign: "center",
        filter: "invert(1)",
        paddingTop: "30px",
        fontFamily: "unset !important",
        fontSize: "3.5rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "5rem",

        },
        [theme.breakpoints.up('md')]: {
            fontSize: "8rem",

        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "11rem",

        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "24rem",

        },
    },
    mainSubTitle: {
        color: "#a7a7a7",
        mixBlendMode: "difference",
        fontFamily: "unset !important",
    },
})

function Landing(props) {
    const { classes } = props;
    return (
        <ScrollableAnchor id={'home'}>
        <div className={classes.landingPage} id="landingPage">
            <Typography variant="h2" className={classes.mainTitle}>Ben Laney</Typography>
        </div>
        </ScrollableAnchor>
    )

}


// export default withStyles(styles)(Landing)
export default connect(null, null)(withStyles(styles)(Landing))