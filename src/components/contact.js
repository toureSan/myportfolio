import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import maka_picture from '../maka_picture.jpg'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}><h2>Maka Toure</h2>
                        <img style={{ marginBottom: '100px' }} src={maka_picture}
                            alt="monAvatar"
                        />
                        <p style={{ marginTop: '-75px' }}>Je m’appelle Maka Toure étudiant passionné par le web et les nouvelles technologies, je suis quelqu’un qui aime les chalenges. Dans le cadre de ma formation de Bachelor je recherche un stage pour approfondir mes compétences. Je transforme les calques Photoshop en site web et application ergonomique, de plus je suis à l’aise avec le CMS(système de gestion) Wordpress . En dehors des cours habituel j’essaie de me former constament pour répondre aux nouvelles demandes du marché.
</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contactez-moi</h2>

                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;