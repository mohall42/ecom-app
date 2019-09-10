import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Items.css'
import Watch from '../IMAGES/Watch.png'
import Close from '../IMAGES/close.svg'
import ColorPicker from './ColorPicker'
import { Grid, Modal, withStyles, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core'


const styles = {
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',

    },
};


export class Items extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false,
            sizeValue: '',
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleOpen = () => {
        let cartVal = localStorage.getItem('cartValue');

        if (cartVal == 2) {
            console.log("The modal should open now")
            this.setState({ open: true })
        }

        this.props.updateCartVal();
    }


    handleClose = () => {
        this.setState({ open: false })
    }

    handleChange = (event) => {
        this.setState({ sizeValue: event.target.value});
    }

    render() {

        const { classes } = this.props;

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
                            <Grid item className="right-col-box">
                                <FormControl>

                                    <FormLabel component="legend">Size</FormLabel>
                                    <RadioGroup aria-label="gender" name="Watch Size" value={this.state.sizeValue} onChange={this.state.handleChange} >
                                        <FormControlLabel value={38} control={<Radio/>} label='38\" ' />
                                        <FormControlLabel value={42} control={<Radio/>} label='38\" ' />

                                    
                                    </RadioGroup>

                                </FormControl>





                            </Grid>
                            <Grid item className="right-col-box" >


                                <button className="addBtn" onClick={this.handleOpen}> <h2>Add to Cart</h2> </button>


                            </Grid>

                        </Grid>


                    </Grid>


                </div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    className={classes.modal}
                >

                    <div className="modal-item" >
                        <img onClick={this.handleClose} src={Close} alt="close" style={{ alignSelf: "flex-end" }} />
                        <h1 id='simple-modal-title'>Quite a few Items in your cart..</h1>

                        <Link to='/cart'><p>go to cart</p></Link>



                    </div>

                </Modal>

            </div>
        )
    }
}

export default withStyles(styles)(Items)
