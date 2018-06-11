import React, { Component } from 'react';

class Ship extends Component {

  constructor(props){
    super(props);
    this.state = {
      ships: [],
    };
  }

  componentDidMount(){
    fetch('https://swapi.co/api/starships/')
    .then(response => response.json())
    .then(data => this.setState({ ships: data.results}));
  }

  render() {

    const { ships } = this.state;

    return (
      <div>
        <p>
            {ships.map(ship =>
            <div key={ship.name}>{ship.name}, {ship.model}</div>
        )}
        </p>
      </div>
    );
  }
}

export default Ship;
