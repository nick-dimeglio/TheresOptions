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
            AAPLStockPrice: 0,
            AAPLDailyChange: 0,
            AAPLPositive: true,
            AAPLNewsTitle: '',
            AAPLNewsURL: '',
            AAPLNewsPublisher: '',
            MSFTStockPrice: 0,
            MSFTDailyChange: 0,
            MSFTPositive: true,
            MSFTNewsTitle: '',
            MSFTNewsURL: '',
            MSFTNewsPublisher: '',
            GOOGLStockPrice: 0,
            GOOGLDailyChange: 0,
            GOOGLPositive: true,
            GOOGLNewsTitle: '',
            GOOGLNewsURL: '',
            GOOGLNewsPublisher: ''
        };
    }

    getData = () =>{
        // Define function grab data from API
        var xmlHttp = new XMLHttpRequest();

        //AAPL Data Parse
        const AAPLdataURL = 'https://api.polygon.io/v1/open-close/AAPL/2022-04-12?adjusted=true&apiKey=' + api_key;
        xmlHttp.open( "GET", AAPLdataURL, false );
        xmlHttp.send( null );
        const AAPLdata = JSON.parse(xmlHttp.responseText);

        //Get Data from the parsed JSON such as percent change, if its positive, and what the current price is.
         //const AAPLdata = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "AAPL","volume": 26122646}')
        const AAPLDailyChange = (((AAPLdata.close - AAPLdata.open) / AAPLdata.open) * 100).toFixed(2);
        const AAPLPositive = AAPLDailyChange > 0 ? true : false;
        const AAPLPrice = AAPLdata.close;

        //repeat process for GOOGL and MSFT

        const GOOGLdataURL = 'https://api.polygon.io/v1/open-close/GOOGL/2022-04-12?adjusted=true&apiKey=' + api_key;
        xmlHttp.open( "GET", GOOGLdataURL, false );
        xmlHttp.send( null );
        const GOOGLdata = JSON.parse(xmlHttp.responseText);
       // const GOOGLdatatest = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "AAPL","volume": 26122646}')
        const GOOGLDailyChange = (((GOOGLdata.close - GOOGLdata.open) / GOOGLdata.open) * 100).toFixed(2);
        const GOOGLPositive = GOOGLDailyChange > 0 ? true : false;
        const GOOGLPrice = GOOGLdata.close;

        const MSFTdataURL = 'https://api.polygon.io/v1/open-close/MSFT/2022-04-12?adjusted=true&apiKey=' + api_key;
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

    getNews = () =>{
        // Define function grab data from API
        var xmlHttp = new XMLHttpRequest();

        //AAPL Data Parse
        const AAPLdataURL = 'https://api.polygon.io/v2/reference/news?ticker=AAPL&limit=1&apiKey=' + api_key;
        xmlHttp.open( "GET", AAPLdataURL, false );
        xmlHttp.send( null );
        const AAPLdata = JSON.parse(xmlHttp.responseText);

        //Get Data from the parsed JSON such as news title and URL.
        // const AAPLdata = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "AAPL","volume": 26122646}')
         const AAPLNewsTitle = AAPLdata.results[0].title
         const AAPLNewsURL = AAPLdata.results[0].article_url
         const AAPLNewsPublisher = AAPLdata.results[0].publisher.name


        //repeat process for GOOGL and MSFT

        const GOOGLdataURL = 'https://api.polygon.io/v2/reference/news?ticker=GOOGL&limit=1&apiKey=' + api_key;
        xmlHttp.open( "GET", GOOGLdataURL, false );
        xmlHttp.send( null );
        const GOOGLdata = JSON.parse(xmlHttp.responseText);
        //const GOOGLdata = JSON.parse('{"afterHours": 326.1,"close": 325.12,"from": "2020-10-14T00:00:00.000Z","high": 326.2,"low": 322.3,"open": 324.66,"preMarket": 324.5,"status": "OK","symbol": "AAPL","volume": 26122646}')
        const GOOGLNewsTitle = GOOGLdata.results[0].title
        const GOOGLNewsURL = GOOGLdata.results[0].article_url
        const GOOGLNewsPublisher = GOOGLdata.results[0].publisher.name
        
        const MSFTdataURL = 'https://api.polygon.io/v2/reference/news?ticker=MSFT&limit=1&apiKey=' + api_key;
        xmlHttp.open( "GET", MSFTdataURL, false );
        xmlHttp.send( null );
        const MSFTdata = JSON.parse(xmlHttp.responseText);
        //const MSFTdata = JSON.parse('{"results":[{"id":"GORFZcRxxAuPK5cw8hab0WdYpWrQnJ9YN513SXDdoWI","publisher":{"name":"MarketWatch","homepage_url":"https://www.marketwatch.com/","logo_url":"https://s3.polygon.io/public/assets/news/logos/marketwatch.svg","favicon_url":"https://s3.polygon.io/public/assets/news/favicons/marketwatch.ico"},"title":"How much is Twitter worth? Elon Musk isn\'t the only one who could buy Twitter","author":"MarketWatch","published_utc":"2022-04-18T17:07:00Z","article_url":"https://www.marketwatch.com/story/if-musks-43-billion-twitter-deals-falls-apart-who-else-has-enough-money-to-buy-the-company-11649957650","tickers":["TWTR","AMZN","NKE","MSFT","ORCL","GOOG","GOOGL","CRM"],"amp_url":"https://www.marketwatch.com/amp/story/if-musks-43-billion-twitter-deals-falls-apart-who-else-has-enough-money-to-buy-the-company-11649957650","image_url":"https://images.mktw.net/im-517731/social","description":"Not many people have, or can secure, the funds required to acquire Twitter."}],"status":"OK","request_id":"6244469cc0ca27ce0ba49b0061978364","count":1,"next_url":"https://api.polygon.io/v2/reference/news?cursor=YXA9MjAyMi0wNC0xOFQxNyUzQTA3JTNBMDBaJmFzPUdPUkZaY1J4eEF1UEs1Y3c4aGFiMFdkWXBXclFuSjlZTjUxM1NYRGRvV0kmbGltaXQ9MSZvcmRlcj1kZXNjZW5kaW5nJnRpY2tlcj1NU0ZU"}');
        const MSFTNewsTitle = MSFTdata.results[0].title
        const MSFTNewsURL = MSFTdata.results[0].article_url
        const MSFTNewsPublisher = MSFTdata.results[0].publisher.name

        //set all data to the state, which will be passed to child components/component handler
        this.setState({AAPLNewsTitle: AAPLNewsTitle, AAPLNewsURL: AAPLNewsURL, AAPLNewsPublisher: AAPLNewsPublisher,
                       GOOGLNewsTitle: GOOGLNewsTitle, GOOGLNewsURL: GOOGLNewsURL, GOOGLNewsPublisher: GOOGLNewsPublisher,
                       MSFTNewsTitle: MSFTNewsTitle, MSFTNewsURL: MSFTNewsURL, MSFTNewsPublisher: MSFTNewsPublisher});
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
                <button className={bigPlayersStyle} onClick={() =>{this.setState({activeComponent:'bigplayers'})}}>Individual</button>
            </div>
            <div>
                <button onClick={this.getData}>Get Stock Data</button>
                <button onClick={this.getNews}>Get News</button>
            </div>
            {/* Sending active content state to the component handler in order to return the desired content*/}
            <div className='homeComponentContainer'>
            <ComponentHandler activeComponent={this.state.activeComponent} stockCategory={this.state.stockCategory} 
                AAPLPrice={this.state.AAPLStockPrice} AAPLDailyChange={this.state.AAPLDailyChange} AAPLPositive = {this.state.AAPLPositive} AAPLNewsTitle={this.state.AAPLNewsTitle} AAPLNewsURL={this.state.AAPLNewsURL} AAPLNewsPublisher={this.state.AAPLNewsPublisher}
                MSFTPrice={this.state.MSFTStockPrice} MSFTDailyChange={this.state.MSFTDailyChange} MSFTPositive = {this.state.MSFTPositive} MSFTNewsTitle={this.state.MSFTNewsTitle} MSFTNewsURL={this.state.MSFTNewsURL} MSFTNewsPublisher={this.state.MSFTNewsPublisher}
                GOOGLPrice={this.state.GOOGLStockPrice} GOOGLDailyChange={this.state.GOOGLDailyChange} GOOGLPositive = {this.state.GOOGLPositive} GOOGLNewsTitle={this.state.GOOGLNewsTitle} GOOGLNewsURL={this.state.GOOGLNewsURL} GOOGLNewsPublisher={this.state.GOOGLNewsPublisher}
                />
            </div>
        </div>

      </div>
      )
    }
  }