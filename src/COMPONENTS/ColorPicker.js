import React, { Component } from 'react'
import '../CSS/ColorPicker.css'

export class ColorPicker extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [{ key: "white", value: "#FFFFFF" },
            { key: "purple", value: "#A315E5" },
            { key: " blue", value: "#0500FF" },
            { key: "red", value: "#C51F1F" },
            { key: "black", value: "#000000" }],

        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {


        console.log("Color clicked", e.target.id)
    }

    render() {

        return (

            <div className="colors">
                {this.state.colors.map((item) => {

                    return (

                        <div onClick={this.handleClick} id={`${item.key}`} className="color-box" key={`${item.key}`} style={{ "backgroundColor": `${item.value}` }}></div>
                    )

                })}
            </div>

        )
    }
}

export default ColorPicker
