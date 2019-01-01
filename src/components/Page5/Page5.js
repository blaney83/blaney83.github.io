import React, { useState } from "react"
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import { cold } from 'react-hot-loader'
import { updateP5State } from "../../state/p5/actions"
import bgImage1 from "../../assets/img/rainy.jpg"
import LinkIcon from '@material-ui/icons/CallMade';
import CopyLink from '@material-ui/icons/AttachFile';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import bgImage3 from "../../assets/img/bg5.jpg"
import ShareIcon from '@material-ui/icons/Share';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import EmailIcon from '../../assets/icons/email.svg';
import GitHubIcon from '../../assets/icons/GitHub.svg';
import LinkedIcon from '../../assets/icons/linked.svg';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import ScrollableAnchor from 'react-scrollable-anchor'
import Modal from '@material-ui/core/Modal';


const styles = theme => ({
    fifthContainer: {
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        zIndex: "1",
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
    fifthEmptyHalf: {
        position: "absolute",
        height: "60vh",
        width: "67vw",
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
        // backgroundAttachment: 'fixed',
    },
    contactContainer: {
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
    contactHeader: {
        color: "white",
        textAlign: "center",
        fontSize: "4rem",
        marginBottom: "2rem",
        [theme.breakpoints.up('sm')]: {
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
            "-webkit-background-clip": "text",
            backgroundClip: "text",
            color: "transparent",
            filter: "invert(0) grayscale(1) contrast(9)",
            fontSize: "4rem",
            // marginTop: "-2rem",
            paddingBottom: "2rem",
            marginBottom: "1rem",

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
        height: "10%"
    },
    card: {
        width: "100%",
        backgroundColor: "#191919e6",
        color: "white",
        height: "90%",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: "red",
    },
    cardHeader: {
        color: "#a1a1a1db"
    },
    listText: {
        color: "white !important",
        textDecoration: "none !important",
        fontSize: ".8rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "1.2rem",
            // marginBottom: "2rem",
        },
    },
    secondaryListText: {
        color: "#a1a1a1db !important",
        textDecoration: "none !important",
        fontSize: ".7rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "1.1rem",
            // marginBottom: "2rem",
        },
    },
    contactCardContent: {
        padding: "0 !important"
    },
    contactIcons: {
        color: "white",
        fontSize: "1rem",
        padding: "6px",
        [theme.breakpoints.up('sm')]: {
            fontSize: "24px",
            // marginBottom: "2rem",
        },
    },
    contactIconsBB: {
        padding: "0px",
        [theme.breakpoints.up('sm')]: {
            // fontSize: "24px",
            padding: "12px",

            // marginBottom: "2rem",
        },
    },
    snackMessage: {
        width: "20%",
        left: "45%"
    },
    shareStyle: {
        bottom: "0px",
        left: "30%",
        position: "absolute",
    }
})


function Page5(props) {
    const { classes } = props;
    console.log(props)
    function copyEmail(p5State, toggleState) {
        const myEmail = document.createElement('textarea');
        myEmail.value = "professionallaney@gmail.com"
        myEmail.setAttribute('readonly', '');
        myEmail.style.position = 'absolute';
        myEmail.style.left = '-9999px';
        document.body.appendChild(myEmail);
        myEmail.select()
        document.execCommand('copy')
        toggleState(p5State, "email", updateP5State)
        document.body.removeChild(myEmail);
    }
    function copyGitHub(p5State, toggleState) {
        const myGitHub = document.createElement('textarea');
        myGitHub.value = "https://github.com/blaney83"
        myGitHub.setAttribute('readonly', '');
        myGitHub.style.position = 'absolute';
        myGitHub.style.left = '-9999px';
        document.body.appendChild(myGitHub);
        myGitHub.select()
        document.execCommand('copy')
        toggleState(p5State, "gitHub", updateP5State)
        document.body.removeChild(myGitHub);
    }
    function copyLinkedIn(p5State, toggleState) {
        const myLinkedIn = document.createElement('textarea');
        myLinkedIn.value = "https://www.linkedin.com/in/ben-laney-090613117/"
        myLinkedIn.setAttribute('readonly', '');
        myLinkedIn.style.position = 'absolute';
        myLinkedIn.style.left = '-9999px';
        document.body.appendChild(myLinkedIn);
        myLinkedIn.select()
        document.execCommand('copy')
        console.log(props)
        toggleState(p5State, "linkedIn", updateP5State)
        document.body.removeChild(myLinkedIn);
    }
    function copyAddress(p5State, toggleState) {
        const myAddress = document.createElement('textarea');
        myAddress.value = "https://www.linkedin.com/in/ben-laney-090613117/"
        myAddress.setAttribute('readonly', '');
        myAddress.style.position = 'absolute';
        myAddress.style.left = '-9999px';
        document.body.appendChild(myAddress);
        myAddress.select()
        document.execCommand('copy')
        toggleState(p5State, "address", updateP5State)
        document.body.removeChild(myAddress);
    }
    return (
        <ScrollableAnchor id={'contact'}>
            <div className={classes.fifthContainer}>
                <div className={classes.fifthEmptyHalf} />
                <div className={classes.contactContainer}>
                    <Typography variant="h2" className={classes.contactHeader}>Contact</Typography>
                    <div className={classes.contactCardContainer}>
                        <Card className={classes.card}>
                            <CardHeader
                                title="Benjamin Laney"
                                subheader="Scottsdale, AZ"
                                titleTypographyProps={{
                                    color: "secondary"
                                }}
                                subheaderTypographyProps={{
                                    color: "secondary"
                                }}
                            />
                            <CardContent className={classes.contactCardContent}>
                                <Grid item xs={12} md={12}>
                                    <div className={classes.demo}>
                                        <List dense={false}>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src={EmailIcon} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={<a href="mailto:professionallaney@gmail.com" className={classes.listText}>professionallaney@gmail.com</a>}
                                                    secondary={<span className={classes.secondaryListText}>E-Mail</span>}
                                                />
                                                <ListItemSecondaryAction>
                                                    <IconButton aria-label="CopyLink" className={classes.contactIconsBB} onClick={() => copyEmail(props.p5State, props.setP5State)}>
                                                        <CopyLink className={classes.contactIcons} />
                                                    </IconButton>
                                                    <a href="mailto:professionallaney@gmail.com">
                                                        <IconButton aria-label="LinkIcon" className={classes.contactIconsBB}>
                                                            <LinkIcon className={classes.contactIcons} />
                                                        </IconButton>
                                                    </a>
                                                </ListItemSecondaryAction>
                                                <Snackbar
                                                    className={classes.snackMessage}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}
                                                    open={props.p5State === "email"}
                                                    autoHideDuration={1500}
                                                    onClose={() => props.setP5State(props.p5State, null, updateP5State)}
                                                    ContentProps={{
                                                        'aria-describedby': 'message-id',
                                                    }}
                                                    message={<span id="message-id">Email Copied</span>}
                                                    action={[
                                                    ]}
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src={GitHubIcon} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={<a className={classes.listText} href="https://github.com/blaney83" rel="noopener noreferrer" target="_blank">https://github.com/blaney83</a>}
                                                    secondary={<span className={classes.secondaryListText}>GitHub</span>}
                                                />
                                                <ListItemSecondaryAction>
                                                    <IconButton aria-label="CopyLink" className={classes.contactIconsBB} onClick={() => copyGitHub(props.p5State, props.setP5State)}>
                                                        <CopyLink className={classes.contactIcons} />
                                                    </IconButton>
                                                    <a className={classes.listText} href="https://github.com/blaney83" rel="noopener noreferrer" target="_blank">
                                                        <IconButton aria-label="LinkIcon" className={classes.contactIconsBB}>
                                                            <LinkIcon className={classes.contactIcons} />
                                                        </IconButton>
                                                    </a>
                                                </ListItemSecondaryAction>
                                                <Snackbar
                                                    className={classes.snackMessage}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}
                                                    open={props.p5State === "gitHub"}
                                                    autoHideDuration={1500}
                                                    onClose={() => props.setP5State(props.p5State, null, updateP5State)}
                                                    ContentProps={{
                                                        'aria-describedby': 'message-id',
                                                    }}
                                                    message={<span id="message-id">GitHub Link Copied</span>}
                                                    action={[
                                                    ]}
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src={LinkedIcon} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={<a className={classes.listText} href="https://www.linkedin.com/in/ben-laney-090613117/" rel="noopener noreferrer" target="_blank">www.linkedin.com/in/ben-laney</a>}
                                                    secondary={<span className={classes.secondaryListText}>LinkedIn</span>}
                                                />
                                                <ListItemSecondaryAction>
                                                    <IconButton aria-label="CopyLink" className={classes.contactIconsBB} onClick={() => copyLinkedIn(props.p5State, props.setP5State)}>
                                                        <CopyLink className={classes.contactIcons} />
                                                    </IconButton>
                                                    <a className={classes.listText} href="https://www.linkedin.com/in/ben-laney-090613117/" rel="noopener noreferrer" target="_blank">
                                                        <IconButton aria-label="LinkIcon" className={classes.contactIconsBB}>
                                                            <LinkIcon className={classes.contactIcons} />
                                                        </IconButton>
                                                    </a>
                                                </ListItemSecondaryAction>
                                                <Snackbar
                                                    className={classes.snackMessage}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}
                                                    open={props.p5State === "linkedIn"}
                                                    autoHideDuration={1500}
                                                    onClose={() => props.setP5State(props.p5State, null, updateP5State)}
                                                    ContentProps={{
                                                        'aria-describedby': 'message-id',
                                                    }}
                                                    message={<span id="message-id">LinkedIn Link Copied</span>}
                                                    action={[
                                                    ]}
                                                />
                                            </ListItem>
                                        </List>
                                    </div>
                                </Grid>
                            </CardContent>
                            <CardActions className={classes.actions} >
                                <IconButton aria-label="Copy Website Address" className={classes.contactIconsBB} onClick={() => copyAddress(props.p5State, props.setP5State)}>
                                    <CopyLink className={classes.contactIcons} />
                                </IconButton>
                                <Snackbar
                                    className={classes.snackMessage}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    open={props.p5State === "address"}
                                    autoHideDuration={1500}
                                    onClose={() => props.setP5State(props.p5State, null, updateP5State)}
                                    ContentProps={{
                                        'aria-describedby': 'message-id',
                                    }}
                                    message={<span id="message-id">Ben's Page Link Copied</span>}
                                    action={[
                                    ]}
                                />
                                <IconButton aria-label="Share" className={classes.contactIconsBB} onClick={() => props.setP5State(props.p5State, "shared", updateP5State)}>
                                    <ShareIcon className={classes.contactIcons} />
                                </IconButton>
                                <Modal
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                    open={props.p5State === "shared"}
                                    onClose={() => props.setP5State(props.p5State, null, updateP5State)}
                                >
                                    <div class="sharethis-inline-share-buttons" className={classes.shareStyle}></div>
                                </Modal>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div >
        </ScrollableAnchor>
    )

}

function mapDispatchToProps(dispatch) {
    const p5Methods = {
        setP5State(currentState, newState, setState) {
            if (currentState === newState) {
                dispatch(setState({
                    p5State: false
                }))
            } else {
                dispatch(setState({
                    p5State: newState
                }))
            }
        },
    }
    return (p5Methods)
}

function mapStateToProps(state) {
    return { p5State: state.p5reducer.p5State }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page5))






