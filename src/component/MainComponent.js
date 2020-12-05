import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import ShipmentDetail from './ShipmentDetailComponent';
import axios from 'axios';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
        shipments: [],
        selectedShipment: null
    };
  }

  onShipmentSelect(shipmentId) {
    this.setState({ selectedShipment: shipmentId});
  }

  componentDidMount(){
      const token = "tTU3gFVUdP";
      const email = "m.nehal@iiitmanipur.ac.in";
      const headers = {
          'Authorization': `Bearer ${token}`
      };
          axios.post("https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",{email: email},
          {headers}
          ).then(res => this.setState({
              shipments: res.data
          }))
          .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
  }

  render() {
    return (
      <div>
        <Header />
        <Home shipments={this.state.shipments} onClick={(shipmentId) => this.onShipmentSelect(shipmentId)} />
        <ShipmentDetail shipments={this.state.shipments.filter((shipment) => shipment.current_status_code === this.state.selectedShipment)} />
      </div>
    );
  }
}

export default Main;