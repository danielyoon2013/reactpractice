import React from 'react';
import InnerComponent from './InnerComponent';
import {TradingViewChart} from '../../react-tradingview/index.js';


export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World!!!</h1>
        <InnerComponent />
        <TradingViewChart/>
      </div>)
      ;
  }
}
