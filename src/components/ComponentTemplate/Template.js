import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import injectSheet from 'react-jss'
import bgImage from "../../assets/img/page2BG.jpg"

const styles = {
    secondPage : {
        height: "100vh",
        width: "50vw",
        backgroundImage: "url('" + bgImage + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        zIndex: "1"
    }
}


function Page2(props) {
    const { classes } = props;

    return (
        <div className={classes.secondPage}>
            Hello Again!
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Page2))