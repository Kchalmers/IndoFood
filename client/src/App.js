import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={list: []};
}
componentDidMount() {
       fetch('/list')
         .then(res => {
             return res.json()
          })
         .then(list => { 
             this.setState({ list })
          });
      }
render() {
     return (
         <div className="App">
           <h1>Warung PSI</h1>
           <h2>22 Augustus 2020</h2>
           <div className="foodList">
           <div className="row">
             {this.state.list.map((list,i) =>
              <div key={i} className="col-lg-3 col-sm-6 col-xs-12">
                      <div className="chef">Chef {list.chef_name}</div>
                      <div className="foodImg">
                          <img src={list.image_loc} alt=""/>
                      </div>
                      <div className="details">
                        <span className="foodName">{list.food_name} </span>
                        <span className="price">{list.food_price_descr}</span>
                        <div className="foodDescr">{list.food_descr}</div>
                      </div>
              </div>
           )}
           </div>
           </div>
         </div>
     );
 }
}
export default App;
