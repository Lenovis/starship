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
        <table border="1">
          <tr>
            <td>Name</td><td>Model</td><td>Starship class</td><td>Manufacturer</td><td>Cost in credits</td><td>Length</td><td>Max atmosphering speed</td>
          <td>Crew</td><td>Passengers</td><td>Cargo capacity</td><td>Consumbles</td><td>Hyperdrive rating</td><td>MGLT</td>
          </tr>
            {ships.map(ship =>
            <tr key={ship.name}><td>{ship.name}</td>
            <td>{ship.model}</td>
          <td>{ship.starship_class}</td>
          <td>{ship.manufacturer}</td>
        <td>{ship.cost_in_credits}</td>
      <td>{ship.length}</td>
    <td>{ship.max_atmosphering_speed}</td>
  <td>{ship.crew}</td>
<td>{ship.passengers}</td>
            <td>{ship.cargo_capacity}</td>
          <td>{ship.consumables}</td>
        <td>{ship.hyperdrive_rating}</td>
      <td>{ship.MGLT}</td>
      </tr>
        )}
        </table>
      </div>
    );
  }
}

export default Ship;
