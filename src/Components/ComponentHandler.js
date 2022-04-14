import React from 'react';
import News from './News';
import BigPlayers from './BigPlayers';
import Performers from './Performers';

export default class ComponentHandler extends React.Component{
    render(){
        if(this.props.activeComponent === "news"){
            return(
                <News/>
            )
        }
        else if(this.props.activeComponent === 'bigplayers'){
            return(
                <BigPlayers/>
            )
        }
        else{
            return(
                <Performers AAPLPrice={this.props.AAPLPrice} AAPLDailyChange = {this.props.AAPLDailyChange} AAPLPositive = {this.props.AAPLPositive}
                            MSFTPrice={this.props.MSFTPrice} MSFTDailyChange = {this.props.MSFTDailyChange} MSFTPositive = {this.props.MSFTPositive}
                            GOOGLPrice={this.props.GOOGLPrice} GOOGLDailyChange = {this.props.GOOGLDailyChange} GOOGLPositive = {this.props.GOOGLPositive}
                            />
            )
        }
    }
}