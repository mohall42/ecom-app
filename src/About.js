import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import './CSS/About.css'
import Nav from './COMPONENTS/Nav'
import Footer from './COMPONENTS/Footer'


export class About extends Component {
    render() {
        return (
            <div>
                <Nav />

                <Container fixed maxWidth="xl" className="about-container">
                    <div className="learn-more aboutItem">
                        <h1>Learn More</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Sunt minima commodi ut aperiam at iusto accusamus veniam officia,
                        animi distinctio libero omnis sed quod tenetur amet quis non pariatur quasi!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores amet veritatis expedita eos blanditiis,
                        maxime doloremque minima odit consequuntur sequi.
                        Sit, placeat ut? Nihil maiores ad eligendi autem commodi alias.</p>
                    </div>

                    <div className="our-mission aboutItem">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Sunt minima commodi ut aperiam at iusto accusamus veniam officia,
                        animi distinctio libero omnis sed quod tenetur amet quis non pariatur quasi!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores amet veritatis expedita eos blanditiis,
                        maxime doloremque minima odit consequuntur sequi.
                        Sit, placeat ut? Nihil maiores ad eligendi autem commodi alias.</p>
                    </div>



                </Container>

                <Footer />

            </div>
        )
    }
}

export default About
