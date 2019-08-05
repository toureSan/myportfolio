import React, { Component } from 'react'; //importation du component react
import { Grid, Cell } from 'react-mdl'; //importation de Grid, cell et tout les components necessaires
import maka_picture from '../maka_picture.jpg'// import de l'image 

class Landing extends Component {//creation d'un component landing page
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell style={{ marginTop: '55px' }} col={12}>
                        <img src={maka_picture} 
                            alt="monAvatarLandingPage"
                        />
                        <div className="banner-text"> {/*creation de la banière*/}
                            <h1> Developper Web et Application  </h1>
                            <hr />
                            <p>HTML/CSS | Boostrap | Javascript | React & React-native | Language C | SQL | Phyton | Oracle </p>
                            {/* LInkedin*/}
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/toure-maka/ " rel="noopener noreferrer " target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github*/}
                                <a href="http://google.com " rel="noopener noreferrer " target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                            <p style={{fontSize:"12px"}}>Developpé avec la technologie React</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;