import React from 'react';
import '../CSS/News.css';

export default class News extends React.Component{

    redirectToNews(website){
        window.location.href = website
    }

    render(){

        return(
            <div className='performersContainer'>
                <a className='performer positiveBox news' target="_blank" rel='noopener noreferrer' href={this.props.StockOneNewsURL} id='1'>
                    <div className='newsText'>
                        <div className='newsTitleBox'>
                            <h1 className='newsTitle'>{this.props.StockOneNewsTitle}</h1>
                        </div>
                        <div className='newsTitleBox'>
                            <h1 className='newsTitle'>{this.props.StockOneNewsPublisher}</h1>
                        </div>
                    </div>
                </a>

                <a className='performer positiveBox news' target="_blank" rel='noopener noreferrer' href={this.props.StockTwoNewsURL} id='2'>
                    <div className='newsText'>
                        <div className='newsTitleBox'>
                            <h1 className='newsTitle'>{this.props.StockTwoNewsTitle}</h1>
                        </div>
                        <div className='newsTitleBox'>
                            <h1 className='newsTitle'>{this.props.StockTwoNewsPublisher}</h1>
                        </div>
                    </div>
                </a>
                
                <a className='performer positiveBox news' target="_blank" rel='noopener noreferrer' href={this.props.StockThreeNewsURL} id='3'>
                    <div className='newsText'>
                        <div className='newsTitleBox'>
                            <h1 className='newsTitle'>{this.props.StockThreeNewsTitle}</h1>
                        </div>
                        <div className='newsTitleBox'>
                            <h1 className='newsTitle'>{this.props.StockThreeNewsPublisher}</h1>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}