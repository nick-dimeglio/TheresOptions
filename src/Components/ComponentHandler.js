import React from 'react';
import News from './News';
import BigPlayers from './BigPlayers';
import Performers from './Performers';

export default class ComponentHandler extends React.Component{
    render(){
        if(this.props.activeComponent == "news"){
            return(
                <News/>
            )
        }
        else if(this.props.activeComponent == 'bigplayers'){
            return(
                <BigPlayers/>
            )
        }
        else{
            return(
                <Performers/>
            )
        }
    }
}