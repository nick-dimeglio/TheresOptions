import '../CSS/Home.css';
import React from 'react';
import Logo from '../Images/Logo.PNG';
import ComponentHandler from '../Components/ComponentHandler';
const {api_key} = require('../API/api');

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stockCategory: "technology",
            activeComponent:"performers",
            StockOneStockPrice: 0,
            StockOneDailyChange: 0,
            StockOnePositive: true,
            StockOneNewsTitle: '',
            StockOneNewsURL: '',
            StockOneNewsPublisher: '',
            StockOneName: 'AAPL',
            StockTwoStockPrice: 0,
            StockTwoDailyChange: 0,
            StockTwoPositive: true,
            StockTwoNewsTitle: '',
            StockTwoNewsURL: '',
            StockTwoNewsPublisher: '',
            StockTwoName: 'MSFT',
            StockThreeStockPrice: 0,
            StockThreeDailyChange: 0,
            StockThreePositive: true,
            StockThreeNewsTitle: '',
            StockThreeNewsURL: '',
            StockThreeNewsPublisher: '',
            StockThreeName: 'GOOGL'
        };
    }

    //just using static date and tickers for now to keep things simple for testing
    getData = () =>{
        // Define function grab data from API
        var xmlHttp = new XMLHttpRequest();

        if(this.state.stockCategory === "technology"){
            //StockOne Data Parse
            const StockOnedataURL = 'https://api.polygon.io/v1/open-close/AAPL/2022-04-12?adjusted=true&apiKey=' + api_key;
            xmlHttp.open( "GET", StockOnedataURL, false );
            xmlHttp.send( null );
            const StockOnedata = JSON.parse(xmlHttp.responseText);

            //Get Data from the parsed JSON such as percent change, if its positive, and what the current price is.
            //const StockOnedata = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "StockOne","volume": 26122646}')
            const StockOneDailyChange = (((StockOnedata.close - StockOnedata.open) / StockOnedata.open) * 100).toFixed(2);
            const StockOnePositive = StockOneDailyChange > 0 ? true : false;
            const StockOnePrice = StockOnedata.close;
            const StockOneName = StockOnedata.symbol;

            //repeat process for StockThree and StockTwo

            const StockThreedataURL = 'https://api.polygon.io/v1/open-close/GOOGL/2022-04-12?adjusted=true&apiKey=' + api_key;
            xmlHttp.open( "GET", StockThreedataURL, false );
            xmlHttp.send( null );
            const StockThreedata = JSON.parse(xmlHttp.responseText);
        // const StockThreedatatest = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "StockOne","volume": 26122646}')
            const StockThreeDailyChange = (((StockThreedata.close - StockThreedata.open) / StockThreedata.open) * 100).toFixed(2);
            const StockThreePositive = StockThreeDailyChange > 0 ? true : false;
            const StockThreePrice = StockThreedata.close;
            const StockThreeName = StockThreedata.symbol;

            const StockTwodataURL = 'https://api.polygon.io/v1/open-close/MSFT/2022-04-12?adjusted=true&apiKey=' + api_key;
            xmlHttp.open( "GET", StockTwodataURL, false );
            xmlHttp.send( null );
            const StockTwodata = JSON.parse(xmlHttp.responseText);
        // const StockTwodatatest = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "StockOne","volume": 26122646}')
            const StockTwoDailyChange = (((StockTwodata.close - StockTwodata.open) / StockTwodata.open) * 100).toFixed(2);
            const StockTwoPositive = StockTwoDailyChange > 0 ? true : false;
            const StockTwoPrice = StockTwodata.close;
            const StockTwoName = StockTwodata.symbol;

            //set all data to the state, which will be passed to child components/component handler
            this.setState({StockOneStockPrice: StockOnePrice, StockOneDailyChange: StockOneDailyChange, StockOnePositive: StockOnePositive, StockOneName: StockOneName, 
                        StockTwoStockPrice: StockTwoPrice, StockTwoDailyChange: StockTwoDailyChange, StockTwoPositive: StockTwoPositive,  StockTwoName: StockTwoName,
                        StockThreeStockPrice: StockThreePrice, StockThreeDailyChange: StockThreeDailyChange, StockThreePositive: StockThreePositive, StockThreeName: StockThreeName});
        }
        else{
            const StockOnedataURL = 'https://api.polygon.io/v1/open-close/SWN/2022-04-12?adjusted=true&apiKey=' + api_key;
            xmlHttp.open( "GET", StockOnedataURL, false );
            xmlHttp.send( null );
            const StockOnedata = JSON.parse(xmlHttp.responseText);

            //Get Data from the parsed JSON such as percent change, if its positive, and what the current price is.
            //const StockOnedata = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "StockOne","volume": 26122646}')
            const StockOneDailyChange = (((StockOnedata.close - StockOnedata.open) / StockOnedata.open) * 100).toFixed(2);
            const StockOnePositive = StockOneDailyChange > 0 ? true : false;
            const StockOnePrice = StockOnedata.close;
            const StockOneName = StockOnedata.symbol;

            //repeat process for StockThree and StockTwo

            const StockThreedataURL = 'https://api.polygon.io/v1/open-close/XOM/2022-04-12?adjusted=true&apiKey=' + api_key;
            xmlHttp.open( "GET", StockThreedataURL, false );
            xmlHttp.send( null );
            const StockThreedata = JSON.parse(xmlHttp.responseText);
        // const StockThreedatatest = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "StockOne","volume": 26122646}')
            const StockThreeDailyChange = (((StockThreedata.close - StockThreedata.open) / StockThreedata.open) * 100).toFixed(2);
            const StockThreePositive = StockThreeDailyChange > 0 ? true : false;
            const StockThreePrice = StockThreedata.close;
            const StockThreeName = StockThreedata.symbol;

            const StockTwodataURL = 'https://api.polygon.io/v1/open-close/TRMD/2022-04-12?adjusted=true&apiKey=' + api_key;
            xmlHttp.open( "GET", StockTwodataURL, false );
            xmlHttp.send( null );
            const StockTwodata = JSON.parse(xmlHttp.responseText);
        // const StockTwodatatest = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "StockOne","volume": 26122646}')
            const StockTwoDailyChange = (((StockTwodata.close - StockTwodata.open) / StockTwodata.open) * 100).toFixed(2);
            const StockTwoPositive = StockTwoDailyChange > 0 ? true : false;
            const StockTwoPrice = StockTwodata.close;
            const StockTwoName = StockTwodata.symbol;

            //set all data to the state, which will be passed to child components/component handler
            this.setState({StockOneStockPrice: StockOnePrice, StockOneDailyChange: StockOneDailyChange, StockOnePositive: StockOnePositive, StockOneName: StockOneName, 
                        StockTwoStockPrice: StockTwoPrice, StockTwoDailyChange: StockTwoDailyChange, StockTwoPositive: StockTwoPositive,  StockTwoName: StockTwoName,
                        StockThreeStockPrice: StockThreePrice, StockThreeDailyChange: StockThreeDailyChange, StockThreePositive: StockThreePositive, StockThreeName: StockThreeName});
        }
    }

    getNews = () =>{
        // Define function grab data from API
        var xmlHttp = new XMLHttpRequest();

        //StockOne Data Parse
        const StockOnedataURL = 'https://api.polygon.io/v2/reference/news?ticker=' + this.state.StockOneName + '&limit=1&apiKey=' + api_key;
        xmlHttp.open( "GET", StockOnedataURL, false );
        xmlHttp.send( null );
        const StockOnedata = JSON.parse(xmlHttp.responseText);

        //Get Data from the parsed JSON such as news title and URL.
        // const StockOnedata = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "StockOne","volume": 26122646}')
         const StockOneNewsTitle = StockOnedata.results[0].title
         const StockOneNewsURL = StockOnedata.results[0].article_url
         const StockOneNewsPublisher = StockOnedata.results[0].publisher.name


        //repeat process for StockThree and StockTwo

        const StockTwodataURL = 'https://api.polygon.io/v2/reference/news?ticker=' + this.state.StockOneName + '&limit=3&apiKey=' + api_key;
        xmlHttp.open( "GET", StockTwodataURL, false );
        xmlHttp.send( null );
        const StockTwodata = JSON.parse(xmlHttp.responseText);
        //const StockTwodata = JSON.parse('{"results":[{"id":"GORFZcRxxAuPK5cw8hab0WdYpWrQnJ9YN513SXDdoWI","publisher":{"name":"MarketWatch","homepage_url":"https://www.marketwatch.com/","logo_url":"https://s3.polygon.io/public/assets/news/logos/marketwatch.svg","favicon_url":"https://s3.polygon.io/public/assets/news/favicons/marketwatch.ico"},"title":"How much is Twitter worth? Elon Musk isn\'t the only one who could buy Twitter","author":"MarketWatch","published_utc":"2022-04-18T17:07:00Z","article_url":"https://www.marketwatch.com/story/if-musks-43-billion-twitter-deals-falls-apart-who-else-has-enough-money-to-buy-the-company-11649957650","tickers":["TWTR","AMZN","NKE","StockTwo","ORCL","GOOG","StockThree","CRM"],"amp_url":"https://www.marketwatch.com/amp/story/if-musks-43-billion-twitter-deals-falls-apart-who-else-has-enough-money-to-buy-the-company-11649957650","image_url":"https://images.mktw.net/im-517731/social","description":"Not many people have, or can secure, the funds required to acquire Twitter."}],"status":"OK","request_id":"6244469cc0ca27ce0ba49b0061978364","count":1,"next_url":"https://api.polygon.io/v2/reference/news?cursor=YXA9MjAyMi0wNC0xOFQxNyUzQTA3JTNBMDBaJmFzPUdPUkZaY1J4eEF1UEs1Y3c4aGFiMFdkWXBXclFuSjlZTjUxM1NYRGRvV0kmbGltaXQ9MSZvcmRlcj1kZXNjZW5kaW5nJnRpY2tlcj1NU0ZU"}');
        var StockTwoNewsTitle = StockTwodata.results[0].title
        var StockTwoNewsURL = StockTwodata.results[0].article_url
        var StockTwoNewsPublisher = StockTwodata.results[0].publisher.name
        //Check if the news is the same as the prior news title, if it is, then change it to the next one in the array as long as it exists.
        if (StockTwoNewsTitle == StockOneNewsTitle && StockTwodata.results[1].title != null){
            StockTwoNewsTitle = StockTwodata.results[1].title
            StockTwoNewsURL = StockTwodata.results[1].article_url
            StockTwoNewsPublisher = StockTwodata.results[1].publisher.name
        }


        const StockThreedataURL = 'https://api.polygon.io/v2/reference/news?ticker=' + this.state.StockOneName + '&limit=3&apiKey=' + api_key;
        xmlHttp.open( "GET", StockThreedataURL, false );
        xmlHttp.send( null );
        const StockThreedata = JSON.parse(xmlHttp.responseText);
        console.log(StockThreedata)
        //const StockThreedata = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "StockOne","volume": 26122646}')
        var StockThreeNewsTitle = StockThreedata.results[0].title
        var StockThreeNewsURL = StockThreedata.results[0].article_url
        console.log(StockThreeNewsTitle)
        var StockThreeNewsPublisher = StockThreedata.results[0].publisher.name

        //Check if the news is the same as the prior news titles, if it is, then change it to the next one in the array as long as it exists.
        if (StockThreeNewsTitle == StockOneNewsTitle && StockThreedata.results[1].title != null){
            StockThreeNewsTitle = StockThreedata.results[1].title
            StockThreeNewsURL = StockThreedata.results[1].article_url
            console.log(StockThreeNewsTitle)
            StockThreeNewsPublisher = StockThreedata.results[1].publisher.name
        }
        if (StockThreeNewsTitle == StockTwoNewsTitle && StockThreedata.results[2].title != null){
            StockThreeNewsTitle = StockThreedata.results[2].title
            StockThreeNewsURL = StockThreedata.results[2].article_url
            console.log(StockThreeNewsTitle)
            StockThreeNewsPublisher = StockThreedata.results[2].publisher.name
        }
    

        //set all data to the state, which will be passed to child components/component handler
        this.setState({StockOneNewsTitle: StockOneNewsTitle, StockOneNewsURL: StockOneNewsURL, StockOneNewsPublisher: StockOneNewsPublisher,
                       StockThreeNewsTitle: StockThreeNewsTitle, StockThreeNewsURL: StockThreeNewsURL, StockThreeNewsPublisher: StockThreeNewsPublisher,
                       StockTwoNewsTitle: StockTwoNewsTitle, StockTwoNewsURL: StockTwoNewsURL, StockTwoNewsPublisher: StockTwoNewsPublisher});
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
                {/* not utilizing this yet <button className={bigPlayersStyle} onClick={() =>{this.setState({activeComponent:'bigplayers'})}}>Individual</button> */}
            </div>
            <div>
                <button onClick={this.getData}>Get Stock Data</button>
                <button onClick={this.getNews}>Get News</button>
            </div>
            {/* Sending active content state to the component handler in order to return the desired content*/}
            <div className='homeComponentContainer'>
            <ComponentHandler activeComponent={this.state.activeComponent} stockCategory={this.state.stockCategory} 
                StockOnePrice={this.state.StockOneStockPrice} StockOneDailyChange={this.state.StockOneDailyChange} StockOnePositive = {this.state.StockOnePositive} StockOneNewsTitle={this.state.StockOneNewsTitle} StockOneNewsURL={this.state.StockOneNewsURL} StockOneNewsPublisher={this.state.StockOneNewsPublisher} StockOneName = {this.state.StockOneName}
                StockTwoPrice={this.state.StockTwoStockPrice} StockTwoDailyChange={this.state.StockTwoDailyChange} StockTwoPositive = {this.state.StockTwoPositive} StockTwoNewsTitle={this.state.StockTwoNewsTitle} StockTwoNewsURL={this.state.StockTwoNewsURL} StockTwoNewsPublisher={this.state.StockTwoNewsPublisher} StockTwoName = {this.state.StockTwoName}
                StockThreePrice={this.state.StockThreeStockPrice} StockThreeDailyChange={this.state.StockThreeDailyChange} StockThreePositive = {this.state.StockThreePositive} StockThreeNewsTitle={this.state.StockThreeNewsTitle} StockThreeNewsURL={this.state.StockThreeNewsURL} StockThreeNewsPublisher={this.state.StockThreeNewsPublisher} StockThreeName = {this.state.StockThreeName}
                />
            </div>
        </div>

      </div>
      )
    }
  }