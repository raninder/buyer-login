import React from 'react';
import "./LandingEigthComp.css";
import CanvasJSReact from '@canvasjs/react-charts';
import 'toolcool-range-slider';
export default function LandingEigthComp() {
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        width:500,
        height:300,
        animationEnabled: true,
        subtitles: [{
            text: "$ 1568/month",
            verticalAlign: "center",
            fontSize: 30,
            dockInsidePlotArea: true,
        }],
        data: [{
            type: "doughnut",
            showInLegend: false,
            yValueFormatString: "#,###'%'",
            dataPoints: [
                {  y: 32, color:"#F5C34E"},
                {  y: 31, color:"#7731E4"},
                {  y: 10, color:"#497C92" },
                {  y: 17, color:"#111"},
            ]
        }]
    }
  return (
    <div className='landing-main8'>
      <span className='landing-main8-header'>Shared Ownership Affordability Calculator</span>
      <span className='landing-main8-about'>Find out how you can achieve your dream of owning a home. Enter your details below to see if you qualify for Shared Ownership. You don’t have to worry about calculating the costs, we’ll do it for you automatically.</span>
      <div className='main8-cobuyer-btn'>
         <span >Get Prequalified</span>
      </div>
      <div className='chart-wrapper'>
        <div className='chart-value-changer'>
           <div className='chart-value-wrapper'>
               <div className='chart-value-cont'>
                   <span className='chart-value-head'>Full Market Value</span>
                   <span className='chart-value'>$ 190000</span>
                </div>
                <toolcool-range-slider
                slider-width="400px"
                className="slider"
                 pointer-bg="#7731E4"
                 slider-bg-fill="#7731E4"
                 pointer-bg-focus="#7731E4"
                 pointer-width="10px"
                 pointer-height="10px"
                 min="0" 
                 max="200000"></toolcool-range-slider>
           </div>
           <div className='chart-value-wrapper'>
               <div className='chart-value-cont'>
                   <span className='chart-value-head'>Share Percentages</span>
                   <span className='chart-value'>$ 190000</span>
                </div>
                <toolcool-range-slider
                 slider-width="400px"
                 pointer-bg="#7731E4"
                 slider-bg-fill="#7731E4"
                 pointer-bg-focus="#7731E4"
                 pointer-width="10px"
                 pointer-height="10px"
                 min="0" 
                 max="200000"></toolcool-range-slider>
           </div>
           <div className='chart-value-wrapper'>
               <div className='chart-value-cont'>
                   <span className='chart-value-head'>Deposit Amount</span>
                   <span className='chart-value'>$ 190000</span>
                </div>
                <toolcool-range-slider
                 slider-width="400px"
                 pointer-bg="#7731E4"
                 slider-bg-fill="#7731E4"
                 pointer-bg-focus="#7731E4"
                 pointer-width="10px"
                 pointer-height="10px"
                 min="0" 
                 max="200000"></toolcool-range-slider>
           </div>
           <div className='chart-value-wrapper'>
               <div className='chart-value-cont'>
                   <span className='chart-value-head'>Mortgage Rate</span>
                   <span className='chart-value'>6.45%</span>
                </div>
                <toolcool-range-slider
                 slider-width="400px"
                 pointer-bg="#7731E4"
                 slider-bg-fill="#7731E4"
                 pointer-bg-focus="#7731E4"
                 pointer-width="10px"
                 pointer-height="10px"
                 min="0" 
                 max="7"></toolcool-range-slider>
           </div>
           <div className='chart-value-wrapper'>
               <div className='chart-value-cont'>
                   <span className='chart-value-head'>Amortization</span>
                   <span className='chart-value'>30 years</span>
                </div>
                <toolcool-range-slider
                 slider-width="400px"
                 pointer-bg="#7731E4"
                 slider-bg-fill="#7731E4"
                 pointer-bg-focus="#7731E4"
                 pointer-width="10px"
                 pointer-height="10px"
                 min="0" 
                 max="50"></toolcool-range-slider>
           </div>
        </div>
      <CanvasJSChart 
      options = {options}/>
      </div>
    </div>
  )
}