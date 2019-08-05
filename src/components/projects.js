import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


//first package running 
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };


    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (

              
                <div className="projects-grid">
                    
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://www.cubettech.com/blog/wp-content/uploads/2017/07/REACTjs-cover.jpg) center / cover'
                        }}>React #1</CardTitle>
                        <CardText>
                            dsfdsfldés féfs ldsfdléf dsfédsf dséfd fdséf dsfé ddséfsd éfdsfé dsfd éfsdéf df édsfdé fdsé fds
                 </CardText>


                        <CardActions border>
                            <Button colored> Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="Share" />
                        </CardMenu>
                    </Card>
          

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://www.cubettech.com/blog/wp-content/uploads/2017/07/REACTjs-cover.jpg) center / cover'
                        }}>React #1</CardTitle>
                        <CardText>
                            dsfdsfldés féfs ldsfdléf dsfédsf dséfd fdséf dsfé ddséfsd éfdsfé dsfd éfsdéf df édsfdé fdsé fds
 </CardText>


                        <CardActions border>
                            <Button colored> Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="Share" />
                        </CardMenu>
                    </Card>
             

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://www.cubettech.com/blog/wp-content/uploads/2017/07/REACTjs-cover.jpg) center / cover'
                        }}>React #1</CardTitle>
                        <CardText>
                            dsfdsfldés féfs ldsfdléf dsfédsf dséfd fdséf dsfé ddséfsd éfdsfé dsfd éfsdéf df édsfdé fdsé fds
 </CardText>


                        <CardActions border>
                            <Button colored> Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="Share" />
                        </CardMenu>
                    </Card>

                </div>
            )

            
            

        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid-phyton">
                    
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                    <CardTitle style={{
                        color: '#fff', height: '176px', background:
                            'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/104345206/original/97d74d6b9fe2168a052ce2a554ab875115133a13/develop-a-chatbot-for-website-fb-telegram-and-wordpress.png) center / cover'
                    }}>React #1</CardTitle>
                    <CardText>
                      Developement d'un tchatbot en python, ce tchatbot avait pour but de rennseigner les utilisateurs sur les différents arrets de bus disponible au alentour.
                      de plus, il pouvait donner des informations sur les meilleurs restaurants et activités de la ville 
             </CardText>


                    <CardActions border>
                        <Button colored> Github</Button>

                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="Share" />
                    </CardMenu>
                </Card>
            </div>
        
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div> <h1>HTML AND CSS  </h1> </div>
            )

        }
    }

    /*tableau importer */
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} riple>
                    <Tab> React </Tab>
                    <Tab> Phython </Tab>
                    <Tab>HTML And CSS </Tab>

                </Tabs>

             
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>

                        </Cell>
                    </Grid>

            
            </div >
        )
    }
}
export default Projects;