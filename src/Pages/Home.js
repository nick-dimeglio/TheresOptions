import '../CSS/Home.css';
import React from 'react';
import Logo from '../Images/Logo.PNG';
import ComponentHandler from '../Components/ComponentHandler';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stockCategory: "technology",
            activeComponent:"performers"
        };
    }

    stockCategory = e =>{
        this.setState({stockCategory: e.target.value})
    }

    render(){
        /* Define styles for buttons based on which one is active */
        const newsStyle = this.state.activeComponent === 'news' ? 'homeContentButtonActive' : 'homeContentButton',
            performersStyle = this.state.activeComponent === 'performers' ? 'homeContentButtonActive' : 'homeContentButton',
            bigPlayersStyle = this.state.activeComponent === 'bigplayers' ? 'homeContentButtonActive' : 'homeContentButton';

      return(

      <div className='homeContainer'>
          <div className='homeHeader'>
            <img src={Logo} className='homeHeaderImage' alt="Website Logo"/>
          </div>

        <div className='homeSearchBarContainer'>
            <div className='homeSearchBar'>
                <select className='homeSelect' onChange={this.stockCategory}>
                    <option value="technology">Technology</option>
                    <option value="naturalGas">Natural Gas</option>
                </select>
            </div>
        </div>

        <div className='homeContentContainer'>
            <div className='homeContentButtonsContainer'>
                <button className={newsStyle} onClick={() =>{this.setState({activeComponent:'news'})}}>News</button>
                <button className={performersStyle} onClick={() =>{this.setState({activeComponent:'performers'})}}>Performers</button>
                <button className={bigPlayersStyle} onClick={() =>{this.setState({activeComponent:'bigplayers'})}}>Big Players</button>
            </div>
            {/* Sending active content state to the component handler in order to return the desired content*/}
            <div className='homeComponentContainer'>
                <ComponentHandler activeComponent={this.state.activeComponent} stockCategory={this.state.stockCategory}/>
            </div>
        </div>

      </div>
      )
    }
  }