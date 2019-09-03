import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Badge from '@material-ui/core/Badge'
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem'
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from '@material-ui/core/styles'
import '../CSS/Nav.css'
import cart from '../IMAGES/cart.svg'
import menu from '../IMAGES/menu.svg'



const useStyles = makeStyles({
    list: {
        width: 350
    }
});


export default function Nav(props) {


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
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const { cartItems } = props;

    return (

        <div className="body">
            <div className="logo">
                <h2>ECOM</h2>
            </div>

            <ul className="items">


                <Badge className="classes.margin" badgeContent={cartItems} color="primary">

                    <li><img className="cart" src={cart} alt="cart" ></img></li>

                </Badge>

                <li><img className="menu" onClick={toggleDrawer(true)} src={menu} alt="menu"></img></li>


            </ul>



            <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
                {sideList("right")}
            </Drawer>
        </div>

    )

}


