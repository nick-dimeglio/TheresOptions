import React from 'react';
import '../CSS/Performers.css'

export default class Performers extends React.Component{

    /*For one reason or another, the hover effects did not apply here in CSS, 
    so I did it via JS. */

    hoverEffect = e => {
        e.currentTarget.className = "performerHover"
    }

    unhoverEffect = e => {
        e.currentTarget.className = "performer"
    }
    render(){
        return(
            <div className='performersContainer'>
                <div className='performer' id='1' onMouseOver={this.hoverEffect} onMouseLeave={this.unhoverEffect}>

                </div>

                <div className='performer' id='2' onMouseOver={this.hoverEffect} onMouseLeave={this.unhoverEffect}>

                </div>
                
                <div className='performer' id='3' onMouseOver={this.hoverEffect} onMouseLeave={this.unhoverEffect}>
    
                </div>
            </div>
        )
    }
}