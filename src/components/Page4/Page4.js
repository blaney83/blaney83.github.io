import React from "react"
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import bgImage from "../../assets/img/forest.jpg"
import bgImage1 from "../../assets/img/bg6.jpg"
import bgImage2 from "../../assets/img/bg4.jpg"
import bgImage3 from "../../assets/img/leaves.jpg"
import Fire from "../../assets/img/resourceImg/fire.jpg"
import Ocean from "../../assets/img/resourceImg/ocean.jpg"
import Nightlight from "../../assets/img/resourceImg/nightlight.jpg"
import Woods from "../../assets/img/resourceImg/woods.jpg"
import Coverflow from "react-coverflow"
import ScrollableAnchor from 'react-scrollable-anchor'
import "./style.css"

const styles = theme => ({
    fourthContainer: {
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        zIndex: "1",
    },
    fourthPage: {
        position: "absolute",
        height: "100vh",
        width: "25vw",
        top: "0px",
        left: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage + "')",
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: '100vh',
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        backgroundSize: 'cover',
        // backgroundAttachment: "fixed",
    },
    fourthEmptyHalf: {
        position: "absolute",
        height: "50vh",
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
        // backgroundAttachment: 'fixed',
    },
    fourthEmpty1Half: {
        position: "absolute",
        height: "100vh",
        width: "26vw",
        bottom: "0px",
        left: "25vw",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage2 + "')",
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
    fourthEmpty2Half: {
        position: "absolute",
        height: "50vh",
        width: "50vw",
        bottom: "0px",
        right: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage3 + "')",
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
    resourcesContainer: {
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
    resourcesHeader: {
        color: "black",
        textAlign: "center",
        fontSize: "4rem",
        [theme.breakpoints.up('sm')]: {
            marginTop: "-10px",
            filter: "invert(1) grayscale(1) contrast(9)",
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
        // marginBottom: "2rem"
    },
    scrollContainer: {
    },
    listItemClass: {

    },
    slideTile: {
        color: "white",
        fontSize: ".95rem",
        fontWeight: "bold",
        [theme.breakpoints.up('sm')]: {
            fontSize: "1.05rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "1.4rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "3rem",
            // marginBottom: "0px"
        },
    },
    mainCard: {
        backgroundColor: "#131313bd",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        borderRadius: "3px",
        padding: "1.5rem",
    },
    cardHeader: {
        padding: "0px !important"
        // backgroundColor: ""
    },
    slideListItem: {
        color: "white",
        fontSize: ".6rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: ".7rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: ".7rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "1.5rem",
            // marginBottom: "0px"
        },
    },
    flowContainer: {
        width: "100%",
        height: "90%"
    },
    headerContainer: {
        height: "10%"
    },
    wheelImages: {

    },
    linkTextDecoration: {
        textDecoration: "none !important"
    }
})


function Page4(props) {
    const { classes } = props;

    return (
        <ScrollableAnchor id={'resources'}>
            <div className={classes.fourthContainer}>
                <div className={classes.fourthPage} />
                <div className={classes.fourthEmptyHalf} />
                <div className={classes.fourthEmpty1Half} />
                <div className={classes.fourthEmpty2Half} />
                <div className={classes.resourcesContainer}>
                    <div className={classes.headerContainer}>
                        <Typography variant="h2" className={classes.resourcesHeader}>Resources</Typography>
                    </div>
                    <div className={classes.flowContainer}>

                        <Coverflow
                            displayQuantityOfSide={1}
                            navigation={true}
                            enableScroll={false}
                            clickable={true}
                            infiniteScroll={true}
                            currentFigureScale={1.4}
                            otherFigureScale={.8}
                            active={0}
                        // height={"100%"}
                        >
                            <img src={Fire} className={classes.wheelImages} alt={
                                <div >
                                    <Grid container spacing={16} >
                                        <Grid item xs={12} >
                                            <Typography variant="body1" className={classes.slideTile}>Docs</Typography>
                                            <div >
                                                <List dense={true}>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- Mozilla JS Docs</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://docs.oracle.com/en/java/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- Java Docs</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://reactjs.org/docs/getting-started.html" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- React</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://redux.js.org/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- Redux</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true}>
                                                        <a className={classes.linkTextDecoration} href="https://www.w3schools.com/jsref/jsref_obj_array.asp" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- W3 Array Methods</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true}>
                                                        <a className={classes.linkTextDecoration} href="https://devdocs.io/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- DevDocs(very cool)</Typography></a>
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            }
                            />
                            <img src={Nightlight} alt={
                                <div>
                                    <Grid container spacing={16}>
                                        <Grid item xs={12} >
                                            <Typography variant="body1" className={classes.slideTile}>Frameworks/Libs</Typography>
                                            <div >
                                                <List dense={true}>
                                                <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://www.jhipster.tech/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- JHipster</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://material-ui.com/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- Material UI (React)</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- Bootstrap</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://maven.apache.org/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- Apache Maven</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://jquery.com/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- JQuery</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://junit.org/junit4/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- JUnit</Typography></a>
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            } />
                            <img src={Woods} alt={
                                <div>
                                    <Grid container spacing={16}>
                                        <Grid item xs={12} >
                                            <Typography variant="body1" className={classes.slideTile}>Media</Typography>
                                            <div >
                                                <List dense={true}>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://syntax.fm/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- Syntax</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://darknetdiaries.com/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- darknetdiaries</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- 3Blue1Brown</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://www.youtube.com/user/1veritasium" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- Veritasium</Typography></a>
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            }
                            />
                            <img src={Ocean} alt={
                                <div>
                                    <Grid container spacing={16}>
                                        <Grid item xs={12} >
                                            <Typography variant="body1" className={classes.slideTile}>Visual</Typography>
                                            <div className={classes.demo}>
                                                <List dense={true}>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://unsplash.com/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- Unsplash</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://d3js.org/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- D3</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://gionkunz.github.io/chartist-js/api-documentation.html" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- Chartist</Typography></a>
                                                    </ListItem>
                                                    <ListItem button={true} className={classes.listItemClass}>
                                                        <a className={classes.linkTextDecoration} href="https://trianglify.io/" rel="noopener noreferrer" target="_blank"><Typography variant="body1" className={classes.slideListItem}>- Trianglify</Typography></a>
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            }
                            />
                        </Coverflow>,
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )

}

// function mapDispatchToProps(dispatch) {
// }

// function mapStateToProps(state) {

// }

export default connect(null, null)(withStyles(styles)(Page4))