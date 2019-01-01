import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/styles';
import Nav from "../../components/Nav/Nav.js"
import Landing from "../../components/Landing/Landing.js"
import Page1 from "../../components/Page1/Page1.js"
import Page2 from "../../components/Page2/Page2.js"
import Page3 from "../../components/Page3/Page3.js"
import Page4 from "../../components/Page4/Page4.js"
import Page5 from "../../components/Page5/Page5.js"
import "./globalStyle.css"

function Main(props) {
    // const {classes} = props
    let theme = createMuiTheme({
        palette: {
            // primary: "white",
            secondary: {
                main: '#fff',
            },
        }
    })

    // window.addEventListener("resize", ()=>{
        console.log(window)
    //     // if(window.innerWidth > 1000){
    //     //     if(window.confirm("This site is optimized for phones and tablets! Would you like me to optimize the view for you? If not, you can always do it yourself by adjusting the view on your browser.")){
    //     //         console.log(window)
    //     //     }
    //     // }
    // })

    return (
        <div className="Main">
            <MuiThemeProvider theme={theme}>
                <Nav />
                <Landing></Landing>
                <Page1></Page1>
                <Page2></Page2>
                <Page3></Page3>
                <Page4></Page4>
                <Page5></Page5>
            </MuiThemeProvider>
        </div>
    );

}

// Main.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// function mapDispatchToProps(dispatch) {

// }

// function mapStateToProps(state) {

// }

export default connect(null, null)(Main)
// export default Main
