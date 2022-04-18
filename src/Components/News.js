import React from 'react';
import '../CSS/News.css';

export default class News extends React.Component{

    redirectToNews(website){
        window.location.href = website
    }

    render(){

        return(
            <div className='performersContainer'>
                <a className='performer positiveBox news' target="_blank" rel='noopener noreferrer' href={this.props.AAPLNewsURL} id='1'>
                    <div className='newsText'>
                        <div className='newsTitleBox'>
                            <h1 className='newsTitle'>{this.props.AAPLNewsTitle}</h1>
                        </div>
                        <div className='newsTitleBox'>
                            <h1 className='newsTitle'>{this.props.AAPLNewsPublisher}</h1>
                        </div>
                    </div>
                </a>

                <a className='performer positiveBox news' target="_blank" rel='noopener noreferrer' href={this.props.MSFTNewsURL} id='2'>
                    <div className='newsText'>
                        <div className='newsTitleBox'>
                            <h1 className='newsTitle'>{this.props.MSFTNewsTitle}</h1>
                        </div>
                        <div className='newsTitleBox'>
                            <h1 className='newsTitle'>{this.props.MSFTNewsPublisher}</h1>
                        </div>
                    </div>
                </a>
                
                <a className='performer positiveBox news' target="_blank" rel='noopener noreferrer' href={this.props.GOOGLNewsURL} id='3'>
                    <div className='newsText'>
                        <div className='newsTitleBox'>
                            <h1 className='newsTitle'>{this.props.GOOGLNewsTitle}</h1>
                        </div>
                        <div className='newsTitleBox'>
                            <h1 className='newsTitle'>{this.props.GOOGLNewsPublisher}</h1>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}