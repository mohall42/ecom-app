import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { Drawer, Badge, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import '../CSS/Nav.css'
import cart from '../IMAGES/cart.svg'
import menu from '../IMAGES/menu.svg'




const useStyles = makeStyles({
    list: {
        width: 350
    }
});



function Nav(props) {


    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false
    });

    const toggleDrawer = open => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, right: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {["About", "Cart"].map((text) => (
                    <NavLink strict exact to={`/${text.toLowerCase()}`} key={text} style={{ textDecoration: 'none', color: 'black', fontFamily: "'Oswald', sansSerif" }}  >
                        <ListItem button >
                            <ListItemText primary={text} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    );



    return (

        <div className="body">
            <div className="logo">
                <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}><h2>ECOM</h2> </NavLink>

            </div>

            <ul className="items">


                <Badge className="classes.margin" badgeContent={props.cart.length} color="primary">
                    <NavLink strict exact to="/cart"><li><img className="/cart" src={cart} alt="cart" ></img></li></NavLink>

                </Badge>

                <li><img className="menu" onClick={toggleDrawer(true)} src={menu} alt="menu"></img></li>


            </ul>



            <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
                {sideList("right")}
            </Drawer>
        </div>

    )
}



const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}


export default connect(mapStateToProps)(Nav);

