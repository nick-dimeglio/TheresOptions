import React from 'react';
import News from './News';
import BigPlayers from './BigPlayers';
import Performers from './Performers';

export default class ComponentHandler extends React.Component{
    render(){
        if(this.props.activeComponent === "news"){
            return(
                <News StockOneNewsTitle = {this.props.StockOneNewsTitle} StockOneNewsURL= {this.props.StockOneNewsURL} StockOneNewsPublisher = {this.props.StockOneNewsPublisher}
                      StockTwoNewsTitle = {this.props.StockTwoNewsTitle} StockTwoNewsURL= {this.props.StockTwoNewsURL} StockTwoNewsPublisher = {this.props.StockTwoNewsPublisher}
                      StockThreeNewsTitle = {this.props.StockThreeNewsTitle} StockThreeNewsURL= {this.props.StockThreeNewsURL} StockThreeNewsPublisher = {this.props.StockThreeNewsPublisher}
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
                <Performers StockOnePrice={this.props.StockOnePrice} StockOneDailyChange = {this.props.StockOneDailyChange} StockOnePositive = {this.props.StockOnePositive} StockOneName = {this.props.StockOneName}
                            StockTwoPrice={this.props.StockTwoPrice} StockTwoDailyChange = {this.props.StockTwoDailyChange} StockTwoPositive = {this.props.StockTwoPositive} StockTwoName = {this.props.StockTwoName}
                            StockThreePrice={this.props.StockThreePrice} StockThreeDailyChange = {this.props.StockThreeDailyChange} StockThreePositive = {this.props.StockThreePositive} StockThreeName = {this.props.StockThreeName}
                            />
            )
        }
    }
}