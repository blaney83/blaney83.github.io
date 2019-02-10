import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { updateAnchor } from "../../state/Portfolio/actions.js"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import InfoIcon from '@material-ui/icons/Info';
import Modal from '@material-ui/core/Modal';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import LinkIcon from '@material-ui/icons/OpenInNewOutlined';
import image1 from '../../assets/img/portfolioImg/1router.jpg';
import image2 from '../../assets/img/portfolioImg/2code.jpg';
import image3 from '../../assets/img/portfolioImg/3lightReact.jpg';
import image4 from '../../assets/img/portfolioImg/4newlap.jpg';
import image5 from '../../assets/img/portfolioImg/5coastFan.jpg';
import image6 from '../../assets/img/portfolioImg/6clistore.jpg';
import image7 from '../../assets/img/portfolioImg/7pill.jpg';
import image8 from '../../assets/img/portfolioImg/8snip.jpg';
import image9 from '../../assets/img/portfolioImg/9liri.jpg';
import image10 from '../../assets/img/portfolioImg/10travel.jpg';
import image11 from '../../assets/img/portfolioImg/11team.jpg';
import image12 from '../../assets/img/portfolioImg/12tile.jpg';
import image13 from '../../assets/img/portfolioImg/13search.jpg';
import image14 from '../../assets/img/portfolioImg/14magic.jpg';
import image15 from '../../assets/img/portfolioImg/15bee.jpg';
import image16 from '../../assets/img/portfolioImg/16find.jpg';
import image17 from '../../assets/img/portfolioImg/17music.jpg';
import image18 from '../../assets/img/portfolioImg/18machine.jpg';
import image19 from '../../assets/img/portfolioImg/19svalley.jpg';
import image20 from '../../assets/img/portfolioImg/20stats.jpg';
import image21 from '../../assets/img/portfolioImg/21more.jpg';
import image22 from '../../assets/img/portfolioImg/rawpixel-1162844-unsplash.jpg';
import image23 from '../../assets/img/portfolioImg/23encap.jpg';
import image24 from '../../assets/img/portfolioImg/24wfall.jpg';
import image25 from '../../assets/img/portfolioImg/25wf.jpg';
import image26 from '../../assets/img/portfolioImg/26regress.jpg';
import image27 from '../../assets/img/portfolioImg/27column.jpg';
// import jrVideo from "../../assets/img/jrclipped.mp4";



const tileData = [
    {
        img: image26,
        num: 26,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/Multivariate-Linear-Polynomial-Regression-3D-Modeling-Node",
        title: 'Multivariate Linear/Polynomial Regression 3D Modeling Node',
        tech: 'Java',
        featured: true,
        polished: true,
        isImg: true,
        popOverText: "This fully functioning Eclipse plug-in is built to be integrated into the KNIME Analytics Platform and provides a 3D representation to obtain a visual ,closeness of fit' test when provided a co-efficient table output by an upstream multivariate linear/polynomial regression node."
    },
    {
        img: image24,
        num: 5,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/D3_WaterFall_Chart",
        title: 'D3 Waterfall Chart',
        tech: 'D3',
        featured: false,
        polished: true,
        isImg: true,
        popOverText: "Reusable, D3 water-fall chart for data visualization with CSV processing and bin-sorting functionality."
    },
    {
        img: image27,
        num: 27,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/dynamic_column_generator",
        title: 'Dynamic Column Generator Node',
        tech: 'Java',
        featured: false,
        polished: true,
        isImg: true,
        popOverText: "KNIME Analytics Platform compatible node which creates columns of either type String or Double randomly to assist with testing."
    },
    {
        img: image25,
        num: 2,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/waterfall_chart_viz",
        title: 'Waterfall Node',
        tech: 'Java, .swing',
        featured: true,
        polished: true,
        isImg: true,
        popOverText: "This fully functioning Eclipse plug-in is built to be integrated into the KNIME Analytics Platform and provides a colorized, bifurcated bin view with an aggregate column which can be exported as an SVG file. Works with net-positive and net-negative columns and binned elements of numeric, nominal or categorical data types."
    },
    {
        img: image22,
        num: 3,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/JTD",
        title: 'JTD',
        tech: 'Java, JFX',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "A Java desktop application for task tracking and visual reminders."
    },
    {
        img: image8,
        num: 4,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/useful_snippets_and_components",
        title: 'Useful Snippets',
        tech: 'Java/JavaScript',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "This repository houses random fiddles, workarounds and tricks deemed worthy of saving."
    },
    {
        img: image1,
        num: 1,
        id: "portfolioItem",
        ref: "http://job-router.herokuapp.com/",
        title: 'Job-Router',
        tech: 'MongoDB, React 16.7.2A',
        featured: true,
        polished: true,
        isImg: true,
        popOverText: "This application is designed to help streamline the job search process. It compiles data from 6 of the largest job search engines on the internet and allows users to create dynamic profiles which allow integrated progress tracking though proprietary filtering and sorting methodology."
    },
    {
        img: image2,
        num: 6,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/SPA-Dynamic-Background-Scroll-Feed-Template",
        title: 'SPA Vertical Website Template',
        tech: 'React',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "This github repository houses a simple design template for creating dynamic background containers for a vertical React Application."
    },
    {
        img: image3,
        num: 7,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/React-Template",
        title: 'MERN Template',
        tech: 'Mongo, Express, React, Node',
        polished: false,
        featured: false,
        isImg: true,
        popOverText: "This template is configured with React-Router, Redux support and a complete file structure for rapid, full-stack application deployment."
    },
    {
        img: image4,
        num: 8,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/new_laptop",
        title: 'New Laptop',
        tech: 'Mongo, Node',
        polished: true,
        featured: true,
        isImg: true,
        popOverText: "This application creates a real-time assortment of all products from a popular electronics retailer that rhymes with West Rye. It allows users to quickly sort not only by price BUT by percentage savings to rapidly locate the very best deals in a given category for their locality. It also allows sorted identification of 'open-box' products which saves valuable time searching for the best deal by delivering immediate results."
    },
    {
        img: image5,
        num: 9,
        id: "portfolioItem",
        ref: "https://fanter.herokuapp.com/",
        title: 'Fanter',
        tech: 'mySQL, ORMs',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "This application is designed as a platform for movie theories and conversation. Weird ending? Start a discussion on Fanter and find out what the community thinks."
    },
    {
        img: image6,
        num: 10,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/cli_sql_store",
        title: 'CLI Store Software',
        tech: 'SQL, Node',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "This back-end application is a targeted approach to managing in a retail environment. Tracking inventory and sales, managing profit margin and offering 3 different authorization access levels, its a back-end solution to a store-front problem!"
    },
    {
        img: image7,
        num: 11,
        id: "portfolioItem",
        ref: "https://pillcoach.herokuapp.com/",
        title: 'Pill Coach',
        tech: 'SQL, Express, ES7',
        featured: true,
        polished: true,
        isImg: true,
        popOverText: "This multi-faceted medical application allows users to precisely track their Rx intake and quickly access all potentially life-saving reference information available for their specific Rxs from across the web in one place. With dose tracking and imminent-refill notifications, this application is a must have for anybody with multiple prescriptions. Dynamically created hyper-links and 7 different categories of medical-grade information for EACH Rx at your fingertips!"
    },
    {
        img: image23,
        num: 12,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/Poly_Encap_Inherit_Comp",
        title: 'Inheritance and Encapsulation',
        tech: 'Java',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "Some rough basic concept Inheritance and Encapsulation examples for reference."
    },
    {
        img: image9,
        num: 13,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/liri-node-app",
        title: 'Liri',
        tech: 'Node, REST',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "This command line assistant can do everything that your phone can when it comes to accessing entertainment information. Utilizing the official APIs from Spotify, Bands in Town and IMDB, this application can find information about almost anything in the blink of an eye. Additionally tracks your history to provide record and recall of your searches."
    },
    {
        img: image10,
        num: 14,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/SVW_project_one",
        title: "Let's Travel",
        tech: 'Google API, ES6',
        featured: true,
        polished: true,
        isImg: true,
        popOverText: "This application allows the user to save frequently traveled destinations on their profile. It uses 4 different program interfaces from Google's Cloud Platform to provide real time information about road conditions and travel times from the users currently location automatically and all at once, allowing the user to decide if they are going to leave the office early, stop at the store on the way home or wait until traffic dies down. It also provides an hourly weather forecast for the commute. In a pinch, its also a handy way to convert your current GPS signal into a physical street address to provide directions to your current location to others."
    },
    {
        img: image11,
        num: 15,
        id: "portfolioItem",
        href: "https://blaney83.github.io/RPS-Multiplayer/",
        title: 'Multi-Player RPS',
        tech: 'G-Firebase',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "While lacking a polished UI and needing a bit of bug spray, this application utilizes the Google Firebase Real-Time Cloud database to connect one or more players for some cross-platform 1v1 Rock, Paper, Scissors."
    },
    {
        img: image12,
        num: 16,
        id: "portfolioItem",
        ref: "https://memory-tiles.herokuapp.com/",
        title: 'React Tiles',
        tech: 'React',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "React-based, memory-match with GIFs of any category. Good luck!"
    },
    {
        img: image13,
        num: 17,
        id: "portfolioItem",
        ref: "https://blaney83.github.io/Interactive-Giphy-Search/",
        title: 'Giphy Search',
        tech: 'AJAX',
        featured: true,
        polished: false,
        isImg: true,
        popOverText: "Simple, but polished. An interactive Gif search that is both mobile-responsive and dynamic. Create categories, view random GIFs, save your favorites and download them straight to your mobile device for seamless sharing."
    },
    {
        img: image14,
        num: 18,
        id: "portfolioItem",
        ref: "https://blaney83.github.io/TriviaGame/",
        title: 'Harry Potter Trivia',
        tech: 'Materialize, jQuery',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "This application provides a quick bit of fun in the form of a mobile-responsive HP trivia game."
    },
    {
        img: image15,
        num: 19,
        id: "portfolioItem",
        ref: "https://blaney83.github.io/Projects/jQuery_Game/index.html",
        title: 'Bees V. Wasp',
        tech: 'JS',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "Mobile-responsive math game that tests your memory and quick arithmetic."
    },
    {
        img: image16,
        num: 20,
        id: "portfolioItem",
        ref: "https://friendfinder5001.herokuapp.com/",
        title: 'Friend Finder',
        tech: 'Matching Algorithm',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "A simple application for remote-deployment practice. Runs a weighted, match-making algorithm thats pretty accurate."
    },
    {
        img: image17,
        num: 21,
        id: "portfolioItem",
        ref: "https://github.com/blaney83/playlist_manager",
        title: 'SQL Playlist',
        tech: 'SQL',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "CLI application using a simple SQL database to track, sort and search your favorite music."
    },
    {
        img: image18,
        num: 22,
        id: "portfolioItem",
        ref: "https://blaney83.github.io/Projects/Tic_Tac_Toe/index.html",
        title: 'Unbeatable T-T-T',
        tech: 'Mini-Max Algorithm',
        featured: true,
        polished: false,
        isImg: true,
        popOverText: "Quick fiddle lacking anything resembling a UI, but running a proof-of-concept, unbeatable, Mini-Max AI algorithm."
    },
    {
        img: image19,
        num: 23,
        id: "portfolioItem",
        ref: "https://blaney83.github.io/Projects/WordGuess/index.html",
        title: "Silicon Valley 'Bach'man",
        tech: 'JS',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "Early javaScript practice. Everybody's favorite Silicon Valley themed hangman."
    },
    {
        img: image20,
        num: 24,
        id: "portfolioItem",
        ref: "https://blaney83.github.io/Projects/Rock_Paper_Scissors/index.html",
        title: 'RPS Stats',
        tech: 'JS',
        featured: false,
        polished: false,
        isImg: true,
        popOverText: "One of my first applications. Great for button-mashing."
    },
    {
        img: image21,
        num: 25,
        id: "portfolioItem",
        ref: "https://github.com/blaney83?before=Y3Vyc29yOnYyOpK5MjAxOC0wOS0yOVQxNTowMDo1My0wNzowMM4I85n9&tab=repositories",
        title: 'More Coming Soon!',
        tech: 'Surprise',
        featured: true,
        polished: true,
        isImg: true,
        popOverText: "Reach out in the contact section to ask me what I'm working on right now."
    },
]


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        width: "100%",
        backgroundColor: "transparent",
        // padding: "3px"
    },
    gridList: {
        flexWrap: 'wrap',
        flexDirection: "column",
        maxHeight: "230px",
        [theme.breakpoints.up('sm')]: {
            maxHeight: "412px",
        },
        width: "100%",
        margin: "0 !important",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: "#ffffff",
        fontSize: ".7rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: ".8rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: ".9rem",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "1.4rem",
        },
    },
    subtitleGrid: {
        color: "#ffffff",
        fontSize: ".6rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: ".7rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: ".8rem",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: ".9rem",
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "1.2rem",
        },
    },
    titleBar: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        position: "absolute",
        bottom: "0px"

    },
    featuredImage: {
        height: "200px",
        width: "200px",
        [theme.breakpoints.up('sm')]: {
            height: "400px",
            width: "400px",
        },
        position: 'center',
        repeat: 'no-repeat',
        size: 'cover',
        // backgroundAttachment: 'fixed',
    },
    nonFeaturedImage: {
        height: "100px",
        width: "100px",
        [theme.breakpoints.up('sm')]: {
            height: "200px",
            width: "200px",
        },
        position: 'center',
        repeat: 'no-repeat',
        size: 'cover',
    },
    featuredGridListTile: {
        maxHeight: "200px",
        maxWidth: "200px",
        [theme.breakpoints.up('sm')]: {
            maxHeight: "400px",
            maxWidth: "400px",
        },
        padding: "0px",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    nonFeaturedGridListTile: {
        maxHeight: "100px",
        maxWidth: "100px",
        [theme.breakpoints.up('sm')]: {
            maxHeight: "200px",
            maxWidth: "200px",
        },
        padding: "0px",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    icon: {
        color: "white",
        padding: "0px",
        [theme.breakpoints.up('sm')]: {
            padding: "12px",
        },
    },
    infoIcon: {
        color: "white",
        position: "absolute",
        top: "8px",
        right: "8px",
        padding: "0px",
        [theme.breakpoints.up('sm')]: {
            padding: "12px",
        },
    },
    paper: {
        position: 'absolute',
        backgroundColor: "#0a0a0ae0",
        boxShadow: theme.shadows[5],
        // color: "white",
        outline: 'none',
        top: `${55}%`,
        left: `${55}%`,
        transform: `translate(-${55}%, -${55}%)`,
        width: "270px",
        padding: "15px 20px",
        [theme.breakpoints.up('sm')]: {
            width: "400px",
            padding: "25px",
        },
        [theme.breakpoints.up('md')]: {
            width: "600px",
            padding: "30px",
        },
        [theme.breakpoints.up('lg')]: {
            width: "700px",
        },
        [theme.breakpoints.up('xl')]: {
            width: "900px",
        },
        borderRadius: "5px"
    },
    modalText: {
        color: "white",
        fontSize: ".9rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "1.1rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "1.3rem",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "1.4rem",
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "1.8rem",
        },
    },
    modalTitle: {
        color: "white",
        fontSize: "1rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "1.2rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "1.4rem",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "1.5rem",
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "1.9rem",
        },
    },
});


function Portfolio(props) {
    const { classes } = props;

    function sortTheProject(sortMethod, tileData) {
        if (sortMethod === 0) {
            return (mapTheProjects(tileData))
        } else if (sortMethod === 1) {
            let artfulArray = tileData.filter(tile => tile.polished)
            return (mapTheProjects(artfulArray))
        } else if (sortMethod === 2) {
            let sloppyProjects = tileData.filter(tile => !tile.polished)
            return (mapTheProjects(sloppyProjects))
        }
    }

    function mapTheProjects(arrayOfArt) {
        return (arrayOfArt.map(tile => (
            <GridListTile key={tile.img} style={{ backgroundImage: "url('" + tile.img + "')" }} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1} className={tile.featured ? classes.featuredGridListTile : classes.nonFeaturedGridListTile}>
                {/* {chooseMedia(tile)} */}
                <IconButton
                    className={classes.infoIcon}
                    variant="contained"
                    onClick={() => props.setAnchorEl(tile.num, props.anchorEl)}
                >
                    <InfoIcon />
                </IconButton>
                <GridListTileBar
                    title={tile.title}
                    classes={{ title: classes.title, subtitle: classes.subtitleGrid }}
                    subtitle={<span className={classes.subtitleText}>
                        {tile.tech}
                    </span>}
                    actionIcon={
                        <a
                            // className={classes.listText} 
                            href={tile.ref} rel="noopener noreferrer" target="_blank">
                            <IconButton
                                className={classes.icon}
                                variant="contained"
                            // onClick={(e) => openPopover(e)}
                            >
                                <LinkIcon />
                            </IconButton>
                        </a>
                    }
                />
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={props.anchorEl === "modal" + tile.num}
                    onClose={() => props.setAnchorEl(tile.num, props.anchorEl)}
                >
                    <div className={classes.paper}>
                        <Typography variant="h6" className={classes.modalTitle}>{tile.title}<br/><br/></Typography>
                        <Typography variant="subtitle1" className={classes.modalText}>
                            {tile.popOverText}
                        </Typography>
                    </div>
                </Modal>
            </GridListTile>
        )))
    }

    return (
        <div className={classes.root} >
            <GridList spacing={1} className={classes.gridList} id="portfolioTarget">
                {sortTheProject(props.portfolioSort, tileData)}
            </GridList>
        </div>
    );
}

Portfolio.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
    const portMethods = {
        setAnchorEl(tileNum, currentAnchorEl) {
            if (currentAnchorEl === "modal" + tileNum) {
                dispatch(updateAnchor({
                    anchorEl: null,
                    // anchorMessage: null
                }))
            } else {
                dispatch(updateAnchor({
                    anchorEl: "modal" + tileNum,
                    // anchorMessage: anchorMessage
                }))
            }
        }
    }
    return (portMethods)
}

function mapStateToProps(state) {
    return { portfolioSort: state.portfolioSort.portfolioSort, anchorEl: state.portfolioReducer.anchorEl }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Portfolio));