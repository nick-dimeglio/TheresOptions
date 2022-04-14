import React from 'react';
import '../CSS/Performers.css'

export default class Performers extends React.Component{


    render(){
        const AAPLColor = this.props.AAPLPositive ? 'positive' : 'negative';
        const AAPLBox = this.props.AAPLPositive ? 'performer positiveBox' : 'performer negativeBox';
        const MSFTColor = this.props.MSFTPositive ? 'positive' : 'negative';
        const MSFTBox = this.props.MSFTPositive ? 'performer positiveBox' : 'performer negativeBox';
        const GOOGLColor = this.props.GOOGLPositive ? 'positive' : 'negative';
        const GOOGLBox = this.props.GOOGLPositive ? 'performer positiveBox' : 'performer negativeBox';
        return(
            <div className='performersContainer'>
                <div className={AAPLBox} id='1' onMouseOver={this.hoverEffect} onMouseLeave={this.unhoverEffect}>
                    <div className='performerText'>
                        <h1 className={AAPLColor}>AAPL</h1>
                        <h1  className={AAPLColor}>${this.props.AAPLPrice}</h1>
                        <h1  className={AAPLColor}>{this.props.AAPLDailyChange}%</h1>
                    </div>
                </div>

                <div className={GOOGLBox} id='2' onMouseOver={this.hoverEffect} onMouseLeave={this.unhoverEffect}>
                    <div className='performerText'>
                        <h1 className={GOOGLColor}>GOOGL</h1>
                        <h1  className={GOOGLColor}>${this.props.GOOGLPrice}</h1>
                        <h1  className={GOOGLColor}>{this.props.GOOGLDailyChange}%</h1>
                    </div>
                </div>
                
                <div className={MSFTBox} id='3' onMouseOver={this.hoverEffect} onMouseLeave={this.unhoverEffect}>
                    <div className='performerText'>
                        <h1 className={MSFTColor}>MSFT</h1>
                        <h1  className={MSFTColor}>${this.props.MSFTPrice}</h1>
                        <h1  className={MSFTColor}>{this.props.MSFTDailyChange}%</h1>
                    </div>
                </div>
            </div>
        )
    }
}