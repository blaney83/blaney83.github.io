import React, { useState, useEffect, useRef } from "react"
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Particles from "react-particles-js"
import { withStyles } from '@material-ui/core/styles';
import bgImage from "../../assets/img/page1BG.jpg"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import Headshot from "../../assets/img/headshot.jpg"
import ScrollableAnchor from 'react-scrollable-anchor'
const PartParams = require("./particles.json")

const styles = theme => ({
    root: {
        width: '100%',
    },
    firstPage: {
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('" + bgImage + "')",
        backgroundPosition: 'center',
        "-webkit-backgroundPosition": 'center',
        "-moz-backgroundPosition": 'center',
        "-o-backgroundPosition": 'center',
        "-webkit-backgroundRepeat": 'no-repeat',
        "-moz-backgroundRepeat": 'no-repeat',
        "-o-backgroundRepeat": 'no-repeat',
        backgroundRepeat: 'no-repeat',
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        [theme.breakpoints.up('sm')]: {
            backgroundAttachment: 'fixed',
        },
        zIndex: "-1",
        // overflowY: "hidden"
    },
    particleDiv: {
        position: "absolute",
        height: "100vh",
        width: "100vw",
        top: "0px",
        left: "0px",
        zIndex: "-10",

    },
    cardHeader: {
        padding: "0px !important"
        // backgroundColor: ""
    },
    mainCard: {
        backgroundColor: "#131313bd",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        borderRadius: "3px",
        padding: "1.5rem",
    },
    firstPageCardContainer: {
        width: "100%",
        display: "initial",

    },
    firstPageMainContainer: {
        boxSizing: "border-box",
        padding: "8px",
        paddingTop: "30px",
        [theme.breakpoints.up('sm')]: {
            paddingTop: "50px",
            paddingLeft: "72px",
            paddingRight: "72px"
        },
        width: "100%",
        height: "100%",
    },
    avatarBubble: {
        width: "30%",
        [theme.breakpoints.up('sm')]: {
            width: "50%",
        },
        height: "auto",
        display: "inline-flex",
        position: "relative",
        // left: "10%",
        boxSizing: "border-box",
    },
    headerContainer: {
        paddingBottom: "5px",
        borderBottomWidth: "2px",
        borderBottomStyle: "solid",
        borderBottomColor: "#665b47"
    },
    headerText: {
        color: "white !important",
        fontSize: "2.5rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "4rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "5rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "7rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "10rem",
            // marginBottom: "0px"
        },
        fontFamily: "monospace",
        fontVariant: "ordinal",
        // textDecoration: "underline overline",
        fontWeight: "bold"
    },
    cardContent: {
        zIndex: "1",
        paddingBottom: "0px !important",
        padding: "0px"
    },
    toTheFront: {
        zIndex: "310"
    },
    heading: {
        color: "white",
        fontSize: "initial",
        transition: theme.transitions.create("fontSize", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    headingHidden: {
        color: "white",
        fontSize: "0px",
        transition: theme.transitions.create(['color', 'fontSize'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    secondaryHeading: {
        color: "white"
    },
    panelBody: {
        color: "white",
        fontSize: ".8rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: ".875rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "1rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "1.2rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "1.4rem",
            // marginBottom: "0px"
        },
    },
    paperStyle: {
        backgroundColor: "#2e2a23c2"
    },
    expandIcon: {
        color: "white"
    },
    expansionSummary: {
        minHeight: "10px"
    },
    summaryContent: {
        margin: "6px 0px",
        height: " initial",
        transition: theme.transitions.create(['height', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    summaryContentHidden: {
        height: " 0px",
        margin: " 0px",
        transition: theme.transitions.create(['height', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    iconInitial: {
        height: "initial",
        transition: theme.transitions.create('height', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    iconHidden: {
        height: "0px",
        transition: theme.transitions.create('height', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    panelDetailsContainer: {
        padding: "5px 5px 10px",
        [theme.breakpoints.up('sm')]: {
            padding: "15px 20px 20px",
        },
    },
})

// width: theme.spacing.unit * 7 + 1,
// [theme.breakpoints.up('sm')]: {
//     width: theme.spacing.unit * 9 + 1,
// },

class Page1 extends React.Component {
    state = {
        clicks: 0,
        expanded: ""
    }

    togglePanel = (panel, expanded) => {
        if (panel === expanded) {
            this.setState({ expanded: "" })
        } else {
            this.setState({ expanded: panel })
        }
    }

    clickAway = () => {
        this.setState({ expanded: "" })
    }


    render() {
        const { classes } = this.props;
        return (
            <ScrollableAnchor id={'about_me'}>
                <div className={classes.firstPage}>
                    <div className={classes.firstPageMainContainer}>
                        <Grid container className={classes.firstPageCardContainer}>
                            <Grid item>
                                <ClickAwayListener onClickAway={()=>this.clickAway()}>
                                    <Card className={classes.mainCard}>
                                        <Grid container justify="flex-start" alignItems="flex-end" className={classes.headerContainer}>
                                            <Grid item xs={12} sm={3}>
                                                <Avatar src={Headshot} className={classes.avatarBubble} />
                                                {/* <button onClick={() => setClicks(clicks + 1)}>{clicks}click me</button> */}
                                            </Grid>
                                            <Grid item xs={12} sm={9}>
                                                <CardHeader
                                                    className={classes.cardHeader}
                                                    titleTypographyProps={{
                                                        variant: "h3",
                                                        align: "left",
                                                        classes: {
                                                            h3: classes.headerText
                                                        }
                                                    }}
                                                    title="About Me"
                                                />
                                            </Grid>
                                        </Grid>
                                        <CardContent className={classes.cardContent}>
                                            <div className={classes.root}>
                                                <ExpansionPanel expanded={this.state.expanded === "panel1"} className={classes.paperStyle} >
                                                    <ExpansionPanelSummary classes={{ content: this.state.expanded === "" || this.state.expanded === "panel1" ? classes.summaryContent : classes.summaryContentHidden }} className={classes.expansionSummary} onClick={() => this.togglePanel("panel1", this.state.expanded)} expandIcon={<ExpandMoreIcon classes={{ root: this.state.expanded === "" || this.state.expanded === "panel1" ? classes.iconInitial : classes.iconHidden }} className={classes.expandIcons} color="secondary" />}>
                                                        <Typography className={this.state.expanded === "" || this.state.expanded === "panel1" ? classes.heading : classes.headingHidden}>Intro</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails classes={{ root: classes.panelDetailsContainer }}>
                                                        <Typography className={classes.panelBody} variant="body1">
                                                            Hello! Thank you for visiting my site. I put together this project using various web development technologies as a way to exercise creativity and help you get to know me a little better. I am always working to learn and develop my software abilities and if you have any comments or suggestions, please feel free to reach out to me via the "Contact" section below. Thank you. Enjoy your visit!
                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                                {/* </div> */}
                                                <ExpansionPanel expanded={this.state.expanded === 'panel2'} className={classes.paperStyle}>
                                                    <ExpansionPanelSummary classes={{ content: this.state.expanded === "" || this.state.expanded === "panel2" ? classes.summaryContent : classes.summaryContentHidden }} className={classes.expansionSummary} onClick={() => this.togglePanel("panel2", this.state.expanded)} expandIcon={<ExpandMoreIcon classes={{ root: this.state.expanded === "" || this.state.expanded === "panel2" ? classes.iconInitial : classes.iconHidden }} className={classes.expandIcons} color="secondary" />}>
                                                        <Typography className={this.state.expanded === "" || this.state.expanded === "panel2" ? classes.heading : classes.headingHidden}>Personal Background</Typography>
                                                        <Typography className={classes.secondaryHeading}>
                                                            {/* You are currently not an owner */}
                                                        </Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails classes={{ root: classes.panelDetailsContainer }}>
                                                        <Typography className={classes.panelBody}>
                                                            I have a deep appreciation for science, learning, nature and information. Growing up in Arizona, I am an Eagle Scout and a former student-athlete who played baseball through college. Some of my favorite experiences include backpacking in New Mexico, snowboarding in the winter, living in Seattle for a year and raising my husky, Aurora.
                                            </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                                <ExpansionPanel expanded={this.state.expanded === 'panel3'} className={classes.paperStyle}>
                                                    <ExpansionPanelSummary classes={{ content: this.state.expanded === "" || this.state.expanded === "panel3" ? classes.summaryContent : classes.summaryContentHidden }} className={classes.expansionSummary} onClick={() => this.togglePanel("panel3", this.state.expanded)} expandIcon={<ExpandMoreIcon classes={{ root: this.state.expanded === "" || this.state.expanded === "panel3" ? classes.iconInitial : classes.iconHidden }} className={classes.expandIcons} color="secondary" />}>
                                                        <Typography className={this.state.expanded === "" || this.state.expanded === "panel3" ? classes.heading : classes.headingHidden}>Educational Background</Typography>
                                                        <Typography className={classes.secondaryHeading}>
                                                        </Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails classes={{ root: classes.panelDetailsContainer }}>
                                                        <Typography className={classes.panelBody}>
                                                            While I am not an expert in anything, I love to learn new things and push my understanding of the way the world works. I have studied such topics as biomedical engineering, environment sustainability and chemistry, but I love learning about science and information technology in general. I am fascinated by software and its ability to help us understand the world around us. For fun, I like to read and practice with unfamiliar languages/platforms and explore source code to learn from more experienced developers.
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                                <ExpansionPanel expanded={this.state.expanded === 'panel4'} className={classes.paperStyle}>
                                                    <ExpansionPanelSummary classes={{ content: this.state.expanded === "" || this.state.expanded === "panel4" ? classes.summaryContent : classes.summaryContentHidden }} className={classes.expansionSummary} onClick={() => this.togglePanel("panel4", this.state.expanded)} expandIcon={<ExpandMoreIcon classes={{ root: this.state.expanded === "" || this.state.expanded === "panel4" ? classes.iconInitial : classes.iconHidden }} className={classes.expandIcons} color="secondary" />}>
                                                        <Typography className={this.state.expanded === "" || this.state.expanded === "panel4" ? classes.heading : classes.headingHidden}>Professional Background</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails classes={{ root: classes.panelDetailsContainer }}>
                                                        <Typography className={classes.panelBody}>
                                                            There are several key experiences that have had a notable impact on me and have taught me invaluable lessons. In particular, I served as the general manager for 2 multi-million dollar food and entertainment venues where I developed many valuable skills by overseeing more than 100 employees at any given time. Additionally, I served as the lead triage specimen analyst in a major hospital's chemistry diagnostics lab while living in Seattle. Most recently, I have been an assistant instructor in the Software Development Program at the University of Arizona while working to further my education.
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                                <ExpansionPanel expanded={this.state.expanded === 'panel5'} className={classes.paperStyle}>
                                                    <ExpansionPanelSummary classes={{ content: this.state.expanded === "" || this.state.expanded === "panel5" ? classes.summaryContent : classes.summaryContentHidden }} className={classes.expansionSummary} onClick={() => this.togglePanel("panel5", this.state.expanded)} expandIcon={<ExpandMoreIcon classes={{ root: this.state.expanded === "" || this.state.expanded === "panel5" ? classes.iconInitial : classes.iconHidden }} className={classes.expandIcons} color="secondary" />}>
                                                        <Typography className={this.state.expanded === "" || this.state.expanded === "panel5" ? classes.heading : classes.headingHidden}>Personal Interests</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails classes={{ root: classes.panelDetailsContainer }}>
                                                        <Typography className={classes.panelBody}>
                                                            {"Hiking, reading, learning, math and science, camping, baseball, football, good movies, good quotes, snowboarding, travel, reading the news, my dog and making waffles."}
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                                <ExpansionPanel expanded={this.state.expanded === 'panel6'} className={classes.paperStyle}>
                                                    <ExpansionPanelSummary classes={{ content: this.state.expanded === "" || this.state.expanded === "panel6" ? classes.summaryContent : classes.summaryContentHidden }} className={classes.expansionSummary} onClick={() => this.togglePanel("panel6", this.state.expanded)} expandIcon={<ExpandMoreIcon classes={{ root: this.state.expanded === "" || this.state.expanded === "panel6" ? classes.iconInitial : classes.iconHidden }} className={classes.expandIcons} color="secondary" />}>
                                                        <Typography className={this.state.expanded === "" || this.state.expanded === "panel6" ? classes.heading : classes.headingHidden}>Professional Interests</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails classes={{ root: classes.panelDetailsContainer }}>
                                                        <Typography className={classes.panelBody}>
                                                            {"Web Development, Server Development, Java and JavaScript, Data Visualization, Data Analysis, Machine Learning, Business Intelligence"}
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                                <ExpansionPanel expanded={this.state.expanded === 'panel7'} className={classes.paperStyle}>
                                                    <ExpansionPanelSummary classes={{ content: this.state.expanded === "" || this.state.expanded === "panel7" ? classes.summaryContent : classes.summaryContentHidden }} className={classes.expansionSummary} onClick={() => this.togglePanel("panel7", this.state.expanded)} expandIcon={<ExpandMoreIcon classes={{ root: this.state.expanded === "" || this.state.expanded === "panel7" ? classes.iconInitial : classes.iconHidden }} className={classes.expandIcons} color="secondary" />}>
                                                        <Typography className={this.state.expanded === "" || this.state.expanded === "panel7" ? classes.heading : classes.headingHidden}>Code of Ethos</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails classes={{ root: classes.panelDetailsContainer }}>
                                                        <Typography className={classes.panelBody}>
                                                            {"Respect your neighbor. Love your animals. Protect your planet. Work hard. Never stop learning. Stand up for what is right. Leave things better than you found them. Be a good person."}
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                                <ExpansionPanel expanded={this.state.expanded === 'panel8'} className={classes.paperStyle}>
                                                    <ExpansionPanelSummary classes={{ content: this.state.expanded === "" || this.state.expanded === "panel8" ? classes.summaryContent : classes.summaryContentHidden }} className={classes.expansionSummary} onClick={() => this.togglePanel("panel8", this.state.expanded)} expandIcon={<ExpandMoreIcon classes={{ root: this.state.expanded === "" || this.state.expanded === "panel8" ? classes.iconInitial : classes.iconHidden }} className={classes.expandIcons} color="secondary" />}>
                                                        <Typography className={this.state.expanded === "" || this.state.expanded === "panel8" ? classes.heading : classes.headingHidden}>About this Page</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails classes={{ root: classes.panelDetailsContainer }}>
                                                        <Typography className={classes.panelBody}>
                                                            This page was a lot of fun to make. I know it is not perfect, but I would love to hear from you about your experience and how I could make it better. It was developed mostly on the Chrome engine and is most reliable with large screens (laptops, etc.) when viewed with Google Chrome and on most mobile devices. If you have any issues please let me know so I can fix them. Also, feel free to contact me to share ideas or just get in touch. I would love to hear from you. Thanks!
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ClickAwayListener>
                            </Grid>
                        </Grid>
                    </div>
                    {/* <Particles
                        className={classes.particleDiv}
                        params={PartParams}
                    /> */}
                </div>
            </ScrollableAnchor>
        )
    }
}

// function mapDispatchToProps(dispatch) {

// }

// function mapStateToProps(state) {

// }

Page1.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default connect(null, null)(withStyles(styles)(Page1))