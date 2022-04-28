import React from 'react';
import '../CSS/Performers.css'

export default class Performers extends React.Component{


    render(){
        const StockOneColor = this.props.StockOnePositive ? 'positive' : 'negative';
        const StockOneBox = this.props.StockOnePositive ? 'performer positiveBox' : 'performer negativeBox';
        const StockTwoColor = this.props.StockTwoPositive ? 'positive' : 'negative';
        const StockTwoBox = this.props.StockTwoPositive ? 'performer positiveBox' : 'performer negativeBox';
        const StockThreeColor = this.props.StockThreePositive ? 'positive' : 'negative';
        const StockThreeBox = this.props.StockThreePositive ? 'performer positiveBox' : 'performer negativeBox';
        return(
            <div className='performersContainer'>
                <div className={StockOneBox} id='1' onMouseOver={this.hoverEffect} onMouseLeave={this.unhoverEffect}>
                    <div className='performerText'>
                        <h1 className={StockOneColor}>{this.props.StockOneName}</h1>
                        <h1  className={StockOneColor}>${this.props.StockOnePrice}</h1>
                        <h1  className={StockOneColor}>{this.props.StockOneDailyChange}%</h1>
                    </div>
                </div>

                <div className={StockThreeBox} id='2' onMouseOver={this.hoverEffect} onMouseLeave={this.unhoverEffect}>
                    <div className='performerText'>
                        <h1 className={StockThreeColor}>{this.props.StockThreeName}</h1>
                        <h1  className={StockThreeColor}>${this.props.StockThreePrice}</h1>
                        <h1  className={StockThreeColor}>{this.props.StockThreeDailyChange}%</h1>
                    </div>
                </div>
                
                <div className={StockTwoBox} id='3' onMouseOver={this.hoverEffect} onMouseLeave={this.unhoverEffect}>
                    <div className='performerText'>
                        <h1 className={StockTwoColor}>{this.props.StockTwoName}</h1>
                        <h1  className={StockTwoColor}>${this.props.StockTwoPrice}</h1>
                        <h1  className={StockTwoColor}>{this.props.StockTwoDailyChange}%</h1>
                    </div>
                </div>
            </div>
        )
    }
}