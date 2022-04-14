import '../CSS/Home.css';
import React from 'react';
import Logo from '../Images/Logo.PNG';
import ComponentHandler from '../Components/ComponentHandler';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stockCategory: "technology",
            activeComponent:"performers",
            AAPLStockPrice: 0,
            AAPLDailyChange: 0,
            AAPLPositive: true,
            MSFTStockPrice: 0,
            MSFTDailyChange: 0,
            MSFTPositive: true,
            GOOGLStockPrice: 0,
            GOOGLDailyChange: 0,
            GOOGLPositive: true
        };
    }

    getData = () =>{
        // Define function grab data from API
        var xmlHttp = new XMLHttpRequest();

        //AAPL Data Parse
        const AAPLdataURL = 'https://api.polygon.io/v1/open-close/AAPL/2022-04-12?adjusted=true&apiKey=';
        xmlHttp.open( "GET", AAPLdataURL, false );
        xmlHttp.send( null );
        const AAPLdata = JSON.parse(xmlHttp.responseText);

        //Get Data from the parsed JSON such as percent change, if its positive, and what the current price is.
         //const AAPLdata = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "AAPL","volume": 26122646}')
        const AAPLDailyChange = (((AAPLdata.close - AAPLdata.open) / AAPLdata.open) * 100).toFixed(2);
        const AAPLPositive = AAPLDailyChange > 0 ? true : false;
        const AAPLPrice = AAPLdata.close;

        //repeat process for GOOGL and MSFT

        const GOOGLdataURL = 'https://api.polygon.io/v1/open-close/GOOGL/2022-04-12?adjusted=true&apiKey=';
        xmlHttp.open( "GET", GOOGLdataURL, false );
        xmlHttp.send( null );
        const GOOGLdata = JSON.parse(xmlHttp.responseText);
       // const GOOGLdatatest = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "AAPL","volume": 26122646}')
        const GOOGLDailyChange = (((GOOGLdata.close - GOOGLdata.open) / GOOGLdata.open) * 100).toFixed(2);
        const GOOGLPositive = GOOGLDailyChange > 0 ? true : false;
        const GOOGLPrice = GOOGLdata.close;

        const MSFTdataURL = 'https://api.polygon.io/v1/open-close/MSFT/2022-04-12?adjusted=true&apiKey=';
        xmlHttp.open( "GET", MSFTdataURL, false );
        xmlHttp.send( null );
        const MSFTdata = JSON.parse(xmlHttp.responseText);
     // const MSFTdatatest = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "AAPL","volume": 26122646}')
        const MSFTDailyChange = (((MSFTdata.close - MSFTdata.open) / MSFTdata.open) * 100).toFixed(2);
        const MSFTPositive = MSFTDailyChange > 0 ? true : false;
        const MSFTPrice = MSFTdata.close;

        //set all data to the state, which will be passed to child components/component handler
        this.setState({AAPLStockPrice: AAPLPrice, AAPLDailyChange: AAPLDailyChange, AAPLPositive: AAPLPositive, 
                       MSFTStockPrice: MSFTPrice, MSFTDailyChange: MSFTDailyChange, MSFTPositive: MSFTPositive, 
                       GOOGLStockPrice: GOOGLPrice, GOOGLDailyChange: GOOGLDailyChange, GOOGLPositive: GOOGLPositive});
    }

    //Set state of stock category based on what is selected by user
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
            <div>
                <button onClick={this.getData}>Get Data</button>
            </div>
            {/* Sending active content state to the component handler in order to return the desired content*/}
            <div className='homeComponentContainer'>
            <ComponentHandler activeComponent={this.state.activeComponent} stockCategory={this.state.stockCategory} 
                AAPLPrice={this.state.AAPLStockPrice} AAPLDailyChange={this.state.AAPLDailyChange} AAPLPositive = {this.state.AAPLPositive}
                MSFTPrice={this.state.MSFTStockPrice} MSFTDailyChange={this.state.MSFTDailyChange} MSFTPositive = {this.state.MSFTPositive}
                GOOGLPrice={this.state.GOOGLStockPrice} GOOGLDailyChange={this.state.GOOGLDailyChange} GOOGLPositive = {this.state.GOOGLPositive}
                />
            </div>
        </div>

      </div>
      )
    }
  }