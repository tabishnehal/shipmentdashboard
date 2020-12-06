import React, { Component } from 'react';
import { Card } from "reactstrap";
import Home from './HomeComponent';
import Header from './HeaderComponent';
import ShipmentDetail from './ShipmentDetailComponent';
import LeftTimeLine from "./LeftTimelineComponent";
import axios from 'axios';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
        shipments: [],
        selectedShipment: 'DEL',
        selectedShipmentRow: '5d309ea2048c0a3321692de8',
    };
  }

  onShipmentSelect(shipmentId) {
    this.setState({ selectedShipment: shipmentId,
    });
  }

  onShipmentRowSelect(shipmentRowId) {
    this.setState({ selectedShipmentRow: shipmentRowId});
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
        <hr className="hrStyle"></hr>
        <Home shipments={this.state.shipments} onClick={(shipmentId) => this.onShipmentSelect(shipmentId)} />
        <div className="container-fluid">
            <div className="row row-content">
                <Card className="left-col col-12 col-md-4 mt-4 mb-4 ml-4">
                    <LeftTimeLine shipmentRow = {this.state.shipments.filter((shipmentRow) => shipmentRow._id === this.state.selectedShipmentRow)[0]} />
                </Card>
                <Card className="right-col col-12 col-md-7 ml-auto">
                    <ShipmentDetail shipments={this.state.shipments.filter((shipment) => shipment.current_status_code === this.state.selectedShipment)} 
                    onClick={(shipmentRowId) => this.onShipmentRowSelect(shipmentRowId)} />
                </Card>
            </div>
        </div>
      </div>
    );
  }
}

export default Main;