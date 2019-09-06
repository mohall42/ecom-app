import React, { Component } from 'react'
import moduleName from 'module'
import Nav from './COMPONENTS/Nav'
import Footer from './COMPONENTS/Footer'


export class Learn extends Component {
    render() {
        return (
            <div>
                <Nav />

                <div className="about-container">

                    <h1>About section here</h1>

                </div>

                <Footer />

            </div>
        )
    }
}

export default Learn
