import React from 'react';
import News from './News';
import BigPlayers from './BigPlayers';
import Performers from './Performers';

export default class ComponentHandler extends React.Component{
    render(){
        if(this.props.activeComponent === "news"){
            return(
                <News AAPLNewsTitle = {this.props.AAPLNewsTitle} AAPLNewsURL= {this.props.AAPLNewsURL} AAPLNewsPublisher = {this.props.AAPLNewsPublisher}
                      MSFTNewsTitle = {this.props.MSFTNewsTitle} MSFTNewsURL= {this.props.MSFTNewsURL} MSFTNewsPublisher = {this.props.MSFTNewsPublisher}
                      GOOGLNewsTitle = {this.props.GOOGLNewsTitle} GOOGLNewsURL= {this.props.GOOGLNewsURL} GOOGLNewsPublisher = {this.props.GOOGLNewsPublisher}
                />
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