import React, { Component } from 'react';
// import bb from "billboard.js";

class Chart extends Component {

  componentDidMount(){
    // bb.generate({
    //   data: {
    //     x: "x",
    //     columns: [
    //     ["x", "Dark Roast", "Pike Roast", "Blond Roast", "Cold Brew", "Americano", "Latte", "Coffee Frapuccino", "Flat White", "Green Tea Latte", "Chai Tea Latte", "Starbucks Refresher", "Iced Coffee", "Starbucks Doubleshot"],
    //     ["Tall", 193, 235, 270, 150, 150, 75, 70, 130, 55, 70, 45, 120, 150],
    //    ["Grande", 260, 310, 360, 200, 225, 150, 95, 195, 80, 95, 55, 165 ,225],
    //     ["Venti", 340, 410, 475, 300, 300, 150, 130, 195, 110, 120,75, 235, 375]
    //     ],
    //     colors: {
    //       Tall: "#F8E5D6",
    //       Grande: "	#D19E91",
    //       Venti: "	#442220"
    //     },
    //     type: "bar"
    //   },
    //   axis:{
    //     x: {
    //       type: "category",
    //       height: 100
    //     },
    //     y: {
    //       label: "Caffeine(mg)"
    //     }
    //   },
    //   legend: {
    //     position: "right"
    //   },
    //   bar: {
    //     width: {
    //       ratio: 0.5
    //     }
    //   },
    //   bindto: "#chart"
    // });
  }

  render() {
    return (
        <div id="chart">
        </div>
    );
  }
}

export default Chart;