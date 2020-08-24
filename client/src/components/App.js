import React, { Component } from 'react';

import FoodList from './FoodList/foodList';
import '../styles/app.css';

class App extends Component {
    render () {
        return (
            <div className="App">
                <h1>Warung PSI</h1>
                <h2>22 Augustus 2020</h2>
                <FoodList />
            </div>
        );
    }
}
export default App;
