import React, { Component } from 'react'
import '../CSS/Items.css'
import Watch from '../IMAGES/Watch.png'
import ColorPicker from './ColorPicker'
import { Grid } from '@material-ui/core'




export class Items extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <div>



                <div className="left-col-box">
                    <h1>FIND YOUR STYLE</h1>
                </div>
                <div className="item-container">



                    <Grid container spacing={3}>


                        <Grid item align="center" lg={7}>
                            <img src={Watch} alt="watch" />
                        </Grid>

                        <Grid item lg={5}>


                            <Grid item className="right-col-box" >
                                <ColorPicker />

                            </Grid>
                            <Grid item className="right-col-box" >

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Vero id reprehenderit soluta culpa,
                                fugiat cupiditate sunt veniam eius recusandae doloremque!
                                Incidunt ducimus esse aliquam repellat magnam nostrum,
                                        culpa rerum suscipit!</p>


                            </Grid>
                            <Grid item className="right-col-box" >


                                <button className="addBtn"> <h2>Add to Cart</h2> </button>


                            </Grid>

                        </Grid>


                    </Grid>


                </div>
            </div>
        )
    }
}

export default Items
